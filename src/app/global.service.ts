import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {

  announce() {
    console.log('Global Service');
  }
}
