import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>App Angular2</h1>
    <nav>
      <a routerLink="/">Home</a>
      <a routerLink="/foo">Foo</a>
      <a routerLink="/bar">Bar</a>
      <a [routerLink]="['/band', 'the­rolling­stones']">The Rolling Stones</a>
      <a [routerLink]="['/band', 'the-beatles']">The Beatles</a>
      <a [routerLink]="['/band', 'queen']">Queen</a>
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent  {}
