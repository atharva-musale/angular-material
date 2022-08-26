import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  /**
   * To toggle sidenav
   */
  @Output()
  public toggleSidenav = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Emits an event to the parents to trigger sidenav-toggle
   */
  public onLogoClick() {
    this.toggleSidenav.emit(true);
  }
}
