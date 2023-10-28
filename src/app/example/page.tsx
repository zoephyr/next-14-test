
import { Suspense } from "react";



export default async function Home() {
  return (
    <main>
      <p>This is such a cool test</p>
      <Suspense fallback={<p>Loading...</p>}>
        {/* <AsyncDataFun /> */}
      </Suspense>
    </main>
  );
}