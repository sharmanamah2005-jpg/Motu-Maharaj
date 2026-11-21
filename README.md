Motu Maharaj — Restaurant Website
A responsive restaurant website for Motu Maharaj, based on the menu photo provided.
Project goals
Build a mobile-friendly website where customers can:
- View the restaurant menu, categories, and prices in Indian rupees (₹).
- Search menu items and filter by category.
- Add items to a cart and update quantities.
- Enter customer/contact and delivery details at checkout.
- Submit an order and receive an order confirmation.
- Contact the restaurant by phone or WhatsApp (configure the verified number before launch).
The restaurant owner/admin should eventually be able to manage menu items and review orders.
Suggested technology
- Frontend: HTML5, CSS3, JavaScript (responsive layout).
- Backend: Python + FastAPI.
- Database: MySQL, accessed using SQLAlchemy and PyMySQL.
- Configuration: environment variables stored in backend/.env (never commit secrets).
You can replace MySQL with another database if your project requirements change.
Suggested project structure
motu-maharaj-website/
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── app.js
├── backend/
│   ├── main.py
│   ├── database.py
│   ├── models.py
│   ├── schemas.py
│   ├── .env
│   └── requirements.txt
├── .gitignore
└── README.md
Features and requirements
Customer-facing website
1. Home/hero section with Motu Maharaj branding.
2. Menu section with category navigation:
   - Momos
   - Pan Fried Momos
   - Tandoori Momos
   - Snacks
   - Spring Rolls
   - Pasta
   - Pizza
   - Burger
   - Sandwich
   - Noodles
   - Chinese Main
   - Mumbai Chowk
   - Rolls
   - Specials
   - Soups
