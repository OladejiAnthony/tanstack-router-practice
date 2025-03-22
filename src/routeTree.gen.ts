/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SearchImport } from './routes/search'
import { Route as ProfileImport } from './routes/profile'
import { Route as LoginImport } from './routes/login'
import { Route as AuthenticatedImport } from './routes/_authenticated'
import { Route as IndexImport } from './routes/index'
import { Route as PokemonIndexImport } from './routes/pokemon/index'
import { Route as PokemonIdImport } from './routes/pokemon/$id'
import { Route as AuthenticatedSettingsImport } from './routes/_authenticated/settings'
import { Route as AuthenticatedDashboardImport } from './routes/_authenticated/dashboard'
import { Route as hiddenFolderFirstLevelImport } from './routes/(hidden-folder)/first-level'
import { Route as OneTwoThreeImport } from './routes/one.two.three'
import { Route as FooBarBazImport } from './routes/foo/bar/baz'
import { Route as hiddenFolderLayoutsVisibleLayoutImport } from './routes/(hidden-folder)/layouts/visibleLayout'
import { Route as hiddenFolderLayoutsHiddenLayoutImport } from './routes/(hidden-folder)/layouts/_hiddenLayout'
import { Route as hiddenFolderLayoutsVisibleLayoutFooImport } from './routes/(hidden-folder)/layouts/visibleLayout/foo'
import { Route as hiddenFolderLayoutsVisibleLayoutBarImport } from './routes/(hidden-folder)/layouts/visibleLayout/bar'
import { Route as hiddenFolderLayoutsHiddenLayoutFooImport } from './routes/(hidden-folder)/layouts/_hiddenLayout/foo'
import { Route as hiddenFolderLayoutsHiddenLayoutBarImport } from './routes/(hidden-folder)/layouts/_hiddenLayout/bar'

// Create Virtual Routes

const hiddenFolderLayoutsImport = createFileRoute('/(hidden-folder)/layouts')()

// Create/Update Routes

const SearchRoute = SearchImport.update({
  id: '/search',
  path: '/search',
  getParentRoute: () => rootRoute,
} as any)

