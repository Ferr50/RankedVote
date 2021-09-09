const rateLimit = require('express-rate-limit');
const slowDown = require('express-slow-down');

const rate = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 15,
});

const speed = slowDown({
  windowMs: 5 * 60 * 1000,
  delayAfter: 3,
  delayMs: 300,
});

module.exports = {
  rate,
  speed,
};
