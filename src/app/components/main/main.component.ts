import { Component } from '@angular/core';
import { Chart } from '../../models/chart-data.model';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { ModalService } from 'src/app/shared/service/modal.service';
import { GraphViewModalComponent } from 'src/app/components/graph-view-modal/graph-view-modal.component';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  public navShow = false;

  chartOption: any = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      show: false,
    },
    yAxis: {
      type: 'value',
      splitLine: {
        show: false,
      },
      show: false,
      boundaryGap: [0, '1'],
    },
    series: [
      {
        data: [30, 25, 20, 25, 30, 25, 20],
        type: 'line',
        symbol: 'circle',
        symbolSize: 10,
        lineStyle: {
          color: '#d1cbcb',
          width: 2,
        },
        itemStyle: {
          color: 'green',
        },
      },
    ],
  };

  public chartsData: Chart[] = [
    {
      heading: 'DAF (1C)',
      subHeading:
        'Module Score - is the avarage of all parameter scores shown below.',
      title: 'DAF (1C)',
      chartOption: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: false,
          },
          show: false,
          boundaryGap: [0, '0.5'],
        },
        series: [
          {
            data: [30, 25, 20, 15, 10, 25, 30],
            type: 'line',
            symbol: 'circle',
            symbolSize: 10,
            lineStyle: {
              color: '#d1cbcb',
              width: 2,
            },
            itemStyle: {
              color: 'orange',
            },
          },
        ],
      },
      popoverChartOption: {
        backgroundColor: '#d1d1d1',
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          show: false,
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: false,
          },
          show: false,
          boundaryGap: [0, '0.5'],
        },
        series: [
          {
            data: [10, 30, 20, 25, 10, 35, 15],
            type: 'line',
            symbol: 'circle',
            symbolSize: 10,
            lineStyle: {
              color: 'gray',
              width: 2,
            },
            itemStyle: {
              color: 'green',
            },
          },
        ],
      },
      popoverBodyData: [
        {
          numberOfData: 5,
          heading: 'Mass',
          subHeading: 'Score average',
          showInstructions: false,
          instruction: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ipsa assumenda molestiae quos ratione aut magnam? Laborum excepturi dolor beatae impedit quidem maxime culpamsit? Mollitia veniam nobis aut odio dolorem minus recusandae ullam doloremque ratione adipisci atque, quod quas debitis dolor? Ea, itaque optio.`,
        },
        {
          numberOfData: 3,
          heading: 'Mass',
          subHeading: 'Score average',
          showInstructions: false,
          instruction: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ipsa assumenda molestiae quos ratione aut magnam? Laborum excepturi dolor beatae impedit quidem maxime culpamsit? Mollitia veniam nobis aut odio dolorem minus recusandae ullam doloremque ratione adipisci atque, quod quas debitis dolor? Ea, itaque optio.`,
        },
      ],
    },
    {
      heading: 'DAF (1C)',
      subHeading:
        'Module Score - is the avarage of all parameter scores shown below.',
      title: 'Area Chart',

      chartOption: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: false,
          },
          show: false,
          boundaryGap: [0, '0.5'],
        },
        series: [
          {
            data: [20, 30, 25, 30, 15, 10, 40],
            type: 'line',
            symbol: 'circle',
            symbolSize: 10,
            lineStyle: {
              color: '#d1cbcb',
              width: 2,
            },
            itemStyle: {
              color: 'white',
            },
          },
        ],
      },
      popoverChartOption: {
        backgroundColor: '#d1d1d1',
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          show: false,
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: false,
          },
          show: false,
          boundaryGap: [0, '0.5'],
        },
        series: [
          {
            data: [10, 30, 20, 25, 10, 35, 15],
            type: 'line',
            symbol: 'circle',
            symbolSize: 10,
            lineStyle: {
              color: 'gray',
              width: 2,
            },
            itemStyle: {
              color: 'green',
            },
          },
        ],
      },
      popoverBodyData: [
        {
          numberOfData: 3,
          heading: 'Mass',
          subHeading: 'Score average',
          showInstructions: false,
          instruction: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ipsa assumenda molestiae quos ratione aut magnam? Laborum excepturi dolor beatae impedit quidem maxime culpamsit? Mollitia veniam nobis aut odio dolorem minus recusandae ullam doloremque ratione adipisci atque, quod quas debitis dolor? Ea, itaque optio.`,
        },
        {
          numberOfData: 5,
          heading: 'Mass',
          subHeading: 'Score average',
          showInstructions: false,
          instruction: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ipsa assumenda molestiae quos ratione aut magnam? Laborum excepturi dolor beatae impedit quidem maxime culpamsit? Mollitia veniam nobis aut odio dolorem minus recusandae ullam doloremque ratione adipisci atque, quod quas debitis dolor? Ea, itaque optio.`,
        },
      ],
    },
    {
      heading: 'DAF (1C)',
      subHeading:
        'Module Score - is the avarage of all parameter scores shown below.',
      title: 'Global Chart',
      chartOption: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: false,
          },
          show: false,
          boundaryGap: [0, '0.5'],
        },
        series: [
          {
            data: [10, 15, 20, 25, 30, 35, 40],
            type: 'line',
            symbol: 'circle',
            symbolSize: 10,
            lineStyle: {
              color: '#d1cbcb',
              width: 2,
            },
            itemStyle: {
              color: 'green',
            },
          },
        ],
      },
      popoverChartOption: {
        backgroundColor: '#d1d1d1',
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          show: false,
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: false,
          },
          show: false,
          boundaryGap: [0, '0.5'],
        },
        series: [
          {
            data: [10, 30, 20, 25, 10, 35, 15],
            type: 'line',
            symbol: 'circle',
            symbolSize: 10,
            lineStyle: {
              color: 'gray',
              width: 2,
            },
            itemStyle: {
              color: 'green',
            },
          },
        ],
      },
      popoverBodyData: [
        {
          numberOfData: 5,
          heading: 'Mass',
          subHeading: 'Score average',
          showInstructions: false,
          instruction: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ipsa assumenda molestiae quos ratione aut magnam? Laborum excepturi dolor beatae impedit quidem maxime culpamsit? Mollitia veniam nobis aut odio dolorem minus recusandae ullam doloremque ratione adipisci atque, quod quas debitis dolor? Ea, itaque optio.`,
        },
        {
          numberOfData: 4,
          heading: 'Mass',
          subHeading: 'Score average',
          showInstructions: false,
          instruction: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ipsa assumenda molestiae quos ratione aut magnam? Laborum excepturi dolor beatae impedit quidem maxime culpamsit? Mollitia veniam nobis aut odio dolorem minus recusandae ullam doloremque ratione adipisci atque, quod quas debitis dolor? Ea, itaque optio.`,
        },
      ],
    },
    {
      heading: 'DAF (1C)',
      subHeading:
        'Module Score - is the avarage of all parameter scores shown below.',
      title: 'Stacked Chart',
      chartOption: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: false,
          },
          show: false,
          boundaryGap: [0, '0.5'],
        },
        series: [
          {
            data: [10, 30, 20, 15, 20, 20, 30],
            type: 'line',
            symbol: 'circle',
            symbolSize: 10,
            lineStyle: {
              color: '#d1cbcb',
              width: 2,
            },
            itemStyle: {
              color: 'yellow',
            },
          },
        ],
      },
      popoverChartOption: {
        backgroundColor: '#d1d1d1',
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          show: false,
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: false,
          },
          show: false,
          boundaryGap: [0, '0.5'],
        },
        series: [
          {
            data: [10, 30, 20, 25, 10, 35, 15],
            type: 'line',
            symbol: 'circle',
            symbolSize: 10,
            lineStyle: {
              color: 'gray',
              width: 2,
            },
            itemStyle: {
              color: 'green',
            },
          },
        ],
      },
      popoverBodyData: [
        {
          numberOfData: 7,
          heading: 'Mass',
          subHeading: 'Score average',
          showInstructions: false,
          instruction: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ipsa assumenda molestiae quos ratione aut magnam? Laborum excepturi dolor beatae impedit quidem maxime culpamsit? Mollitia veniam nobis aut odio dolorem minus recusandae ullam doloremque ratione adipisci atque, quod quas debitis dolor? Ea, itaque optio.`,
        },
        {
          numberOfData: 1,
          heading: 'Mass',
          subHeading: 'Score average',
          showInstructions: false,
          instruction: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ipsa assumenda molestiae quos ratione aut magnam? Laborum excepturi dolor beatae impedit quidem maxime culpamsit? Mollitia veniam nobis aut odio dolorem minus recusandae ullam doloremque ratione adipisci atque, quod quas debitis dolor? Ea, itaque optio.`,
        },
      ],
    },
    {
      heading: 'DAF (1C)',
      subHeading:
        'Module Score - is the avarage of all parameter scores shown below.',
      title: 'Area Chart',
      chartOption: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: false,
          },
          show: false,
          boundaryGap: [0, '0.5'],
        },
        series: [
          {
            data: [30, 30, 30, 30, 30, 30, 30],
            type: 'line',
            symbol: 'circle',
            symbolSize: 10,
            lineStyle: {
              color: '#d1cbcb',
              width: 2,
            },
            itemStyle: {
              color: 'red',
            },
          },
        ],
      },
      popoverChartOption: {
        backgroundColor: '#d1d1d1',
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          show: false,
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: false,
          },
          show: false,
          boundaryGap: [0, '0.5'],
        },
        series: [
          {
            data: [10, 30, 20, 25, 10, 35, 15],
            type: 'line',
            symbol: 'circle',
            symbolSize: 10,
            lineStyle: {
              color: 'gray',
              width: 2,
            },
            itemStyle: {
              color: 'green',
            },
          },
        ],
      },
      popoverBodyData: [
        {
          numberOfData: 5,
          heading: 'Mass',
          subHeading: 'Score average',
          showInstructions: false,
          instruction: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ipsa assumenda molestiae quos ratione aut magnam? Laborum excepturi dolor beatae impedit quidem maxime culpamsit? Mollitia veniam nobis aut odio dolorem minus recusandae ullam doloremque ratione adipisci atque, quod quas debitis dolor? Ea, itaque optio.`,
        },
        {
          numberOfData: 6,
          heading: 'Mass',
          subHeading: 'Score average',
          showInstructions: false,
          instruction: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ipsa assumenda molestiae quos ratione aut magnam? Laborum excepturi dolor beatae impedit quidem maxime culpamsit? Mollitia veniam nobis aut odio dolorem minus recusandae ullam doloremque ratione adipisci atque, quod quas debitis dolor? Ea, itaque optio.`,
        },
      ],
    },
    {
      heading: 'DAF (1C)',
      subHeading:
        'Module Score - is the avarage of all parameter scores shown below.',
      title: 'Stacked A',
      chartOption: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: false,
          },
          show: false,
          boundaryGap: [0, '0.5'],
        },
        series: [
          {
            data: [10, 20, 15, 20, 20, 10, 15],
            type: 'line',
            symbol: 'circle',
            symbolSize: 10,
            lineStyle: {
              color: '#d1cbcb',
              width: 2,
            },
            itemStyle: {
              color: 'pink',
            },
          },
        ],
      },
      popoverChartOption: {
        backgroundColor: '#d1d1d1',
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          show: false,
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: false,
          },
          show: false,
          boundaryGap: [0, '0.5'],
        },
        series: [
          {
            data: [10, 30, 20, 25, 10, 35, 15],
            type: 'line',
            symbol: 'circle',
            symbolSize: 10,
            lineStyle: {
              color: 'gray',
              width: 2,
            },
            itemStyle: {
              color: 'blue',
            },
          },
        ],
      },
      popoverBodyData: [
        {
          numberOfData: 8,
          heading: 'Mass',
          subHeading: 'Score average',
          showInstructions: false,
          instruction: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ipsa assumenda molestiae quos ratione aut magnam? Laborum excepturi dolor beatae impedit quidem maxime culpamsit? Mollitia veniam nobis aut odio dolorem minus recusandae ullam doloremque ratione adipisci atque, quod quas debitis dolor? Ea, itaque optio.`,
        },
        {
          numberOfData: 9,
          heading: 'Mass',
          subHeading: 'Score average',
          showInstructions: false,
          instruction: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ipsa assumenda molestiae quos ratione aut magnam? Laborum excepturi dolor beatae impedit quidem maxime culpamsit? Mollitia veniam nobis aut odio dolorem minus recusandae ullam doloremque ratione adipisci atque, quod quas debitis dolor? Ea, itaque optio.`,
        },
      ],
    },
  ];
}
