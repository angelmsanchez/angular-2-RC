import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AuthGuard, CanDeactivateGuard, UserProfileService } from './core';
// import { PageNotFoundComponent } from './page-not-found.component';
import { PreloadSelectedModulesList } from './core/config/index';
import { HomeComponent } from './home/index';
import { PomodoroComponent } from './pomodoro/index';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    // {
    //     path: 'admin',
    //     loadChildren: 'app/admin/admin.module#AdminModule',
    //     canActivate: [AuthGuard],
    //     canLoad: [AuthGuard]
    // },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'pomodoro',
        component: PomodoroComponent,
        data: { preload: true }
    },
    // {
    //     path: '**',
    //     pathMatch: 'full',
    //     component: PageNotFoundComponent
    // }
    // {
    //     path: 'speakers',
    //     loadChildren: 'app/speakers/speakers.module#SpeakersModule',
    //     data: { preload: true }
    // },
    // {
    //     path: 'sessions',
    //     loadChildren: 'app/sessions/sessions.module#SessionsModule'
    // },
    // {
    //     path: '**',
    //     pathMatch: 'full',
    //     component: PageNotFoundComponent
    // },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes,
            { preloadingStrategy: PreloadSelectedModulesList }
        )],
    exports: [RouterModule],
    providers: [
        // AuthGuard,
        // CanDeactivateGuard,
        PreloadSelectedModulesList,
        // UserProfileService
    ]
})
export class AppRoutingModule { }
