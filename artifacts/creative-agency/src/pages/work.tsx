import { useSearchParams } from 'wouter';
import { WorkSection } from '@/components/work-section';
import { SiteFooter } from '@/components/site-footer';
import { WORK_CATEGORIES, type WorkCategory } from '@/lib/work-categories';

const filters = [{ id: '', label: 'ALL' }, ...WORK_CATEGORIES] as const;

export function WorkPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedCategories = searchParams.getAll('category');
  const categories = WORK_CATEGORIES.filter(({ id }) => requestedCategories.includes(id));

  function selectCategory(id: WorkCategory['id'] | '') {
    const nextSearchParams = new URLSearchParams(searchParams);
    if (id) nextSearchParams.set('category', id);
    else nextSearchParams.delete('category');
    setSearchParams(nextSearchParams, { replace: true });
  }

  return (
    <main className="page-main work-page">
      <div className="page-hero-banner site-grid">
        <div className="section-wrap">
          <span className="section-kicker">PORTFOLIO</span>
          <h1 className="page-hero-title">
            FEATURED <span className="red">PROJECTS</span> &amp; BUILDS
          </h1>

          <div className="work-filter-bar">
            {filters.map(({ id, label }) => {
              const active = id ? categories.some((category) => category.id === id) : categories.length === 0;
              return (
                <button
                  key={id}
                  type="button"
                  aria-pressed={active}
                  className={`work-filter-btn${active ? ' active' : ''}`}
                  onClick={() => selectCategory(id)}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <WorkSection showAll categories={categories} />
      <SiteFooter />
    </main>
  );
}
