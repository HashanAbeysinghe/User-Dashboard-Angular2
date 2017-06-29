import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing }        from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './guards/auth.guard';
import { AuthenticationService } from './authentication.service';
import { UserService } from './user.service';
import { LoggedService } from './logged.service';
import { PeopleService } from './people.service';

import { fakeBackendProvider } from './helpers/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { AboutComponent } from './about/about.component';
import { PeopleComponent } from './people/people.component';
import { PeopleActiveComponent } from './people/people-active/people-active.component';
import { PeopleAllComponent } from './people/people-all/people-all.component';
import { MessageComponent } from './message/message.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    PeopleComponent,
    PeopleActiveComponent,
    PeopleAllComponent,
    MessageComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService,
    LoggedService,
    PeopleService,
    
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
