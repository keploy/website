const fs = require('fs');
const path = require('path');

// Helper function to find a report file in a directory
function findReportFile(directory) {
  if (!fs.existsSync(directory)) {
    console.error(`Directory not found: ${directory}`);
    process.exit(1);
  }
  const files = fs.readdirSync(directory);
  const reportFile = files.find(file => file.endsWith('.report.json'));
  if (!reportFile) {
    console.error(`No report file found in directory: ${directory}`);
    process.exit(1);
  }
  return path.join(directory, reportFile);
}

function loadReport(path) {
  if (!fs.existsSync(path)) {
    console.error(`Report not found at path: ${path}`);
    process.exit(1);
  }
  const data = fs.readFileSync(path, 'utf8');
  return JSON.parse(data);
}

// Define directories where the reports are located
const appReportDirectory = './lhci-reports/app';
const keployReportDirectory = './lhci-reports/keploy.io';

// Find the report files dynamically
const appReportPath = findReportFile(appReportDirectory);
const keployReportPath = findReportFile(keployReportDirectory);

// Load the report JSON files
const appReport = loadReport(appReportPath);
const keployReport = loadReport(keployReportPath);

// Categories to compare
const categories = ['performance', 'accessibility', 'best-practices', 'seo'];

let allPass = true;

categories.forEach(category => {
  if (category != "best-practices"){
    const appScore = appReport.categories[category].score;
    const keployScore = keployReport.categories[category].score;
    console.log(`Comparing ${category}: App=${appScore} vs Keploy.io=${keployScore}`);
    if (appScore < keployScore) {
      console.error(`Score for ${category} is lower in the application (${appScore}) than Keploy.io (${keployScore})`);
      allPass = false;
    }
  }
});

if (!allPass) {
  console.error('Lighthouse scores are lower than the baseline. Failing the CI job.');
  process.exit(1);
} else {
  console.log('All Lighthouse scores are equal or better than the baseline.');
}