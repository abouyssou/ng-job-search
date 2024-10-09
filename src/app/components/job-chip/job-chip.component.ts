import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-job-chip',
  standalone: true,
  imports: [],
  templateUrl: './job-chip.component.html',
  styleUrl: './job-chip.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobChipComponent {
  @Input() chipText: string | undefined | null = '';
}
