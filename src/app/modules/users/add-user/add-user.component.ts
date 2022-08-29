import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import {
  numericValidator,
  stringValidatorRegex,
  textValidator,
} from "src/app/constants/globalfunctions";
import { UsersService } from "../users.service";

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.scss"],
})
export class AddUserComponent implements OnInit {
  public loading: boolean = false;
  public showAlert: boolean = false;
  public userInformationForm: FormGroup | any;
  public textValidator = textValidator;
  public numericValidator = numericValidator;

  constructor(private _usersService: UsersService) {}

  ngOnInit(): void {
    this.userInformationForm = new FormGroup({
      firstName: new FormControl("", [
        Validators.required,
        Validators.pattern(stringValidatorRegex),
      ]),
      lastName: new FormControl("", [
        Validators.required,
        Validators.pattern(stringValidatorRegex),
      ]),
      phone: new FormControl("", [
        Validators.required,
        Validators.maxLength(10),
        Validators.maxLength(10),
        Validators.pattern(stringValidatorRegex),
      ]),
      mobile: new FormControl("", [
        Validators.required,
        Validators.maxLength(10),
        Validators.maxLength(10),
        Validators.pattern(stringValidatorRegex),
      ]),
      address: new FormControl("", [
        Validators.required,
        Validators.pattern(stringValidatorRegex),
      ]),
      details: new FormControl("", [
        Validators.required,
        Validators.maxLength(20),
        Validators.pattern(stringValidatorRegex),
      ]),
    });
  }

  /**
   *
   * Submit user form
   * @param none
   * @returns object
   * @memberof AddUserComponent
   */
  submitHandler() {
    this._usersService.saveUser(this.userInformationForm.value);
    this.showAlert = true;
    this.userInformationForm.reset();
    setTimeout(() => {
      this.showAlert = false;
    }, 5000);
  }
}
