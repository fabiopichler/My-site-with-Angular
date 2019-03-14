import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { ArticleModule } from 'src/app/components/article/article.module';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ArticleModule,
        
        HttpClientModule
    ]
})
export class HomeModule {}