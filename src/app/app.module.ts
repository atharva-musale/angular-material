import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsComponent } from './components/tabs/tabs.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialExampleModule } from 'src/material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { AlertComponent } from './components/alert/alert.component';
import { StudentInfoModule } from './components/student-info/student-info.module';
import { CurrentPathService } from './services/current-path/current-path.service';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    TopNavComponent,
    HomeComponent,
    AlertComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialExampleModule,
    MatNativeDateModule,
    RouterModule,
    StudentInfoModule
  ],
  providers: [CurrentPathService],
  bootstrap: [AppComponent]
})
export class AppModule { }
