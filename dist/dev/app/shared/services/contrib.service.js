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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvY29udHJpYi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MscUJBQStCLGVBQWUsQ0FBQyxDQUFBO0FBRy9DLHNCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBR3pDO0lBR0Usd0JBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQzlCLENBQUM7SUFpQkQsbUNBQVUsR0FBVixVQUFXLFFBQWdCO1FBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBQyxjQUFNLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQzthQUNwQyxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUE7SUFDckMsQ0FBQztJQTFCSDtRQUFDLGlCQUFVLEVBQUU7O3NCQUFBO0lBNEJiLHFCQUFDO0FBQUQsQ0EzQkEsQUEyQkMsSUFBQTtBQTNCWSxzQkFBYyxpQkEyQjFCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9zZXJ2aWNlcy9jb250cmliLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5cbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb250cmliU2VydmljZSB7XG4gIC8vIHByaXZhdGUgX2NhY2hlOiBPYmplY3QgPSB7fTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHtcbiAgfVxuXG4gIC8vIGdldENvbnRyaWIoZW5kUG9pbnQ6IHN0cmluZykge1xuICAvLyAgICAgaWYgKHRoaXMuX2NhY2hlLmhhc093blByb3BlcnR5KGVuZFBvaW50KSkge1xuICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9jYWNoZVtlbmRQb2ludF07XG4gIC8vICAgICB9XG5cbiAgLy8gICAgIGxldCBvYnNlcnZhYmxlID0gdGhpcy5odHRwXG4gIC8vICAgICAgICAgLmdldChgJHtDb25zdGFudHMuRU5EUE9JTlRTfWAgKyBlbmRQb2ludClcbiAgLy8gICAgICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgLy8gICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG5cbiAgLy8gICAgIHRoaXMuX2NhY2hlW2VuZFBvaW50XSA9IG9ic2VydmFibGU7XG5cbiAgLy8gICAgIHJldHVybiBvYnNlcnZhYmxlO1xuICAvLyB9XG5cbiAgZ2V0Q29udHJpYihlbmRQb2ludDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldChDb25maWcuQVBJX0xPQ0FMSE9TVCArIGVuZFBvaW50KVxuICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gIH1cblxufVxuIl19
