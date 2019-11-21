import { Component, OnInit } from '@angular/core';
import { MembersService } from 'src/app/services/members.service';
import { Members } from 'src/app/models/members';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-family-members',
  templateUrl: './family-members.component.html',
  styleUrls: ['./family-members.component.css']
})
export class FamilyMembersComponent implements OnInit {
  familyMembers: Members[];
  details: boolean
  loggedMember = this.session.getLoggedInUser().userName

  constructor(private members: MembersService, private session: SessionService) { }

  ngOnInit() {
    this.familyMembers = this.members.getMembers();
  }
  }