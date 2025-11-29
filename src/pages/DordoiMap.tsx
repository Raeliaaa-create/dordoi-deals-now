import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft, MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const mapLocations = [
  { row: "A5", container: "12", sellers: ["Fashion Hub", "Tech World", "Home Essentials"] },
  { row: "B10", container: "47", sellers: ["Shoe Palace", "Street Style", "Beauty Haven"] },
  { row: "C3", container: "88", sellers: ["Kids Corner", "Accessory Shop"] },
];

const DordoiMap = () => {
  const [searchParams] = useSearchParams();
  const location = searchParams.get("location");
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card shadow-sm border-b">
        <div className="px-4 py-4 flex items-center gap-3">
          <Link to="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold">{t('map.title')}</h1>
        </div>
      </header>

      <div className="p-4">
        {location && (
          <div className="bg-primary text-primary-foreground rounded-xl p-4 mb-6">
            <div className="flex items-start gap-3">
              <Navigation className="h-5 w-5 mt-0.5" />
              <div>
                <p className="font-bold mb-1">Selected Location</p>
                <p className="text-sm">{location}</p>
              </div>
            </div>
          </div>
        )}

        <h2 className="text-lg font-bold mb-4">{t('map.locations')}</h2>
        
        <div className="space-y-3">
          {mapLocations.map((loc) => (
            <div 
              key={`${loc.row}-${loc.container}`}
              className={`bg-card rounded-xl p-4 border-2 ${
                location?.includes(loc.row) && location?.includes(loc.container)
                  ? "border-primary"
                  : "border-transparent"
              }`}
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg">Row {loc.row}</h3>
                  <p className="text-sm text-muted-foreground">Container {loc.container}</p>
                </div>
              </div>
              
              <div>
                <p className="text-sm font-medium mb-2">Sellers at this location:</p>
                <div className="space-y-1">
                  {loc.sellers.map(seller => (
                    <Link key={seller} to={`/seller/${seller}`}>
                      <Button variant="ghost" className="w-full justify-start text-sm">
                        {seller}
                      </Button>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DordoiMap;
