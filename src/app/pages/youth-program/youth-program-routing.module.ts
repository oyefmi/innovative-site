import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { YouthProgramComponent } from "./youth-program.component";

const routes: Routes = [
    { path: 'youth-program', component: YouthProgramComponent}
];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})

export class YouthProgramModuleComponent { }