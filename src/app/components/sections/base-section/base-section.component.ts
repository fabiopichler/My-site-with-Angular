import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-base-section',
    templateUrl: './base-section.component.html'
})
export class BaseSectionComponent {

    @Input() title: string;
    @Input() titleicon: string;
}