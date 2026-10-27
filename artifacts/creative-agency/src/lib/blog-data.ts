export interface BlogPost {
  slug: string;
  title: string;
  category: '3D & Creative Frontend' | 'Headless Commerce' | 'Mobile Engineering' | 'Systems & ERP';
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
  };
  summary: string;
  tags: string[];
  content: {
    heading: string;
    paragraphs: string[];
    codeSnippet?: {
      language: string;
      code: string;
    };
  }[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'webgl-60fps-mobile-shaders',
    title: 'Taming WebGL Shaders & 60 FPS Canvas Geometry on Low-Power Mobile Devices',
    category: '3D & Creative Frontend',
    date: 'OCTOBER 2026',
    readTime: '7 MIN READ',
    author: {
      name: 'Alex Vance',
      role: 'Lead Creative Technologist',
    },
    summary: 'How we profiled GLSL fragment shaders, reduced draw calls by 74%, and streamed custom GLTF models to maintain fluid 60 FPS on iOS Safari and Android Chrome without battery drain.',
    tags: ['WebGL', 'Three.js', 'GLSL', 'Performance', 'Mobile'],
    content: [
      {
        heading: 'The Frame Budget Reality on Mobile Browsers',
        paragraphs: [
          'High-end creative web design frequently collapses when viewed on mid-tier mobile hardware. While an M3 Max MacBook renders millions of vertices effortlessly, a mobile GPU operating under thermal throttling has less than 16.6 milliseconds per frame before frame drops begin.',
          'When bit3labs engineers 3D web environments, our first rule is radical optimization of the rendering pipeline. This means minimizing overdraw, aggressively combining geometries, and avoiding per-pixel calculations that can be computed in vertex shaders.',
        ],
      },
      {
        heading: 'Batching Geometries & Eliminating Draw Calls',
        paragraphs: [
          'Draw calls are CPU-to-GPU context switches. In Three.js, rendering 200 distinct meshes results in 200 draw calls, which stalls mobile browsers. By utilizing InstancedMesh and merging static geometries with BufferGeometryUtils, we collapsed 180 individual scene objects into a single draw call.',
        ],
        codeSnippet: {
          language: 'typescript',
          code: `// Instanced mesh allocation for 60 FPS mobile performance
const count = 1000;
const instancedMesh = new THREE.InstancedMesh(geometry, customShaderMaterial, count);
const matrix = new THREE.Matrix4();

for (let i = 0; i < count; i++) {
  matrix.setPosition(coords[i].x, coords[i].y, coords[i].z);
  instancedMesh.setMatrixAt(i, matrix);
}
instancedMesh.instanceMatrix.needsUpdate = true;`,
        },
      },
      {
        heading: 'Precision Modifiers & Shader Optimization',
        paragraphs: [
          'Using highp precision in fragment shaders on mobile burns through battery and causes thermal throttling within 60 seconds of interaction. By dropping non-positional calculations to mediump and lowp, GPU memory bus throughput improved by 38% across testing devices.',
        ],
      },
    ],
  },
  {
    slug: 'headless-shopify-hydrogen-speed',
    title: 'Sub-Second Global Commerce: Architecting Headless Shopify with Next.js 15',
    category: 'Headless Commerce',
    date: 'OCTOBER 2026',
    readTime: '9 MIN READ',
    author: {
      name: 'Elena Rostova',
      role: 'Commerce Solutions Lead',
    },
    summary: 'A teardown of how we eliminated Storefront API latency, designed edge-cached cart states with Redis, and achieved 99+ Core Web Vitals for high-volume retail storefronts.',
    tags: ['Shopify', 'Next.js', 'Redis', 'GraphQL', 'Edge Caching'],
    content: [
      {
        heading: 'Why Monolithic Storefronts Fall Short at Scale',
        paragraphs: [
          'Traditional Liquid themes often suffer from app script bloat, third-party tag injection, and unpredictable TTFB. When an apparel brand scales past $10M in annual GMV, milliseconds in load time directly correlate with conversions.',
          'Decoupling the frontend presentation layer using Next.js 15 and Shopify’s Storefront GraphQL API allows complete control over code splitting, image optimization, and global edge delivery.',
        ],
      },
      {
        heading: 'Idempotent Cart Management & Edge Redis',
        paragraphs: [
          'The most latency-sensitive interaction in e-commerce is cart mutation. Directly calling Shopify Storefront API on every quantity increment adds 300-600ms of lag. We implemented an optimistic edge caching pattern powered by Redis.',
        ],
        codeSnippet: {
          language: 'typescript',
          code: `// Optimistic cart state synchronizer with Redis edge KV
export async function syncCartItem(cartId: string, lineId: string, quantity: number) {
  // 1. Immediately acknowledge client with local optimistic state
  const optimisticCart = await redis.hset(\`cart:\${cartId}\`, { [lineId]: quantity });
  
  // 2. Asynchronously flush mutation to Shopify Storefront API
  shopifyQueue.add('cartUpdate', { cartId, lineId, quantity });
  return optimisticCart;
}`,
        },
      },
      {
        heading: 'Results in Production',
        paragraphs: [
          'Under load testing simulated at 20,000 concurrent shoppers during flash promotions, First Contentful Paint remained steady at 0.4 seconds globally, and bounce rate dropped by 28%.',
        ],
      },
    ],
  },
  {
    slug: 'offline-first-react-native-warehouse',
    title: 'Offline-First Architecture: Building Resilient Mobile Scanner Apps with SQLite',
    category: 'Mobile Engineering',
    date: 'SEPTEMBER 2026',
    readTime: '6 MIN READ',
    author: {
      name: 'Marcus Chen',
      role: 'Senior Mobile Engineer',
    },
    summary: 'When Wi-Fi drops across 50,000 sq ft concrete warehouse floors, inventory scans cannot stall. Here is how our conflict-free replicated data sync keeps warehouse teams moving.',
    tags: ['React Native', 'SQLite', 'Offline First', 'Enterprise', 'CRDT'],
    content: [
      {
        heading: 'The Concrete Warehouse Problem',
        paragraphs: [
          'In industrial logistics, network connectivity is never guaranteed. Metal shelving, refrigeration rooms, and concrete pillars create frequent dead zones. If an inventory barcode scanner relies on a synchronous HTTP roundtrip, the picker’s workflow stalls constantly.',
          'At bit3labs, we build mobile apps using an offline-first paradigm: local writes are instantaneous, and network sync happens deterministically in the background.',
        ],
      },
      {
        heading: 'Local Embedded SQLite with Write-Ahead Logging',
        paragraphs: [
          'By embedding SQLite directly into the React Native runtime with Write-Ahead Logging (WAL) enabled, scan operations execute in under 4 milliseconds.',
        ],
        codeSnippet: {
          language: 'typescript',
          code: `// Local transaction journal write
export async function recordInventoryScan(db: SQLiteDatabase, scan: ScanEvent) {
  return await db.executeTransactionAsync(async (tx) => {
    await tx.executeSqlAsync(
      \`INSERT INTO inventory_scans (id, sku, location_id, timestamp, synced) 
       VALUES (?, ?, ?, ?, 0)\`,
      [scan.id, scan.sku, scan.locationId, Date.now()]
    );
  });
}`,
        },
      },
    ],
  },
  {
    slug: 'sub-5ms-realtime-inventory-ledger',
    title: 'Designing a Sub-5ms Inventory Ledger with PostgreSQL and Redis Streams',
    category: 'Systems & ERP',
    date: 'SEPTEMBER 2026',
    readTime: '8 MIN READ',
    author: {
      name: 'Tariq Sterling',
      role: 'Systems Architect',
    },
    summary: 'Handling flash sale concurrency without double-allocations or database row-lock contention. Why Redis Streams and optimistic locking beat traditional relational locks.',
    tags: ['PostgreSQL', 'Redis Streams', 'Distributed Systems', 'ERP', 'High Concurrency'],
    content: [
      {
        heading: 'The Double Allocation Nightmare',
        paragraphs: [
          'When 5,000 users attempt to checkout the last 20 items in stock simultaneously, standard relational queries like SELECT ... FOR UPDATE create severe database lock queues, causing connection pools to exhaust and requests to time out.',
          'To solve this in our custom ERP systems, we separate stock reservation from permanent fiscal accounting using Redis Streams and atomic token allocations.',
        ],
      },
      {
        heading: 'Atomic Redis Reservation Engine',
        paragraphs: [
          'Before touching PostgreSQL, orders acquire an atomic reservation lock inside Redis using Lua scripts. Only verified allocations are written to the durable relational ledger.',
        ],
        codeSnippet: {
          language: 'lua',
          code: `-- Atomic stock decrement Lua script
local stock = redis.call('get', KEYS[1])
if not stock or tonumber(stock) < tonumber(ARGV[1]) then
  return 0
else
  redis.call('decrby', KEYS[1], ARGV[1])
  redis.call('xadd', KEYS[2], '*', 'order_id', ARGV[2], 'qty', ARGV[1])
  return 1
end`,
        },
      },
      {
        heading: 'Event-Driven Ledger Reconciliation',
        paragraphs: [
          'Worker daemons consume the stream and write batches of ledger entries to PostgreSQL in bulk transactions, ensuring zero row lock contention and achieving sub-5ms API response times.',
        ],
      },
    ],
  },
  {
    slug: 'brutalist-web-design-performance',
    title: 'Brutalist Design & Web Performance: Why High Craft Beats Bloated Frameworks',
    category: '3D & Creative Frontend',
    date: 'AUGUST 2026',
    readTime: '5 MIN READ',
    author: {
      name: 'Studio Design Core',
      role: 'Design Directorate',
    },
    summary: 'Stripping away unnecessary client-side JavaScript in favor of architectural grids, stark typography, and intentional micro-interactions that respect user attention.',
    tags: ['Design System', 'Brutalism', 'CSS Architecture', 'Typography'],
    content: [
      {
        heading: 'Form Follows Functionality',
        paragraphs: [
          'Modern web design has too often surrendered to generic templates: rounded pastel bubbles, vague AI illustrations, and gigabytes of unoptimized tracking scripts that make pages feel slow and soulless.',
          'Brutalist and editorial digital design returns to fundamentals: rigorous grid alignment, high-contrast monospace metadata, bold display typography, and visible structure.',
        ],
      },
      {
        heading: 'Craftsmanship in CSS Architecture',
        paragraphs: [
          'Every border in bit3labs’ design system exists for a purpose. Rather than hiding borders behind blurry drop-shadows, we celebrate structural geometry with crisp 1px borders, architectural kicker labels, and fluid viewport typography.',
        ],
      },
    ],
  },
];
