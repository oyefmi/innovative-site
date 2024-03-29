import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkboxComponent } from './linkbox.component';

describe('BannerlinkComponent', () => {
  let component: LinkboxComponent;
  let fixture: ComponentFixture<LinkboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
