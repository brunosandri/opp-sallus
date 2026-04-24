
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const NFTCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">NFTs</CardTitle>
      </CardHeader>
      <CardContent className="text-center space-y-4">
        {/* NFT Image Placeholder */}
        <div className="w-32 h-32 mx-auto border-2 border-gray-300 relative">
          <div className="absolute inset-2 border border-gray-300">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full h-0.5 bg-gray-300 absolute rotate-45"></div>
              <div className="w-full h-0.5 bg-gray-300 absolute -rotate-45"></div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg">NFT #3</h3>
          <p className="text-sm text-gray-600">Participação: 8%</p>
        </div>
        
        <hr className="border-gray-300" />
        
        <div className="text-sm">
          <span>N★口+8%</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default NFTCard;
