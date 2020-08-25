import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('container') container: ElementRef;

  title = 'old-frog-animapp';
  isSignUpClicked = false;

  constructor(private renderer: Renderer2) {}

  onSignInClick() {
    this.isSignUpClicked = false;

    this.renderer.removeClass(this.container.nativeElement, 'right-panel-active');
  }

  onSignUpClick() {
    this.isSignUpClicked = true;

    this.renderer.addClass(this.container.nativeElement, 'right-panel-active');
  }
}
