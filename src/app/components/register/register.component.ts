import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  hide = false;
  registerForm: FormGroup = this.fb.group({
    name: this.fb.control(''),
    email: this.fb.control('', [Validators.email]),
    password: this.fb.control('')
  });

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
  }

  togglePasswordVisibility($event: MouseEvent): void {
    $event.stopPropagation();
    this.hide = !this.hide;
  }

  submit(): void {
    console.log(this.registerForm.value);
    this.authService.register(this.registerForm.value).subscribe((value) => {
      console.log(value);
    } );
  }
}
