import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MalombaComponent } from './malomba.component';

describe('MalombaComponent', () => {
  let component: MalombaComponent;
  let fixture: ComponentFixture<MalombaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MalombaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MalombaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
