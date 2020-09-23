import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedUiMaterialModule } from '@angular-material/shared/ui-material';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedUiMaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
