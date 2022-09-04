import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentPathService {
  /**
   * Current path subject
   */
  private currentPath = new BehaviorSubject<string>('');
  public currentPath$ = this.currentPath.asObservable();


  constructor() { }

  /**
   * Emits the new path value
   *
   * @param newPath new url
   */
  public setCurrentPath(newPath: string) {
    this.currentPath.next(newPath);
  }
}
