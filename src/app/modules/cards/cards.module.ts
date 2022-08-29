import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardsListComponent } from "./cards-list/cards-list.component";
import { FormsModule } from "@angular/forms";
import { CardsRoutingModule } from "./cards-routing.module";

@NgModule({
  declarations: [CardsListComponent],
  imports: [CommonModule, FormsModule, CardsRoutingModule],
})
export class CardsModule {}
