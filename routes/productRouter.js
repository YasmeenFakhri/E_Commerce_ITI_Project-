
const { createProduct,getProductController,getSingleProductController
      ,deleteProductController ,updateProductController,
      productPhotoController , productFiltersController ,
      productCountController , productListController,
} = require('../controllers/productController');
const { requiresignin, adminAccess } = require('../middleware/authmiddleware')
const formidable = require('express-formidable');

const express = require('express');
const router = express.Router();

router.post('/create_product', requiresignin, adminAccess, formidable(), createProduct);
router.get('/get_product', getProductController);
router.get("/get-product/:slug", getSingleProductController);
router.delete("/delete-product/:pid", requiresignin, adminAccess, deleteProductController);
router.get("/product-photo/:pid", productPhotoController);
router.put(
    "/update-product/:pid",
    requiresignin,
    adminAccess,
    formidable(),
    updateProductController
  );

router.post("/product-filters", productFiltersController);


router.get("/product-count", productCountController);


router.get("/product-list/:page", productListController);




module.exports = router;