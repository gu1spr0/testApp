import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateErrorDisplayDataComponent } from './template-error-display-data.component';

describe('TemplateErrorDisplayDataComponent', () => {
  let component: TemplateErrorDisplayDataComponent;
  let fixture: ComponentFixture<TemplateErrorDisplayDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateErrorDisplayDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateErrorDisplayDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
