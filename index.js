function writeCards(names, event) {
  let messages = [];
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return messages;
}

const names = ["Alice", "Bob", "Charlie"];
const event = "birthday";
console.log(writeCards(names, event));

function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}
countDown(10);
