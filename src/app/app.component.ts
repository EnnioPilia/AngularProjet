import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ChildComponent} from './../app/child/child.component'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mon titre';
}
