import { Suspense } from 'react';
import List from './list';
//import Banner from './banner';
//import Ads from './ads';

export default function Page() {
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <div className="bg-gray-200 dark:bg-gray-700">
        <List />
      </div>
    </Suspense>
    </>
  );
}
