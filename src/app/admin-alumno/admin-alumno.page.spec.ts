import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminAlumnoPage } from './admin-alumno.page';

describe('AdminAlumnoPage', () => {
  let component: AdminAlumnoPage;
  let fixture: ComponentFixture<AdminAlumnoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAlumnoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminAlumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
