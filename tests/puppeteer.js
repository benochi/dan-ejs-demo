// const puppeteer = require("puppeteer");
// require("../app");

// describe("Puppeteer Tests", function () {
//   let browser, page;

//   before(async function () {
//     this.timeout(10000); // Extend timeout
//     browser = await puppeteer.launch({ headless: true });
//     page = await browser.newPage();
//     await page.goto("http://localhost:3005"); 
//   });

//   after(async function () {
//     await browser.close();
//   });

//   describe("UI Tests", function () {
//     it("should find the login link and go to login page", async function () {
//       this.timeout(10000); 
//       const loginLink = await page.waitForSelector('a[href="/sessions/logon"]');
//       await loginLink.click();
//       await page.waitForNavigation();
//       const emailField = await page.waitForSelector('input[name="email"]');
//       const passwordField = await page.waitForSelector('input[name="password"]');
//       const submitButton = await page.waitForSelector('button[type="submit"]');
//       expect(emailField).to.not.be.null;
//       expect(passwordField).to.not.be.null;
//       expect(submitButton).to.not.be.null;
//     });

//     it("should log the user in", async function () {
//       this.timeout(10000); 
//       await page.type('input[name="email"]', 'your_test_email@example.com'); 
//       await page.type('input[name="password"]', 'your_test_password'); // 
//       await page.click('button[type="submit"]');
//       await page.waitForNavigation();

//       const loggedInText = await page.$eval("p", (el) => el.textContent);
//       expect(loggedInText).to.include("is logged on.");
//     });
//   });
// });
