import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentInfoPresComponent } from './student-info-pres.component';

describe('StudentInfoPresComponent', () => {
  let component: StudentInfoPresComponent;
  let fixture: ComponentFixture<StudentInfoPresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentInfoPresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentInfoPresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
