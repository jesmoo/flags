import React from 'react';
import SkeletonListMap from './SkeletonListMap';
import ListMap from './ListMap';

const ContainerFlags = ({ auxData, data }) => {
  return (
    <section className="container__list">
      {auxData.loading ? (
        <>
          <SkeletonListMap />
          <SkeletonListMap />
          <SkeletonListMap />
          <SkeletonListMap />
          <SkeletonListMap />
          <SkeletonListMap />
          <SkeletonListMap />
          <SkeletonListMap />
        </>
      ) : (
        data && data.map((item, id) => <ListMap key={id} {...item} />)
      )}
    </section>
  );
};

export default ContainerFlags;
