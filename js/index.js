const n = parseInt(prompt('Write the number you are interested in'));

const fibNumber = fib(n);
document.write(fibNumber);

function fib(n) {
  if (n <= 2) {
    return 1;
  }
  else {
    return fib(n - 1) + fib(n - 2);
  }
