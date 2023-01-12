import React from 'react'

const Home = () => {
  const logoutHandler =()=>{
  
  }
  return (
    <div className='w-[100vw] h-[100vh] flex flex-col justify-center items-center'>
      <button onClick={logoutHandler} className='bg-gray-400 p-2 rounded-lg text-white hover:bg-gray-200 '>Log out</button>
    </div>
  )
}

export default Home