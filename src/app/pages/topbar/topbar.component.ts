import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  visible:boolean=false;
  inputValue:string='';
  constructor() { }

  ngOnInit(): void {
  }
  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}
