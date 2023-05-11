export interface CJDropshippingProduct {
  pid: string;
  productName: string[];
  productNameEn: string;
  productSku: string;
  productImage: string;
  productWeight: string;
  productUnit: string;
  productType: string;
  categoryId: string;
  categoryName: string;
  entryCode: string;
  entryName: string;
  entryNameEn: string;
  materialName: string[];
  materialNameEn: string;
  materialKey: string[];
  packingWeight: string;
  packingName: string[];
  packingNameEn: string[];
  packingKey: string[];
  productKey: string[];
  productKeyEn: string;
  sellPrice: number;
  sourceFrom: number;
  description: string;
  variants: CJDropShippingProductVariant[];
}

interface CJDropShippingProductVariant {
  vid: string;
  pid: string;
  variantName: string | null;
  variantNameEn: string;
  variantSku: string;
  variantUnit: string | null;
  variantProperty: string | null;
  variantKey: string;
  variantLength: number;
  variantWidth: number;
  variantHeight: number;
  variantVolume: number;
  variantWeight: number;
  variantSellPrice: number;
  createTime: string;
}
