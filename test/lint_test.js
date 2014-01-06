var grunt = require('grunt');

exports.yuidoc = {
  main: function(test) {
    'use strict';

    var expect, result, data;
    test.expect(1);

    expect = true;
    result = !grunt.file.exists('tmp/yuidoca') &&
      !grunt.file.exists('tmp/yuidocb') &&
      !grunt.file.exists('tmp/yuidocc');
    test.equal(result, expect, 'If linting source, no documentation should be produced.');

    test.done();
  }
};
