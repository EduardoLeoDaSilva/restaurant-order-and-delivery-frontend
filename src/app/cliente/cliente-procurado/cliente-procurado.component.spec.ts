import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteProcuradoComponent } from './cliente-procurado.component';

describe('ClienteProcuradoComponent', () => {
  let component: ClienteProcuradoComponent;
  let fixture: ComponentFixture<ClienteProcuradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteProcuradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteProcuradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
