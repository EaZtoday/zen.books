import LocationPage from './LocationPage';
import { readingData } from './locationData';

export default function ReadingBookkeeping() {
  return <LocationPage data={readingData} />;
}
