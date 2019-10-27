import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: Array<any>, field?: string, asc?: boolean): Array<any> {
    return array.sort((a, b) => {
      const fields = field.split(';').length > 1 ? field.split(';') : [field];
      fields.forEach(item => {
        a = a[item];
        b = b[item];
      });
      if (a < b) {
        return asc ? -1 : 1;
      }
      if (a > b) {
        return asc ? 1 : -1;
      }
      return 0;
    });
  }

}
