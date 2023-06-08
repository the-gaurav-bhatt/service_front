// 'use client';
import React, { Suspense } from 'react';
import ProfileSpinner from './components/spinners/ProfileSpinner';
import UpcomingCourses from './components/courses/UpcomingCourses/UpcomingCourses';
import FeatureList from './components/courses/UpcomingCourses/FeaturedList';
import Hero1 from './components/hero/Hero1';
// import SuccessMessage from './components/spinners/SuccessMessage';
// import { useContext } from 'react';
// import { userContext } from './userProvider';
export default function Home() {
  // const { user } = useContext(userContext);
  // const [loggedIn, setLoggedIn] = useState(false);
  // useEffect(() => {
  //   if (user?._id) {
  //     setLoggedIn(true);
  //     setTimeout(() => {
  //       setLoggedIn(false);
  //     }, 3000);
  //   }
  // }, []);
  return (
    <Suspense fallback={<ProfileSpinner />}>
      <div className="">
        {/* {loggedIn && (
          <SuccessMessage message={'You Have logged in Successfully'} />
        )} */}
        <Hero1 />

        <div className="py-2 mb-4 md:mx-12 lg:mx-24">
          <UpcomingCourses />
          <FeatureList />
        </div>
      </div>
    </Suspense>
  );
}
