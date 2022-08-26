import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public currentTabIndex = 0;
  public readonly TOTAL_TABS = 3;

  @ViewChild('tabGroup')
  public matTabGroup!: ElementRef;

  public onClickCircular() {
    this.currentTabIndex = (this.currentTabIndex + 1) % this.TOTAL_TABS;
  }

  public onClickMax() {
    if (this.currentTabIndex >= this.TOTAL_TABS) { return; }
    this.currentTabIndex = this.currentTabIndex + 1;
  }
}
