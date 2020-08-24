const chars = ['|', '/', '-', '\\', '|', '/', '-', '\\'];
let t = 100;

for (let char of chars) {
  t += 200;
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, t);
}

setTimeout(() => {
  process.stdout.write('\n');
}, t + 200);