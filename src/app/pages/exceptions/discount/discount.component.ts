import { Component, OnInit } from '@angular/core';

import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.scss'],
})
export class DiscountComponent implements OnInit {
  date = ['2021-02-06', '2021-02-06'];
  mode = 'date';
  total:number=0;
  //----------------------Canvas propert----
  info = [
    [
      { name: 'Employee Working', value: 10 },
      { name: '15% Discount', value: 20 },
      { name: 'Founders', value: 30 },
    ],
    [
      { name: 'Darshit Kansara', value: 6 },
      { name: 'test-test', value: 14 },
    ],
  ];

  lineChartData: ChartDataSets[] = [
    {
      data: [10, 20, 30],
      label: '',
    },
  ];

  lineChartLabels: Label[] = ['Employee Working', '15% Discount', 'Founders'];
  lineChartLabels2: Label[] = ['Darshit Kansara', 'test-test'];
  lineChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      labels: {
        fontColor: 'black',
      },
    },
    plugins: {
      datalabels: {},
    },
  };
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
  lineChartLegend = false;
  lineChartPlugins = [];
  lineChartType1: ChartType = 'doughnut';
  lineChartType2: ChartType = 'bar';
  lineChartData2: ChartDataSets[] = [
    {
      data: [6, 14],
      label: '',
    },
  ];
  //--------------------------------------
  tablesData: any[] = [
    [
      {
        discount: 'Employee Working',
        count: 3,
        discountAmount: 2.7,
        porcent: 0.01,
      },
      {
        discount: 'Founders',
        count: 1,
        discountAmount: 13.27,
        porcent: 0.04,
      },
      {
        discount: '15% Discount',
        count: 1,
        discountAmount: 0.11,
        porcent: 0.0,
      },
    ],
    [
      {
        employee: 'Aaron Kansara',
        check: 0.0,
        checkAmount: 0.0,
        itemDiscount: 4.0,
        itemAmount: 2.81,
        totalAmount: 2.81,
        porcent: 0.1,
      },
      {
        employee: 'Aaron Kansara',
        check: 0.0,
        checkAmount: 0.0,
        itemDiscount: 4.0,
        itemAmount: 2.81,
        totalAmount: 2.81,
        porcent: 0.1,
      },
      {
        employee: 'Aaron Kansara',
        check: 0.0,
        checkAmount: 0.0,
        itemDiscount: 4.0,
        itemAmount: 2.81,
        totalAmount: 2.81,
        porcent: 0.1,
      },
    ],
    [
      {
        date: '02/15/2021',
        employee: 'Aaron Kansara',
        reason: '15% Discount',
        revenue: 'Test',
        authorized:'Test',
        orderNumber: 17,
        type: 'Order',
        items: ['Aloo Tikki', 'Shrim Nugget', 'Veg Pakoras'],
        amount: 13.27,
      },
    ],
  ];

  //-------------------------------------
  constructor() {}

  ngOnInit(): void {}
  calcSubtotal(indice:number) {
    if (indice===0) {
      this.total = 0;
      this.total = this.tablesData[0].reduce(
        (acc: any, obj: any) => acc + obj.count,
        0);
    return this.total;
    }
    if (indice===1) {
      this.total = 0;
      this.total = this.tablesData[0].reduce(
        (acc: any, obj: any) => acc + obj.discountAmount,
        0);
    return this.total;
    }
    if (indice===2) {
      this.total = 0;
      this.total = this.tablesData[0].reduce(
        (acc: any, obj: any) => acc + obj.porcent,
        0);
    return this.total;
    }
  return
  }
}
