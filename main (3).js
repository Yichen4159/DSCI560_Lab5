import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import Overlay from 'ol/Overlay.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';
import {fromLonLat, toLonLat} from 'ol/proj.js';
import {toStringHDMS} from 'ol/coordinate.js';

const layer = new TileLayer({
  source: new OSM(),
});

const map = new Map({
  layers: [layer],
  target: 'map',
  view: new View({
    center: [0, 0],
    zoom: 6,
  }),
});

const data = {
  Latitude: [
    47.761754, 47.819371, 47.797499, 47.784166, 47.739902, 47.739899, 47.730108,
    47.810918, 47.784412, 47.795107, 47.726358, 47.821291, 47.807544, 47.745534,
    47.742482, 48.356754, 48.313052, 48.302505, 48.390889, 48.392563, 48.37684,
    48.326461, 48.305767, 48.364423, 48.340015,
  ],
  Longitude: [
    -103.44106, -103.428976, -103.406924, -103.416205, -103.430277, -103.398215,
    -103.445451, -103.430186, -103.422764, -103.413793, -103.380882,
    -103.439433, -103.407977, -103.400159, -103.454755, -103.530196,
    -103.492882, -103.538961, -103.451468, -103.516522, -103.476148,
    -103.511229, -103.490393, -103.487729, -103.523915,
  ],
};

// Convert the data into an array of [longitude, latitude] pairs
const positions = data.Latitude.map((lat, index) => [
  data.Longitude[index],
  lat,
]);

// Iterate over positions to create and add markers
positions.forEach((coords) => {
  const pos = fromLonLat(coords);

  // Dynamically create a marker element
  const markerElement = document.createElement('div');
  markerElement.className = 'marker';
  markerElement.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="blue" width="18px" height="18px"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/></svg>'; // SVG marker

  // Create an overlay for the marker
  const marker = new Overlay({
    position: pos,
    element: markerElement,
    stopEvent: false,
  });

  // Add the overlay to the map
  map.addOverlay(marker);
});
// Popup showing the position where is clicked
const popup = new Overlay({
  element: document.getElementById('popup'),
});
map.addOverlay(popup);

