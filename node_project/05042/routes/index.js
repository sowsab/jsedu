const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('body', {title:'안녕, Express'});
});

module.exports = router;