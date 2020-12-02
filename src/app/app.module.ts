import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Para la api
import { HttpClientModule } from '@angular/common/http';
import { PostServiceService } from '../app/post-service.service';
// Para el formulario
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [PostServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
