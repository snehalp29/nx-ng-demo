import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';

import { ContactManagerRoutingModule } from './contact-manager-routing.module';
import { ContactManagerAppComponent } from './contact-manager-app.component';
import { ToolbarComponent } from './toolbar.component';
import { MainContentComponent } from './main-content.component';
import { SideNavComponent } from './side-nav.component';
import { FlexModule } from '@angular/flex-layout';
import { SharedUiMaterialModule } from '@angular-material/shared/ui-material';

@NgModule({
  declarations: [
    ContactManagerAppComponent,
    ToolbarComponent,
    MainContentComponent,
    SideNavComponent,
  ],
  imports: [
    CommonModule,

    FlexModule,
    ContactManagerRoutingModule,
    SharedUiMaterialModule,
  ],
})
export class ContactManagerModule {}
