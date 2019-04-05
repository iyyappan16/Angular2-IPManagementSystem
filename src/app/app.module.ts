import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes,RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { AddIpComponent } from './pages/add-ip/add-ip.component';
import { DeleteIpComponent } from './pages/delete-ip/delete-ip.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'index', component: IndexComponent },
  { path: 'add-ip', component: AddIpComponent },
  { path: 'delete-ip', component: DeleteIpComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AddIpComponent,
    DeleteIpComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
