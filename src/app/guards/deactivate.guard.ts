import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanDeactivateComponent {
  canExit: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class DeactivateGuard implements CanDeactivate<CanDeactivateComponent> {
  component: Object;
  route: ActivatedRouteSnapshot;

  constructor() {}

  canDeactivate(
    component: CanDeactivateComponent
  ): Observable<boolean> | Promise<boolean> | boolean {
    return component.canExit ? component.canExit() : true;
  }
}
