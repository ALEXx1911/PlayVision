import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Github, Linkedin, LucideAngularModule, Mail } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  imports: [LucideAngularModule,RouterLink],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  readonly githubIcon= Github;
  readonly linkedinIcon= Linkedin;
  readonly mailIcon= Mail;
}
