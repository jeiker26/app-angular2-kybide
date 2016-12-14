import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { FooComponent }  from './foo.component';
import { BandComponent }  from './band.component';

import { BandsService } from './bands.service';


@NgModule({
  imports:      [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'foo',
        component: FooComponent
      },
      {
        path: 'bar',
        component: FooComponent
      },
      {
        path: 'the­rolling­stones',
        component: BandComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    FooComponent,
    BandComponent
  ],
  providers: [ BandsService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
