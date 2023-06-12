import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule, JsonPipe, NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'so-basic',
  standalone: true,
  imports: [NgIf, NgTemplateOutlet, JsonPipe],
  template: `
    <h3>No context data passed for "greeting" and "message"</h3>
    <div *ngIf="false; else myTemplate">Visible</div>
    <!--
      When an implicit data is not passed, the default is "false"

      When an explicit data is not passed, the default is "undefined"
    -->
    <ng-template #myTemplate let-greeting let-message="message">
      <div>Not Visible | Greeting: {{ greeting }} | Message: {{ message ?? 'undefined' }}</div>
    </ng-template>

    <h3>Context data passed for "greeting" and "message"</h3>
    <ng-container [ngTemplateOutlet]="myTemplate" [ngTemplateOutletContext]="{ $implicit: 'Hi', message: 'Sleep' }"></ng-container>
    <ng-container *ngTemplateOutlet="myTemplate; context: { $implicit: 'Hi', message: 'Sleep' }"></ng-container>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicComponent {

}
