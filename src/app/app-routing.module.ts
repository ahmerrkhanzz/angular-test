import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./modules/authentication/login/login.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./modules/authentication/authentication.module").then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: "",
    loadChildren: () =>
      import("./modules/modules.module").then((m) => m.ModulesModule),
  },
  {
    path: "not-found",
    component: NotFoundComponent,
  },
  { path: "**", redirectTo: "not-found" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
