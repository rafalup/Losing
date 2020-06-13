const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
      width: 600,
      height: 690
    });

    // Navega até a pagina destino
    await page.goto('https://www.uffs.edu.br/campi/chapeco/restaurante_universitario');
    
    
    await page.evaluate(() => {
      document.querySelector("#content-core > div > span > p:nth-child(12)").scrollIntoView();

     
    });

    // Tira um Screenshot da página
    await page.screenshot({ path: 'example.png', });
    await browser.close();


})();
