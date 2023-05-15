import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterformService } from '../registerform.service';


@Component({
  selector: 'app-donorDeleteaccount',
  templateUrl: './donorDeleteaccount.component.html',
  styleUrls: ['./donorDeleteaccount.component.css']
})
export class DonorDeleteaccountComponent implements OnInit {

  constructor(private registerService: RegisterformService, private router: Router) { }

  ngOnInit() {
  }

  deleteAccount() {
    confirm("Are you sure to delete your account?");
    const userId = this.registerService.loggedInUser.id;
    this.registerService.deleteUser(userId).subscribe(() => {
      this.registerService.loggedInUser = '';
      this.router.navigate(['/home']);
    });
  }
}
