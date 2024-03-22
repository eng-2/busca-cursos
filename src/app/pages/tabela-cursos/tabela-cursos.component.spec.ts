import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaCursosComponent } from './tabela-cursos.component';

describe('TabelaCursosComponent', () => {
  let component: TabelaCursosComponent;
  let fixture: ComponentFixture<TabelaCursosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabelaCursosComponent]
    });
    fixture = TestBed.createComponent(TabelaCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
