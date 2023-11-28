import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoComponent } from './curso.component';
import { CursoDetailComponent } from './curso-detail/curso-detail.component';
import { CursoListarComponent } from './curso-listar/curso-listar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [CursoComponent, CursoDetailComponent, CursoListarComponent],
  exports: [CursoComponent, CursoDetailComponent, CursoListarComponent]
})
export class CursoModule { }
