import { Component, input, computed } from '@angular/core';

@Component({
  selector: 'svg[icon]',
  imports: [],
  template: ` <svg:use [attr.href]="href()"></svg:use> `,
  styles: '',
})
export class SvgIcon {
  icon = input<string>();
  href = computed(() => `/assets/svg/${this.icon()}.svg`);
}
