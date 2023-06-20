import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  showOfferDialog: boolean = false;

  constructor() {}
  ngOnInit() {
    const currentDate = new Date();
    const offerDate = new Date('2023-06-19T22:14:00');
    console.log(currentDate);
    console.log(offerDate);


    setTimeout(() => {
      this.showOfferDialog = true;
    }, currentDate.getTime() - offerDate.getTime());

    console.log(currentDate.getTime() - offerDate.getTime());
  }

  closeOfferDialog() {
    this.showOfferDialog = false;
  }
}
