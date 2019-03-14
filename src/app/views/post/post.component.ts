import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ArticleService } from 'src/app/components/article/article.service';
import { Article } from 'src/app/components/article/article';

@Component({
    templateUrl: './post.component.html'
})
export class PostComponent implements OnInit, OnDestroy {
    article: Article;
    private parametersObservable: any;

    constructor(
        private activatedRoute: ActivatedRoute,
        private service: ArticleService
    ) {}

    ngOnInit(): void {
        this.parametersObservable = this.activatedRoute.params.subscribe(params => {
            this.article = this.activatedRoute.snapshot.data.article;
        });
    }

    ngOnDestroy(): void {
        if(this.parametersObservable != null) {
            this.parametersObservable.unsubscribe();
        }
    }
}