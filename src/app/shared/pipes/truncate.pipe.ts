import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  // Needs white-space: pre to fill spaces.
  transform(value: string, limit = 25, completeWords = false, ellipsis = '...') {
    let gap = value.length - limit;
    let res = '';
    if (gap < 0) {
      res = value + ' '.repeat(-gap);
    } else if (gap > 0) {
      if (completeWords) {
        limit = value.substr(0, limit).lastIndexOf(' ');
      }
      res = `${value.substr(0, limit)}${ellipsis}`;
    } else {
      res = value;
    }
    return res;
  }
}
