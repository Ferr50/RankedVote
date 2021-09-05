const S3 = require('aws-sdk/clients/s3');
let s3 = new S3({ apiVersion: '2006-03-01' });
require('dotenv').config({ path: '../.env' });

const isCodeValid = (req, res, next) => {
  let params = {
    Bucket: 'edtech-votesystem',
    Key: 'codes',
  };
  s3.getObject(params, function (err, data) {
    if (err) console.log(err, err.stack);
    else {
      if (JSON.parse(data.Body).includes(req.body.code)) {
        let params = {
          Bucket: 'edtech-votesystem',
          Prefix: 'votes',
        };
        s3.listObjects(params, function (err, data) {
          if (err) console.log(err, err.stack);
          else {
            console.log(data);

            let aux = [];
            data.Contents.map((el) => {
              aux.push(el.Key);
            });

            if (!aux.includes('votes/' + req.body.code)) {
              next();
            } else {
              console.log({ error: true, msg: 'O CÓDIGO FORNECIDO É INVÁLIDO OU JÁ FOI UTILIZADO!' });
              res.send({ error: true, msg: 'O CÓDIGO FORNECIDO É INVÁLIDO OU JÁ FOI UTILIZADO!' });
            }
          }
        });
      } else {
        console.log({ error: true, msg: 'O CÓDIGO FORNECIDO É INVÁLIDO OU JÁ FOI UTILIZADO!' });
        res.send({ error: true, msg: 'O CÓDIGO FORNECIDO É INVÁLIDO OU JÁ FOI UTILIZADO!' });
      }
    }
  });
};
module.exports = isCodeValid;

// const crypto = require('crypto');
//
// const generateCodes = () => {
//   for (i = 0; i < 100; i++) {
//     crypto.randomBytes(3, (err, buf) => {
//       codes.push(buf.toString('hex'));
//     });
//   }
//   setTimeout(() => {
//     console.log(codes);
//   }, 5000);
// };
// generateCodes();
//
// const validCodes = [
//   'ee077f',
//   '16fbef',
//   '833b26',
//   '975e28',
//   '69d571',
//   '374307',
//   '0f0906',
//   'b31d63',
//   'e9b8c1',
//   '5b7646',
//   '4b0007',
//   'a8a057',
//   'e8de35',
//   '539303',
//   'aea70b',
//   '52790d',
//   '25869b',
//   'a2f072',
//   'fdc308',
//   'df3187',
//   '979f62',
//   'fb03dd',
//   '501fda',
//   'bcb98f',
//   '602760',
//   '4845d2',
//   'd8c927',
//   '79b12a',
//   'c3fdef',
//   '9a51b1',
//   'd29e73',
//   'a13c11',
//   '72b453',
//   'd4d4a5',
//   '1608b5',
//   '879574',
//   'bbf135',
//   '01b027',
//   'f73ae2',
//   '8a84e9',
//   'c85767',
//   'e64075',
//   '27d573',
//   '73d8a7',
//   '6e0a79',
//   '401678',
//   '509d7e',
//   '21e6c3',
//   'ea82eb',
//   'dd411d',
//   'f53e25',
//   '71e35f',
//   '6b4a35',
//   '4208b3',
//   '36b3f7',
//   '0b3d12',
//   '4e85f4',
//   'e67cb7',
//   '0f49e6',
//   'cc623d',
//   '6d89b4',
//   'ea0a02',
//   'ba9a31',
//   '07b82d',
//   '695daa',
//   '5591b1',
//   '34d2f2',
//   '5d2ce6',
//   '50f1eb',
//   '028439',
//   'b4b29d',
//   '726240',
//   '7246ac',
//   'e3320e',
//   'c45ef3',
//   '8292dd',
//   'be0c33',
//   '441ba5',
//   'ddb10d',
//   '7f8691',
//   '172995',
//   '5bc8db',
//   '6b46f4',
//   '273e63',
//   '197f08',
//   'a1cc2f',
//   '031ed1',
//   '7032b2',
//   'add55e',
//   'a1c5d9',
//   '99bfa6',
//   'ba42fc',
//   '5dac41',
//   '94902a',
//   'b4886d',
//   '863ab8',
//   'ebfdd3',
//   '662040',
//   '7183ca',
//   '7e3d3a',
// ];
//
// const createBucket = () => {
//   let params = {
//     Bucket: 'edtech-votesystem',
//     CreateBucketConfiguration: {
//       LocationConstraint: 'sa-east-1',
//     },
//   };
//
//   s3.createBucket(params, function (err, data) {
//     if (err) console.log(err, err.stack);
//     // an error occurred
//     else console.log(data); // successful response
//   });
// };
// createBucket();
//
// const putObject = () => {
//   let params = {
//     Body: JSON.stringify(validCodes),
//     Bucket: 'edtech-votesystem',
//     Key: 'codes',
//   };
//   s3.putObject(params, function (err, data) {
//     if (err) console.log(err, err.stack);
//     // an error occurred
//     else console.log(data); // successful response
//   });
// };

// putObject();
