Apps LIVE to test
http://indecision.mead.io/

Origin Source Code:
https://github.com/andrewjmead/react-course-2-indecision-app


Other Links:
* https://code.visualstudio.com/docs/?dv=osx
* https://yarnpkg.com/lang/en/
* https://babeljs.io/

* DO NOT MISS THE .babelrc ant project root!

commands (when at project folder):
* to start live-server:
    live-server public
* to get live sync to live-server:
    babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
  change 'babel src/app.js' to 'babel src/newFile.js' if you want to present newFile at your live-server.
* when webpack is installed and configured you can use yarn to run several commands
    see shortcuts for scripts at 'webpack.config.js', for example:
        Isabels-Mac:indecision-app iwolters$ yarn run devServer


Use Browser with Developer tool enabled

Find all supported HTML Attributes of React at:
* https://reactjs.org/docs/dom-elements.html

For styling tasks:
* http://sass-lang.com/guide
* NOTE: you need to run for using sass:
    * yarn add style-loader@0.18.2 css-loader@0.28.4
    * yarn add sass-loader@6.0.6 node-sass@4.5.3 
* https://necolas.github.io/normalize.css/ to reset default styling of all browsers and make your css compatible for all of them 


