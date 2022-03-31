interface Distance {
  distance: number;
  distanceToString: string;
}

export const DistanceArr: Distance[] = [
  {
    distance: 500,
    distanceToString: "전체",
  },
  {
    distance: 0.5,
    distanceToString: "500m",
  },
  {
    distance: 1,
    distanceToString: "1km",
  },
  {
    distance: 5,
    distanceToString: "5km",
  },
  {
    distance: 10,
    distanceToString: "10km",
  },
];
