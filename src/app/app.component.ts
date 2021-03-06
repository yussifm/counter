
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'counter';
  counter = 0;

  increase(): number {
    return this.counter++;
}
  decrease(): number{
    return this.counter--;
  }

  reset(): number {
    return this.counter = 0;
  }

}
