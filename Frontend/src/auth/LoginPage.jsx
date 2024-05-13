import React from 'react'
import RocketImg from '../assets/rocket.png'
import FormPage from './FormPage'
function LoginPage() {
  return (
    <div>
        <div className=' grid sm:grid-cols-2  h-screen w-screen'>
          <div className=' bg-white'>
            {/* login page verifications */}
            <FormPage/>

          </div>
          <div>
            <div className='hidden lg:flex relative h-screen bg-red-100  justify-center '>
              <img src={RocketImg} alt="" className='  max-w-96  object-contain' />
            </div>
          </div>
        </div>

    </div>
  )
}

export default LoginPage