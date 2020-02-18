export default class Instrumentation {

  constructor() {

    this.numSuccesses = 0;
    this.numFailures = 0;

  }

  /**
   * @param {string} title
   * @param {array} result
   * @param {array} expected
   */
  test(title, result, expected) {

    console.log(title);
    console.log('---');
    console.log('result:');
    printArray(result);

    let comparison = compareArrays(result, expected);

    if (comparison === true) {

      this.numSuccesses++;

    } else {

      this.numFailures++;

    }

    console.log(comparison === true ? 'PASS' : `FAIL: ${comparison}`);
    console.log(' ');

  }

  results() {

    let numTests = this.numFailures + this.numSuccesses;

    console.log(`--------RESULTS--------`);
    console.log(`${this.numSuccesses} out of ${numTests} passed.`);

    if (this.numFailures) {

      return process.exit(1);

    }

  }

}

function printArray(arr) {

  let hr = ' ' + new Array(arr[0].length).fill('-').join('');

  console.log(hr);
  arr.map(row => console.log('|' + row + '|'));
  console.log(hr);

}

function compareArrays(res, exp) {

  if (!Array.isArray(res)) {

    return `result must be an array.`;

  }

  if (res.length !== exp.length) {

    return `array size mismatch. expected length(${exp.length}), got length(${res.length})`;

  }

  for (let i = 0; i < res.length; i++) {

    if (res[i] !== exp[i]) {

      return `mismatch on row ${i}: expected "${exp[i]}", got "${res[i]}"`;

    }

  }

  return true;

}
