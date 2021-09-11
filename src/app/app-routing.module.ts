import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PagesRoutingModule } from "./pages/pages-routing.module";
import { NopagefoundComponent } from "./shared/nopagefound/nopagefound.component";

const routes: Routes = [
    {
        path: '**',
        component: NopagefoundComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes,
            {
                initialNavigation: 'enabled',
                useHash:true
            }
        ),
        PagesRoutingModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{}