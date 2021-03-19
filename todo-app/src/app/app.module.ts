import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks.component';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppConfigModule } from './appconfig.module';

import { AppConfigService } from './appconfig.service';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TasksComponent,
    DetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    // app comfiguration module
    AppConfigModule
  ],
  providers: [ AppConfigService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
