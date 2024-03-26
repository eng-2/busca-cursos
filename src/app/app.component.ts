import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'busca-cursos';

  constructor(public router: Router) {
  }

  backPage(){
    this.router.navigate(['/busca-curso'],)
  }

}
