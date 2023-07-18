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
import {TestBtnComponent} from './test-btn/test-btn.component';
import {TestParagraphComponent}  from'./test-paragraph/test-paragraph.component';

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
  declarations: [ AppComponent,BtnComponent,InputComponent, TestBtnComponent,TestParagraphComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
