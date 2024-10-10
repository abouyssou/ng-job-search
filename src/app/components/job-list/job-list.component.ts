import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FavoriteJob, Job } from '../../models/job.model';
import { JobCardComponent } from '../job-card/job-card.component';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [JobCardComponent],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobListComponent {
  @Input() jobList!: Job[];
  @Input() favoriteJobsIds: number[] = [];
  @Input() isFavoritePage: boolean = false;
  @Output() onFavClick = new EventEmitter<FavoriteJob>();

  onFavoriteClick(event: FavoriteJob): void {
    this.onFavClick.emit(event);
  }
}
