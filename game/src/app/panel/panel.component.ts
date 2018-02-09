import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Phrase } from "../shared/phrase.model";
import { PHRASES } from "./phrase-mock";

@Component({
  selector: "app-panel",
  templateUrl: "./panel.component.html",
  styleUrls: ["./panel.component.css"]
})
export class PanelComponent implements OnInit {
  public instruction: String = "Translate this phrase:";
  public phrases: Phrase[] = PHRASES;
  private answer: String = "";
  private round: number = 0;
  private roundPhrase: Phrase;

  private progress: number = 0;
  private attemps: number = 3;

  @Output() private endGame: EventEmitter<boolean> = new EventEmitter();

  constructor() {
    this.updateRound();
  }

  ngOnInit() {}

  public updateAnswers(answer: Event): void {
    this.answer = (<HTMLInputElement>answer.target).value;
  }

  public updateRound() {
    this.roundPhrase = this.phrases[this.round];

    this.answer = "";
  }

  public compareAnswers(): void {
    if (this.roundPhrase.ptBr == this.answer) {
      console.log("Answer correct =)");

      this.progress += 100 / this.phrases.length;
      this.round++;

      if (this.round == this.phrases.length) {
        this.endGame.emit(true);
      }
      this.updateRound();
    } else {
      this.attemps--;

      if (this.attemps == -1) {
        this.endGame.emit(false);
      }
    }
  }
}
