import { Component, signal } from '@angular/core';
import { AtSign, LockKeyhole, LucideAngularModule} from 'lucide-angular';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-login',
  imports: [LucideAngularModule,MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {
  readonly userIcon= AtSign;
  readonly passwordIcon= LockKeyhole;

  readonly showLogin = signal<boolean>(true);

  changeForm(value:boolean){
    this.showLogin.set(value);
    console.log("Canbiooooo");
  }
}
