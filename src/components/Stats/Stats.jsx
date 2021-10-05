import React from 'react';
import './Stats.css';
import DoughnutChart from '../DoughnutChart';

function Stats() {

  return (
    <section className='stats py-24'>
      <div className='max-width'>
        <h1 className='title relative text-center text-5xl font-medium mb-14 pb-5'>
          Monitor the voting process
        </h1>
        <DoughnutChart />
      </div>
    </section>
  );
}

export default Stats;
