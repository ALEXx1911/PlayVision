import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icons } from '../../../pages/utils/icons';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  imports: [RouterLink,LucideAngularModule],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  readonly githubIcon= Icons.github;
  readonly linkedinIcon= Icons.linkedin;
  readonly mailIcon= Icons.mail;
}
