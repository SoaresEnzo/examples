import Colaborador from '../models/colaborador.model';
export interface IEstruturaComunidades {
  tipoEstrutura: string;
  codigoEstrutura: number;
  nomeEstrutura: string;
  imagemEstrutura: string;
  nivelEstrutura: string;
  lideresEstrutura: Colaborador[];
}
