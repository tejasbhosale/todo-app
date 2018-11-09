import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatGridListModule, MatTabsModule, MatMenuModule, MatToolbarModule, MatStepperModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatInputModule, BrowserAnimationsModule, MatGridListModule, MatTabsModule, MatMenuModule, MatToolbarModule, MatStepperModule],
  exports: [MatButtonModule, MatCheckboxModule, MatInputModule, BrowserAnimationsModule, MatGridListModule, MatTabsModule, MatMenuModule, MatToolbarModule, MatStepperModule],
})

export class MaterialModule { }
