const gifts = ['book', 'game', 'socks'];
function wrapping(gifts) {
  let regalos = [];
  for (let i = 0; i < gifts.length; i++) {
    let gift = gifts[i];
    let envol = '*'.repeat(gift.length + 2);

    regalos.push(`${envol}\n*${gift}*\n${envol}`);
  }
  return regalos;
}
const wrapped = wrapping(gifts);
console.log(wrapped);
