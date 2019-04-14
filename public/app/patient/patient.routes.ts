import { Routes } from '@angular/router';

import { PatientComponent } from './patient.component';
import { PatientMotivationComponent } from './motivation/patient-motivation.component';
import { PatientDailyInformationComponent } from './daily-information/patient-daily-information.component';
import { PatientAlertComponent } from './alert/patient-alert.component';

export const PatientRoutes: Routes = [{
    path: 'patient',
    component: PatientComponent,
    children: [
        {
            path: 'motivation',
            component: PatientMotivationComponent
        }, {
            path: 'daily-info',
            component: PatientDailyInformationComponent
        }, {
            path: 'alert',
            component: PatientAlertComponent
        }
    ]
}];
