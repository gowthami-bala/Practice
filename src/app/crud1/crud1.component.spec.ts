import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Crud1Component } from './crud1.component';

describe('Crud1Component', () => {
  let component: Crud1Component;
  let fixture: ComponentFixture<Crud1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Crud1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Crud1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
