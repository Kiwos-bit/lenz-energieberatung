// Web Vitals Monitoring
// Tracks Core Web Vitals: LCP, FID, CLS, FCP, TTFB

type MetricName = 'LCP' | 'FID' | 'CLS' | 'FCP' | 'TTFB' | 'INP';

interface Metric {
  name: MetricName;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
}

const thresholds: Record<MetricName, [number, number]> = {
  LCP: [2500, 4000],
  FID: [100, 300],
  CLS: [0.1, 0.25],
  FCP: [1800, 3000],
  TTFB: [800, 1800],
  INP: [200, 500],
};

function getRating(name: MetricName, value: number): Metric['rating'] {
  const [good, poor] = thresholds[name];
  if (value <= good) return 'good';
  if (value <= poor) return 'needs-improvement';
  return 'poor';
}

function reportMetric(metric: Metric) {
  // Log to console (useful for debugging)
  if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
    const color = metric.rating === 'good' ? 'green' : metric.rating === 'needs-improvement' ? 'orange' : 'red';
    console.log(`%c[Web Vitals] ${metric.name}: ${metric.value.toFixed(2)} (${metric.rating})`, `color: ${color}`);
  }
}

export function initWebVitals() {
  if (typeof window === 'undefined') return;

  // Largest Contentful Paint
  const lcpObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const lastEntry = entries[entries.length - 1] as PerformanceEntry;
    const value = lastEntry.startTime;
    reportMetric({ name: 'LCP', value, rating: getRating('LCP', value) });
  });
  lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

  // First Input Delay
  const fidObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries() as PerformanceEventTiming[];
    entries.forEach((entry) => {
      const value = entry.processingStart - entry.startTime;
      reportMetric({ name: 'FID', value, rating: getRating('FID', value) });
    });
  });
  fidObserver.observe({ type: 'first-input', buffered: true });

  // Cumulative Layout Shift
  let clsValue = 0;
  const clsObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries() as PerformanceEntry[];
    entries.forEach((entry: any) => {
      if (!entry.hadRecentInput) {
        clsValue += entry.value;
      }
    });
  });
  clsObserver.observe({ type: 'layout-shift', buffered: true });

  // Report CLS on page hide
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      reportMetric({ name: 'CLS', value: clsValue, rating: getRating('CLS', clsValue) });
    }
  });

  // First Contentful Paint
  const fcpObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const fcpEntry = entries.find((e) => e.name === 'first-contentful-paint');
    if (fcpEntry) {
      reportMetric({ name: 'FCP', value: fcpEntry.startTime, rating: getRating('FCP', fcpEntry.startTime) });
    }
  });
  fcpObserver.observe({ type: 'paint', buffered: true });

  // Time to First Byte
  const navEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  if (navEntry) {
    const ttfb = navEntry.responseStart - navEntry.requestStart;
    reportMetric({ name: 'TTFB', value: ttfb, rating: getRating('TTFB', ttfb) });
  }
}
