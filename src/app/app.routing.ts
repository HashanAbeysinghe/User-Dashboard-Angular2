import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PeopleComponent } from './people/people.component';
import { PeopleActiveComponent } from './people/people-active/people-active.component';
import { PeopleAllComponent } from './people/people-all/people-all.component';
import { MessageComponent } from './message/message.component';
import { AuthGuard } from './guards/auth.guard';


const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    
    { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
    { path: 'people', component: PeopleComponent, canActivate: [AuthGuard],
      children:[
          {path:'', redirectTo:'peopleactive', pathMatch:'full'},
          {path:'peopleactive', component: PeopleActiveComponent},
          {path:'peopleall', component: PeopleAllComponent},
      ]  
    },
    {path:'message', component: MessageComponent, outlet:'messenger'},
    {path:'about2', component: AboutComponent, outlet:'messenger'},


    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);