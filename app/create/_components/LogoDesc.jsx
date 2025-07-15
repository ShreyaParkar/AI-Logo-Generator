import React from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'

const LogoDesc = ({onHandleInputChange, formData}) => {
  return (
    <div>
      <div className='my-10'>
        <HeadingDescription
        title={Lookup.LogoDescTitle}
        description={Lookup.LogoDescDesc}/>

        <input type='text' placeholder={Lookup.InputTitlePlaceholder}
                className='p-4 border rounded-lg mt-5 w-full'
                defaultValue={formData?.desc}
                //Value={formData.desc}
                onChange={(e)=>onHandleInputChange(e.target.value)}/>


      </div>
    </div>
  )
}

export default LogoDesc