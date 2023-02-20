import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxNiceLoadingModule } from 'ngx-nice-loading';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxNiceLoadingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
