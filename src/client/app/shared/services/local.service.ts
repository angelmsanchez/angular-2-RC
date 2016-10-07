import { Injectable } from '@angular/core';

@Injectable()
export class LocalService {
    localStorage: Storage = localStorage;

    set(key: string, value: any) {
        console.log('set service');
        localStorage[key] = value;
    }

    get(key: string, defaultValue?: any) {
        return localStorage[key] || defaultValue;
    }

    remove(key: string) {
        localStorage.removeItem(key);
    }

    setObject(key: string, value?: string) {
        localStorage[key] = JSON.stringify(value);
    }

    getObject(key: string) {
        return JSON.parse(localStorage[key] || null);
    }

}
