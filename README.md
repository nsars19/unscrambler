<h1>Unscrambler</h1>

The unscrambler function takes a single String as an argument. It is recommended that a string with length no longer than 8 characters is used, as the run time is dramatically increased.

Running the function with a string argument will return an object with properties
'2 letters' up to 'n letters', where n is the length of the string. The value of each of these properties is an array that holds strings of the specified length. Before a string is placed in an array it is checked against a list of english-language words. Only existing words are placed in the array.

```js
const unscrambler = require('unscrambler)
// OR
import unscrambler from 'unscrambler

const scrambledEggs = unscrambler('eggs')
// scrambledEggs will equal...
{
  2 letters: [ 'es' ],
  3 letters: [ 'egg', 'seg' ],
  4 letters: [ 'eggs' ]
}
```