const ProfileRoute = ProfileImport.update({
  id: '/profile',
  path: '/profile',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const AuthenticatedRoute = AuthenticatedImport.update({
  id: '/_authenticated',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const hiddenFolderLayoutsRoute = hiddenFolderLayoutsImport.update({
  id: '/(hidden-folder)/layouts',
  path: '/layouts',
  getParentRoute: () => rootRoute,
} as any)

const PokemonIndexRoute = PokemonIndexImport.update({
  id: '/pokemon/',
  path: '/pokemon/',
  getParentRoute: () => rootRoute,
} as any)

const PokemonIdRoute = PokemonIdImport.update({
  id: '/pokemon/$id',
  path: '/pokemon/$id',
  getParentRoute: () => rootRoute,
} as any)

const AuthenticatedSettingsRoute = AuthenticatedSettingsImport.update({
  id: '/settings',
  path: '/settings',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const AuthenticatedDashboardRoute = AuthenticatedDashboardImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const hiddenFolderFirstLevelRoute = hiddenFolderFirstLevelImport.update({
  id: '/(hidden-folder)/first-level',
  path: '/first-level',
  getParentRoute: () => rootRoute,
} as any)

const OneTwoThreeRoute = OneTwoThreeImport.update({
  id: '/one/two/three',
  path: '/one/two/three',
  getParentRoute: () => rootRoute,
} as any)

const FooBarBazRoute = FooBarBazImport.update({
  id: '/foo/bar/baz',
  path: '/foo/bar/baz',
  getParentRoute: () => rootRoute,
} as any)

const hiddenFolderLayoutsVisibleLayoutRoute =
  hiddenFolderLayoutsVisibleLayoutImport.update({
    id: '/visibleLayout',
    path: '/visibleLayout',
    getParentRoute: () => hiddenFolderLayoutsRoute,
  } as any)

const hiddenFolderLayoutsHiddenLayoutRoute =
  hiddenFolderLayoutsHiddenLayoutImport.update({
    id: '/_hiddenLayout',
    getParentRoute: () => hiddenFolderLayoutsRoute,
  } as any)

const hiddenFolderLayoutsVisibleLayoutFooRoute =
  hiddenFolderLayoutsVisibleLayoutFooImport.update({
    id: '/foo',
    path: '/foo',
    getParentRoute: () => hiddenFolderLayoutsVisibleLayoutRoute,
  } as any)

const hiddenFolderLayoutsVisibleLayoutBarRoute =
  hiddenFolderLayoutsVisibleLayoutBarImport.update({
    id: '/bar',
    path: '/bar',
    getParentRoute: () => hiddenFolderLayoutsVisibleLayoutRoute,
  } as any)

const hiddenFolderLayoutsHiddenLayoutFooRoute =
  hiddenFolderLayoutsHiddenLayoutFooImport.update({
    id: '/foo',
    path: '/foo',
    getParentRoute: () => hiddenFolderLayoutsHiddenLayoutRoute,
  } as any)

const hiddenFolderLayoutsHiddenLayoutBarRoute =
  hiddenFolderLayoutsHiddenLayoutBarImport.update({
    id: '/bar',
    path: '/bar',
    getParentRoute: () => hiddenFolderLayoutsHiddenLayoutRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_authenticated': {
      id: '/_authenticated'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthenticatedImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/profile': {
      id: '/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof ProfileImport
      parentRoute: typeof rootRoute
    }
    '/search': {
      id: '/search'
      path: '/search'
      fullPath: '/search'
      preLoaderRoute: typeof SearchImport
      parentRoute: typeof rootRoute
    }
    '/(hidden-folder)/first-level': {
      id: '/(hidden-folder)/first-level'
      path: '/first-level'
      fullPath: '/first-level'
      preLoaderRoute: typeof hiddenFolderFirstLevelImport
      parentRoute: typeof rootRoute
    }
    '/_authenticated/dashboard': {
      id: '/_authenticated/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof AuthenticatedDashboardImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/settings': {
      id: '/_authenticated/settings'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof AuthenticatedSettingsImport
      parentRoute: typeof AuthenticatedImport
    }
    '/pokemon/$id': {
      id: '/pokemon/$id'
      path: '/pokemon/$id'
      fullPath: '/pokemon/$id'
      preLoaderRoute: typeof PokemonIdImport
      parentRoute: typeof rootRoute
    }
    '/pokemon/': {
      id: '/pokemon/'
      path: '/pokemon'
      fullPath: '/pokemon'
      preLoaderRoute: typeof PokemonIndexImport
      parentRoute: typeof rootRoute
    }
    '/(hidden-folder)/layouts': {
      id: '/(hidden-folder)/layouts'
      path: '/layouts'
      fullPath: '/layouts'
      preLoaderRoute: typeof hiddenFolderLayoutsImport
      parentRoute: typeof rootRoute
    }
    '/(hidden-folder)/layouts/_hiddenLayout': {
      id: '/(hidden-folder)/layouts/_hiddenLayout'
      path: '/layouts'
      fullPath: '/layouts'
      preLoaderRoute: typeof hiddenFolderLayoutsHiddenLayoutImport
      parentRoute: typeof hiddenFolderLayoutsRoute
    }
    '/(hidden-folder)/layouts/visibleLayout': {
      id: '/(hidden-folder)/layouts/visibleLayout'
      path: '/visibleLayout'
      fullPath: '/layouts/visibleLayout'
      preLoaderRoute: typeof hiddenFolderLayoutsVisibleLayoutImport
      parentRoute: typeof hiddenFolderLayoutsImport
    }
    '/foo/bar/baz': {
      id: '/foo/bar/baz'
      path: '/foo/bar/baz'
      fullPath: '/foo/bar/baz'
      preLoaderRoute: typeof FooBarBazImport
      parentRoute: typeof rootRoute
    }
    '/one/two/three': {
      id: '/one/two/three'
      path: '/one/two/three'
      fullPath: '/one/two/three'
      preLoaderRoute: typeof OneTwoThreeImport
      parentRoute: typeof rootRoute
    }
    '/(hidden-folder)/layouts/_hiddenLayout/bar': {
      id: '/(hidden-folder)/layouts/_hiddenLayout/bar'
      path: '/bar'
      fullPath: '/layouts/bar'
      preLoaderRoute: typeof hiddenFolderLayoutsHiddenLayoutBarImport
      parentRoute: typeof hiddenFolderLayoutsHiddenLayoutImport
    }
    '/(hidden-folder)/layouts/_hiddenLayout/foo': {
      id: '/(hidden-folder)/layouts/_hiddenLayout/foo'
      path: '/foo'
      fullPath: '/layouts/foo'
      preLoaderRoute: typeof hiddenFolderLayoutsHiddenLayoutFooImport
      parentRoute: typeof hiddenFolderLayoutsHiddenLayoutImport
    }
    '/(hidden-folder)/layouts/visibleLayout/bar': {
      id: '/(hidden-folder)/layouts/visibleLayout/bar'
      path: '/bar'
      fullPath: '/layouts/visibleLayout/bar'
      preLoaderRoute: typeof hiddenFolderLayoutsVisibleLayoutBarImport
      parentRoute: typeof hiddenFolderLayoutsVisibleLayoutImport
    }
    '/(hidden-folder)/layouts/visibleLayout/foo': {
      id: '/(hidden-folder)/layouts/visibleLayout/foo'
      path: '/foo'
      fullPath: '/layouts/visibleLayout/foo'
      preLoaderRoute: typeof hiddenFolderLayoutsVisibleLayoutFooImport
      parentRoute: typeof hiddenFolderLayoutsVisibleLayoutImport
    }
  }
}

// Create and export the route tree

interface AuthenticatedRouteChildren {
  AuthenticatedDashboardRoute: typeof AuthenticatedDashboardRoute
  AuthenticatedSettingsRoute: typeof AuthenticatedSettingsRoute
}

const AuthenticatedRouteChildren: AuthenticatedRouteChildren = {
  AuthenticatedDashboardRoute: AuthenticatedDashboardRoute,
  AuthenticatedSettingsRoute: AuthenticatedSettingsRoute,
}

const AuthenticatedRouteWithChildren = AuthenticatedRoute._addFileChildren(
  AuthenticatedRouteChildren,
)

interface hiddenFolderLayoutsHiddenLayoutRouteChildren {
  hiddenFolderLayoutsHiddenLayoutBarRoute: typeof hiddenFolderLayoutsHiddenLayoutBarRoute
  hiddenFolderLayoutsHiddenLayoutFooRoute: typeof hiddenFolderLayoutsHiddenLayoutFooRoute
}

const hiddenFolderLayoutsHiddenLayoutRouteChildren: hiddenFolderLayoutsHiddenLayoutRouteChildren =
  {
    hiddenFolderLayoutsHiddenLayoutBarRoute:
      hiddenFolderLayoutsHiddenLayoutBarRoute,
    hiddenFolderLayoutsHiddenLayoutFooRoute:
      hiddenFolderLayoutsHiddenLayoutFooRoute,
  }

const hiddenFolderLayoutsHiddenLayoutRouteWithChildren =
  hiddenFolderLayoutsHiddenLayoutRoute._addFileChildren(
    hiddenFolderLayoutsHiddenLayoutRouteChildren,
  )

interface hiddenFolderLayoutsVisibleLayoutRouteChildren {
  hiddenFolderLayoutsVisibleLayoutBarRoute: typeof hiddenFolderLayoutsVisibleLayoutBarRoute
  hiddenFolderLayoutsVisibleLayoutFooRoute: typeof hiddenFolderLayoutsVisibleLayoutFooRoute
}

const hiddenFolderLayoutsVisibleLayoutRouteChildren: hiddenFolderLayoutsVisibleLayoutRouteChildren =
  {
    hiddenFolderLayoutsVisibleLayoutBarRoute:
      hiddenFolderLayoutsVisibleLayoutBarRoute,
    hiddenFolderLayoutsVisibleLayoutFooRoute:
      hiddenFolderLayoutsVisibleLayoutFooRoute,
  }

const hiddenFolderLayoutsVisibleLayoutRouteWithChildren =
  hiddenFolderLayoutsVisibleLayoutRoute._addFileChildren(
    hiddenFolderLayoutsVisibleLayoutRouteChildren,
  )

interface hiddenFolderLayoutsRouteChildren {
  hiddenFolderLayoutsHiddenLayoutRoute: typeof hiddenFolderLayoutsHiddenLayoutRouteWithChildren
  hiddenFolderLayoutsVisibleLayoutRoute: typeof hiddenFolderLayoutsVisibleLayoutRouteWithChildren
}

const hiddenFolderLayoutsRouteChildren: hiddenFolderLayoutsRouteChildren = {
  hiddenFolderLayoutsHiddenLayoutRoute:
    hiddenFolderLayoutsHiddenLayoutRouteWithChildren,
  hiddenFolderLayoutsVisibleLayoutRoute:
    hiddenFolderLayoutsVisibleLayoutRouteWithChildren,
}

const hiddenFolderLayoutsRouteWithChildren =
  hiddenFolderLayoutsRoute._addFileChildren(hiddenFolderLayoutsRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '': typeof AuthenticatedRouteWithChildren
  '/login': typeof LoginRoute
  '/profile': typeof ProfileRoute
  '/search': typeof SearchRoute
  '/first-level': typeof hiddenFolderFirstLevelRoute
  '/dashboard': typeof AuthenticatedDashboardRoute
  '/settings': typeof AuthenticatedSettingsRoute
  '/pokemon/$id': typeof PokemonIdRoute
  '/pokemon': typeof PokemonIndexRoute
  '/layouts': typeof hiddenFolderLayoutsHiddenLayoutRouteWithChildren
  '/layouts/visibleLayout': typeof hiddenFolderLayoutsVisibleLayoutRouteWithChildren
  '/foo/bar/baz': typeof FooBarBazRoute
  '/one/two/three': typeof OneTwoThreeRoute
  '/layouts/bar': typeof hiddenFolderLayoutsHiddenLayoutBarRoute
  '/layouts/foo': typeof hiddenFolderLayoutsHiddenLayoutFooRoute
  '/layouts/visibleLayout/bar': typeof hiddenFolderLayoutsVisibleLayoutBarRoute
  '/layouts/visibleLayout/foo': typeof hiddenFolderLayoutsVisibleLayoutFooRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof AuthenticatedRouteWithChildren
  '/login': typeof LoginRoute
  '/profile': typeof ProfileRoute
  '/search': typeof SearchRoute
  '/first-level': typeof hiddenFolderFirstLevelRoute
  '/dashboard': typeof AuthenticatedDashboardRoute
  '/settings': typeof AuthenticatedSettingsRoute
  '/pokemon/$id': typeof PokemonIdRoute
  '/pokemon': typeof PokemonIndexRoute
  '/layouts': typeof hiddenFolderLayoutsHiddenLayoutRouteWithChildren
  '/layouts/visibleLayout': typeof hiddenFolderLayoutsVisibleLayoutRouteWithChildren
  '/foo/bar/baz': typeof FooBarBazRoute
  '/one/two/three': typeof OneTwoThreeRoute
  '/layouts/bar': typeof hiddenFolderLayoutsHiddenLayoutBarRoute
  '/layouts/foo': typeof hiddenFolderLayoutsHiddenLayoutFooRoute
  '/layouts/visibleLayout/bar': typeof hiddenFolderLayoutsVisibleLayoutBarRoute
  '/layouts/visibleLayout/foo': typeof hiddenFolderLayoutsVisibleLayoutFooRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_authenticated': typeof AuthenticatedRouteWithChildren
  '/login': typeof LoginRoute
  '/profile': typeof ProfileRoute
  '/search': typeof SearchRoute
  '/(hidden-folder)/first-level': typeof hiddenFolderFirstLevelRoute
  '/_authenticated/dashboard': typeof AuthenticatedDashboardRoute
  '/_authenticated/settings': typeof AuthenticatedSettingsRoute
  '/pokemon/$id': typeof PokemonIdRoute
  '/pokemon/': typeof PokemonIndexRoute
  '/(hidden-folder)/layouts': typeof hiddenFolderLayoutsRouteWithChildren
  '/(hidden-folder)/layouts/_hiddenLayout': typeof hiddenFolderLayoutsHiddenLayoutRouteWithChildren
  '/(hidden-folder)/layouts/visibleLayout': typeof hiddenFolderLayoutsVisibleLayoutRouteWithChildren
  '/foo/bar/baz': typeof FooBarBazRoute
  '/one/two/three': typeof OneTwoThreeRoute
  '/(hidden-folder)/layouts/_hiddenLayout/bar': typeof hiddenFolderLayoutsHiddenLayoutBarRoute
  '/(hidden-folder)/layouts/_hiddenLayout/foo': typeof hiddenFolderLayoutsHiddenLayoutFooRoute
  '/(hidden-folder)/layouts/visibleLayout/bar': typeof hiddenFolderLayoutsVisibleLayoutBarRoute
  '/(hidden-folder)/layouts/visibleLayout/foo': typeof hiddenFolderLayoutsVisibleLayoutFooRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | ''
    | '/login'
    | '/profile'
    | '/search'
    | '/first-level'
    | '/dashboard'
    | '/settings'
    | '/pokemon/$id'
    | '/pokemon'
    | '/layouts'
    | '/layouts/visibleLayout'
    | '/foo/bar/baz'
    | '/one/two/three'
    | '/layouts/bar'
    | '/layouts/foo'
    | '/layouts/visibleLayout/bar'
    | '/layouts/visibleLayout/foo'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | ''
    | '/login'
    | '/profile'
    | '/search'
    | '/first-level'
    | '/dashboard'
    | '/settings'
    | '/pokemon/$id'
    | '/pokemon'
    | '/layouts'
    | '/layouts/visibleLayout'
    | '/foo/bar/baz'
    | '/one/two/three'
    | '/layouts/bar'
    | '/layouts/foo'
    | '/layouts/visibleLayout/bar'
    | '/layouts/visibleLayout/foo'
  id:
    | '__root__'
    | '/'
    | '/_authenticated'
    | '/login'
    | '/profile'
    | '/search'
    | '/(hidden-folder)/first-level'
    | '/_authenticated/dashboard'
    | '/_authenticated/settings'
    | '/pokemon/$id'
    | '/pokemon/'
    | '/(hidden-folder)/layouts'
    | '/(hidden-folder)/layouts/_hiddenLayout'
    | '/(hidden-folder)/layouts/visibleLayout'
    | '/foo/bar/baz'
    | '/one/two/three'
    | '/(hidden-folder)/layouts/_hiddenLayout/bar'
    | '/(hidden-folder)/layouts/_hiddenLayout/foo'
    | '/(hidden-folder)/layouts/visibleLayout/bar'
    | '/(hidden-folder)/layouts/visibleLayout/foo'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AuthenticatedRoute: typeof AuthenticatedRouteWithChildren
  LoginRoute: typeof LoginRoute
  ProfileRoute: typeof ProfileRoute
  SearchRoute: typeof SearchRoute
  hiddenFolderFirstLevelRoute: typeof hiddenFolderFirstLevelRoute
  PokemonIdRoute: typeof PokemonIdRoute
  PokemonIndexRoute: typeof PokemonIndexRoute
  hiddenFolderLayoutsRoute: typeof hiddenFolderLayoutsRouteWithChildren
  FooBarBazRoute: typeof FooBarBazRoute
  OneTwoThreeRoute: typeof OneTwoThreeRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AuthenticatedRoute: AuthenticatedRouteWithChildren,
  LoginRoute: LoginRoute,
  ProfileRoute: ProfileRoute,
  SearchRoute: SearchRoute,
  hiddenFolderFirstLevelRoute: hiddenFolderFirstLevelRoute,
  PokemonIdRoute: PokemonIdRoute,
  PokemonIndexRoute: PokemonIndexRoute,
  hiddenFolderLayoutsRoute: hiddenFolderLayoutsRouteWithChildren,
  FooBarBazRoute: FooBarBazRoute,
  OneTwoThreeRoute: OneTwoThreeRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_authenticated",
        "/login",
        "/profile",
        "/search",
        "/(hidden-folder)/first-level",
        "/pokemon/$id",
        "/pokemon/",
        "/(hidden-folder)/layouts",
        "/foo/bar/baz",
        "/one/two/three"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_authenticated": {
      "filePath": "_authenticated.tsx",
      "children": [
        "/_authenticated/dashboard",
        "/_authenticated/settings"
      ]
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/profile": {
      "filePath": "profile.tsx"
    },
    "/search": {
      "filePath": "search.tsx"
    },
    "/(hidden-folder)/first-level": {
      "filePath": "(hidden-folder)/first-level.tsx"
    },
    "/_authenticated/dashboard": {
      "filePath": "_authenticated/dashboard.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/settings": {
      "filePath": "_authenticated/settings.tsx",
      "parent": "/_authenticated"
    },
    "/pokemon/$id": {
      "filePath": "pokemon/$id.tsx"
    },
    "/pokemon/": {
      "filePath": "pokemon/index.tsx"
    },
    "/(hidden-folder)/layouts": {
      "filePath": "(hidden-folder)/layouts",
      "children": [
        "/(hidden-folder)/layouts/_hiddenLayout",
        "/(hidden-folder)/layouts/visibleLayout"
      ]
    },
    "/(hidden-folder)/layouts/_hiddenLayout": {
      "filePath": "(hidden-folder)/layouts/_hiddenLayout.tsx",
      "parent": "/(hidden-folder)/layouts",
      "children": [
        "/(hidden-folder)/layouts/_hiddenLayout/bar",
        "/(hidden-folder)/layouts/_hiddenLayout/foo"
      ]
    },
    "/(hidden-folder)/layouts/visibleLayout": {
      "filePath": "(hidden-folder)/layouts/visibleLayout.tsx",
      "parent": "/(hidden-folder)/layouts",
      "children": [
        "/(hidden-folder)/layouts/visibleLayout/bar",
        "/(hidden-folder)/layouts/visibleLayout/foo"
      ]
    },
    "/foo/bar/baz": {
      "filePath": "foo/bar/baz.tsx"
    },
    "/one/two/three": {
      "filePath": "one.two.three.tsx"
    },
    "/(hidden-folder)/layouts/_hiddenLayout/bar": {
      "filePath": "(hidden-folder)/layouts/_hiddenLayout/bar.tsx",
      "parent": "/(hidden-folder)/layouts/_hiddenLayout"
    },
    "/(hidden-folder)/layouts/_hiddenLayout/foo": {
      "filePath": "(hidden-folder)/layouts/_hiddenLayout/foo.tsx",
      "parent": "/(hidden-folder)/layouts/_hiddenLayout"
    },
    "/(hidden-folder)/layouts/visibleLayout/bar": {
      "filePath": "(hidden-folder)/layouts/visibleLayout/bar.tsx",
      "parent": "/(hidden-folder)/layouts/visibleLayout"
    },
    "/(hidden-folder)/layouts/visibleLayout/foo": {
      "filePath": "(hidden-folder)/layouts/visibleLayout/foo.tsx",
      "parent": "/(hidden-folder)/layouts/visibleLayout"
    }
  }
}
ROUTE_MANIFEST_END */
