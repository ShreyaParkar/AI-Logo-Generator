import React, { useState } from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'
import Colors from '@/app/_data/Colors'
import { Palette } from 'lucide-react'

const LogoPalette = ({ onHandleInputChange, formData }) => {
  const [selectedOption, setSelectedOption] = useState(formData?.palette);

  return (
    <div className='my-10'>
      <HeadingDescription
        title={Lookup.LogoColorPaletteTitle}
        description={Lookup.LogoColorPaletteDesc}
      />

      <div className='grid grid-cols-2 md:grid-3 gap-5 mt-5'>
        {Colors.map((Palette, index) => (
          <div
            key={index}
            className={`flex p-1 cursor-pointer ${
              selectedOption === Palette.name ? 'border-2 rounded-lg border-primary' : ''
            }`}
          >
            {Palette?.colors.map((color, index) => (
              <div
                key={index}
                className='h-24 w-full'
                onClick={() => {
                  setSelectedOption(Palette.name);
                  onHandleInputChange(Palette.name);
                }}
                style={{
                  backgroundColor: color,
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoPalette;
