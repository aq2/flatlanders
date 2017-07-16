## consider imagemin, production, gulp-changed copyImages, concatJS, uglify

## consider publish/production which:
    minimises images
    purifyCSS - checks for unused css
    megalinting?

## consider usual workflow
    concatJS?
    ugligy
    copy images and minify if necess
  assume concatuglify works and run visual tests on /public

## so what's current (jul 16) workflow?
     write html, js and stylus in project root
     gulp handles file changes, styles
     browwser-sync does it's job on root

## new workflow 2
     write html, js and stylus in /src
     gulp handles file changes, moves into /public
     browser-sync does it's job on /public
     if any errors, easier to debug using browser-sync on /src

## new workflow 3?
     as above...
     image in src/imgs folder
     IF NEW, image-min, copy to public/img
     stop copyApp, but instead concat/uglify -> src/bundle.js

## eventually...
     run tests - on each save????
     git
     rsync to server - ftp is so 1994
     learn how to scp
     browserify - no more multiple <script> tag madness


## do i need different steps?
     during dev
     end of each day/session -> git
     ready to publish

# then...
     once i understand angular, move onto new hotness vue.js?
