import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryMatchingGameComponent } from './memory-matching-game.component';

describe('MemoryMatchingGameComponent', () => {
  let component: MemoryMatchingGameComponent;
  let fixture: ComponentFixture<MemoryMatchingGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoryMatchingGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemoryMatchingGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
