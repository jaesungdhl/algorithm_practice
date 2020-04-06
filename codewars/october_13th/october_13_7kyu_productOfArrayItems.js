Calculate the product of all elements in an array.

If the array is null or is empty, the function should return null.

function product(values) {
    return !values || !values.length ? null : values.reduce((a,n) => a *= n);
  }

  function product(values) {
    if (values === null || values.length === 0) return null;
    return values.reduce((acc, cur) => acc * cur, 1);
}