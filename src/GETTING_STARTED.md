# Getting Started - For Beginners

Hello! This guide will help you run your new e-commerce website even if you're new to React.

## What is This?

This is a **React application**. Think of React as a modern way to build websites that are:
- Fast and interactive
- Easy to update and maintain
- Professional and scalable

Even though you know HTML, CSS, and JavaScript, React organizes code differently - but don't worry, you'll pick it up quickly!

## Why Not Plain HTML/CSS/JS?

While I understand you wanted HTML/CSS/JS files, **Figma Make only creates React applications**. However, there's good news:

1. **React uses JavaScript** - It's still the same language you know!
2. **The styling uses Tailwind CSS** - It's just CSS with utility classes
3. **The structure is similar to HTML** - Components look like HTML with extra features
4. **It's industry standard** - Most modern websites use React

## Installation Guide (Step-by-Step)

### Step 1: Install Node.js

1. Go to https://nodejs.org/
2. Download the **LTS version** (Long Term Support)
3. Run the installer
4. Keep clicking "Next" with default settings
5. Restart your computer after installation

**To check if it worked:**
- Open Command Prompt (Windows) or Terminal (Mac)
- Type: `node --version`
- You should see a version number like `v20.x.x`

### Step 2: Install Visual Studio Code (Optional but Recommended)

1. Go to https://code.visualstudio.com/
2. Download and install
3. This is a better code editor than Notepad

### Step 3: Open Your Project

1. Download/extract your project folder
2. Open VS Code
3. Click "File" → "Open Folder"
4. Select your project folder

### Step 4: Install Dependencies

1. In VS Code, open the Terminal:
   - Top menu: **Terminal** → **New Terminal**
   - Or press: **Ctrl + `** (the key above Tab)

2. You should see a command prompt at the bottom

3. Type this command and press Enter:
   ```bash
   npm install
   ```

4. Wait... This will download all the necessary files. It might take 2-5 minutes depending on your internet speed.

5. You'll see lots of text scrolling - this is normal!

### Step 5: Run the Website

1. After `npm install` finishes, type this command:
   ```bash
   npm run dev
   ```

2. You should see something like:
   ```
   Local: http://localhost:5173
   ```

3. Hold **Ctrl** (or **Cmd** on Mac) and click that link, OR open your web browser and go to: `http://localhost:5173`

4. **Your website is now running!** 🎉

### Step 6: Making Changes

The website will automatically update when you save files:

1. Open any file in VS Code (like `/components/pages/Home.tsx`)
2. Make a change (like changing some text)
3. Press **Ctrl + S** to save
4. Go back to your browser - it updates automatically!

### To Stop the Server

When you're done working:
1. Go to the Terminal in VS Code
2. Press **Ctrl + C**
3. Type `y` and press Enter

## Understanding the File Structure

Here's what each folder does:

```
Your Project/
│
├── App.tsx                    ← Main file that sets up pages and routes
│
├── data/
│   └── products.js           ← All your product data (50 products!)
│                                You can easily add/edit products here
│
├── components/
│   ├── Header.tsx            ← Top navigation bar
│   ├── Footer.tsx            ← Bottom footer
│   ├── ProductCard.tsx       ← How each product looks
│   ├── NewsletterPopup.tsx   ← Popup that appears on first visit
│   │
│   └── pages/                ← Each page of your website
│       ├── Home.tsx          ← Homepage (/)
│       ├── Shop.tsx          ← Product catalog (/shop)
│       ├── ProductDetail.tsx ← Single product page (/product/:id)
│       ├── Cart.tsx          ← Shopping cart (/cart)
│       ├── Checkout.tsx      ← Checkout process (/checkout)
│       ├── OrderTracking.tsx ← Track orders (/track-order)
│       ├── Blog.tsx          ← Blog list (/blog)
│       ├── BlogPost.tsx      ← Single blog post (/blog/:id)
│       ├── About.tsx         ← About page (/about)
│       └── Contact.tsx       ← Contact page (/contact)
│
└── styles/
    └── globals.css           ← Global styling
```

