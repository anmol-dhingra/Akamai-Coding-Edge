import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms'
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private apiService: ApiServiceService) { }
  
  signUpForm = this.formBuilder.group({
    email: new FormControl('', [Validators.email, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  })

  ngOnInit() {
  }

  onSubmit(){
    this.apiService.post('register', this.signUpForm.value);
  }

}
