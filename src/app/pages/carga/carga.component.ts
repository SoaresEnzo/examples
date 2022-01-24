import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css'],
})
export class CargaComponent implements OnInit {
  constructor() {}
  progress = 0;
  form = new FormGroup({
    file: new FormControl(),
  });
  ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        this.progress = this.progress + 10;
      }, 1000);
    }
  }

  debug(e: KeyboardEvent, input: HTMLInputElement) {
    console.log(e);
    console.log(input);
    if (e.code === 'Enter' || e.code === 'Space') {
      e.preventDefault();
      input.click();
    }
  }
}
