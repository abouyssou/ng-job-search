import { Routes } from '@angular/router';
import { FavoriteJobsComponent } from './pages/favorite-jobs/favorite-jobs.component';
import { JobDetailsPageComponent } from './pages/job-details-page/job-details-page.component';
import { JobHomeComponent } from './pages/job-home/job-home.component';

export const routes: Routes = [
  {
    path: 'jobs',
    component: JobHomeComponent,
    pathMatch: 'full',
    title: 'Job list - Search Job',
  },
  {
    path: 'jobs/:jobId',
    component: JobDetailsPageComponent,
    pathMatch: 'full',
    title: 'Job Details - Search Job',
  },
  {
    path: 'favorites',
    component: FavoriteJobsComponent,
    pathMatch: 'full',
    title: 'Favorite Jobs - Search Job',
  },
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
