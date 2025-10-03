import React, { useState , useEffect } from 'react';
import { useSelector } from "react-redux";
import { FaUser } from "react-icons/fa";
import { toast } from 'react-toastify';
import axios from 'axios';

const DashboardProfile = () => {
  const [ChangeAvatar,setChangeAvatar] = useState(null);
  const changeImage = (e )=>{
    setChangeAvatar(e.target.files[0]);
  };
  const backendLink = useSelector((state)=> state.prod.link);
  const [UserData, setUserData] = useState();
  useEffect(()=> {
      const fetch = async () => {
        const res = await axios.get(`${backendLink}/api/v1/getProfileData`, {
          withCredentials: true,
        });
        setUserData(res.data.data);
      };
      fetch();
    },[]);
    console.log(UserData);
  const [Passwords, setPasswords] =useState({
    password:"", 
    newPass:"",
    confirmNewPass:"",

  });
  const changePass = (e) => {
    const {name,value} = e.target;
    setPasswords({...Passwords,[name]:value})
  };

  const handlePass = async (e)=> {
    e.preventDefault();
    try{
      const res = await axios.patch(`${backendLink}/api/v1/changeUserPassword`,
        Passwords,
        {withCredentials:true}
      );
      toast.success(res.data.message);
      setChangeAvatar(null);
      setPasswords({ password:"", newPass:"", confirmNewPass:"",});
    } catch(error) {
      toast.error(error.response.data.error)
    }
  };

  const updateAvatar = async ()=> {
    try{
      const formData = new FormData();
      formData.append("image", ChangeAvatar);
      const res = await axios.put(
        `${backendLink}/api/v1/changeAvatar`,
        formData,
        {
          withCredentials:true,
          headers: { "Content-Type": "multipart/form-data" }
        }
      );
      toast.success(res.data.message);
    } catch(error) {
      toast.error(error.response.data.error)
    }
  }
  return (
    <>{ UserData && 
    <div className='flex flex-col '>
      <div className='flex flex-col md:flex-row items-center gap-8 md:gap-12' >
        <div>
          {" "}
          <div className='size-[20vh] border rounded-full '>
            <label 
              className='w-[100%] h-[100%] flex items-center justify-center ' 
              htmlFor="imgFile"
            >
              {UserData && UserData.avatar ?  (
                <img 
                  src={
                    ChangeAvatar
                     ? URL.createObjectURL(ChangeAvatar)
                     :`${UserData.avatar}`  
                  }
                  alt=""
                  className='size-[100%] object-cover rounded-full'
                />
              ) : ( 
                <FaUser className='size-[12vh] text-zinc-600'/>
              )}
            </label>
          </div> 
          <div className='mt-4 flex items-center justify-center'>
            <input 
              type='file'
              id="imgFile" 
              accept='.jpeg, .jpg, .png ' 
              className='mb-4 bg-zinc-900 text-white hidden'
              onChange={changeImage}
            />
            <button className='bg-blue-700 hover:bg-blue-600 transition-all duration-300 text-center px-4 py-2 text-white rounded' onClick={updateAvatar}>
              Change Avatar
            </button>
          </div>
        </div>
        <div>
          <p className='text-zinc-700'>{UserData.email}</p>
          <h1 className='text-2xl md:text-3xl lg:text-5xl mt-2 font-semibold'>{UserData.username}</h1>
        </div>
      </div>
      <hr className='my-8'/>
      <div>
        <h1 className='text-2xl fond-semibold'>
          Change account's password
        </h1>
        <form action="" className='my-4' onSubmit={handlePass}>
          <div className='flex flex-col'>
            <label htmlFor=''>
              Current Password
            </label>
            <input 
              type="password" 
              placeholder='Current Password'
              value= {Passwords.password}
              name="password" 
              className='mt-2 outline-none border px-3 py-2 rounded-zinc-400'
              required
              onChange={changePass}
            />
          </div>
          <div className='flex flex-col mt-4'>
            <label htmlFor=''>
              New Password
            </label>
            <input 
              type="password" 
              placeholder='New Password'
              value= {Passwords.newPass}
              name="newPass" 
              className='mt-2 outline-none border px-3 py-2 rounded-zinc-400'
              required
              onChange={changePass}
            />
          </div>
          <div className='flex flex-col mt-4'>
            <label htmlFor=''>
              Confirm New Password
            </label>
            <input 
              type="password" 
              placeholder='Confirm New Password'
              name="confirmNewPass" 
              className='mt-2 outline-none border px-3 py-2 rounded-zinc-400'
              required
              value={Passwords.confirmNewPass}
              onChange={changePass}
              
            />
          </div>
          <div className='mt-8'> 
            <button className='bg-blue-700 hover:bg-blue-600 transition-all duration-300 text-center px-4 py-2 text-white rounded'>
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div> 
    }</>
    
  );
};

export default DashboardProfile