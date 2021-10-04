import React from 'react';
import {Bar} from 'react-chartjs-2';

const data = {
  labels: ['Kitan', 'Layla', 'Wawira', 'Abena', 'Zawadi'],
  color: '#fff',
  datasets: [
    {
      label: 'No. of Votes',
      data: [21, 5, 19, 12, 38],
      backgroundColor: ['#ffc7ca', '#f1fbb7', '#b8d0ff', '#e5ffae', '#a37db6'],
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      display: true,
      title: {
        display: true,
        text: 'Candidates',
        color: function (e) {
          if (
            window.location.pathname === '/' ||
            window.location.pathname === '/home'
          ) {
            return '#fff';
          }
          return '#460D86';
        },
        font: {
          size: 20,
          weight: 'bold',
          lineHeight: 1.2,
        },
        padding: { top: 20, left: 0, right: 0, bottom: 0 },
      },
    },
    y: {
      display: true,
      title: {
        display: true,
        text: 'No. of Votes',
        color: function (e) {
          if (
            window.location.pathname === '/' ||
            window.location.pathname === '/home'
          ) {
            return '#fff';
          }
          return '#460D86';
        },
        font: {
          size: 20,
          weight: 'bold',
          lineHeight: 1.2,
        },
        padding: { top: 30, left: 0, right: 0, bottom: 0 },
      },
      ticks: {
        beginAtZero: true,
      },
    },
  },
};

function BarChart() {
    return (
      <div className='chart-div h-96 w-full p-10 absolute'>
        <Bar data={data} options={options} />
      </div>
    );
}

export default BarChart;