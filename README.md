# grunt-contrib-yuidoc
> Compile YUIDoc Documentation (part of the [grunt-contrib](https://github.com/gruntjs/grunt-contrib) collection).  Submitted by [George Pantazis](https://github.com/gcpantazis).

## Getting Started
Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-contrib-yuidoc`

Then add this line to your project's `grunt.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-contrib-yuidoc');
```

[grunt]: https://github.com/cowboy/grunt
[getting_started]: https://github.com/cowboy/grunt/blob/master/docs/getting_started.md

### Overview

Inside your `grunt.js` file add a section named `yuidoc`. [Visit the YUIDoc project home](http://yui.github.com/yuidoc/) for more information on YUIDocs and commenting syntax.

#### Parameters

##### options ```object```

This controls how this task operates and should contain key:value pairs, see options below.

#### Options

Options correlate to [YUIDoc config objects](http://yui.github.com/yuidoc/args/index.html).

##### paths (required) ```string|array```

What directory should be scanned to generate doc data.

##### outdir (required) ```string```

Where to save the documentation.

#### Config Example

``` javascript
yuidoc: {
  compile: {
    "name": "Project Name",
    "description": "Project Description",
    "version": "1.0.2",
    "url": "http://projecturl.com/",
    options: {
      paths: "path/to/source/code/",
      outdir: "where/to/save/docs/"
    }
  }
}
```