import { Routes } from '@angular/router';
import { PatientComponent } from './patient.component';
import { PatientMotivationComponent } from './motivation/patient-motivation.component';

export const PatientRoutes: Routes = [{
    path: 'patient',
    component: PatientComponent,
    children: [
        {
            path: 'motivation',
            component: PatientMotivationComponent
        }
    ]
}];
