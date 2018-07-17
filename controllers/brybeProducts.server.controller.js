var FlipkartFeed = require('../models/brybeProducts.server.model');

exports.create = function(req, res) {
    var entity = new FlipkartFeed({
        
    });
    entity.save();
    res.redirect( 301, '/'); 
};
