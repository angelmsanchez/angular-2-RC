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
var moment = require('moment');
var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.day = moment().format('dddd DD MMMM  YYYY');
    };
    HomeComponent.prototype.setLocalStorage = function (value) {
        localStorage.setItem('localStorage-2', value);
        return false;
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-home',
            templateUrl: 'home.html',
            styleUrls: ['home.css']
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFFbEQsSUFBWSxNQUFNLFdBQU0sUUFBUSxDQUFDLENBQUE7QUFTakM7SUFBQTtJQW1CQSxDQUFDO0lBZkcsZ0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELHVDQUFlLEdBQWYsVUFBZ0IsS0FBYTtRQUV6QixZQUFZLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzlDLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQW5CTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLFdBQVc7WUFDeEIsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDO1NBQzFCLENBQUM7O3FCQUFBO0lBcUJGLG9CQUFDO0FBQUQsQ0FuQkEsQUFtQkMsSUFBQTtBQW5CWSxxQkFBYSxnQkFtQnpCLENBQUEiLCJmaWxlIjoiYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ2FwcC1ob21lJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnaG9tZS5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWydob21lLmNzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBkYXk6IHN0cmluZztcclxuICAgIC8vIHZhbHVlTG9jYWxTdG9yYWdlOiBzdHJpbmc7XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5kYXkgPSBtb21lbnQoKS5mb3JtYXQoJ2RkZGQgREQgTU1NTSAgWVlZWScpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldExvY2FsU3RvcmFnZSh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgLy8gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnbG9jYWxTdG9yYWdlJywgdmFsdWUpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsb2NhbFN0b3JhZ2UtMicsIHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ2V0TG9jYWxTdG9yYWdlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIC8vICAgICB0aGlzLnZhbHVlTG9jYWxTdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvY2FsU3RvcmFnZScpO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCd0aGlzLnZhbHVlTG9jYWxTdG9yYWdlICcgKyB0aGlzLnZhbHVlTG9jYWxTdG9yYWdlKTtcclxuICAgIC8vIH1cclxuXHJcbn1cclxuIl19
