import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaEditarPedidoComponent } from './tela-editar-pedido.component';

describe('TelaEditarPedidoComponent', () => {
  let component: TelaEditarPedidoComponent;
  let fixture: ComponentFixture<TelaEditarPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaEditarPedidoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaEditarPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
