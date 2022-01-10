import { Component, OnInit } from '@angular/core';
import { ComunidadeService } from '../../shared/services/comunidade.service';
import { Comunidade } from '../../shared/models/comunidade.model';

@Component({
  selector: 'app-reestruturacao',
  templateUrl: './reestruturacao.component.html',
  styleUrls: ['./reestruturacao.component.css'],
})
export class ReestruturacaoComponent implements OnInit {
  collapsing = true;
  comunidades: Comunidade[];
  constructor(comunidadeService: ComunidadeService) {
    this.comunidades = comunidadeService.getAllComunidades();
  }

  ngOnInit(): void {}
}
