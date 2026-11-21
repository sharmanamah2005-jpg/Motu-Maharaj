from contextlib import asynccontextmanager
from datetime import datetime
from decimal import Decimal
from uuid import uuid4

from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from sqlalchemy import select, text
from sqlalchemy.orm import Session

from database import Base, engine, get_db
from models import MenuItem, Order, OrderItem


# Keep this list in exactly the same order as frontend/app.js.
MENU = [
    ("Veg momos steamed", "Momos", 70),
    ("Paneer momo steamed", "Momos", 110),
    ("Cheese corn momo steamed", "Momos", 130),
    ("Veg fry momo", "Momos", 80),
    ("Gravy momos", "Momos", 120),
    ("Kurkure veg momos", "Momos", 120),
    ("Creamy momos", "Momos", 130),
    ("Peri peri momos", "Momos", 100),
    ("Burnt garlic momos", "Momos", 130),
    ("Paneer momo fry", "Momos", 130),
    ("Cheese corn momo fry", "Momos", 140),
    ("Cheese corn kurkure momo", "Momos", 150),
    ("Paneer kurkure momo", "Momos", 140),
    ("Jhol momos", "Momos", 150),
    ("Devil momos", "Momos", 180),

    ("Classic pan fried momos - Veg", "Pan Fried Momos", 130),
    ("Classic pan fried momos - Paneer", "Pan Fried Momos", 150),
    ("Butter garlic momos", "Pan Fried Momos", 150),
    ("Chilli oil infused momos", "Pan Fried Momos", 160),
    ("Shanghai pan fried momos", "Pan Fried Momos", 180),

    ("Tandoori momos", "Tandoori Momos", 130),
    ("Achari momos", "Tandoori Momos", 150),
    ("Malai momos", "Tandoori Momos", 200),

    ("Chinese bhel", "Snacks", 100),
    ("French fries", "Snacks", 100),
    ("Peri peri fries", "Snacks", 120),
    ("Cheesy fries", "Snacks", 150),
    ("Devil fries", "Snacks", 150),
    ("Crispy corn", "Snacks", 150),

    ("Spring rolls", "Spring Rolls", 90),
    ("Kurkure spring roll", "Spring Rolls", 120),
    ("Tandoori spring roll", "Spring Rolls", 150),

    ("Red pasta", "Pasta", 100),
    ("Pink pasta", "Pasta", 120),
    ("White pasta", "Pasta", 140),
    ("Farmhouse pasta", "Pasta", 170),

    ("Veg overloaded pizza", "Pizza", 150),
    ("Tandoori paneer pizza", "Pizza", 200),

    ("Aloo tikki burger", "Burger", 50),
    ("Motu Maharaj noodle burger", "Burger", 70),
    ("Motu special cheese burger", "Burger", 90),

    ("Veg grilled sandwich", "Sandwich", 100),
    ("Veg grilled bhujia sandwich", "Sandwich", 130),
    ("Cheese corn sandwich", "Sandwich", 150),
    ("Mumbai masala sandwich", "Sandwich", 160),
    ("Tandoori paneer sandwich", "Sandwich", 180),
    ("Peri peri masala sandwich", "Sandwich", 150),
    ("Motu Maharaj jumbo club sandwich", "Sandwich", 200),

    ("Veg noodles", "Noodles", 90),
    ("Hakka noodles", "Noodles", 100),
    ("Chilli garlic noodles", "Noodles", 120),
    ("Singapore noodles", "Noodles", 130),
    ("Burnt garlic noodles", "Noodles", 150),
    ("Schezwan noodles", "Noodles", 130),
    ("Shanghai noodles", "Noodles", 170),
    ("Devil noodles", "Noodles", 200),

    ("Veg gravy Manchurian", "Chinese Main", 100),
    ("Veg dry Manchurian", "Chinese Main", 120),
    ("Chilli potato", "Chinese Main", 100),
    ("Honey chilli potato", "Chinese Main", 120),
    ("Veg fried rice", "Chinese Main", 100),
    ("Schezwan fried rice", "Chinese Main", 120),
    ("Noodles fried rice combo", "Chinese Main", 150),
    ("Noodle Manchurian mix", "Chinese Main", 160),
    ("Paneer chilli gravy", "Chinese Main", 150),
    ("Paneer chilli dry", "Chinese Main", 170),

    ("Paneer kathi roll", "Rolls", 120),
    ("Tandoori paneer roll", "Rolls", 150),
    ("Hangama roll", "Rolls", 100),

    ("Volcano momos", "Specials", 170),
    ("Hangama noodles", "Specials", 180),

    ("Hot and sour soup", "Soups", 100),
    ("Manchow soup", "Soups", 120),
    ("Sweet corn soup", "Soups", 120),
]


@asynccontextmanager
async def lifespan(app: FastAPI):
    Base.metadata.create_all(bind=engine)

    # Seed the menu only if the table is empty.
    with Session(engine) as db:
        first_item = db.scalar(
            select(MenuItem.id).limit(1)
        )

        if first_item is None:
            for name, category, price in MENU:
                db.add(
                    MenuItem(
                        name=name,
                        category=category,
                        price=Decimal(str(price)),
                        is_available=True
                    )
                )

            db.commit()

    yield


