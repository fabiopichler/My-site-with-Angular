import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ArticleComponent } from './article.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        ArticleComponent
    ],
    exports: [
        ArticleComponent
    ]
})
export class ArticleModule { }
