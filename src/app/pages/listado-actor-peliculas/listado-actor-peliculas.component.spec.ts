import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoActorPeliculasComponent } from './listado-actor-peliculas.component';

describe('ListadoActorPeliculasComponent', () => {
  let component: ListadoActorPeliculasComponent;
  let fixture: ComponentFixture<ListadoActorPeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoActorPeliculasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoActorPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
