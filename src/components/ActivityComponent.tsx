import * as React from 'react';

const ActivityComponent: React.VFC = () => {
  return (
    <>
      <div className="py-2">
        <div className="flex justify-between gap-1">
          <a className="flex" href="#">
            <img
              className="object-cover max-w-full rounded-tl-lg rounded-bl-lg"
              src="../../../images/profile/activity-11.jpg"
            />
          </a>
          <a className="flex" href="#">
            <img
              className="object-cover max-w-full rounded-tr-lg rounded-br-lg"
              src="../../../images/profile/activity-12.png"
            />
          </a>
        </div>
      </div>

      <div className="flex gap-1 py-2">
        <div className="flex flex-col flex-1 gap-1">
          <a className="flex h-2/4" href="#">
            <img
              className="object-cover max-w-full rounded-tl-lg"
              src="../../../images/profile/activity-07.JPG"
            />
          </a>
          <a className="flex h-2/4" href="#">
            <img
              className="object-cover max-w-full rounded-bl-lg"
              src="../../../images/profile/activity-06.JPG"
            />
          </a>
        </div>
        <div className="flex flex-col flex-1 gap-1">
          <a className="flex h-full" href="#">
            <img
              className="object-contain max-w-full rounded-tr-lg rounded-br-lg"
              src="../../../images/profile/activity-03.jpg"
            />
          </a>
        </div>
      </div>

      <div className="py-2">
        <div className="flex justify-between gap-1 mb-1">
          <a className="flex" href="#">
            <img
              className="object-cover rounded-tl-lg"
              src="../../../images/profile/activity-10.jpg"
            />
          </a>
          <a className="flex" href="#">
            <img
              className="object-cover max-w-full"
              src="../../../images/profile/activity-08.jpg"
            />
          </a>
          <a className="flex" href="#">
            <img
              className="object-cover max-w-full rounded-tr-lg"
              src="../../../images/profile/activity-09.jpg"
            />
          </a>
        </div>
        <div className="flex justify-between gap-1">
          <a className="flex" href="#">
            <img
              className="object-cover max-w-full rounded-bl-lg"
              src="../../../images/profile/activity-01.jpg"
            />
          </a>
          <a className="flex" href="#">
            <img
              className="object-cover max-w-full"
              src="../../../images/profile/activity-02.jpeg"
            />
          </a>
          <a className="flex" href="#">
            <img
              className="object-cover max-w-full rounded-br-lg"
              src="../../../images/profile/activity-04.jpg"
            />
          </a>
        </div>
      </div>
    </>
  );
};
export default ActivityComponent;
