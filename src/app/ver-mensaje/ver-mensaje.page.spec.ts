import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerMensajePage } from './ver-mensaje.page';

describe('VerMensajePage', () => {
  let component: VerMensajePage;
  let fixture: ComponentFixture<VerMensajePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerMensajePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerMensajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
