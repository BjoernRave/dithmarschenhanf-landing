// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageView = (url: string) => {
  (window as any).gtag("config", process.env.GA_ID, {
    page_path: url
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GAEvent) => {
  (window as any).gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value
  });
};

interface GAEvent {
  action: string;
  category: string;
  label?: string;
  value?: Number;
}
