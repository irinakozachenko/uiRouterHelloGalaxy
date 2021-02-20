import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private debugUiView = false;
  private debugUiSref = false;
  get debugClasses() {
    const debugViewClass = this.debugUiView ? 'debug-ui-view' : '';
    const debugSrefClass = this.debugUiSref ? 'debug-ui-sref' : '';
    return `${debugViewClass} ${debugSrefClass}`;
  }
}
