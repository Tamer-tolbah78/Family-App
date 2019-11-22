import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FamilyMembersComponent } from './components/family-members/family-members.component';
import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MembersService } from './services/members.service'
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FamilyMembersComponent,
    LoginComponent,
    NavBarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MembersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
