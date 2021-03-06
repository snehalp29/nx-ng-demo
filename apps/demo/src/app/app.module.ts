import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Route } from '@angular/router';

// const Routes: Route[] = [{path:'',}];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'contactManager',
        loadChildren: () =>
          import('@angular-material/demo/feature-contact-manager').then(
            (module) => module.DemoFeatureContactManagerModule
          ),
      },
      { path: '**', redirectTo: 'contactManager' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
