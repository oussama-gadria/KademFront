import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignantFormAddComponent } from './enseignant-form-add.component';

describe('EnseignantFormAddComponent', () => {
  let component: EnseignantFormAddComponent;
  let fixture: ComponentFixture<EnseignantFormAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnseignantFormAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnseignantFormAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
