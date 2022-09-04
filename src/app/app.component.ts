import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, Subscription } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { CurrentPathService } from './services/current-path/current-path.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit, OnDestroy {
  /**
   * Stores all subscriptions
   */
  public subscriptions: Subscription[] = [];

  /**
   * Sidenav state
   */
  private isSidenavOpen = new BehaviorSubject<boolean>(false);
  public isSidenavOpen$ = this.isSidenavOpen.asObservable();

  /**
   * True if viewport width is less than 700px
   */
  isMobileView$!: Observable<boolean>;

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

  constructor(
    private renderer: Renderer2,
    private breakpointObserver: BreakpointObserver,
    private currentPathService: CurrentPathService,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.isMobileView$ = this.breakpointObserver.observe(['(max-width: 700px)']).pipe(
      map(val => val.matches),
      distinctUntilChanged()
    );
    this.subscriptions.push(
      combineLatest([this.isMobileView$, this.currentPathService.currentPath$])
        .subscribe(([isMobileView, currentPath]) => {
          if (currentPath === '' || currentPath === 'home') {
            this.isSidenavOpen.next(!isMobileView);
          }
          else {
            console.log('Else curren: ', currentPath);
            this.isSidenavOpen.next(false);
          }
          this.changeDetector.detectChanges();
        }
      )
    );
  }

  ngAfterViewInit(): void {
    const topNavHeight = this.topNavigationBar.nativeElement.offsetHeight;
    this.renderer.setStyle(this.sideNavigationBar.nativeElement, 'top', `${topNavHeight}px`);
  }

  /**
   * Toggles the sidenav
   */
  public toggleSidenav() {
    console.log('To be done later');
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
