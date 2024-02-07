import { Component, TemplateRef } from '@angular/core';
import { NgbOffcanvas, NgbOffcanvasConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
    isMenuCollapsed = true;

    constructor(
      config: NgbOffcanvasConfig,
      private offcanvasService: NgbOffcanvas,
    ) {
      config.position = 'end';
      // config.backdropClass = 'bg-primary';
      config.keyboard = false;
    }
  
    open(content: TemplateRef<any>) {
      this.offcanvasService.open(content);
    }
}