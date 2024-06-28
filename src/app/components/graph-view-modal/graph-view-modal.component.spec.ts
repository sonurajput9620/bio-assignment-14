import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphViewModalComponent } from './graph-view-modal.component';

describe('GraphViewModalComponent', () => {
  let component: GraphViewModalComponent;
  let fixture: ComponentFixture<GraphViewModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphViewModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
