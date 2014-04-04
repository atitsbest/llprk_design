exports.config =
    # See http://brunch.io/#documentation for docs.
    modules:
        definition: false
        wrapper: false
    files:
        javascripts:
            joinTo:
                'js/app.js': /^app/
                'js/vendor.js': /^(bower_components|vendor)/
        stylesheets:
            joinTo:
                'css/app.css': /^app/
                'css/vendor.css': /^(bower_components|vendor)/
        templates:
            joinTo: 'app.js'
