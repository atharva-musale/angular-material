import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentPathService } from 'src/app/services/current-path/current-path.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  /**
   * Stores the current tab index
   */
  public currentTabIndex = 0;

  /**
   * Total number of tabs
   */
  public readonly TOTAL_TABS = 3;

  /**
   * Reference to be tab group
   */
  @ViewChild('tabGroup')
  public matTabGroup!: ElementRef;

  constructor(private currentPathService: CurrentPathService, private router: Router) { }

  ngOnInit(): void {
    this.currentPathService.setCurrentPath(this.router.url);
  }

  /**
   * Tabs switch circularly
   */
  public onClickCircular() {
    this.currentTabIndex = (this.currentTabIndex + 1) % this.TOTAL_TABS;
  }

  /**
   * Stops scroll after the max value is reached
   */
  public onClickMax() {
    if (this.currentTabIndex >= this.TOTAL_TABS) { return; }
    this.currentTabIndex = this.currentTabIndex + 1;
  }
}
