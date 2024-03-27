import {Component} from '@angular/core';
import {Color, ScaleType} from "@swimlane/ngx-charts";
import {ActivatedRoute} from "@angular/router";
import {Curso} from "../../service/curso.model";
import {CursosFacade} from "../../facade/cursos-facade";

@Component({
  selector: 'app-tabela-cursos',
  templateUrl: './tabela-cursos.component.html',
  styleUrls: ['./tabela-cursos.component.scss']
})
export class TabelaCursosComponent {

  cursos: Curso[] = [];
  barChartData: { name: string, value: number }[] = [];

  constructor(
    public cursosFacade: CursosFacade,
    private route: ActivatedRoute
  ) {
    this.cursosFacade.getCourse(this.route.snapshot.queryParams).subscribe(i => {
      this.barChartData = i.barChart.slice(0,10);
      this.cursos = i.courses.slice(0,10)
    })
  }

  displayedColumns: string[] = ['codigo_curso', 'nome_curso', 'nome_campus', 'nota_corte', 'mod_concorrencia', 'id_concorrencia', 'turno'];
  colorSets: Color =
    {
      name: 'Vibrant',
      selectable: true,
      group: ScaleType.Time,
      domain: ['#77DD22', '#AA3399', '#FF00FF', '#BB1100', '#CC9900', '#FF8833', '#55CC22', '#CC5544', '#33BB77', '#11AAFF']
    }


}
