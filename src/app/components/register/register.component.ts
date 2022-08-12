import { Component } from '@angular/core';
import { CanDeactivateComponent } from '../../guards/deactivate.guard';

@Component({
  template: `<h1>Register User</h1>
          <p>Please save your changes, before leaving the current page!</p>`,
})
export class RegisterComponent implements CanDeactivateComponent {
  //Check if there any unsaved data etc. If yes then as for confirmation
  canExit(): boolean {
    if (
      confirm(
        'you have some unsaved changes, do you wish to proceed without them?'
      )
    ) {
      return true;
    } else {
      return false;
    }
  }
}
