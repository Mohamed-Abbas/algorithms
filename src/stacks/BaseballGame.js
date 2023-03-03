function baseballGame(operations = []) {
  const stack = [];
  for (let i = 0; i < operations.length; i++) {
    if (!isNaN(operations[i])) {
      stack.push(operations[i]);
    } else if (stack.length > 0) {
      switch (operations[i]) {
        case "C":
          stack.splice(stack.length - 1, 1);
          break;
        case "D":
          stack[stack.length] = Number(stack[stack.length - 1]) * 2;
          break;
        case "+":
          stack[stack.length] =
            Number(stack[stack.length - 1]) + Number(stack[stack.length - 2]);
          break;
        default:
          console.log("Invalid option");
          break;
      }
    }
  }

  return stack.reduce(
    (accumulator, currentValue) => accumulator + Number(currentValue),
    0
  );
}

console.log(BaseballGame(["5", "2", "C", "D", "+"]));
