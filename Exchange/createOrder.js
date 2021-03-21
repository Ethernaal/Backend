const axios = require("axios");

curl \
  --header "Content-Type: application/json" \
  --request PUT \
  --data '{"maker":"0xfb571f9da71d1ac33e069571bf5c67fadcff18e4",
            "make":{"type":{"token":"0x509fd4cdaa29be7b1fad251d8ea0fca2ca91eb60",
            "tokenId":{"value":19},
            "type":"ERC721"},
            "value":1
        },
    "take":{"type":{"type":"ETH"},
    "value":10000000000000000},
    "salt":1,
    "data":{"beneficiary":"0x0000000000000000000000000000000000000000","originFees":[],"version":"V1"},"signature":"0xb9062356b6311d3a6e520a17e8859fcc70a8aef90904efaa08d0bebc762ef02f3ea6df90a5ed98e4683493bda2b32244d6c3f8b31cd3cab139827d6fbd51b6b21b"}' \
  https://api-staging.rarible.com/protocol/ethereum/order/indexer/v1/orders
