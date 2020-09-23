import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedUiMaterialModule } from '@angular-material/shared/ui-material';
import { RouterModule, Route } from '@angular/router';

// const Routes: Route[] = [{path:'',}];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedUiMaterialModule, RouterModule.forRoot([])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
