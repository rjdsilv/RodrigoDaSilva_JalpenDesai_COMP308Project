System.register(['@angular/core', '@angular/router', '../../authentication/authentication.service', '../../patient/patient.service', '../vital-signs.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, authentication_service_1, patient_service_1, vital_signs_service_1;
    var VitalSignsListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            },
            function (patient_service_1_1) {
                patient_service_1 = patient_service_1_1;
            },
            function (vital_signs_service_1_1) {
                vital_signs_service_1 = vital_signs_service_1_1;
            }],
        execute: function() {
            VitalSignsListComponent = (function () {
                function VitalSignsListComponent(_authenticationService, _patientService, _vitalSignsService, _router) {
                    var _this = this;
                    this._authenticationService = _authenticationService;
                    this._patientService = _patientService;
                    this._vitalSignsService = _vitalSignsService;
                    this._router = _router;
                    this.patients = [];
                    this.vitalSigns = [];
                    this.errorMessage = '';
                    this.success = false;
                    this.showWarning = false;
                    this.user = this._authenticationService.user;
                    if (!this.user) {
                        this._router.navigate(['/authentication/signin']);
                    }
                    this._patientService
                        .list()
                        .subscribe(function (patientList) {
                        _this.patients = patientList;
                    }, function (error) {
                        _this.errorMessage = error;
                    });
                }
                VitalSignsListComponent.prototype.hasError = function () {
                    return this.errorMessage.length > 0;
                };
                VitalSignsListComponent.prototype.list = function () {
                    var _this = this;
                    if (!this.selectedPatient) {
                        this.errorMessage = 'Please, select a patient from the list.';
                    }
                    else {
                        this.errorMessage = '';
                        this.showWarning = false;
                        this._vitalSignsService
                            .list(this.selectedPatient)
                            .subscribe(function (vitalSigns) {
                            _this.vitalSigns = vitalSigns;
                            _this.showWarning = _this.vitalSigns.length === 0;
                        }, function (error) {
                            _this.errorMessage = error;
                        });
                    }
                };
                VitalSignsListComponent.prototype.formatDate = function (date) {
                    return new Date(date).toLocaleString('en-CA');
                };
                VitalSignsListComponent.prototype.formatBloodPressure = function (bloodPressure) {
                    var fmt = bloodPressure.split('-');
                    return fmt[0] + ' over ' + fmt[1];
                };
                VitalSignsListComponent = __decorate([
                    core_1.Component({
                        selector: 'vital-signs',
                        templateUrl: './app/vital-signs/list/vital-signs.list.template.html'
                    }), 
                    __metadata('design:paramtypes', [authentication_service_1.AuthenticationService, patient_service_1.PatientService, vital_signs_service_1.VitalSignsService, router_1.Router])
                ], VitalSignsListComponent);
                return VitalSignsListComponent;
            }());
            exports_1("VitalSignsListComponent", VitalSignsListComponent);
        }
    }
});
//# sourceMappingURL=vital-signs.list.component.js.map