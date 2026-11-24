export const WORK_CATEGORIES = [
  { id: 'web-3d', label: 'WEB DEV & 3D', keywords: ['Web', '3D'] },
  { id: 'e-commerce', label: 'CUSTOM E-COMMERCE', keywords: ['Commerce'] },
  { id: 'mobile-apps', label: 'MOBILE APPS', keywords: ['Mobile'] },
  { id: 'erp-inventory', label: 'ERP & INVENTORY', keywords: ['ERP', 'Inventory'] },
  { id: 'personal-sites', label: 'PERSONAL SITES', keywords: ['Personal'] },
] as const;

export type WorkCategory = (typeof WORK_CATEGORIES)[number];
