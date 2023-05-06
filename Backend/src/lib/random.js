const random = () => {
  const LENGTH = 10;
  const SOURCE = "abcdefghijklmnopqrstuvwxyz01234567891234567890abcdefABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  for (let i = 0; i < LENGTH; i++) {
    result += SOURCE[Math.floor(Math.random() * SOURCE.length)];
  }
  return result
}

module.exports = random;
