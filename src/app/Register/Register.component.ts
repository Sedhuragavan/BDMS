import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { confirmedValidator } from '../confirmpass.validator';
import { RegisterformService } from '../registerform.service';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {


 constructor(private formbuilder:FormBuilder, private route:Router, private registerform:RegisterformService) { }
  registerForm=this.formbuilder.group({
    uname:[,[Validators.required,Validators.pattern,Validators.minLength(3)]],
    age:[,[Validators.required,Validators.min(18),Validators.max(65)]],
    bgroup:['default',[Validators.required]],
    weight:[,[Validators.required,Validators.min(50)]],
    gender:['default',[Validators.required]],
    email:[,[Validators.required, Validators.pattern]],
    phno:[,[Validators.required]],
    city:['default',[Validators.required]],
    pass:[,[Validators.required]],
    cpass:[,[Validators.required]],
   

  },
  { validator: confirmedValidator('pass', 'cpass') }
  );

  ngOnInit() {
  }


  submitForm(){
   
    if(!this.registerForm.valid){
      alert("Please fill all the Details");
    }
    else if(this.registerForm.valid){
      this.registerform.addUserInformation(this.registerForm.value).subscribe(data =>{
        alert("Registerd Sucessfully Press ok to Login");
        this.registerForm.reset();
        this.route.navigate(['/','login']);
      }, err=>{
        alert("Something went wrong");
      })
    }
    
  }
}
