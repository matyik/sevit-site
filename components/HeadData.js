import Head from 'next/head'

const HeadData = () => {
  return (
    <Head>
      <title>Sevit - Web3 as a REST API</title>
      <meta
        name='description'
        content='Sevit is a REST API that gives access to web3 with just an http request'
      />
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
      <link
        href='https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap'
        rel='stylesheet'
      ></link>
    </Head>
  )
}

export default HeadData
