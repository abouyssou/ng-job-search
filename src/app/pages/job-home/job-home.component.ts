import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Signal,
} from '@angular/core';
import { JobListComponent } from '../../components/job-list/job-list.component';
import { FavoriteJob, Job } from '../../models/job.model';
import { JobDataService } from '../../services/job-data.service';

@Component({
  selector: 'app-job-home',
  standalone: true,
  imports: [JobListComponent],
  templateUrl: './job-home.component.html',
  styleUrl: './job-home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobHomeComponent implements OnInit {
  allJobs!: Signal<Job[]>;
  favoriteJobsIds!: Signal<number[]>;

  constructor(private jobDataService: JobDataService) {}

  ngOnInit(): void {
    this.allJobs = this.jobDataService.getJobs();
    this.favoriteJobsIds = this.jobDataService.getFavoriteJobsIds();
  }

  onFavouriteClick(event: FavoriteJob): void {
    if (event?.isFavorite) {
      if (event?.jobId || event?.jobId >= 0) {
        this.jobDataService.addFavoriteJobId(event.jobId);
      }
    } else {
      if (event?.jobId || event?.jobId >= 0) {
        this.jobDataService.removeFavoriteJobId(event.jobId);
      }
    }
  }
}
