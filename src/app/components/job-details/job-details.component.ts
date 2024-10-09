import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DetailedJob } from '../../models/job.model';
import { JobCardComponent } from '../job-card/job-card.component';
import { JobChipComponent } from '../job-chip/job-chip.component';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [AsyncPipe, JobChipComponent, JobCardComponent],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobDetailsComponent {
  @Input() detailedJob!: DetailedJob | undefined | null;
}
