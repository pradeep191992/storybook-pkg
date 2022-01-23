import { NgModule } from '@angular/core';
import { TestlibComponent } from './testlib.component';
import { BtnComponent } from './btn/btn.component';



@NgModule({
  declarations: [
    TestlibComponent,
    BtnComponent
  ],
  imports: [
  ],
  exports: [
    TestlibComponent
  ]
})
export class TestlibModule { }
