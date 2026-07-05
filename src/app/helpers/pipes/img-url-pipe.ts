import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgUrl',
})
export class ImgUrlPipe implements PipeTransform {
  transform(value: string | undefined): string | undefined{
    if (!value) {
      return undefined;
    }
    console.log(`https://icherniakov.ru/yt-course/${value}`);
    return `https://icherniakov.ru/yt-course/${value}`;
  }
}
