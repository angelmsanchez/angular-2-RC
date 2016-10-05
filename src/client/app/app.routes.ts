import { Routes } from '@angular/router';

import { HomeRoutes } from './home/index';
import { PomodoroRoutes } from './pomodoro/index';
import { FilmRoutes } from './film/index';

export const routes: Routes = [
  ...HomeRoutes,
  ...PomodoroRoutes,
  ...FilmRoutes,
]
