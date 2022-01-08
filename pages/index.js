import HeadData from '../components/HeadData'
import Header from '../components/Header'
import HeadContent from '../components/HeadContent'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'

export default function Home({ HOST_URL }) {
  return (
    <div className='scroll-smooth bg-background min-h-screen'>
      <HeadData />
      <Header HOST_URL={HOST_URL} />
      <HeadContent />
      <Pricing />
      <Footer />
    </div>
  )
}

export const getServerSideProps = () => {
  return {
    props: {
      HOST_URL: process.env.HOST_URL
    }
  }
}
