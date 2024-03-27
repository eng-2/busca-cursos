import {Injectable} from "@angular/core";
import {Curso} from "../service/curso.model";

@Injectable({providedIn: "root"})
export class Grafico {

  public graficoConfigs(cursos: Curso[]): Array<any>{
    return cursos.map(item => ({ name: `${item.nome_curso + ' ' + item.id_concorrencia}`, value: +item.nota_corte }));
  }

}
