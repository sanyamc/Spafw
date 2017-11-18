import {Injectable} from '@angular/core';

export interface MenuItem {
    icon: string,
    route: string,
    submenu: Array<MenuItem>,
    text: string
}

@Injectable()
export class MenuService {
    items: Array<any>;
    isVertical = true;

    toggleOrientation() {
        this.isVertical = !this.isVertical;
    }
}