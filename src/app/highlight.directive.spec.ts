import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { HighlightDirective } from './highlight.directive';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { execPath } from 'process';

describe('HighlightDirective', () => {
  let fixture;
  beforeEach(()=>{
    fixture = TestBed.configureTestingModule({
      declarations: [AppComponent, HighlightDirective],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).createComponent(AppComponent);
    fixture.detectChanges();
  })
  it('should have blue', () => {
    const h2: HTMLElement = fixture.nativeElement.querySelector('h1');
    const bgColor = h2.style.backgroundColor;
    expect(bgColor).toBe('blue');
  });
});
