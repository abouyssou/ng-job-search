import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Signal,
} from '@angular/core';
import { JobListComponent } from '../../components/job-list/job-list.component';
import { Job } from '../../models/job.model';
import { JobDataService } from '../../services/job-data.service';

@Component({
  selector: 'app-favorite-jobs',
  standalone: true,
  imports: [JobListComponent],
  templateUrl: './favorite-jobs.component.html',
  styleUrl: './favorite-jobs.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoriteJobsComponent implements OnInit {
  favoriteJobs!: Signal<Job[]>;

  constructor(private jobDataService: JobDataService) {}

  ngOnInit(): void {
    this.favoriteJobs = this.jobDataService.getFavoriteJobs();
  }
}
