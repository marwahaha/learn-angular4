import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  private statusGame: boolean = true;
  private message: string = "You lost!";

  public endGame(status: boolean): void {
    this.statusGame = false;

    if (status) {
      this.message = "You win!";
    }

    console.log("End Game!");
  }

  public newGame(): void {
    this.statusGame = true;
  }
}
