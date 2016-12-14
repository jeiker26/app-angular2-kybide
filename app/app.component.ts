import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/">Home</a>
      <a routerLink="/foo">Foo</a>
      <a routerLink="/bar">Bar</a>
      <a routerLink="/the­rolling­stones">The Rolling Stones</a>
      <a routerLink="/the-beatles">The Beatles</a>
      <a routerLink="/queen">Queen</a>
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent  { title = 'Home'; }
