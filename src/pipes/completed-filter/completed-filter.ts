import { Pipe, PipeTransform } from "@angular/core";
import { Lista } from "../../models/index";
/**
 * Generated class for the CompletedFilterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: "completedFilter",
  pure: false
})
export class CompletedFilterPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(listas: Lista[], completada: boolean) {
    return listas.filter(c => c.terminada == completada);
  }
}
