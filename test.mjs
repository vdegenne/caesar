import {equal} from 'assert';

import {decode, encode} from './src/caesar';

const stringToTest = 'majestic';
const offsetToTest = 195;
const encoded = encode(stringToTest, offsetToTest);

equal(
    decode(encoded, offsetToTest),
    stringToTest,
    'test failed',
);

console.log('Test passed with success!');