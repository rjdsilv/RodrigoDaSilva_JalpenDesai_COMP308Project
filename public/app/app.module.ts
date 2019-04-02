import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { AuthenticationService } from './authentication/authentication.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { HomeModule } from './home/home.module';
import { VitalSignsModule } from './vital-signs/vital-signs.module';
import { PatientService } from './patient/patient.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        AuthenticationModule,
        HomeModule,
        VitalSignsModule,
        RouterModule.forRoot(AppRoutes),
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        AuthenticationService,
        PatientService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

