import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IngresarProfesorPage } from './ingresar-profesor.page';

describe('IngresarProfesorPage', () => {
  let component: IngresarProfesorPage;
  let fixture: ComponentFixture<IngresarProfesorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresarProfesorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IngresarProfesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
