import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';
import { NzSelectComponent } from 'ng-zorro-antd/select';

import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css'],
})
export class SalesComponent implements OnInit {
  data: string[] = [];
  dataCards = [
    { title: 'Net Sales', cant: 17 },
    { title: 'Counts', cant: 2 },
    { title: 'Discounts', cant: 0 },
    { title: 'Taxes', cant: 1.62 },
    { title: 'Gross Sales', cant: 17 },
    { title: 'data-title', cant: 15 },
    { title: 'data title 2', cant: 8 },
  ];
  date = ['2021-02-06', '2021-02-06'];
  valueDate: string = '0';
  @ViewChild('changeDate') select!: NzSelectComponent;
  @ViewChild('rangeDate') rangeDate!: NzDatePickerComponent;

  info = [
    [
      { name: 'Cash', value: 15 },
      { name: 'Visa', value: 20 },
      { name: 'Mastercard', value: 30 },
      { name: 'Grubhub', value: 16 },
    ],
    [
      { name: 'Visa', value: 15 },
      { name: 'Mastercard', value: 30 },
      { name: 'Grubhub', value: 20 },
    ],
  ];

  lineChartData: ChartDataSets[] = [
    {
      data: [15, 20, 30, 16],
      label: 'TRANSITIONS BY QUANTITY',
    },
  ];

  lineChartLabels: Label[] = ['Cash', 'Visa', 'Mastercard', 'Grubhub'];

  lineChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [
        {
          position: 'bottom',
        },
      ],
    },
    plugins: {
      datalabels: {},
    },
  };

  lineChartColors: Color[] = [
    {
      backgroundColor: ['#eb9baf', '#d4ecfc', '#fbf4db', '#d4f2db'],
      borderColor: ['#d5388e', '#366aaa', '#cc9c4f', '#50b2ba'],
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
  lineChartType1: ChartType = 'doughnut';

  lineChartData2: ChartDataSets[] = [
    {
      data: [15, 20, 30],
      label: 'TRANSITIONS BY QUANTITY',
    },
  ];

  lineChartLabels2: Label[] = ['Cash', 'Visa', 'Mastercard'];

  lineChartOptions2: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [
        {
          position: 'bottom',
        },
      ],
    },
    plugins: {
      datalabels: {},
    },
  };

  lineChartColors2: Color[] = [
    {
      backgroundColor: ['#eb9baf', '#d4ecfc', '#fbf4db', '#d4f2db'],
      borderColor: ['#d5388e', '#366aaa', '#cc9c4f', '#50b2ba'],
      pointBackgroundColor: 'rgba(229,31,137)',
      pointBorderColor: '#000',
      pointHoverBackgroundColor: '#000',
      pointHoverBorderColor: 'rgba(229,31,137)',
    },
  ];
  //----A boolean for whether or not a legend should be displayed above the chart.
  lineChartLegend2 = false;

  lineChartPlugins2 = [];
  lineChartType2: ChartType = 'bar';

  mode = 'date';
  constructor() {
    this.data = ['date', 'week', 'month', 'year'];
  }

  ngOnInit(): void {}
  upOption() {
    console.log(this.select);
    let value = this.select.activatedValue;
    let index = this.data.indexOf(value);
    if (index === 0) {
      this.mode = this.data[0];
    } else {
      index = index - 1;
      this.mode = this.data[index];
    }
  }
  downOption() {
    let value = this.select.activatedValue;
    let index = this.data.indexOf(value);
    if (index === 3) {
      this.mode = this.data[3];
    } else {
      index = index + 1;
      this.mode = this.data[index];
    }
  }
  imprimir() {
    console.log(this.rangeDate.picker.inputValue);
  }
}
