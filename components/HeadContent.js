import Link from 'next/link'

const HeadContent = () => {
  return (
    <div className='bg-background py-4 flex items-center flex-col'>
      <h1 className='text-5xl text-primary'>Sevit</h1>
      <p className='text-sm text-gray-400'>
        The power of web3 through a REST API
      </p>
      <div className='bg-button p-2 hover:bg-[rgba(13,147,242,0.06)] rounded-md transition-colors mt-2 text-blue-100'>
        <Link href='/docs'>Read the Docs</Link>
      </div>
    </div>
  )
}

export default HeadContent
