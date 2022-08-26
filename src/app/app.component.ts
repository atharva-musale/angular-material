import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  /**
   * Sidenav state
   */
  isSidenavOpen = true;

  /**
   * Variable to store reference of the top-nav
   */
  @ViewChild('topNav', { read: ElementRef })
  public topNavigationBar!: ElementRef;

  /**
   * Variable to store reference of the side-nav
   */
  @ViewChild('sidenavContainer', { read: ElementRef })
  public sideNavigationBar!: ElementRef;

  constructor(private renderer: Renderer2, private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver.observe(['(max-width: 700px)']).subscribe(() => {
      this.isSidenavOpen = false;
    });
  }

  ngAfterViewInit(): void {
    const topNavHeight = this.topNavigationBar.nativeElement.offsetHeight;
    this.renderer.setStyle(this.sideNavigationBar.nativeElement, 'top', `${topNavHeight}px`);
  }

  /**
   * Toggles the sidenav
   */
  public toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }
}
