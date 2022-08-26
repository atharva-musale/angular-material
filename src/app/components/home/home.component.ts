import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  /**
   * To send alert type to the child
   */
  public currentAlertType = 'none';

  /**
   * To send alert message to the child
   */
  public message = '';

  constructor() { }

  ngOnInit(): void {
  }

  public onSearch(messageInput: HTMLInputElement) {
    this.message = messageInput.value;
  }

  public onSuccess() {
    this.currentAlertType = 'success';
  }

  public onFailure() {
    this.currentAlertType = 'failure';
  }

}
