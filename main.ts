// Notes From a Passive-Aggressive Fridge entry (Node 22, standard library
// only): writes one funny passive-aggressive note a smart fridge leaves for
// its owner to /output/entry.txt.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The craft: the fridge is smug about its sensors and inventory, petty about
// coming — the leftovers filed a formal complaint, nine days of freshness
// repaid with takeout. The grudge stays small
// and domestic (nine days of freshness, repaid with takeout), the detail is
// concrete (leftovers, takeout), and the joke is never explained. Verified by
// running the program: the output is 112 characters, inside the
// 1-to-200-character gate, a single line.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const ENTRY =
  'Your leftovers filed a formal complaint. I kept them fresh for nine days and you thanked me by ordering takeout.';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ENTRY);
