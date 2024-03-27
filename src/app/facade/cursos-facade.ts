import {ApiService} from "../service/api.service";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Curso} from "../service/curso.model";
import {Grafico} from "../class/grafico";

@Injectable({providedIn: "root"})
export class CursosFacade {

  constructor(
    private apiService: ApiService,
    private grafico: Grafico
  ) { }

  getCourse(params: any): Observable<{ courses: Array<Curso>, barChart: any[] }> {
    return new Observable(observer => {
      let response: Array<Curso> = [];
      let barChartData: any[] = [];
      this.apiService.filterCourses(params).subscribe(
        data => {
          if (data) {
            response = data.sort(function(a, b){
              return +b.nota_corte - +a.nota_corte;
            });
            barChartData = this.grafico.graficoConfigs(response);
            observer.next({ courses: response, barChart: barChartData });
            observer.complete();
          }
        },
        error => {
          observer.error(error);
        }
      );
    });
  }

}
