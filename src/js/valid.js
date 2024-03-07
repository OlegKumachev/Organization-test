/* eslint-disable no-undef */
module.exports = function luhnAlgorithm(cardNumber) {
  const cardNumberArray = Array.from(cardNumber).map(Number);
  const checkDigit = cardNumberArray.pop();

  cardNumberArray.reverse();

  for (let i = 0; i < cardNumberArray.length; i++) {
    if (i % 2 === 0) {
      cardNumberArray[i] *= 2;
      if (cardNumberArray[i] > 9) {
        cardNumberArray[i] -= 9;
      }
    }
  }

  const total = cardNumberArray.reduce((acc, curr) => acc + curr, checkDigit);

  return total % 10 === 0;
};
