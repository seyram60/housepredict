
document.addEventListener('DOMContentLoaded', function () {
  // Set up the chart
  const chart = Highcharts.chart('chart', {
    chart: {
      zoomType: 'xy'
    },
    title: {
      text: 'Evolution du prix des maisons à Adidogomé'
    },
    subtitle: {
      text: 'Adidogomé'
    },
    xAxis: [{
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      crosshair: true
    }],
    yAxis: [{ // Primary yAxis
      labels: {
        format: '{value}',
        style: {
          color: Highcharts.getOptions().colors[1]
        }
      },
      title: {
        text: 'Maison',
        style: {
          color: Highcharts.getOptions().colors[1]
        }
      }
    }, { // Secondary yAxis
      title: {
        text: 'Appartement',
        style: {
          color: Highcharts.getOptions().colors[0]
        }
      },
      labels: {
        format: '{value}',
        style: {
          color: Highcharts.getOptions().colors[0]
        }
      },
      opposite: true
    }],
    tooltip: {
      shared: true
    },
    legend: {
      layout: 'vertical',
      align: 'left',
      x: 120,
      verticalAlign: 'top',
      y: 100,
      floating: true,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || // theme
        'rgba(255,255,255,0.25)'
    },
    series: [{
      name: 'Appartement',
      type: 'column',
      yAxis: 1,
      data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
      tooltip: {
        valueSuffix: 'Francs CFA '
      }

    }, {
      name: 'Maison',
      type: 'spline',
      data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
      tooltip: {
        valueSuffix: 'Francs CFA'
      }
    }]
  });

  const chartf = new Highcharts.chart('chart22', {
    chart: {
      type: 'areaspline'
    },
    title: {
      text: 'Eévolution des prix des loyers à Agoè'
    },
    legend: {
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      x: 150,
      y: 100,
      floating: true,
      borderWidth: 1,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
    },
    xAxis: {
      categories: [
        'Janvier',
        'Février',
        'Mars',
        'Avril',
        'Mai',
        'Juin',
      ],
      plotBands: [{ // visualize the weekend
        from: 4.5,
        to: 6.5,
        color: 'rgba(68, 170, 213, .2)'
      }]
    },
    yAxis: {
      title: {
        text: 'Maison'
      }
    },
    tooltip: {
      shared: true,
      valueSuffix: ' mille Francs CFA'
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      areaspline: {
        fillOpacity: 0.5
      }
    },
    series: [{
      name: 'Appartement',
      data: [3, 4, 3, 5, 4, 10]
    }, {
      name: 'Chambre Salon',
      data: [1, 3, 4, 3, 3, 5]
    }]
  });

  // Make monochrome colors
  var pieColors = (function () {
    var colors = [],
      base = Highcharts.getOptions().colors[0],
      i;

    for (i = 0; i < 10; i += 1) {
      // Start out with a darkened base color (negative brighten), and end
      // up with a much brighter color
      colors.push(Highcharts.color(base).brighten((i - 3) / 7).get());
    }
    return colors;
  }());

  // Build the chart
  Highcharts.chart('chart3', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Repartition des Ventes à lomé, 2022'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        colors: pieColors,
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
          distance: -50,
          filter: {
            property: 'percentage',
            operator: '>',
            value: 4
          }
        }
      }
    },
    series: [{
      name: 'Share',
      data: [
        { name: 'Adidogomé', y: 61.41 },
        { name: 'Tsévié', y: 11.84 },
        { name: 'Badou', y: 10.85 },
        { name: 'Nyékonakpoè', y: 4.67 },
        { name: 'Tokoin', y: 4.18 },
        { name: 'Agbalépédo', y: 7.05 }
      ]
    }]
  });



  Highcharts.chart('chart44', {
    chart: {
      type: 'tilemap',
      inverted: true
    },

    accessibility: {
      description: '',
      screenReaderSection: {
        beforeChartFormat:
          '<h5>{chartTitle}</h5>' +
          '<div>{chartSubtitle}</div>' +
          '<div>{chartLongdesc}</div>' +
          '<div>{viewTableButton}</div>'
      },
      point: {
        valueDescriptionFormat: '{index}. {xDescription}, {point.value}.'
      }
    },

    title: {
      text: 'Zonalisation des villes du Togo'
    },

    subtitle: {
      text: ''
    },

    xAxis: {
      visible: false
    },

    yAxis: {
      visible: false
    },

    colorAxis: {

      dataClasses: [{
        from: 0,
        to: 10,
        color: '#e3e354',
        name: '< 10'
      }, {
        from: 10,
        to: 50,
        color: '#1a7802',
        name: '10 - 50'
      }, {
        from: 50,
        to: 100,
        color: '#ddded7',
        name: '50 - 100'
      }, {
        from: 100,
        color: '#b3f9cc',
        name: '> 100'
      }]
    },

    mapNavigation: {
      enabled: false,
      enabledButtons: false,

    },

    tooltip: {
      headerFormat: '',
      pointFormat: 'La ville de <b> {point.name}</b> compte <b>{point.value}</b> quartiers'
    },

    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          format: '{point.hc-a2}',
          color: '#000000',
          style: {
            textOutline: false
          }
        }
      }
    },


    legend: {
      enabled: false
    },

    series: [{
      name: '',
      data: [{
        'hc-a2': 'Lo',
        name: 'Lomé',
        region: 'Maritime',
        x: 6,
        y: 7,
        value: 103
      }, {
        'hc-a2': 'AN',
        name: 'Agoè-Nyivé',
        region: 'Maritime',
        x: 5,
        y: 0,
        value: 26
      }, {
        'hc-a2': 'TS',
        name: 'Tsévié',
        region: 'Maritime',
        x: 5,
        y: 3,
        value: 11
      }, {
        'hc-a2': 'AT',
        name: 'Atakpamé',
        region: 'Maritime',
        x: 5,
        y: 6,
        value: 15
      }, {
        'hc-a2': 'ANH',
        name: 'Aného',
        region: 'Maritime',
        x: 5,
        y: 2,
        value: 15
      }, {
        'hc-a2': 'VG',
        name: 'Vogan',
        region: 'Maritime',
        x: 4,
        y: 3,
        value: 8
      }, {
        'hc-a2': 'KP',
        name: 'Kpalimé',
        region: 'Maritime',
        x: 3,
        y: 11,
        value: 26
      }, {
        'hc-a2': 'NT',
        name: 'Notsè',
        region: 'Maritime',
        x: 4,
        y: 9,
        value: 14
      }, {
        'hc-a2': 'SO',
        name: 'Sotouboua',
        region: 'Maritime',
        x: 4,
        y: 10,
        value: 13
      }, {
        'hc-a2': 'BR',
        name: 'Bassar',
        region: 'Maritime',
        x: 4,
        y: 7,
        value: 17
      }, {
        'hc-a2': 'KR',
        name: 'Kara',
        region: 'Maritime',
        x: 5,
        y: 1,
        value: 9
      }, {
        'hc-a2': 'DG',
        name: 'Dapaong',
        region: 'Maritime',
        x: 4,
        y: 2,
        value: 13
      }, {
        'hc-a2': 'SK',
        name: 'Sokodé',
        region: 'Maritime',
        x: 3,
        y: 2,
        value: 13
      }, {
        'hc-a2': 'CK',
        name: 'Cinkassé',
        region: 'Maritime',
        x: 3,
        y: 6,
        value: 8
      }, {
        'hc-a2': 'MG',
        name: 'Mango',
        region: 'Maritime',
        x: 3,
        y: 7,
        value: 6
      }, {
        'hc-a2': 'BD',
        name: 'Badou',
        region: 'Maritime',
        x: 3,
        y: 5,
        value: 3
      }, {
        'hc-a2': 'ANE',
        name: 'Anié',
        region: 'Maritime',
        x: 5,
        y: 5,
        value: 2
      }, {
        'hc-a2': 'AF',
        name: 'Afagnan',
        region: 'Maritime',
        x: 4,
        y: 6,
        value: 4
      }, {
        'hc-a2': 'AM',
        name: 'Amlamé',
        region: 'Maritime',
        x: 6,
        y: 5,
        value: 4649676
      }, {
        'hc-a2': 'AG',
        name: 'Agou',
        region: 'Maritime',
        x: 2,
        y: 2,
        value: 13
      }, {
        'hc-a2': 'KV',
        name: 'Kévé',
        region: 'Maritime',
        x: 4,
        y: 8,
        value: 6
      }, {
        'hc-a2': 'TH',
        name: 'Tchamba',
        region: 'Maritime',
        x: 2,
        y: 10,
        value: 8
      }, {
        'hc-a2': 'PK',
        name: 'Pakouda',
        region: 'Maritime',
        x: 2,
        y: 7,
        value: 9
      }, {
        'hc-a2': 'BF',
        name: 'Bafilo',
        region: 'Maritime',
        x: 2,
        y: 4,
        value: 5
      }, {
        'hc-a2': 'TL',
        name: 'Tabligbo',
        region: 'Maritime',
        x: 6,
        y: 6,
        value: 9
      }, {
        'hc-a2': 'NI',
        name: 'Niamtougou',
        region: 'Maritime',
        x: 4,
        y: 5,
        value: 6
      }, {
        'hc-a2': 'BL',
        name: 'Blitta',
        region: 'Maritime',
        x: 2,
        y: 2,
        value: 10
      }, {
        'hc-a2': 'EL',
        name: 'Elavagno',
        region: 'Maritime',
        x: 4,
        y: 4,
        value: 1
      }, {
        'hc-a2': 'MA',
        name: 'Mandouri',
        region: 'Maritime',
        x: 4,
        y: 2,
        value: 2
      }, {
        'hc-a2': 'TA',
        name: 'Tandjoarè',
        region: 'Maritime',
        x: 3,
        y: 3,
        value: 7
      }, {
        'hc-a2': 'KO',
        name: 'Kouka',
        region: 'Maritime',
        x: 3,
        y: 10,
        value: 8
      }, {
        'hc-a2': 'AD',
        name: 'Adéta',
        region: 'Maritime',
        x: 6,
        y: 3,
        value: 2
      }, {
        'hc-a2': 'DA',
        name: 'Danyi',
        region: 'Maritime',
        x: 2,
        y: 9,
        value: 7
      }, {
        'hc-a2': 'DJ',
        name: 'Djarkpanga',
        region: 'Maritime',
        x: 5,
        y: 9,
        value: 10
      }, {
        'hc-a2': 'KG',
        name: 'Kougnoou',
        region: 'Maritime',
        x: 2,
        y: 3,
        value: 7
      }, {
        'hc-a2': 'TO',
        name: 'Tohoun',
        region: 'Maritime',
        x: 3,
        y: 8,
        value: 5
      }, {
        'hc-a2': 'NA',
        name: 'Naki Est',
        region: 'Maritime',
        x: 6,
        y: 4,
        value: 3
      }, {
        'hc-a2': 'AM',
        name: 'Amou',
        region: 'Maritime',
        x: 4,
        y: 1,
        value: 5
      }]
    }]
  });


  Highcharts.chart('chart4', {
    chart: {
      type: 'tilemap',
      inverted: true
    },

    accessibility: {
      description: '',
      screenReaderSection: {
        beforeChartFormat:
          '<h5>{chartTitle}</h5>' +
          '<div>{chartSubtitle}</div>' +
          '<div>{chartLongdesc}</div>' +
          '<div>{viewTableButton}</div>'
      },
      point: {
        valueDescriptionFormat: '{index}. {xDescription}, {point.value}.'
      }
    },

    title: {
      text: 'Zonalisation des villes du Togo'
    },

    subtitle: {
      text: ''
    },

    xAxis: {
      visible: false
    },

    yAxis: {
      visible: false
    },

    colorAxis: {

      dataClasses: [{
        from: 0,
        to: 10,
        color: '#e3e354',
        name: '< 10'
      }, {
        from: 10,
        to: 50,
        color: '#1a7802',
        name: '10 - 50'
      }, {
        from: 50,
        to: 100,
        color: '#ddded7',
        name: '50 - 100'
      }, {
        from: 100,
        color: '#b3f9cc',
        name: '> 100'
      }]
    },

    mapNavigation: {
      enabled: false,
      enabledButtons: false,

    },

    tooltip: {
      headerFormat: '',
      pointFormat: 'La ville de <b> {point.name}</b> compte <b>{point.value}</b> quartiers'
    },

    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          format: '{point.hc-a2}',
          color: '#000000',
          style: {
            textOutline: false
          }
        }
      }
    },


    legend: {
      enabled: false
    },

    series: [{
      name: '',
      data: [{
        'hc-a2': 'Lomé',
        name: 'Lomé',
        region: 'Maritime',
        x: 6,
        y: 7,
        value: 103
      }, {
        'hc-a2': 'Agoè-Nyivé',
        name: 'Agoè-Nyivé',
        region: 'Maritime',
        x: 5,
        y: 0,
        value: 26
      }, {
        'hc-a2': 'Tsévié',
        name: 'Tsévié',
        region: 'Maritime',
        x: 5,
        y: 3,
        value: 11
      }, {
        'hc-a2': 'Atakpamé',
        name: 'Atakpamé',
        region: 'Maritime',
        x: 5,
        y: 6,
        value: 15
      }, {
        'hc-a2': 'Aného',
        name: 'Aného',
        region: 'Maritime',
        x: 5,
        y: 2,
        value: 15
      }, {
        'hc-a2': 'Vogan',
        name: 'Vogan',
        region: 'Maritime',
        x: 4,
        y: 3,
        value: 8
      }, {
        'hc-a2': 'Kpalimé',
        name: 'Kpalimé',
        region: 'Maritime',
        x: 3,
        y: 11,
        value: 26
      }, {
        'hc-a2': 'Notsè',
        name: 'Notsè',
        region: 'Maritime',
        x: 4,
        y: 9,
        value: 14
      }, {
        'hc-a2': 'Sotouboua',
        name: 'Sotouboua',
        region: 'Maritime',
        x: 4,
        y: 10,
        value: 13
      }, {
        'hc-a2': 'Bassar',
        name: 'Bassar',
        region: 'Maritime',
        x: 4,
        y: 7,
        value: 17
      }, {
        'hc-a2': 'Kara',
        name: 'Kara',
        region: 'Maritime',
        x: 5,
        y: 1,
        value: 9
      }, {
        'hc-a2': 'Dapaong',
        name: 'Dapaong',
        region: 'Maritime',
        x: 4,
        y: 2,
        value: 13
      }, {
        'hc-a2': 'Sokodé',
        name: 'Sokodé',
        region: 'Maritime',
        x: 3,
        y: 2,
        value: 13
      }, {
        'hc-a2': 'Cinkassé',
        name: 'Cinkassé',
        region: 'Maritime',
        x: 3,
        y: 6,
        value: 8
      }, {
        'hc-a2': 'Mango',
        name: 'Mango',
        region: 'Maritime',
        x: 3,
        y: 7,
        value: 6
      }, {
        'hc-a2': 'Badou',
        name: 'Badou',
        region: 'Maritime',
        x: 3,
        y: 5,
        value: 3
      }, {
        'hc-a2': 'Anié',
        name: 'Anié',
        region: 'Maritime',
        x: 5,
        y: 5,
        value: 2
      }, {
        'hc-a2': 'Afagnan',
        name: 'Afagnan',
        region: 'Maritime',
        x: 4,
        y: 6,
        value: 4
      }, {
        'hc-a2': 'Amlamé',
        name: 'Amlamé',
        region: 'Maritime',
        x: 6,
        y: 5,
        value: 46
      }, {
        'hc-a2': 'Agou',
        name: 'Agou',
        region: 'Maritime',
        x: 2,
        y: 2,
        value: 13
      }, {
        'hc-a2': 'Kévé',
        name: 'Kévé',
        region: 'Maritime',
        x: 4,
        y: 8,
        value: 6
      }, {
        'hc-a2': 'Tchamba',
        name: 'Tchamba',
        region: 'Maritime',
        x: 2,
        y: 10,
        value: 8
      }, {
        'hc-a2': 'Pakouda',
        name: 'Pakouda',
        region: 'Maritime',
        x: 2,
        y: 7,
        value: 9
      }, {
        'hc-a2': 'Bafilo',
        name: 'Bafilo',
        region: 'Maritime',
        x: 2,
        y: 4,
        value: 5
      }, {
        'hc-a2': 'Tabligbo',
        name: 'Tabligbo',
        region: 'Maritime',
        x: 6,
        y: 6,
        value: 9
      }, {
        'hc-a2': 'Niamtougou',
        name: 'Niamtougou',
        region: 'Maritime',
        x: 4,
        y: 5,
        value: 6
      }, {
        'hc-a2': 'Blitta',
        name: 'Blitta',
        region: 'Maritime',
        x: 2,
        y: 2,
        value: 10
      }, {
        'hc-a2': 'Elavagno',
        name: 'Elavagno',
        region: 'Maritime',
        x: 4,
        y: 4,
        value: 1
      }, {
        'hc-a2': 'Mandouri',
        name: 'Mandouri',
        region: 'Maritime',
        x: 4,
        y: 2,
        value: 2
      }, {
        'hc-a2': 'Tandjoarè',
        name: 'Tandjoarè',
        region: 'Maritime',
        x: 3,
        y: 3,
        value: 7
      }, {
        'hc-a2': 'Kouka',
        name: 'Kouka',
        region: 'Maritime',
        x: 3,
        y: 10,
        value: 8
      }, {
        'hc-a2': 'Adéta',
        name: 'Adéta',
        region: 'Maritime',
        x: 6,
        y: 3,
        value: 2
      }, {
        'hc-a2': 'Danyi',
        name: 'Danyi',
        region: 'Maritime',
        x: 2,
        y: 9,
        value: 7
      }, {
        'hc-a2': 'Djarkpanga',
        name: 'Djarkpanga',
        region: 'Maritime',
        x: 5,
        y: 9,
        value: 10
      }, {
        'hc-a2': 'Kougnoou',
        name: 'Kougnoou',
        region: 'Maritime',
        x: 2,
        y: 3,
        value: 7
      }, {
        'hc-a2': 'Tohoun',
        name: 'Tohoun',
        region: 'Maritime',
        x: 3,
        y: 8,
        value: 5
      }, {
        'hc-a2': 'Naki Est',
        name: 'Naki Est',
        region: 'Maritime',
        x: 6,
        y: 4,
        value: 3
      }, {
        'hc-a2': 'Amou',
        name: 'Amou',
        region: 'Maritime',
        x: 4,
        y: 1,
        value: 5
      }]
    }]
  });


});



