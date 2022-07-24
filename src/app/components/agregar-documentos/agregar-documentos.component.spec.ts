import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarDocumentosComponent } from './agregar-documentos.component';

describe('AgregarDocumentosComponent', () => {
  let component: AgregarDocumentosComponent;
  let fixture: ComponentFixture<AgregarDocumentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarDocumentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
