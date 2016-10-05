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
var StepsComponent = (function () {
    function StepsComponent() {
    }
    StepsComponent.prototype.ngOnInit = function () {
        console.log('this.actualSteps ', this.actualStep);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], StepsComponent.prototype, "steps", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], StepsComponent.prototype, "actualStep", void 0);
    StepsComponent = __decorate([
        core_1.Component({
            selector: 'app-steps',
            moduleId: module.id,
            templateUrl: './steps.html',
            styleUrls: ['./steps.css']
        }), 
        __metadata('design:paramtypes', [])
    ], StepsComponent);
    return StepsComponent;
}());
exports.StepsComponent = StepsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29tcG9uZW50cy9zdGVwcy9zdGVwcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QyxlQUFlLENBQUMsQ0FBQTtBQVF6RDtJQUFBO0lBVUEsQ0FBQztJQUpHLGlDQUFRLEdBQVI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBUEQ7UUFBQyxZQUFLLEVBQUU7O2lEQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7O3NEQUFBO0lBUlo7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxjQUFjO1lBQzNCLFNBQVMsRUFBRSxDQUFDLGFBQWEsQ0FBQztTQUM3QixDQUFDOztzQkFBQTtJQVdGLHFCQUFDO0FBQUQsQ0FWQSxBQVVDLElBQUE7QUFWWSxzQkFBYyxpQkFVMUIsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL2NvbXBvbmVudHMvc3RlcHMvc3RlcHMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLXN0ZXBzJyxcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vc3RlcHMuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9zdGVwcy5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3RlcHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgQElucHV0KCkgc3RlcHM6IFN0cmluZ1tdO1xyXG4gICAgQElucHV0KCkgYWN0dWFsU3RlcDogT2JqZWN0O1xyXG5cclxuICAgIHB1YmxpYyBpc1BhcjogYm9vbGVhbjtcclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygndGhpcy5hY3R1YWxTdGVwcyAnLCB0aGlzLmFjdHVhbFN0ZXApO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
