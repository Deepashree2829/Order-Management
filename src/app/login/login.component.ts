import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // createForm: FormGroup;
  constructor(private router: Router) { }

  ngOnInit(): void {
    // this.initialization();
  }
  // tslint:disable-next-line: typedef
  // public initialization() {
  //   this.createForm = this.fb.group(
  //     {  email: [null],
  //        password: [null]
  //     },
  //   );
  // }
  // tslint:disable-next-line: typedef
  public login() {
    // if (data.email === 'admin@gmail.com' && data.password === 'admin') {
      this.router.navigateByUrl('/orderSummary');
    // }
  }
}
