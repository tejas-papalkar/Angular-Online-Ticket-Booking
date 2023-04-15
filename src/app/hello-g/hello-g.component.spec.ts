import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloGComponent } from './hello-g.component';

describe('HelloGComponent', () => {
  let component: HelloGComponent;
  let fixture: ComponentFixture<HelloGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloGComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
