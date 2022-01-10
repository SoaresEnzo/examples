export default class Alocacao {
  constructor(
    public codigoAlocacao: number,
    public tipoEstruturaPai = 'CO',
    public codigoEstruturaPai: number,
    public tipoEstruturaIntermediaria: string,
    public codigoEstruturaIntermediaria: number,
    public tipoEstruturaBasica: string,
    public codigoEstruturaBasica: number,
    public codigoPapel: string
  ) {}
}
