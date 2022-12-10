import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversiteFormAddComponent } from './universite-form-add.component';

describe('UniversiteFormAddComponent', () => {
  let component: UniversiteFormAddComponent;
  let fixture: ComponentFixture<UniversiteFormAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversiteFormAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversiteFormAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
