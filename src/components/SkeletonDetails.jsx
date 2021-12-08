import React from 'react';
import '../styles/skeletons/SkeletonDetails.css';

const SkeletonDetails = () => {
  return (
    <>
      <div
        alt="flag"
        className="main__flag item-Skeleton main__flag-Skeleton"
      />
      <h1 className="main__country item-Skeleton main__country-skeleton"></h1>
      <section className="Maincontain__text Maincontain__text-Skeleton">
        <div className="item-Skeleton text-Skeleton" title="Native Name" />
        <div className="item-Skeleton text-Skeleton" title="Capital" />
        <div className="item-Skeleton text-Skeleton" title="Region" />
        <div className="item-Skeleton text-Skeleton" title="Subregion" />
        <div className="item-Skeleton text-Skeleton" title="Subregion" />
        <div className="item-Skeleton text-Skeleton" title="Subregion" />
      </section>
    </>
  );
};

export default SkeletonDetails;
