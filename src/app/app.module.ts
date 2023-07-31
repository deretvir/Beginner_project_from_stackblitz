import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {DemoMaterialModule} from '../material.module';

import { AppComponent } from './app.component';
import {BtnComponent} from './btn/btn.component';
import {InputComponent} from './input/input.component';

import {TestBtnComponent} from './tests/test-btn/test-btn.component';
import {TestParagraphComponent}  from'./tests/test-paragraph/test-paragraph.component';
import {TestsComponent} from './tests/tests.component'

import {AttributeDirectivesComponent} from './directives/attribute-directives/attribute-directives.component';
import {DirectivesComponent} from './directives/directives.component';
import {StructutalDirectivesComponent} from  './directives/./structutal-directives/structutal-directives.component';
 
import{LocalReferencesinTemplateComponent} from './local-referencesin-template/local-referencesin-template.component'

import {NgContentExampleComponent} from'./local-referencesin-template/ng-content-example/ng-content-example.component'

import {ComponentLifecycleComponent} from './component-lifecycle/component-lifecycle.component'
 
@NgModule({
  imports:      [
    BrowserModule
    , CommonModule
    , BrowserAnimationsModule
    , FormsModule
    , HttpClientModule
    , DemoMaterialModule
    , MatNativeDateModule
    , ReactiveFormsModule
  ],
  entryComponents: [  ],
  declarations: [ AppComponent,BtnComponent,InputComponent, TestBtnComponent,TestParagraphComponent,TestsComponent,AttributeDirectivesComponent, DirectivesComponent,StructutalDirectivesComponent,LocalReferencesinTemplateComponent, NgContentExampleComponent, ComponentLifecycleComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
