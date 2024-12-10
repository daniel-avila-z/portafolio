/* eslint-disable no-lone-blocks */
import Image from 'next/image'
import pdficon from '../../../public/assets/icons/pdficon02.png'

export default function Curriculum () {
  return (
    <div>
      <a href='/curriculum/Currículum Daniel Avila 00.pdf' download='Currículum Daniel Avila 00.pdf'>
        <span>
          <Image
            className='icon curriculum'
            src={pdficon}
            alt='pdf icon'
          />
        </span>
      </a>
    </div>
  )
}

{ /* <a target='_blank' alt='Gmail' rel='noreferrer' onClick={() => setOpen(true)}>
<span>
  <Image
    className='icon'
    src={gmail}
    alt='gmail'
  />
</span>
</a> */ }
