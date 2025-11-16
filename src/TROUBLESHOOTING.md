# Troubleshooting Guide

Having issues? This guide will help you solve common problems.

## 🔴 Installation Issues

### Problem: "npm is not recognized" or "command not found"

**Cause:** Node.js is not installed or not in PATH

**Solution:**
1. Download Node.js from https://nodejs.org/
2. Install it (use default settings)
3. **Restart your computer** (important!)
4. Open a new terminal
5. Type: `node --version` - should show version number
6. If still not working, reinstall Node.js

---

### Problem: "npm install" fails with errors

**Cause:** Network issues, corrupted cache, or permission issues

**Solution 1 - Clear npm cache:**
```bash
npm cache clean --force
npm install
```

**Solution 2 - Delete and reinstall:**
```bash
# Delete node_modules folder and package-lock.json
# Then run:
npm install
```

**Solution 3 - Use different registry:**
```bash
npm install --registry https://registry.npmjs.org/
```

---

### Problem: "Permission denied" errors

**Cause:** Insufficient permissions

**Solution (Windows):**
- Run Command Prompt as Administrator
- Navigate to project folder
- Run `npm install`

**Solution (Mac/Linux):**
```bash
sudo npm install
```

---

## 🔴 Server/Runtime Issues

### Problem: "Port 5173 is already in use"

**Cause:** Old server still running or another app using the port

**Solution 1 - Stop old server:**
- Find the terminal running the server
- Press `Ctrl + C`
- Run `npm run dev` again

**Solution 2 - Kill the process (Windows):**
```bash
netstat -ano | findstr :5173
taskkill /PID [PID_NUMBER] /F
```

**Solution 3 - Kill the process (Mac/Linux):**
```bash
lsof -ti:5173 | xargs kill -9
```

**Solution 4 - Use different port:**
Edit `vite.config.ts` or `package.json` to use port 3000 instead

---

### Problem: Server starts but browser shows blank page

**Cause:** JavaScript errors or build issues

**Solution:**
1. Open browser console (F12)
2. Check for red errors
3. Look at terminal for error messages
4. Make sure all imports are correct
5. Try clearing browser cache (Ctrl + Shift + Delete)
6. Try hard refresh (Ctrl + Shift + R)

---

### Problem: "Module not found" error

**Cause:** Missing dependency or incorrect import path

**Solution:**
1. Check the import path is correct
2. Make sure file exists
3. Run `npm install` again
4. Restart the dev server

---

### Problem: Changes not appearing in browser

**Cause:** Browser cache or server not detecting changes

**Solution:**
1. **Save the file** (`Ctrl + S`) - most common issue!
2. Hard refresh browser (`Ctrl + Shift + R`)
3. Clear browser cache
4. Stop server (`Ctrl + C`) and restart (`npm run dev`)
5. Check terminal for errors

---

## 🔴 Code/Syntax Issues

### Problem: Syntax error after editing

**Cause:** Typo, missing bracket, or incorrect syntax

**Solution:**
1. Look at the error message in terminal
2. It shows the file and line number
3. Common issues:
   - Missing closing bracket `}`
   - Missing closing tag `</div>`
   - Missing comma in array/object
   - Quotes not matching `"` vs `'`
4. Use VS Code's syntax highlighting
5. Undo recent changes (`Ctrl + Z`)

---

### Problem: "Unexpected token" error

**Cause:** JSX syntax in wrong place or missing imports

**Solution:**
1. Make sure file has `.tsx` extension
2. Check all tags are closed
3. Make sure you imported React components
4. Check for stray characters

---

### Problem: TypeScript errors (red squiggly lines)

**Cause:** Type mismatch or incorrect types

**Solution:**
1. Many TypeScript errors won't prevent the app from running
2. If it's just a warning, you can ignore for now
3. To fix: hover over the error to see the issue
4. Common fix: add `any` type (not ideal but works)
5. Learn TypeScript gradually - not urgent

---

## 🔴 Display Issues

### Problem: Styles not applying

**Cause:** Incorrect Tailwind classes or CSS issues

**Solution:**
1. Check class names are spelled correctly
2. Make sure Tailwind CSS is installed
3. Check `globals.css` is imported in main file
4. Restart dev server
5. Clear browser cache

---

### Problem: Images not showing

**Cause:** Wrong image URL or CORS issues

**Solution:**
1. Check image URL is correct
2. Test URL in browser directly
3. Use Unsplash images (they work well)
4. For local images: put in `public` folder
5. Check internet connection

---

### Problem: Layout is broken on mobile

**Cause:** Missing responsive classes

**Solution:**
1. Test in browser's mobile view (F12, click phone icon)
2. Add responsive classes: `md:`, `lg:`, etc.
3. Check existing responsive classes aren't removed
4. Test on real mobile device

---

## 🔴 Data Issues

### Problem: Products not showing

**Cause:** Error in products.js file

**Solution:**
1. Open `/data/products.js`
2. Check for syntax errors:
   - Missing commas between objects
   - Missing closing brackets
   - Mismatched quotes
3. Validate JSON syntax
4. Check browser console for errors
5. Restart dev server

---

### Problem: Cart not working

**Cause:** localStorage issues or function errors

**Solution:**
1. Clear localStorage:
   - Open browser console (F12)
   - Type: `localStorage.clear()`
   - Refresh page
