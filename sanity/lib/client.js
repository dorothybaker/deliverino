import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "../env";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "sk7aOKLScF9eR5zWNBcJ1Ke4cIlHfZ8PAMk5mMF29x8ZxKttm5l8J415ZxgjowAjlaajhvOhNQfIf1dYYQuBllBEj5L9PyclteHvXSBAYF7QqIgPT6Iorhcg3DcILDnLgUNp3KF5M1fhckh1d45IkhYQZNSIppDsvOO2VMo8LTfhww9MhD0B",
});
