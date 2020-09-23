import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactManagerAppComponent } from './contact-manager-app.component';

const routes: Routes = [{ path: '', component: ContactManagerAppComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactManagerRoutingModule {}
