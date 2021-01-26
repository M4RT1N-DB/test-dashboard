import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  data = [
    { title: 'Net Sales', cant: 17 },
    { title: 'Counts', cant: 2 },
    { title: 'Discounts', cant: 0 },
    { title: 'Taxes', cant: 1.62 },
    { title: 'Gross Sales', cant: 17 },
  ];
  //-------------------------------------------
  chartData: ChartDataSets[] = [
    { data: [1, 7, 3, 5, 5, 9, 7, 1, 9, 5], label: '' },
  ];
  chartLabels: Label[] = [
    'jan 1',
    'jan 2',
    'jan 3',
    'jan 4',
    'jan 5',
    'jan 6',
    'jan 7',
    'jan 8',
    'jan 9',
    'jan 10',
  ];
  //-------------------------------------------
  dataDashBoard2 = [
    {
      title: 'Gross Sales',
      price: '$1,578.00',
      chartData: this.chartData,
      chartLabels: this.chartLabels,
    },
    {
      title: 'Net Sales',
      price: '$2,578.00',
      chartData: this.chartData,
      chartLabels: this.chartLabels,
    },
    {
      title: 'Total Customers',
      price: '0',
      chartData: this.chartData,
      chartLabels: this.chartLabels,
    },
    {
      title: 'Total Covers',
      price: '150',
      chartData: this.chartData,
      chartLabels: this.chartLabels,
    },
    {
      title: 'Total Orders',
      price: '215',
      chartData: this.chartData,
      chartLabels: this.chartLabels,
    },
    {
      title: 'Total Employees',
      price: '152',
      chartData: this.chartData,
      chartLabels: this.chartLabels,
    },
    {
      title: 'Total Taxes',
      price: '$7,578.00',
      chartData: this.chartData,
      chartLabels: this.chartLabels,
    },
    {
      title: 'Total Tips',
      price: '$8,578.00',
      chartData: this.chartData,
      chartLabels: this.chartLabels,
    },
    {
      title: 'Total Returning Customers',
      price: '100',
      chartData: this.chartData,
      chartLabels: this.chartLabels,
    },
  ];
  //-------------------------------------------
  lineChartData: ChartDataSets[] = [
    {
      data: [
        85,
        72,
        78,
        75,
        77,
        75,
        125,
        169,
        258,
        358,
        784,
        124,
        965,
        314,
        523,
        123,
        352,
        148,
        569,
      ],
      label: '',
    },
  ];

  lineChartLabels: Label[] = [
    'jan 04, 2021',
    'jan 05, 2021',
    'jan 06, 2021',
    'jan 07, 2021',
    'jan 08, 2021',
    'jan 09, 2021',
    'jan 10, 2021',
    'jan 11, 2021',
    'jan 12, 2021',
    'jan 13, 2021',
    'jan 14, 2021',
    'jan 15, 2021',
    'jan 16, 2021',
    'jan 17, 2021',
    'jan 18, 2021',
    'jan 19, 2021',
    'jan 20, 2021',
    'jan 21, 2021',
    'jan 22, 2021',
  ];

  lineChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes:[{
        position:'bottom',
        
      }]
    },
    plugins:{
      datalabels:{
      }
    }
  };

  lineChartColors: Color[] = [
    {
      backgroundColor: 'transparent',
      borderColor: 'rgba(229,31,137)',
      pointBackgroundColor: 'rgba(229,31,137)',
      pointBorderColor: '#000',
      pointHoverBackgroundColor: '#000',
      pointHoverBorderColor: 'rgba(229,31,137)',
    },
  ];
  //----A boolean for whether or not a legend should be displayed above the chart.
  lineChartLegend = false;

  lineChartPlugins = [];
  //This sets the base type of the chart. The value can be pie, doughnut, bar, line, polarArea, radar or horizontalBar.
  lineChartType: ChartType = 'line';

  //------------------------------------------
  constructor() {}

  ngOnInit(): void {}
}
