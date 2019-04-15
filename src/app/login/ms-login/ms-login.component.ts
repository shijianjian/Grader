import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { UserAgentApplication } from 'msal';

@Component({
  selector: 'app-ms-login',
  templateUrl: './ms-login.component.html',
  styleUrls: ['./ms-login.component.scss']
})
export class MsLoginComponent {
  userData: any;
  userAgentApplication: any;

  constructor(private socialAuthService: AuthService) {
    var applicationConfig = {
      clientID: 'YOUR_CLIENT_ID'
    };

    this.userAgentApplication = new UserAgentApplication(applicationConfig.clientID, null, this.tokenReceivedCallback);
  }

  public tokenReceivedCallback(errorDesc: any, token: any, error: any, tokenType: any) {
    if (token) {
      this.userData = token;

      console.log('Token: ' + token);
    } else {
      console.log(error + ':' + errorDesc);
    }
  }

  public microsoftSignIn() {
    var graphScopes = ['user.read', 'mail.send'];
    let that = this;

    that.userAgentApplication.loginPopup(graphScopes).then(
      (idToken: any) => {
        //Login Success
        that.userAgentApplication.acquireTokenSilent(graphScopes).then(
          (accessToken: any) => {
            console.log(accessToken);
            //AcquireTokenSilent Success
            var headers = new Headers();
            var bearer = 'Bearer ' + accessToken;
            headers.append('Authorization', bearer);
            var options = {
              method: 'GET',
              headers: headers
            };
            var graphEndpoint = 'https://graph.microsoft.com/v1.0/me';

            fetch(graphEndpoint, options).then(function(response) {
              response.json().then(function(data) {
                that.userData = data;
                console.log(data);
              });
            });
          },
          (error: any) => {
            //AcquireTokenSilent Failure, send an interactive request.
            that.userAgentApplication.acquireTokenPopup(graphScopes).then(
              (accessToken: any) => {
                //updateUI();
              },
              (error: any) => {
                console.log(error);
              }
            );
          }
        );
      },
      (error: any) => {
        //login failure
        console.log(error);
      }
    );
  }
}
