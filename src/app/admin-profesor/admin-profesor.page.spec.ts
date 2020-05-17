import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminProfesorPage } from './admin-profesor.page';

describe('AdminProfesorPage', () => {
  let component: AdminProfesorPage;
  let fixture: ComponentFixture<AdminProfesorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProfesorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminProfesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
