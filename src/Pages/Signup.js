import React,{useState} from 'react'
import { useNavigate,Link } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate()
  const [check, setCheck] = useState(false)


  const [input, setInput] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    rePassword:""
  });
  
  const handleInput =(event)=>{
    const {name,value}=event.target
    setInput(prevValue=>{
      return({
        ...prevValue,
        [name]:value
      })
    })
  }
  const handleSubmit =(event)=>{
    const {firstName,lastName,email,password,rePassword} = input
    event.preventDefault()
    if(firstName&&lastName&&email&&password&&rePassword){
      if(password===rePassword){
        setCheck(true)
        navigate('/home')
      }
    }
    setCheck(true)
  }

  return (
    <div className='w-[100vw]  bg-gray-400 h-[100vh] flex items-center justify-center content-center'>
    <div className='bg-gray-100 w-[30rem] h-[30rem] rounded-2xl flex justify-center items-center relative flex-col'>
      <form action="" className='relative w-full h-full top-[3rem] '
      onSubmit={handleSubmit}>

        {/* First and Last Name */}
          <div className='m-2 p-4 w-[100%] absolute left-[0%] top-[0rem] '>
              <input type="text" placeholder='First Name' className={`${check===true&&!input.firstName?"border-2 border-red-400":null} py-2 px-6 w-[40%] text-white  bg-gray-400 placeholder:text-white mr-4 ml-5 rounded-lg`}
               onChange={handleInput}
               value={input.firstName}
               name='firstName'/>
              <input type="text" placeholder='Last Name' className={`${check===true&&!input.lastName?"border-2 border-red-400":null} py-2 px-6 w-[40%]  text-white  bg-gray-400 placeholder:text-white  rounded-lg`}
               onChange={handleInput}
               value={input.lastName}
               name='lastName'/>
      
          </div>


          <div className='m-2 p-4 w-[100%] absolute left-[0%] top-[4rem] '>
              <input type="email" placeholder='Email' className={`${check===true&&!input.email?"border-2 border-red-400":null} py-2 px-6 w-[75%] text-white  bg-gray-400 placeholder:text-white ml-5  rounded-lg`}
               onChange={handleInput}
               value={input.email}
               name='email'/>
             
          </div>

          <div className='m-2 p-4 w-[100%] absolute left-[0%] top-[8rem] '>
              <input type="password" placeholder='Password' className={`${check&&(!input.password||input.password!==input.rePassword)?"border-2 border-red-400":null} py-2 px-6 ml-5 w-[75%] text-white bg-gray-400 placeholder:text-white  rounded-lg`}
              onChange={handleInput}
              value={input.password}
              name='password'/>
              
          </div>

          <div className='m-2 p-4 w-[100%] absolute left-[0%] top-[12rem] '>
              <input type="password" placeholder='Re-Enter Password' className={`${check&&(!input.rePassword||input.password!==input.rePassword)?"border-2 border-red-400":null} py-2 px-6 ml-5 w-[75%] text-white bg-gray-400 placeholder:text-white  rounded-lg`}
              onChange={handleInput}
              value={input.rePassword}
              name='rePassword'/>
            
            {/* checking password and conform password */}
            {check===true&& input.password !== input.rePassword ?<div className='text-red-400 ml-[6rem] mt-3'>*Password doesnot match</div>:null}
          </div>

          <div className='m-2 p-4 w-[50%] flex flex-col justify-center  absolute left-[20%] top-[18rem] '>
              <button type='submit' className='bg-gray-400 p-2 rounded-2xl font-bold text-[#4b4b7e] w-full hover:bg-gray-300'>Sign Up</button>
             <Link to={'/login'} className='hover:underline  hover:text-[#4b4b7e] ml-4 mt-4'>Already Have a Account?</Link>
          </div>


          
      </form>
    </div>
  </div>
  )
}

export default Signup
