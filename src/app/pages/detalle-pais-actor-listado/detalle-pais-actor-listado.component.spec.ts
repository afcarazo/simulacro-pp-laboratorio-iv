import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePaisActorListadoComponent } from './detalle-pais-actor-listado.component';

describe('DetallePaisActorListadoComponent', () => {
  let component: DetallePaisActorListadoComponent;
  let fixture: ComponentFixture<DetallePaisActorListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallePaisActorListadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallePaisActorListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
