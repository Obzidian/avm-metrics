"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var NewdataComponent = (function () {
    function NewdataComponent() {
        this.pageTitle = "Asset Dashboard";
        this.newdata = [
            {
                asset_id: 52252,
                host_name: "TEST-LAPTOP67801",
                IP: "192.168.1.149",
                OS: "Microsoft Windows 7 Professional Edition SP1",
                critical_vul: 173,
                severe_vul: 451,
                risk_score: 285080,
                last_discovered: '06/10/2017'
            },
            {
                asset_id: 9487,
                host_name: "TEST-PC63285",
                IP: "192.168.1.115",
                OS: "Microsoft Windows 7 Professional Edition SP1",
                critical_vul: 875,
                severe_vul: 616,
                risk_score: 86449,
                last_discovered: '06/06/2017'
            },
            {
                asset_id: 1925,
                host_name: "TEST-TABLET63327",
                IP: "192.168.1.64",
                OS: "Microsoft Windows 7 Professional Edition SP1",
                critical_vul: 70,
                severe_vul: 311,
                risk_score: 129091,
                last_discovered: '06/09/2017'
            }
        ];
    }
    return NewdataComponent;
}());
NewdataComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'newdata',
        templateUrl: 'newdata.component.html'
    })
], NewdataComponent);
exports.NewdataComponent = NewdataComponent;
//# sourceMappingURL=newdata.component.js.map