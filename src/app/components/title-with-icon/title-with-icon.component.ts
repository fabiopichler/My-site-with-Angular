import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-title-with-icon',
    templateUrl: './title-with-icon.component.html',
    styleUrls: ['./title-with-icon.component.scss']
})
export class TitleWithIconComponent {

    @Input() title: string;
    @Input() icon: string = null;
}