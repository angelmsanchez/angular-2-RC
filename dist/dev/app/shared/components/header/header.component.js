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
var contrib_service_1 = require('../../services/contrib.service');
var index_1 = require('../../constants/index');
var HeaderComponent = (function () {
    function HeaderComponent(contribService) {
        this.contribService = contribService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.contribComun();
        this.urlImg = index_1.Constants.URL_IMG + 'angularjs-logo.png';
    };
    HeaderComponent.prototype.contribComun = function () {
        var _this = this;
        this.contribService
            .getContrib('comun')
            .subscribe(function (data) { return _this.headerContent = data; });
    };
    HeaderComponent.prototype.goToUrl = function (url) {
        if (url) {
            window.open(url);
        }
        return false;
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            moduleId: module.id,
            templateUrl: './header.html',
            styleUrls: ['./header.css'],
            providers: [contrib_service_1.ContribService]
        }), 
        __metadata('design:paramtypes', [contrib_service_1.ContribService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBRWxELGdDQUErQixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQ2hFLHNCQUEwQix1QkFBdUIsQ0FBQyxDQUFBO0FBU2xEO0lBSUkseUJBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUNsRCxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLGlCQUFTLENBQUMsT0FBTyxHQUFHLG9CQUFvQixDQUFDO0lBQzNELENBQUM7SUFFRCxzQ0FBWSxHQUFaO1FBQUEsaUJBSUM7UUFIRyxJQUFJLENBQUMsY0FBYzthQUNkLFVBQVUsQ0FBQyxPQUFPLENBQUM7YUFDbkIsU0FBUyxDQUFDLFVBQUMsSUFBUyxJQUFLLE9BQUEsS0FBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLEVBQXpCLENBQXlCLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsaUNBQU8sR0FBUCxVQUFRLEdBQVc7UUFDZixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixDQUFDO1FBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBOUJMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsZUFBZTtZQUM1QixTQUFTLEVBQUUsQ0FBQyxjQUFjLENBQUM7WUFDM0IsU0FBUyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztTQUM5QixDQUFDOzt1QkFBQTtJQXlCRixzQkFBQztBQUFELENBeEJBLEFBd0JDLElBQUE7QUF4QlksdUJBQWUsa0JBd0IzQixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDb250cmliU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnRyaWIuc2VydmljZSc7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9pbmRleCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLWhlYWRlcicsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2hlYWRlci5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2hlYWRlci5jc3MnXSxcclxuICAgIHByb3ZpZGVyczogW0NvbnRyaWJTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHB1YmxpYyBoZWFkZXJDb250ZW50OiBPYmplY3Q7XHJcbiAgICBwdWJsaWMgdXJsSW1nOiBTdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb250cmliU2VydmljZTogQ29udHJpYlNlcnZpY2UpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmNvbnRyaWJDb211bigpO1xyXG4gICAgICAgIHRoaXMudXJsSW1nID0gQ29uc3RhbnRzLlVSTF9JTUcgKyAnYW5ndWxhcmpzLWxvZ28ucG5nJztcclxuICAgIH1cclxuXHJcbiAgICBjb250cmliQ29tdW4oKSB7XHJcbiAgICAgICAgdGhpcy5jb250cmliU2VydmljZVxyXG4gICAgICAgICAgICAuZ2V0Q29udHJpYignY29tdW4nKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHRoaXMuaGVhZGVyQ29udGVudCA9IGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGdvVG9VcmwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodXJsKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKHVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG4iXX0=
