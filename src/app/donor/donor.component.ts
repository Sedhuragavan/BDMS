import { Component, OnInit } from '@angular/core';
import { RegisterformService } from '../registerform.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donor',
  templateUrl: './donor.component.html',
  styleUrls: ['./donor.component.css'],
})
export class DonorComponent implements OnInit {
  donorId: any;
  loggedInUser: any;
  donationHistory: any;
  donationDate: any;
  donationPlace: any;
  donationMessage: any;

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
    console.log(this.loggedInUser.id);
  
   
  }

  logout() {
    confirm('Are you sure to logout');

    this.registerformService.loggedInUser = null;

    sessionStorage.removeItem('loggedInUser');
    alert('You are logout succussfully');
    // Navigate back to the login page
    this.router.navigate(['/home']);
  }

  showDonationHistory = false;
  showUpdateProfile = false;
  showChangePassword = false;
  showSetStatus = false;
  showDeleteAccount = false;

  toggleDonationHistory() {
    this.showDonationHistory = true;
    // Hide all other options
    this.showUpdateProfile = false;
    this.showChangePassword = false;
    this.showSetStatus = false;
    this.showDeleteAccount = false;

    this.registerformService.getDonationHistory(this.loggedInUser).subscribe((data: any) => {
      if (data.id==this.loggedInUser.id) {
        this.donationHistory = data;
      }
    });
  
    
  }

  toggleUpdateProfile() {
    this.showUpdateProfile = true;
    // Hide all other options
    this.showDonationHistory = false;
    this.showChangePassword = false;
    this.showSetStatus = false;
    this.showDeleteAccount = false;
  }

  toggleChangePassword() {
    this.showChangePassword = true;
    // Hide all other options
    this.showDonationHistory = false;
    this.showUpdateProfile = false;
    this.showSetStatus = false;
    this.showDeleteAccount = false;
  }

  toggleSetStatus() {
    this.showSetStatus = true;
    // Hide all other options
    this.showDonationHistory = false;
    this.showUpdateProfile = false;
    this.showChangePassword = false;
    this.showDeleteAccount = false;
  }

  toggleDeleteAccount() {
    this.showDeleteAccount = true;
    // Hide all other options
    this.showDonationHistory = false;
    this.showUpdateProfile = false;
    this.showChangePassword = false;
    this.showSetStatus = false;
  }

   addDonationHistory() {
    var donation={
      donationDate:this.donationDate,
      donationPlace:this.donationPlace,
      donationMessage:this.donationMessage
    }
    this.registerformService.addDonationHistory(donation,this.loggedInUser.id).subscribe((data) => {
      // this.donationHistory.push(donation);
      alert('Donation history added successfully!');
      // Reset the form
      // this.donationDate = null;
      // this.donationPlace = null;
      // this.donationMessage = null;
    });
  }
}
