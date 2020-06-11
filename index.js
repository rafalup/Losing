const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    // Navega até a pagina destino
    await page.goto('https://www.uffs.edu.br/campi/chapeco/restaurante_universitario');
    await page.waitFor('#content-core > div > span > dl:nth-child(19) > dd');
    // Tira um Screenshot da página
    await page.screenshot({path: 'example.png'});
    await browser.close();
})();

