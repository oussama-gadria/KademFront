import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignantFormUpdateComponent } from './enseignant-form-update.component';

describe('EnseignantFormUpdateComponent', () => {
  let component: EnseignantFormUpdateComponent;
  let fixture: ComponentFixture<EnseignantFormUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnseignantFormUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnseignantFormUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
