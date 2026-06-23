import { useEffect } from "react";
import { SITE_COPY } from "../data/site";

export default function usePageTitle(title) {
  useEffect(() => {
    const previous = document.title;
    document.title = title ? `${title} | ${SITE_COPY.brandFull}` : SITE_COPY.brandFull;
    return () => {
      document.title = previous;
    };
  }, [title]);
}
