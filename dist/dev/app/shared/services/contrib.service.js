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
var index_1 = require('../config/index');
var ContribService = (function () {
    function ContribService(_http) {
        this._http = _http;
    }
    ContribService.prototype.getContrib = function (endPoint) {
        return this._http
            .get(index_1.Config.API_LOCALHOST + endPoint)
            .map(function (response) { return response.json(); });
    };
    ContribService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ContribService);
    return ContribService;
}());
exports.ContribService = ContribService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvY29udHJpYi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MscUJBQXFCLGVBQWUsQ0FBQyxDQUFBO0FBRXJDLHNCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBR3pDO0lBR0ksd0JBQW9CLEtBQVc7UUFBWCxVQUFLLEdBQUwsS0FBSyxDQUFNO0lBQy9CLENBQUM7SUFpQkQsbUNBQVUsR0FBVixVQUFXLFFBQWdCO1FBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSzthQUNaLEdBQUcsQ0FBQyxjQUFNLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQzthQUNwQyxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUE7SUFDekMsQ0FBQztJQTFCTDtRQUFDLGlCQUFVLEVBQUU7O3NCQUFBO0lBNEJiLHFCQUFDO0FBQUQsQ0EzQkEsQUEyQkMsSUFBQTtBQTNCWSxzQkFBYyxpQkEyQjFCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9zZXJ2aWNlcy9jb250cmliLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb250cmliU2VydmljZSB7XG4gICAgLy8gcHJpdmF0ZSBfY2FjaGU6IE9iamVjdCA9IHt9O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCkge1xuICAgIH1cblxuICAgIC8vIGdldENvbnRyaWIoZW5kUG9pbnQ6IHN0cmluZykge1xuICAgIC8vICAgICBpZiAodGhpcy5fY2FjaGUuaGFzT3duUHJvcGVydHkoZW5kUG9pbnQpKSB7XG4gICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGVbZW5kUG9pbnRdO1xuICAgIC8vICAgICB9XG5cbiAgICAvLyAgICAgbGV0IG9ic2VydmFibGUgPSB0aGlzLmh0dHBcbiAgICAvLyAgICAgICAgIC5nZXQoYCR7Q29uc3RhbnRzLkVORFBPSU5UU31gICsgZW5kUG9pbnQpXG4gICAgLy8gICAgICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAvLyAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcblxuICAgIC8vICAgICB0aGlzLl9jYWNoZVtlbmRQb2ludF0gPSBvYnNlcnZhYmxlO1xuXG4gICAgLy8gICAgIHJldHVybiBvYnNlcnZhYmxlO1xuICAgIC8vIH1cblxuICAgIGdldENvbnRyaWIoZW5kUG9pbnQ6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cFxuICAgICAgICAgICAgLmdldChDb25maWcuQVBJX0xPQ0FMSE9TVCArIGVuZFBvaW50KVxuICAgICAgICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgfVxuXG59XG4iXX0=
