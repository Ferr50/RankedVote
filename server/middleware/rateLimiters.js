const rateLimit = require('express-rate-limit');
const slowDown = require('express-slow-down');

const rate = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 10,
});

const speed = slowDown({
  windowMs: 5 * 60 * 1000,
  delayAfter: 2,
  delayMs: 500,
});

module.exports = {
  rate,
  speed,
};
