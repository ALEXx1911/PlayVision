import { Component, signal } from '@angular/core';
import { AtSign, LockKeyhole, LucideAngularModule} from 'lucide-angular';

@Component({
  selector: 'app-login',
  imports: [LucideAngularModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {
  readonly userIcon= AtSign;
  readonly passwordIcon= LockKeyhole;

  showLogin = signal(true);

  changeForm(value:boolean){
    this.showLogin.set(value);
    console.log("Canbiooooo");
  }
}
