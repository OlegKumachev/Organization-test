/* eslint-disable no-undef */
const luhnAlgorithm = require("../valid.js");

describe("проверка карт", () => {
  const testCase = [
    {
      cart: "3566002020360505",
      expected: true,
    },
    {
      cart: "5538300838605560",
      expected: true,
    },
    {
      cart: "4024007123874108",
      expected: true,
    },
    {
      cart: "12346",
      expected: false,
    },
    {
      cart: "hfhhsss",
      expected: false,
    },
    {
      cart: "1de124 ",
      expected: false,
    },
  ];
  testCase.forEach((test) => {
    it(`входящие данные : ${test.cart} ожидаю: ${test.expected}`, () => {
      const result = luhnAlgorithm(test.cart);
      expect(result).toBe(test.expected);
    });
  });
});
