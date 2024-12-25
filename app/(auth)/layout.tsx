import React from 'react'


export default function AuthLayout({ children }: {
    readonly children: React.ReactNode;
  }) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        {children} 
        {/* Las páginas pertenecientes a esta ruta se añaden de forma automática como 'children' */}
      </div>
    );
  }