import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { VacanciesComponent } from "./vacancies.component";

const routes: Routes = [
    { path: 'unit-vacancies', component: VacanciesComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})

export class VacanciesRoutingModule { }