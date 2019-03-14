import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TitleWithIconComponent } from './title-with-icon.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        TitleWithIconComponent
    ],
    exports: [
        TitleWithIconComponent
    ]
})
export class TitleWithIconModule {}