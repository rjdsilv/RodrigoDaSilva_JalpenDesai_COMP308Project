import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../authentication/authentication.service';
import { PatientService } from '../../patient/patient.service';

@Component({
    selector: 'daily-tips-list',
    templateUrl: './app/daily-tips/list/daily-tips.list.template.html'
})

export class DailyTipsListComponent {
    user: any;
    patients = [];
    errorMessage: string = '';
    success = false;
    selectedPatient: any;
    showWarning = false;

    constructor(
        private _authenticationService: AuthenticationService,
        private _patientService: PatientService,
        private _router: Router
    ) {
        this.user = this._authenticationService.user;

        if (!this.user) {
            this._router.navigate(['/authentication/signin']);
        }

        this._patientService
            .list()
            .subscribe(
                patientList => {
                    this.patients = patientList;
                },
                error => {
                    this.errorMessage = error;
                }
            );
    }

    hasError() {
        return this.errorMessage.length > 0;
    }

    list() {
        //if (!this.selectedPatient) {
        //    this.errorMessage = 'Please, select a patient from the list.';
        //} else {
        //    this.errorMessage = '';
        //    this.showWarning = false;
        //    this._vitalSignsService
        //        .list(this.selectedPatient)
        //        .subscribe(vitalSigns => {
        //            this.vitalSigns = vitalSigns;
        //            this.showWarning = this.vitalSigns.length === 0;
        //        }, error => {
        //            this.errorMessage = error;
        //        });
        //}
    }
}