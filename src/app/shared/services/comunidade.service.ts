import { Injectable } from '@angular/core';
import { Comunidade } from '../models/comunidade.model';

@Injectable({ providedIn: 'root' })
export class ComunidadeService {
  public comunidades: Comunidade[];

  constructor() {
    this.comunidades = [
      new Comunidade('CO', 1, 'Canais', null, 'P', [], [], [], []),
      new Comunidade('CO', 2, 'Pessoas', null, 'P', [], [], [], []),
    ];
  }

  getAllComunidades(): Comunidade[] {
    return this.comunidades;
  }
}
