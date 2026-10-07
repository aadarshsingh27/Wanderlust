const express = require("express");
const router = express.Router();

const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const {isLoggedIn, isOwner , validateListing} = require("../middleware.js");
const { index, renderNewForm, showListing, createListing, renderEditForm, updateListing, destroyListing } = require("../controller/listing.js");

const multer = require("multer");
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });


//Index & Create route
router.route("/")
.get(wrapAsync(index))
.post(isLoggedIn , upload.single("listing[image]") , validateListing, wrapAsync(createListing));


//New route
router.get("/new",isLoggedIn, renderNewForm );

//Show , Update & Delete route
router.route("/:id")
.get(wrapAsync(showListing))
.put(isLoggedIn , isOwner , upload.single("listing[image]") , validateListing, wrapAsync(updateListing))
.delete(isLoggedIn , isOwner , wrapAsync(destroyListing));


//Edit route
router.get("/:id/edit",isLoggedIn , isOwner , wrapAsync(renderEditForm));


module.exports = router;