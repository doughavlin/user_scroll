import { useInView } from "react-cool-inview";

const useInfinite = ({ fetchNextPage }) => {
  const { observe } = useInView({
    onEnter: () => {
      fetchNextPage();
    },
  });

  return {
    loadMoreRef: observe,
  };
};

export default useInfinite;
