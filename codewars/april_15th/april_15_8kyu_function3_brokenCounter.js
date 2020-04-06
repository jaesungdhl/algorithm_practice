Our counter prototype is broken. Can you spot, what's wrong here?

function Counter() {
    this.value = 0;
  }
  
  Counter.prototype = {
    increase : function(){this.value++;},
    getValue : function(){ return this.value;},
    reset : function(){this.value = 0;}
  };