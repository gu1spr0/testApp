import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { BlockUIHttpModule } from 'ng-block-ui/http';
import { BlockTemplateComponent } from './@components-app/block-template/block-template.component';
import { ButtonBackComponent } from './@components-app/button-back/button-back.component';
import { NavbarThemeComponent } from './@components-app/navbar-theme/navbar-theme.component';
import { SidebarThemeComponent } from './@components-app/sidebar-theme/sidebar-theme.component';
import { TemplateErrorDisplayDataComponent } from './@components-app/template-error-display-data/template-error-display-data.component';
import { TemplateInformationComponent } from './@components-app/template-information/template-information.component';
import { TemplateNoDataComponent } from './@components-app/template-no-data/template-no-data.component';
import { TemplateProfileUserComponent } from './@components-app/template-profile-user/template-profile-user.component';
import { TemplateUploadFileComponent } from './@components-app/template-upload-file/template-upload-file.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { PagesComponent } from './pages/pages/pages.component';
import { LoginComponent } from './pages/login/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { BlockUIModule } from 'ng-block-ui';
import { PagesModule } from './pages/pages.module';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    BlockUIHttpModule.forRoot({
      blockAllRequestsInProgress: true
    }),
    BlockUIModule.forRoot({
      template: BlockTemplateComponent
    }),
    PagesModule,
    HttpClientModule,
    ModalModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 9000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      closeButton: true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
