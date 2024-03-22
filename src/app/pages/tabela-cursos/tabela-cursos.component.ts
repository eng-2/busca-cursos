import {Component} from '@angular/core';
import {Color, ScaleType} from "@swimlane/ngx-charts";


const ELEMENT_DATA: any[] = [
  {estado: 'SP', curso: 'Direito', turno: 'Noturno', nota: 782.12},
  {estado: 'RJ', curso: 'Matemática', turno: 'Noturno', nota: 870.12},
  {estado: 'SE', curso: 'Sistemas de informação', turno: 'Matutino', nota: 650.12},
  {estado: 'SP', curso: 'Eng Civil',  turno: 'Vespertino', nota: 723.12},
];

@Component({
  selector: 'app-tabela-cursos',
  templateUrl: './tabela-cursos.component.html',
  styleUrls: ['./tabela-cursos.component.scss']
})
export class TabelaCursosComponent{
  displayedColumns: string[] = ['estado', 'curso', 'turno', 'nota'];
  dataSource = ELEMENT_DATA;
  barChartData = this.dataSource.map(item => ({ name: item.curso, value: item.nota }));
  colorSets: Color =
    {
      name: 'Vibrant',
      selectable: true,
      group: ScaleType.Time,
      domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    }
}
