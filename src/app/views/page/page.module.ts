import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PageComponent } from './page.component';
import { ArticleModule } from 'src/app/components/article/article.module';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        PageComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ArticleModule,
        
        HttpClientModule
    ]
})
export class PageModule {}