import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  showToaster() {
    this.toastr.success("Hello, I'm the toastr message.","",{tapToDismiss:true,closeButton:true,timeOut:1000})
  }
}