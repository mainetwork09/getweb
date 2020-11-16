
const puppeteer = require('puppeteer');
const URL = `https://chonable.com`;
const configViewport = {
	width: 1440,
	height: 1024,
	deviceScaleFactor: 1,
};

(async () => {
	const browser = await puppeteer.launch({
		headless: true
	});
	console.log(`Launch Browser`);
	const page = await browser.newPage();
	await page.setViewport(configViewport);
	console.log(`Going to ${URL}`);
	await page.goto(URL);
	//await page.waitForNavigation();
	await page.screenshot({ path: `example.png` });
	await browser.close();
})();