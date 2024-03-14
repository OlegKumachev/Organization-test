module.exports =  function luhnAlgorithm(cardNumber) {
    let cardNumberArray = Array.from(cardNumber).map(Number);
    let checkDigit = cardNumberArray.pop();

    cardNumberArray.reverse();

    for (let i = 0; i < cardNumberArray.length; i++) {
        if (i % 2 === 0) {
            cardNumberArray[i] *= 2;
            if (cardNumberArray[i] > 9) {
                cardNumberArray[i] -= 9;
            }
        }
    }

    let total = cardNumberArray.reduce((acc, curr) => acc + curr, checkDigit);

    return total % 10 === 0;
};
