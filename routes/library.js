const express = require('express');

const router = express.Router();
const libraryControllers = require('../controllers/library');

router.get('/', libraryControllers.getLibraryIndex);
router.get('/book/:id', libraryControllers.getBook);

router.get('/add-book', libraryControllers.getAddBook)
router.post('/add-book', libraryControllers.postAddBook);

module.exports = router;