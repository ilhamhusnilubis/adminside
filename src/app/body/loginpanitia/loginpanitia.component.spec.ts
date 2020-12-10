import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginpanitiaComponent } from './loginpanitia.component';

describe('LoginpanitiaComponent', () => {
  let component: LoginpanitiaComponent;
  let fixture: ComponentFixture<LoginpanitiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginpanitiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginpanitiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
