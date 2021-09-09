const S3 = require('aws-sdk/clients/s3');
const s3 = new S3({ apiVersion: '2006-03-01' });
require('dotenv').config({ path: '../.env' });

const isCodeValid = (req, res, next) => {
  let voterCode = req.headers.params.split('.').slice(1)[0];
  let campaign = req.headers.params.split('.').slice(0, 1)[0];

  req.body = { isCodeValid: true, voterCode: voterCode, campaignName: campaign };

  next();
};

module.exports = isCodeValid;
