import dynamic from 'next/dynamic';

const AdForm = dynamic(() => import("@/components/AdForm"), {
  ssr: false,
});

const locationDefault = {
  lat: 27.6710,
  lng: 85.4298,
}

export default function NewAdPage() {
  return (
    <AdForm defaultLocation={locationDefault} />
  );
}