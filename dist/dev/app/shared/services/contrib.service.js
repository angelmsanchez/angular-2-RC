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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvY29udHJpYi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MscUJBQXFCLGVBQWUsQ0FBQyxDQUFBO0FBRXJDLHNCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBR3pDO0lBR0ksd0JBQW9CLEtBQVc7UUFBWCxVQUFLLEdBQUwsS0FBSyxDQUFNO0lBQy9CLENBQUM7SUFpQkQsbUNBQVUsR0FBVixVQUFXLFFBQWdCO1FBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSzthQUNaLEdBQUcsQ0FBQyxjQUFNLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQzthQUNwQyxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUE7SUFDekMsQ0FBQztJQTFCTDtRQUFDLGlCQUFVLEVBQUU7O3NCQUFBO0lBNEJiLHFCQUFDO0FBQUQsQ0EzQkEsQUEyQkMsSUFBQTtBQTNCWSxzQkFBYyxpQkEyQjFCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9zZXJ2aWNlcy9jb250cmliLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuXHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9pbmRleCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDb250cmliU2VydmljZSB7XHJcbiAgICAvLyBwcml2YXRlIF9jYWNoZTogT2JqZWN0ID0ge307XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCkge1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGdldENvbnRyaWIoZW5kUG9pbnQ6IHN0cmluZykge1xyXG4gICAgLy8gICAgIGlmICh0aGlzLl9jYWNoZS5oYXNPd25Qcm9wZXJ0eShlbmRQb2ludCkpIHtcclxuICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlW2VuZFBvaW50XTtcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIGxldCBvYnNlcnZhYmxlID0gdGhpcy5odHRwXHJcbiAgICAvLyAgICAgICAgIC5nZXQoYCR7Q29uc3RhbnRzLkVORFBPSU5UU31gICsgZW5kUG9pbnQpXHJcbiAgICAvLyAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLy8gICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcblxyXG4gICAgLy8gICAgIHRoaXMuX2NhY2hlW2VuZFBvaW50XSA9IG9ic2VydmFibGU7XHJcblxyXG4gICAgLy8gICAgIHJldHVybiBvYnNlcnZhYmxlO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGdldENvbnRyaWIoZW5kUG9pbnQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwXHJcbiAgICAgICAgICAgIC5nZXQoQ29uZmlnLkFQSV9MT0NBTEhPU1QgKyBlbmRQb2ludClcclxuICAgICAgICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
