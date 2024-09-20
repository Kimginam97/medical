import React from 'react'
import Chart from 'react-apexcharts'

const DonutChart = ({ series, labels, width }) => {
  const colors =
    labels.length === 3
      ? ['#00A8A3', '#99DCDA', '#FFFFFF']
      : ['#00A8A3', '#FFFFFF']

  const options = {
    annotations: {},
    chart: {
      animations: {
        enabled: false,
      },
      background: 'transparent',
      dropShadow: {
        enabled: true,
        top: 1,
        left: 1,
        blur: 1,
        opacity: 0.25,
      },
      fontFamily: 'Roboto',
      height: 183,
      id: 'oFG74',
      stackOnlyBar: true,
      toolbar: {
        show: false,
      },
      type: 'donut',
      width: 298,
    },
    labels: labels,
    colors: colors,
    legend: {
      show: false,
      position: 'right',
      fontSize: 14,
      offsetX: -27,
      offsetY: 0,
      itemMargin: {
        vertical: 0,
      },
    },
    series: series,
    stroke: {
      show: false,
      fill: {
        type: 'solid',
        opacity: 0.85,
        gradient: {
          shade: 'dark',
          type: 'horizontal',
          shadeIntensity: 0.5,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 100],
          colorStops: [],
        },
      },
    },
    dataLabels: {
      enabled: false,
      formatter: (val, opts) => opts.w.globals.series[opts.seriesIndex], // Display raw value instead of percentage
      style: {
        fontSize: '16px',
        fontFamily: 'NanumSquareNeoOTF-Regular',
        fontWeight: 'bold',
        colors: ['#333'],
      },
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: (value) => value.toLocaleString(), // Display raw value in tooltip
      },
      theme: 'white',
      style: {
        fontSize: '14px',
        fontFamily: 'Roboto',
        colors: ['#727171'], // Change this color to your desired tooltip text color
      },
    },
    xaxis: {
      labels: {
        trim: true,
        style: {},
      },
      group: {
        groups: [],
        style: {
          colors: [],
          fontSize: '12px',
          fontWeight: 400,
          cssClass: '',
        },
      },
      title: {
        style: {
          fontWeight: 700,
        },
      },
    },
    yaxis: {
      labels: {
        style: {},
      },
      title: {
        style: {
          fontWeight: 700,
        },
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: '50%', // Adjust this value to increase or decrease the thickness
        },
      },
    },
  }

  return (
    <div>
      <Chart options={options} series={series} type="donut" width={width} />
    </div>
  )
}

export default DonutChart
