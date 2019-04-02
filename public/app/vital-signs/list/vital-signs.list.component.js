System.register(['@angular/core', '@angular/router', '../../authentication/authentication.service'], function(exports_1, context_1) {
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
    var core_1, router_1, authentication_service_1;
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
            }],
        execute: function() {
            VitalSignsListComponent = (function () {
                function VitalSignsListComponent(_authenticationService, _router) {
                    this._authenticationService = _authenticationService;
                    this._router = _router;
                    this.user = this._authenticationService.user;
                    if (!this.user) {
                        this._router.navigate(['/authentication/signin']);
                    }
                }
                VitalSignsListComponent.prototype.isNurse = function () {
                    return this.user && this.user.usertype === 'nurse';
                };
                VitalSignsListComponent = __decorate([
                    core_1.Component({
                        selector: 'vital-signs',
                        templateUrl: './app/vital-signs/list/vital-signs.list.template.html'
                    }), 
                    __metadata('design:paramtypes', [authentication_service_1.AuthenticationService, router_1.Router])
                ], VitalSignsListComponent);
                return VitalSignsListComponent;
            }());
            exports_1("VitalSignsListComponent", VitalSignsListComponent);
        }
    }
});
//# sourceMappingURL=vital-signs.list.component.js.map