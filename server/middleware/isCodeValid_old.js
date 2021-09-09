const S3 = require('aws-sdk/clients/s3');
let s3 = new S3({ apiVersion: '2006-03-01' });
require('dotenv').config({ path: '../.env' });

const isCodeValid = (req, res, next) => {
  let params = {
    Bucket: 'rankedvote',
    Key: 'codes',
  };
  s3.getObject(params, function (err, data) {
    if (err) console.log(err, err.stack);
    else {
      if (JSON.parse(data.Body).includes(req.body.code)) {
        let params = {
          Bucket: 'rankedvote',
          Prefix: 'campaigns/' + req.body.campaign + '/votes/',
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

// const createBucket = () => {
//   let params = {
//     Bucket: 'rankedvote',
//     CreateBucketConfiguration: {
//       LocationConstraint: 'sa-east-1',
//     },
//   };

//   s3.createBucket(params, function (err, data) {
//     if (err) console.log(err, err.stack);
//     // an error occurred
//     else console.log(data); // successful response
//   });
// };
// createBucket();
