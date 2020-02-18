import Animation from './Animation';
import Instrumentation from './Instrumentation';

const instr = new Instrumentation();

instr.test('test 0', Animation.animate(2, "..R...."), [
  "..x....",
  "....x..",
  "......x",
  "......."
]);

instr.test('test 1', Animation.animate(3, "RR..LRL"), [
  "xx..xxx",
  ".x.xx..",
  "x.....x",
  "......."
]);

instr.test('test 2', Animation.animate(2, "LRLR.LRLR"), [
  "xxxx.xxxx",
  "x..x.x..x",
  ".x.x.x.x.",
  ".x.....x.",
  "........."
]);

instr.test('test 3', Animation.animate(10, "RLRLRLRLRL"), [
  "xxxxxxxxxx",
  ".........."
]);

instr.test('test 4', Animation.animate(1, "..."), [
  "..."
]);

instr.test('test 5', Animation.animate(1, "LRRL.LR.LRR.R.LRRL."), [
  "xxxx.xx.xxx.x.xxxx.",
  "..xxx..x..xx.x..xx.",
  ".x.xx.x.x..xx.xx.xx",
  "x.x.xx...x.xxxxx..x",
  ".x..xxx...x..xx.x..",
  "x..x..xx.x.xx.xx.x.",
  "..x....xx..xx..xx.x",
  ".x.....xxxx..x..xx.",
  "x.....x..xx...x..xx",
  ".....x..x.xx...x..x",
  "....x..x...xx...x..",
  "...x..x.....xx...x.",
  "..x..x.......xx...x",
  ".x..x.........xx...",
  "x..x...........xx..",
  "..x.............xx.",
  ".x...............xx",
  "x.................x",
  "..................."
]);

instr.test('test 6', Animation.animate(1, "R......."), [
  "x.......",
  ".x......",
  "..x.....",
  "...x....",
  "....x...",
  ".....x..",
  "......x.",
  ".......x",
  "........"
]);

instr.test('test 7', Animation.animate(1, "R......L"), [
  "x......x",
  ".x....x.",
  "..x..x..",
  "...xx...",
  "...xx...",
  "..x..x..",
  ".x....x.",
  "x......x",
  "........"
]);

//print results and/or exit with exit(1) if any failures
instr.results();