const wellsData = [
  {
    API: '33-053-04853',
    'Well Name': 'TALLAHASSEE 3-16H',
    'Lease Name': 'CONTINENTAL RESOURCES, INC.',
    Location: 'McKenzie County, ND',
    Operator: 'CONTINENTAL RESOURCES, INC.',
    'Well Status': 'Active',
    'Well Type': 'Oil & Gas',
    'Township Range Section': '153 N 101 W 16',
    'Closest City': 'Williston',
    'Oil Produced (as of Dec 2023)': 478,
    'Gas Produced (as of Dec 2023)': 828,
    Latitude: 47.761754,
    Longitude: -103.44106,
  },
  {
    API: '33-053-05924',
    'Well Name': 'CHALMERS 5301 44-24 2TR',
    'Lease Name': 'OASIS PETROLEUM NORTH AMERICA LLC',
    Location: 'McKenzie County, ND',
    Operator: 'OASIS PETROLEUM NORTH AMERICA LLC',
    'Well Status': 'Active',
    'Well Type': 'Oil & Gas',
    'Township Range Section': '153 N 101 W 24',
    'Closest City': 'Williston',
    'Oil Produced (as of Dec 2023)': 338,
    'Gas Produced (as of Dec 2023)': 3200,
    Latitude: 47.819371,
    Longitude: -103.428976,
  },
  {
    API: '33-053-06549',
    'Well Name': 'LEWIS FEDERAL 5300 11-31 2B',
    'Lease Name': 'OASIS PETROLEUM NORTH AMERICA LLC',
    Location: 'McKenzie County, ND',
    Operator: 'OASIS PETROLEUM NORTH AMERICA LLC',
    'Well Status': 'Active',
    'Well Type': 'Oil & Gas',
    'Township Range Section': '153 N 100 W 31',
    'Closest City': 'Williston',
    'Oil Produced (as of Dec 2023)': 1500,
    'Gas Produced (as of Dec 2023)': 7100,
    Latitude: 47.797499,
    Longitude: -103.406924,
  },
  {
    API: '33-105-02720',
    'Well Name': 'ATLANTA 13-6H',
    'Lease Name': 'CONTINENTAL RESOURCES, INC.',
    Location: 'Williams County, ND',
    Operator: 'CONTINENTAL RESOURCES, INC.',
    'Well Status': 'Active',
    'Well Type': 'Oil & Gas',
    'Township Range Section': '153 N 101 W 6',
    'Closest City': 'Williston',
    'Oil Produced (as of Dec 2023)': 708,
    'Gas Produced (as of Dec 2023)': 1100,
    Latitude: 47.784166,
    Longitude: -103.416205,
  },
  {
    API: '33-105-02731',
    'Well Name': 'ATLANTA 2-6H',
    'Lease Name': 'CONTINENTAL RESOURCES, INC.',
    Location: 'Williams County, ND',
    Operator: 'CONTINENTAL RESOURCES, INC.',
    'Well Status': 'Active',
    'Well Type': 'Oil & Gas',
    'Township Range Section': '153 N 101 W 6',
    'Closest City': 'Williston',
    'Oil Produced (as of Dec 2023)': 539,
    'Gas Produced (as of Dec 2023)': 857,
    Latitude: 47.739902,
    Longitude: -103.430277,
  },
  {
    API: '33-105-02723',
    'Well Name': 'ATLANTA FEDERAL 10-6H',
    'Lease Name': 'CONTINENTAL RESOURCES, INC.',
    Location: 'Williams County, ND',
    Operator: 'CONTINENTAL RESOURCES, INC.',
    'Well Status': 'Active',
    'Well Type': 'Oil & Gas',
    'Township Range Section': '153 N 101 W 6',
    'Closest City': 'Williston',
    'Oil Produced (as of Dec 2023)': 358,
    'Gas Produced (as of Dec 2023)': 642,
    Latitude: 47.739899,
    Longitude: -103.398215,
  },
  {
    API: '33-053-04856',
    'Well Name': 'COLUMBUS FEDERAL 3-16H',
    'Lease Name': 'CONTINENTAL RESOURCES, INC.',
    Location: 'McKenzie County, ND',
    Operator: 'CONTINENTAL RESOURCES, INC.',
    'Well Status': 'Active',
    'Well Type': 'Oil & Gas',
    'Township Range Section': '153 N 101 W 16',
    'Closest City': 'Williston',
    'Oil Produced (as of Dec 2023)': 676,
    'Gas Produced (as of Dec 2023)': 746,
    Latitude: 47.730108,
    Longitude: -103.445451,
  },
  {
    API: '33-105-02729',
    'Well Name': 'ATLANTA 4-6H',
    'Lease Name': 'CONTINENTAL RESOURCES, INC.',
    Location: 'Williams County, ND',
    Operator: 'CONTINENTAL RESOURCES, INC.',
    'Well Status': 'Active',
    'Well Type': 'Oil & Gas',
    'Township Range Section': '153 N 101 W 6',
    'Closest City': 'Williston',
    'Oil Produced (as of Dec 2023)': 348,
    'Gas Produced (as of Dec 2023)': 627,
    Latitude: 47.810918,
    Longitude: -103.430186,
  },
  {
    API: '33-053-06011',
    'Well Name': 'CHALMERS 5301 44-24 4T2R',
    'Lease Name': 'OASIS PETROLEUM NORTH AMERICA LLC',
    Location: 'McKenzie County, ND',
    Operator: 'OASIS PETROLEUM NORTH AMERICA LLC',
    'Well Status': 'Inactive',
    'Well Type': 'Oil & Gas',
    'Township Range Section': '153 N 101 W 24',
    'Closest City': 'Williston',
    'Oil Produced (as of Dec 2023)': 0,
    'Gas Produced (as of Dec 2023)': 0,
    Latitude: 47.784412,
    Longitude: -103.422764,
  },
  {
    API: '33-053-03911',
    'Well Name': 'YUKON 5301 41-12T',
    'Lease Name': 'OASIS PETROLEUM NORTH AMERICA LLC',
    Location: 'McKenzie County, ND',
    Operator: 'OASIS PETROLEUM NORTH AMERICA LLC',
    'Well Status': 'Active',
    'Well Type': 'Oil & Gas',
    'Township Range Section': '153 N 101 W 12',
    'Closest City': 'Williston',
    'Oil Produced (as of Dec 2023)': 1100,
    'Gas Produced (as of Dec 2023)': 598,
    Latitude: 47.795107,
    Longitude: -103.413793,
  },
  {
    API: '33-105-02732',
    'Well Name': 'ATLANTA 1-6H',
    'Lease Name': 'CONTINENTAL RESOURCES, INC.',
    Location: 'Williams County, ND',
    Operator: 'CONTINENTAL RESOURCES, INC.',
    'Well Status': 'Active',
    'Well Type': 'Oil & Gas',
    'Township Range Section': '153 N 101 W 6',
    'Closest City': 'Williston',
    'Oil Produced (as of Dec 2023)': 947,
    'Gas Produced (as of Dec 2023)': 1400,
    Latitude: 47.726358,
    Longitude: -103.380882,
  },
  {
    API: '33-053-90329',
    'Well Name': 'CARSON SWD 5301 12-24',
    'Lease Name': 'FALCON MIDSTREAM SERVICES LLC',
    Location: 'McKenzie County, ND',
    Operator: 'FALCON MIDSTREAM SERVICES LLC',
    'Well Status': 'Active',
    'Well Type': 'Salt Water Disposal',
    'Township Range Section': '153 N 101 W 24',
    'Closest City': 'Williston',
    'Oil Produced (as of Dec 2023)': 0,
    'Gas Produced (as of Dec 2023)': 0,
    Latitude: 47.821291,
    Longitude: -103.439433,
  },
  {
    API: '33-053-06057',
    'Well Name': 'KLINE FEDERAL 5300 31-18 6B',
    'Lease Name': 'OASIS PETROLEUM NORTH AMERICA LLC',
    Location: 'McKenzie County, ND',
    Operator: 'OASIS PETROLEUM NORTH AMERICA LLC',
    'Well Status': 'Active',
    'Well Type': 'Oil & Gas',
    'Township Range Section': '153 N 100 W 18',
    'Closest City': 'Williston',
    'Oil Produced (as of Dec 2023)': 54,
    'Gas Produced (as of Dec 2023)': 171,
    Latitude: 47.807544,
    Longitude: -103.407977,
  },
  {
    API: '33-053-05845',
    'Well Name': 'LEWIS FEDERAL 5300 21-31 6B',
    'Lease Name': 'OASIS PETROLEUM NORTH AMERICA LLC',
    Location: 'McKenzie County, ND',
    Operator: 'OASIS PETROLEUM NORTH AMERICA LLC',
    'Well Status': 'Active',
    'Well Type': 'Oil & Gas',
    'Township Range Section': '153 N 100 W 31',
    'Closest City': 'Williston',
    'Oil Produced (as of Dec 2023)': 1500,
    'Gas Produced (as of Dec 2023)': 3800,
    Latitude: 47.745534,
    Longitude: -103.400159,
  },
  {
    API: '33-053-03911',
    'Well Name': 'YUKON 5301 41-12T',
    'Lease Name': 'OASIS PETROLEUM NORTH AMERICA LLC',
    Location: 'McKenzie County, ND',
    Operator: 'OASIS PETROLEUM NORTH AMERICA LLC',
    'Well Status': 'Active',
    'Well Type': 'Oil & Gas',
    'Township Range Section': '153 N 101 W 12',
    'Closest City': 'Williston',
    'Oil Produced (as of Dec 2023)': 1100,
    'Gas Produced (as of Dec 2023)': 598,
    Latitude: 47.742482,
    Longitude: -103.454755,
  },
  {
    API: '33-053-06026',
    'Well Name': 'KLINE FEDERAL 5300 41-18 10B',
    'Lease Name': 'OASIS PETROLEUM NORTH AMERICA LLC',
    Location: 'McKenzie County, ND',
    Operator: 'OASIS PETROLEUM NORTH AMERICA LLC',
    'Well Status': 'Active',
    'Well Type': 'Oil & Gas',
    'Township Range Section': '153 N 100 W 18',
    'Closest City': 'Williston',
    'Oil Produced (as of Dec 2023)': 118,
    'Gas Produced (as of Dec 2023)': 436,
    Latitude: 48.356754,
    Longitude: -103.530196,
  },
  {
    API: '33-053-03911',
    'Well Name': 'YUKON 5301 41-12T',
    'Lease Name': 'OASIS PETROLEUM NORTH AMERICA LLC',
    Location: 'McKenzie County, ND',
    Operator: 'OASIS PETROLEUM NORTH AMERICA LLC',
    'Well Status': 'Active',
    'Well Type': 'Oil & Gas',
    'Township Range Section': '153 N 101 W 12',
    'Closest City': 'Williston',
    'Oil Produced (as of Dec 2023)': 1100,
    'Gas Produced (as of Dec 2023)': 598,
    Latitude: 48.313052,
    Longitude: -103.492882,
  },
  {
    API: '33-105-02728',
    'Well Name': 'ATLANTA FEDERAL 5-6H',
    'Lease Name': 'CONTINENTAL RESOURCES, INC.',
    Location: 'Williams County, ND',
    Operator: 'CONTINENTAL RESOURCES, INC.',
    'Well Status': 'Active',
    'Well Type': 'Oil & Gas',
    'Township Range Section': '153 N 101 W 6',
    'Closest City': 'Williston',
    'Oil Produced (as of Dec 2023)': 777,
    'Gas Produced (as of Dec 2023)': 1200,
    Latitude: 48.302505,
    Longitude: -103.538961,
  },
  {
    API: '33-105-02725',
    'Well Name': 'ATLANTA FEDERAL 8-6H',
    'Lease Name': 'CONTINENTAL RESOURCES, INC.',
    Location: 'Williams County, ND',
    Operator: 'CONTINENTAL RESOURCES, INC.',
    'Well Status': 'Active',
    'Well Type': 'Oil & Gas',
    'Township Range Section': '153 N 101 W 6',
    'Closest City': 'Williston',
    'Oil Produced (as of Dec 2023)': 439,
    'Gas Produced (as of Dec 2023)': 740,
    Latitude: 48.390889,
    Longitude: -103.451468,
  },
  {
    API: '33-105-02726',
    'Well Name': 'ATLANTA FEDERAL 7-6H',
    'Lease Name': 'CONTINENTAL RESOURCES, INC.',
    Location: 'Williams County, ND',
    Operator: 'CONTINENTAL RESOURCES, INC.',
    'Well Status': 'Active',
    'Well Type': 'Oil & Gas',
    'Township Range Section': '153 N 101 W 6',
    'Closest City': 'Williston',
    'Oil Produced (as of Dec 2023)': 1300,
    'Gas Produced (as of Dec 2023)': 1700,
    Latitude: 48.392563,
    Longitude: -103.516522,
  },
  {
    API: '33-105-02721',
    'Well Name': 'ATLANTA 12-6H',
    'Lease Name': 'CONTINENTAL RESOURCES, INC.',
    Location: 'Williams County, ND',
    Operator: 'CONTINENTAL RESOURCES, INC.',
    'Well Status': 'Active',
    'Well Type': 'Oil & Gas',
    'Township Range Section': '153 N 101 W 6',
    'Closest City': 'Williston',
    'Oil Produced (as of Dec 2023)': 236,
    'Gas Produced (as of Dec 2023)': 493,
    Latitude: 48.37684,
    Longitude: -103.476148,
  },
  {
    API: '33-105-02724',
    'Well Name': 'ATLANTA FEDERAL 9-6H',
    'Lease Name': 'CONTINENTAL RESOURCES, INC.',
    Location: 'Williams County, ND',
    Operator: 'CONTINENTAL RESOURCES, INC.',
    'Well Status': 'Active',
    'Well Type': 'Oil & Gas',
    'Township Range Section': '153 N 101 W 6',
    'Closest City': 'Williston',
    'Oil Produced (as of Dec 2023)': 414,
    'Gas Produced (as of Dec 2023)': 711,
    Latitude: 48.326461,
    Longitude: -103.511229,
  },
  {
    API: '33-053-04855',
    'Well Name': 'COLUMBUS FEDERAL 2-16H',
    'Lease Name': 'CONTINENTAL RESOURCES, INC.',
    Location: 'McKenzie County, ND',
    Operator: 'CONTINENTAL RESOURCES, INC.',
    'Well Status': 'Active',
    'Well Type': 'Oil & Gas',
    'Township Range Section': '153 N 101 W 16',
    'Closest City': 'Williston',
    'Oil Produced (as of Dec 2023)': 906,
    'Gas Produced (as of Dec 2023)': 1600,
    Latitude: 48.305767,
    Longitude: -103.490393,
  },
  {
    API: '33-053-08946',
    'Well Name': 'LEWIS FEDERAL 5300 11-31 4BR',
    'Lease Name': 'OASIS PETROLEUM NORTH AMERICA LLC',
    Location: 'McKenzie County, ND',
    Operator: 'OASIS PETROLEUM NORTH AMERICA LLC',
    'Well Status': 'Active',
    'Well Type': 'Oil & Gas',
    'Township Range Section': '153 N 100 W 31',
    'Closest City': 'Williston',
    'Oil Produced (as of Dec 2023)': 1800,
    'Gas Produced (as of Dec 2023)': 2400,
    Latitude: 48.364423,
    Longitude: -103.487729,
  },
  {
    API: '33-105-02719',
    'Well Name': 'ATLANTA 14-6H',
    'Lease Name': 'CONTINENTAL RESOURCES, INC.',
    Location: 'Williams County, ND',
    Operator: 'CONTINENTAL RESOURCES, INC.',
    'Well Status': 'Active',
    'Well Type': 'Oil & Gas',
    'Township Range Section': '153 N 101 W 6',
    'Closest City': 'Williston',
    'Oil Produced (as of Dec 2023)': 280,
    'Gas Produced (as of Dec 2023)': 547,
    Latitude: 48.340015,
    Longitude: -103.523915,
  },
];

