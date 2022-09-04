import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentPathService } from 'src/app/services/current-path/current-path.service';

@Component({
  selector: 'app-student-info-cont',
  templateUrl: './student-info-cont.component.html'
})
export class StudentInfoContComponent implements OnInit {

  constructor(private currentPathService: CurrentPathService, private router: Router) { }

  ngOnInit(): void {
    this.currentPathService.setCurrentPath(this.router.url);
  }

}
