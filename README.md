# Delta Kebab Customer Website V5 — Connected to JSON Backend

Frontend only. No backend or admin files included.

## Run

1. Start your existing fixed JSON backend on http://localhost:5000 (`npm run dev`).
2. In this customer folder run `npm install` and `npm run dev`.
3. Open http://localhost:5173.
4. Optional: copy `.env.example` to `.env` to customize VITE_API_URL.

## Integration

- GET /api/v1/restaurants — branch list
- GET /api/v1/restaurants/:id/products — products and prices for selected branch
- GET /api/v1/restaurants/:id/categories — categories
- GET /api/v1/restaurants/:id/customizations — option groups
- POST /api/v1/orders — checkout; server recalculates prices and notifies management via Socket.IO

Customer ordering does not require login. Customer order history on this device is not live order tracking.

## Changes in V5

- Clear branch-specific cart data when a different restaurant is selected.
- Handle invalid saved branch IDs.
- Clear customization modal when changing restaurants.
- Better backend validation and connection error messages.

Note: This is the original React/Vite customer website, not a plain HTML conversion. Styling remains unchanged.


## Customer navigation + configurator update (Nov 2026)
- Responsive hamburger navigation on smaller screens.
- Selected branch displayed in desktop header.
- Sticky category tabs and product cards with available size-price previews.
- Product popup includes image, required/optional choice counts, option price differences, and quantity-based total.
- Cart displays human-readable option names rather than database IDs.
- Existing branch selection, checkout, and API paths are preserved.

**Run:** `npm install`, copy `.env.example` to `.env` and configure `VITE_API_URL=http://localhost:5000`, then `npm run dev`. Open the URL printed by Vite.
**Important:** Product customization groups must be saved by the Admin Panel and available from `/api/v1/restaurants/:branchId/customizations`. Backend is not included in this customer-only package.
**Verification:** Source modifications inspected; a Vite production build could not be completed in this environment because package installation timed out. Run `npm install && npm run build` locally before deployment.
