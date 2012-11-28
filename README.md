# grunt-contrib-yuidoc [![Build Status](https://secure.travis-ci.org/gruntjs/grunt-contrib-yuidoc.png?branch=master)](http://travis-ci.org/gruntjs/grunt-contrib-yuidoc)

> Compile YUIDoc Documentation.


## Getting Started
If you haven't used [grunt][] before, be sure to check out the [Getting Started][] guide, as it explains how to create a [gruntfile][Getting Started] as well as install and use grunt plugins. Once you're familiar with that process, install this plugin with this command:

```shell
npm install grunt-contrib-yuidoc --save-dev
```

[grunt]: http://gruntjs.com/
[Getting Started]: https://github.com/gruntjs/grunt/blob/devel/docs/getting_started.md


## Yuidoc task
_Run this task with the `grunt yuidoc` command._

_This task is a [multi task][] so any targets, files and options should be specified according to the [multi task][] documentation._
[multi task]: https://github.com/gruntjs/grunt/wiki/Configuring-tasks


[Visit the YUIDoc project home](http://yui.github.com/yuidoc/) for more information on YUIDocs and commenting syntax.

### Options

Settings mirror [YUIDoc config](http://yui.github.com/yuidoc/args/index.html).
### Usage Examples

```js
yuidoc: {
  pkg: grunt.file.readJSON('package.json'),
  compile: {
    name: '<%= pkg.name %>'
    description: '<%= pkg.description %>',
    version: '<%= pkg.version %>',
    url: '<%= pkg.homepage %>',
    options: {
      paths: 'path/to/source/code/',
      outdir: 'where/to/save/docs/'
    }
  }
}
```


## Release History

 * 2012-10-11   v0.3.2   Rename grunt-contrib-lib dep to grunt-lib-contrib.
 * 2012-09-30   v0.3.1   Project options are parsed as templates.
 * 2012-09-22   v0.3.0   Options no longer accepted from global config key.
 * 2012-09-09   v0.2.0   Refactored from grunt-contrib into individual repo.

---

Task submitted by [George Pantazis](http://georgepantazis.com/)

*This file was generated on Wed Nov 28 2012 08:50:12.*
