import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoremIpsumSectionComponent } from "./lorem-ipsum-section.component";
import { BaseSectionModule } from "../base-section/base-section.module";

@NgModule({
    imports: [
        CommonModule,
        BaseSectionModule
    ],
    declarations: [
        LoremIpsumSectionComponent
    ],
    exports: [
        LoremIpsumSectionComponent
    ]
})
export class LoremIpsumSectionModule {}