import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingComponent } from './loading.component';
import { ErrorModule } from '../error/error.module';

@NgModule({
    imports: [
        CommonModule,
        ErrorModule
    ],
    declarations: [
        LoadingComponent
    ],
    exports: [
        LoadingComponent
    ]
})
export class LoadingModule {}
