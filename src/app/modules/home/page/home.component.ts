import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectService } from '@data/service/project.service';
import { Project } from '@data/schema/project';
import { Observable } from 'rxjs';
import { MyModalComponent } from '../modal/my-modal.component';
import { DashboardService } from '@app/service/dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  projects$: Observable<Project[]>;
  securities: any;

  constructor(
    private modalService: NgbModal,
    private projectService: ProjectService,
    private dashboardService: DashboardService,
    private router: Router,
  ) {

    this.dashboardService
      .GetSecurities()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: any) => {
        this.securities = data.SecurityInfo;
      });
  }

  ngOnInit(): void {
    this.loadProjects();
  }

  navigateChart(data: any) {
    this.router.navigate(['chartboard/candlestick', { key: JSON.stringify(data) }])
  }

  loadProjects() {
    this.projects$ = this.projectService.getAll();
  }

  openMyModal() {
    const modalRef = this.modalService.open(MyModalComponent);
    modalRef.componentInstance.id = 1;
    modalRef.result.then((result) => {
      console.log(result);
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
