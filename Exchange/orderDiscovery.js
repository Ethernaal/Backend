const axios = require("axios");
var data = "";

orderDiscovery = (type) => {
  var config = {
    method: "post",
    url:
      "https://api-staging.rarible.com/protocol/ethereum/order/indexer/v0.1/orders/search",
    data: '{ "@type": "%s" }',
    type,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

orderDiscovery("sell");
