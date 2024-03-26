import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  cursoNome!: string;
  estadosBrasileiros: { nome: string; sigla: string; }[] = [
    { nome: "Acre", sigla: "AC" },
    { nome: "Alagoas", sigla: "AL" },
    { nome: "Amapá", sigla: "AP" },
    { nome: "Amazonas", sigla: "AM" },
    { nome: "Bahia", sigla: "BA" },
    { nome: "Ceará", sigla: "CE" },
    { nome: "Distrito Federal", sigla: "DF" },
    { nome: "Espírito Santo", sigla: "ES" },
    { nome: "Goiás", sigla: "GO" },
    { nome: "Maranhão", sigla: "MA" },
    { nome: "Mato Grosso", sigla: "MT" },
    { nome: "Mato Grosso do Sul", sigla: "MS" },
    { nome: "Minas Gerais", sigla: "MG" },
    { nome: "Pará", sigla: "PA" },
    { nome: "Paraíba", sigla: "PB" },
    { nome: "Paraná", sigla: "PR" },
    { nome: "Pernambuco", sigla: "PE" },
    { nome: "Piauí", sigla: "PI" },
    { nome: "Rio de Janeiro", sigla: "RJ" },
    { nome: "Rio Grande do Norte", sigla: "RN" },
    { nome: "Rio Grande do Sul", sigla: "RS" },
    { nome: "Rondônia", sigla: "RO" },
    { nome: "Roraima", sigla: "RR" },
    { nome: "Santa Catarina", sigla: "SC" },
    { nome: "São Paulo", sigla: "SP" },
    { nome: "Sergipe", sigla: "SE" },
    { nome: "Tocantins", sigla: "TO" }
  ];
  meuForm: FormGroup;

  constructor(
    public router: Router,
    private formBuilder: FormBuilder,
  ) {
    this.meuForm = this.formBuilder.group({
      notaCorte: ['', Validators.required], // Campo obrigatório
      turno: [''],
      uf: ['']
    });
  }

  onSubmit() {
    if (this.meuForm.valid) {
      const queryParams = {
        notaCorte: this.meuForm.value.notaCorte,
        turno: this.meuForm.value.turno,
        uf: this.meuForm.value.uf
      };
      !queryParams.turno && delete queryParams.turno
      !queryParams.uf && delete queryParams.uf
      this.router.navigate(['/tabela-curso/'], {queryParams})
    } else {
      console.error('Formulário inválido. Por favor, preencha todos os campos obrigatórios.');
    }
  }


}
