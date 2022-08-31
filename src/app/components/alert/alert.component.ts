import { Component, Input, OnInit } from '@angular/core';
import { AlertType } from 'src/app/models/alert-types';

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
  public alertType = AlertType.NONE;

  /**
   * The message
   */
  @Input()
  public message?: string;

  constructor() {
    console.log('Constructor: ',this.message);
  }

  ngOnInit(): void {
    console.log('On init: ',this.message);
  }

  public onClose() {
    this.alertType = AlertType.NONE;
  }

}
