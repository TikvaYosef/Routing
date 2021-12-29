import React, { useState } from 'react';
import Boy from '../boy/Boy';
import KindergartenTeacher from '../KindergartenTeacher/KindergartenTeacher';
import Parent from '../parent/Parent';


function HomePage() {
    const [page, setPage] = useState(0);

    // const Rounting = () => {
    //     switch (page) {
    //         case 1:
    //             return <Boy />

    //         case 2:
    //             return <KindergartenTeacher />

    //         case 3:
    //             return <Parent />
    //             default:
    //                 return <div></div>
               
    //     }
    // };


    return (
        <div>
            {/* <button onClick={()=>setPage(1)}>BOY</button>
            <button onClick={()=>setPage(2)}>KindergartenTeacher</button>
            <button onClick={()=>setPage(3)}>PARENT</button> */}

            {/* <Routing/> */}
        </div>

    );
}

export default HomePage;