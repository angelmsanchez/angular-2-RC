/* tslint:disable:no-unused-variable */
import { TestBed, async } from '@angular/core/testing';

import { D3Component } from './d3.component';

describe('D3ComponentTesting:', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                D3Component
            ]
        });
    });

    it('should create the d3 component', async(() => {
        TestBed
            .compileComponents()
            .then(() => {
                let fixture = TestBed.createComponent(D3Component);
                let app = fixture.debugElement.componentInstance;
                expect(app).toBeTruthy();
            });

    }));

});
