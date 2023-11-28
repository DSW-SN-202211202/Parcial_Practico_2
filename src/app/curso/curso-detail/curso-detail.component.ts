import { Component, Input, OnInit } from '@angular/core';
import { Curso } from '../curso';
import { CursoService } from '../curso.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curso-detail',
  templateUrl: './curso-detail.component.html',
  styleUrls: ['./curso-detail.component.css']
})
export class CursoDetailComponent implements OnInit {


  cursoId!: string;
  @Input() cursoDetail!: Curso;

  constructor(private route: ActivatedRoute,
    private cursoService: CursoService) { }

    getCurso(){
      this.cursoService.getCurso(this.cursoId).subscribe(apiData => {
        this.cursoDetail = apiData;
      })
    }

  ngOnInit() {
    if(this.cursoDetail === undefined){
      this.cursoId = this.route.snapshot.paramMap.get('id')!
      if(this.cursoId){
        this.getCurso();
      }
    }
  }
  }
