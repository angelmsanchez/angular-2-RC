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
    function HeaderComponent(_contribService) {
        this._contribService = _contribService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.contribComun();
        this.urlImg = index_1.Constants.URL_IMG + 'angularjs-logo.png';
    };
    HeaderComponent.prototype.goToUrl = function (url) {
        if (url) {
            window.open(url);
        }
        return false;
    };
    HeaderComponent.prototype.contribComun = function () {
        var _this = this;
        this._contribService
            .getContrib('comun')
            .subscribe(function (data) { return _this.headerContent = data; });
        console.log('header contribComun');
    };
    HeaderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-header',
            templateUrl: './header.html',
            styleUrls: ['./header.css']
        }), 
        __metadata('design:paramtypes', [contrib_service_1.ContribService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBRWxELGdDQUErQixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQ2hFLHNCQUEwQix1QkFBdUIsQ0FBQyxDQUFBO0FBU2xEO0lBS0kseUJBQW9CLGVBQStCO1FBQS9CLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtJQUduRCxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLGlCQUFTLENBQUMsT0FBTyxHQUFHLG9CQUFvQixDQUFDO0lBQzNELENBQUM7SUFFRCxpQ0FBTyxHQUFQLFVBQVEsR0FBVztRQUNmLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLENBQUM7UUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFTyxzQ0FBWSxHQUFwQjtRQUFBLGlCQUtDO1FBSkcsSUFBSSxDQUFDLGVBQWU7YUFDZixVQUFVLENBQUMsT0FBTyxDQUFDO2FBQ25CLFNBQVMsQ0FBQyxVQUFDLElBQVMsSUFBSyxPQUFBLEtBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxFQUF6QixDQUF5QixDQUFDLENBQUM7UUFDekQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFqQ0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRSxlQUFlO1lBQzVCLFNBQVMsRUFBRSxDQUFDLGNBQWMsQ0FBQztTQUM5QixDQUFDOzt1QkFBQTtJQThCRixzQkFBQztBQUFELENBN0JBLEFBNkJDLElBQUE7QUE3QlksdUJBQWUsa0JBNkIzQixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDb250cmliU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnRyaWIuc2VydmljZSc7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9pbmRleCc7XHJcbmltcG9ydCB7IFRvYXN0U2VydmljZSB9IGZyb20gJy4vLi4vdG9hc3QvdG9hc3Quc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ2FwcC1oZWFkZXInLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2hlYWRlci5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2hlYWRlci5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHB1YmxpYyBoZWFkZXJDb250ZW50OiBPYmplY3Q7XHJcbiAgICBwdWJsaWMgdXJsSW1nOiBTdHJpbmc7XHJcbiAgICBwdWJsaWMgc3BlYWtlcnM6IE9iamVjdDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jb250cmliU2VydmljZTogQ29udHJpYlNlcnZpY2UsXHJcbiAgICAgICAgLy8gcHJpdmF0ZSBfdG9hc3RTZXJ2aWNlOiBUb2FzdFNlcnZpY2UpIHtcclxuICAgICkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuY29udHJpYkNvbXVuKCk7XHJcbiAgICAgICAgdGhpcy51cmxJbWcgPSBDb25zdGFudHMuVVJMX0lNRyArICdhbmd1bGFyanMtbG9nby5wbmcnO1xyXG4gICAgfVxyXG5cclxuICAgIGdvVG9VcmwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodXJsKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKHVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNvbnRyaWJDb211bigpIHtcclxuICAgICAgICB0aGlzLl9jb250cmliU2VydmljZVxyXG4gICAgICAgICAgICAuZ2V0Q29udHJpYignY29tdW4nKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHRoaXMuaGVhZGVyQ29udGVudCA9IGRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdoZWFkZXIgY29udHJpYkNvbXVuJyk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
