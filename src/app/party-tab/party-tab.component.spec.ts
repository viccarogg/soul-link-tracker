import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyTabComponent } from './party-tab.component';

describe('PartyTabComponent', () => {
  let component: PartyTabComponent;
  let fixture: ComponentFixture<PartyTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartyTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartyTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
