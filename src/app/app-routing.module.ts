import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {TabelaCursosComponent} from "./pages/tabela-cursos/tabela-cursos.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'buscar-curso',
    pathMatch: 'full'
  },
  {
    path: 'busca-curso',
    component: HomeComponent
  },
  {
    path: 'tabela-curso',
    component: TabelaCursosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
