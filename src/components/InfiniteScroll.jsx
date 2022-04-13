import { useInfiniteQuery } from "react-query";
import useInfinite from "../hooks/useInfinite";
import User from "./User";

const fetchUsers = async ({ pageParam = 1 }) => {
  const res = await fetch(
    `https://randomuser.me/api/?page=${pageParam}&results=10`
  );
  return res.json();
};

const InfiniteScroll = () => {
  const {
    isLoading,
    isError,
    error,
    data,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery(["colors"], fetchUsers, {
    getNextPageParam: (lastPage, pages) => {
      return lastPage.info.page + 1;
    },
  });

  // this ref needs to be attached to the element that we want to be the trigger
  // when it appears in the viewport, this function fires
  // typically put it on the Load More Button
  const { loadMoreRef } = useInfinite({ fetchNextPage });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  //const [scrollPosition, setScrollPosition] = useState(0);
  //   const handleScroll = () => {
  //     const position = window.pageYOffset;
  //     setScrollPosition(position);
  //   };
  //   useEffect(() => {
  //     window.addEventListener("scroll", handleScroll);

  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []);

  //   const handleScrollOne = (e) => {
  //       console.log('scrolling')
  //     const bottom =
  //       e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
  //     if (bottom) {
  //       console.log("reached bottom");
  //     }
  //   };

  return (
    <div>
      <h2>Infinite Scroll View</h2>
      <div className="card">
        {data.pages.map((page) =>
          page.results.map((user, index) => <User key={index} user={user} />)
        )}
      </div>
      <div className="btn-container">
        {isFetchingNextPage ? (
          "Fetching Next Page..."
        ) : (
          <button ref={loadMoreRef} onClick={fetchNextPage}>
            Load More
          </button>
        )}
      </div>
      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
    </div>
  );
};

export default InfiniteScroll;
