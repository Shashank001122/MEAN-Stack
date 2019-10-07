import { Component, OnInit, OnDestroy } from '@angular/core';
import {NgForm} from '@angular/forms';
import { AuthService } from '../auth.service';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-sign',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {
  
  isLoading=false
  private authStatusSub:Subscription;
  constructor(private authService:AuthService) { }
  ngOnInit(){
    //this.authService.getUser()  
    this.authStatusSub=this.authService.getAuthStatusListener().subscribe(
      authStatus=>{
        this.isLoading=false
      }
    )
  }


  onSignUp(form:NgForm){
    //console.log(form.value)
    if(form.invalid){
      return;
    }
    this.authService.createUser(form.value.email,form.value.password);
  }

  ngOnDestroy(){
    this.authStatusSub.unsubscribe()
  }
}
