var protobuf = require('protobufjs');

function protobufLoader() {
  var callback = this.async();

  protobuf.load(this.resourcePath, function(err, root) {
    if (err) return callback(err);
    callback(null, `module.exports = ${JSON.stringify(root)}`);
  });
}

module.exports = protobufLoader;
