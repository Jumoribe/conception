const router = require('express').Router();
const controller = require('../controllers/emails');

router.post("/sendContactEmail", controller.contactEmail);
router.post("/confirmationEmail", controller.confirmationEmail);

module.exports = router;