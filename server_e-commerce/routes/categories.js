const router = require('express').Router();
const controller = require('../controllers/categories')

router.get('/admin/', controller.find);
router.post('/admin/new', controller.add);
router.post('/admin/delete', controller.delete);
router.post('/admin/update', controller.update);


module.exports = router;