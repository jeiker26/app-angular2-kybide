import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `    
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo"> App Angular2</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a routerLink="/">Home</a></li>
          <li><a routerLink="/foo">Foo</a></li>
          <li><a routerLink="/bar">Bar</a></li>
          <li><a [routerLink]="['/band', 'the­rolling­stones']">The Rolling Stones</a></li>
          <li><a [routerLink]="['/band', 'the-beatles']">The Beatles</a></li>
          <li><a [routerLink]="['/band', 'queen']">Queen</a></li>
        </ul>
      </div>
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent  {}
