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
            styleUrls: ['./header.css']
        }), 
        __metadata('design:paramtypes', [contrib_service_1.ContribService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBRWxELGdDQUErQixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQ2hFLHNCQUEwQix1QkFBdUIsQ0FBQyxDQUFBO0FBUWxEO0lBSUkseUJBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUNsRCxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLGlCQUFTLENBQUMsT0FBTyxHQUFHLG9CQUFvQixDQUFDO0lBQzNELENBQUM7SUFFRCxzQ0FBWSxHQUFaO1FBQUEsaUJBSUM7UUFIRyxJQUFJLENBQUMsY0FBYzthQUNkLFVBQVUsQ0FBQyxPQUFPLENBQUM7YUFDbkIsU0FBUyxDQUFDLFVBQUMsSUFBUyxJQUFLLE9BQUEsS0FBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLEVBQXpCLENBQXlCLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsaUNBQU8sR0FBUCxVQUFRLEdBQVc7UUFDZixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixDQUFDO1FBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBN0JMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsZUFBZTtZQUM1QixTQUFTLEVBQUUsQ0FBQyxjQUFjLENBQUM7U0FDOUIsQ0FBQzs7dUJBQUE7SUF5QkYsc0JBQUM7QUFBRCxDQXhCQSxBQXdCQyxJQUFBO0FBeEJZLHVCQUFlLGtCQXdCM0IsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb250cmliU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnRyaWIuc2VydmljZSc7XG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvaW5kZXgnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1oZWFkZXInLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2hlYWRlci5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9oZWFkZXIuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgaGVhZGVyQ29udGVudDogT2JqZWN0O1xuICAgIHB1YmxpYyB1cmxJbWc6IFN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udHJpYlNlcnZpY2U6IENvbnRyaWJTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuY29udHJpYkNvbXVuKCk7XG4gICAgICAgIHRoaXMudXJsSW1nID0gQ29uc3RhbnRzLlVSTF9JTUcgKyAnYW5ndWxhcmpzLWxvZ28ucG5nJztcbiAgICB9XG5cbiAgICBjb250cmliQ29tdW4oKSB7XG4gICAgICAgIHRoaXMuY29udHJpYlNlcnZpY2VcbiAgICAgICAgICAgIC5nZXRDb250cmliKCdjb211bicpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHRoaXMuaGVhZGVyQ29udGVudCA9IGRhdGEpO1xuICAgIH1cblxuICAgIGdvVG9VcmwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHVybCkge1xuICAgICAgICAgICAgd2luZG93Lm9wZW4odXJsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuIl19
