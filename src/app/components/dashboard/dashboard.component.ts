import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  LoggedMember = ""
  constructor(private session: SessionService) { }
  
  ngOnInit() {
    this.LoggedMember = this.session.getLoggedInUser().firstName
  }

  onLogOut() {
    this.session.clearSession()
  }
}