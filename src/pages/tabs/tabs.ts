import { Component } from '@angular/core';

import { NewSalaPage } from '../new/newSala';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = NewSalaPage;

  constructor() {

  }
}
