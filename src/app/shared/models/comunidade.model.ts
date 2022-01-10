import { IEstruturaComunidades } from '../interfaces/IEstruturaComunidades.interface';
import colaboradorModel from './colaborador.model';
import EstruturaFuncional from './estruturaFuncional.model';
import { ReleaseTrain } from './releaseTrain.model';
import { SquadTime } from './squadTime.model';
export class Comunidade implements IEstruturaComunidades {
  constructor(
    public tipoEstrutura: string,
    public codigoEstrutura: number,
    public nomeEstrutura: string,
    public imagemEstrutura: string,
    public nivelEstrutura: string,
    public lideresEstrutura: colaboradorModel[],
    public rtsFilhas: ReleaseTrain[],
    public squadTimesFilhos: SquadTime[],
    public estruturasFuncionais: EstruturaFuncional[]
  ) {}
}