3. Menu cards showing item name, price, and an Add to Cart button.
4. Search and category filters.
5. Shopping cart with quantity controls, subtotal, and order total.
6. Checkout form for customer name, phone, address, and order notes.
7. Order confirmation with a unique order number.
8. Responsive design for mobile, tablet, and desktop.
9. Accessibility: readable contrast, labels for form fields, keyboard-friendly controls, and meaningful button text.
Backend/API
Suggested endpoints:
- GET /api/menu — list available menu items.
- GET /api/menu/{item_id} — retrieve one menu item.
- POST /api/orders — validate and create an order.
- GET /api/orders/{order_number} — retrieve an order status.
- Optional admin endpoints to create/update/delete menu items and update order status.
Validate all prices and item IDs on the server. Do not trust totals sent by the browser; calculate totals on the backend. Add authentication before exposing admin routes publicly.
Database tables
- menu_items: id, name, category, price, description, is_available, image_url.
- orders: id, order_number, customer_name, phone, address, notes, total_amount, status, created_at.
- order_items: id, order_id, menu_item_id, item_name_snapshot, quantity, unit_price.
Store a snapshot of the item name and price in each order item so old orders remain accurate if the menu changes later.
Menu transcription from the supplied photo
Prices below are transcribed from the photo and should be checked against the restaurant's current printed menu before publishing. Some text is obscured by glare or difficult to read.
Momos
- Veg momos steamed — ₹70
- Paneer momo steamed — ₹110
- Cheese corn momo steamed — ₹130
- Veg fry momo — ₹80
- Gravy momos — ₹120
- Kurkure veg momos — ₹120
- Creamy momos — ₹130
- Peri peri momos — ₹100
- Burnt garlic momos — ₹130
- Paneer momo fry — ₹130
- Cheese corn momo fry — ₹140
- Cheese corn kurkure momo — ₹150
- Paneer kurkure momo — ₹140
- Jhol momos — ₹150
- Devil momos — ₹180
Pan Fried Momos
The menu lists Veg / Paneer / Cheese Corn variants:
- Classic pan fried momos — ₹130 / ₹150 / ₹190
- Butter garlic momos — ₹150 / ₹190 / ₹200
- Chilli oil infused — ₹160 / ₹200 / ₹250
- Shanghai pan fried — ₹180 / ₹250 / ₹300
Tandoori Momos
The menu lists Veg / Paneer / Cheese Corn variants:
- Tandoori momos — ₹130 / ₹160 / ₹200
- Achari momos — ₹150 / ₹180 / ₹220
- Malai momos — ₹200 / ₹220 / ₹250
Snacks
- Chinese bhel — ₹100
- French fries — ₹100
- Peri peri fries — ₹120
- Chessy fries (menu spelling; verify) — ₹150
- Devil fries — ₹150
- Crispy corn — ₹150
Spring Rolls
- Spring rolls — ₹90
- Kurkure spring roll — ₹120
- Tandoori spring roll — ₹150
Pasta
- Red / Pink / White — ₹100 / ₹120 / ₹140
- Farmhouse pasta (cheddar cheese) — ₹170
Pizza
- Veg overloaded — ₹150
- Tandoori panner (likely “paneer”; verify) — ₹200
Burger
- Aloo tikki burger — ₹50
- Motu Maharaj noodle burger — ₹70
- Motu special cheese burger — ₹90
Sandwich
- Veg grilled sandwich — ₹100
- Veg grilled bhujia sandwich — ₹130
- Cheese corn sandwich — ₹150
- Mumbai masala sandwich — ₹160
- Tandoori paneer sandwich — ₹180
- Peri peri masala sandwich — ₹150
- Motu Maharaj special jumbo club sandwich — ₹200
Noodles
- Veg noodles — ₹90
- Hakka noodles — ₹100
- Chilli garlic noodles — ₹120
- Singapore noodles — ₹130
- Burnt garlic noodles — ₹150
- Schezwan noodles — ₹130
- Shanghai noodles — ₹170
- Devil noodles (specialty) — ₹200
Chinese Main
- Veg gravy Manchurian — ₹100
- Veg dry Manchurian — ₹120
- Chilli potato — ₹100
- Honey chilli potato — ₹120
- Veg fry rice — ₹100
- Schezwan fried rice — ₹120
- Noodles / fried rice combo — ₹150
- Noodle Manchurian mix — ₹160
- Panner chilli gravy (verify spelling) — ₹150
- Panner chilli dry (verify spelling) — ₹170
Mumbai Chowk
- Butter pav bhaji — price needs verification
- Cheese pav bhaji — price needs verification
- Extra pav — price needs verification
Rolls
- Paneer kathi roll — ₹120
- Tandoori paneer roll — ₹150
- Hangama roll — ₹100
Specials
- Volcano momos — ₹170
- Hangama noodles — ₹180
Soups
- Hot & sour — ₹100
- Manchow — ₹120
- Sweet corn — ₹120
Important: Several prices in the lower-right area of the photo are hidden by glare. Confirm the Mumbai Chowk prices and any uncertain spelling before publishing. Treat this transcription as starter content, not a verified official price list.
Setup
1. Create and activate a virtual environment
From the project root in PowerShell:
py -m venv .venv
.\.venv\Scripts\Activate.ps1
If py is not available, use your installed Python executable instead.
2. Install backend dependencies
pip install -r backend/requirements.txt
Copy the root requirements.txt into backend/requirements.txt, or run pip install -r requirements.txt from the root.
3. Configure MySQL
Create a MySQL database, for example:
CREATE DATABASE motu_maharaj;
Create backend/.env:
DB_HOST=localhost
DB_PORT=3306
DB_NAME=motu_maharaj
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
Use your own local database credentials. Do not share or commit this file.
4. Run the FastAPI backend
After creating backend/main.py and the database connection code:
cd backend
python -m uvicorn main:app --reload
Open http://127.0.0.1:8000/docs to view the interactive API documentation.
5. Run the frontend
For a simple static frontend, open frontend/index.html in a browser or use the VS Code Live Server extension. Configure the frontend API base URL to http://127.0.0.1:8000.
Security and launch checklist
- Keep database credentials in .env; add .env and .venv/ to .gitignore.
- Never store card details. Use a trusted payment provider if online payments are added.
- Validate order quantities, menu availability, and prices on the backend.
- Protect admin routes with authentication and role checks.
- Add rate limiting and sensible request validation before public deployment.
- Use HTTPS in production.
- Confirm the phone number and all menu prices with the restaurant.
- Test mobile layout, empty cart, invalid phone number, failed API requests, and successful checkout.
Notes
This README is the project brief and setup guide. The files listed in the suggested structure are not generated by this document; create the frontend and backend source files as the next development step.
