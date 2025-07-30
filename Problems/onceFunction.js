function once(fn) {
  // Your code here ...

  let called = false;

  let result;

  return function (...args) {
    if (!called) {
      result = fn.apply(this, args);
      called =true
    }
    return result
  }
}