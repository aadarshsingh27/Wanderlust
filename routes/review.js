const express = require("express");
const router = express.Router({mergeParams: true});

const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const wrapAsync = require("../utils/wrapAsync.js");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");
const { createReview, destroyReview } = require("../controller/review.js");



//Reviews
router.post("/", isLoggedIn , validateReview, wrapAsync (createReview));

//Delete reviews
router.delete("/:reviewId" , isLoggedIn , isReviewAuthor , wrapAsync(destroyReview));


module.exports = router;