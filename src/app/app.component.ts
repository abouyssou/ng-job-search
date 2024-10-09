import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Observable, take } from 'rxjs';
import { Job } from './models/job.model';
import { JobDataService } from './services/job-data.service';
import { JobHttpService } from './services/job-http.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'ng-job-search';

  constructor(
    private jobDataService: JobDataService,
    private jobHttpService: JobHttpService
  ) {}

  ngOnInit(): void {
    this.getAllJobs()
      .pipe(take(1))
      .subscribe((allJobs) => {
        this.jobDataService.setJobs(allJobs);
      });
  }

  private getAllJobs(): Observable<Job[]> {
    return this.jobHttpService.getAllJobs();
  }
}
