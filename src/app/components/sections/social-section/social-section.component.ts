import { Component } from "@angular/core";

@Component({
    selector: 'app-social-section',
    templateUrl: './social-section.component.html',
    styleUrls: ['social-section.component.scss']
})
export class SocialSectionComponent {
    list: Object[] = [
        {
            title: 'Perfil no Facebook',
            url: 'https://www.facebook.com/FabioPichler.vue',
            icon: 'fab fa-facebook-square facebook'
        }, {
            title: 'Página no Facebook',
            url: 'https://www.facebook.com/fabiopichler.net',
            icon: 'fab fa-facebook-square facebook'
        }, {
            title: 'Perfil no GitHub',
            url: 'https://github.com/fabiopichler',
            icon: 'fab fa-github github'
        }, {
            title: 'Perfil no  LinkedIn',
            url: 'https://www.linkedin.com/in/fabio-pichler/',
            icon: 'fab fa-linkedin linkedin'
        }
    ];
}