System.register(['./vital-signs.component', './list/vital-signs.list.component', './create/vital-signs.create.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var vital_signs_component_1, vital_signs_list_component_1, vital_signs_create_component_1;
    var VitalSignsRoutes;
    return {
        setters:[
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
            exports_1("VitalSignsRoutes", VitalSignsRoutes = [{
                    path: 'vital-signs',
                    component: vital_signs_component_1.VitalSignsComponent,
                    children: [
                        { path: '', component: vital_signs_list_component_1.VitalSignsListComponent },
                        { path: 'create', component: vital_signs_create_component_1.VitalSignsCreateComponent },
                    ]
                }]);
        }
    }
});
//# sourceMappingURL=vital-signs.routes.js.map