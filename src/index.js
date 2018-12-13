const { load } = require('protobufjs');

function protobufLoader() {
  const callback = this.async();

  load(this.resourcePath, function(err, root) {
    if (err) return callback(err);
    callback(null, `module.exports = ${JSON.stringify(root)}`);
  });
}

module.exports = protobufLoader;
