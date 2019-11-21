import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  homeLink="/"
  constructor(private session: SessionService) { }

  ngOnInit() {
  
  }

  getHomeLink() {
    if (this.session.getLoggedInUser()) {
      return "/dashboard"
    }
    else {
      return "/"
    }
  }
}