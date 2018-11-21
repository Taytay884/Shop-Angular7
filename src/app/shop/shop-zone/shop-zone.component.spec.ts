import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopZoneComponent } from './shop-zone.component';

describe('ShopZoneComponent', () => {
  let component: ShopZoneComponent;
  let fixture: ComponentFixture<ShopZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
