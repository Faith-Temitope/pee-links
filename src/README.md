# ElectroMart - E-Commerce Website

A comprehensive e-commerce website for electronics and appliances built with React, TypeScript, and Tailwind CSS.

## Brand Colors
- Primary: #E4CF8B (Gold/Beige)
- Secondary: #444C5E (Dark Blue-Gray)

## Features

✅ **Complete Product Catalog**
- Browse 50+ products across multiple categories
- Filter by category and manufacturer
- Sort by price and rating
- Search functionality
- Product availability status
- Upcoming products section

✅ **Shopping Experience**
- Add to cart functionality
- Cart management (update quantities, remove items)
- View cart summary with totals
- Responsive product cards with images

✅ **Checkout Process**
- Multi-step checkout (Delivery → Payment → Review)
- Choose delivery method (Home Delivery or Store Pickup)
- Payment options:
  - Full payment
  - 50% deposit (pay rest on delivery)
  - Multiple payment methods (Bank Transfer, Card, Cash)
- Order confirmation with order number

✅ **Order Tracking**
- Track orders with order number
- View order timeline and status
- Estimated delivery information

✅ **Blog Section**
- Blog posts with store news and tips
- Full blog post pages
- Related articles

✅ **Store Information**
- About page with store story
- Contact page with form
- Google Maps integration
- FAQ section
- Store location and hours

✅ **Additional Features**
- Newsletter popup on first visit
- Privacy policy checkbox
- Responsive header and footer
- Social media links
- Mobile-friendly navigation
- Free delivery on orders over ₦100,000

## How to Run This Application

### Prerequisites
1. Install **Node.js** from https://nodejs.org/ (download the LTS version)
2. Install a code editor like **Visual Studio Code** from https://code.visualstudio.com/

### Steps to Run

1. **Open the project folder** in Visual Studio Code

2. **Open the Terminal** in VSCode:
   - Go to menu: Terminal → New Terminal
   - Or press: `Ctrl + ~` (Windows/Linux) or `Cmd + ~` (Mac)

3. **Install dependencies** (only needed once):
   ```bash
   npm install
   ```
   This will download all the necessary packages. It may take a few minutes.

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser** and go to the URL shown in the terminal (usually http://localhost:5173)

6. **To stop the server**, press `Ctrl + C` in the terminal

### Project Structure

```
/
├── App.tsx                 # Main application file with routing
├── data/
│   └── products.js        # Product data (instead of API)
├── components/
│   ├── Header.tsx         # Site header with navigation
│   ├── Footer.tsx         # Site footer
│   ├── ProductCard.tsx    # Product display card
│   ├── NewsletterPopup.tsx # Newsletter subscription popup
│   └── pages/
│       ├── Home.tsx       # Homepage
│       ├── Shop.tsx       # Products catalog
│       ├── ProductDetail.tsx # Individual product page
│       ├── Cart.tsx       # Shopping cart
│       ├── Checkout.tsx   # Checkout process
│       ├── OrderTracking.tsx # Track orders
│       ├── Blog.tsx       # Blog listing
│       ├── BlogPost.tsx   # Single blog post
│       ├── About.tsx      # About page with map
│       └── Contact.tsx    # Contact page with form
└── styles/
    └── globals.css        # Global styles
```

## Store Information

**Address:** Lokoja-Ankpa Rd, Lokoja 260101, Kogi State, Nigeria  
**Phone:** 0803 701 3940  
**Email:** info@electromart.com

## Products Include

- Refrigerators & Freezers
- Air Conditioners
- Televisions
- Washing Machines
- Microwave Ovens
- Blenders
- Electric Ovens
- Generators
- Solar Panels & Systems
- Fans (Standing, Ceiling, Rechargeable)
- Irons
- Coffee Makers
- Chandeliers & Lighting
- Light Bulbs (LED, Smart)
- Electrical Tools (Pliers, Cables, Sockets, etc.)
- Transformers
- Furniture
- Wallpaper
- Water Dispensers
- Gas Cookers
- Vacuum Cleaners
- And more!

## Manufacturers/Brands

- SCANFROST
- LG
- SKYRUN
- MAXI
- SONY
- RLISENSE
- BINATONE
- FIRMAN
- TCL

## Making Changes

Since you're learning, here are some tips:

### To add a new product:
1. Open `/data/products.js`
2. Add a new product object to the `products` array
3. Save the file - the website will automatically update!

### To change colors:
The brand colors (#E4CF8B and #444C5E) are used throughout the site with inline styles. You can search for these values and replace them if needed.

### To modify text:
Just open the component file (e.g., `Home.tsx` for homepage) and edit the text directly.

## Need Help?

If you encounter any issues:
1. Make sure Node.js is installed correctly
2. Try deleting the `node_modules` folder and running `npm install` again
3. Make sure no other application is using port 5173
4. Check that you're in the correct folder when running commands

## Learning React

This project uses React, which is a popular JavaScript library. Key concepts:
- **Components**: Reusable pieces of UI (like Header, Footer, ProductCard)
- **Props**: Data passed to components
- **State**: Data that can change (like cart items)
- **Routing**: Navigation between pages

Don't worry if it seems complex at first - you'll learn as you explore and make changes!
