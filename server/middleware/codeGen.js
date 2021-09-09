const crypto = require('crypto');

const codeGen = async (amount) => {
  let campaign;
  let codes = [];

  for (let i = 0; i < amount; i++) {
    await new Promise((resolve) =>
      crypto.randomBytes(4, (err, buf) => {
        if (err) console.log(err);
        else {
          codes.push(buf.toString('hex'));
          resolve();
        }
      })
    );
  }

  await new Promise((resolve) =>
    crypto.randomBytes(3, (err, buf) => {
      if (err) console.log(err);
      else {
        campaign = buf.toString('hex');
        resolve();
      }
    })
  );

  return { campaign: campaign, codes: codes };
};

module.exports = codeGen;
