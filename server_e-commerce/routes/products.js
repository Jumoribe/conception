const router = require('express').Router();
const controller = require('../controllers/products')

router.get('/', controller.find);
router.get('/product/:id', controller.findone);
router.get('/products_by_category/:categoryID', controller.findByCategory);
router.get('/products_by_designer', controller.findByDesigner);
router.get('/products_in_bag/:ids', controller.shoppingBag),
router.post('/new', controller.add);
router.post('/update', controller.update);
router.post('/delete', controller.delete);
router.post('/remove_from_stock', controller.takingFromTheStock);
router.post('/purchase', controller.purchase);
router.get('/products_in_wishlist/:ids', controller.wishList);
router.get('/search/:description', controller.findByDescription);
module.exports = router;