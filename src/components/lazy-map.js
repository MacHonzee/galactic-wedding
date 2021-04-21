import { useState } from "react";
import useIntersect from "./use-intersect";

function LazyMap() {
  const [loaded, setLoaded] = useState(false);
  const [ref, entry] = useIntersect({});

  if (!loaded && entry.isIntersecting) {
    setLoaded(true);
  }

  return (
    <div ref={ref} className={"embed-responsive embed-responsive-4by3 shadow"}>
      {loaded && (
        <iframe
          title={"mapy-cz"}
          className={"embed-responsive-item"}
          style={{ border: "none" }}
          src="https://frame.mapy.cz/s/gurelelaha"
          frameBorder="0"
        />
      )}
    </div>
  );
}

export default LazyMap;
