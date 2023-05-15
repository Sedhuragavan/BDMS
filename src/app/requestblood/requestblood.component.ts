import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../fetchData.service';

@Component({
  selector: 'app-requestblood',
  templateUrl: './requestblood.component.html',
  styleUrls: ['./requestblood.component.css'],
})
export class RequestbloodComponent implements OnInit {
  data: any = '';
  city: any = '';
  bgroup: any = '';
  phone:boolean =false;
  error:boolean=false;
  selectedname:any;

  constructor(private fetchdata: FetchDataService) {}

  ngOnInit() {}

  search() {

    this.fetchdata.searchDonors(this.city, this.bgroup).subscribe((data) => {
      if(this.city=="" && this.bgroup==""){
        alert("Select City and Needed Bloodgroup");
      }
      else if(this.city=="" ||this.bgroup==""){
        alert("Select both City and Needed Bloodgroup");
      }
      else if (data.length > 0) {
        this.data = data;
        this.error=false;
      } else {
        this.data = '';
        this.error = true;
      }
    });
  }

  showphno(item:any){
alert(item.uname);
this.selectedname=item;
    this.phone=true;

  }
}
