import React from 'react';
import { Doughnut } from 'react-chartjs-2';

function DoughnutChart() {

  const VotersData = {
    name: 'Voters',
    labels: ['Voters'],
    datasets: [
      {
        label: 'No. of Voters',
        data: [500],
        backgroundColor: ['rgba(6, 20, 147, 0.8)'],
        borderWidth: 0,
      },
    ],
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        title: {
          display: true,
          text: 'Number of registered voters',
          position: 'bottom',
          fontSize: 30,
        },
      },
    },
    plugins: [
      {
        beforeDraw: function (chart) {
          var width = chart.width,
            height = chart.height,
            ctx = chart.ctx;

          ctx.restore();
          var fontSize = (height / 160).toFixed(2);
          ctx.font = fontSize + 'em sans-serif';
          ctx.textBaseline = 'middle';

          var text = '500',
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;

          ctx.fillText(text, textX, textY);
          ctx.save();
        },
      },
    ],
  };
  const VotesData = {
    name: 'Votes',
    labels: ['Votes'],
    datasets: [
      {
        label: 'Total Number of Votes',
        data: [480, 20],
        backgroundColor: ['rgba(35, 135, 81, 0.9)', 'rgba(144, 254, 155, 0.5)'],
        borderWidth: 0,
      },
    ],
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        title: {
          display: true,
          text: 'Total Number of votes',
          position: 'bottom',
          fontSize: 30,
        },
      },
    },
    plugins: [
      {
        beforeDraw: function (chart) {
          var width = chart.width,
            height = chart.height,
            ctx = chart.ctx;

          ctx.restore();
          var fontSize = (height / 160).toFixed(2);
          ctx.font = fontSize + 'em sans-serif';
          ctx.textBaseline = 'middle';

          var text = '480',
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;

          ctx.fillText(text, textX, textY);
          ctx.save();
        },
      },
    ],
  };
  const CandidateData = {
    name: 'Candidates',
    labels: ['Candidates'],
    datasets: [
      {
        label: 'No. of Candidates',
        data: [495, 5],
        backgroundColor: ['#F2FCB3', '#E5E941'],
        borderWidth: 0,
      },
    ],
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        title: {
          display: true,
          text: 'Number of registered Candidates',
          position: 'bottom',
          fontSize: 30,
        },
      },
    },
    plugins: [
      {
        beforeDraw: function (chart) {
          var width = chart.width,
            height = chart.height,
            ctx = chart.ctx;

          ctx.restore();
          var fontSize = (height / 160).toFixed(2);
          ctx.font = fontSize + 'em sans-serif';
          ctx.textBaseline = 'middle';

          var text = '5',
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;

          ctx.fillText(text, textX, textY);
          ctx.save();
        },
      },
    ],
  };
  
  return (
    <div className='content flex flex-warp align-center justify-between text-center'>
      <div className='w-1/3 text-center align-center h-auto my-8 relative'>
        <div className='py-10 px-10'>
          <Doughnut
            data={VotersData}
            options={VotersData.options}
            plugins={VotersData.plugins}
          />
        </div>
      </div>
      <div className='w-1/3 text-center align-center h-auto my-8 relative'>
        <div className='py-10 px-10'>
          <Doughnut
            data={VotesData}
            options={VotesData.options}
            plugins={VotesData.plugins}
          />
        </div>
      </div>
      <div className='w-1/3 text-center align-center h-auto my-8 relative'>
        <div className='py-10 px-10'>
          <Doughnut
            data={CandidateData}
            options={CandidateData.options}
            plugins={CandidateData.plugins}
          />
        </div>
      </div>
    </div>
  );
}

export default DoughnutChart;
