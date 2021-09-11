import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateUploadFileComponent } from './template-upload-file.component';

describe('TemplateUploadFileComponent', () => {
  let component: TemplateUploadFileComponent;
  let fixture: ComponentFixture<TemplateUploadFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateUploadFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateUploadFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
