Install vc code, nodejs, typescript
npm -g install typescript


Install systemJS with loading modules
npm install --save systemjs@lastest

SystemJS:
individual files are loaded as needed
**Support ES6, so not working in IE11, need to include polyfill before SystemJS
<script src="node_modules/core-js/client/shim.min.js"></script>

// example import at top of file
import myModule from 'my-module'
myModule.doSomething()

// example dynamic import (could be placed anywhere in your code)
// module not loaded until code is hit
System.import('my-module').then((myModule) {
  // myModule is available here
  myModule.doSomething()
});


Webpack (used by Angular Cli)
prepares a single file called bundle.js, which contains all HTML, CSS, JS. The app may take a few seconds to load initially, once loaded and cached it is lightening fast.

> npm install // to install packages
> tsc //to complie .ts files
> npm start //to run lite-server
