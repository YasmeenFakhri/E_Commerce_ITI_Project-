const { createCategory,
        updateCategory,
        deleteCategory,
        categoryControlller,
        singleCategoryController
      } = require('../controllers/categoryController');
const { requiresignin, adminAccess } = require('../middleware/authmiddleware')

const express = require('express');
const router = express.Router();

router.post('/create', requiresignin, adminAccess, createCategory);
router.put('/update/:id', requiresignin, adminAccess, updateCategory);
router.delete('/delete/:id', requiresignin, adminAccess, deleteCategory);
router.get('/all', categoryControlller);
router.get('/:slug', singleCategoryController);

module.exports = router;