import { Component } from '@angular/core';
import { SEOService } from './seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'as2tec';
  constructor(private meta: SEOService) {
    this.meta.updateTitle();
  }
}
