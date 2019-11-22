import { Injectable } from '@angular/core';
import { Member } from '../models/members';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private loggedInUser: Member
  constructor(private routing: Router) { }

  setLoggedUser(user: Member) {this.loggedInUser=user}

  getLoggedInUser(): Member {return this.loggedInUser}

  clearSession() {
    this.loggedInUser=null
    this.routing.navigate([''])
  }

  get isLoggedIn(): boolean {
    if (this.loggedInUser==null){return false}
    else {return true}
  }
}