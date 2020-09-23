import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

const Routes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./contact-manager/contact-manager.module').then(
        (module) => module.ContactManagerModule
      ),
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(Routes)],
})
export class DemoFeatureContactManagerModule {}
