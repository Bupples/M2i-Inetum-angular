import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TxtPageComponent } from './txt-page/txt-page.component';
import { TxtBandeauComponent } from './txt-bandeau/txt-bandeau.component';
import { TxtDialogWarningComponent } from './txt-dialog-warning/txt-dialog-warning.component';
import { TxtDialogErrorComponent } from './txt-dialog-error/txt-dialog-error.component';
import { TxtDialogSuccessComponent } from './txt-dialog-success/txt-dialog-success.component';



@NgModule({
  declarations: [TxtPageComponent, TxtBandeauComponent, TxtDialogWarningComponent, TxtDialogErrorComponent, TxtDialogSuccessComponent],
  imports: [
    CommonModule
  ],
  exports: [TxtPageComponent, TxtBandeauComponent, TxtDialogWarningComponent, TxtDialogErrorComponent, TxtDialogSuccessComponent]
})
export class TextsModule { }
