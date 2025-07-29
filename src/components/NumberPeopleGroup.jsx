import React from 'react';
import NumberPeople from './NumberPeople';

const NumberPeopleGroup = () => {
  return (
    <div className="flex justify-center items-center px-2 py-8">
      <div className="flex w-full max-w-[800px] justify-between items-center text-center">
        <NumberPeople numbers="1000+" title="Students" />
        <NumberPeople numbers="30+" title="Teachers" />
        <NumberPeople numbers="100+" title="Students Placed" />
      </div>
    </div>
  );
};

export default NumberPeopleGroup;
