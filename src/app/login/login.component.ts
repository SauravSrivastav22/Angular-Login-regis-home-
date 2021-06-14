import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup , FormControl , Validators } from '@angular/forms'
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:FormGroup;
  /*  constructor(private router:Routes , private ser:PostService) { } */
   constructor(private snakeBar:MatSnackBar , private ser:PostService) { }
 
   ngOnInit(): void {
     this.login = this.createForm();
   }
 
   createForm(){
     return new FormGroup({
       email:new FormControl('',[Validators.required , Validators.email]),
       pass:new FormControl('',[Validators.required , Validators.minLength(6)])
     })
   }
   log() {
    console.log(this.login.value);
    this.ser.login(this.login.value).subscribe((res)=>{
      console.log(res);
      if(res ==='Success'){
        window.location.href = "/home";
      }
    } , (err)=>{
      console.log(err);
    })
     
   }
 

}




