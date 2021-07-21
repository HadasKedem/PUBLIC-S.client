import { Component, OnInit } from '@angular/core';
import { loginService } from '../login-page/services/loginService.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  showInput = false;
  userName: string = '';
  //loggedIn: Boolean = this.CheckIfLoggedin();

  CheckIfLoggedin(){
    if(localStorage.getItem("userToken")){
      return true;
    }else{
      return false
    }
  }

  onClickedSearch(){
    this.showInput = !this.showInput;
  }

  onClickedLogOut() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('user');
    //this.loggedIn = false;
  }
  constructor(public loginService: loginService) {
  }
  
  public changeLoggedIn(): void {
    //this.loggedIn = this.CheckIfLoggedin();
}

  ngOnInit(): void {
    //this.loggedIn = this.CheckIfLoggedin();
    if(!!localStorage.getItem('user')) {
      this.userName = JSON.parse(localStorage.getItem('user') || '{}').firstName;
    }
  }
}
