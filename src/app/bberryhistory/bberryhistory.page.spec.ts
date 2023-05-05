import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BberryhistoryPage } from './bberryhistory.page';

describe('BberryhistoryPage', () => {
  let component: BberryhistoryPage;
  let fixture: ComponentFixture<BberryhistoryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BberryhistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
