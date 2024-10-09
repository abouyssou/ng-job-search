import {
  computed,
  Injectable,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { Job } from '../models/job.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class JobDataService {
  private jobs: WritableSignal<Job[]> = signal([]);
  private favoriteJobsIds: WritableSignal<number[]> = signal([]);
  private favoriteJobs: Signal<Job[]> = computed(() =>
    this.jobs().filter((job) => this.favoriteJobsIds().includes(job.id))
  );

  constructor(private localStorageService: LocalStorageService) {
    this.favoriteJobsIds.set(
      this.localStorageService.getFavoriteJobIdsFromLocalStorage()
    );
  }

  public setJobs(jobs: Job[]): void {
    this.jobs.set(jobs);
  }

  public getJobs(): WritableSignal<Job[]> {
    return this.jobs;
  }

  public addFavoriteJobId(jobId: number): void {
    this.favoriteJobsIds.update((favoriteJobIds) => [...favoriteJobIds, jobId]);
    this.localStorageService.addFavoriteJobIdInLocalStorage(jobId);
  }

  public removeFavoriteJobId(jobId: number): void {
    this.favoriteJobsIds.update((favoriteJobsIds) =>
      favoriteJobsIds.filter((favoriteJobId) => favoriteJobId !== jobId)
    );
    this.localStorageService.removeFavoriteJobIdFromLocalStorage(jobId);
  }

  public getFavoriteJobsIds(): Signal<number[]> {
    return this.favoriteJobsIds;
  }

  public getFavoriteJobs(): Signal<Job[]> {
    return this.favoriteJobs;
  }
}
