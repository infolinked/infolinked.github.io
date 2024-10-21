import { Suspense } from 'react';

interface ContainerProps {
  children: React.ReactNode;
}


export default function Container({ children }: ContainerProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="container mx-auto p-4" >
          {children}
      </div>
    </Suspense>
  )
} 