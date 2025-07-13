import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweryList } from './brewery-list';

describe('BreweryList', () => {
  let component: BreweryList;
  let fixture: ComponentFixture<BreweryList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreweryList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreweryList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
