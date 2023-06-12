import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { YouthProgramComponent } from "./youth-program.component";

const routes: Routes = [
    { path: '', component: YouthProgramComponent}
];

@NgModule ({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})

export class YouthProgramModuleComponent { }