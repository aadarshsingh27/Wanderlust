# 🧭 Wanderlust - Full Stack Airbnb Clone

Wanderlust is a full-stack web application inspired by Airbnb. It enables users to explore, search, and book unique accommodations around the world, as well as host their own properties. The project features full CRUD operations, image uploads via Cloudinary, geolocation and interactive mapping using Mapbox, category filtering, search functionality, user authentication/authorization, and a review rating system.

---

## ✨ Features

- **🏠 Property Listings (CRUD)**: Create, view, edit, and delete property listings with image uploads, pricing, location details, and property categories.
- **🔍 Destination Search Bar**: Real-time keyword search across listing titles, locations, countries, descriptions, and categories.
- **🏷️ Category Filtering**: Filter properties by categories such as *Trending, Rooms, Iconic Cities, Mountains, Castles, Amazing Pools, Camping, Farms, Arctic, Domes, and Boats*.
- **🗺️ Interactive Maps & Geocoding**: Forward geocoding with the Mapbox API to display precise listing coordinates on interactive Mapbox GL maps.
- **🔐 User Authentication & Authorization**: Secure signup, login, and logout using Passport.js. Property modification and deletion are restricted strictly to the listing owner.
- **⭐ Reviews & Ratings**: Authenticated users can leave star ratings and comments. Review owners can delete their own reviews.
- **💡 Pricing Tax Toggle**: Interactive switch to toggle GST display on listing prices dynamically on the frontend.
- **📱 Responsive UI**: Fully responsive layout designed with Bootstrap 5 and custom CSS for seamless experience across mobile, tablet, and desktop devices.

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose ODM
- **Authentication**: Passport.js, Passport-Local, Express-Session, Connect-Flash
- **Templating Engine**: EJS, EJS-Mate (Layouts)
- **Validation**: Joi (Schema validation)
- **Cloud Storage**: Cloudinary (via `multer-storage-cloudinary` & `multer`)
- **Geolocation & Mapping**: Mapbox SDK (`@mapbox/mapbox-sdk`), Mapbox GL JS
- **Styling**: Bootstrap 5, FontAwesome, Custom CSS, Google Fonts (*Plus Jakarta Sans*)

---

## 📁 Project Structure

```text
Wanderlust/
├── cloudConfig.js         # Cloudinary configuration & Multer storage setup
├── app.js                 # Express server entry point & core middleware
├── schema.js              # Joi validation schemas for listings & reviews
├── middleware.js          # Authentication & authorization middlewares
├── controller/            # MVC Controller layer
│   ├── listing.js         # Listing route handlers (search, filter, CRUD)
│   ├── review.js          # Review creation & deletion handlers
│   └── user.js            # User signup, login, logout handlers
├── models/                # Mongoose Database Schemas
│   ├── listing.js         # Listing model (title, image, price, location, geometry, category, owner)
│   ├── review.js          # Review model (rating, comment, author)
│   └── user.js            # User model (passport-local-mongoose)
├── routes/                # Express Router endpoints
│   ├── listing.js         # Listing endpoints (/listings)
│   ├── review.js          # Review endpoints (/listings/:id/reviews)
│   └── user.js            # Authentication endpoints (/signup, /login, /logout)
├── init/                  # Database seeding & initial setup
│   ├── data.js            # Sample listings data
│   └── index.js           # Database initialization script
├── public/                # Static assets
│   ├── css/               # Style sheets (style.css, rating.css)
│   ├── js/                # Client-side JavaScript (map.js, script.js)
│   └── compass.svg        # Browser favicon
├── views/                 # EJS Templates
│   ├── includes/          # Reusable components (navbar, footer, flash)
│   ├── layouts/           # Master boilerplate template
│   ├── listings/          # Index, show, new, edit templates
│   └── users/             # Login & signup forms
├── utils/                 # Helper utilities (wrapAsync, ExpressError)
└── package.json           # Dependencies and scripts
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory and add the following keys:

```env
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
MAP_TOKEN=your_mapbox_public_access_token
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed (v16+ recommended)
- [MongoDB](https://www.mongodb.com/) installed and running locally or a MongoDB Atlas connection string.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/Wanderlust.git
   cd Wanderlust
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory as shown above.

4. **Initialize the Database**:
   Run the seeding script to populate sample listings:
   ```bash
   node init/index.js
   ```

5. **Run the Application**:
   ```bash
   npm start
   # or with nodemon for development:
   npx nodemon app.js
   ```

6. **Open in Browser**:
   Navigate to `http://localhost:8080/listings` in your web browser.

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).