2. Check browser console for errors
3. Try different browser
4. Disable browser extensions (might block localStorage)

---

### Problem: Newsletter popup appears every time

**Cause:** localStorage not saving

**Solution:**
1. Check browser allows localStorage
2. Not in private/incognito mode
3. Clear localStorage and try again:
   ```javascript
   localStorage.removeItem('hasSeenNewsletter')
   ```
4. Check browser console for errors

---

## 🔴 Performance Issues

### Problem: Website is slow

**Cause:** Large images, too many products, or slow computer

**Solution:**
1. Optimize images (compress them)
2. Use WebP format for images
3. Reduce number of products shown per page
4. Add pagination
5. Use lazy loading for images

---

### Problem: Build takes forever

**Cause:** Large dependencies or slow computer

**Solution:**
1. Be patient - first build is always slow
2. Close other programs
3. Clear npm cache: `npm cache clean --force`
4. Delete node_modules and reinstall

---

## 🔴 Deployment Issues

### Problem: Build fails

**Cause:** Code errors or environment issues

**Solution:**
1. Run `npm run build` locally first
2. Fix any errors shown
3. Make sure all imports are correct
4. Check there are no console.log with objects (can cause issues)
5. Test the build locally: `npm run preview`

---

### Problem: Deployed site shows blank page

**Cause:** Routing issues or incorrect build configuration

**Solution:**
1. Check browser console for errors
2. For Vercel/Netlify: add `vercel.json` or `netlify.toml`
3. Make sure `dist` folder is being deployed
4. Check base path in vite config
5. Use hash router instead of browser router

---

## 🔴 Browser-Specific Issues

### Problem: Works in Chrome but not Safari/Firefox

**Cause:** Browser compatibility issues

**Solution:**
1. Check browser console for specific errors
2. Update browser to latest version
3. Avoid browser-specific features
4. Test in multiple browsers during development

---

### Problem: Console showing warnings

**Cause:** Various non-critical issues

**Solution:**
1. Yellow warnings are usually okay
2. Red errors need to be fixed
3. Common warnings:
   - "Key" prop warnings: add unique `key` to list items
   - Dependency array warnings: add missing dependencies
   - Accessibility warnings: add alt text, labels, etc.

---

## 🆘 Emergency Fixes

### Nothing Works - Nuclear Option:

```bash
# 1. Delete node_modules folder
# 2. Delete package-lock.json file
# 3. Close VS Code
# 4. Restart your computer
# 5. Open project in VS Code
# 6. Open terminal
# 7. Run these commands:

npm cache clean --force
npm install
npm run dev
```

### My Code is Broken and I Don't Know Why:

1. **Undo:** `Ctrl + Z` until it works again
2. **Restart:** Stop server, close VS Code, reopen, start server
3. **Restore Backup:** If you made a backup, use it
4. **Check Git:** If using Git, revert to last working commit
5. **Ask for Help:** Copy exact error message and Google it

---

## 🔍 How to Get Better Error Messages

### In VS Code:
1. Look at "Problems" tab at bottom
2. Shows errors with file and line number
3. Hover over red squiggly lines

### In Browser:
1. Press F12 to open Developer Tools
2. Go to "Console" tab
3. Red errors show the problem
4. Click the file name to see where error occurs

### In Terminal:
1. Read the error message carefully
2. Shows file path and line number
3. Google the error message
4. Stack trace shows where error originated

---

## 📚 Getting Help

### Before Asking for Help:

1. **Read the error message** - it usually tells you what's wrong
2. **Google the error** - copy exact error message
3. **Check this guide** - your issue might be here
4. **Check official docs** - React, Tailwind, etc.
5. **Try basic fixes** - restart, refresh, reinstall

### Where to Ask:

1. **Stack Overflow** - Best for technical questions
2. **React Discord/Reddit** - Active communities
3. **GitHub Issues** - If it's a package problem
4. **Developer Forums** - Various coding communities

### How to Ask:

1. **Describe the problem** - What you're trying to do
2. **Show the error** - Copy full error message
3. **Show your code** - The relevant part
4. **Say what you tried** - What solutions you attempted
5. **Include environment** - OS, Node version, browser

---

## ✅ Prevention Tips

1. **Save Often** - `Ctrl + S` becomes habit
2. **Test Frequently** - Check after each change
3. **Make Backups** - Before big changes
4. **Use Git** - Version control saves lives
5. **Read Errors** - Don't ignore warnings
6. **Learn Gradually** - Don't rush
7. **Keep Notes** - Document solutions you find
8. **Update Regularly** - Keep dependencies updated
9. **Use Linter** - Catches errors early
10. **Stay Calm** - Every developer faces errors!

---

## 🎓 Understanding Error Messages

### Common Error Patterns:

**"Cannot read property 'X' of undefined"**
- Something is undefined when you try to use it
- Check if variable exists before using
- Use optional chaining: `object?.property`

**"X is not a function"**
- Trying to call something that's not a function
- Check spelling
- Check if import is correct

**"Missing dependencies"**
- Package not installed
- Run `npm install package-name`

**"Failed to compile"**
- Syntax error in code
- Check line number shown
- Look for missing brackets, commas, etc.

---

Remember: **Every error is solvable!** Take a deep breath, read the error carefully, and work through it step by step. 🌟

If you're completely stuck, it's okay to ask for help or take a break and come back later with fresh eyes!
