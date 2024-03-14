import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
userName = 'Joaquim';

userdata = {
  email: 'joaquim@emial.com',
  role:'Admin',
}

title = 'curso-angular';
}
