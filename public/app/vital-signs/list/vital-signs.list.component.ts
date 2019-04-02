import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../authentication/authentication.service';

@Component({
    selector: 'vital-signs',
    templateUrl: './app/vital-signs/list/vital-signs.list.template.html'
})

export class VitalSignsListComponent {
    user: any;
    constructor(private _authenticationService: AuthenticationService, private _router: Router) {
        this.user = this._authenticationService.user;

        if (!this.user) {
            this._router.navigate(['/authentication/signin']);
        }
    }

    isNurse() {
        return this.user && this.user.usertype === 'nurse';
    }
}