import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AdultProgramComponent } from "./adult-program.component";

const routes: Routes = [
    { path: '', component: AdultProgramComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})

export class AdultProgramRoutingModule { }