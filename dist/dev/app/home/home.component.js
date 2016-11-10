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
var contrib_service_1 = require('./../core/services/contrib.service');
var HomeComponent = (function () {
    function HomeComponent(_router, _contribService) {
        this._router = _router;
        this._contribService = _contribService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.contribComun();
    };
    HomeComponent.prototype.contribComun = function () {
        var _this = this;
        this._contribService
            .getContrib('comun')
            .subscribe(function (data) {
            _this.headerContent = data;
            console.log('subscribe contribComun');
        });
        console.log('home home home contribComun');
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFFekMsZ0NBQStCLG9DQUFvQyxDQUFDLENBQUE7QUFXcEU7SUFLSSx1QkFBb0IsT0FBZSxFQUN2QixlQUErQjtRQUR2QixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ3ZCLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtJQUkzQyxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUVJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRU8sb0NBQVksR0FBcEI7UUFBQSxpQkFTQztRQVJHLElBQUksQ0FBQyxlQUFlO2FBQ2YsVUFBVSxDQUFDLE9BQU8sQ0FBQzthQUVuQixTQUFTLENBQUMsVUFBQyxJQUFTO1lBQ2pCLEtBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FBQztRQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsNEJBQUksR0FBSixVQUFLLFFBQWdCO1FBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBckNMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsV0FBVztZQUN4QixTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUM7U0FDMUIsQ0FBQzs7cUJBQUE7SUFrQ0Ysb0JBQUM7QUFBRCxDQWhDQSxBQWdDQyxJQUFBO0FBaENZLHFCQUFhLGdCQWdDekIsQ0FBQSIsImZpbGUiOiJhcHAvaG9tZS9ob21lLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBDb250cmliU2VydmljZSB9IGZyb20gJy4vLi4vY29yZS9zZXJ2aWNlcy9jb250cmliLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUb2FzdFNlcnZpY2UgfSBmcm9tICcuLy4uL2NvcmUvdG9hc3QvdG9hc3Quc2VydmljZSc7XHJcbi8vIGltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdhcHAtaG9tZScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2hvbWUuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnaG9tZS5jc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHVibGljIGRheTogc3RyaW5nO1xyXG4gICAgLy8gcHVibGljIGFjdGl2ZVNwaW5uZXI6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHVibGljIGhlYWRlckNvbnRlbnQ6IE9iamVjdDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcml2YXRlIF9jb250cmliU2VydmljZTogQ29udHJpYlNlcnZpY2UsXHJcbiAgICAgICAgLy8gcHJpdmF0ZSBfdG9hc3RTZXJ2aWNlOiBUb2FzdFNlcnZpY1xyXG4gICAgKSB7XHJcbiAgICAgICAgLy8gKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB0aGlzLmFjdGl2ZVNwaW5uZXIgPSBmYWxzZSwgNTAwMCk7XHJcbiAgICAgICAgdGhpcy5jb250cmliQ29tdW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNvbnRyaWJDb211bigpIHtcclxuICAgICAgICB0aGlzLl9jb250cmliU2VydmljZVxyXG4gICAgICAgICAgICAuZ2V0Q29udHJpYignY29tdW4nKVxyXG4gICAgICAgICAgICAvLyAuZG8oKCkgPT4gdGhpcy5fdG9hc3RTZXJ2aWNlLmFjdGl2YXRlKCdwcnVlYmEgYW5nZWwnKSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWRlckNvbnRlbnQgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3N1YnNjcmliZSBjb250cmliQ29tdW4nKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2hvbWUgaG9tZSBob21lIGNvbnRyaWJDb211bicpO1xyXG4gICAgfVxyXG5cclxuICAgIGdvVG8oZW5kUG9pbnQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbZW5kUG9pbnRdKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19
