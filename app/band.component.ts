import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Title } from '@angular/platform-browser';

import { Band } from './band';
import { BandsService } from './bands.service';

@Component({
  moduleId: module.id,
  templateUrl: 'band.component.html'
  // styleUrls:
})

export class BandComponent implements OnInit {
  band: any; // TODO: show this error band: Band;

  constructor(
    private bandsService: BandsService,
    private route: ActivatedRoute,
    private location: Location,
    private titleService: Title
  ) {}

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.bandsService.getBand(params['slug']))
      .subscribe(band => this.band = band);


  }

  ngAfterViewChecked(): void {
    this.setTitle(this.band ? this.band.name : '');
  }

  goBack(): void {
    this.location.back();
  }
}
