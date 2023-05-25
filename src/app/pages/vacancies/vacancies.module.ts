import { NgModule } from "@angular/core";

import { VacanciesRoutingModule } from "./vacancies-routing.module";
import { VacanciesComponent } from "./vacancies.component";

@NgModule({
    imports: [VacanciesRoutingModule],
    declarations: [VacanciesComponent]
})

export class VacanciesModule { }