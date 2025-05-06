import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { DefaultRoutingModule } from './default-routing.module';
import { DefaultComponent } from './default.component';
import { SideNavHoverDirective } from '@directives/sideNavhover.directive';
import { NavHeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

@NgModule({
  declarations: [
    DefaultComponent,
    SidebarComponent,
    NavHeaderComponent,
    SideNavHoverDirective,
    UserDashboardComponent,
  ],
  imports: [CommonModule,SharedModule, DefaultRoutingModule],
})
export class DefaultModule {}
