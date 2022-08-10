import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu'
import {MatButtonModule} from '@angular/material/button'
import {MatCardModule} from '@angular/material/card'
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon'

const MaterialComponets=[
  MatMenuModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatIconModule
]

@NgModule({
  imports: [MaterialComponets],
  exports:[MaterialComponets]
})
export class MaterialModule { }
