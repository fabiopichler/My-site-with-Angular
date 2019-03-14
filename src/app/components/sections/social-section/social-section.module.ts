import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BaseSectionModule } from "../base-section/base-section.module";
import { SocialSectionComponent } from "./social-section.component";

@NgModule({
    imports: [
        CommonModule,
        BaseSectionModule
    ],
    declarations: [
        SocialSectionComponent
    ],
    exports: [
        SocialSectionComponent
    ]
})
export class SocialSectionModule {}