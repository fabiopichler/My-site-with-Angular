import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { NavigationModule } from '../navigation/navigation.module';

@NgModule({
    imports: [
        CommonModule,
        NavigationModule
    ],
    declarations: [
        HeaderComponent
    ],
    exports: [
        HeaderComponent
    ]
})
export class HeaderModule {}