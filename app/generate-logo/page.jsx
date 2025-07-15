"use client"
import React, { useEffect, useState } from 'react'
import { UserDetailContext } from '../_context/userDetailContext';
import Prompt from '../_data/Prompt';
import axios from 'axios';
import Image from 'next/image';

const GenerateLogo = () => {
  const { userDetail, setUserDetail } = React.useContext(UserDetailContext);
  const [formData,setFormData]=useState();
  const[loading,setLoading]=useState(false);
  const [logoImage,setLogoImage]=useState();

  useEffect(()=>{
if (typeof window !== 'undefined' && userDetail?.email)
    {
      const storage=localStorage.getItem('formdata')
      if(storage)
      {
        setFormData(JSON.parse(storage));
        console.log(JSON.parse(storage))
      }
    }
  },[userDetail])
  
useEffect(()=>{
  if(formData?.title)
  {
    GenerateAILogo();
  }
},[formData])

  const GenerateAILogo=async()=>{
    setLoading(true);
    const PROMPT=Prompt.LOGO_PROMPT
    .replace('{logoTitle}',formData?.title)
    .replace('{logoDesc}',formData?.desc)
    .replace('{logoColor}',formData.palette)
    .replace('{logoDesign}',formData?.design?.title)
    .replace('{logoPrompt}',formData?.design?.prompt)

    console.log(PROMPT);

    //Generate Logo Prompt from AI
    //Generate Logo Image
    const result=await axios.post('/api/ai-logo-model',{
      prompt:PROMPT,
      email:userDetail?.email,
      title:formData.title,
      desc:formData.desc
    });
    console.log(result?.data);
    setLogoImage(result.data?.image)
    setLoading(false);

  }

  const onDownload=()=>{
    console.log(logoImage)
    const imageWindow= window.open();
    imageWindow.document.write('<img src="${logoImage}" alt="Base64 Image"/>');
  }
  return (
    <div>
      <h2>{loading&&'Loading...'}</h2>
      {!loading&& <Image src={logoImage} alt='logo' width={200} height={200}/>}
    </div>
  )
}

export default GenerateLogo
