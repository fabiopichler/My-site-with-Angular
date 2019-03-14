import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { MainGridModule } from './components/main-grid/main-grid.module';
import { HeaderModule } from './components/header/header.module';
import { FooterModule } from './components/footer/footer.module';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { LoadingModule } from './components/loading/loading.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,

        MainGridModule,
        HeaderModule,
        FooterModule,
        SidebarModule,
        LoadingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
