import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StudentInfoContComponent } from './components/student-info/container/student-info-cont.component';
import { TabsComponent } from './components/tabs/tabs.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'tabs', component: TabsComponent},
  {path: 'studentForm', component: StudentInfoContComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
