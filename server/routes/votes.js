const express = require('express');
const router = express.Router();
const isCodeValid = require('../middleware/isCodeValid');
const limiters = require('../middleware/rateLimiters');
const S3 = require('aws-sdk/clients/s3');
let s3 = new S3({ apiVersion: '2006-03-01' });

router.route('/cast').post(limiters.speed, limiters.rate, isCodeValid, (req, res) => {
  let vote = { code: req.body.code, vote: req.body.vote };
  let params = {
    Body: JSON.stringify(vote),
    Bucket: 'edtech-votesystem',
    Key: 'votes/' + req.body.code,
  };
  s3.putObject(params, function (err, data) {
    if (err) console.log(err, err.stack);
    else {
      console.log(data);
      res.send({ success: true, msg: 'SEU VOTO FOI REGISTRADO COM SUCESSO!' });
    } // successful response
  });
});

router.route('/count').get(limiters.speed, limiters.rate, (req, res) => {
  let params = {
    Bucket: 'edtech-votesystem',
    Prefix: 'votes',
  };
  s3.listObjects(params, function (err, data) {
    if (err) console.log(err, err.stack);
    else {
      console.log(data);
    }
  });
});

module.exports = router;
