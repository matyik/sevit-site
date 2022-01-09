import React from 'react'

const Pricing = () => {
  return (
    <div className='bg-background text-blue-100' id='pricing'>
      <h3 className='text-center text-3xl text-primary'>Pricing</h3>
      <div className='hidden md:flex justify-center p-4'>
        <table>
          <tbody>
            <tr className=''>
              <th className='p-2 border-border border-[1px] rounded-tr-lg'>
                <span className='bold'>Objects</span>
              </th>{' '}
              <th className='border-border border-[1px]'>
                <div className='text-center p-4'>
                  <h2 className='capitalize'>Basic</h2>{' '}
                  <h2 className='bold'>$0.00 / mo</h2>{' '}
                  <span id='sub_btn_cnt_billingplan_773afda9-29e9-4766-b647-b2845b3a3250'>
                    <div className='p-2'>
                      <a
                        href='https://rapidapi.com/matykari@gmail.com/api/sevit/pricing'
                        className='text-center rounded-md cursor-pointer bg-button p-2 hover:bg-[rgba(13,147,242,0.06)] transition-colors'
                      >
                        <div className='inline-flex items-center'>
                          {' '}
                          Subscribe{' '}
                        </div>{' '}
                      </a>
                    </div>
                  </span>
                </div>
              </th>
              <th className='border-border border-[1px]'>
                <div className='bg-button p-1'>
                  <span className='bold'>Recommended</span>
                </div>{' '}
                <div className='text-center p-4'>
                  <h2 className='capitalize'>Pro</h2>{' '}
                  <h2 className='bold'>$4.99 / mo</h2>{' '}
                  <span id='sub_btn_cnt_billingplan_3c177bf2-6400-4126-82ff-dd4027f9b022'>
                    <div className='p-2'>
                      <a
                        href='https://rapidapi.com/matykari@gmail.com/api/sevit/pricing'
                        className='text-center rounded-md cursor-pointer bg-button p-2 hover:bg-[rgba(13,147,242,0.06)] transition-colors'
                      >
                        <div className='inline-flex items-center'>
                          {' '}
                          Subscribe{' '}
                        </div>{' '}
                      </a>
                    </div>
                  </span>
                </div>
              </th>
              <th className='border-border border-[1px]'>
                <div className='text-center p-4'>
                  <h2 className='capitalize'>Ultra</h2>{' '}
                  <h2 className='bold'>$24.99 / mo</h2>{' '}
                  <span id='sub_btn_cnt_billingplan_b031678c-a87c-414f-a6c5-e558c2778afc'>
                    <div className='p-2'>
                      <a
                        href='https://rapidapi.com/matykari@gmail.com/api/sevit/pricing'
                        className='text-center rounded-md cursor-pointer bg-button p-2 hover:bg-[rgba(13,147,242,0.06)] transition-colors'
                      >
                        <div className='inline-flex items-center'>
                          {' '}
                          Subscribe{' '}
                        </div>{' '}
                      </a>
                    </div>
                  </span>
                </div>
              </th>
              <th className='border-border border-[1px]'>
                <div className='text-center p-4'>
                  <h2 className='capitalize'>Mega</h2>{' '}
                  <h2 className='bold'>$99.99 / mo</h2>{' '}
                  <span id='sub_btn_cnt_billingplan_afccfa1a-91d2-4c18-bcb2-af1c243e88e3'>
                    <div className='p-2'>
                      <a
                        href='https://rapidapi.com/matykari@gmail.com/api/sevit/pricing'
                        className='text-center rounded-md cursor-pointer bg-button p-2 hover:bg-[rgba(13,147,242,0.06)] transition-colors'
                      >
                        <div className='inline-flex items-center'>
                          {' '}
                          Subscribe{' '}
                        </div>{' '}
                      </a>
                    </div>
                  </span>
                </div>
              </th>
            </tr>{' '}
            <tr className='LimitRow'>
              <td className='border-border border-[1px] p-2'>
                <span>Requests</span>{' '}
              </td>{' '}
              <td className='border-border border-[1px] text-center p-2'>
                <div>
                  <div className='font-bold'>500 / day</div>
                  <div className='caption'>Hard Limit</div>
                </div>
              </td>
              <td className='border-border border-[1px] text-center p-2'>
                <div>
                  <div className='font-bold'>5,000 / day</div>
                  <div className='caption'>then $0.05 each</div>
                </div>
              </td>
              <td className='border-border border-[1px] text-center p-2'>
                <div>
                  <div className='font-bold'>40,000 / day</div>
                  <div className='caption'>then $0.05 each</div>
                </div>
              </td>
              <td className='border-border border-[1px] text-center p-2'>
                <div>
                  <span>Unlimited</span>
                </div>
              </td>
            </tr>{' '}
            <tr>
              <td className='border-border border-[1px] p-2'>
                <span className='bold'>Rate Limit</span>
              </td>{' '}
              <td className='border-border border-[1px] text-center p-2'>
                5 requests per minute
              </td>
              <td className='border-border border-[1px] text-center p-2'>
                25 requests per minute
              </td>
              <td className='border-border border-[1px] text-center p-2'>
                50 requests per minute
              </td>
              <td className='border-border border-[1px] text-center p-2'>
                120 requests per minute
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='flex md:hidden flex-col items-center mt-2 gap-2'>
        <a
          href='https://rapidapi.com/matykari@gmail.com/api/sevit/pricing'
          className='border-border border-[1px] p-2 flex flex-col items-center w-[min(200px,90vw)]'
        >
          <b>Basic</b>
          <span className='text-sm text-primary'>$0.00 / mo</span>
        </a>
        <a
          href='https://rapidapi.com/matykari@gmail.com/api/sevit/pricing'
          className='border-border border-[1px] p-2 flex flex-col items-center w-[min(200px,90vw)]'
        >
          <b>Pro</b>
          <span className='text-sm text-primary'>$4.99 / mo</span>
        </a>
        <a
          href='https://rapidapi.com/matykari@gmail.com/api/sevit/pricing'
          className='border-border border-[1px] p-2 flex flex-col items-center w-[min(200px,90vw)]'
        >
          <b>Ultra</b>
          <span className='text-sm text-primary'>$24.99 / mo</span>
        </a>
        <a
          href='https://rapidapi.com/matykari@gmail.com/api/sevit/pricing'
          className='border-border border-[1px] p-2 flex flex-col items-center w-[min(200px,90vw)]'
        >
          <b>Mega</b>
          <span className='text-sm text-primary'>$99.99 / mo</span>
        </a>
      </div>
    </div>
  )
}

export default Pricing
