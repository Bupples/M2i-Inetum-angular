import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconsModule } from '../icons/icons.module';
import { TemplatesModule } from '../templates/templates.module';
import { ButtonComponent } from './components/button/button.component';
import { TabLightComponent } from './components/tab-light/tab-light.component';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { TabDarkComponent } from './components/tab-dark/tab-dark.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextsModule } from '../texts/texts.module';

@NgModule({
  declarations: [TabLightComponent, ButtonComponent, TotalPipe, StateDirective, TabDarkComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    TextsModule
  ],
  exports: [
    TemplatesModule,
    IconsModule,
    ReactiveFormsModule,
    TextsModule,
    TabLightComponent,
    ButtonComponent,
    TotalPipe,
    StateDirective,
    TabDarkComponent
  ]
})
export class SharedModule { }
