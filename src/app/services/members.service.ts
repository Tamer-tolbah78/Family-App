
import { Injectable } from '@angular/core';
import { Member } from '../models/members';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  uri_fetchFamily: string = "https://1z43jo81y3.execute-api.ca-central-1.amazonaws.com/dev/get-family";
  
  
  members: Member[]
  constructor(private http:HttpClient) {
    this.members = [
      {
        title: 'Father',
        userName: 'Galal',
        password: '123456',
        firstName: 'Tolbah',
        lastName: 'Hassanin',
        job: 'Engineer',
        age: 76,
        kids: [
          'Tamer', 'Reham', 'Marwa'
        ],
        details: false
      },
      {
        title: 'Mother',
        userName: 'Awatif',
        password: '654321',
        firstName: 'Awatif',
        lastName: 'Ali',
        job: 'Teacher',
        age: 70,
        kids: [
          'Tamer', 'Reham', 'Marwa'
        ],
        details: false
      },
      {
        title: 'Son',
        userName: 'tamer',
        password: 'temo',
        firstName: 'Tamer',
        lastName: 'Tolbah',
        job: 'IT, Graphic Designer & Web Developer',
        age: 41,
        kids: [
          'Eyad', 'Yara'
        ],
        details: false
      },
      {
        title: 'Daughter',
        userName: 'Reham',
        password: 'roro',
        firstName: 'Reham',
        lastName: 'Tolbah',
        job: 'Scientist',
        age: 38,
        kids: [
          'Omar', 'Karim'
        ],
        details: false
      },
      {
        title: 'Daughter',
        userName: 'Marwa',
        password: '123456',
        firstName: 'Marwa',
        lastName: 'Tolbah',
        job: 'Engineer',
        age: 37,
        kids: [
          'Heaven'
        ],
        details: false
      },
      {
        title: "Daughter Marwa's Husband",
        userName: 'Nassar',
        password: '123456',
        firstName: 'Mohammed',
        lastName: 'Nassar',
        job: 'Engineer',
        age: 36,
        kids: [
          'Heaven'
        ],
        details: false
      },
      {
        title: "Daughter Reham's Husband",
        userName: 'M.Abdo',
        password: '123456',
        firstName: 'Mohammed',
        lastName: 'Abdo',
        job: 'Engineer',
        age: 45,
        kids: [
          'Omar', 'Karim'
        ],
        details: false
      },
      {
        title: "Son Tamer's Wife",
        userName: 'Yaso',
        password: '123456',
        firstName: 'Yasmeen',
        lastName: 'Ramadan',
        job: 'Teacher',
        age: 29,
        kids: [
          'Eyad', 'Yara'
        ],
        details: false
      },
    ]
  }
  getMembers(): Observable<HttpResponse<Member[]>> { 
    return this.http.get<Member[]>(this.uri_fetchFamily, { observe: 'response' });
  }
}
