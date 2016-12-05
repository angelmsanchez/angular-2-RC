/* tslint:disable:no-unused-variable */
import { TestBed, async } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { HomeComponent } from './home.component';

describe('HomeComponentTesting:', () => {
    console.log('HOme create test');
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                HomeComponent
            ],
            imports: [
                HttpModule
            ]
        });
    });

    it('should create the home component', async(() => {
        TestBed
            .compileComponents()
            .then(() => {
                console.log('LOG::::::should create home component');
                let fixture = TestBed.createComponent(HomeComponent);
                let app = fixture.debugElement.componentInstance;
                expect(app).toBeTruthy();
            });

    }));

    // xit('should render title in a h1 tag', async(() => {
    //     let fixture = TestBed.createComponent(AppComponent);
    //     fixture.detectChanges();
    //     let compiled = fixture.debugElement.nativeElement;
    //     expect(compiled.querySelector('h1').textContent).toContain('Search User');
    // }));
});
