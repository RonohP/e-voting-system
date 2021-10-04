import React from 'react'

class  DenyVote extends React.Component {

    render() {
      const denyList = [
        {description: 'You are not a student of this school', key: 0},
        {description: 'If the school declares you to have violated the voters requirements. This may include general misconduct', key: 1},
       
      ];
  
      return (
        <ul>
          {denyList.map(deny => {
            return (
              <li className=' mx-6 mb-6' key={deny.key}>{deny.description}</li>
            );
          })}
        </ul>
      );
    }
  }
  
  export default DenyVote
