const { Random } = require("@woowacourse/mission-utils");

function makeRandomNumber() {
  const computer = [];
  while (computer.length < 3) {
    const number = Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }

  return computer.join("");
}

module.exports = makeRandomNumber;
