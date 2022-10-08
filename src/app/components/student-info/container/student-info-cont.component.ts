import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CurrentPathService } from 'src/app/services/current-path/current-path.service';

@Component({
  selector: 'app-student-info-cont',
  templateUrl: './student-info-cont.component.html'
})
export class StudentInfoContComponent implements OnInit {
  /**
   * Form control for student info form
   */
  public studentInfoFormControl: FormControl;

  constructor(private currentPathService: CurrentPathService, private router: Router) {
    this.studentInfoFormControl = new FormControl({
      name: '',
      rollNumber: '',
      dateOfBirth: null,
      addressForm: {
        street: '',
        city: '',
        state: '',
        country: ''
      }
    });
  }

  ngOnInit(): void {
    this.currentPathService.setCurrentPath(this.router.url);

    this.studentInfoFormControl.valueChanges.subscribe((value) => {
      console.log(value);
    })
  }

}
