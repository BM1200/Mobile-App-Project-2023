import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WindowshistoryPage } from './windowshistory.page';

describe('WindowshistoryPage', () => {
  let component: WindowshistoryPage;
  let fixture: ComponentFixture<WindowshistoryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WindowshistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
