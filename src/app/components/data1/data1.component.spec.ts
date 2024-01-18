import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Data1Component } from './data1.component';

describe('Data1Component', () => {
  let component: Data1Component;
  let fixture: ComponentFixture<Data1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Data1Component]
    });
    fixture = TestBed.createComponent(Data1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
