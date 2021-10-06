import React from 'react'

class  DenyVote extends React.Component {

    render() {
      const denyList = [
        {description: 'You are not a student of this school', key: 0},
        {description: 'If the school declares you to have violated the voters requirements. This may include general misconduct', key: 1},
       
      ];
  
      return (
        <>
          {denyList.map(deny => {
            return (
              <li
                className='text-xs mx-10 my-4 sm:text-sm md:text-base xl:text-lg 2xl:text-xl'
                key={deny.key}
              >
                {deny.description}
              </li>
            );
          })}
        </>
      );
    }
  }
  
  export default DenyVote
