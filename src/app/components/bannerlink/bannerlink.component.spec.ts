import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerlinkComponent } from './bannerlink.component';

describe('BannerlinkComponent', () => {
  let component: BannerlinkComponent;
  let fixture: ComponentFixture<BannerlinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerlinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
