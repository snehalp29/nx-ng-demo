import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactManagerRoutingModule } from './contact-manager-routing.module';
import { ContactManagerAppComponent } from './contact-manager-app.component';
import { ToolbarComponent } from './toolbar.component';
import { MainContentComponent } from './main-content.component';
import { SideNavComponent } from './side-nav.component';


@NgModule({
  declarations: [ContactManagerAppComponent, ToolbarComponent, MainContentComponent, SideNavComponent],
  imports: [
    CommonModule,
    ContactManagerRoutingModule
  ]
})
export class ContactManagerModule { }
