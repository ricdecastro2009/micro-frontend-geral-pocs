
import React from 'react';
//const ButtonStatement = React.lazy(() => import('Statement/ButtonStatement'));


function Home () {
    return(
        <>
            <h2>
                Home Shell APP
            </h2>
            <React.Suspense fallback='Loading Button Statament'>
                  {/* <ButtonStatement></ButtonStatement>   */}
            </React.Suspense>
        </>
    )
}

export default Home