function getPromocode(promocode) {
  const promocodeArr = [];
  while (promocode > 0) {
    promocodeArr.unshift(promocode % 10);
    promocode = Math.floor(promocode / 10);
  }

  let oddPairs = 0;
  let oddPairsArr = [];

  for (let i = 0; i < promocodeArr.length; i += 1) {
    if (
      oddPairs < 2 &&
      promocodeArr[i] % 2 > 0 &&
      promocodeArr[i + 1] % 2 > 0
    ) {
      if (i === 0 || Math.floor(promocodeArr[i - 1] % 2) === 0) {
        oddPairs += 1;
        oddPairsArr.push([promocodeArr[i], promocodeArr[i + 1]]);
        i += 1;
      }
    }
  }

  if (oddPairs >= 2 && oddPairsArr.every((el) => el[0] < el[1])) {
    return 2000;
  } else if (oddPairs >= 2) {
    return 1000;
  }

  let sumEven = 0;
  let sumOdd = 0;
  for (let i = 0; i < promocodeArr.length; i += 1) {
    if (Math.floor(promocodeArr[i] % 2) === 0) {
      sumEven += promocodeArr[i];
    } else if (Math.floor(promocodeArr[i] % 2) !== 0) {
      sumOdd += promocodeArr[i];
    }
  }

  if (sumEven > sumOdd) {
    return 100;
  } else return 0;
}
