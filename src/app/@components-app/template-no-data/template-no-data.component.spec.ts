import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateNoDataComponent } from './template-no-data.component';

describe('TemplateNoDataComponent', () => {
  let component: TemplateNoDataComponent;
  let fixture: ComponentFixture<TemplateNoDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateNoDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateNoDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
