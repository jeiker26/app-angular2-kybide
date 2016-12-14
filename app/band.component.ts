import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Band } from './band';
import { BandsService } from './bands.service';

@Component({
  template: `
    <h1>Band {{band?.name}}</h1>
  `,
  // styleUrls:
})

export class BandComponent implements OnInit {
  band: Band;
  hello: "band";

  constructor(
    private bandsService: BandsService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    let slug = this.route.snapshot.params['slug'];
    this.route.params
      .switchMap((params: Params) => this.bandsService.getBand(params['slug']))
      .subscribe(band => this.band = band);
    console.log(this.band);
  }

  goBack(): void {
    this.location.back();
  }
}
