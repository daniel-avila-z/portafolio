'use client'
import './styles/loading.css'
import { useEffect } from 'react'

export default function Loader () {
  useEffect(() => {
    async function getLoader () {
      const { spiral } = await import('ldrs')
      spiral.register()
    }
    getLoader()
  }, [])
  return (
    <div className='loading-container'>
      <l-infinity
        className='loader-img'
        size='55'
        stroke='4'
        stroke-length='0.15'
        bg-opacity='0.1'
        speed='1.3'
        color='white'
      />
    </div>

  )
}
