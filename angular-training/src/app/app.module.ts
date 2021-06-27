import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { RandomColorsDirective } from './random-colors.directive';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DefulteImage } from './defult-img.pipe';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormGroupName } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    RandomColorsDirective,
    DashboardComponent,
    DefulteImage,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormGroup,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
