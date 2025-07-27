import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileNavabrComponent } from './mobile-navabr.component';

describe('MobileNavabrComponent', () => {
  let component: MobileNavabrComponent;
  let fixture: ComponentFixture<MobileNavabrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileNavabrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobileNavabrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
