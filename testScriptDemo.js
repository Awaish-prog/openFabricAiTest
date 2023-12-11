import puppeteer from 'puppeteer';
import dappeteer from '@chainsafe/dappeteer';
import { expect } from 'chai';

describe('Empty prompt test', () => {
  let browser;
  let page;
  let metaMask;

  before(async () => {
    browser = await dappeteer.launch(puppeteer, { metamaskVersion: 'v11.6.2', defaultViewport: null });
    page = await browser.newPage();
    metaMask = await dappeteer.setupMetaMask(browser,{seed: "12 word seed..."});
  });

  after(async () => {
    await browser.close();
  });

  it('should show error message regarding empty prompt', async () => {
    const url = 'https://openfabric.dev/login';
    
    await page.goto(url);

    const loginButtonSelector = '.of-button__inner';
    const loginButton = await page.$(loginButtonSelector);
    expect(loginButton).to.not.be.null;
    await loginButton.click()

    const metamaskLoginButton = await page.$('#metamask-login-button');
    expect(metamaskLoginButton).to.not.be.null;
    await metamaskLoginButton.click()

    await page.waitForSelector('#metamask-extension-activated');

    await metaMask.sign()

    await page.waitForNavigation();

    await page.goto(`${url}/my-executions`);

    const artFabricSector = await page.$('.art-fabric-selector');
    expect(artFabricSector).to.not.be.null;
    await artFabricSector.click()

    const runButton = await page.$('#run-button');
    expect(runButton).to.not.be.null;
    await runButton.click()

    const errorMessageSelector = '.prompt-error-message';
    await page.waitForSelector(errorMessageSelector);

    const errorMessage = await page.$(errorMessageSelector);
    expect(errorMessage).to.not.be.null;
  });
});