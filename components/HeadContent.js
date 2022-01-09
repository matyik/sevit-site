import Link from 'next/link'

const HeadContent = () => {
  return (
    <div
      id='main'
      className='py-4 mb-4 flex items-center flex-col min-h-[calc(100vh-3rem-1px)] bg-[url(/blob-bg.svg)] bg-no-repeat bg-cover'
    >
      <h1 className='text-9xl text-blue-100 font-inter-bold'>Sevit</h1>
      <p className='text-gray-300 text-lg'>
        The power of web3 through a REST API
      </p>
      <div className='bg-button text-lg cursor-pointer p-2 hover:bg-[rgba(13,147,242,0.06)] rounded-md transition-colors mt-2 text-blue-100'>
        <Link href='/docs'>Read the Docs</Link>
      </div>
      <div className='w-4/5 md:w-1/2 mt-4'>
        <h3 className='text-blue-100 text-3xl'>About</h3>
        <p className='justify text-gray-300'>
          Sevit lets you use web3 functionality through a REST API. Access the
          Ethereum network without having your own web3 provider - Sevit handles
          it all on the back-end. Get things like the owner of an NFT, get an
          address&apos;s balance, resolve an ENS name, call smart contract
          functions, and more.{' '}
          <a
            className='text-blue-100 underline'
            href='https://rapidapi.com/matykari@gmail.com/api/sevit/'
          >
            View on RapidApi
          </a>
        </p>
      </div>
    </div>
  )
}

export default HeadContent
