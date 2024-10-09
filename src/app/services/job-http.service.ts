import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailedJob, Job } from '../models/job.model';

@Injectable({
  providedIn: 'root',
})
export class JobHttpService {
  constructor(private http: HttpClient) {}
  getAllJobs(): Observable<Job[]> {
    return this.http.get<Job[]>('/jobs');
  }

  getDetailedJobById(jobId: number): Observable<DetailedJob> {
    return this.http.get<DetailedJob>(`/jobs/${jobId}`);
  }
}
