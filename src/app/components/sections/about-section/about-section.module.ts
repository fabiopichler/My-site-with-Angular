import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutSectionComponent } from './about-section.component';
import { BaseSectionModule } from '../base-section/base-section.module';

@NgModule({
    imports: [
        CommonModule,
        BaseSectionModule
    ],
    declarations: [
        AboutSectionComponent
    ],
    exports: [
        AboutSectionComponent
    ]
})
export class AboutSectionModule {}
