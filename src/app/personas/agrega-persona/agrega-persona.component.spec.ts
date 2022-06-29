import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregaPersonaComponent } from './agrega-persona.component';

describe('AgregaPersonaComponent', () => {
  let component: AgregaPersonaComponent;
  let fixture: ComponentFixture<AgregaPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregaPersonaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregaPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
