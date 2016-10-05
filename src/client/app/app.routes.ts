import { Routes } from '@angular/router';

import { AboutRoutes } from './about/index';
import { HomeRoutes } from './home/index';
import { PomodoroRoutes } from './pomodoro/index';

export const routes: Routes = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...PomodoroRoutes
]
