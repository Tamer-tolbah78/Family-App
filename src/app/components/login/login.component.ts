import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SessionService } from 'src/app/services/session.service';
import { MembersService } from 'src/app/services/members.service';
import { Members } from 'src/app/models/members';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private session: SessionService, private routing: Router, private membersSrvice: MembersService) { }
  hide: boolean = false;
  loggedIn: Members
  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    let usrName = form.value["userName"];
    let psword = form.value["password"];
    let user=this.membersSrvice.getMembers().find(x => (x.userName == usrName && x.password == psword));
    if(user){this.session.setLoggedUser(user);
    this.routing.navigate(['dashboard'])}
    else {alert('User Name or Password is incorrect')}
  }
}