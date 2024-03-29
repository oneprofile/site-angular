import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { LeftPanelComponent} from './core/left-panel/left-panel.component';
import { RightPanelComponent} from './core/right-panel/right-panel.component';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NoopAnimationsModule,
        MaterialModule
      ],
      declarations: [
        AppComponent,
        NavigationComponent,
        LeftPanelComponent,
        RightPanelComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'oneprofile'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('oneprofile');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('OneProfile');
  });
});
