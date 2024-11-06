import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaPedidosComponent } from './tela-pedidos.component';

describe('TelaPedidosComponent', () => {
  let component: TelaPedidosComponent;
  let fixture: ComponentFixture<TelaPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaPedidosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
