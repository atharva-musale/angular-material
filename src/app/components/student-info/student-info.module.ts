import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MAT_DATE_LOCALE } from "@angular/material/core";
import { MaterialExampleModule } from "src/material.module";
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
    ReactiveFormsModule,
    MaterialExampleModule
  ],
  exports: [],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }]
})

export class StudentInfoModule {}

