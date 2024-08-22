import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
  standalone: true,
})
export class ConvertPipe implements PipeTransform {
  transform(value: any, TargetValues: string): any {
    if (!value) {
      return '';
    }

    switch (TargetValues) {
      case 'km':
        return value * 1.60934;
      case 'm':
        return value * 1.60934 * 1000;

      default:
        throw new Error('target not supported');
    }
  }
}
