import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PatientRoutes } from './patient.routes';
import { PatientComponent } from './patient.component';
import { PatientMotivationComponent } from './motivation/patient-motivation.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(PatientRoutes),
    ],
    declarations: [
        PatientComponent,
        PatientMotivationComponent
    ]
})
export class PatientModule { }
