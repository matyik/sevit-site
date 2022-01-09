import React from 'react'

const RequestExample = ({
  example: { name, url, method, body, response },
  setExample,
}) => {
  return (
    <div className='fixed inset-0 w-screen h-screen bg-opacity-50 backdrop-blur-md flex justify-center items-center'>
      <div
        className='fixed inset-0 h-screen w-screen -z-10'
        onClick={() => setExample(null)}
      ></div>
      <div className='bg-secondary rounded-md border-border border-[1px] p-4 text-blue-100 max-w-[min(90vw,1000px)] max-h-[min(1000px,90vh)] overflow-x-hidden overflow-y-scroll'>
        <h3 className='text-3xl'>{name}</h3>
        <div className='gap-x-4 my-4 flex items-center'>
          <span
            className={`font-bold text-xl ${
              method === 'GET' ? 'text-green-700' : 'text-yellow-600'
            }`}
          >
            {method}
          </span>
          <span className='p-1 rounded-md font-mono w-full bg-secondary border-border border-[1px]'>
            {url}
          </span>
        </div>
        {body && (
          <>
            <h4 className='text-xl'>Body: Application/JSON</h4>
            <p className='p-1 rounded-md font-mono w-full bg-secondary border-border border-[1px] mb-2 overflow-x-hidden overflow-y-scroll break-words max-h-32'>
              {JSON.stringify(body)}
            </p>
          </>
        )}
        <div className='flex justify-between'>
          <h4 className='text-xl'>Response</h4>
          <span className='text-green-700 text-xl'>200 OK</span>
        </div>
        <p className='p-1 rounded-md font-mono w-full bg-secondary border-border border-[1px] mt-2 overflow-x-hidden overflow-y-scroll break-words max-h-32'>
          {JSON.stringify(response)}
        </p>
      </div>
    </div>
  )
}

export default RequestExample
