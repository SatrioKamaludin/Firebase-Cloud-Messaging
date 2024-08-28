import { Component, OnInit } from '@angular/core';
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { environment } from '../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'fcm-angular';
  message: any = null;
  constructor() { }

  ngOnInit(): void {
    this.requestPermission();
    this.listen();
  }

  requestPermission() {
    const messaging = getMessaging();

    getToken(messaging, {
      vapidKey: environment.firebaseConfig.vapidKey
    }).then(
      (currentToken) => {
        if (currentToken) {
          console.log('Your token is: ');
          console.log(currentToken);
        } else {
          console.log('No registration token available. Request permission to generate one.');
        }
      }
    ).catch((error) => {
      console.log('An error occurred while retrieving token. ', error.message);
    })
  }

  listen() {
    const messaging = getMessaging();
    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload);
      this.message = payload;
    })
  }
}
