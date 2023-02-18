// const sentence = "hello there from lighthouse labs";

// for (const char of sentence) {
//   setTimeout(() => {
//     process.stdout.write(char);// used instead of console.log -- allows char to be printed on the same line.
//   }, 1000)
  
// }

// to delay each element, we need an iterator and a base delay time.

const sentence = "hello there from lighthouse labs";
const delay = 50;

for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
    if (i === sentence.length - 1) {
      // add a newline character after printing the last letter
      process.stdout.write("\n");
    }
  }, i * delay);
}