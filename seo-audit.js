// seo-audit.js

import { launch } from "chrome-launcher";
import lighthouse from "lighthouse";
import fs from "fs";

async function runLighthouse(url) {
  const chrome = await launch({ chromeFlags: ["--headless"] });

  const options = {
    logLevel: "info",
    output: "html",
    port: chrome.port,
  };

  const runnerResult = await lighthouse(url, options);

  // Save HTML report
  const reportHtml = runnerResult.report;
  fs.writeFileSync("lighthouse-report.html", reportHtml);

  // Log SEO score
  console.log(
    "Lighthouse SEO score:",
    runnerResult.lhr.categories.seo.score * 100
  );

  await chrome.kill();
}

const url = "http://localhost:3000";
runLighthouse(url).catch(console.error);
