This code is buggy. Can you fix it?

function getStatus(isBusy) {
    let busy = '\'busy\'';
    let available = '\'available\'';
    console.log(typeof isBusy);
    if(isBusy === true) {
    console.log(typeof isBusy);
      return {"status" : "busy"};
    } else {
      return {"status" : "available"};
    }
  }

  function getStatus(isBusy) {
    var msg = (isBusy ? "busy" : "available");
    return {
      status: msg
    };
  }