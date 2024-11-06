import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaPedidoSucessoComponent } from './tela-pedido-sucesso.component';

describe('TelaPedidoSucessoComponent', () => {
  let component: TelaPedidoSucessoComponent;
  let fixture: ComponentFixture<TelaPedidoSucessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaPedidoSucessoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaPedidoSucessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
