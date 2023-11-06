import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncounterTabComponent } from './encounter-tab.component';

describe('EncounterTabComponent', () => {
  let component: EncounterTabComponent;
  let fixture: ComponentFixture<EncounterTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncounterTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncounterTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
