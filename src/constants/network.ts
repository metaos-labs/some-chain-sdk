export const ETH = "eth";
export const BSC = "bsc";
export const OEC = "oec";
export const HOO = "hoo";
export const XDAI = "xdai";
export const HECO = "heco";
export const POLYGON = "polygon";
export const FANTOM = "fantom";
export const KCC = "kcc";
export const AVALANCHE = "avalanche";
export const SOPHON = "sop";

export const ETH_CHAIN_NAME = "Ethereum";
export const BSC_CHAIN_NAME = "Binance Smart Chain";
export const OEC_CHAIN_NAME = "OKEx Chain";
export const HOO_CHAIN_NAME = "Hoo Smart Chain";
export const XDAI_CHAIN_NAME = "xDAI";
export const HECO_CHAIN_NAME = "Huobi ECO Chain";
export const POLYGON_CHAIN_NAME = "Polygon";
export const FANTOM_CHAIN_NAME = "Fantom";
export const KCC_CHAIN_NAME = "KCC";
export const AVALANCHE_CHAIN_NAME = "Avalanche";
export const SOPHON_TEST_CHAIN_NAME = "Sophon Dev";

export const ETH_NETWORK_ID = "1";
export const BSC_NETWORK_ID = "56";
export const BSC_NETWORK_TEST_ID = "97";
export const OEC_NETWORK_ID = "66";
export const HOO_NETWORK_ID = "70";
export const XDAI_NETWORK_ID = "100";
export const HECO_NETWORK_ID = "128";
export const POLYGON_NETWORK_ID = "137";
export const FANTOM_NETWORK_ID = "250";
export const KCC_NETWORK_ID = "321";
export const AVALANCHE_NETWORK_ID = "43114";
export const ETH_TEST_NETWORK_ID = "2117";
export const SOPHON_TEST_NETWORK_ID = "118";

export const ETH_CHAIN_ID = "0x1";
export const BSC_CHAIN_ID = "0x38";
export const BSC_CHAIN_ID_TEST = "0x61";
export const OEC_CHAIN_ID = "0x42";
export const HOO_CHAIN_ID = "0x46";
export const XDAI_CHAIN_ID = "0x64";
export const HECO_CHAIN_ID = "0x80";
export const POLYGON_CHAIN_ID = "0x89";
export const FANTOM_CHAIN_ID = "0xfa";
export const KCC_CHAIN_ID = "0x141";
export const AVALANCHE_CHAIN_ID = "0xa86a";
export const SOPHON_TEST_CHAIN_ID = "sophond_9000-1";

export const ETH_SYMBOL = "ETH";
export const BNB_SYMBOL = "BNB";
export const OKT_SYMBOL = "OKT";
export const HOO_SYMBOL = "HOO";
export const XDAI_SYMBOL = "XDAI";
export const HT_SYMBOL = "HT";
export const POLYGON_SYMBOL = "MATIC";
export const FANTOM_SYMBOL = "FTM";
export const KCC_SYMBOL = "KCS";
export const AVALANCHE_SYMBOL = "AVAX";
export const SOPHON_SYMBOL = "SOP";

export const SUPPORTED_CHAIN_IDS = [ETH_NETWORK_ID, SOPHON_TEST_NETWORK_ID];

