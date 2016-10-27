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
    function ContribService(http) {
        this.http = http;
    }
    ContribService.prototype.getContrib = function (endPoint) {
        return this.http
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvY29udHJpYi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MscUJBQStCLGVBQWUsQ0FBQyxDQUFBO0FBRy9DLHNCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBR3pDO0lBR0Usd0JBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQzlCLENBQUM7SUFpQkQsbUNBQVUsR0FBVixVQUFXLFFBQWdCO1FBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBQyxjQUFNLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQzthQUNwQyxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUE7SUFDckMsQ0FBQztJQTFCSDtRQUFDLGlCQUFVLEVBQUU7O3NCQUFBO0lBNEJiLHFCQUFDO0FBQUQsQ0EzQkEsQUEyQkMsSUFBQTtBQTNCWSxzQkFBYyxpQkEyQjFCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9zZXJ2aWNlcy9jb250cmliLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5cclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2luZGV4JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENvbnRyaWJTZXJ2aWNlIHtcclxuICAvLyBwcml2YXRlIF9jYWNoZTogT2JqZWN0ID0ge307XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge1xyXG4gIH1cclxuXHJcbiAgLy8gZ2V0Q29udHJpYihlbmRQb2ludDogc3RyaW5nKSB7XHJcbiAgLy8gICAgIGlmICh0aGlzLl9jYWNoZS5oYXNPd25Qcm9wZXJ0eShlbmRQb2ludCkpIHtcclxuICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9jYWNoZVtlbmRQb2ludF07XHJcbiAgLy8gICAgIH1cclxuXHJcbiAgLy8gICAgIGxldCBvYnNlcnZhYmxlID0gdGhpcy5odHRwXHJcbiAgLy8gICAgICAgICAuZ2V0KGAke0NvbnN0YW50cy5FTkRQT0lOVFN9YCArIGVuZFBvaW50KVxyXG4gIC8vICAgICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgLy8gICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcblxyXG4gIC8vICAgICB0aGlzLl9jYWNoZVtlbmRQb2ludF0gPSBvYnNlcnZhYmxlO1xyXG5cclxuICAvLyAgICAgcmV0dXJuIG9ic2VydmFibGU7XHJcbiAgLy8gfVxyXG5cclxuICBnZXRDb250cmliKGVuZFBvaW50OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgLmdldChDb25maWcuQVBJX0xPQ0FMSE9TVCArIGVuZFBvaW50KVxyXG4gICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICB9XHJcblxyXG59XHJcbiJdfQ==
