import { Component, Input } from '@angular/core';

import { Article } from './article';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.scss']
})
export class ArticleComponent {

    @Input() article: Article;
    @Input() btnContinueReading: boolean;
}

