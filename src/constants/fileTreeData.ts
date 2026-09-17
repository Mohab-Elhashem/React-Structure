import type { FileNode } from '../types/fileTree.types';

export const FileTreeData: FileNode[] = [
    {
        id: '1',
        name: 'src',
        type: 'folder',
        children: [
            {
                id: '1-1',
                name: 'api',
                type: 'folder',
                children: [
                    { id: '1-1-1', name: 'axios.ts', type: 'file' },
                    { id: '1-1-2', name: 'auth.api.ts', type: 'file' },
                    { id: '1-1-3', name: 'endpoint.ts', type: 'file' },
                    { id: '1-1-4', name: 'users.api.ts', type: 'file' },
                ],
            },
            {
                id: '1-2',
                name: 'components',
                type: 'folder',
                children: [
                    { id: '1-2-1', name: 'common', type: 'folder' , children:[
                        {id: '1-2-1-1', name: 'EmptyState.tsx', type: 'file'},
                        {id: '1-2-1-2', name: 'ErrorBoundary.tsx', type: 'file'},
                        {id: '1-2-1-3', name: 'FileTree.tsx', type: 'file'},
                        {id: '1-2-1-4', name: 'Pagination.tsx', type: 'file'},
                        {id: '1-2-1-5', name: 'ProtectedRoute.tsx', type: 'file'},
                    ]},
                    { id: '1-2-2', name: 'layout', type: 'folder', children:[
                        {id: '1-2-2-1', name: 'Footer.tsx', type: 'file'},
                        {id: '1-2-2-2', name: 'Header.tsx', type: 'file'},
                        {id: '1-2-2-3', name: 'MainLayout.tsx', type: 'file'},
                        {id: '1-2-2-4', name: 'Navbar.tsx', type: 'file'},
                        {id: '1-2-2-5', name: 'SideBar.tsx', type: 'file'},
                    ]},
                    { id: '1-2-3', name: 'providers', type: 'folder', children:[
                        {id: '1-2-3-1', name: 'AppProvider.tsx', type: 'file'},
                        {id: '1-2-3-2', name: 'AuthProvider.tsx', type: 'file'},
                        {id: '1-2-3-3', name: 'QueryProvider.tsx', type: 'file'},
                        {id: '1-2-3-4', name: 'ThemeProvider.tsx', type: 'file'},
                    ] },
                    { id: '1-2-4', name: 'skeleton', type: 'folder', children:[
                        {id: '1-2-4-1', name: 'CardSkeleton.tsx', type: 'file'},
                        {id: '1-2-4-2', name: 'LoadingSkeleton.tsx', type: 'file'},
                        {id: '1-2-4-3', name: 'TableSkeleton.tsx', type: 'file'},
                    ]},
                    { id: '1-2-5', name: 'ui', type: 'folder', children:[
                        {id: '1-2-5-1', name: 'Button.tsx', type: 'file'},
                        {id: '1-2-5-2', name: 'Badge.tsx', type: 'file'},
                        {id: '1-2-5-3', name: 'Card.tsx', type: 'file'},
                        {id: '1-2-5-4', name: 'Input.tsx', type: 'file'},
                        {id: '1-2-5-5', name: 'Modal.tsx', type: 'file'},
                        {id: '1-2-5-6', name: 'Select.tsx', type: 'file'},
                    ] },
                ],
            },
            {
                id: '1-3',
                name: 'assets',
                type: 'folder',
                children: [
                    { id: '1-3-1', name: 'fonts', type: 'folder' , children:[
                        {id: '1-3-1-1', name: 'Cairo-Regular.ttf', type: 'file'}
                    ]},
                    { id: '1-3-2', name: 'icons', type: 'folder' , children:[
                        {id: '1-3-1-2', name: 'user-icon.svg', type: 'file'}
                    ]},
                    { id: '1-3-3', name: 'images', type: 'folder' , children:[
                        {id: '1-3-1-3', name: 'logo.svg', type: 'file'}
                    ]},
                ],
            },
            {
                id: '1-4',
                name: 'constants',
                type: 'folder',
                children: [
                    { id: '1-4-1', name: 'config.ts', type: 'file' },
                    { id: '1-4-2', name: 'fileTreeData.ts', type: 'file' },
                    { id: '1-4-3', name: 'roles.ts', type: 'file' },
                    { id: '1-4-4', name: 'routes.ts', type: 'file' },
                ],
            },
            {
                id: '1-5',
                name: 'hooks',
                type: 'folder',
                children: [
                    { id: '1-5-1', name: 'useAuth.ts', type: 'file' },
                    { id: '1-5-2', name: 'useDebounce.ts', type: 'file' },
                    { id: '1-5-3', name: 'useLocalStorage.ts', type: 'file' },
                    { id: '1-5-4', name: 'useOnClickOutside.ts', type: 'file' },
                ],
            },
            {
                id: '1-6',
                name: 'i18n',
                type: 'folder',
                children: [
                    { id: '1-6-1', name: 'ar.json', type: 'file' },
                    { id: '1-6-2', name: 'en.json', type: 'file' },
                    { id: '1-6-3', name: 'config.ts', type: 'file' },
                ],
            },
            {
                id: '1-7',
                name: 'pages',
                type: 'folder',
                children: [
                    { id: '1-7-1', name: 'About.tsx', type: 'file' },
                    { id: '1-7-2', name: 'Home.tsx', type: 'file' },
                    { id: '1-7-3', name: 'Login.tsx', type: 'file' },
                    { id: '1-7-4', name: 'NotFound.tsx', type: 'file' },
                    { id: '1-7-5', name: 'DAshboard.tsx', type: 'file' },
                ],
            },
            {
                id: '1-8',
                name: 'schemas',
                type: 'folder',
                children: [
                    { id: '1-8-1', name: 'auth.schema.ts', type: 'file' },
                    { id: '1-8-2', name: 'user.schema.ts', type: 'file' },
                ],
            },
            {
                id: '1-9',
                name: 'store',
                type: 'folder',
                children: [
                    { id: '1-9-1', name: 'auth.slice.ts', type: 'file' },
                    { id: '1-9-2', name: 'index.ts', type: 'file' },
                    { id: '1-9-3', name: 'theme.slice.ts', type: 'file' },
                ],
            },
            {
                id: '1-10',
                name: 'types',
                type: 'folder',
                children: [
                    { id: '1-10-1', name: 'api.types.ts', type: 'file' },
                    { id: '1-10-2', name: 'auth.types.ts', type: 'file' },
                    { id: '1-10-3', name: 'common.types.ts', type: 'file' },
                    { id: '1-10-4', name: 'fileTree.types.ts', type: 'file' },
                    { id: '1-10-5', name: 'user.types.ts', type: 'file' },
                ],
            },
            {
                id: '1-11',
                name: 'utils',
                type: 'folder',
                children: [
                    { id: '1-11-1', name: 'formatCurrency.ts', type: 'file' },
                    { id: '1-11-2', name: 'formatData.ts', type: 'file' },
                    { id: '1-11-3', name: 'validateEmail.ts', type: 'file' },
                ],
            },
            {
                id: '1-12',
                name: 'App.tsx',
                type: 'file',
            },
            {
                id: '1-133',
                name: 'index.css',
                type: 'file',
            },
            {
                id: '1-14',
                name: 'main.tsx',
                type: 'file',
            },
        ],
    },
];