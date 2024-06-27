import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'ib-index-build-entry',
  template: `<ib-nx-welcome></ib-nx-welcome>`,
})
export class RemoteEntryComponent {}
