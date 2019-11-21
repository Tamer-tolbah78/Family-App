import { Injectable } from '@angular/core';
import { Members } from '../models/members';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private loggedInUser: Members
  constructor(private routing: Router) { }

  setLoggedUser(user: Members) {this.loggedInUser=user}

  getLoggedInUser(): Members {return this.loggedInUser}

  clearSession() {
    this.loggedInUser=null
    this.routing.navigate([''])
  }

  get isLoggedIn(): boolean {
    if (this.loggedInUser==null){return false}
    else {return true}
  }
}