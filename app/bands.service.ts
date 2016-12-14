import { Band } from './band';
import { BANDS } from './mock-bands';
import { Injectable } from '@angular/core';

@Injectable()
export class BandsService {
  getBands(): Promise<Band[]> {
    return Promise.resolve(BANDS);
  }

  getBand(slug: string): Promise<Band[]> {
    return this.getBands()
      .then(bands => bands.find(band => band.slug === slug));
  }
}
