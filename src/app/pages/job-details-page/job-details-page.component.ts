import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { JobDetailsComponent } from '../../components/job-details/job-details.component';
import { DetailedJob } from '../../models/job.model';
import { JobHttpService } from '../../services/job-http.service';

@Component({
  selector: 'app-job-details-page',
  standalone: true,
  imports: [JobDetailsComponent, AsyncPipe, RouterLink],
  templateUrl: './job-details-page.component.html',
  styleUrl: './job-details-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobDetailsPageComponent implements OnInit {
  @Input()
  jobId!: number;

  detailedJob$!: Observable<DetailedJob>;
  constructor(private jobHttpService: JobHttpService) {}

  ngOnInit() {
    this.detailedJob$ = this.jobHttpService.getDetailedJobById(this.jobId);
  }
}
