import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataInputComponent } from './data-input/data-input.component';
import { DataOutputComponent } from './data-output/data-output.component';

@NgModule({
  declarations: [
    AppComponent,
    DataInputComponent,
    DataOutputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
