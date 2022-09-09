/*
npm - global command comes with Node
npm --version

local dependency - use it only in thi perticular project
npm i <packagename>

global dependency - use it in any project
npm install -g<packagename> [WINDOWS]
sudo npm install -g<packagename> [MAC]

package.json - minifest file - store important info about project/packages

manual approach - create package.json in the root, create proprties etc.

npm init- step by step, press enter to skip
npm init -y - everything default

*/

const _lodash = require('lodash');
const item = [1,[2, [3, [4]]]];
const newItems = _lodash.flattenDeep(item);
console.log(newItems);