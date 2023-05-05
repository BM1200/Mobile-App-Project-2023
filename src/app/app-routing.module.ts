import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },  {
    path: 'iphone',
    loadChildren: () => import('./iphone/iphone.module').then( m => m.IphonePageModule)
  },
  {
    path: 'samsung',
    loadChildren: () => import('./samsung/samsung.module').then( m => m.SamsungPageModule)
  },
  {
    path: 'windows-phone',
    loadChildren: () => import('./windows-phone/windows-phone.module').then( m => m.WindowsPhonePageModule)
  },
  {
    path: 'blackberry',
    loadChildren: () => import('./blackberry/blackberry.module').then( m => m.BlackberryPageModule)
  },
  {
    path: 'movies',
    loadChildren: () => import('./movies/movies.module').then( m => m.MoviesPageModule)
  },
  {
    path: 'status',
    loadChildren: () => import('./status/status.module').then( m => m.StatusPageModule)
  },
  {
    path: 'gps',
    loadChildren: () => import('./gps/gps.module').then( m => m.GPSPageModule)
  },
  {
    path: 'browser',
    loadChildren: () => import('./browser/browser.module').then( m => m.BrowserPageModule)
  },
  {
    path: 'applehistory',
    loadChildren: () => import('./applehistory/applehistory.module').then( m => m.ApplehistoryPageModule)
  },
  {
    path: 'samsunghistory',
    loadChildren: () => import('./samsunghistory/samsunghistory.module').then( m => m.SamsunghistoryPageModule)
  },
  {
    path: 'windowshistory',
    loadChildren: () => import('./windowshistory/windowshistory.module').then( m => m.WindowshistoryPageModule)
  },
  {
    path: 'bberryhistory',
    loadChildren: () => import('./bberryhistory/bberryhistory.module').then( m => m.BberryhistoryPageModule)
  },
  {
    path: 'summaryapp',
    loadChildren: () => import('./summaryapp/summaryapp.module').then( m => m.SummaryappPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
