import React from 'react';
import EnactOn from '../assets/EnactOn.png';
import Enjay from '../assets/Enjay.webp';
import Beetonz from '../assets/Beetonz.png';
import Casepoint from '../assets/casepoint.svg';
import Propelius from '../assets/propelius.svg';
import Vision from '../assets/vision.svg';

const CompanyCard = () => {
  const companies = [EnactOn, Beetonz, Enjay, Vision, Casepoint, Propelius];

  return (
    <div className='w-full px-4 py-8'>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 place-items-center mx-auto max-w-[900px]'>
        {companies.map((logo, index) => (
          <div
            key={index}
            className='w-[100px] h-[70px] sm:w-[120px] sm:h-[80px] flex justify-center items-center'
          >
            <img
              className='object-contain w-full h-full'
              src={logo}
              alt='Company Logo'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyCard;
