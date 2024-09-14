'use client';
import AdForm from "@/components/AdForm";

const locationDefault = {
  lat: 27.6710,
  lng: 85.4298,
}

export default function NewAdPage() {
  return (
    <AdForm defaultLocation={locationDefault} />
  );
}