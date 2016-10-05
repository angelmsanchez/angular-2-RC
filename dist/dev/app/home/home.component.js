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
var index_1 = require('../shared/services/index');
var HomeComponent = (function () {
    function HomeComponent(contribService) {
        this.contribService = contribService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.activeSpinner = true;
        this.getHomeContrib();
    };
    HomeComponent.prototype.goToUrl = function (url) {
        if (url) {
            window.open(url);
        }
        return false;
    };
    HomeComponent.prototype.getHomeContrib = function () {
        var _this = this;
        this.contribService
            .getContrib('home')
            .subscribe(function (data) {
            _this.homeContrib = data;
            _this.activeSpinner = false;
        });
        return false;
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-home',
            templateUrl: 'home.html'
        }), 
        __metadata('design:paramtypes', [index_1.ContribService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsc0JBQStCLDBCQUEwQixDQUFDLENBQUE7QUFXMUQ7SUFVRSx1QkFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBR2xELENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCwrQkFBTyxHQUFQLFVBQVEsR0FBVztRQUNqQixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ1IsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixDQUFDO1FBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFTyxzQ0FBYyxHQUF0QjtRQUFBLGlCQVFDO1FBUEMsSUFBSSxDQUFDLGNBQWM7YUFDaEIsVUFBVSxDQUFDLE1BQU0sQ0FBQzthQUNsQixTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ2IsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDeEIsS0FBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7UUFDTCxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQXpDSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLFdBQVc7U0FDekIsQ0FBQzs7cUJBQUE7SUF1Q0Ysb0JBQUM7QUFBRCxDQXJDQSxBQXFDQyxJQUFBO0FBckNZLHFCQUFhLGdCQXFDekIsQ0FBQSIsImZpbGUiOiJhcHAvaG9tZS9ob21lLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyaWJTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL2luZGV4JztcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIEhvbWVDb21wb25lbnQuXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnc2QtaG9tZScsXHJcbiAgdGVtcGxhdGVVcmw6ICdob21lLmh0bWwnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgaG9tZUNvbnRyaWI6IE9iamVjdDtcclxuICBhY3RpdmVTcGlubmVyOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIHRoZSBIb21lQ29tcG9uZW50IHdpdGggdGhlIGluamVjdGVkXHJcbiAgICogQ29udHJpYlNlcnZpY2UuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0NvbnRyaWJTZXJ2aWNlfSBjb250cmliU2VydmljZSAtIFRoZSBpbmplY3RlZCBDb250cmliU2VydmljZS5cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRyaWJTZXJ2aWNlOiBDb250cmliU2VydmljZSkge1xyXG4gICAgLy8gbGV0IGRheSA9IG1vbWVudCgpLmZvcm1hdCgpO1xyXG4gICAgLy8gY29uc29sZS5sb2coJ3BydWViYSBtb21lbnQnLCBkYXkpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmFjdGl2ZVNwaW5uZXIgPSB0cnVlO1xyXG4gICAgdGhpcy5nZXRIb21lQ29udHJpYigpO1xyXG4gIH1cclxuXHJcbiAgZ29Ub1VybCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHVybCkge1xyXG4gICAgICB3aW5kb3cub3Blbih1cmwpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRIb21lQ29udHJpYigpIHtcclxuICAgIHRoaXMuY29udHJpYlNlcnZpY2VcclxuICAgICAgLmdldENvbnRyaWIoJ2hvbWUnKVxyXG4gICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgIHRoaXMuaG9tZUNvbnRyaWIgPSBkYXRhO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlU3Bpbm5lciA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==
