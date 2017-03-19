module.exports = function(options) {
  // options.fn(this) = Handelbars content between {{#todate}} HERE {{/todate}}
  var asDate = new Date(Number(options.fn(this))).toDateString();
  return asDate;
}