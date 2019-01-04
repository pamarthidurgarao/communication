import { Component, OnInit, HostListener } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor() {}
  public innerHeight: any;
  ngOnInit() {
    this.innerHeight = window.innerHeight - 56;
  }

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.innerHeight = window.innerHeight - 56;
  }
}
