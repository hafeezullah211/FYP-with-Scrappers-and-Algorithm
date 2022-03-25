const express = require("express");
const { upload } = require("../common-middleware/common-middlewares");
const router = express.Router();
const { getProductsBySlug, searchProductByImage, getProductsByGenderAndEvent, addCategoriesAndEvents } = require("../controllers/product-controller");

router.get("/products/:slug", getProductsBySlug);
router.post("/addCategoriesAndEvents", addCategoriesAndEvents);

router.get("/products/:cat/:event", getProductsByGenderAndEvent);

router.post("/image-search",upload.single('queryImage'), searchProductByImage);

module.exports = router;
