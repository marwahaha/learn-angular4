import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
  name: "abbreviateDescription"
})
export class AbbreviateDescription implements PipeTransform {
  transform(value: string, len: number = 15): string {
    if (value.length >= len) {
      return value.substr(0, len) + "...";
    }
    return value;
  }
}
