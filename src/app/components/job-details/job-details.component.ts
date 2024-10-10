import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DetailedJob } from '../../models/job.model';
import { JobChipComponent } from '../job-chip/job-chip.component';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [JobChipComponent],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobDetailsComponent {
  @Input() detailedJob!: DetailedJob | undefined | null;
}
