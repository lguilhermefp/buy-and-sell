import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsDetailPageComponent } from './listings-detail-page.component';

describe('ListingsDetailPageComponent', () => {
  let component: ListingsDetailPageComponent;
  let fixture: ComponentFixture<ListingsDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingsDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingsDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
