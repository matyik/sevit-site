import Link from 'next/link'

const Header = ({ HOST_URL }) => {
  return (
    <nav className='bg-secondary flex p-3 border-b-[1px] border-blue-100 justify-between'>
      <span className='text-blue-100 font-bold'>
        <Link href={HOST_URL}>Sevit</Link>
      </span>
      <span className='text-blue-100 gap-x-4 flex'>
        <Link href={`${HOST_URL}/docs`}>Docs</Link>
        <Link href='#pricing'>Pricing</Link>
        <a href='https://rapidapi.com'>RapidApi</a>
      </span>
    </nav>
  )
}

export default Header
