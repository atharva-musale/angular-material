import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  /**
   * To indicate the type of message
   */
  @Input()
  public alertType: string = 'none';

  /**
   * The message
   */
  @Input()
  public message: string = 'This is a standard message. For a customised one, enter into the searchbar.';

  constructor() { }

  ngOnInit(): void {
  }

  public onClose() {
    this.alertType = 'none';
  }

}