app = FastAPI(
    title="Motu Maharaj Restaurant API",
    description="Restaurant menu and online food ordering API",
    version="1.0.0",
    lifespan=lifespan
)


# Development configuration.
# Restrict this to your actual frontend origin before deployment.
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://127.0.0.1:5500",
        "http://localhost:5500",
        "http://127.0.0.1:8000",
        "http://localhost:8000",
        "null",
    ],
    allow_credentials=False,
    allow_methods=["GET", "POST"],
    allow_headers=["Content-Type"],
)


# Request schemas.

class OrderItemInput(BaseModel):
    menu_item_id: int = Field(gt=0)
    quantity: int = Field(ge=1, le=50)


class OrderCreate(BaseModel):
    customer_name: str = Field(min_length=2, max_length=100)
    phone: str = Field(min_length=10, max_length=16)
    address: str = Field(min_length=5, max_length=500)
    notes: str | None = Field(default=None, max_length=500)
    items: list[OrderItemInput] = Field(min_length=1, max_length=50)


@app.get("/")
def home():
    return {
        "message": "Welcome to Motu Maharaj API",
        "documentation": "/docs"
    }


@app.get("/api/health")
def health_check(db: Session = Depends(get_db)):
    db.execute(text("SELECT 1"))

    return {
        "status": "healthy",
        "database": "connected"
    }


@app.get("/api/menu")
def get_menu(db: Session = Depends(get_db)):
    items = db.scalars(
        select(MenuItem)
        .where(MenuItem.is_available.is_(True))
        .order_by(MenuItem.id)
    ).all()

    return [
        {
            "id": item.id,
            "name": item.name,
            "category": item.category,
            "price": float(item.price),
            "is_available": item.is_available
        }
        for item in items
    ]


@app.get("/api/menu/{item_id}")
def get_menu_item(
    item_id: int,
    db: Session = Depends(get_db)
):
    item = db.get(MenuItem, item_id)

    if item is None or not item.is_available:
        raise HTTPException(
            status_code=404,
            detail="Menu item not found"
        )

    return {
        "id": item.id,
        "name": item.name,
        "category": item.category,
        "price": float(item.price),
        "is_available": item.is_available
    }


@app.post("/api/orders", status_code=201)
def create_order(
    payload: OrderCreate,
    db: Session = Depends(get_db)
):
    requested_ids = {
        item.menu_item_id for item in payload.items
    }

    menu_items = db.scalars(
        select(MenuItem).where(
            MenuItem.id.in_(requested_ids),
            MenuItem.is_available.is_(True)
        )
    ).all()

    menu_by_id = {
        item.id: item for item in menu_items
    }

    if len(menu_by_id) != len(requested_ids):
        raise HTTPException(
            status_code=400,
            detail="One or more food items are unavailable"
        )

    total = Decimal("0.00")

    order = Order(
        order_number=(
            f"MM-{datetime.now().strftime('%y%m%d')}-"
            f"{uuid4().hex[:6].upper()}"
        ),
        customer_name=payload.customer_name.strip(),
        phone=payload.phone.strip(),
        address=payload.address.strip(),
        notes=(payload.notes or "").strip() or None,
        total_amount=Decimal("0.00"),
        status="pending"
    )

    for requested_item in payload.items:
        menu_item = menu_by_id[
            requested_item.menu_item_id
        ]

        unit_price = Decimal(str(menu_item.price))
        quantity = requested_item.quantity

        total += unit_price * quantity

        order.items.append(
            OrderItem(
                menu_item_id=menu_item.id,
                item_name=menu_item.name,
                quantity=quantity,
                unit_price=unit_price
            )
        )

    # Calculate the total using database prices.
    # Never trust the total submitted by the browser.
    order.total_amount = total

    try:
        db.add(order)
        db.commit()
        db.refresh(order)

    except Exception as exc:
        db.rollback()
        raise HTTPException(
            status_code=500,
            detail="Could not save your order"
        ) from exc

    return {
        "message": "Order placed successfully",
        "order_number": order.order_number,
        "total_amount": float(order.total_amount),
        "status": order.status
    }


@app.get("/api/orders/{order_number}")
def get_order(
    order_number: str,
    db: Session = Depends(get_db)
):
    order = db.scalar(
        select(Order).where(
            Order.order_number == order_number
        )
    )

    if order is None:
        raise HTTPException(
            status_code=404,
            detail="Order not found"
        )

    return {
        "order_number": order.order_number,
        "customer_name": order.customer_name,
        "total_amount": float(order.total_amount),
        "status": order.status,
        "created_at": (
            order.created_at.isoformat()
            if order.created_at else None
        ),
        "items": [
            {
                "name": item.item_name,
                "quantity": item.quantity,
                "unit_price": float(item.unit_price)
            }
            for item in order.items
        ]
    }