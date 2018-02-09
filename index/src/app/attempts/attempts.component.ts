import { Component, OnChanges, Input } from "@angular/core";
import { Heart } from "../shared/header.model";

@Component({
  selector: "app-attempts",
  templateUrl: "./attempts.component.html",
  styleUrls: ["./attempts.component.css"]
})
export class AttemptsComponent implements OnChanges {
  public hearts: Array<Heart> = [
    new Heart(true),
    new Heart(true),
    new Heart(true)
  ];

  @Input() private attemps: number;

  constructor() {}

  ngOnChanges() {
    if (this.attemps !== this.hearts.length) {
      let index = this.hearts.length - this.attemps - 1;
      this.hearts[index].status = false;
    }
  }
}
