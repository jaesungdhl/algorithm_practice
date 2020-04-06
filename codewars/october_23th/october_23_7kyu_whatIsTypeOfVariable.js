Create a function to return true type of variable, i.e.

type([]) => 'array'
type({}) => 'object'
type('') => 'string'
type(NaN) => 'number'

function type(value) {
    return (
      value === null ? 'null' :
      value === undefined ? "undefined" :
      value === NaN ? "number" :
      value.constructor.name.toLowerCase()
    )
  }

  function type(value) {
    return {}.toString.call(value).slice(8, -1).toLowerCase();
  }