export interface Curso {
  id_concorrencia: number;
  etapa: number;
  ds_etapa: string;
  tp_cota?: any;
  tipo_mod_concorrencia: string;
  mod_concorrencia: string;
  qt_vagas_concorrencia: number;
  nota_corte: string;
  codigo_curso: number;
  codigo_campus: number;
  nome_curso: string;
  grau: string;
  turno: string;
  ds_periodicidade: string;
  campus: Campus;
}

export interface Campus {
  nome_campus: string;
}
