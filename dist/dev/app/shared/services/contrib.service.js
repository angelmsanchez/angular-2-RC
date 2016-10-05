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
var http_1 = require('@angular/http');
var ContribService = (function () {
    function ContribService(http) {
        this.http = http;
    }
    ContribService.prototype.getContrib = function (endPoint) {
        return this.http
            .get('http://localhost:4444/' + endPoint)
            .map(function (response) { return response.json(); });
    };
    ContribService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ContribService);
    return ContribService;
}());
exports.ContribService = ContribService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvY29udHJpYi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MscUJBQXFCLGVBQWUsQ0FBQyxDQUFBO0FBSXJDO0lBR0Usd0JBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQzlCLENBQUM7SUFpQkQsbUNBQVUsR0FBVixVQUFXLFFBQWdCO1FBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBQyx3QkFBd0IsR0FBRyxRQUFRLENBQUM7YUFDeEMsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUExQkg7UUFBQyxpQkFBVSxFQUFFOztzQkFBQTtJQTRCYixxQkFBQztBQUFELENBM0JBLEFBMkJDLElBQUE7QUEzQlksc0JBQWMsaUJBMkIxQixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvc2VydmljZXMvY29udHJpYi5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbi8vIGltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ29udHJpYlNlcnZpY2Uge1xyXG4gIC8vIHByaXZhdGUgX2NhY2hlOiBPYmplY3QgPSB7fTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7XHJcbiAgfVxyXG5cclxuICAvLyBnZXRDb250cmliKGVuZFBvaW50OiBzdHJpbmcpIHtcclxuICAvLyAgICAgaWYgKHRoaXMuX2NhY2hlLmhhc093blByb3BlcnR5KGVuZFBvaW50KSkge1xyXG4gIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlW2VuZFBvaW50XTtcclxuICAvLyAgICAgfVxyXG5cclxuICAvLyAgICAgbGV0IG9ic2VydmFibGUgPSB0aGlzLmh0dHBcclxuICAvLyAgICAgICAgIC5nZXQoYCR7Q29uc3RhbnRzLkVORFBPSU5UU31gICsgZW5kUG9pbnQpXHJcbiAgLy8gICAgICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAvLyAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuXHJcbiAgLy8gICAgIHRoaXMuX2NhY2hlW2VuZFBvaW50XSA9IG9ic2VydmFibGU7XHJcblxyXG4gIC8vICAgICByZXR1cm4gb2JzZXJ2YWJsZTtcclxuICAvLyB9XHJcblxyXG4gIGdldENvbnRyaWIoZW5kUG9pbnQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjQ0NDQvJyArIGVuZFBvaW50KVxyXG4gICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
