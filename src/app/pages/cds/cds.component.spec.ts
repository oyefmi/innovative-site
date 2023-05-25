import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CDSComponent } from './cds.component';

describe('CdsComponent', () => {
  let component: CDSComponent;
  let fixture: ComponentFixture<CDSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CDSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CDSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
