import {Component} from '@angular/core';
import {Color, ScaleType} from "@swimlane/ngx-charts";
import {ApiService} from "../../service/api.service";
import {ActivatedRoute} from "@angular/router";
import {Curso} from "../../service/curso.model";

@Component({
  selector: 'app-tabela-cursos',
  templateUrl: './tabela-cursos.component.html',
  styleUrls: ['./tabela-cursos.component.scss']
})
export class TabelaCursosComponent {

  cursos: Curso[] = [];
  barChartData: any[] = [];

  constructor(
    public api: ApiService,
    private route: ActivatedRoute
  ) {
    this.api.filterCourses(this.route.snapshot.queryParams).subscribe(i => {
      const response = i.sort(function(a, b){
        return +b.nota_corte - +a.nota_corte;
      }).slice(0,10)

      console.log(response)
      this.barChartData = response.map(item => ({ name: `${item.nome_curso + ' ' + item.id_concorrencia}`, value: +item.nota_corte }));
      this.cursos = response
    })
  }

  displayedColumns: string[] = ['codigo_curso', 'nome_curso', 'nome_campus', 'nota_corte', 'mod_concorrencia', 'id_concorrencia', 'turno'];
  colorSets: Color =
    {
      name: 'Vibrant',
      selectable: true,
      group: ScaleType.Time,
      domain: ['#CC5544', '#77DD22', '#BB1100', '#CC9900', '#33BB77', '#AA3399', '#11AAFF', '#FF8833', '#55CC22', '#FF00FF']
    }


}
