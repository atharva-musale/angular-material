import { Component, OnInit } from '@angular/core';
import { AlertType } from 'src/app/models/alert-types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  /**
   * To send alert type to the child
   */
  public currentAlertType: AlertType = AlertType.NONE;

  /**
   * To send alert message to the child
   */
  public message?: string;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Is triggered on search
   *
   * @param messageInput reference to input element
   */
  public onSearch(messageInput: HTMLInputElement) {
    this.message = messageInput.value;
  }

  /**
   * Is triggered on success button click
   */
  public onSuccess() {
    this.currentAlertType = AlertType.SUCCESS;
    this.message = 'Success: Success button clicked';
  }

  /**
   * Is triggered on failure button click
   */
  public onFailure() {
    this.currentAlertType = AlertType.FAILURE;
    this.message = 'Success: Failure button clicked'
  }

}
