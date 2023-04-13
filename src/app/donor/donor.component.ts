import { Component, OnInit } from '@angular/core';
import { RegisterformService } from '../registerform.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donor',
  templateUrl: './donor.component.html',
  styleUrls: ['./donor.component.css'],
})
export class DonorComponent implements OnInit {
  loggedInUser: any;
  constructor(
    private registerformService: RegisterformService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const sessionUser = sessionStorage.getItem('loggedInUser'); // <-- retrieve user details from session storage
    if (sessionUser) {
      this.loggedInUser = JSON.parse(sessionUser);
    } else if (this.registerformService.loggedInUser !== null) {
      this.loggedInUser = this.registerformService.loggedInUser;
    } else {
      alert('You are Loggedout. Login to countinue');
      this.router.navigate(['/login']);
    }
  }

  logout() {

    this.registerformService.loggedInUser = null;
    
    sessionStorage.removeItem('loggedInUser');

    // Navigate back to the login page
    this.router.navigate(['/home']);
  }
}
