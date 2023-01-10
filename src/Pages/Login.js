import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate= useNavigate()
    const [input, setInput] = useState({
        email:"",
        password:"",
    })

    
    const [check, setCheck] = useState(false); // submit Check

    // const [checkPassword, setCheckPassword] = useState(false)
    // const [userData,setUserData]= useState()

    //store input email and password
    const handleInput=(event)=>{
        const {name,value} =event.target
        setInput(prevInput=>{
            return({
                ...prevInput,
                [name]:value
            }
            )
        })
    }

    //submit input and navigate to home
    const handleSubmit =(event)=>{
        event.preventDefault()
        if(input.email&&input.password){
            navigate('/home')
            setCheck(true)
        }
        setCheck(true)
        
    }

    const navigateToSignUp =()=>{
        navigate('/signup')
    }
  return (
    <div className='w-[100vw]  bg-gray-400 h-[100vh] flex items-center justify-center content-center'>
      <div className='bg-gray-100 w-[30rem] h-[30rem] rounded-2xl flex justify-center items-center relative flex-col'>

        <form action="" className='relative w-full h-full top-[3rem] '
        onSubmit={handleSubmit}>

            {/* Email */}
            <div className='m-2 p-4 w-[100%] absolute left-[11%] top-[4rem] '>
                <input type="email" placeholder='Email' className={`${check===true&&!input.email?"border-2 border-red-400":null} py-2 px-6 w-[75%] text-white  bg-gray-400 placeholder:text-white  rounded-lg`}
                 onChange={handleInput}
                 value={input.email}
                 name='email'/>
                 {check&&!input.email?<div className='text-red-400 text-sm'>*Please Enter Email</div>:null}
            </div>

            {/* Password */}
            <div className='m-2 p-4 w-[100%] absolute left-[11%] top-[8rem] '>
                <input type="password" placeholder='Password' className={`${check&&!input.password?"border-2 border-red-400":null} py-2 px-6 w-[75%] text-white bg-gray-400 placeholder:text-white  rounded-lg`}
                onChange={handleInput}
                value={input.password}
                name='password'/>
                {check&&!input.password?<div className='text-red-400 text-sm'>*Please Enter Password</div>:null}
            </div>

            {/* SUbmit or login */}
            <div className='m-2 p-4 w-[50%] flex justify-center  absolute left-[20%] top-[12rem] '>
                <button type='submit' className='bg-gray-400 p-2 rounded-2xl font-bold text-[#4b4b7e] w-full hover:bg-gray-300'>Login</button>
            </div>
            
        </form>
        <div className='m-2 p-4 w-[50%] flex justify-center relative bottom-[5.5rem] left-[-1rem] '>
                <button className='bg-gray-400 p-2 rounded-2xl font-bold text-[#4b4b7e] w-full hover:bg-gray-300'
                onClick={navigateToSignUp}>Sign Up</button>
            </div>
      </div>
    </div>
  )
}

export default Login
