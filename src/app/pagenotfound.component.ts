import { Component, Input } from '@angular/core';

@Component({
  selector: 'pagenotfoud-app',
  template: `<h3>Sorry!! Invalid URL</h3>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class PageNotFoundComponent  {
  @Input() name: string;
}
