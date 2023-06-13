import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const StarRating = ({ rating }) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    //GPT ofc
    <div className=" flex text-sm gap-1 flex-wrap justify-center">
      {[...Array(fullStars)].map((_, index) => {
        const starValue = index + 1;
        return <FaStar key={index} color="#ffc107" />;
      })}
      {hasHalfStar && <FaStarHalfAlt color="#ffc107" />}
      {[...Array(totalStars - fullStars - (hasHalfStar ? 1 : 0))].map(
        (_, index) => {
          const starValue = fullStars + (hasHalfStar ? 1 : 0) + index + 1;
          return (
            <FaStar
              key={index + fullStars + (hasHalfStar ? 1 : 0)}
              color="#e4e5e9"
            />
          );
        }
      )}
    </div>
  );
};

export default StarRating;

//   return (
//     <div>
//       <div className=" flex">
//         {[...Array(totalStars)].map((_, index) => {
//           const starValue = index + 1;
//           return (
//             <FaStar
//               key={index}
//               color={starValue <= rating ? "#ffc107" : "#e4e5e9"}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };
