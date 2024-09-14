'use client';
import { useEffect, useState } from "react";
import { createAd, updateAd } from "@/app/actions/adActions";
import AdTextInputs, { AdTexts } from "@/components/AdTextInputs";
import LocationPicker, { Location } from "@/components/LocationPicker";
import SubmitButton from "@/components/SubmitButton";
import UploadArea from "@/components/UploadArea";
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UploadResponse } from "imagekit/dist/libs/interfaces";
import { redirect } from "next/navigation";

type Props = {
  id?: string | null;
  defaultFiles?: UploadResponse[];
  defaultLocation: Location;
  defaultTexts?: AdTexts;
};

export default function AdForm({
  id = null,
  defaultFiles = [],
  defaultLocation,
  defaultTexts = {},
}: Props) {
  const [files, setFiles] = useState<UploadResponse[]>(defaultFiles);
  const [location, setLocation] = useState<Location>(defaultLocation);
  const [gpsCoords, setGpsCoords] = useState<Location | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  function handleFindMyPositionClick() {
    if (typeof window !== 'undefined' && 'geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(ev => {
        const location = { lat: ev.coords.latitude, lng: ev.coords.longitude };
        setLocation(location);
        setGpsCoords(location);
      }, console.error);
    }
  }

  async function handleSubmit(formData: FormData) {
    formData.set('location', JSON.stringify(location));
    formData.set('files', JSON.stringify(files));
    if (id) {
      formData.set('_id', id);
    }
    const result = id
      ? await updateAd(formData)
      : await createAd(formData);
    redirect('/ad/' + result._id);
  }

  if (!isClient) {
    return null; // or a loading spinner
  }

  return (
    <form
      action={handleSubmit}
      className="max-w-xl mx-auto grid grid-cols-2 gap-12">
      {/* Rest of your form code */}
    </form>
  );
}