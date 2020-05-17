import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EliminarMatriculaPage } from './eliminar-matricula.page';

describe('EliminarMatriculaPage', () => {
  let component: EliminarMatriculaPage;
  let fixture: ComponentFixture<EliminarMatriculaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarMatriculaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EliminarMatriculaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
