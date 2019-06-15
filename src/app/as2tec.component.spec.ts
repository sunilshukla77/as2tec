import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { As2tecComponent } from './as2tec.component';

describe('As2tecComponent', () => {
  let component: As2tecComponent;
  let fixture: ComponentFixture<As2tecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ As2tecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(As2tecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
