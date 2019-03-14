import { Component } from '@angular/core';
import {
    Router,
    Event,
    NavigationStart,
    NavigationEnd,
    NavigationCancel,
    NavigationError
} from '@angular/router';

import { Loading } from './components/loading/loading';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    loading: Loading = Loading.Loading;

    constructor(private router: Router) {
        router.events.subscribe((routerEvent: Event) => {
            this.checkRouterEvent(routerEvent);
        });
    }

    checkRouterEvent(routerEvent: Event): void {
        if (routerEvent instanceof NavigationStart) {
            this.loading = Loading.Loading;

        } else if (routerEvent instanceof NavigationEnd
            || routerEvent instanceof NavigationCancel) {
            this.loading = Loading.Loaded;

        } else if (routerEvent instanceof NavigationError) {
            this.loading = Loading.Error;
        }
    }
}
