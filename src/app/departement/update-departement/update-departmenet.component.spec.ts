import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDepartmenetComponent } from './update-departmenet.component';

describe('UpdateDepartmenetComponent', () => {
  let component: UpdateDepartmenetComponent;
  let fixture: ComponentFixture<UpdateDepartmenetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDepartmenetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDepartmenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
