import React from 'react'


class  EligibleVote extends React.Component {

    render() {
      const eligibleList = [
        {description: ' You are a student in this school, undertaking a course of your choice in your academic year', key: 0},
        // {description: ' You are a student in this school, undertaking a course of your choice in your academic years', key: 1},
       
      ];
  
      return (
        <>
          {eligibleList.map(eligible => {
            return (
              <li
                className='text-xs mx-10 my-4 sm:text-sm md:text-base xl:text-lg 2xl:text-xl'
                key={eligible.key}
              >
                {eligible.description}
              </li>
            );
          })}
        </>
      );
    }
  }
  
  export default EligibleVote;