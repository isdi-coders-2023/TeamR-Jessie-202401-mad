import { ComponentFixture, TestBed } from '@angular/core/testing';
import ErrorPageComponent from './error-page.component';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

fdescribe('ErrorPageComponent', () => {
  let component: ErrorPageComponent;
  let fixture: ComponentFixture<ErrorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorPageComponent, HttpClientModule, RouterTestingModule],
    }).compileComponents();

  fixture = TestBed.createComponent(ErrorPageComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call action when click on img',()=>{
    spyOn(component, 'goBack');
    const img = fixture.debugElement.queryAll(By.css('img'))
    img[0].triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.goBack).toHaveBeenCalled
  })

  it('should call action when click on text',()=>{
    spyOn(component, 'goBack');
    const button = fixture.debugElement.queryAll(By.css('button'))
    button[0].triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.goBack).toHaveBeenCalled
  })
})
