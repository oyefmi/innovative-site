import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CDSComponent } from "./cds.component";

const routes: Routes = [
    { path: '', component: CDSComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})

export class CDSRoutingModule { }