import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { IntroComponent } from './intro/intro.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { FooterComponent } from './footer/footer.component';
import { FragmentPolyfillModule } from "../fragment-polyfill.module";
import { PageComponent } from './page/page.component';

const appRoutes: Routes= [
  {
  
  path: "" ,component:PageComponent,
  children: [
    {
      path:"sidebar",
      component: SidebarComponent
    },
    {
      path:"wrapper",
      component: WrapperComponent
    },
    {
      path:"intro",
      component: IntroComponent
    },
    {
      path:"one",
      component: OneComponent
    },
    {
      path:"two",
      component: TwoComponent
    },
    {
      path:"three",
      component: ThreeComponent
    },
    {
      path:"footer",
      component:FooterComponent
    },
    
  ],
  
}
]

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    WrapperComponent,
    IntroComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    FooterComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FragmentPolyfillModule.forRoot({
      smooth: true
  }),
  RouterModule.forRoot(appRoutes,{useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
