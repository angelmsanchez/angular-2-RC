import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { PageNotFoundComponent } from './page-not-found.component';
import { PreloadSelectedModulesList } from './core/config/index';
import { CanLoadService, ExceptionService, AuthService } from './core/services/index';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        loadChildren: 'app/home/home.module#HomeModule'
    },
    {
        path: 'pomodoro',
        loadChildren: 'app/pomodoro/pomodoro.module#PomodoroModule',
        data: { preload: true }
    },
    {
        path: 'video-club',
        loadChildren: 'app/video-club/video-club.module#VideoClubModule',
        canLoad: [CanLoadService]
    }
    // {
    //     path: '**',
    //     pathMatch: 'full',
    //     component: PageNotFoundComponent
    // }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes,
            { preloadingStrategy: PreloadSelectedModulesList }
        )
    ],
    exports: [
        RouterModule
    ],
    providers: [
        PreloadSelectedModulesList,
        ExceptionService,
        AuthService,
        CanLoadService
    ]
})
export class AppRoutingModule { }
