Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.

String.prototype.digit = function(){
    console.log(this.valueOf());
    let digitRegex = /\d/;
    return this.valueOf().length > 1 ? false : digitRegex.test(this.valueOf());
  }

  String.prototype.digit = function() {
    return /^\d$/.test(this);
  };