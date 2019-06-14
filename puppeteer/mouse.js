const exe = 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe'

const puppeteer = require('puppeteer-core');
const fs = require("fs");

const ap = [
  ["517013400", "xfskyl6422"],
  ["614332022", "xfskyl6422"],
  ["1095559312", "lz899866"],
  ["2703849349", "xfskyl6422"],
  ["630260984", "as66946380"]
];

(async () => {
  const browser = await puppeteer.launch({ executablePath: exe, headless: false })
  const pages = await browser.pages()
  const page = pages[0]

  await page.goto('https://graph.qq.com/oauth2.0/show?which=Login&display=pc&client_id=100459398&response_type=code&redirect_uri=https%3A%2F%2Fstudy.163.com%2Fsns%2Fqq%2FoAuthCallback.htm%3FoauthType%3Dlogin%26returnUrl%3DaHR0cHM6Ly9zdHVkeS4xNjMuY29tLz9mcm9tPXN0dWR5%26nrsstcw%3Dfalse%26nc%3Dtrue')
  const f = page.frames()[1]

  await f.click('#switcher_plogin')
  await page.keyboard.type(ap[2][0])
  await f.click('#p')
  await page.keyboard.type(ap[2][1])
  await f.click('#login_button') //登陆

  try {
    for(i=0;;i++) {
      await f.waitFor(1000) //判断是否要验证码
      var verificationCode = await f.$('#slideBg')
      await verificationCode.screenshot({ path: `verifications-gather/${ap[1][0]}-${ap[1][1]}-${i}.png` })
      var refresh = await f.$('#e_reload')
      await refresh.click()
    }
  } catch(e) {

  }

  try {
    await f.waitFor(1000) //判断是否要验证码
    var qr = await f.$('#qrlogin_img')
    await qr.screenshot({ path: `limit-accounts/${ap[1][0]}-${ap[1][1]}.png` })
    await browser.close()
  } catch (e) { }

  var img = `verifications/qq-slide-${accout}.png`
  var txt = `verifications/qq-slide-${accout}.png.txt`
  var verificationCode = await f.$('#slideBg')
  await verificationCode.screenshot({ path: img })

  while (!fs.existsSync(txt)) await page.waitFor(1000)

  var point = JSON.parse(fs.readFileSync())
  var button = await f.$('#tcaptcha_drag_thumb')
  var bound = await button.boundingBox()
  var center = { x: bound.x + bound.width / 2, y: bound.y + bound.height / 2 }
  await page.mouse.down(center.x, center.y)
  await page.mouse.move(point.x - 5,point.y - 20)
  await page.mouse.move(point.x + 20,point.y - 10)
  await page.mouse.move(point.x - 5,point.y - 5)
  await page.mouse.up(point.x,point.y)

})();