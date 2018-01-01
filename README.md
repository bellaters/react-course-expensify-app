## GETTING STARTED:
* DO NOT MISS THE .babelrc at project root!
* To get the app running :
    1. Go to project root
    2. run ``` $ yarn add live-server babel-cli@6.24.1 ```

    3. * run ``` $ yarn run dev-server ``` for local developer mode
        * run ```$ yarn run build:prod ``` for prod mode

### RERUN dev-server whenever YOU EDIT 
        webpack.config.js

* To change your entry point of your app go to
        webpack.config.js and edit entry:  './src/app.js'


Goal of this app can be seen here:
http://expensify.mead.io/

Origin Source Code:
https://github.com/andrewjmead/react-course-2-indecision-app

#### To install a modul with yarn run from project root
 * ```$ yarn add <modulname/>@<version/>```
 * for example: ```$yarn add react-redux@5.0.5```

**->** modul will be installed and package.json will be adatpted.


#### Basics to get environment started
* https://code.visualstudio.com/docs/?dv=osx
* https://yarnpkg.com/lang/en/
* https://babeljs.io/

## Testing
To run your test cases run from project root
* ```$ yarn test```
* **NOTE:** you need to have installed ```jest```
* **NOTE:** your test files should be in ```src/tests``` and end with ```.test.js```
        
        $ yarn test --  --watch 
        Watch Usage
        › Press a to run all tests.
        › Press p to filter by a filename regex pattern.
        › Press t to filter by a test name regex pattern.
        › Press q to quit watch mode.
        › Press Enter to trigger a test run.

## Other Links:
### Additional stuff on top:
* https://reacttraining.com/react-router/
* https://github.com/reactjs/react-redux
* https://regex101.com/
* https://momentjs.com/
* https://github.com/airbnb/react-dates
