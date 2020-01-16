# @vdegenne/caesar

caesar cryptographic module

# Usage

```javascript
const {encode} = require('@vdegenne/caesar');

const string = 'hello';
const offset = 3;

console.log(
  encode(string, offset) // "khoor"
);
```

### esm support

```javascript
import {encode} from '@vdegenne/caesar';
```

# Installation

```bash
npm install @vdegenne/caesar
```