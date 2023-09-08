import { Component } from '@angular/core';
@Component({
  selector: 'app-oauth',
  templateUrl: './oauth.component.html',
  styleUrls: ['./oauth.component.css']
})
export class OauthComponent {
redirect(){
  window.location.href ='http://127.0.0.1:3000/auth/google'
}

}
