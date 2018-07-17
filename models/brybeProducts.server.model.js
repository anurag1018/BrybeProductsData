var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var flipkartFeedSchema = new Schema({
    category: String,
    listingURL: String,
});

module.exports = mongoose.model('FlipkartFeed', flipkartFeedSchema);
