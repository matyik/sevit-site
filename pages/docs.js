import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'
import RequestExample from '../components/RequestExample'

const Docs = ({ HOST_URL }) => {
  const [example, setExample] = useState(null)
  return (
    <>
      <Head>
        <title>Docs - Sevit</title>
        <meta
          name='description'
          content='Full documentation for the Sevit API.'
        />
      </Head>
      <Header HOST_URL={HOST_URL} />
      <div
        className='bg-background min-h-[calc(100vh-3rem-1px)] text-blue-100 overflow-x-hidden'
        id='main'
      >
        <div className='max-w-4xl flex flex-col gap-y-4 p-4 relative'>
          <h1 className='text-5xl font-bold'>Sevit</h1>
          <h2 className='text-3xl'>Introduction</h2>
          <p>
            Sevit lets you use web3 functionality through a REST API. Access the
            Ethereum network without having your own web3 provider - Sevit
            handles it all on the back-end. Get things like the owner of an NFT,
            get an address&apos;s balance, resolve an ENS name, call smart
            contract functions, and more.
          </p>
          <h2 className='text-3xl'>Authentication</h2>
          <p>
            Choose a plan from RapidApi and pass your api key through the{' '}
            <span className='rounded-sm bg-secondary px-1'>X-RapidAPI-Key</span>{' '}
            header. You also have to include the{' '}
            <span className='rounded-sm bg-secondary px-1'>
              X-RapidAPI-Host
            </span>{' '}
            header with the value of{' '}
            <span className='rounded-sm bg-secondary px-1'>
              sevit.p.rapidapi.com
            </span>
          </p>
          <h2 className='text-3xl'>Basic Requests</h2>
          <div className='flex gap-x-8 w-full'>
            <h4 className='text-green-700 text-lg font-bold'>GET</h4>
            <h4 className='text-lg font-bold'>Get Address Balance</h4>
            <span
              className='text-lg text-primary absolute right-6 cursor-pointer'
              onClick={() =>
                setExample({
                  name: 'Get Address Balance',
                  url: 'https://api.sevit.dev/balance/0xF2d1427cC94e75c3ee8436cECCa64A70523cB78A',
                  method: 'GET',
                  response: {
                    balance: '9382168700908259',
                  },
                })
              }
            >
              Example
            </span>
          </div>
          <span className='p-1 rounded-md font-mono w-full bg-secondary border-border border-[1px] break-words'>
            https://api.sevit.dev/balance/&#123;address&#125;
          </span>
          <p>Returns the balance of an address in wei.</p>
          <div className='flex gap-x-8 w-full'>
            <h4 className='text-green-700 text-lg font-bold'>GET</h4>
            <h4 className='text-lg font-bold'>Resolve ENS Name</h4>
            <span
              className='text-lg text-primary absolute right-6 cursor-pointer'
              onClick={() =>
                setExample({
                  name: 'Resolve Matyi.eth',
                  url: 'https://api.sevit.dev/ens/matyi.eth',
                  method: 'GET',
                  response: {
                    address: '0xF2d1427cC94e75c3ee8436cECCa64A70523cB78A',
                  },
                })
              }
            >
              Example
            </span>
          </div>
          <span className='p-1 rounded-md font-mono w-full bg-secondary border-border border-[1px] break-words'>
            https://api.sevit.dev/ens/&#123;name&#125;
          </span>
          <p>Returns the address an Ethereum Name Service name resolves to.</p>
          <div className='flex gap-x-8 w-full'>
            <h4 className='text-green-700 text-lg font-bold'>GET</h4>
            <h4 className='text-lg font-bold'>Get Gas Price</h4>
            <span
              className='text-lg text-primary absolute right-6 cursor-pointer'
              onClick={() =>
                setExample({
                  name: 'Get Current Gas Price',
                  url: 'https://api.sevit.dev/gasprice',
                  method: 'GET',
                  response: {
                    gasPrice: '99995308111',
                  },
                })
              }
            >
              Example
            </span>
          </div>
          <span className='p-1 rounded-md font-mono w-full bg-secondary border-border border-[1px] break-words'>
            https://api.sevit.dev/gasprice
          </span>
          <p>Returns the current gas price in wei.</p>
          <div className='flex gap-x-8 w-full'>
            <h4 className='text-green-700 text-lg font-bold'>GET</h4>
            <h4 className='text-lg font-bold'>Get Transaction</h4>
            <span
              className='text-lg text-primary absolute right-6 cursor-pointer'
              onClick={() =>
                setExample({
                  name: 'Get Transaction Details',
                  url: 'https://api.sevit.dev/transaction/0xa706e510af709b0245469ae9bb73d466af077594e53b7755de7da94e722aba64',
                  method: 'GET',
                  response: {
                    transaction: {
                      hash: '0xa706e510af709b0245469ae9bb73d466af077594e53b7755de7da94e722aba64',
                      accessList: [],
                      blockHash:
                        '0x822ec0856bd248b5a2702dbbc862ff689793f407e5230c84dbb9c1dbdb8a279d',
                      blockNumber: 13685440,
                      chainId: '0x1',
                      from: '0xb5d85CBf7cB3EE0D56b3bB207D5Fc4B82f43F511',
                      gas: 21000,
                      gasPrice: '89691526368',
                      input: '0x',
                      maxFeePerGas: '193000000000',
                      maxPriorityFeePerGas: '2000000000',
                      nonce: 4184303,
                      r: '0x52efc7ecee7bb3f8545a2167f2d8c5d5fcdc7593b4c055b6819f06320d9e829c',
                      s: '0x176188a43e2948ce79977414ea57265dbc658b5ae6dc19d9bf81b5a42694fb9d',
                      to: '0xF2d1427cC94e75c3ee8436cECCa64A70523cB78A',
                      transactionIndex: 295,
                      type: 2,
                      v: '0x1',
                      value: '360000000000000000',
                    },
                  },
                })
              }
            >
              Example
            </span>
          </div>
          <span className='p-1 rounded-md font-mono w-full bg-secondary border-border border-[1px] break-words'>
            https://api.sevit.dev/transaction/&#123;transactionHash&#125;
          </span>
          <p>Returns the details of a transaction.</p>
          <h2 className='text-3xl'>Smart Contracts</h2>
          <div className='flex gap-x-8 w-full'>
            <h4 className='text-yellow-600 text-lg font-bold'>POST</h4>
            <h4 className='text-lg font-bold'>Call Smart Contract Function</h4>
            <span
              className='text-lg text-primary absolute right-6 cursor-pointer'
              onClick={() =>
                setExample({
                  name: 'Get Bored Ape #3368 Owner',
                  url: 'https://api.sevit.dev/contract/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/ownerOf?tokenId=3368',
                  method: 'POST',
                  body: [
                    {
                      inputs: [
                        {
                          internalType: 'string',
                          name: 'name',
                          type: 'string',
                        },
                        {
                          internalType: 'string',
                          name: 'symbol',
                          type: 'string',
                        },
                        {
                          internalType: 'uint256',
                          name: 'maxNftSupply',
                          type: 'uint256',
                        },
                        {
                          internalType: 'uint256',
                          name: 'saleStart',
                          type: 'uint256',
                        },
                      ],
                      stateMutability: 'nonpayable',
                      type: 'constructor',
                    },
                    {
                      anonymous: false,
                      inputs: [
                        {
                          indexed: true,
                          internalType: 'address',
                          name: 'owner',
                          type: 'address',
                        },
                        {
                          indexed: true,
                          internalType: 'address',
                          name: 'approved',
                          type: 'address',
                        },
                        {
                          indexed: true,
                          internalType: 'uint256',
                          name: 'tokenId',
                          type: 'uint256',
                        },
                      ],
                      name: 'Approval',
                      type: 'event',
                    },
                    {
                      anonymous: false,
                      inputs: [
                        {
                          indexed: true,
                          internalType: 'address',
                          name: 'owner',
                          type: 'address',
                        },
                        {
                          indexed: true,
                          internalType: 'address',
                          name: 'operator',
                          type: 'address',
                        },
                        {
                          indexed: false,
                          internalType: 'bool',
                          name: 'approved',
                          type: 'bool',
                        },
                      ],
                      name: 'ApprovalForAll',
                      type: 'event',
                    },
                    {
                      anonymous: false,
                      inputs: [
                        {
                          indexed: true,
                          internalType: 'address',
                          name: 'previousOwner',
                          type: 'address',
                        },
                        {
                          indexed: true,
                          internalType: 'address',
                          name: 'newOwner',
                          type: 'address',
                        },
                      ],
                      name: 'OwnershipTransferred',
                      type: 'event',
                    },
                    {
                      anonymous: false,
                      inputs: [
                        {
                          indexed: true,
                          internalType: 'address',
                          name: 'from',
                          type: 'address',
                        },
                        {
                          indexed: true,
                          internalType: 'address',
                          name: 'to',
                          type: 'address',
                        },
                        {
                          indexed: true,
                          internalType: 'uint256',
                          name: 'tokenId',
                          type: 'uint256',
                        },
                      ],
                      name: 'Transfer',
                      type: 'event',
                    },
                    {
                      inputs: [],
                      name: 'BAYC_PROVENANCE',
                      outputs: [
                        { internalType: 'string', name: '', type: 'string' },
                      ],
                      stateMutability: 'view',
                      type: 'function',
                    },
                    {
                      inputs: [],
                      name: 'MAX_APES',
                      outputs: [
                        { internalType: 'uint256', name: '', type: 'uint256' },
                      ],
                      stateMutability: 'view',
                      type: 'function',
                    },
                    {
                      inputs: [],
                      name: 'REVEAL_TIMESTAMP',
                      outputs: [
                        { internalType: 'uint256', name: '', type: 'uint256' },
                      ],
                      stateMutability: 'view',
                      type: 'function',
                    },
                    {
                      inputs: [],
                      name: 'apePrice',
                      outputs: [
                        { internalType: 'uint256', name: '', type: 'uint256' },
                      ],
                      stateMutability: 'view',
                      type: 'function',
                    },
                    {
                      inputs: [
                        {
                          internalType: 'address',
                          name: 'to',
                          type: 'address',
                        },
                        {
                          internalType: 'uint256',
                          name: 'tokenId',
                          type: 'uint256',
                        },
                      ],
                      name: 'approve',
                      outputs: [],
                      stateMutability: 'nonpayable',
                      type: 'function',
                    },
                    {
                      inputs: [
                        {
                          internalType: 'address',
                          name: 'owner',
                          type: 'address',
                        },
                      ],
                      name: 'balanceOf',
                      outputs: [
                        { internalType: 'uint256', name: '', type: 'uint256' },
                      ],
                      stateMutability: 'view',
                      type: 'function',
                    },
                    {
                      inputs: [],
                      name: 'baseURI',
                      outputs: [
                        { internalType: 'string', name: '', type: 'string' },
                      ],
                      stateMutability: 'view',
                      type: 'function',
                    },
                    {
                      inputs: [],
                      name: 'emergencySetStartingIndexBlock',
                      outputs: [],
                      stateMutability: 'nonpayable',
                      type: 'function',
                    },
                    {
                      inputs: [],
                      name: 'flipSaleState',
                      outputs: [],
                      stateMutability: 'nonpayable',
                      type: 'function',
                    },
                    {
                      inputs: [
                        {
                          internalType: 'uint256',
                          name: 'tokenId',
                          type: 'uint256',
                        },
                      ],
                      name: 'getApproved',
                      outputs: [
                        { internalType: 'address', name: '', type: 'address' },
                      ],
                      stateMutability: 'view',
                      type: 'function',
                    },
                    {
                      inputs: [
                        {
                          internalType: 'address',
                          name: 'owner',
                          type: 'address',
                        },
                        {
                          internalType: 'address',
                          name: 'operator',
                          type: 'address',
                        },
                      ],
                      name: 'isApprovedForAll',
                      outputs: [
                        { internalType: 'bool', name: '', type: 'bool' },
                      ],
                      stateMutability: 'view',
                      type: 'function',
                    },
                    {
                      inputs: [],
                      name: 'maxApePurchase',
                      outputs: [
                        { internalType: 'uint256', name: '', type: 'uint256' },
                      ],
                      stateMutability: 'view',
                      type: 'function',
                    },
                    {
                      inputs: [
                        {
                          internalType: 'uint256',
                          name: 'numberOfTokens',
                          type: 'uint256',
                        },
                      ],
                      name: 'mintApe',
                      outputs: [],
                      stateMutability: 'payable',
                      type: 'function',
                    },
                    {
                      inputs: [],
                      name: 'name',
                      outputs: [
                        { internalType: 'string', name: '', type: 'string' },
                      ],
                      stateMutability: 'view',
                      type: 'function',
                    },
                    {
                      inputs: [],
                      name: 'owner',
                      outputs: [
                        { internalType: 'address', name: '', type: 'address' },
                      ],
                      stateMutability: 'view',
                      type: 'function',
                    },
                    {
                      inputs: [
                        {
                          internalType: 'uint256',
                          name: 'tokenId',
                          type: 'uint256',
                        },
                      ],
                      name: 'ownerOf',
                      outputs: [
                        { internalType: 'address', name: '', type: 'address' },
                      ],
                      stateMutability: 'view',
                      type: 'function',
                    },
                    {
                      inputs: [],
                      name: 'renounceOwnership',
                      outputs: [],
                      stateMutability: 'nonpayable',
                      type: 'function',
                    },
                    {
                      inputs: [],
                      name: 'reserveApes',
                      outputs: [],
                      stateMutability: 'nonpayable',
                      type: 'function',
                    },
                    {
                      inputs: [
                        {
                          internalType: 'address',
                          name: 'from',
                          type: 'address',
                        },
                        {
                          internalType: 'address',
                          name: 'to',
                          type: 'address',
                        },
                        {
                          internalType: 'uint256',
                          name: 'tokenId',
                          type: 'uint256',
                        },
                      ],
                      name: 'safeTransferFrom',
                      outputs: [],
                      stateMutability: 'nonpayable',
                      type: 'function',
                    },
                    {
                      inputs: [
                        {
                          internalType: 'address',
                          name: 'from',
                          type: 'address',
                        },
                        {
                          internalType: 'address',
                          name: 'to',
                          type: 'address',
                        },
                        {
                          internalType: 'uint256',
                          name: 'tokenId',
                          type: 'uint256',
                        },
                        { internalType: 'bytes', name: '_data', type: 'bytes' },
                      ],
                      name: 'safeTransferFrom',
                      outputs: [],
                      stateMutability: 'nonpayable',
                      type: 'function',
                    },
                    {
                      inputs: [],
                      name: 'saleIsActive',
                      outputs: [
                        { internalType: 'bool', name: '', type: 'bool' },
                      ],
                      stateMutability: 'view',
                      type: 'function',
                    },
                    {
                      inputs: [
                        {
                          internalType: 'address',
                          name: 'operator',
                          type: 'address',
                        },
                        {
                          internalType: 'bool',
                          name: 'approved',
                          type: 'bool',
                        },
                      ],
                      name: 'setApprovalForAll',
                      outputs: [],
                      stateMutability: 'nonpayable',
                      type: 'function',
                    },
                    {
                      inputs: [
                        {
                          internalType: 'string',
                          name: 'baseURI',
                          type: 'string',
                        },
                      ],
                      name: 'setBaseURI',
                      outputs: [],
                      stateMutability: 'nonpayable',
                      type: 'function',
                    },
                    {
                      inputs: [
                        {
                          internalType: 'string',
                          name: 'provenanceHash',
                          type: 'string',
                        },
                      ],
                      name: 'setProvenanceHash',
                      outputs: [],
                      stateMutability: 'nonpayable',
                      type: 'function',
                    },
                    {
                      inputs: [
                        {
                          internalType: 'uint256',
                          name: 'revealTimeStamp',
                          type: 'uint256',
                        },
                      ],
                      name: 'setRevealTimestamp',
                      outputs: [],
                      stateMutability: 'nonpayable',
                      type: 'function',
                    },
                    {
                      inputs: [],
                      name: 'setStartingIndex',
                      outputs: [],
                      stateMutability: 'nonpayable',
                      type: 'function',
                    },
                    {
                      inputs: [],
                      name: 'startingIndex',
                      outputs: [
                        { internalType: 'uint256', name: '', type: 'uint256' },
                      ],
                      stateMutability: 'view',
                      type: 'function',
                    },
                    {
                      inputs: [],
                      name: 'startingIndexBlock',
                      outputs: [
                        { internalType: 'uint256', name: '', type: 'uint256' },
                      ],
                      stateMutability: 'view',
                      type: 'function',
                    },
                    {
                      inputs: [
                        {
                          internalType: 'bytes4',
                          name: 'interfaceId',
                          type: 'bytes4',
                        },
                      ],
                      name: 'supportsInterface',
                      outputs: [
                        { internalType: 'bool', name: '', type: 'bool' },
                      ],
                      stateMutability: 'view',
                      type: 'function',
                    },
                    {
                      inputs: [],
                      name: 'symbol',
                      outputs: [
                        { internalType: 'string', name: '', type: 'string' },
                      ],
                      stateMutability: 'view',
                      type: 'function',
                    },
                    {
                      inputs: [
                        {
                          internalType: 'uint256',
                          name: 'index',
                          type: 'uint256',
                        },
                      ],
                      name: 'tokenByIndex',
                      outputs: [
                        { internalType: 'uint256', name: '', type: 'uint256' },
                      ],
                      stateMutability: 'view',
                      type: 'function',
                    },
                    {
                      inputs: [
                        {
                          internalType: 'address',
                          name: 'owner',
                          type: 'address',
                        },
                        {
                          internalType: 'uint256',
                          name: 'index',
                          type: 'uint256',
                        },
                      ],
                      name: 'tokenOfOwnerByIndex',
                      outputs: [
                        { internalType: 'uint256', name: '', type: 'uint256' },
                      ],
                      stateMutability: 'view',
                      type: 'function',
                    },
                    {
                      inputs: [
                        {
                          internalType: 'uint256',
                          name: 'tokenId',
                          type: 'uint256',
                        },
                      ],
                      name: 'tokenURI',
                      outputs: [
                        { internalType: 'string', name: '', type: 'string' },
                      ],
                      stateMutability: 'view',
                      type: 'function',
                    },
                    {
                      inputs: [],
                      name: 'totalSupply',
                      outputs: [
                        { internalType: 'uint256', name: '', type: 'uint256' },
                      ],
                      stateMutability: 'view',
                      type: 'function',
                    },
                    {
                      inputs: [
                        {
                          internalType: 'address',
                          name: 'from',
                          type: 'address',
                        },
                        {
                          internalType: 'address',
                          name: 'to',
                          type: 'address',
                        },
                        {
                          internalType: 'uint256',
                          name: 'tokenId',
                          type: 'uint256',
                        },
                      ],
                      name: 'transferFrom',
                      outputs: [],
                      stateMutability: 'nonpayable',
                      type: 'function',
                    },
                    {
                      inputs: [
                        {
                          internalType: 'address',
                          name: 'newOwner',
                          type: 'address',
                        },
                      ],
                      name: 'transferOwnership',
                      outputs: [],
                      stateMutability: 'nonpayable',
                      type: 'function',
                    },
                    {
                      inputs: [],
                      name: 'withdraw',
                      outputs: [],
                      stateMutability: 'nonpayable',
                      type: 'function',
                    },
                  ],
                  response: {
                    result: '0x931d1156B4C2f95B21D61f129D1e1B640bB30932',
                  },
                })
              }
            >
              Example
            </span>
          </div>
          <span className='p-1 rounded-md font-mono w-full bg-secondary border-border border-[1px] break-words'>
            https://api.sevit.dev/contract/&#123;contractAddress&#125;/&#123;functionName&#125;
          </span>
          <p>
            Calls a smart contract function (Read Only). The Contract ABI must
            be passed into the request body as Application/JSON. (You can get
            the contract ABI from{' '}
            <a className='text-primary' href='https://etherscan.io/'>
              https://api.etherscan.io/api?module=contract&amp;action=getabi&amp;address=
              &#123;contractAddress&#125;.
            </a>{' '}
            Pass function parameters (if any) into query parameters.
          </p>
        </div>
        <Footer />
      </div>
      {example && <RequestExample example={example} setExample={setExample} />}
    </>
  )
}

export const getServerSideProps = () => {
  return {
    props: {
      HOST_URL: process.env.HOST_URL,
    },
  }
}

export default Docs
