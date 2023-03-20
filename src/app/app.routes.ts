import { Routes } from "@angular/router";

export const AppRoutes : Routes = [
    {
        path: 'aham',
        loadChildren: ()=> import('./pages/kanban/kanban.module').then(x => x.KanbanModule),
    }
]