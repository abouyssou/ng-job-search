import { Routes } from '@angular/router';
import { FavoriteJobsComponent } from './pages/favorite-jobs/favorite-jobs.component';
import { JobDetailsPageComponent } from './pages/job-details-page/job-details-page.component';
import { JobHomeComponent } from './pages/job-home/job-home.component';

export const routes: Routes = [
  { path: 'jobs', component: JobHomeComponent, pathMatch: 'full' },
  {
    path: 'jobs/:jobId',
    component: JobDetailsPageComponent,
    pathMatch: 'full',
  },
  { path: 'favorites', component: FavoriteJobsComponent, pathMatch: 'full' },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/jobs',
  },
  {
    path: '**',
    component: JobHomeComponent,
  },
];
