import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NbInputModule, NbButtonModule } from '@nebular/theme';

@NgModule({
  imports: [CommonModule, FormsModule, NbInputModule, NbButtonModule],
  declarations: [CheckoutComponent],
  exports: [CheckoutComponent],
})
export class CheckoutModule {}
