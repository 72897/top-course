import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  function clickHandler() {
    if (likedCourses.includes(course.id)) {
      //pehle se like hua pda hai
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("liked removed");
    } else {
      //pehle se like nhi hai
      if (likedCourses.length === 0) {
        setLikedCourses([course.id]);
      } else {
        //non empty se pehle
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("liked successfully");
    }
  }

  return (
    <div className="bg-bgDark w-[300px]  bg-opacity-80 rounded-md overflow-hidden">
      <div className="relative ">
        <img src={props.course.image.url}></img>
      </div>
      <div className="rounded-full w-[40px] h-[40px] bg-white absolute  grid place-items-center ">
        <button onClick={clickHandler}>
          {likedCourses.includes(course.id) ? (
            <FcLike fontSize="1.75rem" />
          ) : (
            <FcLikePlaceholder fontSize="1.75rem" />
          )}
        </button>
      </div>
      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">
          {props.course.title}
        </p>
        <p className="mt-2 text-white">
          {props.course.description.length > 100
            ? course.description.substr(0, 100) + "..."
            : course.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
