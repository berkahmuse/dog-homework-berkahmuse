import { mkdirSync, writeFileSync } from "node:fs";

// The dog's excuse, in the dog's own voice: the homework overreached
// (sit, stay AND long division), so the dog did what any professional
// would do — destroyed the evidence. No witnesses, no worksheet.
// Anchor: drand quicknet round 6670720, quoted before the first write.
const ENTRY =
  "The homework told me to sit, stay, AND do long division. I draw the line at maths \u2014 so I ate the evidence. No witnesses, no worksheet.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
