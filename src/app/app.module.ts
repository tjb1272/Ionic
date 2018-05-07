import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RecipesPage } from '../pages/recipes/recipes';
import { GroceryPage } from '../pages/grocery/grocery';
import { RecipeDetailPage } from '../pages/recipe-detail/recipe-detail';

import { RecipesService } from '../providers/recipes.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataProvider } from '../providers/data/data';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RecipesPage,
    GroceryPage,
    RecipeDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RecipesPage,
    GroceryPage,
    RecipeDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    RecipesService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider  
  ]
})
export class AppModule {}
