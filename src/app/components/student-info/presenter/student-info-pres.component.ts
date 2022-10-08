import { ChangeDetectorRef, Component, EventEmitter, forwardRef, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-student-info-pres',
  templateUrl: './student-info-pres.component.html',
  styleUrls: ['./student-info-pres.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StudentInfoPresComponent),
      multi: true
    }
  ]
})
export class StudentInfoPresComponent implements OnInit, ControlValueAccessor {
  /**
   * Form group for the student form
   */
  public studentForm: FormGroup;

  /**
   * @inheritDoc
   */
  @Output()
  public registerInteraction = new EventEmitter<(() => void)>();

  /**
   * Function registered to propagate a change to the parent
   */
  public propagateChange: any = () => {};

   /**
    * Function registered to propagate touched to the parent
    */
  public propagateTouched: any = () => {};

  constructor(private formBuilder: FormBuilder, protected changeDetector: ChangeDetectorRef,) {
    this.studentForm = this.formBuilder.group({
      name: ['', Validators.required],
      rollNumber: ['', Validators.required],
      dateOfBirth: null,
      addressForm: this.formBuilder.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        country: ['', Validators.required]
      })
    });
  }

  public ngOnInit() {
    console.log('StudentInfoPresComponent');
    this.studentForm.valueChanges.subscribe((value) => {
      this.propagateChange(value);
    })
    this.registerInteraction.emit(() => {
      this.changeDetector.markForCheck();
      this.studentForm.updateValueAndValidity();
    });
  }

  /**
   * Event handler for submit button
   */
  public onSubmitHandler() {
    console.log(this.studentForm.value);
  }

  /**
   * @inheritDoc
   */
  public writeValue(value?: Student) {
    if(value) {
      this.studentForm.setValue(value);
    }
  }

  /**
   * @inheritDoc
   */
  public registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  /**
   * @inheritDoc
   */
  public registerOnTouched(fn: any) {
    this.propagateTouched = fn;
  }
}
