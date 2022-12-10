import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignantMainComponent } from './enseignant-main.component';

describe('EnseignantMainComponent', () => {
  let component: EnseignantMainComponent;
  let fixture: ComponentFixture<EnseignantMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnseignantMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnseignantMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
