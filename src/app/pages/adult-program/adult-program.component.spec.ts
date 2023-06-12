import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdultProgramComponent } from './adult-program.component';

describe('AdultProgramComponent', () => {
  let component: AdultProgramComponent;
  let fixture: ComponentFixture<AdultProgramComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdultProgramComponent]
    });
    fixture = TestBed.createComponent(AdultProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
