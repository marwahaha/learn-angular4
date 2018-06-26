export class ItemCart {
  constructor(
    public id: number,
    public image: object,
    public title: string,
    public description: string,
    public value: number,
    public quantity: number
  ) {}
}
