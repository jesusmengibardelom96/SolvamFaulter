import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MensajesEnviadosPage } from './mensajes-enviados.page';

describe('MensajesEnviadosPage', () => {
  let component: MensajesEnviadosPage;
  let fixture: ComponentFixture<MensajesEnviadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensajesEnviadosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MensajesEnviadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
