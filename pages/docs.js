import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Docs = ({ HOST_URL }) => {
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
      <div className='bg-background min-h-screen' id='main'>
        g
        <Footer />
      </div>
    </>
  )
}

export const getServerSideProps = () => {
  return {
    props: {
      HOST_URL: process.env.HOST_URL
    }
  }
}

export default Docs
