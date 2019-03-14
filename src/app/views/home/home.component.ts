import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ArticleService } from 'src/app/components/article/article.service';
import { Article } from 'src/app/components/article/article';

@Component({
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    articles: Article[] = [];

    constructor(
        private activatedRoute: ActivatedRoute,
        private service: ArticleService
    ) {}

    ngOnInit(): void {
        this.articles = this.activatedRoute.snapshot.data.articles;
    }
}