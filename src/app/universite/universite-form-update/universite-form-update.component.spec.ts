import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversiteFormUpdateComponent } from './universite-form-update.component';

describe('UniversiteFormUpdateComponent', () => {
  let component: UniversiteFormUpdateComponent;
  let fixture: ComponentFixture<UniversiteFormUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversiteFormUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversiteFormUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
