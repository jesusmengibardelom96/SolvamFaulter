import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EliminarProfesorPage } from './eliminar-profesor.page';

describe('EliminarProfesorPage', () => {
  let component: EliminarProfesorPage;
  let fixture: ComponentFixture<EliminarProfesorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarProfesorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EliminarProfesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
