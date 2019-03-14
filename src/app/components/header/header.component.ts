import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    menu: Object[] = [
        {
            to: '/',
            text: 'Início',
            icon: 'fas fa-home'
        }, {
            to: '/portfolio',
            text: 'Portfólio',
            icon: 'fas fa-portrait'
        }, {
            to: '/contato',
            text: 'Contato',
            icon: 'fas fa-file-contract'
        }, {
            to: '/sobre',
            text: 'Sobre',
            icon: 'fas fa-info-circle'
        }
    ]
}