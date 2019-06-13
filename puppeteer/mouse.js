const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({executablePath: '/usr/bin/chromium-browser',headless:false})
  const pages = await browser.pages()
  const page = pages[0]
  await page.goto('https://graph.qq.com/oauth2.0/show?which=Login&display=pc&client_id=100459398&response_type=code&redirect_uri=https%3A%2F%2Fstudy.163.com%2Fsns%2Fqq%2FoAuthCallback.htm%3FoauthType%3Dlogin%26returnUrl%3DaHR0cHM6Ly9zdHVkeS4xNjMuY29tLz9mcm9tPXN0dWR5%26nrsstcw%3Dfalse%26nc%3Dtrue')
  await page.mouse.click(246,362)
  await page.keyboard.type('517013400')
  await page.mouse.click(217,246)
  await page.keyboard.type('xfskyl6422')
  await page.mouse.click(200,308)

  const img = 'verifications/qq-slide-1.png'
  const txt = 'verifications/qq-slide-1.txt'
  await page.screenshot({path:img})

  //await page.mouse.click()
  //await browser.close();
})();