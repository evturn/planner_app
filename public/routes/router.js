var express = require('express'),
    app = express();
var router = express.Router();

router.get('/', function(req, res){
    res.render('pages/jade_templates/app')
})


module.exports = router;