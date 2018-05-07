import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { RecipesPage } from '../pages/recipes/recipes';
import { GroceryPage } from '../pages/grocery/grocery';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  activePage: any;

  pages: Array<{title: string, icon: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    this.pages = [
      { title: 'Home', icon:'md-home', component: HomePage },
      { title: 'Recipes', icon:'md-cafe', component: RecipesPage },
      { title: 'Grocery List', icon:'md-list', component: GroceryPage },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
	  });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
    this.activePage = page;
  }

  public checkActivePage(page): boolean{
    return page === this.activePage;
  }
}
