import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../guards/auth-guards.service";
import { ModulesComponent } from "./modules.component";

const routes: Routes = [
  {
    path: "",
    component: ModulesComponent,
    children: [
      {
        path: "cards",
        canActivate: [AuthGuard],
        loadChildren: () =>
          import("./cards/cards.module").then((m) => m.CardsModule),
      },
      {
        path: "users",
        canActivate: [AuthGuard],
        loadChildren: () =>
          import("./users/users.module").then((m) => m.UsersModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulesRoutingModule {}
