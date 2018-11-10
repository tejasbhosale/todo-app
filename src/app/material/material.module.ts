import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatButtonModule, MatCheckboxModule, MatInputModule, MatGridListModule, MatTabsModule, MatMenuModule, MatToolbarModule, MatListModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [MatCardModule, MatButtonModule, MatCheckboxModule, MatInputModule, BrowserAnimationsModule, MatGridListModule, MatTabsModule, MatMenuModule, MatToolbarModule, MatListModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule],
  exports: [MatCardModule, MatButtonModule, MatCheckboxModule, MatInputModule, BrowserAnimationsModule, MatGridListModule, MatTabsModule, MatMenuModule, MatToolbarModule, MatListModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule],
})

export class MaterialModule { }
