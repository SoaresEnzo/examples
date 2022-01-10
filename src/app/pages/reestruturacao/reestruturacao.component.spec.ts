import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReestruturacaoComponent } from './reestruturacao.component';

describe('ReestruturacaoComponent', () => {
  let component: ReestruturacaoComponent;
  let fixture: ComponentFixture<ReestruturacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReestruturacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReestruturacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
