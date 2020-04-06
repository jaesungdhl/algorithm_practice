Implement the function which should return true if given object is a vowel (meaning a, e, i, o, u), and false otherwise.

String.prototype.vowel = function() {
    return this.length == 1 ? /[aeiou]/i.test(this) : false;
  };

  String.prototype.vowel = function() {
    return /^[aeiou]$/i.test(this)
  }