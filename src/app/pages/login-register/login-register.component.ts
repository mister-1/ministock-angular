import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {

  // ตัวแปร
  message: string = "Hello Angular";

  // ตัวแปร object
  profile = {
    "name": "Samit",
    "tel": "08398938933",
    "gender": "Male"
  }

  // 2 Way data binding
  userData = {
    "email": "",
    "password": ""
  }


  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  submitLogin() {
    ///   alert("Hey Angular")
    if (this.userData.email == "admin@email.com" && this.userData.password == "1234") {
      ///alert("Login Success +++")
this.router.navigate(['backend'])
    } else {
      alert("ชื่อผู้ใช้หรือรหัสไม่ถูกต้อง!!!!!")
    }
  }




}

