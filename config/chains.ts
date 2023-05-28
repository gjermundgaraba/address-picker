import {AssetList, Chain} from "@chain-registry/types";


export const empowerchainDevnet: Chain = {
  chain_name: 'empowerchaindevnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'EmpowerChain Devnet',
  chain_id: 'emp-devnet-1',
  bech32_prefix: 'empower',
  fees: {
    fee_tokens: [
      {
        denom: 'umpwr',
        fixed_min_gas_price: 0
      }
    ]
  },
  slip44: 118,
  apis: {
    rpc: [
      {
        address: 'https://devnet.empowerchain.io:26657',
        provider: 'empower',
      }
    ]
  },
}

export const empowerchainAssetList: AssetList = {
  chain_name: 'empowerchaindevnet',
  assets: [
    {
      description:
        'The native staking and governance token of the devnet version of Empower.',
      denom_units: [
        {
          denom: 'umpwr',
          exponent: 0
        },
        {
          denom: 'mpwr',
          exponent: 6
        }
      ],
      base: 'umpwr',
      name: 'MPWR',
      display: 'mpwr',
      symbol: 'MPWR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/empowertestnet/images/mpwr.png'
      }
    }
  ]
}