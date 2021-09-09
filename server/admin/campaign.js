const router = require('express').Router();
const DDB = require('aws-sdk/clients/dynamodb');
const dynamodb = new DDB({ apiVersion: '2012-08-10', region: 'sa-east-1' });
const limiters = require('../middleware/limiters');
const codeGen = require('../middleware/codeGen');
require('dotenv').config({ path: '../.env' });

router.route('/create-campaign').post(limiters.speed, limiters.rate, (req, res) => {
  //
  codeGen(parseInt(req.body.campaign.numberOfVoters)).then((code) => {
    const params = {
      Item: {
        Campaign: {
          S: code.campaign,
        },
        Organization: {
          S: req.body.campaign.organization,
        },
        CampaignName: {
          S: req.body.campaign.campaignName,
        },
        NumberOfVoters: {
          N: req.body.campaign.numberOfVoters,
        },
        Codes: {
          SS: code.codes,
        },
        Options: {
          SS: req.body.campaign.options,
        },
        Type: {
          N: '1',
        },
      },
      ReturnConsumedCapacity: 'TOTAL',
      TableName: 'rankedvote',
      ConditionExpression: 'attribute_not_exists(Campaign)',
    };

    dynamodb.putItem(params, function (err, data) {
      if (err) {
        res.send({ error: err.code });
        console.log(err, err.stack);
      } else {
        console.log(data);
        res.send({ success: true, campaign: params.Item });
      }
    });
  });
});

router.route('/get-campaign').get(limiters.speed, limiters.rate, (req, res) => {
  //
  let campaign = req.headers.params.code.slice(0, 5);
  let voter = req.headers.params.code.slice(5);

  res.send({ campaign, voter });
});

module.exports = router;

// const createTable = () => {
//   const params = {
//     AttributeDefinitions: [
//       {
//         AttributeName: 'Campaign',
//         AttributeType: 'S',
//       },
//       {
//         AttributeName: 'Organization',
//         AttributeType: 'S',
//       },
//     ],
//     KeySchema: [
//       {
//         AttributeName: 'Campaign',
//         KeyType: 'HASH',
//       },
//     ],
//     TableName: 'rankedvote',
//     BillingMode: 'PAY_PER_REQUEST',
//     GlobalSecondaryIndexes: [
//       {
//         IndexName: 'Organization',
//         KeySchema: [
//           {
//             AttributeName: 'Organization',
//             KeyType: 'HASH',
//           },
//         ],
//         Projection: {
//           ProjectionType: 'ALL',
//         },
//       },
//     ],
//   };
//
//   dynamodb.createTable(params, function (err, data) {
//     if (err) console.log(err, err.stack);
//     else console.log(data);
//   });
// };
// createTable();
