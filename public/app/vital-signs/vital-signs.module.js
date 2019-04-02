System.register(['@angular/core', '@angular/common', '@angular/router', '@angular/forms', './vital-signs.routes', './vital-signs.component', './list/vital-signs.list.component', './create/vital-signs.create.component'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, forms_1, vital_signs_routes_1, vital_signs_component_1, vital_signs_list_component_1, vital_signs_create_component_1;
    var VitalSignsModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (vital_signs_routes_1_1) {
                vital_signs_routes_1 = vital_signs_routes_1_1;
            },
            function (vital_signs_component_1_1) {
                vital_signs_component_1 = vital_signs_component_1_1;
            },
            function (vital_signs_list_component_1_1) {
                vital_signs_list_component_1 = vital_signs_list_component_1_1;
            },
            function (vital_signs_create_component_1_1) {
                vital_signs_create_component_1 = vital_signs_create_component_1_1;
            }],
        execute: function() {
            VitalSignsModule = (function () {
                function VitalSignsModule() {
                }
                VitalSignsModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            common_1.CommonModule,
                            forms_1.FormsModule,
                            router_1.RouterModule.forChild(vital_signs_routes_1.VitalSignsRoutes),
                        ],
                        declarations: [
                            vital_signs_component_1.VitalSignsComponent,
                            vital_signs_list_component_1.VitalSignsListComponent,
                            vital_signs_create_component_1.VitalSignsCreateComponent
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], VitalSignsModule);
                return VitalSignsModule;
            }());
            exports_1("VitalSignsModule", VitalSignsModule);
        }
    }
});
//# sourceMappingURL=vital-signs.module.js.map