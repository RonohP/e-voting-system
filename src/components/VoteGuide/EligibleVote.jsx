import React from 'react'


class  EligibleVote extends React.Component {

    render() {
      const eligibleList = [
        {description: ' You are a student in this school, undertaking a course of your choice in your academic years', key: 0},
        {description: ' You are a student in this school, undertaking a course of your choice in your academic years', key: 1},
       
      ];
  
      return (
        <ul>
          {eligibleList.map(eligible => {
            return (
              <li className=' mx-6 mb-6' key={eligible.key}>{eligible.description}</li>
            );
          })}
        </ul>
      );
    }
  }
  
  export default EligibleVote;