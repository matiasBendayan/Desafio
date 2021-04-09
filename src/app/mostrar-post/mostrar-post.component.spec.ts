import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarPostComponent } from './mostrar-post.component';

describe('MostrarPostComponent', () => {
  let component: MostrarPostComponent;
  let fixture: ComponentFixture<MostrarPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
