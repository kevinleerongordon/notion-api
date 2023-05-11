export type AsinType = "STANDARD" | "VARIATION_PARENT" | "VARIATION_CHILD";
type Category = {
  displayName: string;
  id: string;
};
type ErrorResponse = {
  errors?: ErrorList;
};
type ErrorList = Error[];

type ErrorType = {
  code:
    | "PRODUCT_NOT_FOUND"
    | "PAGE_NOT_FOUND"
    | "INVALID_REQUEST_PARAMETER"
    | "SERVICE_ERROR"
    | "EMAIL_ID_NOT_FOUND"
    | "UNAUTHORIZED";
  message: string;
  details?: string;
};

type BuyingRestriction = {
  title: string;
  type: "PROFESSIONAL_USE";
};

type Merchant = {
  merchantId: string;
  name: string;
  meanFeedbackRating: number;
  totalFeedbackCount: number;
};

type Condition = {
  conditionValue:
    | "NEW"
    | "USED"
    | "COLLECTIBLE"
    | "REFURBISHED"
    | "OTHER"
    | "UNKNOWN";
  conditionNote: string;
  subCondition:
    | "ACCEPTABLE"
    | "CLUB"
    | "GOOD"
    | "LIKE_NEW"
    | "NEW"
    | "OEM"
    | "OPEN_BOX"
    | "REFURBISHED"
    | "UNKNOWN"
    | "VERY_GOOD";
};

interface OfferQuantityLimits {
  maxQuantity: number;
  minQuantity: number;
}

interface Money {
  amount: number;
  currencyCode: string;
}

enum BuyingGuidanceType {
  PREFERRED = "PREFERRED",
  RESTRICTED = "RESTRICTED",
  BLOCKED = "BLOCKED",
  NONE = "NONE",
  UNKNOWN = "UNKNOWN",
}
interface Price {
  value: Money;
  formattedPrice: string;
  priceType:
    | "BUSINESS"
    | "BUSINESS_QUANTITY_DISCOUNT"
    | "BUSINESS_VOLUME_DISCOUNT"
    | "BUSINESS_EXCLUSIVE"
    | "NEW"
    | "SALE"
    | "USED"
    | "LIST_PRICE"
    | "OTHER";
}

interface TaxExclusivePrice {
  taxExclusiveAmount: Money;
  displayString: string;
  formattedPrice: string;
  label: string;
}

interface EditorialReview {
  content: string;
  source: string;
}

enum TaxonomyType {
  UNSPSC = "UNSPSC",
  ECLASS = "ECLASS",
}
interface Taxonomy {
  taxonomyCode: string;
  title: string;
  type: "UNSPSC" | "ECLASS";
}

interface ISBN {
  isbn10?: string;
  isbn13?: string;
}

interface BookInformation {
  isbn?: ISBN;
  publicationDate?: string;
  publishedLanguage?: string;
}

interface Contributor {
  name?: string;
  roles?: string[];
}

interface MediaInformation {
  editions?: string[];
  mediaFormats?: string[];
}

interface CustomerReviewsSummary {
  numberOfReviews: number;
  starRating: number;
}

interface DimensionValue {
  index?: number;
  displayString?: string;
}

interface Dimension {
  index?: number;
  displayString?: string;
  dimensionValues?: DimensionValue[];
}

interface VariationValue {
  index?: number;
  value?: number;
}

interface Variation {
  [asin: string]: VariationValue[];
}

interface ProductVariations {
  dimensions: Dimension[];
  variations: Variation[];
}

interface ProductResult {
  asin: string;
  asinType: AsinType;
  signedProductId: string;
  includedDataTypes: Record<string, object[]>;
  features: string[];
  editorialReviews?: EditorialReview[];
  taxonomies: Taxonomy[];
  title: string;
  url: string;
  format: string;
  bookInformation?: BookInformation;
  byLine: Contributor[];
  mediaInformation?: MediaInformation;
  productOverview: Record<string, string>;
  productDetails: Record<string, Record<string, string>>;
  productVariations: ProductVariations;
  customerReviewsSummary: CustomerReviewsSummary;
  productDescription: string;
}





interface QuantityPriceTier {
  quantityDisplay: string;
  unitPrice: Money;
  minQuantity?: number;
  price?: string;
  savingMessage?: string;
  taxExclusivePrice?: TaxExclusivePrice;
}

interface QuantityPrice {
  quantityPriceTiers?: QuantityPriceTier[];
}

interface TaxExclusivePrice {
  amount: string;
}




enum ProductCondition {
  NEW = "NEW",
  USED = "USED",
  COLLECTIBLE = "COLLECTIBLE",
  REFURBISHED = "REFURBISHED",
  OTHER = "OTHER",
  UNKNOWN = "UNKNOWN",
}

enum Facets {
  OFFERS = "OFFERS",
  IMAGES = "IMAGES",
}

enum ErrorCode {
  PRODUCT_NOT_FOUND = "PRODUCT_NOT_FOUND",
  PAGE_NOT_FOUND = "PAGE_NOT_FOUND",
  INVALID_REQUEST_PARAMETER = "INVALID_REQUEST_PARAMETER",
  SERVICE_ERROR = "SERVICE_ERROR",
  EMAIL_ID_NOT_FOUND = "EMAIL_ID_NOT_FOUND",
  UNAUTHORIZED = "UNAUTHORIZED",
}

enum FulfillmentType {
  AMAZON_FULFILLMENT = "AMAZON_FULFILLMENT",
  MERCHANT_FULFILLMENT = "MERCHANT_FULFILLMENT",
  OTHER = "OTHER",
}

enum ProductRegion {
  DE = "DE",
  FR = "FR",
  UK = "UK",
  IT = "IT",
  ES = "ES",
  US = "US",
  CA = "CA",
  JP = "JP",
}

interface BuyingGuidance {
  buyingGuidanceType: BuyingGuidanceType;
}

interface Taxonomy {
  taxonomyType: TaxonomyType;
}


interface Error {
  errorCode: ErrorCode;
}

interface Fulfillment {
  fulfillmentType: FulfillmentType;
}

interface Region {
  productRegion: ProductRegion;
}
