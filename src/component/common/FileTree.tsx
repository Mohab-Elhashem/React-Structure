import React from 'react';
import type { FileNode } from '../../types/fileTree.types';

interface FileTreeProps {
    data: FileNode[];
}

export const FileTree: React.FC<FileTreeProps> = ({ data }) => {
    return (
        <ul className="pl-4 border-l border-slate-700 space-y-1 font-mono text-sm text-slate-300">
            {data.map((node) => (
                <li key={node.id} className="py-0.5">
                    <div className="flex items-center gap-2">
                        <span>{node.type === 'folder' ? '📁' : '📄'}</span>
                        <span>{node.name}</span>
                    </div>
                    {node.children && node.children.length > 0 && (
                        <FileTree data={node.children} />
                    )}
                </li>
            ))}
        </ul>
    );
};