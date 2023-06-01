import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDespComponent } from './product-desp.component';

describe('ProductDespComponent', () => {
  let component: ProductDespComponent;
  let fixture: ComponentFixture<ProductDespComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDespComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDespComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
