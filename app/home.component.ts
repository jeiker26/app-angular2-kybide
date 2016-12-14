import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  template: `
    <div class="row">
      <div class="col s6">
        <div class="collection">
          <a class="collection-item" routerLink="/">Home</a>
          <a class="collection-item" routerLink="/foo">Foo</a>
          <a class="collection-item" routerLink="/bar">Bar</a>
          <a class="collection-item" [routerLink]="['/band', 'the­rolling­stones']">The Rolling Stones</a>
          <a class="collection-item" [routerLink]="['/band', 'the-beatles']">The Beatles</a>
          <a class="collection-item" [routerLink]="['/band', 'queen']">Queen</a>
         </div>
       </div>
     </div>`
})
export class HomeComponent  {
  constructor(
    private titleService: Title
  ) {}

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  ngOnInit(): void {
    this.setTitle('Angular Rocks');
  }
}
