import { HostListener, Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ScreenService {
    private resizeSource = new Subject<null>(); // making an observable
    resize$ = this.resizeSource.asObservable(); //making it a public prop so subscribers can listen to it.

    largeBreakpoint = 800;
    screenWidth = 1000;
    screenHeight = 800;

    constructor() {
        try{
            this.screenHeight = window.innerHeight; // some UI might not have window
            this.screenWidth = window.innerWidth;
            window.addEventListener('resize', (event) => this.onResize(event));
        }
        catch(e){

        }
    }

    isLarge(): boolean {
        return this.screenWidth >= this.largeBreakpoint;
    }

    onResize($event): void{
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
        this.resizeSource.next();
    }
}