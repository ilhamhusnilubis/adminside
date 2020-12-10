import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterpanitiaComponent } from './registerpanitia.component';

describe('RegisterpanitiaComponent', () => {
  let component: RegisterpanitiaComponent;
  let fixture: ComponentFixture<RegisterpanitiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterpanitiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterpanitiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
