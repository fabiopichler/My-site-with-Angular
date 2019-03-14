import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SidebarComponent } from "./sidebar.component";
import { LoremIpsumSectionModule } from "../sections/lorem-ipsum-section/lorem-ipsum-section.module";
import { SocialSectionModule } from "../sections/social-section/social-section.module";
import { AboutSectionModule } from '../sections/about-section/about-section.module';

@NgModule({
    imports: [
        CommonModule,
        LoremIpsumSectionModule,
        SocialSectionModule,
        AboutSectionModule
    ],
    declarations: [
        SidebarComponent
    ],
    exports: [
        SidebarComponent
    ]
})
export class SidebarModule {}