export class Heart {
  constructor(
    public status: boolean,
    private heart_full: string = "/assets/heart_full.png",
    private heart_none: string = "/assets/heart_none.png"
  ) { }

  public showHeart(): string {
    if (this.status) {
      return this.heart_full;
    }
    return this.heart_none;
  }
}
