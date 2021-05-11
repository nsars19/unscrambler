<h1>Unscrambler</h1>

The unscrambler function takes a single String as an argument. It is recommended that a string with length no longer than 8 characters is used, as the run time is dramatically increased.

Running the function with a string argument will return an object with properties
'2 letters' up to 'n letters', where n is the length of the string. The value of each of these properties is an array that holds strings of the specified length. Each of these arrays has words with no vowels removed, as the vast majority of these are nonsense, and the likelihood of one of them being a word is slim. There is no filtering done besides this.

Passing in the string 'cats' will return the object: {
<br />'2 letters': [ 'ac', 'at', 'as', 'ta', 'sa' ],
'3 letters': [
'cas', 'cta', 'csa',
'act', 'acs', 'atc',
'ats', 'asc', 'ast',
'tca', 'tac', 'tas',
'tsa', 'sca', 'sac',
'sat', 'sta'
],
'4 letters': [
'cast', 'ctas', 'ctsa',
'csat', 'csta', 'acts',
'acst', 'atcs', 'atsc',
'asct', 'astc', 'tcas',
'tcsa', 'tacs', 'tasc',
'tsca', 'tsac', 'scat',
'scta', 'sact', 'satc',
'stca', 'stac'
]
}