export const NETWORK_MAP = {
  [ETH_NETWORK_ID]: {
    networkId: ETH_NETWORK_ID,
    chainId: ETH_CHAIN_ID,
    chainName: ETH_CHAIN_NAME,
    providerType: ETH,
    ticker: ETH_SYMBOL,
  },
  [BSC_NETWORK_ID]: {
    networkId: BSC_NETWORK_ID,
    chainId: BSC_CHAIN_ID,
    chainName: BSC_CHAIN_NAME,
    providerType: BSC,
    ticker: BNB_SYMBOL,
  },
  [BSC_NETWORK_TEST_ID]: {
    networkId: BSC_NETWORK_TEST_ID,
    chainId: BSC_CHAIN_ID_TEST,
    chainName: BSC_CHAIN_NAME,
    providerType: BSC,
    ticker: BNB_SYMBOL,
  },
  [OEC_NETWORK_ID]: {
    networkId: OEC_NETWORK_ID,
    chainId: OEC_CHAIN_ID,
    chainName: OEC_CHAIN_NAME,
    providerType: OEC,
    ticker: OKT_SYMBOL,
  },
  [HOO_NETWORK_ID]: {
    networkId: HOO_NETWORK_ID,
    chainId: HOO_CHAIN_ID,
    chainName: HOO_CHAIN_NAME,
    providerType: HOO,
    ticker: HOO_SYMBOL,
  },
  [XDAI_NETWORK_ID]: {
    networkId: XDAI_NETWORK_ID,
    chainId: XDAI_CHAIN_ID,
    chainName: XDAI_CHAIN_NAME,
    providerType: XDAI,
    ticker: XDAI_SYMBOL,
  },
  [HECO_NETWORK_ID]: {
    networkId: HECO_NETWORK_ID,
    chainId: HECO_CHAIN_ID,
    chainName: HECO_CHAIN_NAME,
    providerType: HECO,
    ticker: HT_SYMBOL,
  },
  [POLYGON_NETWORK_ID]: {
    networkId: POLYGON_NETWORK_ID,
    chainId: POLYGON_CHAIN_ID,
    chainName: POLYGON_CHAIN_NAME,
    providerType: POLYGON,
    ticker: POLYGON_SYMBOL,
  },
  [FANTOM_NETWORK_ID]: {
    networkId: FANTOM_NETWORK_ID,
    chainId: FANTOM_CHAIN_ID,
    chainName: FANTOM_CHAIN_NAME,
    providerType: FANTOM,
    ticker: FANTOM_SYMBOL,
  },
  [KCC_NETWORK_ID]: {
    networkId: KCC_NETWORK_ID,
    chainId: KCC_CHAIN_ID,
    chainName: KCC_CHAIN_NAME,
    providerType: KCC,
    ticker: KCC_SYMBOL,
  },
  [AVALANCHE_NETWORK_ID]: {
    networkId: AVALANCHE_NETWORK_ID,
    chainId: AVALANCHE_CHAIN_ID,
    chainName: AVALANCHE_CHAIN_NAME,
    providerType: AVALANCHE,
    ticker: AVALANCHE_SYMBOL,
  },
  [SOPHON_TEST_NETWORK_ID]: {
    networkId: SOPHON_TEST_NETWORK_ID,
    chainId: SOPHON_TEST_CHAIN_ID,
    chainName: SOPHON_TEST_CHAIN_NAME,
    providerType: SOPHON,
    ticker: SOPHON_SYMBOL,
  },
};

export const CONFIG_CHAIN_SOPHON = {
  RPC_URL: "",
  REST_URL: "",
  EXPLORER_URL: "https://explorer.evmos.org",
  NETWORK_NAME: "Sophon TestNet",
  NETWORK_TYPE: "testnet",
  CHAIN_ID: "sophon_99237-1",
  CHAIN_NAME: "Sophon Dev",
  COIN_DENOM: "usop",
  COIN_MINIMAL_DENOM: "SOP",
  COIN_DECIMALS: 18,
  PREFIX: "sophon",
  COIN_TYPE: 118,
  COINGECKO_ID: "sophon",
  DEFAULT_GAS: 1000000000,
  GAS_PRICE_STEP_LOW: 0.005,
  GAS_PRICE_STEP_AVERAGE: 0.025,
  GAS_PRICE_STEP_HIGH: 0.08,
  FEATURES: ["stargate", "ibc-transfer", "sophon"],
};

export const CHAIN_ETH = {
  chainId: "0x1",
  name: "Ethereum",
  logoURI:
    "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x2170Ed0880ac9A755fd29B2688956BD959F933F8/logo.png",
  symbol: "ETH",
};

export const CHAIN_SOP = {
  chainId: "sophon",
  name: "Sophon",
  logoURI:
    "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xC9849E6fdB743d08fAeE3E34dd2D1bc69EA11a51/logo.png",
  symbol: "sop",
};