function showValues() {
  document.getElementById('alpha-value').innerHTML = chart.options.chart.options3d.alpha;
  document.getElementById('beta-value').innerHTML = chart.options.chart.options3d.beta;
  document.getElementById('depth-value').innerHTML = chart.options.chart.options3d.depth;
}

// Activate the sliders
document.querySelectorAll('#sliders input').forEach(input => input.addEventListener('input', e => {
  chart.options.chart.options3d[e.target.id] = parseFloat(e.target.value);
  showValues();
  chart.redraw(false);
}));

showValues();




Highcharts.chart('cont', {
  chart: {
    type: 'tilemap',
    inverted: true
  },

  accessibility: {
    description: 'A tile map represents the states of the USA by population in 2016. The hexagonal tiles are positioned to geographically echo the map of the USA. A color-coded legend states the population levels as below 1 million (beige), 1 to 5 million (orange), 5 to 20 million (pink) and above 20 million (hot pink). The chart is interactive, and the individual state data points are displayed upon hovering. Three states have a population of above 20 million: California (39.3 million), Texas (27.9 million) and Florida (20.6 million). The northern US region from Massachusetts in the Northwest to Illinois in the Midwest contains the highest concentration of states with a population of 5 to 20 million people. The southern US region from South Carolina in the Southeast to New Mexico in the Southwest contains the highest concentration of states with a population of 1 to 5 million people. 6 states have a population of less than 1 million people; these include Alaska, Delaware, Wyoming, North Dakota, South Dakota and Vermont. The state with the lowest population is Wyoming in the Northwest with 584,153 people.',
    screenReaderSection: {
      beforeChartFormat:
        '<h5>{chartTitle}</h5>' +
        '<div>{chartSubtitle}</div>' +
        '<div>{chartLongdesc}</div>' +
        '<div>{viewTableButton}</div>'
    },
    point: {
      valueDescriptionFormat: '{index}. {xDescription}, {point.value}.'
    }
  },

  title: {
    text: 'U.S. states by population in 2016'
  },

  subtitle: {
    text: 'Source:<a href="https://simple.wikipedia.org/wiki/List_of_U.S._states_by_population">Wikipedia</a>'
  },

  xAxis: {
    visible: false
  },

  yAxis: {
    visible: false
  },

  colorAxis: {
    dataClasses: [{
      from: 0,
      to: 1000000,
      color: '#F9EDB3',
      name: '< 1M'
    }, {
      from: 1000000,
      to: 5000000,
      color: '#FFC428',
      name: '1M - 5M'
    }, {
      from: 5000000,
      to: 20000000,
      color: '#FF7987',
      name: '5M - 20M'
    }, {
      from: 20000000,
      color: '#FF2371',
      name: '> 20M'
    }]
  },

  tooltip: {
    headerFormat: '',
    pointFormat: 'The population of <b> {point.name}</b> is <b>{point.value}</b>'
  },

  plotOptions: {
    series: {
      dataLabels: {
        enabled: true,
        format: '{point.hc-a2}',
        color: '#000000',
        style: {
          textOutline: false
        }
      }
    }
  },

  series: [{
    name: '',
    data: [{
      'hc-a2': 'Lomé',
      name: 'Lomé',
      region: 'Maritime',
      x: 6,
      y: 7,
      value: 103
    }, {
      'hc-a2': 'Agoè-Nyivé',
      name: 'Agoè-Nyivé',
      region: 'Maritime',
      x: 5,
      y: 0,
      value: 26
    }, {
      'hc-a2': 'Tsévié',
      name: 'Tsévié',
      region: 'Maritime',
      x: 5,
      y: 3,
      value: 11
    }, {
      'hc-a2': 'Atakpamé',
      name: 'Atakpamé',
      region: 'Maritime',
      x: 5,
      y: 6,
      value: 15
    }, {
      'hc-a2': 'Aného',
      name: 'Aného',
      region: 'Maritime',
      x: 5,
      y: 2,
      value: 15
    }, {
      'hc-a2': 'Vogan',
      name: 'Vogan',
      region: 'Maritime',
      x: 4,
      y: 3,
      value: 8
    }, {
      'hc-a2': 'Kpalimé',
      name: 'Kpalimé',
      region: 'Maritime',
      x: 3,
      y: 11,
      value: 26
    }, {
      'hc-a2': 'Notsè',
      name: 'Notsè',
      region: 'Maritime',
      x: 4,
      y: 9,
      value: 14
    }, {
      'hc-a2': 'Sotouboua',
      name: 'Sotouboua',
      region: 'Maritime',
      x: 4,
      y: 10,
      value: 13
    }, {
      'hc-a2': 'Bassar',
      name: 'Bassar',
      region: 'Maritime',
      x: 4,
      y: 7,
      value: 17
    }, {
      'hc-a2': 'Kara',
      name: 'Kara',
      region: 'Maritime',
      x: 5,
      y: 1,
      value: 9
    }, {
      'hc-a2': 'Dapaong',
      name: 'Dapaong',
      region: 'Maritime',
      x: 4,
      y: 2,
      value: 13
    }, {
      'hc-a2': 'Sokodé',
      name: 'Sokodé',
      region: 'Maritime',
      x: 3,
      y: 2,
      value: 13
    }, {
      'hc-a2': 'Cinkassé',
      name: 'Cinkassé',
      region: 'Maritime',
      x: 3,
      y: 6,
      value: 8
    }, {
      'hc-a2': 'Mango',
      name: 'Mango',
      region: 'Maritime',
      x: 3,
      y: 7,
      value: 6
    }, {
      'hc-a2': 'Badou',
      name: 'Badou',
      region: 'Maritime',
      x: 3,
      y: 5,
      value: 3
    }, {
      'hc-a2': 'Anié',
      name: 'Anié',
      region: 'Maritime',
      x: 5,
      y: 5,
      value: 2
    }, {
      'hc-a2': 'Afagnan',
      name: 'Afagnan',
      region: 'Maritime',
      x: 4,
      y: 6,
      value: 4
    }, {
      'hc-a2': 'Amlamé',
      name: 'Amlamé',
      region: 'Maritime',
      x: 6,
      y: 5,
      value: 4649676
    }, {
      'hc-a2': 'Agou',
      name: 'Agou',
      region: 'Maritime',
      x: 2,
      y: 2,
      value: 13
    }, {
      'hc-a2': 'Kévé',
      name: 'Kévé',
      region: 'Maritime',
      x: 4,
      y: 8,
      value: 6
    }, {
      'hc-a2': 'Tchamba',
      name: 'Tchamba',
      region: 'Maritime',
      x: 2,
      y: 10,
      value: 8
    }, {
      'hc-a2': 'Pakouda',
      name: 'Pakouda',
      region: 'Maritime',
      x: 2,
      y: 7,
      value: 9
    }, {
      'hc-a2': 'Bafilo',
      name: 'Bafilo',
      region: 'Maritime',
      x: 2,
      y: 4,
      value: 5
    }, {
      'hc-a2': 'Tabligbo',
      name: 'Tabligbo',
      region: 'Maritime',
      x: 6,
      y: 6,
      value: 9
    }, {
      'hc-a2': 'Niamtougou',
      name: 'Niamtougou',
      region: 'Maritime',
      x: 4,
      y: 5,
      value: 6
    }, {
      'hc-a2': 'Blitta',
      name: 'Blitta',
      region: 'Maritime',
      x: 2,
      y: 2,
      value: 10
    }, {
      'hc-a2': 'Elavagno',
      name: 'Elavagno',
      region: 'Maritime',
      x: 4,
      y: 4,
      value: 1
    }, {
      'hc-a2': 'Mandouri',
      name: 'Mandouri',
      region: 'Maritime',
      x: 4,
      y: 2,
      value: 2
    }, {
      'hc-a2': 'Tandjoarè',
      name: 'Tandjoarè',
      region: 'Maritime',
      x: 3,
      y: 3,
      value: 7
    }, {
      'hc-a2': 'Kouka',
      name: 'Kouka',
      region: 'Maritime',
      x: 3,
      y: 10,
      value: 8
    }, {
      'hc-a2': 'Adéta',
      name: 'Adéta',
      region: 'Maritime',
      x: 6,
      y: 3,
      value: 2
    }, {
      'hc-a2': 'Danyi',
      name: 'Danyi',
      region: 'Maritime',
      x: 2,
      y: 9,
      value: 7
    }, {
      'hc-a2': 'Djarkpanga',
      name: 'Djarkpanga',
      region: 'Maritime',
      x: 5,
      y: 9,
      value: 10
    }, {
      'hc-a2': 'Kougnoou',
      name: 'Kougnoou',
      region: 'Maritime',
      x: 2,
      y: 3,
      value: 7
    }, {
      'hc-a2': 'Tohoun',
      name: 'Tohoun',
      region: 'Maritime',
      x: 3,
      y: 8,
      value: 5
    }, {
      'hc-a2': 'Naki Est',
      name: 'Naki Est',
      region: 'Maritime',
      x: 6,
      y: 4,
      value: 3
    }, {
      'hc-a2': 'Amou',
      name: 'Amou',
      region: 'Maritime',
      x: 4,
      y: 1,
      value: 5
    }]
  }]
});

