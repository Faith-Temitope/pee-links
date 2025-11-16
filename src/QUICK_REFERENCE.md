# Quick Reference Card

## 🚀 Starting & Stopping

### Start the website:
```bash
npm run dev
```
Then open: http://localhost:5173

### Stop the website:
Press `Ctrl + C` in the terminal

---

## ✏️ Common Editing Tasks

### Add a New Product
**File:** `/data/products.js`

```javascript
{
  id: 51,  // Unique number
  name: "Your Product Name",
  category: "Televisions",
  manufacturer: "LG",
  price: 350000,
  image: "https://images.unsplash.com/photo-...?w=500",
  description: "Product description here",
  inStock: true,
  isUpcoming: false,
  rating: 4.5,
  reviews: 42
}
```

### Change Homepage Text
**File:** `/components/pages/Home.tsx`

Look for text between `>` and `<`:
```jsx
<h1>Quality Electronics & Appliances for Your Home</h1>
```

### Change Contact Information
**File:** `/components/Footer.tsx` and `/components/Header.tsx`

Search for:
- `0803 701 3940`
- `Lokoja-Ankpa Rd`
- `info@electromart.com`

### Add a Blog Post
**File:** `/data/products.js`

Find `blogPosts` array and add:
```javascript
{
  id: 5,  // Unique number
  title: "Your Blog Post Title",
  excerpt: "Short description...",
  image: "https://images.unsplash.com/photo-...?w=500",
  date: "2025-11-20",
  author: "Admin"
}
```

### Change Brand Colors
**Colors:** `#E4CF8B` (gold) and `#444C5E` (dark)

Use Find & Replace (Ctrl + H):
1. Find: `#E4CF8B`
2. Replace with: Your new color
3. Click "Replace All"

---

## 📂 Important Files

| File | Purpose |
|------|---------|
| `/data/products.js` | All products and blog posts |
| `/components/Header.tsx` | Top navigation bar |
| `/components/Footer.tsx` | Bottom footer |
| `/components/pages/Home.tsx` | Homepage content |
| `/components/pages/Shop.tsx` | Product catalog |
| `/components/pages/Cart.tsx` | Shopping cart |
| `/components/pages/Checkout.tsx` | Checkout process |
| `/App.tsx` | Main app setup (rarely edit) |

---

## 🎨 Categories Available

- Refrigerators
- Freezers
- Air Conditioners
- Microwave Ovens
- Blenders
- Electric Ovens
- Generators
- Televisions
- Washing Machines
- Fans
- Irons
- Coffee Makers
- Chandeliers
- Light Bulbs
- Solar Panels/Inverters/Batteries
- Electrical Tools
- Sockets & Switches
- Cables
- Ropes
- Transformers
- Furniture
- Wallpaper
- Water Dispensers
- Gas Cookers
- Vacuum Cleaners
- Sound Systems
- Dishwashers

---

## 🏷️ Manufacturers

- SCANFROST
- LG
- SKYRUN
- MAXI
- SONY
- RLISENSE
- BINATONE
- FIRMAN
- TCL

---

## 🌐 Website Pages

| URL | Page |
|-----|------|
| `/` | Home |
| `/shop` | All Products |
| `/shop?category=Refrigerators` | Category Filter |
| `/shop?manufacturer=LG` | Brand Filter |
| `/shop?search=microwave` | Search Results |
| `/shop?filter=upcoming` | Upcoming Products |
| `/product/1` | Product Detail |
| `/cart` | Shopping Cart |
| `/checkout` | Checkout |
| `/track-order` | Order Tracking |
| `/blog` | Blog |
| `/blog/1` | Blog Post |
| `/about` | About Us |
| `/contact` | Contact |

---

## ⌨️ Keyboard Shortcuts (VS Code)

| Shortcut | Action |
|----------|--------|
| `Ctrl + S` | Save file |
| `Ctrl + Z` | Undo |
| `Ctrl + Shift + Z` | Redo |
| `Ctrl + F` | Find in file |
| `Ctrl + H` | Find & Replace |
| `Ctrl + /` | Comment/Uncomment |
| `Ctrl + ~` | Open Terminal |
| `Ctrl + B` | Toggle Sidebar |

---

## ❌ Common Errors & Fixes

### Error: "npm is not recognized"
**Fix:** Install Node.js from https://nodejs.org/

### Error: "Cannot find module"
**Fix:** Run `npm install`

### Error: "Port 5173 is already in use"
**Fix:** Stop the old server (`Ctrl + C`) or change port

### Changes not showing
**Fix:** 
1. Save the file (`Ctrl + S`)
2. Check terminal for errors
3. Refresh browser (`Ctrl + R`)

### Website looks broken
**Fix:** 
1. Stop server (`Ctrl + C`)
2. Run `npm install`
3. Run `npm run dev`

---

## 📦 Product Object Properties

```javascript
{
  id: 1,                    // Unique number (required)
  name: "Product Name",     // Display name (required)
  category: "Category",     // Must match category list (required)
  manufacturer: "BRAND",    // Must match manufacturer list (required)
  price: 100000,           // Price in Naira (required)
  image: "URL",            // Image URL (required)
  description: "Text",     // Product description (required)
  inStock: true,           // true or false (required)
  isUpcoming: false,       // true or false (required)
  rating: 4.5,            // 0-5 stars (optional)
  reviews: 42             // Number of reviews (optional)
}
```

---

## 🎯 Quick Checklist Before Going Live

- [ ] Replace all placeholder images
- [ ] Update contact information
- [ ] Add real products
- [ ] Test all forms
- [ ] Test checkout process
- [ ] Test on mobile
- [ ] Check all links work
- [ ] Add real business logo
- [ ] Update About page content
- [ ] Add privacy policy (if needed)
- [ ] Test newsletter signup
- [ ] Verify map location is correct

---

## 💡 Pro Tips

1. **Always save before testing** - `Ctrl + S`
2. **Check terminal for errors** - Red text = error
3. **Test after every change** - Don't change too much at once
4. **Make backups** - Copy files before big changes
5. **Use descriptive names** - Makes finding things easier
6. **Comment your code** - Add notes for future you
7. **Start small** - Change one thing at a time
8. **Google errors** - Copy exact error message

---

## 📞 Store Info (Update These!)

**Current values:**
- Phone: `0803 701 3940`
- Email: `info@electromart.com`
- Address: `Lokoja-Ankpa Rd, Lokoja 260101, Kogi`

**Search and replace** these in:
- Header.tsx
- Footer.tsx
- Contact.tsx
- About.tsx

---

## 🔗 Useful Links

- **Node.js:** https://nodejs.org/
- **VS Code:** https://code.visualstudio.com/
- **React Docs:** https://react.dev/learn
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Unsplash (Images):** https://unsplash.com/

---

## 💾 Backup Your Work

Before making big changes:
1. Copy the entire project folder
2. Rename it with date (e.g., `electromart-backup-2025-11-16`)
3. Keep it safe!

Or use Git:
```bash
git init
git add .
git commit -m "Initial commit"
```

---

## 🚀 Deploy to Web (Free)

### Vercel (Recommended):
1. Go to https://vercel.com
2. Sign up (free)
3. Click "New Project"
4. Upload your folder
5. Click "Deploy"
6. Done! Get free URL

### Netlify:
1. Go to https://netlify.com
2. Sign up (free)
3. Drag & drop your folder
4. Done! Get free URL

---

Remember: **Save often, test frequently, backup regularly!** 🎉
