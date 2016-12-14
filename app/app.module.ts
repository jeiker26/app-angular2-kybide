import { NgModule }      from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { FooComponent }  from './foo.component';
import { BandComponent }  from './band.component';

import { BandsService } from './bands.service';

const routes: Routes = [
  {
    path: 'foo',
    component: FooComponent
  },
  {
    path: 'bar',
    component: FooComponent
  },
  {
    path: 'band/:slug',
    component: BandComponent
  }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    FooComponent,
    BandComponent
  ],
  providers: [
    BandsService,
    Title
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
