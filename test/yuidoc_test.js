var grunt = require('grunt');

// TODO: ditch this when grunt v0.4 is released
var fs = require('fs');
var path = require('path');
grunt.file.exists = grunt.file.exists || fs.existsSync || path.existsSync;

exports['yuidoc'] = {
  main: function(test) {
    'use strict';

    var expect, result;
    test.expect(4);

    expect = true;
    result = grunt.file.exists('tmp/yuidoca/data.json');
    test.equal(result, expect, 'If provided with a string path, Should generate JSON from source code');

    expect = true;
    result = grunt.file.exists('tmp/yuidoca/index.html');
    test.equal(result, expect, 'If provided with a string path, Should create template files for viewing data.json');

    expect = true;
    result = grunt.file.exists('tmp/yuidocb/data.json');
    test.equal(result, expect, 'If provided with an array of paths, should generate JSON from source code');

    expect = true;
    result = grunt.file.exists('tmp/yuidocb/index.html');
    test.equal(result, expect, 'If provided with an array of paths, should create template files for viewing data.json');

    test.done();
  }
};