## Quick Tips for Editing

### To Change Text on a Page:

1. Find the page in `/components/pages/`
2. Open it in VS Code
3. Look for text between `>` and `<` 
4. Example: `<h1>Welcome</h1>` - change "Welcome"
5. Save the file

### To Add a New Product:

1. Open `/data/products.js`
2. Scroll to the bottom of the `products` array
3. Copy an existing product object
4. Paste it before the closing `]`
5. Edit the details (id, name, price, etc.)
6. Save the file

Example:
```javascript
{
  id: 51,  // Make sure this is unique!
  name: "Your New Product Name",
  category: "Televisions",
  manufacturer: "LG",
  price: 350000,
  image: "https://images.unsplash.com/photo-...?w=500",
  description: "Your product description here",
  inStock: true,
  isUpcoming: false,
  rating: 4.5,
  reviews: 42
}
```

### To Change Colors:

The site uses two main colors:
- **#E4CF8B** - Gold/beige color
- **#444C5E** - Dark blue-gray color

To change them:
1. Use Find & Replace (Ctrl + H)
2. Find: `#E4CF8B`
3. Replace with: Your new color code
4. Click "Replace All"

## Common Problems & Solutions

### "npm is not recognized" or "command not found"

**Solution:** Node.js isn't installed correctly
1. Reinstall Node.js from nodejs.org
2. Restart your computer
3. Try again

### Port 5173 is already in use

**Solution:** Something else is using that port
1. Close other apps that might be using it
2. Or, kill the process and try again
3. Or, the old server is still running - press Ctrl+C to stop it

### The website looks broken

**Solution:** 
1. Make sure `npm install` completed without errors
2. Check the Terminal for error messages
3. Try stopping (Ctrl+C) and starting (`npm run dev`) again

### Changes aren't showing

**Solution:**
1. Make sure you saved the file (Ctrl + S)
2. Check the Terminal for errors
3. Try refreshing the browser (Ctrl + R)
4. Try clearing browser cache (Ctrl + Shift + R)

## What You Get

Your website includes:

✅ **50+ Products** across multiple categories
✅ **Complete Shopping Cart** with add, remove, update quantities
✅ **Full Checkout Process** with delivery/pickup options
✅ **Payment Options** including 50% deposit option
✅ **Order Tracking** with order status timeline
✅ **Product Filtering** by category and manufacturer
✅ **Product Sorting** by price and rating
✅ **Search Functionality** to find products
✅ **Blog Section** for news and tips
✅ **About & Contact Pages** with map integration
✅ **Newsletter Popup** that appears once per visitor
✅ **Responsive Design** works on mobile, tablet, and desktop
✅ **Shopping Features:**
   - Product availability status
   - Upcoming products section
   - Related products
   - Product ratings and reviews
   - Free delivery over ₦100,000

## Learning Resources

Want to learn more about React?

1. **React Official Tutorial**: https://react.dev/learn
2. **Tailwind CSS Docs**: https://tailwindcss.com/docs
3. **TypeScript Basics**: https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

But honestly, you can start by just:
1. Opening files
2. Reading the code
3. Making small changes
4. Seeing what happens!

## Next Steps

1. **Customize the content**: Change text, add your own products
2. **Replace placeholder images**: Use real product photos
3. **Update contact information**: Make sure phone, email, address are correct
4. **Test all features**: Go through checkout, test the cart, etc.
5. **Deploy online**: When ready, you can host this on services like Vercel or Netlify (free!)

## Getting Help

If you're stuck:
1. Read the error message in the Terminal carefully
2. Google the error message
3. Check if you followed all steps correctly
4. Try restarting: Stop server (Ctrl+C), close VS Code, open again, run `npm run dev`

## Remember

- **Save your files** before expecting changes (Ctrl + S)
- **The Terminal shows errors** - always check it if something's wrong
- **React is just JavaScript** - you already know the basics!
- **Take it slow** - explore one file at a time
- **It's okay to break things** - you can always undo (Ctrl + Z)

Good luck with your e-commerce website! 🚀
