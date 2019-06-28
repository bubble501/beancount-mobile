import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { WelcomeGuard } from './welcome/welcome.guard';
import { PlainTextComponent } from './plaintext/plaintext.component';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';
import { SettingsComponent } from './settings/settings.component';
import { AccountFormComponent } from './account-form/account-form.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/welcome',
        pathMatch: 'full',
    },
    {
        path: 'welcome',
        component: WelcomeComponent,
        canActivate: [WelcomeGuard],
    },
    {
        path: 'plaintext',
        component: PlainTextComponent,
    },
    {
        path: 'add-transaction',
        component: TransactionFormComponent,
    },
    {
        path: 'add-account',
        component: AccountFormComponent,
    },
    {
        path: 'settings',
        component: SettingsComponent,
    },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule],
})
export class AppRoutingModule { }
