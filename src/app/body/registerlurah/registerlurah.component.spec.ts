import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterlurahComponent } from './registerlurah.component';

describe('RegisterlurahComponent', () => {
  let component: RegisterlurahComponent;
  let fixture: ComponentFixture<RegisterlurahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterlurahComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterlurahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
