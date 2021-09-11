import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateInformationComponent } from './template-information.component';

describe('TemplateInformationComponent', () => {
  let component: TemplateInformationComponent;
  let fixture: ComponentFixture<TemplateInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
