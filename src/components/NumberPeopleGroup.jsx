import React from 'react';

const NumberPeopleGroup = () => {
  const data = [
    { numbers: '1000+', title: 'Students' },
    { numbers: '30+', title: 'Teachers' },
    { numbers: '100+', title: 'Students Placed' },
  ];

  return (
    <div className="flex justify-center items-center px-2 py-8">
      <div className="flex w-full max-w-[800px] justify-between items-center text-center">
        {data.map((item, index) => (
          <div
            key={index}
            className="h-[100px] w-[250px] mx-2 text-black bg-white rounded-lg  flex flex-col justify-center items-center"
          >
            <h1 className="font-extrabold text-[20px]">{item.numbers}</h1>
            <h2 className="text-sm">{item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NumberPeopleGroup;
