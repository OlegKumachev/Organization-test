const puppeteer = require('puppeteer');

describe('Card validation functionality', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      // headless: false,
      // slowMo: 100,
      // devtools: true,
    });
  });

  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto('http://localhost:9000/');
  });

  afterEach(async () => {
    await page.close();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('Validating card number', async () => {
    await page.type('input[type="text"]', '5538300838605560');
    await page.click('.submit');
    await page.waitForSelector('#result');

    const resultText = await page.$eval('#result', (el) => el.textContent);

    expect(resultText).toBe('Valid');
  });

  test('Invalid card number', async () => {
    await page.type('input[type="text"]', '55383008386011544');
    await page.click('.submit');
    await page.waitForSelector('#result');

    const resultText = await page.$eval('#result', (el) => el.textContent);

    expect(resultText).toBe('Not valid');
  });
});
