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
    HeaderComponent.prototype.contribComun = function () {
        var _this = this;
        this._contribService
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBRWxELGdDQUErQixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQ2hFLHNCQUEwQix1QkFBdUIsQ0FBQyxDQUFBO0FBUWxEO0lBS0kseUJBQW9CLGVBQStCO1FBQS9CLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtJQUNuRCxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLGlCQUFTLENBQUMsT0FBTyxHQUFHLG9CQUFvQixDQUFDO0lBQzNELENBQUM7SUFFRCxzQ0FBWSxHQUFaO1FBQUEsaUJBSUM7UUFIRyxJQUFJLENBQUMsZUFBZTthQUNmLFVBQVUsQ0FBQyxPQUFPLENBQUM7YUFDbkIsU0FBUyxDQUFDLFVBQUMsSUFBUyxJQUFLLE9BQUEsS0FBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLEVBQXpCLENBQXlCLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsaUNBQU8sR0FBUCxVQUFRLEdBQVc7UUFDZixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixDQUFDO1FBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBOUJMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsZUFBZTtZQUM1QixTQUFTLEVBQUUsQ0FBQyxjQUFjLENBQUM7U0FDOUIsQ0FBQzs7dUJBQUE7SUEyQkYsc0JBQUM7QUFBRCxDQTFCQSxBQTBCQyxJQUFBO0FBMUJZLHVCQUFlLGtCQTBCM0IsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ29udHJpYlNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb250cmliLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvaW5kZXgnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcC1oZWFkZXInLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9oZWFkZXIuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9oZWFkZXIuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwdWJsaWMgaGVhZGVyQ29udGVudDogT2JqZWN0O1xyXG4gICAgcHVibGljIHVybEltZzogU3RyaW5nO1xyXG4gICAgcHVibGljIHNwZWFrZXJzOiBPYmplY3Q7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfY29udHJpYlNlcnZpY2U6IENvbnRyaWJTZXJ2aWNlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5jb250cmliQ29tdW4oKTtcclxuICAgICAgICB0aGlzLnVybEltZyA9IENvbnN0YW50cy5VUkxfSU1HICsgJ2FuZ3VsYXJqcy1sb2dvLnBuZyc7XHJcbiAgICB9XHJcblxyXG4gICAgY29udHJpYkNvbXVuKCkge1xyXG4gICAgICAgIHRoaXMuX2NvbnRyaWJTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXRDb250cmliKCdjb211bicpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4gdGhpcy5oZWFkZXJDb250ZW50ID0gZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ29Ub1VybCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh1cmwpIHtcclxuICAgICAgICAgICAgd2luZG93Lm9wZW4odXJsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
