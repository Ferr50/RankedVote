const router = require('express').Router();
const S3 = require('aws-sdk/clients/s3');
const s3 = new S3({ apiVersion: '2006-03-01' });
const limiters = require('../middleware/limiters');
const isCodeValid = require('../middleware/isCodeValid');

router.route('/first-check').get(limiters.speed, limiters.rate, isCodeValid, (req, res) => {
  res.send({ voterCode: req.body.voterCode, campaignName: req.body.campaignName });
});

module.exports = router;
