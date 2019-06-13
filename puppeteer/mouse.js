const exe = 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe'


const puppeteer = require('puppeteer-core');
const fs = require("fs");

(async () => {
  const browser = await puppeteer.launch({executablePath: exe,headless:false})
  const pages = await browser.pages()
  const page = pages[0]

  const accout = '614332022'
  const pwd = 'xfskyl6422'
  await page.goto('https://graph.qq.com/oauth2.0/show?which=Login&display=pc&client_id=100459398&response_type=code&redirect_uri=https%3A%2F%2Fstudy.163.com%2Fsns%2Fqq%2FoAuthCallback.htm%3FoauthType%3Dlogin%26returnUrl%3DaHR0cHM6Ly9zdHVkeS4xNjMuY29tLz9mcm9tPXN0dWR5%26nrsstcw%3Dfalse%26nc%3Dtrue')
  await page.mouse.click(246,362)
  await page.keyboard.type(accout)
  await page.mouse.click(217,246)
  await page.keyboard.type(pwd)
  //await page.mouse.click(200,308)

  // const img = `verifications/qq-slide-${accout}.png`
  // const txt = `verifications/qq-slide-${accout}.png.txt`
  // await page.screenshot({ path:img })

  // const point = JSON.parse(fs.readFileSync(txt))
  // await page.mouse.click(point.x,point.y)
})();