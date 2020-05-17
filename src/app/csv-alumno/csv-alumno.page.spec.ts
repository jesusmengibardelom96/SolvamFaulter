import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CsvAlumnoPage } from './csv-alumno.page';

describe('CsvAlumnoPage', () => {
  let component: CsvAlumnoPage;
  let fixture: ComponentFixture<CsvAlumnoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsvAlumnoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CsvAlumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
