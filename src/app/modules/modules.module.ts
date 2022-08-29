import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { ModulesComponent } from './modules.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from '../guards/auth-guards.service';
import { AuthService } from './authentication/authentication.service';


@NgModule({
  declarations: [
    ModulesComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    NgbModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard, AuthService]
})
export class ModulesModule { }
