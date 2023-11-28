import { Component, OnInit } from '@angular/core';
import { CursoService } from '../curso.service';
import { Curso } from '../curso';


@Component({
  selector: 'app-curso-listar',
  templateUrl: './curso-listar.component.html',
  styleUrls: ['./curso-listar.component.css']
})
export class CursoListarComponent implements OnInit {

  cursos: Array<Curso> = [];
  cursosFiltrados: Array<Curso> = [];
  selected: boolean = false;
  selectedCurso!: Curso;

  constructor(private cursoService: CursoService) { }


  getCursos(): void {
    this.cursoService.getCursos().subscribe(apiData => {
      this.cursos = apiData;

      for (let i = 0; i < this.cursos.length; i++) {
        if (this.cursos[i].offers_certificate == true) {
          this.cursosFiltrados.push(this.cursos[i]);
        }
      }
    });
  }


  onSelected(curso: Curso): void {
    this.selected = true;
    this.selectedCurso = curso;
  }

  ngOnInit() {
    this.getCursos();
  }

}
