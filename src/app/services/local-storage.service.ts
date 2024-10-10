import { Injectable } from '@angular/core';

export const FAVORITE_JOBS_IDS_KEY = 'FAVORITE_JOBS_IDS';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  public addFavoriteJobIdInLocalStorage(jobId: number): void {
    let newFavoriteJobsIds = this.getParsedJobIds();
    newFavoriteJobsIds.push(jobId.toString());
    localStorage.setItem(
      FAVORITE_JOBS_IDS_KEY,
      JSON.stringify(newFavoriteJobsIds)
    );
  }

  public removeFavoriteJobIdFromLocalStorage(jobId: number): void {
    let newFavoriteJobsIds = this.getParsedJobIds();

    newFavoriteJobsIds = newFavoriteJobsIds.filter((favJobId) => {
      return favJobId !== jobId.toString();
    });
    localStorage.setItem(
      FAVORITE_JOBS_IDS_KEY,
      JSON.stringify(newFavoriteJobsIds)
    );
  }

  public getFavoriteJobIdsFromLocalStorage(): number[] {
    let favoriteJobsIdsFromLocalStorage: string | null = localStorage.getItem(
      FAVORITE_JOBS_IDS_KEY
    );
    let favoriteJobIdsArray: number[] = [];

    if (favoriteJobsIdsFromLocalStorage) {
      let favoriteJobIdsStringArray: string[] = JSON.parse(
        favoriteJobsIdsFromLocalStorage
      );
      favoriteJobIdsArray = favoriteJobIdsStringArray.map((stringId) =>
        parseInt(stringId)
      );
    }

    return favoriteJobIdsArray;
  }

  private getParsedJobIds(): string[] {
    let favoriteJobsIds: string | null = localStorage.getItem(
      FAVORITE_JOBS_IDS_KEY
    );
    let newFavoriteJobsIds: string[] = [];
    if (favoriteJobsIds) {
      newFavoriteJobsIds = JSON.parse(favoriteJobsIds);
    }

    return newFavoriteJobsIds;
  }
}
