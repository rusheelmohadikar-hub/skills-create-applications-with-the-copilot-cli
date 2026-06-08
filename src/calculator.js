#!/usr/bin/env node
// Node.js CLI Calculator
// Supported operations:
//  - add ("add" or "+")        : addition
//  - subtract ("subtract" or "-"): subtraction
//  - multiply ("multiply" or "*"): multiplication
//  - divide ("divide" or "/")    : division

// Exported functions for programmatic use
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero');
  }
  return a % b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  if (n < 0) {
    throw new Error('Square root of negative number');
  }
  return Math.sqrt(n);
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };

// CLI entrypoint: parse command and two numeric arguments
if (require.main === module) {
  const [cmd, aRaw, bRaw] = process.argv.slice(2);

  const usage = `Usage: node calculator.js <operation> <num1> <num2>\n
Supported operations: add(+), subtract(-), multiply(*), divide(/), modulo(%), power(^/pow), sqrt\n
Examples:\n  node calculator.js add 2 3      # 5\n  node calculator.js / 10 2       # 5\n  node calculator.js % 10 3       # 1\n  node calculator.js ^ 2 8        # 256\n  node calculator.js sqrt 9       # 3`;

  if (!cmd || aRaw === undefined || (bRaw === undefined && cmd.toLowerCase() !== 'sqrt')) {
    console.error('Error: operation and required numeric arguments are required.\n' + usage);
    process.exit(1);
  }

  const op = cmd.toLowerCase();

  let a;
  let b;
  if (op === 'sqrt') {
    a = Number(aRaw);
    if (Number.isNaN(a)) {
      console.error('Error: argument must be a valid number.\n' + usage);
      process.exit(1);
    }
  } else {
    a = Number(aRaw);
    b = Number(bRaw);
    if (Number.isNaN(a) || Number.isNaN(b)) {
      console.error('Error: both arguments must be valid numbers.\n' + usage);
      process.exit(1);
    }
  }
  try {
    let result;
    switch (op) {
      case 'add':
      case '+':
        result = add(a, b);
        break;
      case 'subtract':
      case '-':
        result = subtract(a, b);
        break;
      case 'multiply':
      case 'x':
      case '×':
      case '*':
        result = multiply(a, b);
        break;
      case 'divide':
      case '/':
      case '÷':
        if (b === 0) {
          console.error('Error: division by zero is not allowed.');
          process.exit(2);
        }
        result = divide(a, b);
        break;
      case '%':
      case 'mod':
      case 'modulo':
        if (b === 0) {
          console.error('Error: modulo by zero is not allowed.');
          process.exit(2);
        }
        result = modulo(a, b);
        break;
      case 'power':
      case 'pow':
      case '^':
        result = power(a, b);
        break;
      case 'sqrt':
        try {
          result = squareRoot(a);
        } catch (e) {
          console.error('Error: ' + e.message);
          process.exit(2);
        }
        break;
      default:
        console.error(`Error: unknown operation '${cmd}'.\n` + usage);
        process.exit(1);
    }

    // Print result to stdout
    // Keep output minimal for use in scripts
    console.log(result);
    process.exit(0);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(2);
  }
}
