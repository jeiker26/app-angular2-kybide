import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  template: `<h1>Pagina en construccion</h1>`
})
export class FooComponent  {
  constructor(
    private titleService: Title
  ) {}

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  ngOnInit(): void {
    this.setTitle('Pagina en construccion');
  }
}
