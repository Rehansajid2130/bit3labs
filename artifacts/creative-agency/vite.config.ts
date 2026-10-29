import path from 'path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

import runtimeErrorOverlay from '@replit/vite-plugin-runtime-error-modal';

function contactApiPlugin() {
  return {
    name: 'bit3labs-contact-api',
    configureServer(server: any) {
      server.middlewares.use('/api/contact', (req: any, res: any) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: 'Method not allowed' }));
          return;
        }

        const MAX_PAYLOAD = 50 * 1024; // 50 KB ceiling to prevent memory exhaustion DoS
        let body = '';
        let byteCount = 0;
        let isTooLarge = false;

        req.on('data', (chunk: any) => {
          if (isTooLarge) return;
          byteCount += chunk.length;
          if (byteCount > MAX_PAYLOAD) {
            isTooLarge = true;
            res.statusCode = 413;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: 'Payload exceeds maximum permitted size (50KB).' }));
            req.destroy();
            return;
          }
          body += chunk;
        });

        req.on('end', () => {
          if (isTooLarge) return;

          try {
            const payload = JSON.parse(body || '{}');
            const { name, email, projectType, message, honeypot } = payload;

            // Honeypot anti-spam check
            if (honeypot) {
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true, message: 'Inquiry received' }));
              return;
            }

            if (!name || !email || !projectType || !message) {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'Please provide all required fields (name, email, projectType, message).' }));
              return;
            }

            // CWE-117: Sanitize user input against log injection / control characters
            const sanitizeLog = (val: unknown) =>
              String(val ?? '')
                .replace(/[\r\n\x1b\x00-\x1f\x7f]/g, ' ')
                .slice(0, 200);

            console.log(`\n======================================================`);
            console.log(`[bit3labs NEW LEAD RECEIVED] ${new Date().toISOString()}`);
            console.log(`Client Name  : ${sanitizeLog(name)}`);
            console.log(`Client Email : ${sanitizeLog(email)}`);
            console.log(`Project Type : ${sanitizeLog(projectType)}`);
            console.log(`Message      : ${sanitizeLog(message)}`);
            console.log(`======================================================\n`);

            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(
              JSON.stringify({
                success: true,
                message: 'Your inquiry has been successfully transmitted to the bit3labs team.',
                timestamp: new Date().toISOString(),
              }),
            );
          } catch {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: 'Malformed JSON payload' }));
          }
        });
      });
    },
  };
}

const rawPort = process.env.PORT || '5173';
const port = Number(rawPort);

if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

const basePath = process.env.BASE_PATH || '/';

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
    ...(process.env.NODE_ENV !== 'production' ? [runtimeErrorOverlay()] : []),
    contactApiPlugin(),
    ...(process.env.NODE_ENV !== 'production' &&
    process.env.REPL_ID !== undefined
      ? [
          await import('@replit/vite-plugin-cartographer').then((m) =>
            m.cartographer({
              root: path.resolve(import.meta.dirname, '..'),
            }),
          ),
          await import('@replit/vite-plugin-dev-banner').then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
      '@assets': path.resolve(
        import.meta.dirname,
        '..',
        '..',
        'attached_assets',
      ),
    },
    dedupe: ['react', 'react-dom'],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, 'dist'),
    emptyOutDir: true,
    // ponytail: vendor chunking to maximize browser cache hits and reduce initial payload
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'wouter'],
          'vendor-icons': ['lucide-react'],
        },
      },
    },
  },
  server: {
    port,
    strictPort: true,
    host: '0.0.0.0',
    allowedHosts: true,
    fs: {
      strict: true,
    },
  },
  preview: {
    port,
    host: '0.0.0.0',
    allowedHosts: true,
  },
});
