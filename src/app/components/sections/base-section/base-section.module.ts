import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseSectionComponent } from './base-section.component';
import { TitleWithIconModule } from '../../title-with-icon/title-with-icon.module';

@NgModule({
    imports: [
        CommonModule,
        TitleWithIconModule
    ],
    declarations: [
        BaseSectionComponent
    ],
    exports: [
        BaseSectionComponent
    ]
})
export class BaseSectionModule {}