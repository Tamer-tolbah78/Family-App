import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SessionService } from 'src/app/services/session.service';
import { MembersService } from 'src/app/services/members.service';
import { Member } from 'src/app/models/members';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide: boolean = false;
  loggedIn: Member
  allUsers: Member[]

  constructor(private session: SessionService, private routing: Router, private membersSrvice: MembersService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    let usrName = form.value["userName"];
    let psword = form.value["password"];

    if (this.allUsers == null) {

      //get list of users from server
      this.membersSrvice.getMembers()
        .subscribe(resp => {

          this.allUsers = resp.body;
          console.log("done loading list of users from server")
          console.log(this.allUsers)
          this.processResult(usrName, psword)

        })

    } else {
      console.log("users already loaded")
      this.processResult(usrName, psword)
    }
  }

  processResult(username: string, password: string) {
    let user = this.allUsers.find(x => (x.userName == username && x.password == password));
    if (user) {
      this.session.setLoggedUser(user);
      this.routing.navigate(['dashboard'])
    }
    else { alert('User Name or Password is incorrect') }
  }
}