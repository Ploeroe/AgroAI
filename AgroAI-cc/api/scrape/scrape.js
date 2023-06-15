import cheerio from "cheerio";
import puppeteer from 'puppeteer';
import randomUseragent from 'random-useragent';

export const scrapeData = async (productName) => {
  const product = productName.replace(/ /g, "+");

  console.log(1);
  const url = `https://www.tokopedia.com/search?st=product&q=${product}`;
  const randomAgent = randomUseragent.getRandom();
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
    ],
  });
  console.log(2);

  const context = await browser.createIncognitoBrowserContext();
  const page = await context.newPage();
  await page.setJavaScriptEnabled(true);
  await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36");
  
  const domLoadedPromise = new Promise((resolve) => {
    page.once('load', resolve);
  });
  
    await page.goto(url, { waitUntil: 'networkidle0' });
    // await page.waitForSelector('[data-testid="master-product-card"]');
  await domLoadedPromise;


  const body = await page.evaluate(() => {
    return document.querySelector('body').innerHTML;
  });
  
  const $ = cheerio.load(body);
  const listItems = $('[data-testid="master-product-card"]');
  console.log(3);

  var result
  listItems.each(function (idx, el) {
    var nama = $('[data-testid="spnSRPProdName"]', el).text();
    var harga = $('[data-testid="spnSRPProdPrice"]', el).text();
    var image = $('[data-testid="imgSRPProdMain"]', el).attr("src");
    var link = $('a[href]', el).attr("href");
    if (harga != null && harga != "") {
        result = {
            "Treatment for": productName,
            "nama": nama,
            "harga": harga,
            "link": link,
            "image": image
          };

      return false
    }
    
  });

  console.log("Url: ", url);
  console.log("For This Product: ", productName);

  
  await browser.close();
  
  return result;
};