module.exports = {
  getWhoAmI: function(req) {
    var result = {};
    result.ipaddress = req.get('x-forwarded-for') || req.connection.remoteAddress;
    result.language = req.get('accept-language').split(',')[0];
    result.software = req.get('user-agent').split('(')[1].split(')')[0];
    return result
  }
}
