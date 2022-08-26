import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentInfoContComponent } from './student-info-cont.component';

describe('StudentInfoContComponent', () => {
  let component: StudentInfoContComponent;
  let fixture: ComponentFixture<StudentInfoContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentInfoContComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentInfoContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
