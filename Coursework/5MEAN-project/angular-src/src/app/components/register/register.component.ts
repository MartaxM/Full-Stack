import { Component } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'flash-messages-angular';
import { AuthService } from '../../services/auth.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: String;
  username: String;
  email: String;
  password: String;

  constructor(private validateService: ValidateService, 
    private flashMessage:FlashMessagesService,
    private authService:AuthService,
    private router: Router) {
    this.name = "";
    this.username = "";
    this.email = "";
    this.password = "";
  }

  ngOnInit() {
  }

  onRegisterSubmit() {
    // Required Fields
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }

    if (!this.validateService.validateRegister(user)) {
      this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    // VAlidate 
    if (!this.validateService.validateEmail(user.email)) {
      this.flashMessage.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    // Register user
    this.authService.registerUser(user).subscribe(data=>{
      if(data.success){
        this.flashMessage.show('You are now registered and logged in', {cssClass: 'alert-success', timeout: 10000});
        this.router.navigate(['/login']);
      }else{
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 10000});
        this.router.navigate(['/register']);
      }
    });

    return true;
  }
}
