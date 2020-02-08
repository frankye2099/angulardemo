import {Component} from '@angular/core';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular demo';
  api = environment.apiUrl;
  alerts = [{
    type: 'success',
    message: 'Welcome to the demo!',
  }];

  close(alert: { type: string; message: string }) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }
}
