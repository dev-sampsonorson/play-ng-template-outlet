import { ChangeDetectionStrategy, Component, Input, TemplateRef } from '@angular/core';
import { CommonModule, NgFor, NgTemplateOutlet } from '@angular/common';

type Option = {
  value: string;
  label: string;
}

@Component({
  selector: 'so-list',
  standalone: true,
  imports: [NgTemplateOutlet, NgFor],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  options: Option[] = [
    { value: '1', label: 'Label 1' },
    { value: '2', label: 'Label 2' },
    { value: '3', label: 'Label 3' },
  ];

  @Input({ required: false }) optionTemplate: TemplateRef<any> | null = null;
}