wellsData.forEach((well) => {
  const position = fromLonLat([
    parseFloat(well.Longitude),
    parseFloat(well.Latitude),
  ]);

  const markerElement = document.createElement('div');
  markerElement.className = 'marker';
  markerElement.innerHTML = '<span class="marker-icon">•</span>';

  const marker = new Overlay({
    position: position,
    element: markerElement,
  });
  map.addOverlay(marker);

  // Attach a click event to the marker element
  markerElement.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent map click event from firing
    const content = `
      <h3>${well['Well Name']}</h3>
      <p>Operator: ${well['Operator']}</p>
      <p>Status: ${well['Well Status']}</p>
      <p>Type: ${well['Well Type']}</p>
      <p>Oil Produced: ${well['Oil Produced (as of Dec 2023)']}</p>
      <p>Gas Produced: ${well['Gas Produced (as of Dec 2023)']}</p>
    `; // we can include other details if needed

    // Set the popup content and position
    document.getElementById('popup-content').innerHTML = content;
    popup.setPosition(position);
  });
});

// General map click event to show coordinates, if clicked other than the marker
map.on('click', function (evt) {
  const coordinate = evt.coordinate;
  const hdms = toStringHDMS(toLonLat(coordinate));
  document.getElementById(
    'popup-content',
  ).innerHTML = `<p>You clicked at:</p><code>${hdms}</code>`;
  popup.setPosition(coordinate);
});
