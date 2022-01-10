import { IEstruturaComunidades } from '../interfaces/IEstruturaComunidades.interface';
import colaboradorModel from './colaborador.model';
export class ReleaseTrain implements IEstruturaComunidades {
  constructor(
    public tipoEstrutura: string,
    public codigoEstrutura: number,
    public nomeEstrutura: string,
    public imagemEstrutura: string,
    public nivelEstrutura: string,
    public lideresEstrutura: colaboradorModel[],
    public tipoEstruturaPai: string,
    public codigoEstruturaPai: number,
    public estruturasFilhas: IEstruturaComunidades[]
  ) {}
}
