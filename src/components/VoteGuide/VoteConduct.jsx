import React from 'react'

class  VoteConduct extends React.Component {

    render() {
      const conductList = [
        {description: 'All Voters are expected to familiarize with the candidate of their choice and read their campaign promise', key: 0},
        {description: 'All Voters are expected to vote for just one candidate', key: 1},
        {description: 'All Voters are expected to to conduct themselves properly offline and Online during the election', key: 2},
       
      ];
  
      return (
        <ul>
          {conductList.map(conduct => {
            return (
              <li className=' mx-6 mb-6' key={conduct.key}>{conduct.description}</li>
            );
          })}
        </ul>
      );
    }
  }
  
  export default VoteConduct;
