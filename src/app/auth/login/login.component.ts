import { Component, OnInit, OnDestroy } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(public authservice:AuthService) { }
  private authStatusSub:Subscription;
  //constructor(private authService:AuthService) { }
  ngOnInit(){
    //this.authService.getUser()  
    this.authStatusSub=this.authservice.getAuthStatusListener().subscribe(
      authStatus=>{
        this.isLoading=false
      }
    )
  }

  isLoading=false
  onLogin(form:NgForm){
    //console.log(form.value);
    if(form.invalid){
      return
    }
    this.isLoading=true
    this.authservice.login(form.value.email,form.value.password)
  }

  
  ngOnDestroy(){
    this.authStatusSub.unsubscribe()
  }

}
