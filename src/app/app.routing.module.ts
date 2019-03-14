import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { HomeResolver } from './views/home/home.resolver';
import { PostComponent } from './views/post/post.component';
import { PostResolver } from './views/post/post.resolver';
import { PostModule } from './views/post/post.module';
import { HomeModule } from './views/home/home.module';
import { PageModule } from './views/page/page.module';
import { PageComponent } from './views/page/page.component';
import { PageResolver } from './views/page/page.resolver';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        resolve: {
            articles: HomeResolver
        }
    }, {
        path: 'blog/:slug',
        component: PostComponent,
        resolve: {
            article: PostResolver
        }
    }, {
        path: ':slug',
        component: PageComponent,
        resolve: {
            article: PageResolver
        }
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'}),
        HomeModule,
        PostModule,
        PageModule
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
