"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var contrib_service_1 = require('./../contrib.service');
var HomeComponent = (function () {
    function HomeComponent(_router, _contribService) {
        this._router = _router;
        this._contribService = _contribService;
        console.log('constructor home');
        _contribService.getContrib('home-component');
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.goTo = function (endPoint) {
        this._router.navigate([endPoint]);
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-home',
            templateUrl: 'home.html',
            styleUrls: ['home.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, contrib_service_1.ContribService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFFekMsZ0NBQStCLHNCQUFzQixDQUFDLENBQUE7QUFhdEQ7SUFLSSx1QkFBb0IsT0FBZSxFQUN2QixlQUErQjtRQUR2QixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ3ZCLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUd2QyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDaEMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBR2pELENBQUM7SUFFRCxnQ0FBUSxHQUFSO0lBR0EsQ0FBQztJQWFELDRCQUFJLEdBQUosVUFBSyxRQUFnQjtRQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQXhDTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLFdBQVc7WUFDeEIsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDO1NBQzFCLENBQUM7O3FCQUFBO0lBcUNGLG9CQUFDO0FBQUQsQ0FuQ0EsQUFtQ0MsSUFBQTtBQW5DWSxxQkFBYSxnQkFtQ3pCLENBQUEiLCJmaWxlIjoiYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgQ29udHJpYlNlcnZpY2UgfSBmcm9tICcuLy4uL2NvbnRyaWIuc2VydmljZSc7XHJcblxyXG4vLyBpbXBvcnQgeyBDb250cmliU2VydmljZSB9IGZyb20gJy4vLi4vY29yZS9zZXJ2aWNlcy9jb250cmliLnNlcnZpY2UnO1xyXG4vLyBpbXBvcnQgeyBUb2FzdFNlcnZpY2UgfSBmcm9tICcuLy4uL2NvcmUvdG9hc3QvdG9hc3Quc2VydmljZSc7XHJcbi8vIGltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdhcHAtaG9tZScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2hvbWUuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnaG9tZS5jc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHVibGljIGRheTogc3RyaW5nO1xyXG4gICAgLy8gcHVibGljIGFjdGl2ZVNwaW5uZXI6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHVibGljIGhlYWRlckNvbnRlbnQ6IE9iamVjdDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcml2YXRlIF9jb250cmliU2VydmljZTogQ29udHJpYlNlcnZpY2VcclxuICAgICAgICAvLyBwcml2YXRlIF90b2FzdFNlcnZpY2U6IFRvYXN0U2VydmljXHJcbiAgICApIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY29uc3RydWN0b3IgaG9tZScpO1xyXG4gICAgICAgIF9jb250cmliU2VydmljZS5nZXRDb250cmliKCdob21lLWNvbXBvbmVudCcpO1xyXG5cclxuICAgICAgICAvLyApIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHRoaXMuYWN0aXZlU3Bpbm5lciA9IGZhbHNlLCA1MDAwKTtcclxuICAgICAgICAvLyB0aGlzLmNvbnRyaWJDb211bigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHByaXZhdGUgY29udHJpYkNvbXVuKCkge1xyXG4gICAgLy8gICAgIHRoaXMuX2NvbnRyaWJTZXJ2aWNlXHJcbiAgICAvLyAgICAgICAgIC5nZXRDb250cmliKCdjb211bicpXHJcbiAgICAvLyAgICAgICAgIC8vIC5kbygoKSA9PiB0aGlzLl90b2FzdFNlcnZpY2UuYWN0aXZhdGUoJ3BydWViYSBhbmdlbCcpKVxyXG4gICAgLy8gICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuaGVhZGVyQ29udGVudCA9IGRhdGE7XHJcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnc3Vic2NyaWJlIGNvbnRyaWJDb211bicpO1xyXG4gICAgLy8gICAgICAgICB9KTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZygnaG9tZSBob21lIGhvbWUgY29udHJpYkNvbXVuJyk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgZ29UbyhlbmRQb2ludDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtlbmRQb2ludF0pO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
