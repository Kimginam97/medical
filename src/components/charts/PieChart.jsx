import React from 'react'
import Chart from 'react-apexcharts'

const PieChart = ({ series }) => {
  const options = {
    annotations: {},
    chart: {
      animations: {
        enabled: false,
      },
      foreColor: '#333',
      fontFamily: 'Roboto',
      height: 250,
      id: 'nighe',
      stackOnlyBar: true,
      toolbar: {
        show: false,
      },
      type: 'pie',
      width: 300,
    },
    plotOptions: {
      line: {
        isSlopeChart: false,
      },
      bar: {
        borderRadius: 10,
        borderRadiusApplication: 'end',
        borderRadiusWhenStacked: 'last',
        hideZeroBarsWhenGrouped: false,
        isDumbbell: false,
        isFunnel: false,
        isFunnel3d: true,
        dataLabels: {
          total: {
            enabled: false,
            offsetX: 0,
            offsetY: 0,
            style: {
              color: '#373d3f',
              fontSize: '12px',
              fontWeight: 600,
            },
          },
        },
      },
      bubble: {
        zScaling: true,
      },
      treemap: {
        borderRadius: 4,
        dataLabels: {
          format: 'scale',
        },
      },
      radialBar: {
        hollow: {
          background: '#fff',
        },
        dataLabels: {
          name: {},
          value: {},
          total: {},
        },
        barLabels: {
          enabled: false,
          margin: 5,
          useSeriesColors: true,
          fontWeight: 600,
          fontSize: '16px',
        },
      },
      pie: {
        donut: {
          labels: {
            name: {
              show: false, // Disable name labels
            },
            value: {
              show: false, // Disable value labels
            },
            total: {
              show: false, // Disable total labels
            },
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function (val, opts) {
            return '' // Disable percentage labels
          },
        },
      },
    },
    colors: ['#E3E3E3', '#CCEEED', '#99DCDA', '#33B9B5'],
    dataLabels: {
      enabled: false,
      style: {
        fontWeight: 700,
      },
    },
    fill: {
      opacity: 1,
    },
    grid: {
      padding: {
        right: 25,
        left: 15,
      },
    },
    labels: ['도착', '준비중', '준비완료', '진료대기'],
    legend: {
      show: false,
      position: 'right',
      fontSize: 14,
      offsetY: 0,
      itemMargin: {
        vertical: 0,
      },
    },
    series: series,
    stroke: {
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
    tooltip: {
      hideEmptySeries: false,
      fillSeriesColor: true,
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
  }

  return (
    <div>
      <Chart options={options} series={series} type="pie" width="230" />
    </div>
  )
}

export default PieChart
