import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BasicComponent } from './basic/basic.component';

@Component({
  selector: 'so-root',
  standalone: true,
  imports: [RouterOutlet, BasicComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'play-ng-template-outlet';
}
