import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  template: `
    <div class="valign-wrapper">
      <h1 class="valign center">Página en construcción</h1>
    </div>`
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
