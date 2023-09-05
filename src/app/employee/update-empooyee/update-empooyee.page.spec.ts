import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateEmpooyeePage } from './update-empooyee.page';

describe('UpdateEmpooyeePage', () => {
  let component: UpdateEmpooyeePage;
  let fixture: ComponentFixture<UpdateEmpooyeePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdateEmpooyeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
