import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AdultProgramComponent } from "./adult-program.component";

const routes: Routes = [
    { path: 'adult-program', component: AdultProgramComponent }
]

@NgModule ({
    imports: [[RouterModule.forRoot(routes)]],
    exports: [RouterModule],
    providers: []
})

export class AdultProgramRoutingModule { }