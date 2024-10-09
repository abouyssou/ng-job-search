import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { FavoriteJob, Job } from '../../models/job.model';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobCardComponent {
  @Input() job!: Job;
  @Input() isFavorite: boolean = false;
  @Input() displayFavoriteIcon: boolean = false;

  @Output() onFavClick = new EventEmitter<FavoriteJob>();

  public onFavoriteClick(): void {
    this.isFavorite = !this.isFavorite;
    this.onFavClick.emit({ isFavorite: this.isFavorite, jobId: this.job.id });
  }
}
