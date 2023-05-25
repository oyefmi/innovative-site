import { NgModule } from "@angular/core";

import { HomepageRoutingModule } from "./homepage-routing.module";
import { LinkboxComponent } from "./linkbox/linkbox.component";

@NgModule ({
    imports: [
        HomepageRoutingModule
    ],
    declarations: [
        LinkboxComponent
    ]
})

export class HomepageModule { }