import { Component } from '@angular/core';
import { ProductListComponent } from './products/product-list.component';
@Component({
  selector: 'pm-root',
  template: `
  <div>
    <h1>{{pageTitle}}</h1>
    <pm-products></pm-products>
  </div>`,
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  pageTitle: string = 'Acme Product Management';
}
