args_count(1, 2, 3) -> 3
args_count(1, 2, 3, 10) -> 4

const args_count = (...args) => args.length;

function args_count() {
    return arguments.length;
  }