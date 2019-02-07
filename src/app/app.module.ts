import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';//FormsModule is needed to use directives on form elements
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { DirectiveComponent } from './directive/directive.component';
import { BasicHighlightDirective } from './basic-highlight/basic.highligh-directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessDirective } from './unless.directive';

//adding the @NgModuel decorator transforms the AppModule typescript class 
//below to set properties, declrations, imports. 
//declarations: tells the app which component to recognize as the start component
//imports: allows us to add other modules from angular framwork. angular is split into different modules
//any new component added has to be registered in the declarations property so that angular can use it
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    AssignmentsComponent,
    DirectiveComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
//bootstrap array lists all the known components which should be known to
//angular at the point of time it analyzes the index.html file
//AppComponent is the root component, its a special component because all other created components
//are siblings of this root component. No other html will be added to the index.html file
//other than what app.component selects as the tag to render.
//all other html rendering tags will be added to app.component.html 
//the [AppComponent] array imports the AppComponent, which is app.component.ts
//in app.component.ts defines what selector, css it should use
export class AppModule { }
