function nonConstructibleChange(coins = []) {
  if (coins.length === 0) return 1;
  const sortedCoins = coins.sort((a, b) => a - b);
  let change = 0;

  sortedCoins.forEach((coin) => {
    if (coin > change + 1) return change + 1;
    change += coin;
  });

  return change + 1;
}

console.log(nonConstructibleChange([1, 1, 3]));
