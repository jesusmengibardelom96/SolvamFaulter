import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EliminarAlumnoPage } from './eliminar-alumno.page';

describe('EliminarAlumnoPage', () => {
  let component: EliminarAlumnoPage;
  let fixture: ComponentFixture<EliminarAlumnoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarAlumnoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EliminarAlumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
