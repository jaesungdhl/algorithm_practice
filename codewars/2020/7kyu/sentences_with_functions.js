Implement all required functions in order to create the following sentences by calling those functions:

Adam(has(a(dog()))); // must return "Adam has a dog."
The(name(of(the(dog(is(also(Adam()))))))); // must return "The name of the dog is also Adam."

function Adam() { 
    return `Adam${arguments.length > 0 ? ` ${arguments[arguments.length - 1]}` : "."}`;
  }
  function has() {
    return `has${arguments.length > 0 ? ` ${arguments[arguments.length - 1]}` : ""}`;
  }
  function a() {
    return `a${arguments.length > 0 ? ` ${arguments[arguments.length - 1]}` : ""}`;
  }
  function dog() {
    return `dog${arguments.length > 0 ? ` ${arguments[arguments.length - 1]}` : "."}`;
  }
  function The() {
    return `The${arguments.length > 0 ? ` ${arguments[arguments.length - 1]}` : ""}`;
  }
  function name() {
    return `name${arguments.length > 0 ? ` ${arguments[arguments.length - 1]}` : ""}`;
  }
  function of() {
    return `of${arguments.length > 0 ? ` ${arguments[arguments.length - 1]}` : ""}`;
  }
  function the() {
    return `the${arguments.length > 0 ? ` ${arguments[arguments.length - 1]}` : ""}`;
  }
  function is() {
    return `is${arguments.length > 0 ? ` ${arguments[arguments.length - 1]}` : ""}`;
  }
  function also() {
    return `also${arguments.length > 0 ? ` ${arguments[arguments.length - 1]}` : ""}`;
  }

  function getName(args) {
    if (args.length==0) {return arguments.callee.caller.name +'.' }
       return arguments.callee.caller.name +' '+ args[0];
    };
    
    function Adam() {return getName(arguments)}
    function has() {return getName(arguments)}
    function a() {return getName(arguments)}
    function dog() {return getName(arguments)}
    function The() {return getName(arguments)}
    function name() {return getName(arguments)}
    function of() {return getName(arguments)}
    function the() {return getName(arguments)}
    function is() {return getName(arguments)}
    function also() {return getName(arguments)}