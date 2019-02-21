const express = require ('express')
router = express.Router(),
      isLoggedIn = require('../middlewares/isLoggedIn');


router.get('/', isLoggedIn, (req, res) => {
  console.log('======>>>>', req.user)
  res.status(200).send({text:'Welcome!!!!'})
});

module.exports = router;