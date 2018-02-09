export class Heart {
  constructor(
    public status: boolean,
    private heart_full: String = "/assets/heart_full.png",
    private heart_none: String = "/assets/heart_none.png"
  ) {}

  public showHeart(): String {
    if (this.status) {
      return this.heart_full;
    }
    return this.heart_none;
  }
}
