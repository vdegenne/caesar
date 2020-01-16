const lowercase_a = 97;
const lowercase_z = 122;
const UPPERCASE_A = 65;
const UPPERCASE_Z = 90;

export function encode(input, offset) {
  return Array.prototype.map
      .call(
          input,
          (char) => {
            let charcode = char.charCodeAt(0);

            // lowers
            if (charcode >= lowercase_a && charcode <= lowercase_z) {
              charcode += offset;

              while (charcode > lowercase_z) {
                charcode = (lowercase_a - 1) + (charcode - lowercase_z);
              }

              return String.fromCharCode(charcode);
            }

            // uppers
            if (charcode >= UPPERCASE_A && charcode <= UPPERCASE_Z) {
              charcode += offset;

              while (charcode > UPPERCASE_Z) {
                charcode = (UPPERCASE_A - 1) + (charcode - UPPERCASE_Z);
              }

              return String.fromCharCode(charcode);
            }

            // neithers
            return char;
          })
      .join('');
}

export function decode(input, offset) {
  return Array.prototype.map
      .call(
          input,
          (char) => {
            let charcode = char.charCodeAt(0);

            // lowers
            if (charcode >= lowercase_a && charcode <= lowercase_z) {
              charcode -= offset;

              while (charcode < lowercase_a) {
                charcode = (lowercase_z + 1) - (lowercase_a - charcode);
              }

              return String.fromCharCode(charcode);
            }

            // uppers
            if (charcode >= UPPERCASE_A && charcode <= UPPERCASE_Z) {
              charcode -= offset;

              while (charcode < UPPERCASE_A) {
                charcode = (UPPERCASE_Z + 1) - (UPPERCASE_A - charcode);
              }

              return String.fromCharCode(charcode);
            }

            // neithers
            return char;
          })
      .join('');
}

console.log(encode('hello', 3));