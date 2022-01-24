import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import Recursao from '../../../shared/models/recursao.model';

@Component({
  selector: 'app-recursive-component',
  templateUrl: './recursive-component.component.html',
  styleUrls: ['./recursive-component.component.css'],
})
export class RecursiveComponent implements OnInit {
  collapsing = true;
  @Input()
  recursivo: Recursao;
  @Input()
  content: TemplateRef<any>;

  ngOnInit(): void {}
}
