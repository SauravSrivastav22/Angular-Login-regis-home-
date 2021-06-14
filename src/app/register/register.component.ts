import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup , FormControl , Validators } from '@angular/forms'
import { PostService } from '../service/post.service';
/* import { Routes } from '@angular/router'; */
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  reg:FormGroup;
 /*  constructor(private router:Routes , private ser:PostService) { } */
  constructor(private snakeBar:MatSnackBar , private ser:PostService) { }

  ngOnInit(): void {
    this.reg = this.createForm();
  }

  createForm(){
    return new FormGroup({
      name:new FormControl('',[Validators.required , Validators.minLength(5)]),
      email:new FormControl('',[Validators.required , Validators.email]),
      pass:new FormControl('',[Validators.required , Validators.minLength(6)])
    })
  }
  sign() {
   console.log(this.reg.value);
   this.ser.post(this.reg.value).subscribe((res)=>{
     console.log(res);
     if(res ==='Registered'){
       window.location.href = "/login";
     }
   } , (err)=>{
     console.log(err);
   })
    
  }

}
