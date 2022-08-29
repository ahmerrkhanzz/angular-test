import { Component, OnInit } from "@angular/core";

@Component({
  selector: "jni-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  public navOptions = [
    {
      title: "Cards List",
      route: "cards",
      isActive: false,
    },
    {
      title: "Form",
      route: "users",
      isActive: false,
    },
  ];
  constructor() {}

  ngOnInit(): void {
    this.navOptions.forEach((e: any) => {
      if (window.location.href.includes(e.route)) {
        e.isActive = true;
      }
    });
  }

  activeHandler(item: any) {
    this.navOptions.forEach((e: any) => {
      if (item.route === e.route) {
        e.isActive = true;
      } else {
        e.isActive = false;
      }
    });
  }
}
