const fs = require('fs');

function loadReport(path) {
  if (!fs.existsSync(path)) {
    console.error(`Report not found at path: ${path}`);
    process.exit(1);
  }
  const data = fs.readFileSync(path, 'utf8');
  return JSON.parse(data);
}

const appReportPath = './lhci-reports/app/report.json';
const keployReportPath = './lhci-reports/keploy.io/report.json';

const appReport = loadReport(appReportPath);
const keployReport = loadReport(keployReportPath);

const categories = ['performance', 'accessibility', 'best-practices', 'seo'];

let allPass = true;

categories.forEach(category => {
  const appScore = appReport.categories[category].score;
  const keployScore = keployReport.categories[category].score;
  console.log(`Comparing ${category}: App=${appScore} vs Keploy.io=${keployScore}`);
  if (appScore < keployScore) {
    console.error(`Score for ${category} is lower in the application (${appScore}) than Keploy.io (${keployScore})`);
    allPass = false;
  }
});

if (!allPass) {
  console.error('Lighthouse scores are lower than the baseline. Failing the CI job.');
  process.exit(1);
} else {
  console.log('All Lighthouse scores are equal or better than the baseline.');
}