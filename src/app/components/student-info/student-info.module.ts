import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { StudentInfoContComponent } from "./container/student-info-cont.component";
import { StudentInfoPresComponent } from "./presenter/student-info-pres.component";

@NgModule({
  declarations: [
    StudentInfoContComponent,
    StudentInfoPresComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: []
})

export class StudentInfoModule {}

