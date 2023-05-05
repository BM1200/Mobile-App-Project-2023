import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SamsunghistoryPage } from './samsunghistory.page';

describe('SamsunghistoryPage', () => {
  let component: SamsunghistoryPage;
  let fixture: ComponentFixture<SamsunghistoryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SamsunghistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
