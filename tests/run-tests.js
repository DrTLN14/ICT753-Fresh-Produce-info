// Basic unit tests for key feature logic (prototype-level)
// Run with: node tests/run-tests.js

function assertEqual(actual, expected, message) {
  if (actual !== expected) {
    console.error(`❌ FAIL: ${message}\n   expected: ${expected}\n   actual:   ${actual}`);
    process.exitCode = 1;
  } else {
    console.log(`✅ PASS: ${message}`);
  }
}

// Example 1: Shelf-life label formatting (edit to match your project logic)
function formatShelfLife(days) {
  if (days <= 0) return "Expired";
  if (days === 1) return "1 day";
  return `${days} days`;
}

// Example 2: Scan result formatting (edit the output text to match your UI labels)
function formatScanResult(produceName, farm) {
  return `${produceName} - Source: ${farm}`;
}

// ---- Tests ----
assertEqual(formatShelfLife(5), "5 days", "Shelf-life: plural days");
assertEqual(formatShelfLife(1), "1 day", "Shelf-life: singular day");
assertEqual(formatShelfLife(0), "Expired", "Shelf-life: expired boundary");

assertEqual(
  formatScanResult("Apple", "Hill Farm"),
  "Apple - Source: Hill Farm",
  "Scan result formatting"
);

if (!process.exitCode) {
  console.log("\n🎉 All tests passed");
}
