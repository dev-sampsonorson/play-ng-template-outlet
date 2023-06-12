import { JsonPipe, KeyValuePipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Injector, Input, Output, inject } from '@angular/core';
import { GlobalService } from '../global.service';

export type Action<TRow> = {
  type: 'save' | 'update' | 'delete';
  label: string;
  invoke: (row: TRow, injector?: Injector) => void;
}

export type Header<TRow> = {
  [T in (keyof TRow | 'actions')]?: string;
}

export type HiddenColumn<TRow extends Record<string, string>> = (keyof TRow)[]

@Component({
selector: 'so-table',
  standalone: true,
  imports: [NgIf, NgFor, KeyValuePipe, JsonPipe],
  // providers: [GlobalService],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent<TRow extends Record<string, string>> {

  injector = inject(Injector);

  @Input({ required: true }) data: TRow[] = [];
  @Input({ required: false }) headers: Header<TRow> = {};
  @Input({ required: false }) hiddenColums: HiddenColumn<TRow> = [];
  @Input({ required: false }) actions: Action<TRow>[] = [];

  @Output() actionClicked = new EventEmitter<Action<TRow>>();

  onActionClick(action: Action<TRow>, row: TRow) {
    action.invoke(row, this.injector);
    this.actionClicked.emit(action);
  }

  withData = () => this.data.length !== 0;
  withHeaders = () => Object.keys(this.headers).length !== 0;
  isCellVisible = (key: unknown) => !this.hiddenColums
    .includes((<string>key));
}
