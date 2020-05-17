import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AsociarProfesorPage } from './asociar-profesor.page';

describe('AsociarProfesorPage', () => {
  let component: AsociarProfesorPage;
  let fixture: ComponentFixture<AsociarProfesorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsociarProfesorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AsociarProfesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
