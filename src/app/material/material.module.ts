import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// tslint:disable-next-line:max-line-length
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatRadioModule, MatSelectModule, MatSnackBarModule, MatDatepickerModule, MatDialogModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/';
import {MatRippleModule, MatNativeDateModule} from '@angular/material/core';
import { DialogOverview } from '../material-design/dialog';

@NgModule({
  declarations: [
    DialogOverview
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatCardModule,
    MatTooltipModule,
    MatRadioModule,
    MatSelectModule,
    MatSnackBarModule,
    MatRippleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule

  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatCardModule,
    MatTooltipModule,
    MatRadioModule,
    MatSelectModule,
    MatSnackBarModule,
    MatRippleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule
  ],
  entryComponents: [
    DialogOverview
]
})
export class MaterialModule { }
