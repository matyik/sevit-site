import Link from 'next/link'

const Header = ({ HOST_URL }) => {
  return (
    <nav className='bg-secondary flex p-3 border-b-[1px] border-blue-100 justify-between'>
      <a
        href='#main'
        className='absolute top-0 transition-transform -translate-y-full outline-none focus:translate-y-0 p-2 bg-background rounded-b-md border-[1px] border-primary text-primary'
      >
        Skip to Content
      </a>
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
