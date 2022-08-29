import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthenticationRoutingModule } from "./authentication.-routing.module";
import { AuthService } from "./authentication.service";

@NgModule({
  declarations: [LoginComponent],
  providers: [AuthService],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule,
  ],
})
export class AuthenticationModule {}
