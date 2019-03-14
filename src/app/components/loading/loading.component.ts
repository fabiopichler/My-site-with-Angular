import { Component, Input } from '@angular/core';

import { Loading } from './loading';

@Component({
    selector: 'app-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
    @Input() loading: Loading = Loading.Loading;
}
