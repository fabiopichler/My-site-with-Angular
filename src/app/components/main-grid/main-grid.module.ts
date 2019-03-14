import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainGridComponent } from './main-grid.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        MainGridComponent
    ],
    exports: [
        MainGridComponent
    ]
})
export class MainGridModule { }