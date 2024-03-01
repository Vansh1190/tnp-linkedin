import puppeteer from 'puppeteer-core';
import fs from "fs"

(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({headless: false
  ,
  executablePath:"C:/Program Files/Google/Chrome/Application/chrome.exe"
});
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto('https://in.linkedin.com/?src=go-pa&trk=sem-ga_campid.14650114788_asid.151761418307_crid.657403558715_kw.linkedin%20sign%20in_d.c_tid.kwd-18661251465_n.g_mt.e_geo.9300861&mcid=6844056167778418689&cid=&gad_source=1&gclid=EAIaIQobChMI4urTiYPMhAMVQ6JmAh0HQQhDEAAYASAAEgLsmPD_BwE&gclsrc=aw.ds');

  // Set screen size
  await page.setViewport({width: 1080, height: 1024});

  // Type into search box
  console.log(page)
  // await page.type('.devsite-search-field', 'automate beyond recorder');

  // Wait and click on first result
  // const searchResultSelector = '#a-powerful-web-span-stylecolor-var-chrome-primarymade-easierspan';
  // await page.waitForSelector(searchResultSelector);
  await page.waitForSelector('#session_key')
  await page.type('#session_key', "kumarvansh119@gmail.com")
  await page.type('#session_password', "kumar1190@")
  await page.click("[type=submit]")

  await page.waitForSelector('.search-global-typeahead__input')
  await page.type('.search-global-typeahead__input', "#tpo #gndec")
  await page.keyboard.press('Enter');
  // await page.click(searchResultSelector);

  // Locate the full title with a unique string
  const textSelector = await page.waitForSelector(
    '.search-results-container'
  );


  // const textSelector = await page.waitForSelector(
  //   '.search-results-container'
  // );


  const fullTitle = await textSelector?.evaluate(el => el.textContent);

  // Print the full title



  console.log('The title of this blog post is "%s".', fullTitle);

  fs.writeFileSync('fullTitle.txt', fullTitle, 'utf-8');


  // await browser.close();
})();