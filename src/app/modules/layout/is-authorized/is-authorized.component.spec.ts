import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsAuthorizedComponent } from './is-authorized.component';

describe('IsAuthorizedComponent', () => {
  let component: IsAuthorizedComponent;
  let fixture: ComponentFixture<IsAuthorizedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IsAuthorizedComponent]
    });
    fixture = TestBed.createComponent(IsAuthorizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
