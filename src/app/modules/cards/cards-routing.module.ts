import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CardsListComponent } from "./cards-list/cards-list.component";

const routes: Routes = [
  {
    path: "",
    component: CardsListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardsRoutingModule {}
