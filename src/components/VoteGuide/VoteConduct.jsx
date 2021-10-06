import React from 'react'

class  VoteConduct extends React.Component {

    render() {
      const conductList = [
        {description: 'All Voters are expected to familiarize themselves with the candidate of their choice and read their campaign promise', key: 0},
        {description: 'All Voters are expected to vote for just one candidate', key: 1},
        {description: 'All Voters are expected to to conduct themselves properly offline and online during the election', key: 2},
       
      ];
  
      return (
        <>
          {conductList.map(conduct => {
            return (
              <li
                className='text-xs mx-4 my-4 sm:text-sm md:text-base xl:text-lg 2xl:text-xl'
                key={conduct.key}
              >
                {conduct.description}
              </li>
            );
          })}
        </>
      );
    }
  }
  
  export default VoteConduct;
