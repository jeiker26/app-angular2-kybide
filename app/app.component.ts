import { Component } from '@angular/core';
declare var $:any; // TODO: error type

@Component({
  selector: 'my-app',
  template: `    
    <nav>
      <div class="nav-wrapper">
        <a href="#!" class="brand-logo">App Angular2</a>
        <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
        <ul class="right hide-on-med-and-down">
          <li><a routerLink="/">Home</a></li>
          <li><a routerLink="/foo">Foo</a></li>
          <li><a routerLink="/bar">Bar</a></li>
          <li><a [routerLink]="['/band', 'the­rolling­stones']">The Rolling Stones</a></li>
          <li><a [routerLink]="['/band', 'the-beatles']">The Beatles</a></li>
          <li><a [routerLink]="['/band', 'queen']">Queen</a></li>
        </ul>
        <ul class="side-nav" id="mobile-demo">
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
export class AppComponent  {
  ngAfterViewInit(): void {
    $(".button-collapse").sideNav();
  }
}
