import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversiteMainComponent } from './universite-main.component';

describe('UniversiteMainComponent', () => {
  let component: UniversiteMainComponent;
  let fixture: ComponentFixture<UniversiteMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversiteMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversiteMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
