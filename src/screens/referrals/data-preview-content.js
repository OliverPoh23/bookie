/* eslint-disable react/display-name */
import React from 'react';
// UI
import Typography from 'components/typography';
import Chart from 'react-apexcharts';

export const dataPreviewContent = () => {
  const chart = {
    options: {
      chart: {
        type: 'area'
      },
      colors: ['#AD6CFF'],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: ['2018-09-19T00:00:00.000Z', '2018-09-19T01:30:00.000Z', '2018-09-19T02:30:00.000Z', '2018-09-19T03:30:00.000Z', '2018-09-19T04:30:00.000Z', '2018-09-19T05:30:00.000Z', '2018-09-19T06:30:00.000Z']
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
    },
    series: [
      {
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
      }
    ]
  };
  return [
    {
      header: () => (
        <Typography component="h5">Tier 1 <Typography component="span" className="text-gray-3 text-regular">4% Commission</Typography></Typography>
      ),
      body: () => (
        <div className="referrals-screen__info">
          <Chart
            options={chart.options}
            series={chart.series}
            type="area"
          />
        </div>
      ),
    },
    {
      header: () => (
        <Typography component="h5">$456.50 <Typography component="span" className="text-gray-3 text-regular">Wagered</Typography></Typography>
      ),
      body: () => (
        <div className="referrals-screen__info">
          <Chart
            options={chart.options}
            series={chart.series}
            type="area"
          />
        </div>
      ),
    },
  ];
};
