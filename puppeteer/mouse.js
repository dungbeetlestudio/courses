const exe = 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe'

const puppeteer = require('puppeteer-core');
const fs = require("fs");

const ap = [
  ["614332022", "xfskyl6422"],
  ["1095559312", "lz899866"],
  ["2703849349", "xfskyl6422"],
  ["630260984", "as66946380"]
];

(async () => {
  const browser = await puppeteer.launch({ executablePath: exe, headless: false })
  const pages = await browser.pages()
  const page = pages[0]
  await page.goto('http://17mina.com/drawboard.php')

  var begin = { x: 300,y: 400 } // 开始
  var end = {x: 600,y:400 }       //结束

  await page.waitFor(500)
  await page.mouse.move(begin.x, begin.y)
  await page.waitFor(500)
  await page.mouse.down()
  await page.waitFor(500)
  await page.mouse.move(end.x - 5,end.y - 20)
  await page.waitFor(500)
  await page.mouse.move(end.x + 20,end.y - 10)
  await page.waitFor(500)
  await page.mouse.move(end.x - 5,end.y - 5)
  await page.mouse.move(end.x,end.y)
  await page.waitFor(500)
  await page.mouse.up()
})();