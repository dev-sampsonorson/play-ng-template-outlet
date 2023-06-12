import { Component, EnvironmentInjector, Injector, inject, runInInjectionContext } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { ListComponent } from './list/list.component';
import { Action, TableComponent } from './table/table.component';
import { GlobalService } from './global.service';

type Employee = {
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'so-root',
  standalone: true,
  imports: [RouterOutlet, BasicComponent, ListComponent, TableComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  injector = inject(EnvironmentInjector);

  employees: Employee[] = [
    { firstName: 'Employee', lastName: '1' },
    { firstName: 'Employee', lastName: '2' },
    { firstName: 'Employee', lastName: '3' },
    { firstName: 'Employee', lastName: '4' },
    { firstName: 'Employee', lastName: '5' },
    { firstName: 'Employee', lastName: '6' },
  ];

  headers = {
    firstName: 'First Name',
    lastName: 'Last Name',
    actions: 'Actions'
  };

  actions: Action<Employee>[] = [
    {
      type: 'save',
      label: 'Save',
      invoke: (row: Employee, invokeInjector?: Injector) => {

        const _injector = invokeInjector && this.injector;
        _injector && runInInjectionContext(_injector, () => {
          const globalService = inject(GlobalService);

          globalService.announce();
          console.log('injecor => ', invokeInjector);
          console.log('row => ', row);
        });
      }
    }
  ]


}
