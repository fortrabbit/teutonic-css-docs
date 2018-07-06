# Welcome to the Teutonic CSS docs

This repo here (only) contains the website contents for https://teutonic.co, which is the documentation for Teutonic CSS. This is a static page thing, based on Jekyll, hosted on GitHub pages. The CSS for Teutonic CSS is over [here](https://github.com/fortrabbit/teutonic-css/).

## Quick contributing

Found a typo or an error? Just edit the Markdown and send a pull request.

## Development

Want to contribute and develop the main styles and the docs? This is how to run the build process locally. It will run two builds in parallel: on the one side, the doc pages (here) are getting generated by Jekyll and on the other side, the Gulp process that will compile the SCSS from the other folder.

1. Have Node & NPM (or yarn) installed
2. Have Ruby and Jekyll installed, best with **Bundler**
2. Have "Teutonic CSS" locally in a folder (on the same level as this docs folder)
3. Install Node dependencies from package.json: `npm install`
4. Run `bundle exec jekyll serve` (or `jekyll serve`)
5. And in a different terminal session run: `gulp`
6. Now you can edit the "Teutonic SCSS" files and the docs as well
7. The CSS changes will be loaded into the docs



## Data structure

* `docs` where the site is gonna be build.
 * All content lives in `_examples`.

## Component frontend metadata cheat sheet

```yml
title:        Hallowach     # will be rendered as headline
category:     typography    # which context?
fullscreen:   true          # full width or not?        OPTIONAL, default false
hide:         false         # Hide the whole thing?     OPTIONAL, default false
hideExample:  false         # Hide the example output?  OPTIONAL, default false
hideCode:     true          # Hide code example?        OPTIONAL, default false

description: >
  lrem inspun …             # below headline in paragraph, Markdown, OPTIONAL

syntax:       .box          # One or multiple syntax examples [ "asdasd", "dsdaasd"]

details: >
  lrem inspun …             # even more info …

scss:                       # SCSS files in use without filetype
  - 'box'
  - 'grid'

data:                       # dummy data to populate examples
  websites:
    4chan : http://www.4chan.org/
    A List Apart : https://alistapart.com
```

## Author

* [Frank Lämmer](https://twitter.com/frank_laemmer)


## License

Teutonic Docs are released under Creative Commons.