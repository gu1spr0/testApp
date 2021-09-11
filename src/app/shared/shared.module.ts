import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarThemeComponent } from '../@components-app/navbar-theme/navbar-theme.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarThemeComponent } from '../@components-app/sidebar-theme/sidebar-theme.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { TemplateProfileUserModule } from '../@components-app/template-profile-user/template-profile-user.module';
import { MatMenuModule } from '@angular/material/menu';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { SharedService } from '../services/shared/shared.service';

@NgModule({
  declarations: [
    NavbarComponent,
    NavbarThemeComponent,
    SidebarComponent,
    SidebarThemeComponent,
    NopagefoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TemplateProfileUserModule,
    MatMenuModule,
    AccordionModule
  ],
  exports: [
    NavbarComponent,
    NavbarThemeComponent,
    SidebarComponent,
    SidebarThemeComponent,
    NopagefoundComponent
  ],
  providers: [
    SharedService
  ]
})
export class SharedModule { }
