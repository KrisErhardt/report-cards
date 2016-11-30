import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ClassroomDetailComponent } from './classroom/classroom.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ClassroomDetailComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
