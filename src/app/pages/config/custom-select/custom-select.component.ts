import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { last, map, startWith } from 'rxjs/operators';

export interface DatalistOption {
  name: string;
  id: number;
}

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.css'],
})
export class CustomSelectComponent implements OnInit {
  myControl = new FormControl();
  @Input()
  placeholder = '';
  @Input()
  ariaLabel = '';
  @Input()
  type = 'text';
  @Input()
  options: DatalistOption[];
  @Output()
  selectedValue = new EventEmitter();
  @Output()
  toRefreshOptions = new EventEmitter();
  filteredOptions: Observable<DatalistOption[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => (typeof value === 'string' ? value : value.name)),
      map((name) => (name ? this._filter(name) : this.options.slice()))
    );
  }

  displayFn(user: DatalistOption): string {
    return user && user.name ? user.name : '';
  }

  selectValue() {
    this.selectedValue.emit(this.myControl.value);
  }

  refreshOptions() {
    this.toRefreshOptions.emit(this.myControl.value);
  }

  private _filter(name: string): DatalistOption[] {
    const filterValue = name.toLowerCase();
    return this.options.filter((option) =>
      option.name.toLowerCase().includes(filterValue)
    );
  }
}
