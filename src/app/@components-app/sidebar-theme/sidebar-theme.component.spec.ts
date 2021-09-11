import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarThemeComponent } from './sidebar-theme.component';

describe('SidebarThemeComponent', () => {
  let component: SidebarThemeComponent;
  let fixture: ComponentFixture<SidebarThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarThemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
