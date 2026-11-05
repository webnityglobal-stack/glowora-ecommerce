# Glowora — Beauty & Self-care Store

A responsive multi-page beauty e-commerce frontend built with React, Vite and Tailwind CSS.

## Pages
- Home
- Shop (category filters, search and sorting)
- Product details
- Cart (quantity updates and subtotal)
- Wishlist
- Our Story
- Beauty Journal
- Contact

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite.

## Build for production
```bash
npm run build
npm run preview
```

## Project structure
```text
src/
  components/    Header, Footer, ProductCard, SectionHeading
  context/       StoreContext (cart + wishlist state)
  data/          Product and category data
  pages/         Home, Shop, ProductDetails, Cart, Wishlist, About, Journal, Contact
  App.jsx
  main.jsx
  index.css
```

## Notes
- Cart and wishlist are functional in-memory frontend demos; data resets on refresh.
- Checkout and contact form show demo confirmations. Connect your backend, payment gateway and email service before production.
- Product/lifestyle photography is loaded from Unsplash URLs and requires an internet connection.
- Replace the demo contact details and product copy with your business information.
