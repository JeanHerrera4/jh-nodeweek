'use strict';

module.exports.otronombre = async event => {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html"
    },
    body: '<html><body>hola nodeweek</body></html>'
    /*body: JSON.stringify(
      {
        message: 'Hola nodeweek!',
        input: event,
      },
      null,
      2
    ),*/
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
