import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Title } from '@angular/platform-browser';
import {DomSanitizer} from "@angular/platform-browser";

import { Band } from './band';
import { BandsService } from './bands.service';

@Component({
  moduleId: module.id,
  templateUrl: 'band.component.html'
  // styleUrls:
})

export class BandComponent implements OnInit {
  band: any; // TODO: show this error band: Band;
  videoURL;

  constructor(
    private bandsService: BandsService,
    private route: ActivatedRoute,
    private location: Location,
    private titleService: Title,
    private domSanitizer : DomSanitizer
  ) {}

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.bandsService.getBand(params['slug']))
      .subscribe(band => {
        debugger;
        this.band = band;
        this.videoURL = this.domSanitizer.bypassSecurityTrustResourceUrl(band.video);
        this.setTitle(this.band.pageTitle);
      });

  }

  goBack(): void {
    this.location.back();
  }
}
