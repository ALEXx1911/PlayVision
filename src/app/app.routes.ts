import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "home",
        loadComponent: () => import("./pages/home/home.component").then(m => m.default),
    },
    {
        path: "aboutUs",
        loadComponent: () => import("./pages/about-us/about-us.component").then(m => m.default),
    },
    {
        path: "club/:clubId",
        loadComponent: () => import("./pages/club/club.component").then(m => m.default),
        children: [
            {
                path: "partidosClub",
                loadComponent: () => import("./pages/club/club-home/club-home.component").then(m => m.default),
            },
            {
                path: "plantilla",
                loadComponent: () => import("./pages/club/plantilla/club-plantilla.component").then(m => m.default),
            },
            {
                path: "palmares",
                loadComponent: () => import("./pages/club/club-palmares/club-palmares.component").then(m => m.default),
            },
            {
                path: "competiciones",
                loadComponent: () => import("./pages/club/club-competiciones/club-competitions.component").then(m => m.default),
            }
        ]
    },
    {
        path: "compare",
        loadComponent: () => import("./pages/compare/compare.component").then(m => m.default),
    },
    {
        path: "ligues",
        loadComponent: () => import("./pages/tournaments/ligues/ligues.component").then(m => m.default),
    },
    {
        path: "ligues/:id",
        loadComponent: () => import("./pages/tournaments/ligues/league/league.component").then(m => m.default),
    },
    {
        path: "login",
        loadComponent: () => import("./pages/login/login.component").then(m => m.default),
    },
    {
        path: "match",
        loadComponent: () => import("./pages/match/match.component").then(m => m.default),
    },
    {
        path: "player",
        loadComponent: () => import("./pages/player/player.component").then(m => m.default),
    },
    {
        path: "profile",
        loadComponent: () => import("./pages/profile/profile.component").then(m => m.default),
    },
    {
        path: "tournament",
        loadComponent: () => import("./pages/tournaments/tournament/tournament.component").then(m => m.default),
    },
    {
        path:"**",
        redirectTo: "home",
    },
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    }
];
