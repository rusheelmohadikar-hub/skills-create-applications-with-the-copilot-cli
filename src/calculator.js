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

module.exports = { add, subtract, multiply, divide };

// CLI entrypoint: parse command and two numeric arguments
if (require.main === module) {
  const [cmd, aRaw, bRaw] = process.argv.slice(2);

  const usage = `Usage: node calculator.js <operation> <num1> <num2>\n
Supported operations: add(+), subtract(-), multiply(*), divide(/)\n
Examples:\n  node calculator.js add 2 3      # 5\n  node calculator.js / 10 2       # 5`;

  if (!cmd || aRaw === undefined || bRaw === undefined) {
    console.error('Error: operation and two numeric arguments are required.\n' + usage);
    process.exit(1);
  }

  const a = Number(aRaw);
  const b = Number(bRaw);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    console.error('Error: both arguments must be valid numbers.\n' + usage);
    process.exit(1);
  }

  const op = cmd.toLowerCase();
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
