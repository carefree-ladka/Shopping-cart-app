import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBanners } from "../features/bannersSlice";

function Carousel() {
  const [count, setCount] = useState(0);
  const { banners, loading, error } = useSelector((state) => state.banners);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBanners());
  }, [dispatch]);

  const onDotClick = (idx) => setCount(idx);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  return (
    <>
      <div className="carousel">
        <div>
          <img
            src={banners[count]?.bannerImageUrl}
            alt={banners[count]?.bannerImageUrl}
            height={200}
            width={450}
            style={{ objectFit: "contain" }}
          />

          <div className="dots">
            {Array(banners.length)
              .fill("")
              .map((_, idx) => (
                <span key={idx} className="dot" onClick={() => onDotClick(idx)} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
