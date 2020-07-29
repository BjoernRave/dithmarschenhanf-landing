import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
  DateTime: any;
};


export type ContactPerson = {
  id: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  scheduleStart?: Maybe<Scalars['DateTime']>;
  scheduleEnd?: Maybe<Scalars['DateTime']>;
  notes?: Maybe<Scalars['String']>;
};

export enum Language {
  Es = 'es',
  En = 'en',
  Pt = 'pt',
  Ca = 'ca',
  De = 'de'
}

export enum EntityType {
  Movement = 'movement',
  Inventory = 'inventory',
  Client = 'client',
  Supplier = 'supplier',
  Product = 'product',
  User = 'user',
  Transportagency = 'transportagency',
  Warehouse = 'warehouse',
  Role = 'role',
  Contactperson = 'contactperson',
  Transport = 'transport',
  Transporter = 'transporter',
  Unit = 'unit'
}

export type File = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  smallUrl?: Maybe<Scalars['String']>;
};

export type Address = {
  id: Scalars['String'];
  addressLine1?: Maybe<Scalars['String']>;
  addressLine2?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
};

export type ValidationPayload = {
  success: Scalars['Boolean'];
};

export type Permission = {
  id: Scalars['ID'];
  name: Scalars['String'];
  description: Scalars['String'];
};

export type User = {
  email: Scalars['String'];
  name: Scalars['String'];
  email_verified: Scalars['Boolean'];
  id: Scalars['String'];
  role?: Maybe<Role>;
  permissions?: Maybe<Array<Scalars['String']>>;
  timezone?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
};

export type ResetPasswordPayload = {
  url: Scalars['String'];
};

export type Checkout = {
  href: Scalars['String'];
  type: Scalars['String'];
};

export type AccountCreation = {
  id: Scalars['ID'];
  type: Scalars['String'];
  checkout?: Maybe<Checkout>;
};

export type IntegrationRequest = {
  id: Scalars['String'];
};

export type DashboardLink = {
  href: Scalars['String'];
};

export type Message = {
  id: Scalars['String'];
  text?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  channel?: Maybe<Channel>;
  recipient?: Maybe<Scalars['String']>;
  sender: Scalars['String'];
  images: Array<File>;
  mentions: Array<Scalars['String']>;
};


export type MessageImagesArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<FileWhereUniqueInput>;
};

export type Channel = {
  id: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  messages: Array<Message>;
  name: Scalars['String'];
  members: Array<Scalars['String']>;
};


export type ChannelMessagesArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<MessageWhereUniqueInput>;
};

export type ClientImport = {
  id?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  addressLine1?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  addressLine2?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  cpFirstName?: Maybe<Scalars['String']>;
  cpLastName?: Maybe<Scalars['String']>;
  cpEmail?: Maybe<Scalars['String']>;
  cpPhone?: Maybe<Scalars['String']>;
  cpMobile?: Maybe<Scalars['String']>;
  cpScheduleStart?: Maybe<Scalars['DateTime']>;
  cpScheduleEnd?: Maybe<Scalars['DateTime']>;
  notes?: Maybe<Scalars['String']>;
};

export type Client = {
  id: Scalars['String'];
  stripeId?: Maybe<Scalars['String']>;
  clientId: Scalars['Int'];
  email?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  name: Scalars['String'];
  withAccount?: Maybe<Scalars['Boolean']>;
  contactPersons: Array<ContactPerson>;
  mobile?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  address?: Maybe<Address>;
  billingAddress?: Maybe<Address>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  movements: Array<Movement>;
  inventories: Array<Inventory>;
};


export type ClientContactPersonsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ContactPersonWhereUniqueInput>;
};


export type ClientMovementsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<MovementWhereUniqueInput>;
};


export type ClientInventoriesArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<InventoryWhereUniqueInput>;
};

export type Inventory = {
  id: Scalars['String'];
  amount: Scalars['Int'];
  supplier?: Maybe<Supplier>;
  product: Product;
  batch?: Maybe<Batch>;
  reservations: Array<Reservation>;
  source?: Maybe<Scalars['String']>;
  storageNumber?: Maybe<Scalars['String']>;
  warehouse?: Maybe<Warehouse>;
  movements: Array<Movement>;
  isListed?: Maybe<Scalars['Boolean']>;
  listPrice?: Maybe<Scalars['Float']>;
};


export type InventoryReservationsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ReservationWhereUniqueInput>;
};


export type InventoryMovementsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<MovementWhereUniqueInput>;
};

export type Reservation = {
  id: Scalars['String'];
  amount: Scalars['Int'];
  client: Client;
  notes?: Maybe<Scalars['String']>;
};

export type Batch = {
  id: Scalars['String'];
  bestBefore?: Maybe<Scalars['DateTime']>;
  batchNumber?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<Manufacturer>;
  product: Product;
};

export type Manufacturer = {
  id: Scalars['String'];
  name: Scalars['String'];
  notes?: Maybe<Scalars['String']>;
};

export type Invoice = {
  id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  pdf: File;
  movements: Array<Movement>;
};


export type InvoiceMovementsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<MovementWhereUniqueInput>;
};

export type TransportAgency = {
  id: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  contactPersons: Array<ContactPerson>;
  mobile?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  address?: Maybe<Address>;
  source?: Maybe<Scalars['String']>;
  transporters: Array<Transporter>;
  notes?: Maybe<Scalars['String']>;
};


export type TransportAgencyContactPersonsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ContactPersonWhereUniqueInput>;
};


export type TransportAgencyTransportersArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<TransporterWhereUniqueInput>;
};

export type Transporter = {
  id: Scalars['String'];
  type: TransportType;
  identifications: Array<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  fullName: Scalars['String'];
  transportAgency?: Maybe<TransportAgency>;
};

export type Transport = {
  id: Scalars['String'];
  arrivalDate?: Maybe<Scalars['DateTime']>;
  arrivalPoint?: Maybe<Scalars['String']>;
  transporter?: Maybe<Transporter>;
  price?: Maybe<Scalars['Float']>;
  transportAgency?: Maybe<TransportAgency>;
  notes?: Maybe<Scalars['String']>;
};

export type Warehouse = {
  id: Scalars['String'];
  name: Scalars['String'];
  contactPersons: Array<ContactPerson>;
  mobile?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  address?: Maybe<Address>;
  email?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  movements: Array<Movement>;
  inventories: Array<Inventory>;
};


export type WarehouseContactPersonsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ContactPersonWhereUniqueInput>;
};


export type WarehouseMovementsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<MovementWhereUniqueInput>;
};


export type WarehouseInventoriesArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<InventoryWhereUniqueInput>;
};

export enum MovementType {
  Incoming = 'incoming',
  Outgoing = 'outgoing',
  Handling = 'handling',
  Labelling = 'labelling',
  Onhold = 'onhold',
  Loss = 'loss'
}

export type MovementImport = {
  id?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['DateTime']>;
  type?: Maybe<MovementType>;
  productName?: Maybe<Scalars['String']>;
  productWeight?: Maybe<Scalars['Float']>;
  productDimensions?: Maybe<Scalars['String']>;
  productColor?: Maybe<Scalars['String']>;
  productMaterial?: Maybe<Scalars['String']>;
  EAN?: Maybe<Scalars['String']>;
  ISBN?: Maybe<Scalars['String']>;
  ASIN?: Maybe<Scalars['String']>;
  UPC?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Int']>;
  client?: Maybe<Scalars['String']>;
  supplier?: Maybe<Scalars['String']>;
  batchNumber?: Maybe<Scalars['String']>;
  unitPrice?: Maybe<Scalars['Float']>;
  bestBefore?: Maybe<Scalars['DateTime']>;
};

export type Movement = {
  id: Scalars['String'];
  movementId: Scalars['Int'];
  documents: Array<File>;
  amount: Scalars['Int'];
  client?: Maybe<Client>;
  supplier?: Maybe<Supplier>;
  product: Product;
  sendMail: Scalars['Boolean'];
  notes?: Maybe<Scalars['String']>;
  date: Scalars['DateTime'];
  type: MovementType;
  batch?: Maybe<Batch>;
  unitPrice?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  transports: Array<Transport>;
  storageNumber?: Maybe<Scalars['String']>;
  warehouse?: Maybe<Warehouse>;
  inventoryId?: Maybe<Scalars['String']>;
  totalPrice?: Maybe<Scalars['Float']>;
};


export type MovementDocumentsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<FileWhereUniqueInput>;
};


export type MovementTransportsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<TransportWhereUniqueInput>;
};

export type Notification = {
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  active: Scalars['Boolean'];
  amount: Scalars['Int'];
  type: NotificationType;
  product: Product;
  userEmail: Scalars['String'];
  warehouse?: Maybe<Warehouse>;
};

export enum NotificationType {
  Optimum = 'optimum',
  LowStock = 'lowStock',
  BestBefore = 'bestBefore'
}

export type Payment = {
  id: Scalars['String'];
  type: PaymentType;
  createdAt: Scalars['DateTime'];
  amount: Scalars['Float'];
  currency: Scalars['String'];
  source?: Maybe<Scalars['String']>;
  client?: Maybe<Client>;
  supplier?: Maybe<Supplier>;
  transportAgency?: Maybe<TransportAgency>;
  movement?: Maybe<Movement>;
  notes?: Maybe<Scalars['String']>;
  concept?: Maybe<Scalars['String']>;
  documents: Array<File>;
  dueDate?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  group?: Maybe<Group>;
  status: PaymentStatus;
  bankAccount?: Maybe<BankAccount>;
  taxRate?: Maybe<TaxRate>;
  paymentId: Scalars['Int'];
  recipient?: Maybe<Scalars['String']>;
  stripePaymentIntentId?: Maybe<Scalars['String']>;
  stripeClientSecret?: Maybe<Scalars['String']>;
};


export type PaymentDocumentsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<FileWhereUniqueInput>;
};

export type PublicPayment = {
  id: Scalars['String'];
  currency: Scalars['String'];
  amount: Scalars['Float'];
  status: PaymentStatus;
  stripeClientSecret: Scalars['String'];
};

export type Group = {
  id: Scalars['String'];
  code?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  taxRate?: Maybe<TaxRate>;
  payments: Array<Payment>;
};


export type GroupPaymentsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<PaymentWhereUniqueInput>;
};

export type TaxRate = {
  id: Scalars['String'];
  amount: Scalars['Float'];
  name?: Maybe<Scalars['String']>;
  isEU?: Maybe<Scalars['Boolean']>;
  isSameCountry: Scalars['Boolean'];
  group?: Maybe<Group>;
};

export type BankAccount = {
  id: Scalars['String'];
  name: Scalars['String'];
  payments: Array<Payment>;
};


export type BankAccountPaymentsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<PaymentWhereUniqueInput>;
};

export type StripeCheckout = {
  checkoutId: Scalars['String'];
  stripeAccountId: Scalars['String'];
};

export type StripeCheckoutInventory = {
  amount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
};

export enum PaymentType {
  Incoming = 'incoming',
  Outgoing = 'outgoing'
}

export enum PaymentStatus {
  Cancelled = 'cancelled',
  Pending = 'pending',
  Paid = 'paid'
}

export type Unit = {
  id: Scalars['String'];
  name: Scalars['String'];
  baseAmount: Scalars['Int'];
};

export type Dimension = {
  id: Scalars['String'];
  depth?: Maybe<Scalars['Float']>;
  height: Scalars['Float'];
  width?: Maybe<Scalars['Float']>;
};

export type Product = {
  id: Scalars['String'];
  productId: Scalars['Int'];
  name: Scalars['String'];
  fullName: Scalars['String'];
  units: Array<Unit>;
  weight?: Maybe<Scalars['Float']>;
  dimensions?: Maybe<Dimension>;
  variants: Array<Product>;
  color?: Maybe<Scalars['String']>;
  material?: Maybe<Scalars['String']>;
  images: Array<File>;
  ISBN?: Maybe<Scalars['String']>;
  ASIN?: Maybe<Scalars['String']>;
  UPC?: Maybe<Scalars['String']>;
  EAN?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  taxRates: Array<TaxRate>;
  movements: Array<Movement>;
  source?: Maybe<Scalars['String']>;
  isPackaging: Scalars['Boolean'];
  packaging: Array<Product>;
  isListed?: Maybe<Scalars['Boolean']>;
  variantProduct?: Maybe<Product>;
  inventories: Array<Inventory>;
};


export type ProductUnitsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<UnitWhereUniqueInput>;
};


export type ProductVariantsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ProductWhereUniqueInput>;
};


export type ProductImagesArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<FileWhereUniqueInput>;
};


export type ProductTaxRatesArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<TaxRateWhereUniqueInput>;
};


export type ProductMovementsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<MovementWhereUniqueInput>;
};


export type ProductPackagingArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ProductWhereUniqueInput>;
};


export type ProductInventoriesArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<InventoryWhereUniqueInput>;
};

export type ListedInventory = {
  id: Scalars['String'];
  listPrice: Scalars['Float'];
  amount: Scalars['Int'];
};

export type ListedProduct = {
  id: Scalars['String'];
  description: Scalars['String'];
  name: Scalars['String'];
  currency: Scalars['String'];
  currencySymbol: Scalars['String'];
  listedInventories: Array<ListedInventory>;
  slug: Scalars['String'];
  images: Array<File>;
};

export type VariantProductInput = {
  color?: Maybe<Scalars['String']>;
  material?: Maybe<Scalars['String']>;
  dimensions?: Maybe<DimensionCreateOneWithoutProductInput>;
  weight?: Maybe<Scalars['Float']>;
};

export type Role = {
  id: Scalars['ID'];
  name: Scalars['String'];
  description: Scalars['String'];
  permissions?: Maybe<Array<Scalars['String']>>;
};

export enum ClientFields {
  Address = 'address',
  Phone = 'phone',
  Mobile = 'mobile',
  Website = 'website',
  ContactPersons = 'contactPersons',
  FiscalNumber = 'fiscalNumber',
  Images = 'images'
}

export enum SupplierFields {
  Address = 'address',
  Phone = 'phone',
  Mobile = 'mobile',
  Website = 'website',
  ContactPersons = 'contactPersons',
  FiscalNumber = 'fiscalNumber',
  Images = 'images'
}

export enum ProductFields {
  Asin = 'ASIN',
  Ean = 'EAN',
  Isbn = 'ISBN',
  Upc = 'UPC',
  Description = 'description',
  Images = 'images',
  Manufacturer = 'manufacturer',
  Units = 'units',
  Dimensions = 'dimensions',
  Weight = 'weight',
  Variants = 'variants',
  Color = 'color',
  Material = 'material'
}

export enum ManufacturerFields {
  Address = 'address',
  Phone = 'phone',
  Mobile = 'mobile',
  Website = 'website',
  ContactPersons = 'contactPersons',
  FiscalNumber = 'fiscalNumber',
  Images = 'images'
}

export enum TransportAgencyFields {
  Address = 'address',
  Phone = 'phone',
  Mobile = 'mobile',
  Website = 'website',
  ContactPersons = 'contactPersons',
  Images = 'images'
}

export enum MovementFields {
  Notes = 'notes',
  BatchNumber = 'batchNumber',
  BestBefore = 'bestBefore',
  UnitPrice = 'unitPrice',
  Warehouse = 'warehouse',
  StorageNumber = 'storageNumber',
  Transports = 'transports',
  Documents = 'documents',
  Status = 'status'
}

export enum PaymentFields {
  Group = 'group',
  TaxRate = 'taxRate',
  Notes = 'notes',
  Documents = 'documents'
}

export enum TransportFields {
  Price = 'price',
  ArrivalDate = 'arrivalDate',
  ArrivalPoint = 'arrivalPoint',
  Transporter = 'transporter'
}

export enum TransporterFields {
  Name = 'name',
  Images = 'images',
  Identifications = 'identifications',
  TransportAgency = 'transportAgency'
}

export enum WarehouseFields {
  Address = 'address',
  Mobile = 'mobile',
  Phone = 'phone',
  ContactPersons = 'contactPersons',
  Website = 'website'
}

export enum TableView {
  Endless = 'endless',
  Pages = 'pages'
}

export enum AccountPlan {
  Free = 'free',
  Pro = 'pro',
  Premium = 'premium',
  Custom = 'custom',
  Admin = 'admin'
}

export type Setting = {
  id: Scalars['String'];
  chat: Scalars['Boolean'];
  currency?: Maybe<Scalars['String']>;
  currencySymbol?: Maybe<Scalars['String']>;
  defaultLanguage?: Maybe<Language>;
  logo?: Maybe<File>;
  manufacturerFields: Array<ManufacturerFields>;
  movementFields: Array<MovementFields>;
  name: Scalars['String'];
  clientFields: Array<ClientFields>;
  supplierFields: Array<SupplierFields>;
  presets: Array<Preset>;
  productFields: Array<ProductFields>;
  timezone?: Maybe<Scalars['String']>;
  transportAgencyFields: Array<TransportAgencyFields>;
  transportFields: Array<TransportFields>;
  transporterFields: Array<TransporterFields>;
  transports: Scalars['Boolean'];
  plan?: Maybe<AccountPlan>;
  warehouseFields: Array<WarehouseFields>;
  warehouses: Scalars['Boolean'];
  subDomain: Scalars['String'];
  fiscalNumber?: Maybe<Scalars['String']>;
  address?: Maybe<Address>;
  billingAddress?: Maybe<Address>;
  phone?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  packaging: Scalars['Boolean'];
  shop: Scalars['Boolean'];
  lengthUnit?: Maybe<Scalars['String']>;
  weightUnit?: Maybe<Scalars['String']>;
  paymentFields: Array<PaymentFields>;
  accounting: Scalars['Boolean'];
};


export type SettingPresetsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<PresetWhereUniqueInput>;
};

export type Integration = {
  id: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  secret?: Maybe<Scalars['String']>;
  service: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};

export type Preset = {
  id: Scalars['String'];
  name: Scalars['String'];
  columnOrder: Array<Scalars['String']>;
  filter?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  hiddenColumns: Array<Scalars['String']>;
  rowsPerPage?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
  tableView?: Maybe<TableView>;
  active: Scalars['Boolean'];
};

export type SupplierImport = {
  id?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  addressLine1?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  addressLine2?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  cpFirstName?: Maybe<Scalars['String']>;
  cpLastName?: Maybe<Scalars['String']>;
  cpEmail?: Maybe<Scalars['String']>;
  cpPhone?: Maybe<Scalars['String']>;
  cpMobile?: Maybe<Scalars['String']>;
  cpScheduleStart?: Maybe<Scalars['DateTime']>;
  cpScheduleEnd?: Maybe<Scalars['DateTime']>;
  notes?: Maybe<Scalars['String']>;
};

export type Supplier = {
  id: Scalars['String'];
  supplierId: Scalars['Int'];
  email?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  name: Scalars['String'];
  withAccount?: Maybe<Scalars['Boolean']>;
  contactPersons: Array<ContactPerson>;
  mobile?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  address?: Maybe<Address>;
  billingAddress?: Maybe<Address>;
  fiscalNumber?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  movements: Array<Movement>;
  inventories: Array<Inventory>;
};


export type SupplierContactPersonsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ContactPersonWhereUniqueInput>;
};


export type SupplierMovementsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<MovementWhereUniqueInput>;
};


export type SupplierInventoriesArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<InventoryWhereUniqueInput>;
};


export type IntegrationRequestCreateInput = {
  id?: Maybe<Scalars['String']>;
};

export type FileWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  smallUrl?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type MessageWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type ChannelWhereInput = {
  createdAt?: Maybe<DateTimeFilter>;
  description?: Maybe<NullableStringFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  role?: Maybe<NullableStringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  messages?: Maybe<MessageFilter>;
  AND?: Maybe<Array<ChannelWhereInput>>;
  OR?: Maybe<Array<ChannelWhereInput>>;
  NOT?: Maybe<Array<ChannelWhereInput>>;
};

export type ChannelWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type MessageWhereInput = {
  channelId?: Maybe<NullableStringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  movementId?: Maybe<NullableStringFilter>;
  recipient?: Maybe<NullableStringFilter>;
  sender?: Maybe<StringFilter>;
  text?: Maybe<NullableStringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  images?: Maybe<FileFilter>;
  AND?: Maybe<Array<MessageWhereInput>>;
  OR?: Maybe<Array<MessageWhereInput>>;
  NOT?: Maybe<Array<MessageWhereInput>>;
  channel?: Maybe<ChannelWhereInput>;
  movement?: Maybe<MovementWhereInput>;
};

export type MessageUpdateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  recipient?: Maybe<Scalars['String']>;
  sender?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  mentions?: Maybe<MessageUpdatementionsInput>;
  channel?: Maybe<ChannelUpdateOneWithoutMessagesInput>;
  movement?: Maybe<MovementUpdateOneWithoutCommentsInput>;
  images?: Maybe<FileUpdateManyWithoutMessageInput>;
};

export type ChannelCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  role?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  members?: Maybe<ChannelCreatemembersInput>;
  messages?: Maybe<MessageCreateManyWithoutChannelInput>;
};

export type ChannelUpdateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  members?: Maybe<ChannelUpdatemembersInput>;
  messages?: Maybe<MessageUpdateManyWithoutChannelInput>;
};

export type ContactPersonWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  firstName_lastName_email?: Maybe<FirstNameLastNameEmailCompoundUniqueInput>;
};

export type MovementWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  movementId?: Maybe<Scalars['Int']>;
};

export type InventoryWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type ClientWhereUniqueInput = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ClientWhereInput = {
  active?: Maybe<BooleanFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<NullableStringFilter>;
  fiscalNumber?: Maybe<NullableStringFilter>;
  id?: Maybe<StringFilter>;
  language?: Maybe<Language>;
  mobile?: Maybe<NullableStringFilter>;
  name?: Maybe<StringFilter>;
  clientId?: Maybe<IntFilter>;
  phone?: Maybe<NullableStringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  website?: Maybe<NullableStringFilter>;
  withAccount?: Maybe<NullableBooleanFilter>;
  contactPersons?: Maybe<ContactPersonFilter>;
  images?: Maybe<FileFilter>;
  interactions?: Maybe<InteractionFilter>;
  inventories?: Maybe<InventoryFilter>;
  movements?: Maybe<MovementFilter>;
  reservations?: Maybe<ReservationFilter>;
  addressId?: Maybe<NullableStringFilter>;
  billingAddressId?: Maybe<NullableStringFilter>;
  invoices?: Maybe<InvoiceFilter>;
  source?: Maybe<NullableStringFilter>;
  notes?: Maybe<NullableStringFilter>;
  payments?: Maybe<PaymentFilter>;
  stripeId?: Maybe<NullableStringFilter>;
  AND?: Maybe<Array<ClientWhereInput>>;
  OR?: Maybe<Array<ClientWhereInput>>;
  NOT?: Maybe<Array<ClientWhereInput>>;
  address?: Maybe<AddressWhereInput>;
  billingAddress?: Maybe<AddressWhereInput>;
};

export type ClientOrderByInput = {
  active?: Maybe<OrderByArg>;
  createdAt?: Maybe<OrderByArg>;
  email?: Maybe<OrderByArg>;
  fiscalNumber?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  language?: Maybe<OrderByArg>;
  mobile?: Maybe<OrderByArg>;
  name?: Maybe<OrderByArg>;
  clientId?: Maybe<OrderByArg>;
  phone?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
  website?: Maybe<OrderByArg>;
  withAccount?: Maybe<OrderByArg>;
  addressId?: Maybe<OrderByArg>;
  billingAddressId?: Maybe<OrderByArg>;
  source?: Maybe<OrderByArg>;
  notes?: Maybe<OrderByArg>;
  stripeId?: Maybe<OrderByArg>;
};

export type ClientCreateInput = {
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobile?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  clientId: Scalars['Int'];
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutClientInput>;
  images?: Maybe<FileCreateManyWithoutClientInput>;
  interactions?: Maybe<InteractionCreateManyWithoutClientInput>;
  inventories?: Maybe<InventoryCreateManyWithoutClientInput>;
  movements?: Maybe<MovementCreateManyWithoutClientInput>;
  reservations?: Maybe<ReservationCreateManyWithoutClientInput>;
  address?: Maybe<AddressCreateOneWithoutClientAddressInput>;
  billingAddress?: Maybe<AddressCreateOneWithoutClientBillingAddressInput>;
  invoices?: Maybe<InvoiceCreateManyWithoutClientInput>;
  payments?: Maybe<PaymentCreateManyWithoutClientInput>;
};

export type ClientUpdateInput = {
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutClientInput>;
  images?: Maybe<FileUpdateManyWithoutClientInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutClientInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutClientInput>;
  movements?: Maybe<MovementUpdateManyWithoutClientInput>;
  reservations?: Maybe<ReservationUpdateManyWithoutClientInput>;
  address?: Maybe<AddressUpdateOneWithoutClientAddressInput>;
  billingAddress?: Maybe<AddressUpdateOneWithoutClientBillingAddressInput>;
  invoices?: Maybe<InvoiceUpdateManyWithoutClientInput>;
  payments?: Maybe<PaymentUpdateManyWithoutClientInput>;
};

export type ReservationWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  movementId?: Maybe<Scalars['String']>;
};

export type BatchWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type InventoryWhereInput = {
  amount?: Maybe<IntFilter>;
  batchId?: Maybe<NullableStringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  productId?: Maybe<StringFilter>;
  storageNumber?: Maybe<NullableStringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  warehouseId?: Maybe<NullableStringFilter>;
  supplierId?: Maybe<NullableStringFilter>;
  movements?: Maybe<MovementFilter>;
  reservations?: Maybe<ReservationFilter>;
  clientId?: Maybe<NullableStringFilter>;
  source?: Maybe<NullableStringFilter>;
  isListed?: Maybe<NullableBooleanFilter>;
  listPrice?: Maybe<NullableFloatFilter>;
  AND?: Maybe<Array<InventoryWhereInput>>;
  OR?: Maybe<Array<InventoryWhereInput>>;
  NOT?: Maybe<Array<InventoryWhereInput>>;
  supplier?: Maybe<SupplierWhereInput>;
  batch?: Maybe<BatchWhereInput>;
  product?: Maybe<ProductWhereInput>;
  warehouse?: Maybe<WarehouseWhereInput>;
  client?: Maybe<ClientWhereInput>;
};

export type InventoryOrderByInput = {
  amount?: Maybe<OrderByArg>;
  batchId?: Maybe<OrderByArg>;
  createdAt?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  productId?: Maybe<OrderByArg>;
  storageNumber?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
  warehouseId?: Maybe<OrderByArg>;
  supplierId?: Maybe<OrderByArg>;
  clientId?: Maybe<OrderByArg>;
  source?: Maybe<OrderByArg>;
  isListed?: Maybe<OrderByArg>;
  listPrice?: Maybe<OrderByArg>;
};

export type InvoiceWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type TransporterWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export enum TransportType {
  Plane = 'plane',
  Ship = 'ship',
  Train = 'train',
  Truck = 'truck'
}

export type WarehouseWhereUniqueInput = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type WarehouseWhereInput = {
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<NullableStringFilter>;
  id?: Maybe<StringFilter>;
  mobile?: Maybe<NullableStringFilter>;
  name?: Maybe<StringFilter>;
  phone?: Maybe<NullableStringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  website?: Maybe<NullableStringFilter>;
  contactPersons?: Maybe<ContactPersonFilter>;
  inventories?: Maybe<InventoryFilter>;
  movements?: Maybe<MovementFilter>;
  addressId?: Maybe<NullableStringFilter>;
  Notification?: Maybe<NotificationFilter>;
  notes?: Maybe<NullableStringFilter>;
  AND?: Maybe<Array<WarehouseWhereInput>>;
  OR?: Maybe<Array<WarehouseWhereInput>>;
  NOT?: Maybe<Array<WarehouseWhereInput>>;
  address?: Maybe<AddressWhereInput>;
};

export type WarehouseOrderByInput = {
  createdAt?: Maybe<OrderByArg>;
  email?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  mobile?: Maybe<OrderByArg>;
  name?: Maybe<OrderByArg>;
  phone?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
  website?: Maybe<OrderByArg>;
  addressId?: Maybe<OrderByArg>;
  notes?: Maybe<OrderByArg>;
};

export type TransportAgencyWhereInput = {
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<NullableStringFilter>;
  id?: Maybe<StringFilter>;
  mobile?: Maybe<NullableStringFilter>;
  name?: Maybe<StringFilter>;
  phone?: Maybe<NullableStringFilter>;
  website?: Maybe<NullableStringFilter>;
  contactPersons?: Maybe<ContactPersonFilter>;
  images?: Maybe<FileFilter>;
  transports?: Maybe<TransportFilter>;
  transporters?: Maybe<TransporterFilter>;
  addressId?: Maybe<NullableStringFilter>;
  source?: Maybe<NullableStringFilter>;
  notes?: Maybe<NullableStringFilter>;
  payments?: Maybe<PaymentFilter>;
  AND?: Maybe<Array<TransportAgencyWhereInput>>;
  OR?: Maybe<Array<TransportAgencyWhereInput>>;
  NOT?: Maybe<Array<TransportAgencyWhereInput>>;
  address?: Maybe<AddressWhereInput>;
};

export type TransportAgencyOrderByInput = {
  createdAt?: Maybe<OrderByArg>;
  email?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  mobile?: Maybe<OrderByArg>;
  name?: Maybe<OrderByArg>;
  phone?: Maybe<OrderByArg>;
  website?: Maybe<OrderByArg>;
  addressId?: Maybe<OrderByArg>;
  source?: Maybe<OrderByArg>;
  notes?: Maybe<OrderByArg>;
};

export type TransportAgencyWhereUniqueInput = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type TransportAgencyCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutTransportAgencyInput>;
  images?: Maybe<FileCreateManyWithoutTransportAgencyInput>;
  transports?: Maybe<TransportCreateManyWithoutTransportAgencyInput>;
  transporters?: Maybe<TransporterCreateManyWithoutTransportAgencyInput>;
  address?: Maybe<AddressCreateOneWithoutTransportAgencyInput>;
  payments?: Maybe<PaymentCreateManyWithoutTransportAgencyInput>;
};

export type TransportAgencyUpdateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutTransportAgencyInput>;
  images?: Maybe<FileUpdateManyWithoutTransportAgencyInput>;
  transports?: Maybe<TransportUpdateManyWithoutTransportAgencyInput>;
  transporters?: Maybe<TransporterUpdateManyWithoutTransportAgencyInput>;
  address?: Maybe<AddressUpdateOneWithoutTransportAgencyInput>;
  payments?: Maybe<PaymentUpdateManyWithoutTransportAgencyInput>;
};

export type WarehouseCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutWarehouseInput>;
  inventories?: Maybe<InventoryCreateManyWithoutWarehouseInput>;
  movements?: Maybe<MovementCreateManyWithoutWarehouseInput>;
  address?: Maybe<AddressCreateOneWithoutWarehouseInput>;
  Notification?: Maybe<NotificationCreateManyWithoutWarehouseInput>;
};

export type WarehouseUpdateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutWarehouseInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutWarehouseInput>;
  movements?: Maybe<MovementUpdateManyWithoutWarehouseInput>;
  address?: Maybe<AddressUpdateOneWithoutWarehouseInput>;
  Notification?: Maybe<NotificationUpdateManyWithoutWarehouseInput>;
};

export type TransportWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  arrivalDate_arrivalPoint?: Maybe<ArrivalDateArrivalPointCompoundUniqueInput>;
};

export type MovementWhereInput = {
  active?: Maybe<BooleanFilter>;
  amount?: Maybe<IntFilter>;
  batchId?: Maybe<NullableStringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  date?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  status?: Maybe<MovementStatus>;
  inventoryId?: Maybe<NullableStringFilter>;
  movementId?: Maybe<IntFilter>;
  notes?: Maybe<NullableStringFilter>;
  productId?: Maybe<StringFilter>;
  sendMail?: Maybe<BooleanFilter>;
  storageNumber?: Maybe<NullableStringFilter>;
  type?: Maybe<MovementType>;
  unitPrice?: Maybe<NullableFloatFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  warehouseId?: Maybe<NullableStringFilter>;
  clientId?: Maybe<NullableStringFilter>;
  supplierId?: Maybe<NullableStringFilter>;
  interactions?: Maybe<InteractionFilter>;
  comments?: Maybe<MessageFilter>;
  transports?: Maybe<TransportFilter>;
  invoiceId?: Maybe<NullableStringFilter>;
  invoiceId_InvoiceToMovement?: Maybe<NullableIntFilter>;
  source?: Maybe<NullableStringFilter>;
  documents?: Maybe<FileFilter>;
  payments?: Maybe<PaymentFilter>;
  AND?: Maybe<Array<MovementWhereInput>>;
  OR?: Maybe<Array<MovementWhereInput>>;
  NOT?: Maybe<Array<MovementWhereInput>>;
  client?: Maybe<ClientWhereInput>;
  supplier?: Maybe<SupplierWhereInput>;
  batch?: Maybe<BatchWhereInput>;
  inventory?: Maybe<InventoryWhereInput>;
  product?: Maybe<ProductWhereInput>;
  warehouse?: Maybe<WarehouseWhereInput>;
  reservation?: Maybe<ReservationWhereInput>;
  invoice?: Maybe<InvoiceWhereInput>;
};

export type MovementOrderByInput = {
  active?: Maybe<OrderByArg>;
  amount?: Maybe<OrderByArg>;
  batchId?: Maybe<OrderByArg>;
  createdAt?: Maybe<OrderByArg>;
  date?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  status?: Maybe<OrderByArg>;
  inventoryId?: Maybe<OrderByArg>;
  movementId?: Maybe<OrderByArg>;
  notes?: Maybe<OrderByArg>;
  productId?: Maybe<OrderByArg>;
  sendMail?: Maybe<OrderByArg>;
  storageNumber?: Maybe<OrderByArg>;
  type?: Maybe<OrderByArg>;
  unitPrice?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
  warehouseId?: Maybe<OrderByArg>;
  clientId?: Maybe<OrderByArg>;
  supplierId?: Maybe<OrderByArg>;
  invoiceId?: Maybe<OrderByArg>;
  invoiceId_InvoiceToMovement?: Maybe<OrderByArg>;
  source?: Maybe<OrderByArg>;
};

export type NotificationCreateInput = {
  active?: Maybe<Scalars['Boolean']>;
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  type: NotificationType;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: Scalars['String'];
  userLanguage?: Maybe<Language>;
  userEmail: Scalars['String'];
  warehouse?: Maybe<WarehouseCreateOneWithoutNotificationInput>;
  product: ProductCreateOneWithoutNotificationsInput;
};

export type NotificationUpdateInput = {
  active?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  type?: Maybe<NotificationType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<Scalars['String']>;
  userLanguage?: Maybe<Language>;
  userEmail?: Maybe<Scalars['String']>;
  warehouse?: Maybe<WarehouseUpdateOneWithoutNotificationInput>;
  product?: Maybe<ProductUpdateOneRequiredWithoutNotificationsInput>;
};

export type NotificationWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  productId_user_type_amount?: Maybe<ProductIdUserTypeAmountCompoundUniqueInput>;
};

export type PaymentWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  stripePaymentIntentId?: Maybe<Scalars['String']>;
  stripeClientSecret?: Maybe<Scalars['String']>;
};

export type TaxRateWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type GroupWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type BankAccountWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type PaymentWhereInput = {
  id?: Maybe<StringFilter>;
  paymentId?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  type?: Maybe<PaymentType>;
  status?: Maybe<PaymentStatus>;
  dueDate?: Maybe<NullableDateTimeFilter>;
  date?: Maybe<NullableDateTimeFilter>;
  source?: Maybe<NullableStringFilter>;
  concept?: Maybe<NullableStringFilter>;
  groupId?: Maybe<NullableStringFilter>;
  amount?: Maybe<FloatFilter>;
  currency?: Maybe<StringFilter>;
  taxRateId?: Maybe<NullableStringFilter>;
  recipient?: Maybe<NullableStringFilter>;
  notes?: Maybe<NullableStringFilter>;
  movementId?: Maybe<NullableStringFilter>;
  transportAgencyId?: Maybe<NullableStringFilter>;
  clientId?: Maybe<NullableStringFilter>;
  supplierId?: Maybe<NullableStringFilter>;
  documents?: Maybe<FileFilter>;
  bankAccountId?: Maybe<NullableStringFilter>;
  paymentMethod?: Maybe<NullableStringFilter>;
  stripePaymentIntentId?: Maybe<NullableStringFilter>;
  stripeClientSecret?: Maybe<NullableStringFilter>;
  AND?: Maybe<Array<PaymentWhereInput>>;
  OR?: Maybe<Array<PaymentWhereInput>>;
  NOT?: Maybe<Array<PaymentWhereInput>>;
  group?: Maybe<GroupWhereInput>;
  taxRate?: Maybe<TaxRateWhereInput>;
  movement?: Maybe<MovementWhereInput>;
  transportAgency?: Maybe<TransportAgencyWhereInput>;
  client?: Maybe<ClientWhereInput>;
  supplier?: Maybe<SupplierWhereInput>;
  bankAccount?: Maybe<BankAccountWhereInput>;
};

export type PaymentOrderByInput = {
  id?: Maybe<OrderByArg>;
  paymentId?: Maybe<OrderByArg>;
  createdAt?: Maybe<OrderByArg>;
  type?: Maybe<OrderByArg>;
  status?: Maybe<OrderByArg>;
  dueDate?: Maybe<OrderByArg>;
  date?: Maybe<OrderByArg>;
  source?: Maybe<OrderByArg>;
  concept?: Maybe<OrderByArg>;
  groupId?: Maybe<OrderByArg>;
  amount?: Maybe<OrderByArg>;
  currency?: Maybe<OrderByArg>;
  taxRateId?: Maybe<OrderByArg>;
  recipient?: Maybe<OrderByArg>;
  notes?: Maybe<OrderByArg>;
  movementId?: Maybe<OrderByArg>;
  transportAgencyId?: Maybe<OrderByArg>;
  clientId?: Maybe<OrderByArg>;
  supplierId?: Maybe<OrderByArg>;
  bankAccountId?: Maybe<OrderByArg>;
  paymentMethod?: Maybe<OrderByArg>;
  stripePaymentIntentId?: Maybe<OrderByArg>;
  stripeClientSecret?: Maybe<OrderByArg>;
};

export type TaxRateCreateInput = {
  id?: Maybe<Scalars['String']>;
  amount: Scalars['Float'];
  isSameCountry: Scalars['Boolean'];
  isEU?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  group?: Maybe<GroupCreateOneWithoutTaxRateInput>;
  product?: Maybe<ProductCreateOneWithoutTaxRatesInput>;
  payments?: Maybe<PaymentCreateManyWithoutTaxRateInput>;
};

export type TaxRateUpdateInput = {
  id?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  isSameCountry?: Maybe<Scalars['Boolean']>;
  isEU?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  group?: Maybe<GroupUpdateOneWithoutTaxRateInput>;
  product?: Maybe<ProductUpdateOneWithoutTaxRatesInput>;
  payments?: Maybe<PaymentUpdateManyWithoutTaxRateInput>;
};

export type GroupCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  payments?: Maybe<PaymentCreateManyWithoutGroupInput>;
  taxRate?: Maybe<TaxRateCreateOneWithoutGroupInput>;
};

export type GroupUpdateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  payments?: Maybe<PaymentUpdateManyWithoutGroupInput>;
  taxRate?: Maybe<TaxRateUpdateOneWithoutGroupInput>;
};

export type UnitWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type ProductWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['Int']>;
  ASIN?: Maybe<Scalars['String']>;
  EAN?: Maybe<Scalars['String']>;
  ISBN?: Maybe<Scalars['String']>;
  UPC?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  name_color_material_dimensionId_weight?: Maybe<NameColorMaterialDimensionIdWeightCompoundUniqueInput>;
};

export type ProductWhereInput = {
  id?: Maybe<StringFilter>;
  productId?: Maybe<IntFilter>;
  ASIN?: Maybe<NullableStringFilter>;
  EAN?: Maybe<NullableStringFilter>;
  ISBN?: Maybe<NullableStringFilter>;
  UPC?: Maybe<NullableStringFilter>;
  active?: Maybe<BooleanFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  description?: Maybe<NullableStringFilter>;
  manufacturerId?: Maybe<NullableStringFilter>;
  name?: Maybe<StringFilter>;
  slug?: Maybe<StringFilter>;
  dimensionId?: Maybe<NullableStringFilter>;
  material?: Maybe<NullableStringFilter>;
  color?: Maybe<NullableStringFilter>;
  weight?: Maybe<NullableFloatFilter>;
  batches?: Maybe<BatchFilter>;
  images?: Maybe<FileFilter>;
  interactions?: Maybe<InteractionFilter>;
  inventories?: Maybe<InventoryFilter>;
  movements?: Maybe<MovementFilter>;
  notifications?: Maybe<NotificationFilter>;
  units?: Maybe<UnitFilter>;
  taxRates?: Maybe<TaxRateFilter>;
  source?: Maybe<NullableStringFilter>;
  packaging?: Maybe<ProductFilter>;
  isPackaging?: Maybe<BooleanFilter>;
  isListed?: Maybe<NullableBooleanFilter>;
  variants?: Maybe<ProductFilter>;
  productId_PackageToPackagedProduct?: Maybe<NullableStringFilter>;
  productId_VariantToProduct?: Maybe<NullableStringFilter>;
  categories?: Maybe<CategoryFilter>;
  AND?: Maybe<Array<ProductWhereInput>>;
  OR?: Maybe<Array<ProductWhereInput>>;
  NOT?: Maybe<Array<ProductWhereInput>>;
  dimensions?: Maybe<DimensionWhereInput>;
  manufacturer?: Maybe<ManufacturerWhereInput>;
  packagedProduct?: Maybe<ProductWhereInput>;
  variantProduct?: Maybe<ProductWhereInput>;
};

export type ProductOrderByInput = {
  id?: Maybe<OrderByArg>;
  productId?: Maybe<OrderByArg>;
  ASIN?: Maybe<OrderByArg>;
  EAN?: Maybe<OrderByArg>;
  ISBN?: Maybe<OrderByArg>;
  UPC?: Maybe<OrderByArg>;
  active?: Maybe<OrderByArg>;
  createdAt?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
  description?: Maybe<OrderByArg>;
  manufacturerId?: Maybe<OrderByArg>;
  name?: Maybe<OrderByArg>;
  slug?: Maybe<OrderByArg>;
  dimensionId?: Maybe<OrderByArg>;
  material?: Maybe<OrderByArg>;
  color?: Maybe<OrderByArg>;
  weight?: Maybe<OrderByArg>;
  source?: Maybe<OrderByArg>;
  isPackaging?: Maybe<OrderByArg>;
  isListed?: Maybe<OrderByArg>;
  productId_PackageToPackagedProduct?: Maybe<OrderByArg>;
  productId_VariantToProduct?: Maybe<OrderByArg>;
};

export type UnitCreateInput = {
  baseAmount: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  product?: Maybe<ProductCreateOneWithoutUnitsInput>;
};

export type ProductCreateInput = {
  id?: Maybe<Scalars['String']>;
  productId: Scalars['Int'];
  ASIN?: Maybe<Scalars['String']>;
  EAN?: Maybe<Scalars['String']>;
  ISBN?: Maybe<Scalars['String']>;
  UPC?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  material?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  isPackaging?: Maybe<Scalars['Boolean']>;
  isListed?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<ProductCreatetagsInput>;
  dimensions?: Maybe<DimensionCreateOneWithoutProductInput>;
  manufacturer?: Maybe<ManufacturerCreateOneWithoutProductsInput>;
  batches?: Maybe<BatchCreateManyWithoutProductInput>;
  images?: Maybe<FileCreateManyWithoutProductInput>;
  interactions?: Maybe<InteractionCreateManyWithoutProductInput>;
  inventories?: Maybe<InventoryCreateManyWithoutProductInput>;
  movements?: Maybe<MovementCreateManyWithoutProductInput>;
  notifications?: Maybe<NotificationCreateManyWithoutProductInput>;
  units?: Maybe<UnitCreateManyWithoutProductInput>;
  taxRates?: Maybe<TaxRateCreateManyWithoutProductInput>;
  packaging?: Maybe<ProductCreateManyWithoutPackagedProductInput>;
  variants?: Maybe<ProductCreateManyWithoutVariantProductInput>;
  packagedProduct?: Maybe<ProductCreateOneWithoutPackagingInput>;
  variantProduct?: Maybe<ProductCreateOneWithoutVariantsInput>;
  categories?: Maybe<CategoryCreateManyWithoutProductsInput>;
};

export type ProductUpdateInput = {
  id?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['Int']>;
  ASIN?: Maybe<Scalars['String']>;
  EAN?: Maybe<Scalars['String']>;
  ISBN?: Maybe<Scalars['String']>;
  UPC?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  material?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  isPackaging?: Maybe<Scalars['Boolean']>;
  isListed?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<ProductUpdatetagsInput>;
  dimensions?: Maybe<DimensionUpdateOneWithoutProductInput>;
  manufacturer?: Maybe<ManufacturerUpdateOneWithoutProductsInput>;
  batches?: Maybe<BatchUpdateManyWithoutProductInput>;
  images?: Maybe<FileUpdateManyWithoutProductInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutProductInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutProductInput>;
  movements?: Maybe<MovementUpdateManyWithoutProductInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutProductInput>;
  units?: Maybe<UnitUpdateManyWithoutProductInput>;
  taxRates?: Maybe<TaxRateUpdateManyWithoutProductInput>;
  packaging?: Maybe<ProductUpdateManyWithoutPackagedProductInput>;
  variants?: Maybe<ProductUpdateManyWithoutVariantProductInput>;
  packagedProduct?: Maybe<ProductUpdateOneWithoutPackagingInput>;
  variantProduct?: Maybe<ProductUpdateOneWithoutVariantsInput>;
  categories?: Maybe<CategoryUpdateManyWithoutProductsInput>;
};

export type PresetWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  user_name_type?: Maybe<UserNameTypeCompoundUniqueInput>;
};

export type PresetWhereInput = {
  active?: Maybe<BooleanFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  currency?: Maybe<NullableStringFilter>;
  filter?: Maybe<NullableStringFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  rowsPerPage?: Maybe<NullableIntFilter>;
  settingId?: Maybe<NullableStringFilter>;
  sort?: Maybe<NullableStringFilter>;
  tableView?: Maybe<TableView>;
  type?: Maybe<EntityType>;
  user?: Maybe<NullableStringFilter>;
  AND?: Maybe<Array<PresetWhereInput>>;
  OR?: Maybe<Array<PresetWhereInput>>;
  NOT?: Maybe<Array<PresetWhereInput>>;
  setting?: Maybe<SettingWhereInput>;
};

export type SettingWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type PresetCreateInput = {
  active: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  currency?: Maybe<Scalars['String']>;
  filter?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  rowsPerPage?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  tableView?: Maybe<TableView>;
  type: EntityType;
  user?: Maybe<Scalars['String']>;
  columnOrder?: Maybe<PresetCreatecolumnOrderInput>;
  hiddenColumns?: Maybe<PresetCreatehiddenColumnsInput>;
  setting?: Maybe<SettingCreateOneWithoutPresetsInput>;
};

export type PresetUpdateInput = {
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  currency?: Maybe<Scalars['String']>;
  filter?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  rowsPerPage?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  tableView?: Maybe<TableView>;
  type?: Maybe<EntityType>;
  user?: Maybe<Scalars['String']>;
  columnOrder?: Maybe<PresetUpdatecolumnOrderInput>;
  hiddenColumns?: Maybe<PresetUpdatehiddenColumnsInput>;
  setting?: Maybe<SettingUpdateOneWithoutPresetsInput>;
};

export type SettingUpdateInput = {
  subDomain?: Maybe<Scalars['String']>;
  chat?: Maybe<Scalars['Boolean']>;
  currency?: Maybe<Scalars['String']>;
  currencySymbol?: Maybe<Scalars['String']>;
  defaultLanguage?: Maybe<Language>;
  id?: Maybe<Scalars['String']>;
  stripeCustomerId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  transports?: Maybe<Scalars['Boolean']>;
  plan?: Maybe<AccountPlan>;
  warehouses?: Maybe<Scalars['Boolean']>;
  packaging?: Maybe<Scalars['Boolean']>;
  shop?: Maybe<Scalars['Boolean']>;
  accounting?: Maybe<Scalars['Boolean']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  weightUnit?: Maybe<Scalars['String']>;
  lengthUnit?: Maybe<Scalars['String']>;
  manufacturerFields?: Maybe<SettingUpdatemanufacturerFieldsInput>;
  movementFields?: Maybe<SettingUpdatemovementFieldsInput>;
  supplierFields?: Maybe<SettingUpdatesupplierFieldsInput>;
  clientFields?: Maybe<SettingUpdateclientFieldsInput>;
  productFields?: Maybe<SettingUpdateproductFieldsInput>;
  transportAgencyFields?: Maybe<SettingUpdatetransportAgencyFieldsInput>;
  transportFields?: Maybe<SettingUpdatetransportFieldsInput>;
  transporterFields?: Maybe<SettingUpdatetransporterFieldsInput>;
  paymentFields?: Maybe<SettingUpdatepaymentFieldsInput>;
  warehouseFields?: Maybe<SettingUpdatewarehouseFieldsInput>;
  logo?: Maybe<FileUpdateOneWithoutSettingsInput>;
  presets?: Maybe<PresetUpdateManyWithoutSettingInput>;
  address?: Maybe<AddressUpdateOneWithoutAddressInput>;
  billingAddress?: Maybe<AddressUpdateOneWithoutBillingAddressInput>;
};

export type SettingCreateInput = {
  subDomain: Scalars['String'];
  chat?: Maybe<Scalars['Boolean']>;
  currency?: Maybe<Scalars['String']>;
  currencySymbol?: Maybe<Scalars['String']>;
  defaultLanguage?: Maybe<Language>;
  id?: Maybe<Scalars['String']>;
  stripeCustomerId?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  timezone?: Maybe<Scalars['String']>;
  transports?: Maybe<Scalars['Boolean']>;
  plan?: Maybe<AccountPlan>;
  warehouses?: Maybe<Scalars['Boolean']>;
  packaging: Scalars['Boolean'];
  shop?: Maybe<Scalars['Boolean']>;
  accounting?: Maybe<Scalars['Boolean']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  weightUnit?: Maybe<Scalars['String']>;
  lengthUnit?: Maybe<Scalars['String']>;
  manufacturerFields?: Maybe<SettingCreatemanufacturerFieldsInput>;
  movementFields?: Maybe<SettingCreatemovementFieldsInput>;
  supplierFields?: Maybe<SettingCreatesupplierFieldsInput>;
  clientFields?: Maybe<SettingCreateclientFieldsInput>;
  productFields?: Maybe<SettingCreateproductFieldsInput>;
  transportAgencyFields?: Maybe<SettingCreatetransportAgencyFieldsInput>;
  transportFields?: Maybe<SettingCreatetransportFieldsInput>;
  transporterFields?: Maybe<SettingCreatetransporterFieldsInput>;
  paymentFields?: Maybe<SettingCreatepaymentFieldsInput>;
  warehouseFields?: Maybe<SettingCreatewarehouseFieldsInput>;
  logo?: Maybe<FileCreateOneWithoutSettingsInput>;
  presets?: Maybe<PresetCreateManyWithoutSettingInput>;
  address?: Maybe<AddressCreateOneWithoutAddressInput>;
  billingAddress?: Maybe<AddressCreateOneWithoutBillingAddressInput>;
};

export type SupplierWhereUniqueInput = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type SupplierWhereInput = {
  active?: Maybe<BooleanFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<NullableStringFilter>;
  fiscalNumber?: Maybe<NullableStringFilter>;
  id?: Maybe<StringFilter>;
  language?: Maybe<Language>;
  mobile?: Maybe<NullableStringFilter>;
  name?: Maybe<StringFilter>;
  supplierId?: Maybe<IntFilter>;
  phone?: Maybe<NullableStringFilter>;
  addressId?: Maybe<NullableStringFilter>;
  billingAddressId?: Maybe<NullableStringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  website?: Maybe<NullableStringFilter>;
  withAccount?: Maybe<NullableBooleanFilter>;
  contactPersons?: Maybe<ContactPersonFilter>;
  images?: Maybe<FileFilter>;
  interactions?: Maybe<InteractionFilter>;
  inventories?: Maybe<InventoryFilter>;
  movements?: Maybe<MovementFilter>;
  source?: Maybe<NullableStringFilter>;
  notes?: Maybe<NullableStringFilter>;
  payments?: Maybe<PaymentFilter>;
  AND?: Maybe<Array<SupplierWhereInput>>;
  OR?: Maybe<Array<SupplierWhereInput>>;
  NOT?: Maybe<Array<SupplierWhereInput>>;
  address?: Maybe<AddressWhereInput>;
  billingAddress?: Maybe<AddressWhereInput>;
};

export type SupplierOrderByInput = {
  active?: Maybe<OrderByArg>;
  createdAt?: Maybe<OrderByArg>;
  email?: Maybe<OrderByArg>;
  fiscalNumber?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  language?: Maybe<OrderByArg>;
  mobile?: Maybe<OrderByArg>;
  name?: Maybe<OrderByArg>;
  supplierId?: Maybe<OrderByArg>;
  phone?: Maybe<OrderByArg>;
  addressId?: Maybe<OrderByArg>;
  billingAddressId?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
  website?: Maybe<OrderByArg>;
  withAccount?: Maybe<OrderByArg>;
  source?: Maybe<OrderByArg>;
  notes?: Maybe<OrderByArg>;
};

export type SupplierCreateInput = {
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobile?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  supplierId: Scalars['Int'];
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  address?: Maybe<AddressCreateOneWithoutSupplierAddressInput>;
  billingAddress?: Maybe<AddressCreateOneWithoutSupplierBillingAddressInput>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutSupplierInput>;
  images?: Maybe<FileCreateManyWithoutSupplierInput>;
  interactions?: Maybe<InteractionCreateManyWithoutSupplierInput>;
  inventories?: Maybe<InventoryCreateManyWithoutSupplierInput>;
  movements?: Maybe<MovementCreateManyWithoutSupplierInput>;
  payments?: Maybe<PaymentCreateManyWithoutSupplierInput>;
};

export type SupplierUpdateInput = {
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  supplierId?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  address?: Maybe<AddressUpdateOneWithoutSupplierAddressInput>;
  billingAddress?: Maybe<AddressUpdateOneWithoutSupplierBillingAddressInput>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutSupplierInput>;
  images?: Maybe<FileUpdateManyWithoutSupplierInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutSupplierInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutSupplierInput>;
  movements?: Maybe<MovementUpdateManyWithoutSupplierInput>;
  payments?: Maybe<PaymentUpdateManyWithoutSupplierInput>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  not?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
};

export type NullableStringFilter = {
  equals?: Maybe<Scalars['String']>;
  not?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  not?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
};

export type MessageFilter = {
  every?: Maybe<MessageWhereInput>;
  some?: Maybe<MessageWhereInput>;
  none?: Maybe<MessageWhereInput>;
};

export type FileFilter = {
  every?: Maybe<FileWhereInput>;
  some?: Maybe<FileWhereInput>;
  none?: Maybe<FileWhereInput>;
};

export type MessageUpdatementionsInput = {
  set?: Maybe<Array<Scalars['String']>>;
};

export type ChannelUpdateOneWithoutMessagesInput = {
  create?: Maybe<ChannelCreateWithoutMessagesInput>;
  connect?: Maybe<ChannelWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ChannelUpdateWithoutMessagesDataInput>;
  upsert?: Maybe<ChannelUpsertWithoutMessagesInput>;
};

export type MovementUpdateOneWithoutCommentsInput = {
  create?: Maybe<MovementCreateWithoutCommentsInput>;
  connect?: Maybe<MovementWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<MovementUpdateWithoutCommentsDataInput>;
  upsert?: Maybe<MovementUpsertWithoutCommentsInput>;
};

export type FileUpdateManyWithoutMessageInput = {
  create?: Maybe<Array<FileCreateWithoutMessageInput>>;
  connect?: Maybe<Array<FileWhereUniqueInput>>;
  set?: Maybe<Array<FileWhereUniqueInput>>;
  disconnect?: Maybe<Array<FileWhereUniqueInput>>;
  delete?: Maybe<Array<FileWhereUniqueInput>>;
  update?: Maybe<Array<FileUpdateWithWhereUniqueWithoutMessageInput>>;
  updateMany?: Maybe<Array<FileUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<FileScalarWhereInput>>;
  upsert?: Maybe<Array<FileUpsertWithWhereUniqueWithoutMessageInput>>;
};

export type ChannelCreatemembersInput = {
  set?: Maybe<Array<Scalars['String']>>;
};

export type MessageCreateManyWithoutChannelInput = {
  create?: Maybe<Array<MessageCreateWithoutChannelInput>>;
  connect?: Maybe<Array<MessageWhereUniqueInput>>;
};

export type ChannelUpdatemembersInput = {
  set?: Maybe<Array<Scalars['String']>>;
};

export type MessageUpdateManyWithoutChannelInput = {
  create?: Maybe<Array<MessageCreateWithoutChannelInput>>;
  connect?: Maybe<Array<MessageWhereUniqueInput>>;
  set?: Maybe<Array<MessageWhereUniqueInput>>;
  disconnect?: Maybe<Array<MessageWhereUniqueInput>>;
  delete?: Maybe<Array<MessageWhereUniqueInput>>;
  update?: Maybe<Array<MessageUpdateWithWhereUniqueWithoutChannelInput>>;
  updateMany?: Maybe<Array<MessageUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<MessageScalarWhereInput>>;
  upsert?: Maybe<Array<MessageUpsertWithWhereUniqueWithoutChannelInput>>;
};

export type FirstNameLastNameEmailCompoundUniqueInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
};

export type BooleanFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<Scalars['Boolean']>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  not?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
};

export type NullableBooleanFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<Scalars['Boolean']>;
};

export type ContactPersonFilter = {
  every?: Maybe<ContactPersonWhereInput>;
  some?: Maybe<ContactPersonWhereInput>;
  none?: Maybe<ContactPersonWhereInput>;
};

export type InteractionFilter = {
  every?: Maybe<InteractionWhereInput>;
  some?: Maybe<InteractionWhereInput>;
  none?: Maybe<InteractionWhereInput>;
};

export type InventoryFilter = {
  every?: Maybe<InventoryWhereInput>;
  some?: Maybe<InventoryWhereInput>;
  none?: Maybe<InventoryWhereInput>;
};

export type MovementFilter = {
  every?: Maybe<MovementWhereInput>;
  some?: Maybe<MovementWhereInput>;
  none?: Maybe<MovementWhereInput>;
};

export type ReservationFilter = {
  every?: Maybe<ReservationWhereInput>;
  some?: Maybe<ReservationWhereInput>;
  none?: Maybe<ReservationWhereInput>;
};

export type InvoiceFilter = {
  every?: Maybe<InvoiceWhereInput>;
  some?: Maybe<InvoiceWhereInput>;
  none?: Maybe<InvoiceWhereInput>;
};

export type PaymentFilter = {
  every?: Maybe<PaymentWhereInput>;
  some?: Maybe<PaymentWhereInput>;
  none?: Maybe<PaymentWhereInput>;
};

export type AddressWhereInput = {
  id?: Maybe<StringFilter>;
  addressLine1?: Maybe<NullableStringFilter>;
  addressLine2?: Maybe<NullableStringFilter>;
  city?: Maybe<NullableStringFilter>;
  country?: Maybe<NullableStringFilter>;
  state?: Maybe<NullableStringFilter>;
  zip?: Maybe<NullableStringFilter>;
  Manufacturer?: Maybe<ManufacturerFilter>;
  TransportAgency?: Maybe<TransportAgencyFilter>;
  Warehouse?: Maybe<WarehouseFilter>;
  AND?: Maybe<Array<AddressWhereInput>>;
  OR?: Maybe<Array<AddressWhereInput>>;
  NOT?: Maybe<Array<AddressWhereInput>>;
  supplierAddress?: Maybe<SupplierWhereInput>;
  supplierBillingAddress?: Maybe<SupplierWhereInput>;
  clientAddress?: Maybe<ClientWhereInput>;
  clientBillingAddress?: Maybe<ClientWhereInput>;
  address?: Maybe<SettingWhereInput>;
  billingAddress?: Maybe<SettingWhereInput>;
};

export enum OrderByArg {
  Asc = 'asc',
  Desc = 'desc'
}

export type ContactPersonCreateManyWithoutClientInput = {
  create?: Maybe<Array<ContactPersonCreateWithoutClientInput>>;
  connect?: Maybe<Array<ContactPersonWhereUniqueInput>>;
};

export type FileCreateManyWithoutClientInput = {
  create?: Maybe<Array<FileCreateWithoutClientInput>>;
  connect?: Maybe<Array<FileWhereUniqueInput>>;
};

export type InteractionCreateManyWithoutClientInput = {
  create?: Maybe<Array<InteractionCreateWithoutClientInput>>;
  connect?: Maybe<Array<InteractionWhereUniqueInput>>;
};

export type InventoryCreateManyWithoutClientInput = {
  create?: Maybe<Array<InventoryCreateWithoutClientInput>>;
  connect?: Maybe<Array<InventoryWhereUniqueInput>>;
};

export type MovementCreateManyWithoutClientInput = {
  create?: Maybe<Array<MovementCreateWithoutClientInput>>;
  connect?: Maybe<Array<MovementWhereUniqueInput>>;
};

export type ReservationCreateManyWithoutClientInput = {
  create?: Maybe<Array<ReservationCreateWithoutClientInput>>;
  connect?: Maybe<Array<ReservationWhereUniqueInput>>;
};

export type AddressCreateOneWithoutClientAddressInput = {
  create?: Maybe<AddressCreateWithoutClientAddressInput>;
  connect?: Maybe<AddressWhereUniqueInput>;
};

export type AddressCreateOneWithoutClientBillingAddressInput = {
  create?: Maybe<AddressCreateWithoutClientBillingAddressInput>;
  connect?: Maybe<AddressWhereUniqueInput>;
};

export type InvoiceCreateManyWithoutClientInput = {
  create?: Maybe<Array<InvoiceCreateWithoutClientInput>>;
  connect?: Maybe<Array<InvoiceWhereUniqueInput>>;
};

export type PaymentCreateManyWithoutClientInput = {
  create?: Maybe<Array<PaymentCreateWithoutClientInput>>;
  connect?: Maybe<Array<PaymentWhereUniqueInput>>;
};

export type ContactPersonUpdateManyWithoutClientInput = {
  create?: Maybe<Array<ContactPersonCreateWithoutClientInput>>;
  connect?: Maybe<Array<ContactPersonWhereUniqueInput>>;
  set?: Maybe<Array<ContactPersonWhereUniqueInput>>;
  disconnect?: Maybe<Array<ContactPersonWhereUniqueInput>>;
  delete?: Maybe<Array<ContactPersonWhereUniqueInput>>;
  update?: Maybe<Array<ContactPersonUpdateWithWhereUniqueWithoutClientInput>>;
  updateMany?: Maybe<Array<ContactPersonUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<ContactPersonScalarWhereInput>>;
  upsert?: Maybe<Array<ContactPersonUpsertWithWhereUniqueWithoutClientInput>>;
};

export type FileUpdateManyWithoutClientInput = {
  create?: Maybe<Array<FileCreateWithoutClientInput>>;
  connect?: Maybe<Array<FileWhereUniqueInput>>;
  set?: Maybe<Array<FileWhereUniqueInput>>;
  disconnect?: Maybe<Array<FileWhereUniqueInput>>;
  delete?: Maybe<Array<FileWhereUniqueInput>>;
  update?: Maybe<Array<FileUpdateWithWhereUniqueWithoutClientInput>>;
  updateMany?: Maybe<Array<FileUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<FileScalarWhereInput>>;
  upsert?: Maybe<Array<FileUpsertWithWhereUniqueWithoutClientInput>>;
};

export type InteractionUpdateManyWithoutClientInput = {
  create?: Maybe<Array<InteractionCreateWithoutClientInput>>;
  connect?: Maybe<Array<InteractionWhereUniqueInput>>;
  set?: Maybe<Array<InteractionWhereUniqueInput>>;
  disconnect?: Maybe<Array<InteractionWhereUniqueInput>>;
  delete?: Maybe<Array<InteractionWhereUniqueInput>>;
  update?: Maybe<Array<InteractionUpdateWithWhereUniqueWithoutClientInput>>;
  updateMany?: Maybe<Array<InteractionUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<InteractionScalarWhereInput>>;
  upsert?: Maybe<Array<InteractionUpsertWithWhereUniqueWithoutClientInput>>;
};

export type InventoryUpdateManyWithoutClientInput = {
  create?: Maybe<Array<InventoryCreateWithoutClientInput>>;
  connect?: Maybe<Array<InventoryWhereUniqueInput>>;
  set?: Maybe<Array<InventoryWhereUniqueInput>>;
  disconnect?: Maybe<Array<InventoryWhereUniqueInput>>;
  delete?: Maybe<Array<InventoryWhereUniqueInput>>;
  update?: Maybe<Array<InventoryUpdateWithWhereUniqueWithoutClientInput>>;
  updateMany?: Maybe<Array<InventoryUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<InventoryScalarWhereInput>>;
  upsert?: Maybe<Array<InventoryUpsertWithWhereUniqueWithoutClientInput>>;
};

export type MovementUpdateManyWithoutClientInput = {
  create?: Maybe<Array<MovementCreateWithoutClientInput>>;
  connect?: Maybe<Array<MovementWhereUniqueInput>>;
  set?: Maybe<Array<MovementWhereUniqueInput>>;
  disconnect?: Maybe<Array<MovementWhereUniqueInput>>;
  delete?: Maybe<Array<MovementWhereUniqueInput>>;
  update?: Maybe<Array<MovementUpdateWithWhereUniqueWithoutClientInput>>;
  updateMany?: Maybe<Array<MovementUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<MovementScalarWhereInput>>;
  upsert?: Maybe<Array<MovementUpsertWithWhereUniqueWithoutClientInput>>;
};

export type ReservationUpdateManyWithoutClientInput = {
  create?: Maybe<Array<ReservationCreateWithoutClientInput>>;
  connect?: Maybe<Array<ReservationWhereUniqueInput>>;
  set?: Maybe<Array<ReservationWhereUniqueInput>>;
  disconnect?: Maybe<Array<ReservationWhereUniqueInput>>;
  delete?: Maybe<Array<ReservationWhereUniqueInput>>;
  update?: Maybe<Array<ReservationUpdateWithWhereUniqueWithoutClientInput>>;
  updateMany?: Maybe<Array<ReservationUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<ReservationScalarWhereInput>>;
  upsert?: Maybe<Array<ReservationUpsertWithWhereUniqueWithoutClientInput>>;
};

export type AddressUpdateOneWithoutClientAddressInput = {
  create?: Maybe<AddressCreateWithoutClientAddressInput>;
  connect?: Maybe<AddressWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<AddressUpdateWithoutClientAddressDataInput>;
  upsert?: Maybe<AddressUpsertWithoutClientAddressInput>;
};

export type AddressUpdateOneWithoutClientBillingAddressInput = {
  create?: Maybe<AddressCreateWithoutClientBillingAddressInput>;
  connect?: Maybe<AddressWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<AddressUpdateWithoutClientBillingAddressDataInput>;
  upsert?: Maybe<AddressUpsertWithoutClientBillingAddressInput>;
};

export type InvoiceUpdateManyWithoutClientInput = {
  create?: Maybe<Array<InvoiceCreateWithoutClientInput>>;
  connect?: Maybe<Array<InvoiceWhereUniqueInput>>;
  set?: Maybe<Array<InvoiceWhereUniqueInput>>;
  disconnect?: Maybe<Array<InvoiceWhereUniqueInput>>;
  delete?: Maybe<Array<InvoiceWhereUniqueInput>>;
  update?: Maybe<Array<InvoiceUpdateWithWhereUniqueWithoutClientInput>>;
  updateMany?: Maybe<Array<InvoiceUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<InvoiceScalarWhereInput>>;
  upsert?: Maybe<Array<InvoiceUpsertWithWhereUniqueWithoutClientInput>>;
};

export type PaymentUpdateManyWithoutClientInput = {
  create?: Maybe<Array<PaymentCreateWithoutClientInput>>;
  connect?: Maybe<Array<PaymentWhereUniqueInput>>;
  set?: Maybe<Array<PaymentWhereUniqueInput>>;
  disconnect?: Maybe<Array<PaymentWhereUniqueInput>>;
  delete?: Maybe<Array<PaymentWhereUniqueInput>>;
  update?: Maybe<Array<PaymentUpdateWithWhereUniqueWithoutClientInput>>;
  updateMany?: Maybe<Array<PaymentUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<PaymentScalarWhereInput>>;
  upsert?: Maybe<Array<PaymentUpsertWithWhereUniqueWithoutClientInput>>;
};

export type NullableFloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  not?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
};

export type BatchWhereInput = {
  batchNumber?: Maybe<NullableStringFilter>;
  bestBefore?: Maybe<NullableDateTimeFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  date?: Maybe<NullableDateTimeFilter>;
  id?: Maybe<StringFilter>;
  manufacturerId?: Maybe<NullableStringFilter>;
  productId?: Maybe<StringFilter>;
  inventories?: Maybe<InventoryFilter>;
  movements?: Maybe<MovementFilter>;
  source?: Maybe<NullableStringFilter>;
  AND?: Maybe<Array<BatchWhereInput>>;
  OR?: Maybe<Array<BatchWhereInput>>;
  NOT?: Maybe<Array<BatchWhereInput>>;
  manufacturer?: Maybe<ManufacturerWhereInput>;
  product?: Maybe<ProductWhereInput>;
};

export type NotificationFilter = {
  every?: Maybe<NotificationWhereInput>;
  some?: Maybe<NotificationWhereInput>;
  none?: Maybe<NotificationWhereInput>;
};

export type TransportFilter = {
  every?: Maybe<TransportWhereInput>;
  some?: Maybe<TransportWhereInput>;
  none?: Maybe<TransportWhereInput>;
};

export type TransporterFilter = {
  every?: Maybe<TransporterWhereInput>;
  some?: Maybe<TransporterWhereInput>;
  none?: Maybe<TransporterWhereInput>;
};

export type ContactPersonCreateManyWithoutTransportAgencyInput = {
  create?: Maybe<Array<ContactPersonCreateWithoutTransportAgencyInput>>;
  connect?: Maybe<Array<ContactPersonWhereUniqueInput>>;
};

export type FileCreateManyWithoutTransportAgencyInput = {
  create?: Maybe<Array<FileCreateWithoutTransportAgencyInput>>;
  connect?: Maybe<Array<FileWhereUniqueInput>>;
};

export type TransportCreateManyWithoutTransportAgencyInput = {
  create?: Maybe<Array<TransportCreateWithoutTransportAgencyInput>>;
  connect?: Maybe<Array<TransportWhereUniqueInput>>;
};

export type TransporterCreateManyWithoutTransportAgencyInput = {
  create?: Maybe<Array<TransporterCreateWithoutTransportAgencyInput>>;
  connect?: Maybe<Array<TransporterWhereUniqueInput>>;
};

export type AddressCreateOneWithoutTransportAgencyInput = {
  create?: Maybe<AddressCreateWithoutTransportAgencyInput>;
  connect?: Maybe<AddressWhereUniqueInput>;
};

export type PaymentCreateManyWithoutTransportAgencyInput = {
  create?: Maybe<Array<PaymentCreateWithoutTransportAgencyInput>>;
  connect?: Maybe<Array<PaymentWhereUniqueInput>>;
};

export type ContactPersonUpdateManyWithoutTransportAgencyInput = {
  create?: Maybe<Array<ContactPersonCreateWithoutTransportAgencyInput>>;
  connect?: Maybe<Array<ContactPersonWhereUniqueInput>>;
  set?: Maybe<Array<ContactPersonWhereUniqueInput>>;
  disconnect?: Maybe<Array<ContactPersonWhereUniqueInput>>;
  delete?: Maybe<Array<ContactPersonWhereUniqueInput>>;
  update?: Maybe<Array<ContactPersonUpdateWithWhereUniqueWithoutTransportAgencyInput>>;
  updateMany?: Maybe<Array<ContactPersonUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<ContactPersonScalarWhereInput>>;
  upsert?: Maybe<Array<ContactPersonUpsertWithWhereUniqueWithoutTransportAgencyInput>>;
};

export type FileUpdateManyWithoutTransportAgencyInput = {
  create?: Maybe<Array<FileCreateWithoutTransportAgencyInput>>;
  connect?: Maybe<Array<FileWhereUniqueInput>>;
  set?: Maybe<Array<FileWhereUniqueInput>>;
  disconnect?: Maybe<Array<FileWhereUniqueInput>>;
  delete?: Maybe<Array<FileWhereUniqueInput>>;
  update?: Maybe<Array<FileUpdateWithWhereUniqueWithoutTransportAgencyInput>>;
  updateMany?: Maybe<Array<FileUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<FileScalarWhereInput>>;
  upsert?: Maybe<Array<FileUpsertWithWhereUniqueWithoutTransportAgencyInput>>;
};

export type TransportUpdateManyWithoutTransportAgencyInput = {
  create?: Maybe<Array<TransportCreateWithoutTransportAgencyInput>>;
  connect?: Maybe<Array<TransportWhereUniqueInput>>;
  set?: Maybe<Array<TransportWhereUniqueInput>>;
  disconnect?: Maybe<Array<TransportWhereUniqueInput>>;
  delete?: Maybe<Array<TransportWhereUniqueInput>>;
  update?: Maybe<Array<TransportUpdateWithWhereUniqueWithoutTransportAgencyInput>>;
  updateMany?: Maybe<Array<TransportUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<TransportScalarWhereInput>>;
  upsert?: Maybe<Array<TransportUpsertWithWhereUniqueWithoutTransportAgencyInput>>;
};

export type TransporterUpdateManyWithoutTransportAgencyInput = {
  create?: Maybe<Array<TransporterCreateWithoutTransportAgencyInput>>;
  connect?: Maybe<Array<TransporterWhereUniqueInput>>;
  set?: Maybe<Array<TransporterWhereUniqueInput>>;
  disconnect?: Maybe<Array<TransporterWhereUniqueInput>>;
  delete?: Maybe<Array<TransporterWhereUniqueInput>>;
  update?: Maybe<Array<TransporterUpdateWithWhereUniqueWithoutTransportAgencyInput>>;
  updateMany?: Maybe<Array<TransporterUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<TransporterScalarWhereInput>>;
  upsert?: Maybe<Array<TransporterUpsertWithWhereUniqueWithoutTransportAgencyInput>>;
};

export type AddressUpdateOneWithoutTransportAgencyInput = {
  create?: Maybe<AddressCreateWithoutTransportAgencyInput>;
  connect?: Maybe<AddressWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<AddressUpdateWithoutTransportAgencyDataInput>;
  upsert?: Maybe<AddressUpsertWithoutTransportAgencyInput>;
};

export type PaymentUpdateManyWithoutTransportAgencyInput = {
  create?: Maybe<Array<PaymentCreateWithoutTransportAgencyInput>>;
  connect?: Maybe<Array<PaymentWhereUniqueInput>>;
  set?: Maybe<Array<PaymentWhereUniqueInput>>;
  disconnect?: Maybe<Array<PaymentWhereUniqueInput>>;
  delete?: Maybe<Array<PaymentWhereUniqueInput>>;
  update?: Maybe<Array<PaymentUpdateWithWhereUniqueWithoutTransportAgencyInput>>;
  updateMany?: Maybe<Array<PaymentUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<PaymentScalarWhereInput>>;
  upsert?: Maybe<Array<PaymentUpsertWithWhereUniqueWithoutTransportAgencyInput>>;
};

export type ContactPersonCreateManyWithoutWarehouseInput = {
  create?: Maybe<Array<ContactPersonCreateWithoutWarehouseInput>>;
  connect?: Maybe<Array<ContactPersonWhereUniqueInput>>;
};

export type InventoryCreateManyWithoutWarehouseInput = {
  create?: Maybe<Array<InventoryCreateWithoutWarehouseInput>>;
  connect?: Maybe<Array<InventoryWhereUniqueInput>>;
};

export type MovementCreateManyWithoutWarehouseInput = {
  create?: Maybe<Array<MovementCreateWithoutWarehouseInput>>;
  connect?: Maybe<Array<MovementWhereUniqueInput>>;
};

export type AddressCreateOneWithoutWarehouseInput = {
  create?: Maybe<AddressCreateWithoutWarehouseInput>;
  connect?: Maybe<AddressWhereUniqueInput>;
};

export type NotificationCreateManyWithoutWarehouseInput = {
  create?: Maybe<Array<NotificationCreateWithoutWarehouseInput>>;
  connect?: Maybe<Array<NotificationWhereUniqueInput>>;
};

export type ContactPersonUpdateManyWithoutWarehouseInput = {
  create?: Maybe<Array<ContactPersonCreateWithoutWarehouseInput>>;
  connect?: Maybe<Array<ContactPersonWhereUniqueInput>>;
  set?: Maybe<Array<ContactPersonWhereUniqueInput>>;
  disconnect?: Maybe<Array<ContactPersonWhereUniqueInput>>;
  delete?: Maybe<Array<ContactPersonWhereUniqueInput>>;
  update?: Maybe<Array<ContactPersonUpdateWithWhereUniqueWithoutWarehouseInput>>;
  updateMany?: Maybe<Array<ContactPersonUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<ContactPersonScalarWhereInput>>;
  upsert?: Maybe<Array<ContactPersonUpsertWithWhereUniqueWithoutWarehouseInput>>;
};

export type InventoryUpdateManyWithoutWarehouseInput = {
  create?: Maybe<Array<InventoryCreateWithoutWarehouseInput>>;
  connect?: Maybe<Array<InventoryWhereUniqueInput>>;
  set?: Maybe<Array<InventoryWhereUniqueInput>>;
  disconnect?: Maybe<Array<InventoryWhereUniqueInput>>;
  delete?: Maybe<Array<InventoryWhereUniqueInput>>;
  update?: Maybe<Array<InventoryUpdateWithWhereUniqueWithoutWarehouseInput>>;
  updateMany?: Maybe<Array<InventoryUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<InventoryScalarWhereInput>>;
  upsert?: Maybe<Array<InventoryUpsertWithWhereUniqueWithoutWarehouseInput>>;
};

export type MovementUpdateManyWithoutWarehouseInput = {
  create?: Maybe<Array<MovementCreateWithoutWarehouseInput>>;
  connect?: Maybe<Array<MovementWhereUniqueInput>>;
  set?: Maybe<Array<MovementWhereUniqueInput>>;
  disconnect?: Maybe<Array<MovementWhereUniqueInput>>;
  delete?: Maybe<Array<MovementWhereUniqueInput>>;
  update?: Maybe<Array<MovementUpdateWithWhereUniqueWithoutWarehouseInput>>;
  updateMany?: Maybe<Array<MovementUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<MovementScalarWhereInput>>;
  upsert?: Maybe<Array<MovementUpsertWithWhereUniqueWithoutWarehouseInput>>;
};

export type AddressUpdateOneWithoutWarehouseInput = {
  create?: Maybe<AddressCreateWithoutWarehouseInput>;
  connect?: Maybe<AddressWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<AddressUpdateWithoutWarehouseDataInput>;
  upsert?: Maybe<AddressUpsertWithoutWarehouseInput>;
};

export type NotificationUpdateManyWithoutWarehouseInput = {
  create?: Maybe<Array<NotificationCreateWithoutWarehouseInput>>;
  connect?: Maybe<Array<NotificationWhereUniqueInput>>;
  set?: Maybe<Array<NotificationWhereUniqueInput>>;
  disconnect?: Maybe<Array<NotificationWhereUniqueInput>>;
  delete?: Maybe<Array<NotificationWhereUniqueInput>>;
  update?: Maybe<Array<NotificationUpdateWithWhereUniqueWithoutWarehouseInput>>;
  updateMany?: Maybe<Array<NotificationUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<NotificationScalarWhereInput>>;
  upsert?: Maybe<Array<NotificationUpsertWithWhereUniqueWithoutWarehouseInput>>;
};

export type ArrivalDateArrivalPointCompoundUniqueInput = {
  arrivalDate: Scalars['DateTime'];
  arrivalPoint: Scalars['String'];
};

export enum MovementStatus {
  Cancelled = 'cancelled',
  Pending = 'pending',
  Paid = 'paid',
  Completed = 'completed'
}

export type NullableIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  not?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
};

export type ReservationWhereInput = {
  amount?: Maybe<IntFilter>;
  clientId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  inventoryId?: Maybe<NullableStringFilter>;
  movementId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  notes?: Maybe<NullableStringFilter>;
  AND?: Maybe<Array<ReservationWhereInput>>;
  OR?: Maybe<Array<ReservationWhereInput>>;
  NOT?: Maybe<Array<ReservationWhereInput>>;
  client?: Maybe<ClientWhereInput>;
  inventory?: Maybe<InventoryWhereInput>;
  movement?: Maybe<MovementWhereInput>;
};

export type InvoiceWhereInput = {
  id?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  pdfId?: Maybe<StringFilter>;
  movements?: Maybe<MovementFilter>;
  clientId?: Maybe<StringFilter>;
  withTaxes?: Maybe<BooleanFilter>;
  notes?: Maybe<NullableStringFilter>;
  AND?: Maybe<Array<InvoiceWhereInput>>;
  OR?: Maybe<Array<InvoiceWhereInput>>;
  NOT?: Maybe<Array<InvoiceWhereInput>>;
  pdf?: Maybe<FileWhereInput>;
  client?: Maybe<ClientWhereInput>;
};

export type WarehouseCreateOneWithoutNotificationInput = {
  create?: Maybe<WarehouseCreateWithoutNotificationInput>;
  connect?: Maybe<WarehouseWhereUniqueInput>;
};

export type ProductCreateOneWithoutNotificationsInput = {
  create?: Maybe<ProductCreateWithoutNotificationsInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
};

export type WarehouseUpdateOneWithoutNotificationInput = {
  create?: Maybe<WarehouseCreateWithoutNotificationInput>;
  connect?: Maybe<WarehouseWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<WarehouseUpdateWithoutNotificationDataInput>;
  upsert?: Maybe<WarehouseUpsertWithoutNotificationInput>;
};

export type ProductUpdateOneRequiredWithoutNotificationsInput = {
  create?: Maybe<ProductCreateWithoutNotificationsInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
  update?: Maybe<ProductUpdateWithoutNotificationsDataInput>;
  upsert?: Maybe<ProductUpsertWithoutNotificationsInput>;
};

export type ProductIdUserTypeAmountCompoundUniqueInput = {
  productId: Scalars['String'];
  user: Scalars['String'];
  type: NotificationType;
  amount: Scalars['Int'];
};

export type NullableDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  not?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
};

export type FloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  not?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
};

export type GroupWhereInput = {
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  code?: Maybe<NullableIntFilter>;
  name?: Maybe<StringFilter>;
  payments?: Maybe<PaymentFilter>;
  taxRateId?: Maybe<NullableStringFilter>;
  AND?: Maybe<Array<GroupWhereInput>>;
  OR?: Maybe<Array<GroupWhereInput>>;
  NOT?: Maybe<Array<GroupWhereInput>>;
  taxRate?: Maybe<TaxRateWhereInput>;
};

export type TaxRateWhereInput = {
  id?: Maybe<StringFilter>;
  amount?: Maybe<FloatFilter>;
  isSameCountry?: Maybe<BooleanFilter>;
  isEU?: Maybe<NullableBooleanFilter>;
  name?: Maybe<NullableStringFilter>;
  productId?: Maybe<NullableStringFilter>;
  payments?: Maybe<PaymentFilter>;
  AND?: Maybe<Array<TaxRateWhereInput>>;
  OR?: Maybe<Array<TaxRateWhereInput>>;
  NOT?: Maybe<Array<TaxRateWhereInput>>;
  group?: Maybe<GroupWhereInput>;
  product?: Maybe<ProductWhereInput>;
};

export type BankAccountWhereInput = {
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  payments?: Maybe<PaymentFilter>;
  AND?: Maybe<Array<BankAccountWhereInput>>;
  OR?: Maybe<Array<BankAccountWhereInput>>;
  NOT?: Maybe<Array<BankAccountWhereInput>>;
};

export type GroupCreateOneWithoutTaxRateInput = {
  create?: Maybe<GroupCreateWithoutTaxRateInput>;
  connect?: Maybe<GroupWhereUniqueInput>;
};

export type ProductCreateOneWithoutTaxRatesInput = {
  create?: Maybe<ProductCreateWithoutTaxRatesInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
};

export type PaymentCreateManyWithoutTaxRateInput = {
  create?: Maybe<Array<PaymentCreateWithoutTaxRateInput>>;
  connect?: Maybe<Array<PaymentWhereUniqueInput>>;
};

export type GroupUpdateOneWithoutTaxRateInput = {
  create?: Maybe<GroupCreateWithoutTaxRateInput>;
  connect?: Maybe<GroupWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<GroupUpdateWithoutTaxRateDataInput>;
  upsert?: Maybe<GroupUpsertWithoutTaxRateInput>;
};

export type ProductUpdateOneWithoutTaxRatesInput = {
  create?: Maybe<ProductCreateWithoutTaxRatesInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ProductUpdateWithoutTaxRatesDataInput>;
  upsert?: Maybe<ProductUpsertWithoutTaxRatesInput>;
};

export type PaymentUpdateManyWithoutTaxRateInput = {
  create?: Maybe<Array<PaymentCreateWithoutTaxRateInput>>;
  connect?: Maybe<Array<PaymentWhereUniqueInput>>;
  set?: Maybe<Array<PaymentWhereUniqueInput>>;
  disconnect?: Maybe<Array<PaymentWhereUniqueInput>>;
  delete?: Maybe<Array<PaymentWhereUniqueInput>>;
  update?: Maybe<Array<PaymentUpdateWithWhereUniqueWithoutTaxRateInput>>;
  updateMany?: Maybe<Array<PaymentUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<PaymentScalarWhereInput>>;
  upsert?: Maybe<Array<PaymentUpsertWithWhereUniqueWithoutTaxRateInput>>;
};

export type PaymentCreateManyWithoutGroupInput = {
  create?: Maybe<Array<PaymentCreateWithoutGroupInput>>;
  connect?: Maybe<Array<PaymentWhereUniqueInput>>;
};

export type TaxRateCreateOneWithoutGroupInput = {
  create?: Maybe<TaxRateCreateWithoutGroupInput>;
  connect?: Maybe<TaxRateWhereUniqueInput>;
};

export type PaymentUpdateManyWithoutGroupInput = {
  create?: Maybe<Array<PaymentCreateWithoutGroupInput>>;
  connect?: Maybe<Array<PaymentWhereUniqueInput>>;
  set?: Maybe<Array<PaymentWhereUniqueInput>>;
  disconnect?: Maybe<Array<PaymentWhereUniqueInput>>;
  delete?: Maybe<Array<PaymentWhereUniqueInput>>;
  update?: Maybe<Array<PaymentUpdateWithWhereUniqueWithoutGroupInput>>;
  updateMany?: Maybe<Array<PaymentUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<PaymentScalarWhereInput>>;
  upsert?: Maybe<Array<PaymentUpsertWithWhereUniqueWithoutGroupInput>>;
};

export type TaxRateUpdateOneWithoutGroupInput = {
  create?: Maybe<TaxRateCreateWithoutGroupInput>;
  connect?: Maybe<TaxRateWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<TaxRateUpdateWithoutGroupDataInput>;
  upsert?: Maybe<TaxRateUpsertWithoutGroupInput>;
};

export type NameColorMaterialDimensionIdWeightCompoundUniqueInput = {
  name: Scalars['String'];
  color: Scalars['String'];
  material: Scalars['String'];
  dimensionId: Scalars['String'];
  weight: Scalars['Float'];
};

export type BatchFilter = {
  every?: Maybe<BatchWhereInput>;
  some?: Maybe<BatchWhereInput>;
  none?: Maybe<BatchWhereInput>;
};

export type UnitFilter = {
  every?: Maybe<UnitWhereInput>;
  some?: Maybe<UnitWhereInput>;
  none?: Maybe<UnitWhereInput>;
};

export type TaxRateFilter = {
  every?: Maybe<TaxRateWhereInput>;
  some?: Maybe<TaxRateWhereInput>;
  none?: Maybe<TaxRateWhereInput>;
};

export type ProductFilter = {
  every?: Maybe<ProductWhereInput>;
  some?: Maybe<ProductWhereInput>;
  none?: Maybe<ProductWhereInput>;
};

export type CategoryFilter = {
  every?: Maybe<CategoryWhereInput>;
  some?: Maybe<CategoryWhereInput>;
  none?: Maybe<CategoryWhereInput>;
};

export type DimensionWhereInput = {
  id?: Maybe<StringFilter>;
  height?: Maybe<FloatFilter>;
  width?: Maybe<NullableFloatFilter>;
  depth?: Maybe<NullableFloatFilter>;
  Product?: Maybe<ProductFilter>;
  AND?: Maybe<Array<DimensionWhereInput>>;
  OR?: Maybe<Array<DimensionWhereInput>>;
  NOT?: Maybe<Array<DimensionWhereInput>>;
};

export type ManufacturerWhereInput = {
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<NullableStringFilter>;
  fiscalNumber?: Maybe<NullableStringFilter>;
  id?: Maybe<StringFilter>;
  mobile?: Maybe<NullableStringFilter>;
  name?: Maybe<StringFilter>;
  phone?: Maybe<NullableStringFilter>;
  website?: Maybe<NullableStringFilter>;
  batches?: Maybe<BatchFilter>;
  contactPersons?: Maybe<ContactPersonFilter>;
  images?: Maybe<FileFilter>;
  products?: Maybe<ProductFilter>;
  addressId?: Maybe<NullableStringFilter>;
  source?: Maybe<NullableStringFilter>;
  notes?: Maybe<NullableStringFilter>;
  AND?: Maybe<Array<ManufacturerWhereInput>>;
  OR?: Maybe<Array<ManufacturerWhereInput>>;
  NOT?: Maybe<Array<ManufacturerWhereInput>>;
  address?: Maybe<AddressWhereInput>;
};

export type ProductCreateOneWithoutUnitsInput = {
  create?: Maybe<ProductCreateWithoutUnitsInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
};

export type ProductCreatetagsInput = {
  set?: Maybe<Array<Scalars['String']>>;
};

export type DimensionCreateOneWithoutProductInput = {
  create?: Maybe<DimensionCreateWithoutProductInput>;
  connect?: Maybe<DimensionWhereUniqueInput>;
};

export type ManufacturerCreateOneWithoutProductsInput = {
  create?: Maybe<ManufacturerCreateWithoutProductsInput>;
  connect?: Maybe<ManufacturerWhereUniqueInput>;
};

export type BatchCreateManyWithoutProductInput = {
  create?: Maybe<Array<BatchCreateWithoutProductInput>>;
  connect?: Maybe<Array<BatchWhereUniqueInput>>;
};

export type FileCreateManyWithoutProductInput = {
  create?: Maybe<Array<FileCreateWithoutProductInput>>;
  connect?: Maybe<Array<FileWhereUniqueInput>>;
};

export type InteractionCreateManyWithoutProductInput = {
  create?: Maybe<Array<InteractionCreateWithoutProductInput>>;
  connect?: Maybe<Array<InteractionWhereUniqueInput>>;
};

export type InventoryCreateManyWithoutProductInput = {
  create?: Maybe<Array<InventoryCreateWithoutProductInput>>;
  connect?: Maybe<Array<InventoryWhereUniqueInput>>;
};

export type MovementCreateManyWithoutProductInput = {
  create?: Maybe<Array<MovementCreateWithoutProductInput>>;
  connect?: Maybe<Array<MovementWhereUniqueInput>>;
};

export type NotificationCreateManyWithoutProductInput = {
  create?: Maybe<Array<NotificationCreateWithoutProductInput>>;
  connect?: Maybe<Array<NotificationWhereUniqueInput>>;
};

export type UnitCreateManyWithoutProductInput = {
  create?: Maybe<Array<UnitCreateWithoutProductInput>>;
  connect?: Maybe<Array<UnitWhereUniqueInput>>;
};

export type TaxRateCreateManyWithoutProductInput = {
  create?: Maybe<Array<TaxRateCreateWithoutProductInput>>;
  connect?: Maybe<Array<TaxRateWhereUniqueInput>>;
};

export type ProductCreateManyWithoutPackagedProductInput = {
  create?: Maybe<Array<ProductCreateWithoutPackagedProductInput>>;
  connect?: Maybe<Array<ProductWhereUniqueInput>>;
};

export type ProductCreateManyWithoutVariantProductInput = {
  create?: Maybe<Array<ProductCreateWithoutVariantProductInput>>;
  connect?: Maybe<Array<ProductWhereUniqueInput>>;
};

export type ProductCreateOneWithoutPackagingInput = {
  create?: Maybe<ProductCreateWithoutPackagingInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
};

export type ProductCreateOneWithoutVariantsInput = {
  create?: Maybe<ProductCreateWithoutVariantsInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
};

export type CategoryCreateManyWithoutProductsInput = {
  create?: Maybe<Array<CategoryCreateWithoutProductsInput>>;
  connect?: Maybe<Array<CategoryWhereUniqueInput>>;
};

export type ProductUpdatetagsInput = {
  set?: Maybe<Array<Scalars['String']>>;
};

export type DimensionUpdateOneWithoutProductInput = {
  create?: Maybe<DimensionCreateWithoutProductInput>;
  connect?: Maybe<DimensionWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<DimensionUpdateWithoutProductDataInput>;
  upsert?: Maybe<DimensionUpsertWithoutProductInput>;
};

export type ManufacturerUpdateOneWithoutProductsInput = {
  create?: Maybe<ManufacturerCreateWithoutProductsInput>;
  connect?: Maybe<ManufacturerWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ManufacturerUpdateWithoutProductsDataInput>;
  upsert?: Maybe<ManufacturerUpsertWithoutProductsInput>;
};

export type BatchUpdateManyWithoutProductInput = {
  create?: Maybe<Array<BatchCreateWithoutProductInput>>;
  connect?: Maybe<Array<BatchWhereUniqueInput>>;
  set?: Maybe<Array<BatchWhereUniqueInput>>;
  disconnect?: Maybe<Array<BatchWhereUniqueInput>>;
  delete?: Maybe<Array<BatchWhereUniqueInput>>;
  update?: Maybe<Array<BatchUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: Maybe<Array<BatchUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<BatchScalarWhereInput>>;
  upsert?: Maybe<Array<BatchUpsertWithWhereUniqueWithoutProductInput>>;
};

export type FileUpdateManyWithoutProductInput = {
  create?: Maybe<Array<FileCreateWithoutProductInput>>;
  connect?: Maybe<Array<FileWhereUniqueInput>>;
  set?: Maybe<Array<FileWhereUniqueInput>>;
  disconnect?: Maybe<Array<FileWhereUniqueInput>>;
  delete?: Maybe<Array<FileWhereUniqueInput>>;
  update?: Maybe<Array<FileUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: Maybe<Array<FileUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<FileScalarWhereInput>>;
  upsert?: Maybe<Array<FileUpsertWithWhereUniqueWithoutProductInput>>;
};

export type InteractionUpdateManyWithoutProductInput = {
  create?: Maybe<Array<InteractionCreateWithoutProductInput>>;
  connect?: Maybe<Array<InteractionWhereUniqueInput>>;
  set?: Maybe<Array<InteractionWhereUniqueInput>>;
  disconnect?: Maybe<Array<InteractionWhereUniqueInput>>;
  delete?: Maybe<Array<InteractionWhereUniqueInput>>;
  update?: Maybe<Array<InteractionUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: Maybe<Array<InteractionUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<InteractionScalarWhereInput>>;
  upsert?: Maybe<Array<InteractionUpsertWithWhereUniqueWithoutProductInput>>;
};

export type InventoryUpdateManyWithoutProductInput = {
  create?: Maybe<Array<InventoryCreateWithoutProductInput>>;
  connect?: Maybe<Array<InventoryWhereUniqueInput>>;
  set?: Maybe<Array<InventoryWhereUniqueInput>>;
  disconnect?: Maybe<Array<InventoryWhereUniqueInput>>;
  delete?: Maybe<Array<InventoryWhereUniqueInput>>;
  update?: Maybe<Array<InventoryUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: Maybe<Array<InventoryUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<InventoryScalarWhereInput>>;
  upsert?: Maybe<Array<InventoryUpsertWithWhereUniqueWithoutProductInput>>;
};

export type MovementUpdateManyWithoutProductInput = {
  create?: Maybe<Array<MovementCreateWithoutProductInput>>;
  connect?: Maybe<Array<MovementWhereUniqueInput>>;
  set?: Maybe<Array<MovementWhereUniqueInput>>;
  disconnect?: Maybe<Array<MovementWhereUniqueInput>>;
  delete?: Maybe<Array<MovementWhereUniqueInput>>;
  update?: Maybe<Array<MovementUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: Maybe<Array<MovementUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<MovementScalarWhereInput>>;
  upsert?: Maybe<Array<MovementUpsertWithWhereUniqueWithoutProductInput>>;
};

export type NotificationUpdateManyWithoutProductInput = {
  create?: Maybe<Array<NotificationCreateWithoutProductInput>>;
  connect?: Maybe<Array<NotificationWhereUniqueInput>>;
  set?: Maybe<Array<NotificationWhereUniqueInput>>;
  disconnect?: Maybe<Array<NotificationWhereUniqueInput>>;
  delete?: Maybe<Array<NotificationWhereUniqueInput>>;
  update?: Maybe<Array<NotificationUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: Maybe<Array<NotificationUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<NotificationScalarWhereInput>>;
  upsert?: Maybe<Array<NotificationUpsertWithWhereUniqueWithoutProductInput>>;
};

export type UnitUpdateManyWithoutProductInput = {
  create?: Maybe<Array<UnitCreateWithoutProductInput>>;
  connect?: Maybe<Array<UnitWhereUniqueInput>>;
  set?: Maybe<Array<UnitWhereUniqueInput>>;
  disconnect?: Maybe<Array<UnitWhereUniqueInput>>;
  delete?: Maybe<Array<UnitWhereUniqueInput>>;
  update?: Maybe<Array<UnitUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: Maybe<Array<UnitUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<UnitScalarWhereInput>>;
  upsert?: Maybe<Array<UnitUpsertWithWhereUniqueWithoutProductInput>>;
};

export type TaxRateUpdateManyWithoutProductInput = {
  create?: Maybe<Array<TaxRateCreateWithoutProductInput>>;
  connect?: Maybe<Array<TaxRateWhereUniqueInput>>;
  set?: Maybe<Array<TaxRateWhereUniqueInput>>;
  disconnect?: Maybe<Array<TaxRateWhereUniqueInput>>;
  delete?: Maybe<Array<TaxRateWhereUniqueInput>>;
  update?: Maybe<Array<TaxRateUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: Maybe<Array<TaxRateUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<TaxRateScalarWhereInput>>;
  upsert?: Maybe<Array<TaxRateUpsertWithWhereUniqueWithoutProductInput>>;
};

export type ProductUpdateManyWithoutPackagedProductInput = {
  create?: Maybe<Array<ProductCreateWithoutPackagedProductInput>>;
  connect?: Maybe<Array<ProductWhereUniqueInput>>;
  set?: Maybe<Array<ProductWhereUniqueInput>>;
  disconnect?: Maybe<Array<ProductWhereUniqueInput>>;
  delete?: Maybe<Array<ProductWhereUniqueInput>>;
  update?: Maybe<Array<ProductUpdateWithWhereUniqueWithoutPackagedProductInput>>;
  updateMany?: Maybe<Array<ProductUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<ProductScalarWhereInput>>;
  upsert?: Maybe<Array<ProductUpsertWithWhereUniqueWithoutPackagedProductInput>>;
};

export type ProductUpdateManyWithoutVariantProductInput = {
  create?: Maybe<Array<ProductCreateWithoutVariantProductInput>>;
  connect?: Maybe<Array<ProductWhereUniqueInput>>;
  set?: Maybe<Array<ProductWhereUniqueInput>>;
  disconnect?: Maybe<Array<ProductWhereUniqueInput>>;
  delete?: Maybe<Array<ProductWhereUniqueInput>>;
  update?: Maybe<Array<ProductUpdateWithWhereUniqueWithoutVariantProductInput>>;
  updateMany?: Maybe<Array<ProductUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<ProductScalarWhereInput>>;
  upsert?: Maybe<Array<ProductUpsertWithWhereUniqueWithoutVariantProductInput>>;
};

export type ProductUpdateOneWithoutPackagingInput = {
  create?: Maybe<ProductCreateWithoutPackagingInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ProductUpdateWithoutPackagingDataInput>;
  upsert?: Maybe<ProductUpsertWithoutPackagingInput>;
};

export type ProductUpdateOneWithoutVariantsInput = {
  create?: Maybe<ProductCreateWithoutVariantsInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ProductUpdateWithoutVariantsDataInput>;
  upsert?: Maybe<ProductUpsertWithoutVariantsInput>;
};

export type CategoryUpdateManyWithoutProductsInput = {
  create?: Maybe<Array<CategoryCreateWithoutProductsInput>>;
  connect?: Maybe<Array<CategoryWhereUniqueInput>>;
  set?: Maybe<Array<CategoryWhereUniqueInput>>;
  disconnect?: Maybe<Array<CategoryWhereUniqueInput>>;
  delete?: Maybe<Array<CategoryWhereUniqueInput>>;
  update?: Maybe<Array<CategoryUpdateWithWhereUniqueWithoutProductsInput>>;
  updateMany?: Maybe<Array<CategoryUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<CategoryScalarWhereInput>>;
  upsert?: Maybe<Array<CategoryUpsertWithWhereUniqueWithoutProductsInput>>;
};

export type UserNameTypeCompoundUniqueInput = {
  user: Scalars['String'];
  name: Scalars['String'];
  type: EntityType;
};

export type SettingWhereInput = {
  subDomain?: Maybe<StringFilter>;
  chat?: Maybe<BooleanFilter>;
  currency?: Maybe<NullableStringFilter>;
  currencySymbol?: Maybe<NullableStringFilter>;
  defaultLanguage?: Maybe<Language>;
  id?: Maybe<StringFilter>;
  stripeCustomerId?: Maybe<NullableStringFilter>;
  logoId?: Maybe<NullableStringFilter>;
  name?: Maybe<StringFilter>;
  timezone?: Maybe<NullableStringFilter>;
  transports?: Maybe<BooleanFilter>;
  plan?: Maybe<AccountPlan>;
  warehouses?: Maybe<BooleanFilter>;
  packaging?: Maybe<BooleanFilter>;
  shop?: Maybe<BooleanFilter>;
  accounting?: Maybe<BooleanFilter>;
  presets?: Maybe<PresetFilter>;
  addressId?: Maybe<NullableStringFilter>;
  billingAddressId?: Maybe<NullableStringFilter>;
  fiscalNumber?: Maybe<NullableStringFilter>;
  email?: Maybe<NullableStringFilter>;
  phone?: Maybe<NullableStringFilter>;
  mobile?: Maybe<NullableStringFilter>;
  website?: Maybe<NullableStringFilter>;
  weightUnit?: Maybe<NullableStringFilter>;
  lengthUnit?: Maybe<NullableStringFilter>;
  AND?: Maybe<Array<SettingWhereInput>>;
  OR?: Maybe<Array<SettingWhereInput>>;
  NOT?: Maybe<Array<SettingWhereInput>>;
  logo?: Maybe<FileWhereInput>;
  address?: Maybe<AddressWhereInput>;
  billingAddress?: Maybe<AddressWhereInput>;
};

export type PresetCreatecolumnOrderInput = {
  set?: Maybe<Array<Scalars['String']>>;
};

export type PresetCreatehiddenColumnsInput = {
  set?: Maybe<Array<Scalars['String']>>;
};

export type SettingCreateOneWithoutPresetsInput = {
  create?: Maybe<SettingCreateWithoutPresetsInput>;
  connect?: Maybe<SettingWhereUniqueInput>;
};

export type PresetUpdatecolumnOrderInput = {
  set?: Maybe<Array<Scalars['String']>>;
};

export type PresetUpdatehiddenColumnsInput = {
  set?: Maybe<Array<Scalars['String']>>;
};

export type SettingUpdateOneWithoutPresetsInput = {
  create?: Maybe<SettingCreateWithoutPresetsInput>;
  connect?: Maybe<SettingWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<SettingUpdateWithoutPresetsDataInput>;
  upsert?: Maybe<SettingUpsertWithoutPresetsInput>;
};

export type SettingUpdatemanufacturerFieldsInput = {
  set?: Maybe<Array<ManufacturerFields>>;
};

export type SettingUpdatemovementFieldsInput = {
  set?: Maybe<Array<MovementFields>>;
};

export type SettingUpdatesupplierFieldsInput = {
  set?: Maybe<Array<SupplierFields>>;
};

export type SettingUpdateclientFieldsInput = {
  set?: Maybe<Array<ClientFields>>;
};

export type SettingUpdateproductFieldsInput = {
  set?: Maybe<Array<ProductFields>>;
};

export type SettingUpdatetransportAgencyFieldsInput = {
  set?: Maybe<Array<TransportAgencyFields>>;
};

export type SettingUpdatetransportFieldsInput = {
  set?: Maybe<Array<TransportFields>>;
};

export type SettingUpdatetransporterFieldsInput = {
  set?: Maybe<Array<TransporterFields>>;
};

export type SettingUpdatepaymentFieldsInput = {
  set?: Maybe<Array<PaymentFields>>;
};

export type SettingUpdatewarehouseFieldsInput = {
  set?: Maybe<Array<WarehouseFields>>;
};

export type FileUpdateOneWithoutSettingsInput = {
  create?: Maybe<FileCreateWithoutSettingsInput>;
  connect?: Maybe<FileWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<FileUpdateWithoutSettingsDataInput>;
  upsert?: Maybe<FileUpsertWithoutSettingsInput>;
};

export type PresetUpdateManyWithoutSettingInput = {
  create?: Maybe<Array<PresetCreateWithoutSettingInput>>;
  connect?: Maybe<Array<PresetWhereUniqueInput>>;
  set?: Maybe<Array<PresetWhereUniqueInput>>;
  disconnect?: Maybe<Array<PresetWhereUniqueInput>>;
  delete?: Maybe<Array<PresetWhereUniqueInput>>;
  update?: Maybe<Array<PresetUpdateWithWhereUniqueWithoutSettingInput>>;
  updateMany?: Maybe<Array<PresetUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<PresetScalarWhereInput>>;
  upsert?: Maybe<Array<PresetUpsertWithWhereUniqueWithoutSettingInput>>;
};

export type AddressUpdateOneWithoutAddressInput = {
  create?: Maybe<AddressCreateWithoutAddressInput>;
  connect?: Maybe<AddressWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<AddressUpdateWithoutAddressDataInput>;
  upsert?: Maybe<AddressUpsertWithoutAddressInput>;
};

export type AddressUpdateOneWithoutBillingAddressInput = {
  create?: Maybe<AddressCreateWithoutBillingAddressInput>;
  connect?: Maybe<AddressWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<AddressUpdateWithoutBillingAddressDataInput>;
  upsert?: Maybe<AddressUpsertWithoutBillingAddressInput>;
};

export type SettingCreatemanufacturerFieldsInput = {
  set?: Maybe<Array<ManufacturerFields>>;
};

export type SettingCreatemovementFieldsInput = {
  set?: Maybe<Array<MovementFields>>;
};

export type SettingCreatesupplierFieldsInput = {
  set?: Maybe<Array<SupplierFields>>;
};

export type SettingCreateclientFieldsInput = {
  set?: Maybe<Array<ClientFields>>;
};

export type SettingCreateproductFieldsInput = {
  set?: Maybe<Array<ProductFields>>;
};

export type SettingCreatetransportAgencyFieldsInput = {
  set?: Maybe<Array<TransportAgencyFields>>;
};

export type SettingCreatetransportFieldsInput = {
  set?: Maybe<Array<TransportFields>>;
};

export type SettingCreatetransporterFieldsInput = {
  set?: Maybe<Array<TransporterFields>>;
};

export type SettingCreatepaymentFieldsInput = {
  set?: Maybe<Array<PaymentFields>>;
};

export type SettingCreatewarehouseFieldsInput = {
  set?: Maybe<Array<WarehouseFields>>;
};

export type FileCreateOneWithoutSettingsInput = {
  create?: Maybe<FileCreateWithoutSettingsInput>;
  connect?: Maybe<FileWhereUniqueInput>;
};

export type PresetCreateManyWithoutSettingInput = {
  create?: Maybe<Array<PresetCreateWithoutSettingInput>>;
  connect?: Maybe<Array<PresetWhereUniqueInput>>;
};

export type AddressCreateOneWithoutAddressInput = {
  create?: Maybe<AddressCreateWithoutAddressInput>;
  connect?: Maybe<AddressWhereUniqueInput>;
};

export type AddressCreateOneWithoutBillingAddressInput = {
  create?: Maybe<AddressCreateWithoutBillingAddressInput>;
  connect?: Maybe<AddressWhereUniqueInput>;
};

export type AddressCreateOneWithoutSupplierAddressInput = {
  create?: Maybe<AddressCreateWithoutSupplierAddressInput>;
  connect?: Maybe<AddressWhereUniqueInput>;
};

export type AddressCreateOneWithoutSupplierBillingAddressInput = {
  create?: Maybe<AddressCreateWithoutSupplierBillingAddressInput>;
  connect?: Maybe<AddressWhereUniqueInput>;
};

export type ContactPersonCreateManyWithoutSupplierInput = {
  create?: Maybe<Array<ContactPersonCreateWithoutSupplierInput>>;
  connect?: Maybe<Array<ContactPersonWhereUniqueInput>>;
};

export type FileCreateManyWithoutSupplierInput = {
  create?: Maybe<Array<FileCreateWithoutSupplierInput>>;
  connect?: Maybe<Array<FileWhereUniqueInput>>;
};

export type InteractionCreateManyWithoutSupplierInput = {
  create?: Maybe<Array<InteractionCreateWithoutSupplierInput>>;
  connect?: Maybe<Array<InteractionWhereUniqueInput>>;
};

export type InventoryCreateManyWithoutSupplierInput = {
  create?: Maybe<Array<InventoryCreateWithoutSupplierInput>>;
  connect?: Maybe<Array<InventoryWhereUniqueInput>>;
};

export type MovementCreateManyWithoutSupplierInput = {
  create?: Maybe<Array<MovementCreateWithoutSupplierInput>>;
  connect?: Maybe<Array<MovementWhereUniqueInput>>;
};

export type PaymentCreateManyWithoutSupplierInput = {
  create?: Maybe<Array<PaymentCreateWithoutSupplierInput>>;
  connect?: Maybe<Array<PaymentWhereUniqueInput>>;
};

export type AddressUpdateOneWithoutSupplierAddressInput = {
  create?: Maybe<AddressCreateWithoutSupplierAddressInput>;
  connect?: Maybe<AddressWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<AddressUpdateWithoutSupplierAddressDataInput>;
  upsert?: Maybe<AddressUpsertWithoutSupplierAddressInput>;
};

export type AddressUpdateOneWithoutSupplierBillingAddressInput = {
  create?: Maybe<AddressCreateWithoutSupplierBillingAddressInput>;
  connect?: Maybe<AddressWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<AddressUpdateWithoutSupplierBillingAddressDataInput>;
  upsert?: Maybe<AddressUpsertWithoutSupplierBillingAddressInput>;
};

export type ContactPersonUpdateManyWithoutSupplierInput = {
  create?: Maybe<Array<ContactPersonCreateWithoutSupplierInput>>;
  connect?: Maybe<Array<ContactPersonWhereUniqueInput>>;
  set?: Maybe<Array<ContactPersonWhereUniqueInput>>;
  disconnect?: Maybe<Array<ContactPersonWhereUniqueInput>>;
  delete?: Maybe<Array<ContactPersonWhereUniqueInput>>;
  update?: Maybe<Array<ContactPersonUpdateWithWhereUniqueWithoutSupplierInput>>;
  updateMany?: Maybe<Array<ContactPersonUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<ContactPersonScalarWhereInput>>;
  upsert?: Maybe<Array<ContactPersonUpsertWithWhereUniqueWithoutSupplierInput>>;
};

export type FileUpdateManyWithoutSupplierInput = {
  create?: Maybe<Array<FileCreateWithoutSupplierInput>>;
  connect?: Maybe<Array<FileWhereUniqueInput>>;
  set?: Maybe<Array<FileWhereUniqueInput>>;
  disconnect?: Maybe<Array<FileWhereUniqueInput>>;
  delete?: Maybe<Array<FileWhereUniqueInput>>;
  update?: Maybe<Array<FileUpdateWithWhereUniqueWithoutSupplierInput>>;
  updateMany?: Maybe<Array<FileUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<FileScalarWhereInput>>;
  upsert?: Maybe<Array<FileUpsertWithWhereUniqueWithoutSupplierInput>>;
};

export type InteractionUpdateManyWithoutSupplierInput = {
  create?: Maybe<Array<InteractionCreateWithoutSupplierInput>>;
  connect?: Maybe<Array<InteractionWhereUniqueInput>>;
  set?: Maybe<Array<InteractionWhereUniqueInput>>;
  disconnect?: Maybe<Array<InteractionWhereUniqueInput>>;
  delete?: Maybe<Array<InteractionWhereUniqueInput>>;
  update?: Maybe<Array<InteractionUpdateWithWhereUniqueWithoutSupplierInput>>;
  updateMany?: Maybe<Array<InteractionUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<InteractionScalarWhereInput>>;
  upsert?: Maybe<Array<InteractionUpsertWithWhereUniqueWithoutSupplierInput>>;
};

export type InventoryUpdateManyWithoutSupplierInput = {
  create?: Maybe<Array<InventoryCreateWithoutSupplierInput>>;
  connect?: Maybe<Array<InventoryWhereUniqueInput>>;
  set?: Maybe<Array<InventoryWhereUniqueInput>>;
  disconnect?: Maybe<Array<InventoryWhereUniqueInput>>;
  delete?: Maybe<Array<InventoryWhereUniqueInput>>;
  update?: Maybe<Array<InventoryUpdateWithWhereUniqueWithoutSupplierInput>>;
  updateMany?: Maybe<Array<InventoryUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<InventoryScalarWhereInput>>;
  upsert?: Maybe<Array<InventoryUpsertWithWhereUniqueWithoutSupplierInput>>;
};

export type MovementUpdateManyWithoutSupplierInput = {
  create?: Maybe<Array<MovementCreateWithoutSupplierInput>>;
  connect?: Maybe<Array<MovementWhereUniqueInput>>;
  set?: Maybe<Array<MovementWhereUniqueInput>>;
  disconnect?: Maybe<Array<MovementWhereUniqueInput>>;
  delete?: Maybe<Array<MovementWhereUniqueInput>>;
  update?: Maybe<Array<MovementUpdateWithWhereUniqueWithoutSupplierInput>>;
  updateMany?: Maybe<Array<MovementUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<MovementScalarWhereInput>>;
  upsert?: Maybe<Array<MovementUpsertWithWhereUniqueWithoutSupplierInput>>;
};

export type PaymentUpdateManyWithoutSupplierInput = {
  create?: Maybe<Array<PaymentCreateWithoutSupplierInput>>;
  connect?: Maybe<Array<PaymentWhereUniqueInput>>;
  set?: Maybe<Array<PaymentWhereUniqueInput>>;
  disconnect?: Maybe<Array<PaymentWhereUniqueInput>>;
  delete?: Maybe<Array<PaymentWhereUniqueInput>>;
  update?: Maybe<Array<PaymentUpdateWithWhereUniqueWithoutSupplierInput>>;
  updateMany?: Maybe<Array<PaymentUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<PaymentScalarWhereInput>>;
  upsert?: Maybe<Array<PaymentUpsertWithWhereUniqueWithoutSupplierInput>>;
};

export type FileWhereInput = {
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  manufacturerId?: Maybe<NullableStringFilter>;
  messageId?: Maybe<NullableStringFilter>;
  name?: Maybe<NullableStringFilter>;
  description?: Maybe<NullableStringFilter>;
  supplierId?: Maybe<NullableStringFilter>;
  clientId?: Maybe<NullableStringFilter>;
  productId?: Maybe<NullableStringFilter>;
  smallUrl?: Maybe<NullableStringFilter>;
  transportAgencyId?: Maybe<NullableStringFilter>;
  transporterId?: Maybe<NullableStringFilter>;
  url?: Maybe<StringFilter>;
  settings?: Maybe<SettingFilter>;
  Invoice?: Maybe<InvoiceFilter>;
  imageCategory?: Maybe<CategoryFilter>;
  bannerCategory?: Maybe<CategoryFilter>;
  movementId?: Maybe<NullableStringFilter>;
  paymentId?: Maybe<NullableStringFilter>;
  AND?: Maybe<Array<FileWhereInput>>;
  OR?: Maybe<Array<FileWhereInput>>;
  NOT?: Maybe<Array<FileWhereInput>>;
  manufacturer?: Maybe<ManufacturerWhereInput>;
  message?: Maybe<MessageWhereInput>;
  client?: Maybe<ClientWhereInput>;
  supplier?: Maybe<SupplierWhereInput>;
  product?: Maybe<ProductWhereInput>;
  transportAgency?: Maybe<TransportAgencyWhereInput>;
  transporter?: Maybe<TransporterWhereInput>;
  Movement?: Maybe<MovementWhereInput>;
  Payment?: Maybe<PaymentWhereInput>;
};

export type ChannelCreateWithoutMessagesInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  role?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  members?: Maybe<ChannelCreatemembersInput>;
};

export type ChannelUpdateWithoutMessagesDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  members?: Maybe<ChannelUpdatemembersInput>;
};

export type ChannelUpsertWithoutMessagesInput = {
  update: ChannelUpdateWithoutMessagesDataInput;
  create: ChannelCreateWithoutMessagesInput;
};

export type MovementCreateWithoutCommentsInput = {
  active?: Maybe<Scalars['Boolean']>;
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  date: Scalars['DateTime'];
  id?: Maybe<Scalars['String']>;
  status?: Maybe<MovementStatus>;
  movementId: Scalars['Int'];
  notes?: Maybe<Scalars['String']>;
  sendMail?: Maybe<Scalars['Boolean']>;
  storageNumber?: Maybe<Scalars['String']>;
  type: MovementType;
  unitPrice?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  invoiceId?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  client?: Maybe<ClientCreateOneWithoutMovementsInput>;
  supplier?: Maybe<SupplierCreateOneWithoutMovementsInput>;
  batch?: Maybe<BatchCreateOneWithoutMovementsInput>;
  inventory?: Maybe<InventoryCreateOneWithoutMovementsInput>;
  product: ProductCreateOneWithoutMovementsInput;
  warehouse?: Maybe<WarehouseCreateOneWithoutMovementsInput>;
  interactions?: Maybe<InteractionCreateManyWithoutMovementInput>;
  reservation?: Maybe<ReservationCreateOneWithoutMovementInput>;
  transports?: Maybe<TransportCreateManyWithoutMovementInput>;
  invoice?: Maybe<InvoiceCreateOneWithoutMovementsInput>;
  documents?: Maybe<FileCreateManyWithoutMovementInput>;
  payments?: Maybe<PaymentCreateManyWithoutMovementInput>;
};

export type MovementUpdateWithoutCommentsDataInput = {
  active?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  status?: Maybe<MovementStatus>;
  movementId?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
  sendMail?: Maybe<Scalars['Boolean']>;
  storageNumber?: Maybe<Scalars['String']>;
  type?: Maybe<MovementType>;
  unitPrice?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  invoiceId?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  client?: Maybe<ClientUpdateOneWithoutMovementsInput>;
  supplier?: Maybe<SupplierUpdateOneWithoutMovementsInput>;
  batch?: Maybe<BatchUpdateOneWithoutMovementsInput>;
  inventory?: Maybe<InventoryUpdateOneWithoutMovementsInput>;
  product?: Maybe<ProductUpdateOneRequiredWithoutMovementsInput>;
  warehouse?: Maybe<WarehouseUpdateOneWithoutMovementsInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutMovementInput>;
  reservation?: Maybe<ReservationUpdateOneWithoutMovementInput>;
  transports?: Maybe<TransportUpdateManyWithoutMovementInput>;
  invoice?: Maybe<InvoiceUpdateOneWithoutMovementsInput>;
  documents?: Maybe<FileUpdateManyWithoutMovementInput>;
  payments?: Maybe<PaymentUpdateManyWithoutMovementInput>;
};

export type MovementUpsertWithoutCommentsInput = {
  update: MovementUpdateWithoutCommentsDataInput;
  create: MovementCreateWithoutCommentsInput;
};

export type FileCreateWithoutMessageInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  smallUrl?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  manufacturer?: Maybe<ManufacturerCreateOneWithoutImagesInput>;
  client?: Maybe<ClientCreateOneWithoutImagesInput>;
  supplier?: Maybe<SupplierCreateOneWithoutImagesInput>;
  product?: Maybe<ProductCreateOneWithoutImagesInput>;
  transportAgency?: Maybe<TransportAgencyCreateOneWithoutImagesInput>;
  transporter?: Maybe<TransporterCreateOneWithoutImagesInput>;
  settings?: Maybe<SettingCreateManyWithoutLogoInput>;
  Invoice?: Maybe<InvoiceCreateManyWithoutPdfInput>;
  imageCategory?: Maybe<CategoryCreateManyWithoutImageInput>;
  bannerCategory?: Maybe<CategoryCreateManyWithoutBannerImageInput>;
  Movement?: Maybe<MovementCreateOneWithoutDocumentsInput>;
  Payment?: Maybe<PaymentCreateOneWithoutDocumentsInput>;
};

export type FileUpdateWithWhereUniqueWithoutMessageInput = {
  where: FileWhereUniqueInput;
  data: FileUpdateWithoutMessageDataInput;
};

export type FileUpdateManyWithWhereNestedInput = {
  where: FileScalarWhereInput;
  data: FileUpdateManyDataInput;
};

export type FileScalarWhereInput = {
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  manufacturerId?: Maybe<NullableStringFilter>;
  messageId?: Maybe<NullableStringFilter>;
  name?: Maybe<NullableStringFilter>;
  description?: Maybe<NullableStringFilter>;
  supplierId?: Maybe<NullableStringFilter>;
  clientId?: Maybe<NullableStringFilter>;
  productId?: Maybe<NullableStringFilter>;
  smallUrl?: Maybe<NullableStringFilter>;
  transportAgencyId?: Maybe<NullableStringFilter>;
  transporterId?: Maybe<NullableStringFilter>;
  url?: Maybe<StringFilter>;
  settings?: Maybe<SettingFilter>;
  Invoice?: Maybe<InvoiceFilter>;
  imageCategory?: Maybe<CategoryFilter>;
  bannerCategory?: Maybe<CategoryFilter>;
  movementId?: Maybe<NullableStringFilter>;
  paymentId?: Maybe<NullableStringFilter>;
  AND?: Maybe<Array<FileScalarWhereInput>>;
  OR?: Maybe<Array<FileScalarWhereInput>>;
  NOT?: Maybe<Array<FileScalarWhereInput>>;
};

export type FileUpsertWithWhereUniqueWithoutMessageInput = {
  where: FileWhereUniqueInput;
  update: FileUpdateWithoutMessageDataInput;
  create: FileCreateWithoutMessageInput;
};

export type MessageCreateWithoutChannelInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  recipient?: Maybe<Scalars['String']>;
  sender: Scalars['String'];
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  mentions?: Maybe<MessageCreatementionsInput>;
  movement?: Maybe<MovementCreateOneWithoutCommentsInput>;
  images?: Maybe<FileCreateManyWithoutMessageInput>;
};

export type MessageUpdateWithWhereUniqueWithoutChannelInput = {
  where: MessageWhereUniqueInput;
  data: MessageUpdateWithoutChannelDataInput;
};

export type MessageUpdateManyWithWhereNestedInput = {
  where: MessageScalarWhereInput;
  data: MessageUpdateManyDataInput;
};

export type MessageScalarWhereInput = {
  channelId?: Maybe<NullableStringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  movementId?: Maybe<NullableStringFilter>;
  recipient?: Maybe<NullableStringFilter>;
  sender?: Maybe<StringFilter>;
  text?: Maybe<NullableStringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  images?: Maybe<FileFilter>;
  AND?: Maybe<Array<MessageScalarWhereInput>>;
  OR?: Maybe<Array<MessageScalarWhereInput>>;
  NOT?: Maybe<Array<MessageScalarWhereInput>>;
};

export type MessageUpsertWithWhereUniqueWithoutChannelInput = {
  where: MessageWhereUniqueInput;
  update: MessageUpdateWithoutChannelDataInput;
  create: MessageCreateWithoutChannelInput;
};

export type ContactPersonWhereInput = {
  active?: Maybe<BooleanFilter>;
  email?: Maybe<NullableStringFilter>;
  firstName?: Maybe<NullableStringFilter>;
  id?: Maybe<StringFilter>;
  lastName?: Maybe<NullableStringFilter>;
  manufacturerId?: Maybe<NullableStringFilter>;
  mobile?: Maybe<NullableStringFilter>;
  clientId?: Maybe<NullableStringFilter>;
  supplierId?: Maybe<NullableStringFilter>;
  phone?: Maybe<NullableStringFilter>;
  scheduleEnd?: Maybe<NullableDateTimeFilter>;
  scheduleStart?: Maybe<NullableDateTimeFilter>;
  notes?: Maybe<NullableStringFilter>;
  transportAgencyId?: Maybe<NullableStringFilter>;
  warehouseId?: Maybe<NullableStringFilter>;
  AND?: Maybe<Array<ContactPersonWhereInput>>;
  OR?: Maybe<Array<ContactPersonWhereInput>>;
  NOT?: Maybe<Array<ContactPersonWhereInput>>;
  manufacturer?: Maybe<ManufacturerWhereInput>;
  supplier?: Maybe<SupplierWhereInput>;
  client?: Maybe<ClientWhereInput>;
  transportAgency?: Maybe<TransportAgencyWhereInput>;
  warehouse?: Maybe<WarehouseWhereInput>;
};

export type InteractionWhereInput = {
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  movementId?: Maybe<NullableStringFilter>;
  productId?: Maybe<NullableStringFilter>;
  type?: Maybe<StringFilter>;
  userId?: Maybe<StringFilter>;
  clientId?: Maybe<NullableStringFilter>;
  supplierId?: Maybe<NullableStringFilter>;
  AND?: Maybe<Array<InteractionWhereInput>>;
  OR?: Maybe<Array<InteractionWhereInput>>;
  NOT?: Maybe<Array<InteractionWhereInput>>;
  client?: Maybe<ClientWhereInput>;
  supplier?: Maybe<SupplierWhereInput>;
  movement?: Maybe<MovementWhereInput>;
  product?: Maybe<ProductWhereInput>;
};

export type ManufacturerFilter = {
  every?: Maybe<ManufacturerWhereInput>;
  some?: Maybe<ManufacturerWhereInput>;
  none?: Maybe<ManufacturerWhereInput>;
};

export type TransportAgencyFilter = {
  every?: Maybe<TransportAgencyWhereInput>;
  some?: Maybe<TransportAgencyWhereInput>;
  none?: Maybe<TransportAgencyWhereInput>;
};

export type WarehouseFilter = {
  every?: Maybe<WarehouseWhereInput>;
  some?: Maybe<WarehouseWhereInput>;
  none?: Maybe<WarehouseWhereInput>;
};

export type ContactPersonCreateWithoutClientInput = {
  active?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  scheduleEnd?: Maybe<Scalars['DateTime']>;
  scheduleStart?: Maybe<Scalars['DateTime']>;
  notes?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<ManufacturerCreateOneWithoutContactPersonsInput>;
  supplier?: Maybe<SupplierCreateOneWithoutContactPersonsInput>;
  transportAgency?: Maybe<TransportAgencyCreateOneWithoutContactPersonsInput>;
  warehouse?: Maybe<WarehouseCreateOneWithoutContactPersonsInput>;
};

export type FileCreateWithoutClientInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  smallUrl?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  manufacturer?: Maybe<ManufacturerCreateOneWithoutImagesInput>;
  message?: Maybe<MessageCreateOneWithoutImagesInput>;
  supplier?: Maybe<SupplierCreateOneWithoutImagesInput>;
  product?: Maybe<ProductCreateOneWithoutImagesInput>;
  transportAgency?: Maybe<TransportAgencyCreateOneWithoutImagesInput>;
  transporter?: Maybe<TransporterCreateOneWithoutImagesInput>;
  settings?: Maybe<SettingCreateManyWithoutLogoInput>;
  Invoice?: Maybe<InvoiceCreateManyWithoutPdfInput>;
  imageCategory?: Maybe<CategoryCreateManyWithoutImageInput>;
  bannerCategory?: Maybe<CategoryCreateManyWithoutBannerImageInput>;
  Movement?: Maybe<MovementCreateOneWithoutDocumentsInput>;
  Payment?: Maybe<PaymentCreateOneWithoutDocumentsInput>;
};

export type InteractionCreateWithoutClientInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  userId: Scalars['String'];
  supplier?: Maybe<SupplierCreateOneWithoutInteractionsInput>;
  movement?: Maybe<MovementCreateOneWithoutInteractionsInput>;
  product?: Maybe<ProductCreateOneWithoutInteractionsInput>;
};

export type InteractionWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type InventoryCreateWithoutClientInput = {
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  storageNumber?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  isListed?: Maybe<Scalars['Boolean']>;
  listPrice?: Maybe<Scalars['Float']>;
  supplier?: Maybe<SupplierCreateOneWithoutInventoriesInput>;
  batch?: Maybe<BatchCreateOneWithoutInventoriesInput>;
  product: ProductCreateOneWithoutInventoriesInput;
  warehouse?: Maybe<WarehouseCreateOneWithoutInventoriesInput>;
  movements?: Maybe<MovementCreateManyWithoutInventoryInput>;
  reservations?: Maybe<ReservationCreateManyWithoutInventoryInput>;
};

export type MovementCreateWithoutClientInput = {
  active?: Maybe<Scalars['Boolean']>;
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  date: Scalars['DateTime'];
  id?: Maybe<Scalars['String']>;
  status?: Maybe<MovementStatus>;
  movementId: Scalars['Int'];
  notes?: Maybe<Scalars['String']>;
  sendMail?: Maybe<Scalars['Boolean']>;
  storageNumber?: Maybe<Scalars['String']>;
  type: MovementType;
  unitPrice?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  invoiceId?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  supplier?: Maybe<SupplierCreateOneWithoutMovementsInput>;
  batch?: Maybe<BatchCreateOneWithoutMovementsInput>;
  inventory?: Maybe<InventoryCreateOneWithoutMovementsInput>;
  product: ProductCreateOneWithoutMovementsInput;
  warehouse?: Maybe<WarehouseCreateOneWithoutMovementsInput>;
  interactions?: Maybe<InteractionCreateManyWithoutMovementInput>;
  comments?: Maybe<MessageCreateManyWithoutMovementInput>;
  reservation?: Maybe<ReservationCreateOneWithoutMovementInput>;
  transports?: Maybe<TransportCreateManyWithoutMovementInput>;
  invoice?: Maybe<InvoiceCreateOneWithoutMovementsInput>;
  documents?: Maybe<FileCreateManyWithoutMovementInput>;
  payments?: Maybe<PaymentCreateManyWithoutMovementInput>;
};

export type ReservationCreateWithoutClientInput = {
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  notes?: Maybe<Scalars['String']>;
  inventory?: Maybe<InventoryCreateOneWithoutReservationsInput>;
  movement: MovementCreateOneWithoutReservationInput;
};

export type AddressCreateWithoutClientAddressInput = {
  id?: Maybe<Scalars['String']>;
  addressLine1?: Maybe<Scalars['String']>;
  addressLine2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  supplierAddress?: Maybe<SupplierCreateOneWithoutAddressInput>;
  supplierBillingAddress?: Maybe<SupplierCreateOneWithoutBillingAddressInput>;
  clientBillingAddress?: Maybe<ClientCreateOneWithoutBillingAddressInput>;
  address?: Maybe<SettingCreateOneWithoutAddressInput>;
  billingAddress?: Maybe<SettingCreateOneWithoutBillingAddressInput>;
  Manufacturer?: Maybe<ManufacturerCreateManyWithoutAddressInput>;
  TransportAgency?: Maybe<TransportAgencyCreateManyWithoutAddressInput>;
  Warehouse?: Maybe<WarehouseCreateManyWithoutAddressInput>;
};

export type AddressWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type AddressCreateWithoutClientBillingAddressInput = {
  id?: Maybe<Scalars['String']>;
  addressLine1?: Maybe<Scalars['String']>;
  addressLine2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  supplierAddress?: Maybe<SupplierCreateOneWithoutAddressInput>;
  supplierBillingAddress?: Maybe<SupplierCreateOneWithoutBillingAddressInput>;
  clientAddress?: Maybe<ClientCreateOneWithoutAddressInput>;
  address?: Maybe<SettingCreateOneWithoutAddressInput>;
  billingAddress?: Maybe<SettingCreateOneWithoutBillingAddressInput>;
  Manufacturer?: Maybe<ManufacturerCreateManyWithoutAddressInput>;
  TransportAgency?: Maybe<TransportAgencyCreateManyWithoutAddressInput>;
  Warehouse?: Maybe<WarehouseCreateManyWithoutAddressInput>;
};

export type InvoiceCreateWithoutClientInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  withTaxes: Scalars['Boolean'];
  notes?: Maybe<Scalars['String']>;
  pdf: FileCreateOneWithoutInvoiceInput;
  movements?: Maybe<MovementCreateManyWithoutInvoiceInput>;
};

export type PaymentCreateWithoutClientInput = {
  id?: Maybe<Scalars['String']>;
  paymentId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  type: PaymentType;
  status: PaymentStatus;
  dueDate?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  concept?: Maybe<Scalars['String']>;
  amount: Scalars['Float'];
  currency: Scalars['String'];
  recipient?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  paymentMethod?: Maybe<Scalars['String']>;
  stripePaymentIntentId?: Maybe<Scalars['String']>;
  stripeClientSecret?: Maybe<Scalars['String']>;
  group?: Maybe<GroupCreateOneWithoutPaymentsInput>;
  taxRate?: Maybe<TaxRateCreateOneWithoutPaymentsInput>;
  movement?: Maybe<MovementCreateOneWithoutPaymentsInput>;
  transportAgency?: Maybe<TransportAgencyCreateOneWithoutPaymentsInput>;
  supplier?: Maybe<SupplierCreateOneWithoutPaymentsInput>;
  documents?: Maybe<FileCreateManyWithoutPaymentInput>;
  bankAccount?: Maybe<BankAccountCreateOneWithoutPaymentsInput>;
};

export type ContactPersonUpdateWithWhereUniqueWithoutClientInput = {
  where: ContactPersonWhereUniqueInput;
  data: ContactPersonUpdateWithoutClientDataInput;
};

export type ContactPersonUpdateManyWithWhereNestedInput = {
  where: ContactPersonScalarWhereInput;
  data: ContactPersonUpdateManyDataInput;
};

export type ContactPersonScalarWhereInput = {
  active?: Maybe<BooleanFilter>;
  email?: Maybe<NullableStringFilter>;
  firstName?: Maybe<NullableStringFilter>;
  id?: Maybe<StringFilter>;
  lastName?: Maybe<NullableStringFilter>;
  manufacturerId?: Maybe<NullableStringFilter>;
  mobile?: Maybe<NullableStringFilter>;
  clientId?: Maybe<NullableStringFilter>;
  supplierId?: Maybe<NullableStringFilter>;
  phone?: Maybe<NullableStringFilter>;
  scheduleEnd?: Maybe<NullableDateTimeFilter>;
  scheduleStart?: Maybe<NullableDateTimeFilter>;
  notes?: Maybe<NullableStringFilter>;
  transportAgencyId?: Maybe<NullableStringFilter>;
  warehouseId?: Maybe<NullableStringFilter>;
  AND?: Maybe<Array<ContactPersonScalarWhereInput>>;
  OR?: Maybe<Array<ContactPersonScalarWhereInput>>;
  NOT?: Maybe<Array<ContactPersonScalarWhereInput>>;
};

export type ContactPersonUpsertWithWhereUniqueWithoutClientInput = {
  where: ContactPersonWhereUniqueInput;
  update: ContactPersonUpdateWithoutClientDataInput;
  create: ContactPersonCreateWithoutClientInput;
};

export type FileUpdateWithWhereUniqueWithoutClientInput = {
  where: FileWhereUniqueInput;
  data: FileUpdateWithoutClientDataInput;
};

export type FileUpsertWithWhereUniqueWithoutClientInput = {
  where: FileWhereUniqueInput;
  update: FileUpdateWithoutClientDataInput;
  create: FileCreateWithoutClientInput;
};

export type InteractionUpdateWithWhereUniqueWithoutClientInput = {
  where: InteractionWhereUniqueInput;
  data: InteractionUpdateWithoutClientDataInput;
};

export type InteractionUpdateManyWithWhereNestedInput = {
  where: InteractionScalarWhereInput;
  data: InteractionUpdateManyDataInput;
};

export type InteractionScalarWhereInput = {
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  movementId?: Maybe<NullableStringFilter>;
  productId?: Maybe<NullableStringFilter>;
  type?: Maybe<StringFilter>;
  userId?: Maybe<StringFilter>;
  clientId?: Maybe<NullableStringFilter>;
  supplierId?: Maybe<NullableStringFilter>;
  AND?: Maybe<Array<InteractionScalarWhereInput>>;
  OR?: Maybe<Array<InteractionScalarWhereInput>>;
  NOT?: Maybe<Array<InteractionScalarWhereInput>>;
};

export type InteractionUpsertWithWhereUniqueWithoutClientInput = {
  where: InteractionWhereUniqueInput;
  update: InteractionUpdateWithoutClientDataInput;
  create: InteractionCreateWithoutClientInput;
};

export type InventoryUpdateWithWhereUniqueWithoutClientInput = {
  where: InventoryWhereUniqueInput;
  data: InventoryUpdateWithoutClientDataInput;
};

export type InventoryUpdateManyWithWhereNestedInput = {
  where: InventoryScalarWhereInput;
  data: InventoryUpdateManyDataInput;
};

export type InventoryScalarWhereInput = {
  amount?: Maybe<IntFilter>;
  batchId?: Maybe<NullableStringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  productId?: Maybe<StringFilter>;
  storageNumber?: Maybe<NullableStringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  warehouseId?: Maybe<NullableStringFilter>;
  supplierId?: Maybe<NullableStringFilter>;
  movements?: Maybe<MovementFilter>;
  reservations?: Maybe<ReservationFilter>;
  clientId?: Maybe<NullableStringFilter>;
  source?: Maybe<NullableStringFilter>;
  isListed?: Maybe<NullableBooleanFilter>;
  listPrice?: Maybe<NullableFloatFilter>;
  AND?: Maybe<Array<InventoryScalarWhereInput>>;
  OR?: Maybe<Array<InventoryScalarWhereInput>>;
  NOT?: Maybe<Array<InventoryScalarWhereInput>>;
};

export type InventoryUpsertWithWhereUniqueWithoutClientInput = {
  where: InventoryWhereUniqueInput;
  update: InventoryUpdateWithoutClientDataInput;
  create: InventoryCreateWithoutClientInput;
};

export type MovementUpdateWithWhereUniqueWithoutClientInput = {
  where: MovementWhereUniqueInput;
  data: MovementUpdateWithoutClientDataInput;
};

export type MovementUpdateManyWithWhereNestedInput = {
  where: MovementScalarWhereInput;
  data: MovementUpdateManyDataInput;
};

export type MovementScalarWhereInput = {
  active?: Maybe<BooleanFilter>;
  amount?: Maybe<IntFilter>;
  batchId?: Maybe<NullableStringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  date?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  status?: Maybe<MovementStatus>;
  inventoryId?: Maybe<NullableStringFilter>;
  movementId?: Maybe<IntFilter>;
  notes?: Maybe<NullableStringFilter>;
  productId?: Maybe<StringFilter>;
  sendMail?: Maybe<BooleanFilter>;
  storageNumber?: Maybe<NullableStringFilter>;
  type?: Maybe<MovementType>;
  unitPrice?: Maybe<NullableFloatFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  warehouseId?: Maybe<NullableStringFilter>;
  clientId?: Maybe<NullableStringFilter>;
  supplierId?: Maybe<NullableStringFilter>;
  interactions?: Maybe<InteractionFilter>;
  comments?: Maybe<MessageFilter>;
  transports?: Maybe<TransportFilter>;
  invoiceId?: Maybe<NullableStringFilter>;
  invoiceId_InvoiceToMovement?: Maybe<NullableIntFilter>;
  source?: Maybe<NullableStringFilter>;
  documents?: Maybe<FileFilter>;
  payments?: Maybe<PaymentFilter>;
  AND?: Maybe<Array<MovementScalarWhereInput>>;
  OR?: Maybe<Array<MovementScalarWhereInput>>;
  NOT?: Maybe<Array<MovementScalarWhereInput>>;
};

export type MovementUpsertWithWhereUniqueWithoutClientInput = {
  where: MovementWhereUniqueInput;
  update: MovementUpdateWithoutClientDataInput;
  create: MovementCreateWithoutClientInput;
};

export type ReservationUpdateWithWhereUniqueWithoutClientInput = {
  where: ReservationWhereUniqueInput;
  data: ReservationUpdateWithoutClientDataInput;
};

export type ReservationUpdateManyWithWhereNestedInput = {
  where: ReservationScalarWhereInput;
  data: ReservationUpdateManyDataInput;
};

export type ReservationScalarWhereInput = {
  amount?: Maybe<IntFilter>;
  clientId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  inventoryId?: Maybe<NullableStringFilter>;
  movementId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  notes?: Maybe<NullableStringFilter>;
  AND?: Maybe<Array<ReservationScalarWhereInput>>;
  OR?: Maybe<Array<ReservationScalarWhereInput>>;
  NOT?: Maybe<Array<ReservationScalarWhereInput>>;
};

export type ReservationUpsertWithWhereUniqueWithoutClientInput = {
  where: ReservationWhereUniqueInput;
  update: ReservationUpdateWithoutClientDataInput;
  create: ReservationCreateWithoutClientInput;
};

export type AddressUpdateWithoutClientAddressDataInput = {
  id?: Maybe<Scalars['String']>;
  addressLine1?: Maybe<Scalars['String']>;
  addressLine2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  supplierAddress?: Maybe<SupplierUpdateOneWithoutAddressInput>;
  supplierBillingAddress?: Maybe<SupplierUpdateOneWithoutBillingAddressInput>;
  clientBillingAddress?: Maybe<ClientUpdateOneWithoutBillingAddressInput>;
  address?: Maybe<SettingUpdateOneWithoutAddressInput>;
  billingAddress?: Maybe<SettingUpdateOneWithoutBillingAddressInput>;
  Manufacturer?: Maybe<ManufacturerUpdateManyWithoutAddressInput>;
  TransportAgency?: Maybe<TransportAgencyUpdateManyWithoutAddressInput>;
  Warehouse?: Maybe<WarehouseUpdateManyWithoutAddressInput>;
};

export type AddressUpsertWithoutClientAddressInput = {
  update: AddressUpdateWithoutClientAddressDataInput;
  create: AddressCreateWithoutClientAddressInput;
};

export type AddressUpdateWithoutClientBillingAddressDataInput = {
  id?: Maybe<Scalars['String']>;
  addressLine1?: Maybe<Scalars['String']>;
  addressLine2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  supplierAddress?: Maybe<SupplierUpdateOneWithoutAddressInput>;
  supplierBillingAddress?: Maybe<SupplierUpdateOneWithoutBillingAddressInput>;
  clientAddress?: Maybe<ClientUpdateOneWithoutAddressInput>;
  address?: Maybe<SettingUpdateOneWithoutAddressInput>;
  billingAddress?: Maybe<SettingUpdateOneWithoutBillingAddressInput>;
  Manufacturer?: Maybe<ManufacturerUpdateManyWithoutAddressInput>;
  TransportAgency?: Maybe<TransportAgencyUpdateManyWithoutAddressInput>;
  Warehouse?: Maybe<WarehouseUpdateManyWithoutAddressInput>;
};

export type AddressUpsertWithoutClientBillingAddressInput = {
  update: AddressUpdateWithoutClientBillingAddressDataInput;
  create: AddressCreateWithoutClientBillingAddressInput;
};

export type InvoiceUpdateWithWhereUniqueWithoutClientInput = {
  where: InvoiceWhereUniqueInput;
  data: InvoiceUpdateWithoutClientDataInput;
};

export type InvoiceUpdateManyWithWhereNestedInput = {
  where: InvoiceScalarWhereInput;
  data: InvoiceUpdateManyDataInput;
};

export type InvoiceScalarWhereInput = {
  id?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  pdfId?: Maybe<StringFilter>;
  movements?: Maybe<MovementFilter>;
  clientId?: Maybe<StringFilter>;
  withTaxes?: Maybe<BooleanFilter>;
  notes?: Maybe<NullableStringFilter>;
  AND?: Maybe<Array<InvoiceScalarWhereInput>>;
  OR?: Maybe<Array<InvoiceScalarWhereInput>>;
  NOT?: Maybe<Array<InvoiceScalarWhereInput>>;
};

export type InvoiceUpsertWithWhereUniqueWithoutClientInput = {
  where: InvoiceWhereUniqueInput;
  update: InvoiceUpdateWithoutClientDataInput;
  create: InvoiceCreateWithoutClientInput;
};

export type PaymentUpdateWithWhereUniqueWithoutClientInput = {
  where: PaymentWhereUniqueInput;
  data: PaymentUpdateWithoutClientDataInput;
};

export type PaymentUpdateManyWithWhereNestedInput = {
  where: PaymentScalarWhereInput;
  data: PaymentUpdateManyDataInput;
};

export type PaymentScalarWhereInput = {
  id?: Maybe<StringFilter>;
  paymentId?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  type?: Maybe<PaymentType>;
  status?: Maybe<PaymentStatus>;
  dueDate?: Maybe<NullableDateTimeFilter>;
  date?: Maybe<NullableDateTimeFilter>;
  source?: Maybe<NullableStringFilter>;
  concept?: Maybe<NullableStringFilter>;
  groupId?: Maybe<NullableStringFilter>;
  amount?: Maybe<FloatFilter>;
  currency?: Maybe<StringFilter>;
  taxRateId?: Maybe<NullableStringFilter>;
  recipient?: Maybe<NullableStringFilter>;
  notes?: Maybe<NullableStringFilter>;
  movementId?: Maybe<NullableStringFilter>;
  transportAgencyId?: Maybe<NullableStringFilter>;
  clientId?: Maybe<NullableStringFilter>;
  supplierId?: Maybe<NullableStringFilter>;
  documents?: Maybe<FileFilter>;
  bankAccountId?: Maybe<NullableStringFilter>;
  paymentMethod?: Maybe<NullableStringFilter>;
  stripePaymentIntentId?: Maybe<NullableStringFilter>;
  stripeClientSecret?: Maybe<NullableStringFilter>;
  AND?: Maybe<Array<PaymentScalarWhereInput>>;
  OR?: Maybe<Array<PaymentScalarWhereInput>>;
  NOT?: Maybe<Array<PaymentScalarWhereInput>>;
};

export type PaymentUpsertWithWhereUniqueWithoutClientInput = {
  where: PaymentWhereUniqueInput;
  update: PaymentUpdateWithoutClientDataInput;
  create: PaymentCreateWithoutClientInput;
};

export type NotificationWhereInput = {
  active?: Maybe<BooleanFilter>;
  amount?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  productId?: Maybe<StringFilter>;
  type?: Maybe<NotificationType>;
  updatedAt?: Maybe<DateTimeFilter>;
  warehouseId?: Maybe<NullableStringFilter>;
  user?: Maybe<StringFilter>;
  userLanguage?: Maybe<Language>;
  userEmail?: Maybe<StringFilter>;
  AND?: Maybe<Array<NotificationWhereInput>>;
  OR?: Maybe<Array<NotificationWhereInput>>;
  NOT?: Maybe<Array<NotificationWhereInput>>;
  warehouse?: Maybe<WarehouseWhereInput>;
  product?: Maybe<ProductWhereInput>;
};

export type TransportWhereInput = {
  arrivalDate?: Maybe<NullableDateTimeFilter>;
  arrivalPoint?: Maybe<NullableStringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  movementId?: Maybe<NullableStringFilter>;
  price?: Maybe<NullableFloatFilter>;
  transportAgencyId?: Maybe<NullableStringFilter>;
  transporterId?: Maybe<NullableStringFilter>;
  notes?: Maybe<NullableStringFilter>;
  AND?: Maybe<Array<TransportWhereInput>>;
  OR?: Maybe<Array<TransportWhereInput>>;
  NOT?: Maybe<Array<TransportWhereInput>>;
  movement?: Maybe<MovementWhereInput>;
  transportAgency?: Maybe<TransportAgencyWhereInput>;
  transporter?: Maybe<TransporterWhereInput>;
};

export type TransporterWhereInput = {
  transportAgencyId?: Maybe<NullableStringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<NullableStringFilter>;
  type?: Maybe<TransportType>;
  images?: Maybe<FileFilter>;
  transports?: Maybe<TransportFilter>;
  notes?: Maybe<NullableStringFilter>;
  AND?: Maybe<Array<TransporterWhereInput>>;
  OR?: Maybe<Array<TransporterWhereInput>>;
  NOT?: Maybe<Array<TransporterWhereInput>>;
  transportAgency?: Maybe<TransportAgencyWhereInput>;
};

export type ContactPersonCreateWithoutTransportAgencyInput = {
  active?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  scheduleEnd?: Maybe<Scalars['DateTime']>;
  scheduleStart?: Maybe<Scalars['DateTime']>;
  notes?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<ManufacturerCreateOneWithoutContactPersonsInput>;
  supplier?: Maybe<SupplierCreateOneWithoutContactPersonsInput>;
  client?: Maybe<ClientCreateOneWithoutContactPersonsInput>;
  warehouse?: Maybe<WarehouseCreateOneWithoutContactPersonsInput>;
};

export type FileCreateWithoutTransportAgencyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  smallUrl?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  manufacturer?: Maybe<ManufacturerCreateOneWithoutImagesInput>;
  message?: Maybe<MessageCreateOneWithoutImagesInput>;
  client?: Maybe<ClientCreateOneWithoutImagesInput>;
  supplier?: Maybe<SupplierCreateOneWithoutImagesInput>;
  product?: Maybe<ProductCreateOneWithoutImagesInput>;
  transporter?: Maybe<TransporterCreateOneWithoutImagesInput>;
  settings?: Maybe<SettingCreateManyWithoutLogoInput>;
  Invoice?: Maybe<InvoiceCreateManyWithoutPdfInput>;
  imageCategory?: Maybe<CategoryCreateManyWithoutImageInput>;
  bannerCategory?: Maybe<CategoryCreateManyWithoutBannerImageInput>;
  Movement?: Maybe<MovementCreateOneWithoutDocumentsInput>;
  Payment?: Maybe<PaymentCreateOneWithoutDocumentsInput>;
};

export type TransportCreateWithoutTransportAgencyInput = {
  arrivalDate?: Maybe<Scalars['DateTime']>;
  arrivalPoint?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  notes?: Maybe<Scalars['String']>;
  movement?: Maybe<MovementCreateOneWithoutTransportsInput>;
  transporter?: Maybe<TransporterCreateOneWithoutTransportsInput>;
};

export type TransporterCreateWithoutTransportAgencyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type: TransportType;
  notes?: Maybe<Scalars['String']>;
  identifications?: Maybe<TransporterCreateidentificationsInput>;
  images?: Maybe<FileCreateManyWithoutTransporterInput>;
  transports?: Maybe<TransportCreateManyWithoutTransporterInput>;
};

export type AddressCreateWithoutTransportAgencyInput = {
  id?: Maybe<Scalars['String']>;
  addressLine1?: Maybe<Scalars['String']>;
  addressLine2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  supplierAddress?: Maybe<SupplierCreateOneWithoutAddressInput>;
  supplierBillingAddress?: Maybe<SupplierCreateOneWithoutBillingAddressInput>;
  clientAddress?: Maybe<ClientCreateOneWithoutAddressInput>;
  clientBillingAddress?: Maybe<ClientCreateOneWithoutBillingAddressInput>;
  address?: Maybe<SettingCreateOneWithoutAddressInput>;
  billingAddress?: Maybe<SettingCreateOneWithoutBillingAddressInput>;
  Manufacturer?: Maybe<ManufacturerCreateManyWithoutAddressInput>;
  Warehouse?: Maybe<WarehouseCreateManyWithoutAddressInput>;
};

export type PaymentCreateWithoutTransportAgencyInput = {
  id?: Maybe<Scalars['String']>;
  paymentId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  type: PaymentType;
  status: PaymentStatus;
  dueDate?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  concept?: Maybe<Scalars['String']>;
  amount: Scalars['Float'];
  currency: Scalars['String'];
  recipient?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  paymentMethod?: Maybe<Scalars['String']>;
  stripePaymentIntentId?: Maybe<Scalars['String']>;
  stripeClientSecret?: Maybe<Scalars['String']>;
  group?: Maybe<GroupCreateOneWithoutPaymentsInput>;
  taxRate?: Maybe<TaxRateCreateOneWithoutPaymentsInput>;
  movement?: Maybe<MovementCreateOneWithoutPaymentsInput>;
  client?: Maybe<ClientCreateOneWithoutPaymentsInput>;
  supplier?: Maybe<SupplierCreateOneWithoutPaymentsInput>;
  documents?: Maybe<FileCreateManyWithoutPaymentInput>;
  bankAccount?: Maybe<BankAccountCreateOneWithoutPaymentsInput>;
};

export type ContactPersonUpdateWithWhereUniqueWithoutTransportAgencyInput = {
  where: ContactPersonWhereUniqueInput;
  data: ContactPersonUpdateWithoutTransportAgencyDataInput;
};

export type ContactPersonUpsertWithWhereUniqueWithoutTransportAgencyInput = {
  where: ContactPersonWhereUniqueInput;
  update: ContactPersonUpdateWithoutTransportAgencyDataInput;
  create: ContactPersonCreateWithoutTransportAgencyInput;
};

export type FileUpdateWithWhereUniqueWithoutTransportAgencyInput = {
  where: FileWhereUniqueInput;
  data: FileUpdateWithoutTransportAgencyDataInput;
};

export type FileUpsertWithWhereUniqueWithoutTransportAgencyInput = {
  where: FileWhereUniqueInput;
  update: FileUpdateWithoutTransportAgencyDataInput;
  create: FileCreateWithoutTransportAgencyInput;
};

export type TransportUpdateWithWhereUniqueWithoutTransportAgencyInput = {
  where: TransportWhereUniqueInput;
  data: TransportUpdateWithoutTransportAgencyDataInput;
};

export type TransportUpdateManyWithWhereNestedInput = {
  where: TransportScalarWhereInput;
  data: TransportUpdateManyDataInput;
};

export type TransportScalarWhereInput = {
  arrivalDate?: Maybe<NullableDateTimeFilter>;
  arrivalPoint?: Maybe<NullableStringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  movementId?: Maybe<NullableStringFilter>;
  price?: Maybe<NullableFloatFilter>;
  transportAgencyId?: Maybe<NullableStringFilter>;
  transporterId?: Maybe<NullableStringFilter>;
  notes?: Maybe<NullableStringFilter>;
  AND?: Maybe<Array<TransportScalarWhereInput>>;
  OR?: Maybe<Array<TransportScalarWhereInput>>;
  NOT?: Maybe<Array<TransportScalarWhereInput>>;
};

export type TransportUpsertWithWhereUniqueWithoutTransportAgencyInput = {
  where: TransportWhereUniqueInput;
  update: TransportUpdateWithoutTransportAgencyDataInput;
  create: TransportCreateWithoutTransportAgencyInput;
};

export type TransporterUpdateWithWhereUniqueWithoutTransportAgencyInput = {
  where: TransporterWhereUniqueInput;
  data: TransporterUpdateWithoutTransportAgencyDataInput;
};

export type TransporterUpdateManyWithWhereNestedInput = {
  where: TransporterScalarWhereInput;
  data: TransporterUpdateManyDataInput;
};

export type TransporterScalarWhereInput = {
  transportAgencyId?: Maybe<NullableStringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<NullableStringFilter>;
  type?: Maybe<TransportType>;
  images?: Maybe<FileFilter>;
  transports?: Maybe<TransportFilter>;
  notes?: Maybe<NullableStringFilter>;
  AND?: Maybe<Array<TransporterScalarWhereInput>>;
  OR?: Maybe<Array<TransporterScalarWhereInput>>;
  NOT?: Maybe<Array<TransporterScalarWhereInput>>;
};

export type TransporterUpsertWithWhereUniqueWithoutTransportAgencyInput = {
  where: TransporterWhereUniqueInput;
  update: TransporterUpdateWithoutTransportAgencyDataInput;
  create: TransporterCreateWithoutTransportAgencyInput;
};

export type AddressUpdateWithoutTransportAgencyDataInput = {
  id?: Maybe<Scalars['String']>;
  addressLine1?: Maybe<Scalars['String']>;
  addressLine2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  supplierAddress?: Maybe<SupplierUpdateOneWithoutAddressInput>;
  supplierBillingAddress?: Maybe<SupplierUpdateOneWithoutBillingAddressInput>;
  clientAddress?: Maybe<ClientUpdateOneWithoutAddressInput>;
  clientBillingAddress?: Maybe<ClientUpdateOneWithoutBillingAddressInput>;
  address?: Maybe<SettingUpdateOneWithoutAddressInput>;
  billingAddress?: Maybe<SettingUpdateOneWithoutBillingAddressInput>;
  Manufacturer?: Maybe<ManufacturerUpdateManyWithoutAddressInput>;
  Warehouse?: Maybe<WarehouseUpdateManyWithoutAddressInput>;
};

export type AddressUpsertWithoutTransportAgencyInput = {
  update: AddressUpdateWithoutTransportAgencyDataInput;
  create: AddressCreateWithoutTransportAgencyInput;
};

export type PaymentUpdateWithWhereUniqueWithoutTransportAgencyInput = {
  where: PaymentWhereUniqueInput;
  data: PaymentUpdateWithoutTransportAgencyDataInput;
};

export type PaymentUpsertWithWhereUniqueWithoutTransportAgencyInput = {
  where: PaymentWhereUniqueInput;
  update: PaymentUpdateWithoutTransportAgencyDataInput;
  create: PaymentCreateWithoutTransportAgencyInput;
};

export type ContactPersonCreateWithoutWarehouseInput = {
  active?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  scheduleEnd?: Maybe<Scalars['DateTime']>;
  scheduleStart?: Maybe<Scalars['DateTime']>;
  notes?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<ManufacturerCreateOneWithoutContactPersonsInput>;
  supplier?: Maybe<SupplierCreateOneWithoutContactPersonsInput>;
  client?: Maybe<ClientCreateOneWithoutContactPersonsInput>;
  transportAgency?: Maybe<TransportAgencyCreateOneWithoutContactPersonsInput>;
};

export type InventoryCreateWithoutWarehouseInput = {
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  storageNumber?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  isListed?: Maybe<Scalars['Boolean']>;
  listPrice?: Maybe<Scalars['Float']>;
  supplier?: Maybe<SupplierCreateOneWithoutInventoriesInput>;
  batch?: Maybe<BatchCreateOneWithoutInventoriesInput>;
  product: ProductCreateOneWithoutInventoriesInput;
  movements?: Maybe<MovementCreateManyWithoutInventoryInput>;
  reservations?: Maybe<ReservationCreateManyWithoutInventoryInput>;
  client?: Maybe<ClientCreateOneWithoutInventoriesInput>;
};

export type MovementCreateWithoutWarehouseInput = {
  active?: Maybe<Scalars['Boolean']>;
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  date: Scalars['DateTime'];
  id?: Maybe<Scalars['String']>;
  status?: Maybe<MovementStatus>;
  movementId: Scalars['Int'];
  notes?: Maybe<Scalars['String']>;
  sendMail?: Maybe<Scalars['Boolean']>;
  storageNumber?: Maybe<Scalars['String']>;
  type: MovementType;
  unitPrice?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  invoiceId?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  client?: Maybe<ClientCreateOneWithoutMovementsInput>;
  supplier?: Maybe<SupplierCreateOneWithoutMovementsInput>;
  batch?: Maybe<BatchCreateOneWithoutMovementsInput>;
  inventory?: Maybe<InventoryCreateOneWithoutMovementsInput>;
  product: ProductCreateOneWithoutMovementsInput;
  interactions?: Maybe<InteractionCreateManyWithoutMovementInput>;
  comments?: Maybe<MessageCreateManyWithoutMovementInput>;
  reservation?: Maybe<ReservationCreateOneWithoutMovementInput>;
  transports?: Maybe<TransportCreateManyWithoutMovementInput>;
  invoice?: Maybe<InvoiceCreateOneWithoutMovementsInput>;
  documents?: Maybe<FileCreateManyWithoutMovementInput>;
  payments?: Maybe<PaymentCreateManyWithoutMovementInput>;
};

export type AddressCreateWithoutWarehouseInput = {
  id?: Maybe<Scalars['String']>;
  addressLine1?: Maybe<Scalars['String']>;
  addressLine2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  supplierAddress?: Maybe<SupplierCreateOneWithoutAddressInput>;
  supplierBillingAddress?: Maybe<SupplierCreateOneWithoutBillingAddressInput>;
  clientAddress?: Maybe<ClientCreateOneWithoutAddressInput>;
  clientBillingAddress?: Maybe<ClientCreateOneWithoutBillingAddressInput>;
  address?: Maybe<SettingCreateOneWithoutAddressInput>;
  billingAddress?: Maybe<SettingCreateOneWithoutBillingAddressInput>;
  Manufacturer?: Maybe<ManufacturerCreateManyWithoutAddressInput>;
  TransportAgency?: Maybe<TransportAgencyCreateManyWithoutAddressInput>;
};

export type NotificationCreateWithoutWarehouseInput = {
  active?: Maybe<Scalars['Boolean']>;
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  type: NotificationType;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: Scalars['String'];
  userLanguage?: Maybe<Language>;
  userEmail: Scalars['String'];
  product: ProductCreateOneWithoutNotificationsInput;
};

export type ContactPersonUpdateWithWhereUniqueWithoutWarehouseInput = {
  where: ContactPersonWhereUniqueInput;
  data: ContactPersonUpdateWithoutWarehouseDataInput;
};

export type ContactPersonUpsertWithWhereUniqueWithoutWarehouseInput = {
  where: ContactPersonWhereUniqueInput;
  update: ContactPersonUpdateWithoutWarehouseDataInput;
  create: ContactPersonCreateWithoutWarehouseInput;
};

export type InventoryUpdateWithWhereUniqueWithoutWarehouseInput = {
  where: InventoryWhereUniqueInput;
  data: InventoryUpdateWithoutWarehouseDataInput;
};

export type InventoryUpsertWithWhereUniqueWithoutWarehouseInput = {
  where: InventoryWhereUniqueInput;
  update: InventoryUpdateWithoutWarehouseDataInput;
  create: InventoryCreateWithoutWarehouseInput;
};

export type MovementUpdateWithWhereUniqueWithoutWarehouseInput = {
  where: MovementWhereUniqueInput;
  data: MovementUpdateWithoutWarehouseDataInput;
};

export type MovementUpsertWithWhereUniqueWithoutWarehouseInput = {
  where: MovementWhereUniqueInput;
  update: MovementUpdateWithoutWarehouseDataInput;
  create: MovementCreateWithoutWarehouseInput;
};

export type AddressUpdateWithoutWarehouseDataInput = {
  id?: Maybe<Scalars['String']>;
  addressLine1?: Maybe<Scalars['String']>;
  addressLine2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  supplierAddress?: Maybe<SupplierUpdateOneWithoutAddressInput>;
  supplierBillingAddress?: Maybe<SupplierUpdateOneWithoutBillingAddressInput>;
  clientAddress?: Maybe<ClientUpdateOneWithoutAddressInput>;
  clientBillingAddress?: Maybe<ClientUpdateOneWithoutBillingAddressInput>;
  address?: Maybe<SettingUpdateOneWithoutAddressInput>;
  billingAddress?: Maybe<SettingUpdateOneWithoutBillingAddressInput>;
  Manufacturer?: Maybe<ManufacturerUpdateManyWithoutAddressInput>;
  TransportAgency?: Maybe<TransportAgencyUpdateManyWithoutAddressInput>;
};

export type AddressUpsertWithoutWarehouseInput = {
  update: AddressUpdateWithoutWarehouseDataInput;
  create: AddressCreateWithoutWarehouseInput;
};

export type NotificationUpdateWithWhereUniqueWithoutWarehouseInput = {
  where: NotificationWhereUniqueInput;
  data: NotificationUpdateWithoutWarehouseDataInput;
};

export type NotificationUpdateManyWithWhereNestedInput = {
  where: NotificationScalarWhereInput;
  data: NotificationUpdateManyDataInput;
};

export type NotificationScalarWhereInput = {
  active?: Maybe<BooleanFilter>;
  amount?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  productId?: Maybe<StringFilter>;
  type?: Maybe<NotificationType>;
  updatedAt?: Maybe<DateTimeFilter>;
  warehouseId?: Maybe<NullableStringFilter>;
  user?: Maybe<StringFilter>;
  userLanguage?: Maybe<Language>;
  userEmail?: Maybe<StringFilter>;
  AND?: Maybe<Array<NotificationScalarWhereInput>>;
  OR?: Maybe<Array<NotificationScalarWhereInput>>;
  NOT?: Maybe<Array<NotificationScalarWhereInput>>;
};

export type NotificationUpsertWithWhereUniqueWithoutWarehouseInput = {
  where: NotificationWhereUniqueInput;
  update: NotificationUpdateWithoutWarehouseDataInput;
  create: NotificationCreateWithoutWarehouseInput;
};

export type WarehouseCreateWithoutNotificationInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutWarehouseInput>;
  inventories?: Maybe<InventoryCreateManyWithoutWarehouseInput>;
  movements?: Maybe<MovementCreateManyWithoutWarehouseInput>;
  address?: Maybe<AddressCreateOneWithoutWarehouseInput>;
};

export type ProductCreateWithoutNotificationsInput = {
  id?: Maybe<Scalars['String']>;
  productId: Scalars['Int'];
  ASIN?: Maybe<Scalars['String']>;
  EAN?: Maybe<Scalars['String']>;
  ISBN?: Maybe<Scalars['String']>;
  UPC?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  material?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  isPackaging?: Maybe<Scalars['Boolean']>;
  isListed?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<ProductCreatetagsInput>;
  dimensions?: Maybe<DimensionCreateOneWithoutProductInput>;
  manufacturer?: Maybe<ManufacturerCreateOneWithoutProductsInput>;
  batches?: Maybe<BatchCreateManyWithoutProductInput>;
  images?: Maybe<FileCreateManyWithoutProductInput>;
  interactions?: Maybe<InteractionCreateManyWithoutProductInput>;
  inventories?: Maybe<InventoryCreateManyWithoutProductInput>;
  movements?: Maybe<MovementCreateManyWithoutProductInput>;
  units?: Maybe<UnitCreateManyWithoutProductInput>;
  taxRates?: Maybe<TaxRateCreateManyWithoutProductInput>;
  packaging?: Maybe<ProductCreateManyWithoutPackagedProductInput>;
  variants?: Maybe<ProductCreateManyWithoutVariantProductInput>;
  packagedProduct?: Maybe<ProductCreateOneWithoutPackagingInput>;
  variantProduct?: Maybe<ProductCreateOneWithoutVariantsInput>;
  categories?: Maybe<CategoryCreateManyWithoutProductsInput>;
};

export type WarehouseUpdateWithoutNotificationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutWarehouseInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutWarehouseInput>;
  movements?: Maybe<MovementUpdateManyWithoutWarehouseInput>;
  address?: Maybe<AddressUpdateOneWithoutWarehouseInput>;
};

export type WarehouseUpsertWithoutNotificationInput = {
  update: WarehouseUpdateWithoutNotificationDataInput;
  create: WarehouseCreateWithoutNotificationInput;
};

export type ProductUpdateWithoutNotificationsDataInput = {
  id?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['Int']>;
  ASIN?: Maybe<Scalars['String']>;
  EAN?: Maybe<Scalars['String']>;
  ISBN?: Maybe<Scalars['String']>;
  UPC?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  material?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  isPackaging?: Maybe<Scalars['Boolean']>;
  isListed?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<ProductUpdatetagsInput>;
  dimensions?: Maybe<DimensionUpdateOneWithoutProductInput>;
  manufacturer?: Maybe<ManufacturerUpdateOneWithoutProductsInput>;
  batches?: Maybe<BatchUpdateManyWithoutProductInput>;
  images?: Maybe<FileUpdateManyWithoutProductInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutProductInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutProductInput>;
  movements?: Maybe<MovementUpdateManyWithoutProductInput>;
  units?: Maybe<UnitUpdateManyWithoutProductInput>;
  taxRates?: Maybe<TaxRateUpdateManyWithoutProductInput>;
  packaging?: Maybe<ProductUpdateManyWithoutPackagedProductInput>;
  variants?: Maybe<ProductUpdateManyWithoutVariantProductInput>;
  packagedProduct?: Maybe<ProductUpdateOneWithoutPackagingInput>;
  variantProduct?: Maybe<ProductUpdateOneWithoutVariantsInput>;
  categories?: Maybe<CategoryUpdateManyWithoutProductsInput>;
};

export type ProductUpsertWithoutNotificationsInput = {
  update: ProductUpdateWithoutNotificationsDataInput;
  create: ProductCreateWithoutNotificationsInput;
};

export type GroupCreateWithoutTaxRateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  payments?: Maybe<PaymentCreateManyWithoutGroupInput>;
};

export type ProductCreateWithoutTaxRatesInput = {
  id?: Maybe<Scalars['String']>;
  productId: Scalars['Int'];
  ASIN?: Maybe<Scalars['String']>;
  EAN?: Maybe<Scalars['String']>;
  ISBN?: Maybe<Scalars['String']>;
  UPC?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  material?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  isPackaging?: Maybe<Scalars['Boolean']>;
  isListed?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<ProductCreatetagsInput>;
  dimensions?: Maybe<DimensionCreateOneWithoutProductInput>;
  manufacturer?: Maybe<ManufacturerCreateOneWithoutProductsInput>;
  batches?: Maybe<BatchCreateManyWithoutProductInput>;
  images?: Maybe<FileCreateManyWithoutProductInput>;
  interactions?: Maybe<InteractionCreateManyWithoutProductInput>;
  inventories?: Maybe<InventoryCreateManyWithoutProductInput>;
  movements?: Maybe<MovementCreateManyWithoutProductInput>;
  notifications?: Maybe<NotificationCreateManyWithoutProductInput>;
  units?: Maybe<UnitCreateManyWithoutProductInput>;
  packaging?: Maybe<ProductCreateManyWithoutPackagedProductInput>;
  variants?: Maybe<ProductCreateManyWithoutVariantProductInput>;
  packagedProduct?: Maybe<ProductCreateOneWithoutPackagingInput>;
  variantProduct?: Maybe<ProductCreateOneWithoutVariantsInput>;
  categories?: Maybe<CategoryCreateManyWithoutProductsInput>;
};

export type PaymentCreateWithoutTaxRateInput = {
  id?: Maybe<Scalars['String']>;
  paymentId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  type: PaymentType;
  status: PaymentStatus;
  dueDate?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  concept?: Maybe<Scalars['String']>;
  amount: Scalars['Float'];
  currency: Scalars['String'];
  recipient?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  paymentMethod?: Maybe<Scalars['String']>;
  stripePaymentIntentId?: Maybe<Scalars['String']>;
  stripeClientSecret?: Maybe<Scalars['String']>;
  group?: Maybe<GroupCreateOneWithoutPaymentsInput>;
  movement?: Maybe<MovementCreateOneWithoutPaymentsInput>;
  transportAgency?: Maybe<TransportAgencyCreateOneWithoutPaymentsInput>;
  client?: Maybe<ClientCreateOneWithoutPaymentsInput>;
  supplier?: Maybe<SupplierCreateOneWithoutPaymentsInput>;
  documents?: Maybe<FileCreateManyWithoutPaymentInput>;
  bankAccount?: Maybe<BankAccountCreateOneWithoutPaymentsInput>;
};

export type GroupUpdateWithoutTaxRateDataInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  payments?: Maybe<PaymentUpdateManyWithoutGroupInput>;
};

export type GroupUpsertWithoutTaxRateInput = {
  update: GroupUpdateWithoutTaxRateDataInput;
  create: GroupCreateWithoutTaxRateInput;
};

export type ProductUpdateWithoutTaxRatesDataInput = {
  id?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['Int']>;
  ASIN?: Maybe<Scalars['String']>;
  EAN?: Maybe<Scalars['String']>;
  ISBN?: Maybe<Scalars['String']>;
  UPC?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  material?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  isPackaging?: Maybe<Scalars['Boolean']>;
  isListed?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<ProductUpdatetagsInput>;
  dimensions?: Maybe<DimensionUpdateOneWithoutProductInput>;
  manufacturer?: Maybe<ManufacturerUpdateOneWithoutProductsInput>;
  batches?: Maybe<BatchUpdateManyWithoutProductInput>;
  images?: Maybe<FileUpdateManyWithoutProductInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutProductInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutProductInput>;
  movements?: Maybe<MovementUpdateManyWithoutProductInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutProductInput>;
  units?: Maybe<UnitUpdateManyWithoutProductInput>;
  packaging?: Maybe<ProductUpdateManyWithoutPackagedProductInput>;
  variants?: Maybe<ProductUpdateManyWithoutVariantProductInput>;
  packagedProduct?: Maybe<ProductUpdateOneWithoutPackagingInput>;
  variantProduct?: Maybe<ProductUpdateOneWithoutVariantsInput>;
  categories?: Maybe<CategoryUpdateManyWithoutProductsInput>;
};

export type ProductUpsertWithoutTaxRatesInput = {
  update: ProductUpdateWithoutTaxRatesDataInput;
  create: ProductCreateWithoutTaxRatesInput;
};

export type PaymentUpdateWithWhereUniqueWithoutTaxRateInput = {
  where: PaymentWhereUniqueInput;
  data: PaymentUpdateWithoutTaxRateDataInput;
};

export type PaymentUpsertWithWhereUniqueWithoutTaxRateInput = {
  where: PaymentWhereUniqueInput;
  update: PaymentUpdateWithoutTaxRateDataInput;
  create: PaymentCreateWithoutTaxRateInput;
};

export type PaymentCreateWithoutGroupInput = {
  id?: Maybe<Scalars['String']>;
  paymentId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  type: PaymentType;
  status: PaymentStatus;
  dueDate?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  concept?: Maybe<Scalars['String']>;
  amount: Scalars['Float'];
  currency: Scalars['String'];
  recipient?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  paymentMethod?: Maybe<Scalars['String']>;
  stripePaymentIntentId?: Maybe<Scalars['String']>;
  stripeClientSecret?: Maybe<Scalars['String']>;
  taxRate?: Maybe<TaxRateCreateOneWithoutPaymentsInput>;
  movement?: Maybe<MovementCreateOneWithoutPaymentsInput>;
  transportAgency?: Maybe<TransportAgencyCreateOneWithoutPaymentsInput>;
  client?: Maybe<ClientCreateOneWithoutPaymentsInput>;
  supplier?: Maybe<SupplierCreateOneWithoutPaymentsInput>;
  documents?: Maybe<FileCreateManyWithoutPaymentInput>;
  bankAccount?: Maybe<BankAccountCreateOneWithoutPaymentsInput>;
};

export type TaxRateCreateWithoutGroupInput = {
  id?: Maybe<Scalars['String']>;
  amount: Scalars['Float'];
  isSameCountry: Scalars['Boolean'];
  isEU?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  product?: Maybe<ProductCreateOneWithoutTaxRatesInput>;
  payments?: Maybe<PaymentCreateManyWithoutTaxRateInput>;
};

export type PaymentUpdateWithWhereUniqueWithoutGroupInput = {
  where: PaymentWhereUniqueInput;
  data: PaymentUpdateWithoutGroupDataInput;
};

export type PaymentUpsertWithWhereUniqueWithoutGroupInput = {
  where: PaymentWhereUniqueInput;
  update: PaymentUpdateWithoutGroupDataInput;
  create: PaymentCreateWithoutGroupInput;
};

export type TaxRateUpdateWithoutGroupDataInput = {
  id?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  isSameCountry?: Maybe<Scalars['Boolean']>;
  isEU?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  product?: Maybe<ProductUpdateOneWithoutTaxRatesInput>;
  payments?: Maybe<PaymentUpdateManyWithoutTaxRateInput>;
};

export type TaxRateUpsertWithoutGroupInput = {
  update: TaxRateUpdateWithoutGroupDataInput;
  create: TaxRateCreateWithoutGroupInput;
};

export type UnitWhereInput = {
  baseAmount?: Maybe<IntFilter>;
  description?: Maybe<NullableStringFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  productId?: Maybe<NullableStringFilter>;
  AND?: Maybe<Array<UnitWhereInput>>;
  OR?: Maybe<Array<UnitWhereInput>>;
  NOT?: Maybe<Array<UnitWhereInput>>;
  product?: Maybe<ProductWhereInput>;
};

export type CategoryWhereInput = {
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  description?: Maybe<NullableStringFilter>;
  imageId?: Maybe<NullableStringFilter>;
  bannerImageId?: Maybe<NullableStringFilter>;
  products?: Maybe<ProductFilter>;
  subCategories?: Maybe<CategoryFilter>;
  categoryId?: Maybe<NullableStringFilter>;
  AND?: Maybe<Array<CategoryWhereInput>>;
  OR?: Maybe<Array<CategoryWhereInput>>;
  NOT?: Maybe<Array<CategoryWhereInput>>;
  image?: Maybe<FileWhereInput>;
  bannerImage?: Maybe<FileWhereInput>;
  Category?: Maybe<CategoryWhereInput>;
};

export type ProductCreateWithoutUnitsInput = {
  id?: Maybe<Scalars['String']>;
  productId: Scalars['Int'];
  ASIN?: Maybe<Scalars['String']>;
  EAN?: Maybe<Scalars['String']>;
  ISBN?: Maybe<Scalars['String']>;
  UPC?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  material?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  isPackaging?: Maybe<Scalars['Boolean']>;
  isListed?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<ProductCreatetagsInput>;
  dimensions?: Maybe<DimensionCreateOneWithoutProductInput>;
  manufacturer?: Maybe<ManufacturerCreateOneWithoutProductsInput>;
  batches?: Maybe<BatchCreateManyWithoutProductInput>;
  images?: Maybe<FileCreateManyWithoutProductInput>;
  interactions?: Maybe<InteractionCreateManyWithoutProductInput>;
  inventories?: Maybe<InventoryCreateManyWithoutProductInput>;
  movements?: Maybe<MovementCreateManyWithoutProductInput>;
  notifications?: Maybe<NotificationCreateManyWithoutProductInput>;
  taxRates?: Maybe<TaxRateCreateManyWithoutProductInput>;
  packaging?: Maybe<ProductCreateManyWithoutPackagedProductInput>;
  variants?: Maybe<ProductCreateManyWithoutVariantProductInput>;
  packagedProduct?: Maybe<ProductCreateOneWithoutPackagingInput>;
  variantProduct?: Maybe<ProductCreateOneWithoutVariantsInput>;
  categories?: Maybe<CategoryCreateManyWithoutProductsInput>;
};

export type DimensionCreateWithoutProductInput = {
  id?: Maybe<Scalars['String']>;
  height: Scalars['Float'];
  width?: Maybe<Scalars['Float']>;
  depth?: Maybe<Scalars['Float']>;
};

export type DimensionWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type ManufacturerCreateWithoutProductsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  batches?: Maybe<BatchCreateManyWithoutManufacturerInput>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutManufacturerInput>;
  images?: Maybe<FileCreateManyWithoutManufacturerInput>;
  address?: Maybe<AddressCreateOneWithoutManufacturerInput>;
};

export type ManufacturerWhereUniqueInput = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type BatchCreateWithoutProductInput = {
  batchNumber?: Maybe<Scalars['String']>;
  bestBefore?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<ManufacturerCreateOneWithoutBatchesInput>;
  inventories?: Maybe<InventoryCreateManyWithoutBatchInput>;
  movements?: Maybe<MovementCreateManyWithoutBatchInput>;
};

export type FileCreateWithoutProductInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  smallUrl?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  manufacturer?: Maybe<ManufacturerCreateOneWithoutImagesInput>;
  message?: Maybe<MessageCreateOneWithoutImagesInput>;
  client?: Maybe<ClientCreateOneWithoutImagesInput>;
  supplier?: Maybe<SupplierCreateOneWithoutImagesInput>;
  transportAgency?: Maybe<TransportAgencyCreateOneWithoutImagesInput>;
  transporter?: Maybe<TransporterCreateOneWithoutImagesInput>;
  settings?: Maybe<SettingCreateManyWithoutLogoInput>;
  Invoice?: Maybe<InvoiceCreateManyWithoutPdfInput>;
  imageCategory?: Maybe<CategoryCreateManyWithoutImageInput>;
  bannerCategory?: Maybe<CategoryCreateManyWithoutBannerImageInput>;
  Movement?: Maybe<MovementCreateOneWithoutDocumentsInput>;
  Payment?: Maybe<PaymentCreateOneWithoutDocumentsInput>;
};

export type InteractionCreateWithoutProductInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  userId: Scalars['String'];
  client?: Maybe<ClientCreateOneWithoutInteractionsInput>;
  supplier?: Maybe<SupplierCreateOneWithoutInteractionsInput>;
  movement?: Maybe<MovementCreateOneWithoutInteractionsInput>;
};

export type InventoryCreateWithoutProductInput = {
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  storageNumber?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  isListed?: Maybe<Scalars['Boolean']>;
  listPrice?: Maybe<Scalars['Float']>;
  supplier?: Maybe<SupplierCreateOneWithoutInventoriesInput>;
  batch?: Maybe<BatchCreateOneWithoutInventoriesInput>;
  warehouse?: Maybe<WarehouseCreateOneWithoutInventoriesInput>;
  movements?: Maybe<MovementCreateManyWithoutInventoryInput>;
  reservations?: Maybe<ReservationCreateManyWithoutInventoryInput>;
  client?: Maybe<ClientCreateOneWithoutInventoriesInput>;
};

export type MovementCreateWithoutProductInput = {
  active?: Maybe<Scalars['Boolean']>;
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  date: Scalars['DateTime'];
  id?: Maybe<Scalars['String']>;
  status?: Maybe<MovementStatus>;
  movementId: Scalars['Int'];
  notes?: Maybe<Scalars['String']>;
  sendMail?: Maybe<Scalars['Boolean']>;
  storageNumber?: Maybe<Scalars['String']>;
  type: MovementType;
  unitPrice?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  invoiceId?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  client?: Maybe<ClientCreateOneWithoutMovementsInput>;
  supplier?: Maybe<SupplierCreateOneWithoutMovementsInput>;
  batch?: Maybe<BatchCreateOneWithoutMovementsInput>;
  inventory?: Maybe<InventoryCreateOneWithoutMovementsInput>;
  warehouse?: Maybe<WarehouseCreateOneWithoutMovementsInput>;
  interactions?: Maybe<InteractionCreateManyWithoutMovementInput>;
  comments?: Maybe<MessageCreateManyWithoutMovementInput>;
  reservation?: Maybe<ReservationCreateOneWithoutMovementInput>;
  transports?: Maybe<TransportCreateManyWithoutMovementInput>;
  invoice?: Maybe<InvoiceCreateOneWithoutMovementsInput>;
  documents?: Maybe<FileCreateManyWithoutMovementInput>;
  payments?: Maybe<PaymentCreateManyWithoutMovementInput>;
};

export type NotificationCreateWithoutProductInput = {
  active?: Maybe<Scalars['Boolean']>;
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  type: NotificationType;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: Scalars['String'];
  userLanguage?: Maybe<Language>;
  userEmail: Scalars['String'];
  warehouse?: Maybe<WarehouseCreateOneWithoutNotificationInput>;
};

export type UnitCreateWithoutProductInput = {
  baseAmount: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type TaxRateCreateWithoutProductInput = {
  id?: Maybe<Scalars['String']>;
  amount: Scalars['Float'];
  isSameCountry: Scalars['Boolean'];
  isEU?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  group?: Maybe<GroupCreateOneWithoutTaxRateInput>;
  payments?: Maybe<PaymentCreateManyWithoutTaxRateInput>;
};

export type ProductCreateWithoutPackagedProductInput = {
  id?: Maybe<Scalars['String']>;
  productId: Scalars['Int'];
  ASIN?: Maybe<Scalars['String']>;
  EAN?: Maybe<Scalars['String']>;
  ISBN?: Maybe<Scalars['String']>;
  UPC?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  material?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  isPackaging?: Maybe<Scalars['Boolean']>;
  isListed?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<ProductCreatetagsInput>;
  dimensions?: Maybe<DimensionCreateOneWithoutProductInput>;
  manufacturer?: Maybe<ManufacturerCreateOneWithoutProductsInput>;
  batches?: Maybe<BatchCreateManyWithoutProductInput>;
  images?: Maybe<FileCreateManyWithoutProductInput>;
  interactions?: Maybe<InteractionCreateManyWithoutProductInput>;
  inventories?: Maybe<InventoryCreateManyWithoutProductInput>;
  movements?: Maybe<MovementCreateManyWithoutProductInput>;
  notifications?: Maybe<NotificationCreateManyWithoutProductInput>;
  units?: Maybe<UnitCreateManyWithoutProductInput>;
  taxRates?: Maybe<TaxRateCreateManyWithoutProductInput>;
  packaging?: Maybe<ProductCreateManyWithoutPackagedProductInput>;
  variants?: Maybe<ProductCreateManyWithoutVariantProductInput>;
  variantProduct?: Maybe<ProductCreateOneWithoutVariantsInput>;
  categories?: Maybe<CategoryCreateManyWithoutProductsInput>;
};

export type ProductCreateWithoutVariantProductInput = {
  id?: Maybe<Scalars['String']>;
  productId: Scalars['Int'];
  ASIN?: Maybe<Scalars['String']>;
  EAN?: Maybe<Scalars['String']>;
  ISBN?: Maybe<Scalars['String']>;
  UPC?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  material?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  isPackaging?: Maybe<Scalars['Boolean']>;
  isListed?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<ProductCreatetagsInput>;
  dimensions?: Maybe<DimensionCreateOneWithoutProductInput>;
  manufacturer?: Maybe<ManufacturerCreateOneWithoutProductsInput>;
  batches?: Maybe<BatchCreateManyWithoutProductInput>;
  images?: Maybe<FileCreateManyWithoutProductInput>;
  interactions?: Maybe<InteractionCreateManyWithoutProductInput>;
  inventories?: Maybe<InventoryCreateManyWithoutProductInput>;
  movements?: Maybe<MovementCreateManyWithoutProductInput>;
  notifications?: Maybe<NotificationCreateManyWithoutProductInput>;
  units?: Maybe<UnitCreateManyWithoutProductInput>;
  taxRates?: Maybe<TaxRateCreateManyWithoutProductInput>;
  packaging?: Maybe<ProductCreateManyWithoutPackagedProductInput>;
  variants?: Maybe<ProductCreateManyWithoutVariantProductInput>;
  packagedProduct?: Maybe<ProductCreateOneWithoutPackagingInput>;
  categories?: Maybe<CategoryCreateManyWithoutProductsInput>;
};

export type ProductCreateWithoutPackagingInput = {
  id?: Maybe<Scalars['String']>;
  productId: Scalars['Int'];
  ASIN?: Maybe<Scalars['String']>;
  EAN?: Maybe<Scalars['String']>;
  ISBN?: Maybe<Scalars['String']>;
  UPC?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  material?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  isPackaging?: Maybe<Scalars['Boolean']>;
  isListed?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<ProductCreatetagsInput>;
  dimensions?: Maybe<DimensionCreateOneWithoutProductInput>;
  manufacturer?: Maybe<ManufacturerCreateOneWithoutProductsInput>;
  batches?: Maybe<BatchCreateManyWithoutProductInput>;
  images?: Maybe<FileCreateManyWithoutProductInput>;
  interactions?: Maybe<InteractionCreateManyWithoutProductInput>;
  inventories?: Maybe<InventoryCreateManyWithoutProductInput>;
  movements?: Maybe<MovementCreateManyWithoutProductInput>;
  notifications?: Maybe<NotificationCreateManyWithoutProductInput>;
  units?: Maybe<UnitCreateManyWithoutProductInput>;
  taxRates?: Maybe<TaxRateCreateManyWithoutProductInput>;
  variants?: Maybe<ProductCreateManyWithoutVariantProductInput>;
  packagedProduct?: Maybe<ProductCreateOneWithoutPackagingInput>;
  variantProduct?: Maybe<ProductCreateOneWithoutVariantsInput>;
  categories?: Maybe<CategoryCreateManyWithoutProductsInput>;
};

export type ProductCreateWithoutVariantsInput = {
  id?: Maybe<Scalars['String']>;
  productId: Scalars['Int'];
  ASIN?: Maybe<Scalars['String']>;
  EAN?: Maybe<Scalars['String']>;
  ISBN?: Maybe<Scalars['String']>;
  UPC?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  material?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  isPackaging?: Maybe<Scalars['Boolean']>;
  isListed?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<ProductCreatetagsInput>;
  dimensions?: Maybe<DimensionCreateOneWithoutProductInput>;
  manufacturer?: Maybe<ManufacturerCreateOneWithoutProductsInput>;
  batches?: Maybe<BatchCreateManyWithoutProductInput>;
  images?: Maybe<FileCreateManyWithoutProductInput>;
  interactions?: Maybe<InteractionCreateManyWithoutProductInput>;
  inventories?: Maybe<InventoryCreateManyWithoutProductInput>;
  movements?: Maybe<MovementCreateManyWithoutProductInput>;
  notifications?: Maybe<NotificationCreateManyWithoutProductInput>;
  units?: Maybe<UnitCreateManyWithoutProductInput>;
  taxRates?: Maybe<TaxRateCreateManyWithoutProductInput>;
  packaging?: Maybe<ProductCreateManyWithoutPackagedProductInput>;
  packagedProduct?: Maybe<ProductCreateOneWithoutPackagingInput>;
  variantProduct?: Maybe<ProductCreateOneWithoutVariantsInput>;
  categories?: Maybe<CategoryCreateManyWithoutProductsInput>;
};

export type CategoryCreateWithoutProductsInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<FileCreateOneWithoutImageCategoryInput>;
  bannerImage?: Maybe<FileCreateOneWithoutBannerCategoryInput>;
  subCategories?: Maybe<CategoryCreateManyWithoutCategoryInput>;
  Category?: Maybe<CategoryCreateOneWithoutSubCategoriesInput>;
};

export type CategoryWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type DimensionUpdateWithoutProductDataInput = {
  id?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  depth?: Maybe<Scalars['Float']>;
};

export type DimensionUpsertWithoutProductInput = {
  update: DimensionUpdateWithoutProductDataInput;
  create: DimensionCreateWithoutProductInput;
};

export type ManufacturerUpdateWithoutProductsDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  batches?: Maybe<BatchUpdateManyWithoutManufacturerInput>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutManufacturerInput>;
  images?: Maybe<FileUpdateManyWithoutManufacturerInput>;
  address?: Maybe<AddressUpdateOneWithoutManufacturerInput>;
};

export type ManufacturerUpsertWithoutProductsInput = {
  update: ManufacturerUpdateWithoutProductsDataInput;
  create: ManufacturerCreateWithoutProductsInput;
};

export type BatchUpdateWithWhereUniqueWithoutProductInput = {
  where: BatchWhereUniqueInput;
  data: BatchUpdateWithoutProductDataInput;
};

export type BatchUpdateManyWithWhereNestedInput = {
  where: BatchScalarWhereInput;
  data: BatchUpdateManyDataInput;
};

export type BatchScalarWhereInput = {
  batchNumber?: Maybe<NullableStringFilter>;
  bestBefore?: Maybe<NullableDateTimeFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  date?: Maybe<NullableDateTimeFilter>;
  id?: Maybe<StringFilter>;
  manufacturerId?: Maybe<NullableStringFilter>;
  productId?: Maybe<StringFilter>;
  inventories?: Maybe<InventoryFilter>;
  movements?: Maybe<MovementFilter>;
  source?: Maybe<NullableStringFilter>;
  AND?: Maybe<Array<BatchScalarWhereInput>>;
  OR?: Maybe<Array<BatchScalarWhereInput>>;
  NOT?: Maybe<Array<BatchScalarWhereInput>>;
};

export type BatchUpsertWithWhereUniqueWithoutProductInput = {
  where: BatchWhereUniqueInput;
  update: BatchUpdateWithoutProductDataInput;
  create: BatchCreateWithoutProductInput;
};

export type FileUpdateWithWhereUniqueWithoutProductInput = {
  where: FileWhereUniqueInput;
  data: FileUpdateWithoutProductDataInput;
};

export type FileUpsertWithWhereUniqueWithoutProductInput = {
  where: FileWhereUniqueInput;
  update: FileUpdateWithoutProductDataInput;
  create: FileCreateWithoutProductInput;
};

export type InteractionUpdateWithWhereUniqueWithoutProductInput = {
  where: InteractionWhereUniqueInput;
  data: InteractionUpdateWithoutProductDataInput;
};

export type InteractionUpsertWithWhereUniqueWithoutProductInput = {
  where: InteractionWhereUniqueInput;
  update: InteractionUpdateWithoutProductDataInput;
  create: InteractionCreateWithoutProductInput;
};

export type InventoryUpdateWithWhereUniqueWithoutProductInput = {
  where: InventoryWhereUniqueInput;
  data: InventoryUpdateWithoutProductDataInput;
};

export type InventoryUpsertWithWhereUniqueWithoutProductInput = {
  where: InventoryWhereUniqueInput;
  update: InventoryUpdateWithoutProductDataInput;
  create: InventoryCreateWithoutProductInput;
};

export type MovementUpdateWithWhereUniqueWithoutProductInput = {
  where: MovementWhereUniqueInput;
  data: MovementUpdateWithoutProductDataInput;
};

export type MovementUpsertWithWhereUniqueWithoutProductInput = {
  where: MovementWhereUniqueInput;
  update: MovementUpdateWithoutProductDataInput;
  create: MovementCreateWithoutProductInput;
};

export type NotificationUpdateWithWhereUniqueWithoutProductInput = {
  where: NotificationWhereUniqueInput;
  data: NotificationUpdateWithoutProductDataInput;
};

export type NotificationUpsertWithWhereUniqueWithoutProductInput = {
  where: NotificationWhereUniqueInput;
  update: NotificationUpdateWithoutProductDataInput;
  create: NotificationCreateWithoutProductInput;
};

export type UnitUpdateWithWhereUniqueWithoutProductInput = {
  where: UnitWhereUniqueInput;
  data: UnitUpdateWithoutProductDataInput;
};

export type UnitUpdateManyWithWhereNestedInput = {
  where: UnitScalarWhereInput;
  data: UnitUpdateManyDataInput;
};

export type UnitScalarWhereInput = {
  baseAmount?: Maybe<IntFilter>;
  description?: Maybe<NullableStringFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  productId?: Maybe<NullableStringFilter>;
  AND?: Maybe<Array<UnitScalarWhereInput>>;
  OR?: Maybe<Array<UnitScalarWhereInput>>;
  NOT?: Maybe<Array<UnitScalarWhereInput>>;
};

export type UnitUpsertWithWhereUniqueWithoutProductInput = {
  where: UnitWhereUniqueInput;
  update: UnitUpdateWithoutProductDataInput;
  create: UnitCreateWithoutProductInput;
};

export type TaxRateUpdateWithWhereUniqueWithoutProductInput = {
  where: TaxRateWhereUniqueInput;
  data: TaxRateUpdateWithoutProductDataInput;
};

export type TaxRateUpdateManyWithWhereNestedInput = {
  where: TaxRateScalarWhereInput;
  data: TaxRateUpdateManyDataInput;
};

export type TaxRateScalarWhereInput = {
  id?: Maybe<StringFilter>;
  amount?: Maybe<FloatFilter>;
  isSameCountry?: Maybe<BooleanFilter>;
  isEU?: Maybe<NullableBooleanFilter>;
  name?: Maybe<NullableStringFilter>;
  productId?: Maybe<NullableStringFilter>;
  payments?: Maybe<PaymentFilter>;
  AND?: Maybe<Array<TaxRateScalarWhereInput>>;
  OR?: Maybe<Array<TaxRateScalarWhereInput>>;
  NOT?: Maybe<Array<TaxRateScalarWhereInput>>;
};

export type TaxRateUpsertWithWhereUniqueWithoutProductInput = {
  where: TaxRateWhereUniqueInput;
  update: TaxRateUpdateWithoutProductDataInput;
  create: TaxRateCreateWithoutProductInput;
};

export type ProductUpdateWithWhereUniqueWithoutPackagedProductInput = {
  where: ProductWhereUniqueInput;
  data: ProductUpdateWithoutPackagedProductDataInput;
};

export type ProductUpdateManyWithWhereNestedInput = {
  where: ProductScalarWhereInput;
  data: ProductUpdateManyDataInput;
};

export type ProductScalarWhereInput = {
  id?: Maybe<StringFilter>;
  productId?: Maybe<IntFilter>;
  ASIN?: Maybe<NullableStringFilter>;
  EAN?: Maybe<NullableStringFilter>;
  ISBN?: Maybe<NullableStringFilter>;
  UPC?: Maybe<NullableStringFilter>;
  active?: Maybe<BooleanFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  description?: Maybe<NullableStringFilter>;
  manufacturerId?: Maybe<NullableStringFilter>;
  name?: Maybe<StringFilter>;
  slug?: Maybe<StringFilter>;
  dimensionId?: Maybe<NullableStringFilter>;
  material?: Maybe<NullableStringFilter>;
  color?: Maybe<NullableStringFilter>;
  weight?: Maybe<NullableFloatFilter>;
  batches?: Maybe<BatchFilter>;
  images?: Maybe<FileFilter>;
  interactions?: Maybe<InteractionFilter>;
  inventories?: Maybe<InventoryFilter>;
  movements?: Maybe<MovementFilter>;
  notifications?: Maybe<NotificationFilter>;
  units?: Maybe<UnitFilter>;
  taxRates?: Maybe<TaxRateFilter>;
  source?: Maybe<NullableStringFilter>;
  packaging?: Maybe<ProductFilter>;
  isPackaging?: Maybe<BooleanFilter>;
  isListed?: Maybe<NullableBooleanFilter>;
  variants?: Maybe<ProductFilter>;
  productId_PackageToPackagedProduct?: Maybe<NullableStringFilter>;
  productId_VariantToProduct?: Maybe<NullableStringFilter>;
  categories?: Maybe<CategoryFilter>;
  AND?: Maybe<Array<ProductScalarWhereInput>>;
  OR?: Maybe<Array<ProductScalarWhereInput>>;
  NOT?: Maybe<Array<ProductScalarWhereInput>>;
};

export type ProductUpsertWithWhereUniqueWithoutPackagedProductInput = {
  where: ProductWhereUniqueInput;
  update: ProductUpdateWithoutPackagedProductDataInput;
  create: ProductCreateWithoutPackagedProductInput;
};

export type ProductUpdateWithWhereUniqueWithoutVariantProductInput = {
  where: ProductWhereUniqueInput;
  data: ProductUpdateWithoutVariantProductDataInput;
};

export type ProductUpsertWithWhereUniqueWithoutVariantProductInput = {
  where: ProductWhereUniqueInput;
  update: ProductUpdateWithoutVariantProductDataInput;
  create: ProductCreateWithoutVariantProductInput;
};

export type ProductUpdateWithoutPackagingDataInput = {
  id?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['Int']>;
  ASIN?: Maybe<Scalars['String']>;
  EAN?: Maybe<Scalars['String']>;
  ISBN?: Maybe<Scalars['String']>;
  UPC?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  material?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  isPackaging?: Maybe<Scalars['Boolean']>;
  isListed?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<ProductUpdatetagsInput>;
  dimensions?: Maybe<DimensionUpdateOneWithoutProductInput>;
  manufacturer?: Maybe<ManufacturerUpdateOneWithoutProductsInput>;
  batches?: Maybe<BatchUpdateManyWithoutProductInput>;
  images?: Maybe<FileUpdateManyWithoutProductInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutProductInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutProductInput>;
  movements?: Maybe<MovementUpdateManyWithoutProductInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutProductInput>;
  units?: Maybe<UnitUpdateManyWithoutProductInput>;
  taxRates?: Maybe<TaxRateUpdateManyWithoutProductInput>;
  variants?: Maybe<ProductUpdateManyWithoutVariantProductInput>;
  packagedProduct?: Maybe<ProductUpdateOneWithoutPackagingInput>;
  variantProduct?: Maybe<ProductUpdateOneWithoutVariantsInput>;
  categories?: Maybe<CategoryUpdateManyWithoutProductsInput>;
};

export type ProductUpsertWithoutPackagingInput = {
  update: ProductUpdateWithoutPackagingDataInput;
  create: ProductCreateWithoutPackagingInput;
};

export type ProductUpdateWithoutVariantsDataInput = {
  id?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['Int']>;
  ASIN?: Maybe<Scalars['String']>;
  EAN?: Maybe<Scalars['String']>;
  ISBN?: Maybe<Scalars['String']>;
  UPC?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  material?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  isPackaging?: Maybe<Scalars['Boolean']>;
  isListed?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<ProductUpdatetagsInput>;
  dimensions?: Maybe<DimensionUpdateOneWithoutProductInput>;
  manufacturer?: Maybe<ManufacturerUpdateOneWithoutProductsInput>;
  batches?: Maybe<BatchUpdateManyWithoutProductInput>;
  images?: Maybe<FileUpdateManyWithoutProductInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutProductInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutProductInput>;
  movements?: Maybe<MovementUpdateManyWithoutProductInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutProductInput>;
  units?: Maybe<UnitUpdateManyWithoutProductInput>;
  taxRates?: Maybe<TaxRateUpdateManyWithoutProductInput>;
  packaging?: Maybe<ProductUpdateManyWithoutPackagedProductInput>;
  packagedProduct?: Maybe<ProductUpdateOneWithoutPackagingInput>;
  variantProduct?: Maybe<ProductUpdateOneWithoutVariantsInput>;
  categories?: Maybe<CategoryUpdateManyWithoutProductsInput>;
};

export type ProductUpsertWithoutVariantsInput = {
  update: ProductUpdateWithoutVariantsDataInput;
  create: ProductCreateWithoutVariantsInput;
};

export type CategoryUpdateWithWhereUniqueWithoutProductsInput = {
  where: CategoryWhereUniqueInput;
  data: CategoryUpdateWithoutProductsDataInput;
};

export type CategoryUpdateManyWithWhereNestedInput = {
  where: CategoryScalarWhereInput;
  data: CategoryUpdateManyDataInput;
};

export type CategoryScalarWhereInput = {
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  description?: Maybe<NullableStringFilter>;
  imageId?: Maybe<NullableStringFilter>;
  bannerImageId?: Maybe<NullableStringFilter>;
  products?: Maybe<ProductFilter>;
  subCategories?: Maybe<CategoryFilter>;
  categoryId?: Maybe<NullableStringFilter>;
  AND?: Maybe<Array<CategoryScalarWhereInput>>;
  OR?: Maybe<Array<CategoryScalarWhereInput>>;
  NOT?: Maybe<Array<CategoryScalarWhereInput>>;
};

export type CategoryUpsertWithWhereUniqueWithoutProductsInput = {
  where: CategoryWhereUniqueInput;
  update: CategoryUpdateWithoutProductsDataInput;
  create: CategoryCreateWithoutProductsInput;
};

export type PresetFilter = {
  every?: Maybe<PresetWhereInput>;
  some?: Maybe<PresetWhereInput>;
  none?: Maybe<PresetWhereInput>;
};

export type SettingCreateWithoutPresetsInput = {
  subDomain: Scalars['String'];
  chat?: Maybe<Scalars['Boolean']>;
  currency?: Maybe<Scalars['String']>;
  currencySymbol?: Maybe<Scalars['String']>;
  defaultLanguage?: Maybe<Language>;
  id?: Maybe<Scalars['String']>;
  stripeCustomerId?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  timezone?: Maybe<Scalars['String']>;
  transports?: Maybe<Scalars['Boolean']>;
  plan?: Maybe<AccountPlan>;
  warehouses?: Maybe<Scalars['Boolean']>;
  packaging: Scalars['Boolean'];
  shop?: Maybe<Scalars['Boolean']>;
  accounting?: Maybe<Scalars['Boolean']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  weightUnit?: Maybe<Scalars['String']>;
  lengthUnit?: Maybe<Scalars['String']>;
  manufacturerFields?: Maybe<SettingCreatemanufacturerFieldsInput>;
  movementFields?: Maybe<SettingCreatemovementFieldsInput>;
  supplierFields?: Maybe<SettingCreatesupplierFieldsInput>;
  clientFields?: Maybe<SettingCreateclientFieldsInput>;
  productFields?: Maybe<SettingCreateproductFieldsInput>;
  transportAgencyFields?: Maybe<SettingCreatetransportAgencyFieldsInput>;
  transportFields?: Maybe<SettingCreatetransportFieldsInput>;
  transporterFields?: Maybe<SettingCreatetransporterFieldsInput>;
  paymentFields?: Maybe<SettingCreatepaymentFieldsInput>;
  warehouseFields?: Maybe<SettingCreatewarehouseFieldsInput>;
  logo?: Maybe<FileCreateOneWithoutSettingsInput>;
  address?: Maybe<AddressCreateOneWithoutAddressInput>;
  billingAddress?: Maybe<AddressCreateOneWithoutBillingAddressInput>;
};

export type SettingUpdateWithoutPresetsDataInput = {
  subDomain?: Maybe<Scalars['String']>;
  chat?: Maybe<Scalars['Boolean']>;
  currency?: Maybe<Scalars['String']>;
  currencySymbol?: Maybe<Scalars['String']>;
  defaultLanguage?: Maybe<Language>;
  id?: Maybe<Scalars['String']>;
  stripeCustomerId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  transports?: Maybe<Scalars['Boolean']>;
  plan?: Maybe<AccountPlan>;
  warehouses?: Maybe<Scalars['Boolean']>;
  packaging?: Maybe<Scalars['Boolean']>;
  shop?: Maybe<Scalars['Boolean']>;
  accounting?: Maybe<Scalars['Boolean']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  weightUnit?: Maybe<Scalars['String']>;
  lengthUnit?: Maybe<Scalars['String']>;
  manufacturerFields?: Maybe<SettingUpdatemanufacturerFieldsInput>;
  movementFields?: Maybe<SettingUpdatemovementFieldsInput>;
  supplierFields?: Maybe<SettingUpdatesupplierFieldsInput>;
  clientFields?: Maybe<SettingUpdateclientFieldsInput>;
  productFields?: Maybe<SettingUpdateproductFieldsInput>;
  transportAgencyFields?: Maybe<SettingUpdatetransportAgencyFieldsInput>;
  transportFields?: Maybe<SettingUpdatetransportFieldsInput>;
  transporterFields?: Maybe<SettingUpdatetransporterFieldsInput>;
  paymentFields?: Maybe<SettingUpdatepaymentFieldsInput>;
  warehouseFields?: Maybe<SettingUpdatewarehouseFieldsInput>;
  logo?: Maybe<FileUpdateOneWithoutSettingsInput>;
  address?: Maybe<AddressUpdateOneWithoutAddressInput>;
  billingAddress?: Maybe<AddressUpdateOneWithoutBillingAddressInput>;
};

export type SettingUpsertWithoutPresetsInput = {
  update: SettingUpdateWithoutPresetsDataInput;
  create: SettingCreateWithoutPresetsInput;
};

export type FileCreateWithoutSettingsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  smallUrl?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  manufacturer?: Maybe<ManufacturerCreateOneWithoutImagesInput>;
  message?: Maybe<MessageCreateOneWithoutImagesInput>;
  client?: Maybe<ClientCreateOneWithoutImagesInput>;
  supplier?: Maybe<SupplierCreateOneWithoutImagesInput>;
  product?: Maybe<ProductCreateOneWithoutImagesInput>;
  transportAgency?: Maybe<TransportAgencyCreateOneWithoutImagesInput>;
  transporter?: Maybe<TransporterCreateOneWithoutImagesInput>;
  Invoice?: Maybe<InvoiceCreateManyWithoutPdfInput>;
  imageCategory?: Maybe<CategoryCreateManyWithoutImageInput>;
  bannerCategory?: Maybe<CategoryCreateManyWithoutBannerImageInput>;
  Movement?: Maybe<MovementCreateOneWithoutDocumentsInput>;
  Payment?: Maybe<PaymentCreateOneWithoutDocumentsInput>;
};

export type FileUpdateWithoutSettingsDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  smallUrl?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<ManufacturerUpdateOneWithoutImagesInput>;
  message?: Maybe<MessageUpdateOneWithoutImagesInput>;
  client?: Maybe<ClientUpdateOneWithoutImagesInput>;
  supplier?: Maybe<SupplierUpdateOneWithoutImagesInput>;
  product?: Maybe<ProductUpdateOneWithoutImagesInput>;
  transportAgency?: Maybe<TransportAgencyUpdateOneWithoutImagesInput>;
  transporter?: Maybe<TransporterUpdateOneWithoutImagesInput>;
  Invoice?: Maybe<InvoiceUpdateManyWithoutPdfInput>;
  imageCategory?: Maybe<CategoryUpdateManyWithoutImageInput>;
  bannerCategory?: Maybe<CategoryUpdateManyWithoutBannerImageInput>;
  Movement?: Maybe<MovementUpdateOneWithoutDocumentsInput>;
  Payment?: Maybe<PaymentUpdateOneWithoutDocumentsInput>;
};

export type FileUpsertWithoutSettingsInput = {
  update: FileUpdateWithoutSettingsDataInput;
  create: FileCreateWithoutSettingsInput;
};

export type PresetCreateWithoutSettingInput = {
  active: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  currency?: Maybe<Scalars['String']>;
  filter?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  rowsPerPage?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  tableView?: Maybe<TableView>;
  type: EntityType;
  user?: Maybe<Scalars['String']>;
  columnOrder?: Maybe<PresetCreatecolumnOrderInput>;
  hiddenColumns?: Maybe<PresetCreatehiddenColumnsInput>;
};

export type PresetUpdateWithWhereUniqueWithoutSettingInput = {
  where: PresetWhereUniqueInput;
  data: PresetUpdateWithoutSettingDataInput;
};

export type PresetUpdateManyWithWhereNestedInput = {
  where: PresetScalarWhereInput;
  data: PresetUpdateManyDataInput;
};

export type PresetScalarWhereInput = {
  active?: Maybe<BooleanFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  currency?: Maybe<NullableStringFilter>;
  filter?: Maybe<NullableStringFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  rowsPerPage?: Maybe<NullableIntFilter>;
  settingId?: Maybe<NullableStringFilter>;
  sort?: Maybe<NullableStringFilter>;
  tableView?: Maybe<TableView>;
  type?: Maybe<EntityType>;
  user?: Maybe<NullableStringFilter>;
  AND?: Maybe<Array<PresetScalarWhereInput>>;
  OR?: Maybe<Array<PresetScalarWhereInput>>;
  NOT?: Maybe<Array<PresetScalarWhereInput>>;
};

export type PresetUpsertWithWhereUniqueWithoutSettingInput = {
  where: PresetWhereUniqueInput;
  update: PresetUpdateWithoutSettingDataInput;
  create: PresetCreateWithoutSettingInput;
};

export type AddressCreateWithoutAddressInput = {
  id?: Maybe<Scalars['String']>;
  addressLine1?: Maybe<Scalars['String']>;
  addressLine2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  supplierAddress?: Maybe<SupplierCreateOneWithoutAddressInput>;
  supplierBillingAddress?: Maybe<SupplierCreateOneWithoutBillingAddressInput>;
  clientAddress?: Maybe<ClientCreateOneWithoutAddressInput>;
  clientBillingAddress?: Maybe<ClientCreateOneWithoutBillingAddressInput>;
  billingAddress?: Maybe<SettingCreateOneWithoutBillingAddressInput>;
  Manufacturer?: Maybe<ManufacturerCreateManyWithoutAddressInput>;
  TransportAgency?: Maybe<TransportAgencyCreateManyWithoutAddressInput>;
  Warehouse?: Maybe<WarehouseCreateManyWithoutAddressInput>;
};

export type AddressUpdateWithoutAddressDataInput = {
  id?: Maybe<Scalars['String']>;
  addressLine1?: Maybe<Scalars['String']>;
  addressLine2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  supplierAddress?: Maybe<SupplierUpdateOneWithoutAddressInput>;
  supplierBillingAddress?: Maybe<SupplierUpdateOneWithoutBillingAddressInput>;
  clientAddress?: Maybe<ClientUpdateOneWithoutAddressInput>;
  clientBillingAddress?: Maybe<ClientUpdateOneWithoutBillingAddressInput>;
  billingAddress?: Maybe<SettingUpdateOneWithoutBillingAddressInput>;
  Manufacturer?: Maybe<ManufacturerUpdateManyWithoutAddressInput>;
  TransportAgency?: Maybe<TransportAgencyUpdateManyWithoutAddressInput>;
  Warehouse?: Maybe<WarehouseUpdateManyWithoutAddressInput>;
};

export type AddressUpsertWithoutAddressInput = {
  update: AddressUpdateWithoutAddressDataInput;
  create: AddressCreateWithoutAddressInput;
};

export type AddressCreateWithoutBillingAddressInput = {
  id?: Maybe<Scalars['String']>;
  addressLine1?: Maybe<Scalars['String']>;
  addressLine2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  supplierAddress?: Maybe<SupplierCreateOneWithoutAddressInput>;
  supplierBillingAddress?: Maybe<SupplierCreateOneWithoutBillingAddressInput>;
  clientAddress?: Maybe<ClientCreateOneWithoutAddressInput>;
  clientBillingAddress?: Maybe<ClientCreateOneWithoutBillingAddressInput>;
  address?: Maybe<SettingCreateOneWithoutAddressInput>;
  Manufacturer?: Maybe<ManufacturerCreateManyWithoutAddressInput>;
  TransportAgency?: Maybe<TransportAgencyCreateManyWithoutAddressInput>;
  Warehouse?: Maybe<WarehouseCreateManyWithoutAddressInput>;
};

export type AddressUpdateWithoutBillingAddressDataInput = {
  id?: Maybe<Scalars['String']>;
  addressLine1?: Maybe<Scalars['String']>;
  addressLine2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  supplierAddress?: Maybe<SupplierUpdateOneWithoutAddressInput>;
  supplierBillingAddress?: Maybe<SupplierUpdateOneWithoutBillingAddressInput>;
  clientAddress?: Maybe<ClientUpdateOneWithoutAddressInput>;
  clientBillingAddress?: Maybe<ClientUpdateOneWithoutBillingAddressInput>;
  address?: Maybe<SettingUpdateOneWithoutAddressInput>;
  Manufacturer?: Maybe<ManufacturerUpdateManyWithoutAddressInput>;
  TransportAgency?: Maybe<TransportAgencyUpdateManyWithoutAddressInput>;
  Warehouse?: Maybe<WarehouseUpdateManyWithoutAddressInput>;
};

export type AddressUpsertWithoutBillingAddressInput = {
  update: AddressUpdateWithoutBillingAddressDataInput;
  create: AddressCreateWithoutBillingAddressInput;
};

export type AddressCreateWithoutSupplierAddressInput = {
  id?: Maybe<Scalars['String']>;
  addressLine1?: Maybe<Scalars['String']>;
  addressLine2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  supplierBillingAddress?: Maybe<SupplierCreateOneWithoutBillingAddressInput>;
  clientAddress?: Maybe<ClientCreateOneWithoutAddressInput>;
  clientBillingAddress?: Maybe<ClientCreateOneWithoutBillingAddressInput>;
  address?: Maybe<SettingCreateOneWithoutAddressInput>;
  billingAddress?: Maybe<SettingCreateOneWithoutBillingAddressInput>;
  Manufacturer?: Maybe<ManufacturerCreateManyWithoutAddressInput>;
  TransportAgency?: Maybe<TransportAgencyCreateManyWithoutAddressInput>;
  Warehouse?: Maybe<WarehouseCreateManyWithoutAddressInput>;
};

export type AddressCreateWithoutSupplierBillingAddressInput = {
  id?: Maybe<Scalars['String']>;
  addressLine1?: Maybe<Scalars['String']>;
  addressLine2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  supplierAddress?: Maybe<SupplierCreateOneWithoutAddressInput>;
  clientAddress?: Maybe<ClientCreateOneWithoutAddressInput>;
  clientBillingAddress?: Maybe<ClientCreateOneWithoutBillingAddressInput>;
  address?: Maybe<SettingCreateOneWithoutAddressInput>;
  billingAddress?: Maybe<SettingCreateOneWithoutBillingAddressInput>;
  Manufacturer?: Maybe<ManufacturerCreateManyWithoutAddressInput>;
  TransportAgency?: Maybe<TransportAgencyCreateManyWithoutAddressInput>;
  Warehouse?: Maybe<WarehouseCreateManyWithoutAddressInput>;
};

export type ContactPersonCreateWithoutSupplierInput = {
  active?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  scheduleEnd?: Maybe<Scalars['DateTime']>;
  scheduleStart?: Maybe<Scalars['DateTime']>;
  notes?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<ManufacturerCreateOneWithoutContactPersonsInput>;
  client?: Maybe<ClientCreateOneWithoutContactPersonsInput>;
  transportAgency?: Maybe<TransportAgencyCreateOneWithoutContactPersonsInput>;
  warehouse?: Maybe<WarehouseCreateOneWithoutContactPersonsInput>;
};

export type FileCreateWithoutSupplierInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  smallUrl?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  manufacturer?: Maybe<ManufacturerCreateOneWithoutImagesInput>;
  message?: Maybe<MessageCreateOneWithoutImagesInput>;
  client?: Maybe<ClientCreateOneWithoutImagesInput>;
  product?: Maybe<ProductCreateOneWithoutImagesInput>;
  transportAgency?: Maybe<TransportAgencyCreateOneWithoutImagesInput>;
  transporter?: Maybe<TransporterCreateOneWithoutImagesInput>;
  settings?: Maybe<SettingCreateManyWithoutLogoInput>;
  Invoice?: Maybe<InvoiceCreateManyWithoutPdfInput>;
  imageCategory?: Maybe<CategoryCreateManyWithoutImageInput>;
  bannerCategory?: Maybe<CategoryCreateManyWithoutBannerImageInput>;
  Movement?: Maybe<MovementCreateOneWithoutDocumentsInput>;
  Payment?: Maybe<PaymentCreateOneWithoutDocumentsInput>;
};

export type InteractionCreateWithoutSupplierInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  userId: Scalars['String'];
  client?: Maybe<ClientCreateOneWithoutInteractionsInput>;
  movement?: Maybe<MovementCreateOneWithoutInteractionsInput>;
  product?: Maybe<ProductCreateOneWithoutInteractionsInput>;
};

export type InventoryCreateWithoutSupplierInput = {
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  storageNumber?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  isListed?: Maybe<Scalars['Boolean']>;
  listPrice?: Maybe<Scalars['Float']>;
  batch?: Maybe<BatchCreateOneWithoutInventoriesInput>;
  product: ProductCreateOneWithoutInventoriesInput;
  warehouse?: Maybe<WarehouseCreateOneWithoutInventoriesInput>;
  movements?: Maybe<MovementCreateManyWithoutInventoryInput>;
  reservations?: Maybe<ReservationCreateManyWithoutInventoryInput>;
  client?: Maybe<ClientCreateOneWithoutInventoriesInput>;
};

export type MovementCreateWithoutSupplierInput = {
  active?: Maybe<Scalars['Boolean']>;
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  date: Scalars['DateTime'];
  id?: Maybe<Scalars['String']>;
  status?: Maybe<MovementStatus>;
  movementId: Scalars['Int'];
  notes?: Maybe<Scalars['String']>;
  sendMail?: Maybe<Scalars['Boolean']>;
  storageNumber?: Maybe<Scalars['String']>;
  type: MovementType;
  unitPrice?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  invoiceId?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  client?: Maybe<ClientCreateOneWithoutMovementsInput>;
  batch?: Maybe<BatchCreateOneWithoutMovementsInput>;
  inventory?: Maybe<InventoryCreateOneWithoutMovementsInput>;
  product: ProductCreateOneWithoutMovementsInput;
  warehouse?: Maybe<WarehouseCreateOneWithoutMovementsInput>;
  interactions?: Maybe<InteractionCreateManyWithoutMovementInput>;
  comments?: Maybe<MessageCreateManyWithoutMovementInput>;
  reservation?: Maybe<ReservationCreateOneWithoutMovementInput>;
  transports?: Maybe<TransportCreateManyWithoutMovementInput>;
  invoice?: Maybe<InvoiceCreateOneWithoutMovementsInput>;
  documents?: Maybe<FileCreateManyWithoutMovementInput>;
  payments?: Maybe<PaymentCreateManyWithoutMovementInput>;
};

export type PaymentCreateWithoutSupplierInput = {
  id?: Maybe<Scalars['String']>;
  paymentId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  type: PaymentType;
  status: PaymentStatus;
  dueDate?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  concept?: Maybe<Scalars['String']>;
  amount: Scalars['Float'];
  currency: Scalars['String'];
  recipient?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  paymentMethod?: Maybe<Scalars['String']>;
  stripePaymentIntentId?: Maybe<Scalars['String']>;
  stripeClientSecret?: Maybe<Scalars['String']>;
  group?: Maybe<GroupCreateOneWithoutPaymentsInput>;
  taxRate?: Maybe<TaxRateCreateOneWithoutPaymentsInput>;
  movement?: Maybe<MovementCreateOneWithoutPaymentsInput>;
  transportAgency?: Maybe<TransportAgencyCreateOneWithoutPaymentsInput>;
  client?: Maybe<ClientCreateOneWithoutPaymentsInput>;
  documents?: Maybe<FileCreateManyWithoutPaymentInput>;
  bankAccount?: Maybe<BankAccountCreateOneWithoutPaymentsInput>;
};

export type AddressUpdateWithoutSupplierAddressDataInput = {
  id?: Maybe<Scalars['String']>;
  addressLine1?: Maybe<Scalars['String']>;
  addressLine2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  supplierBillingAddress?: Maybe<SupplierUpdateOneWithoutBillingAddressInput>;
  clientAddress?: Maybe<ClientUpdateOneWithoutAddressInput>;
  clientBillingAddress?: Maybe<ClientUpdateOneWithoutBillingAddressInput>;
  address?: Maybe<SettingUpdateOneWithoutAddressInput>;
  billingAddress?: Maybe<SettingUpdateOneWithoutBillingAddressInput>;
  Manufacturer?: Maybe<ManufacturerUpdateManyWithoutAddressInput>;
  TransportAgency?: Maybe<TransportAgencyUpdateManyWithoutAddressInput>;
  Warehouse?: Maybe<WarehouseUpdateManyWithoutAddressInput>;
};

export type AddressUpsertWithoutSupplierAddressInput = {
  update: AddressUpdateWithoutSupplierAddressDataInput;
  create: AddressCreateWithoutSupplierAddressInput;
};

export type AddressUpdateWithoutSupplierBillingAddressDataInput = {
  id?: Maybe<Scalars['String']>;
  addressLine1?: Maybe<Scalars['String']>;
  addressLine2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  supplierAddress?: Maybe<SupplierUpdateOneWithoutAddressInput>;
  clientAddress?: Maybe<ClientUpdateOneWithoutAddressInput>;
  clientBillingAddress?: Maybe<ClientUpdateOneWithoutBillingAddressInput>;
  address?: Maybe<SettingUpdateOneWithoutAddressInput>;
  billingAddress?: Maybe<SettingUpdateOneWithoutBillingAddressInput>;
  Manufacturer?: Maybe<ManufacturerUpdateManyWithoutAddressInput>;
  TransportAgency?: Maybe<TransportAgencyUpdateManyWithoutAddressInput>;
  Warehouse?: Maybe<WarehouseUpdateManyWithoutAddressInput>;
};

export type AddressUpsertWithoutSupplierBillingAddressInput = {
  update: AddressUpdateWithoutSupplierBillingAddressDataInput;
  create: AddressCreateWithoutSupplierBillingAddressInput;
};

export type ContactPersonUpdateWithWhereUniqueWithoutSupplierInput = {
  where: ContactPersonWhereUniqueInput;
  data: ContactPersonUpdateWithoutSupplierDataInput;
};

export type ContactPersonUpsertWithWhereUniqueWithoutSupplierInput = {
  where: ContactPersonWhereUniqueInput;
  update: ContactPersonUpdateWithoutSupplierDataInput;
  create: ContactPersonCreateWithoutSupplierInput;
};

export type FileUpdateWithWhereUniqueWithoutSupplierInput = {
  where: FileWhereUniqueInput;
  data: FileUpdateWithoutSupplierDataInput;
};

export type FileUpsertWithWhereUniqueWithoutSupplierInput = {
  where: FileWhereUniqueInput;
  update: FileUpdateWithoutSupplierDataInput;
  create: FileCreateWithoutSupplierInput;
};

export type InteractionUpdateWithWhereUniqueWithoutSupplierInput = {
  where: InteractionWhereUniqueInput;
  data: InteractionUpdateWithoutSupplierDataInput;
};

export type InteractionUpsertWithWhereUniqueWithoutSupplierInput = {
  where: InteractionWhereUniqueInput;
  update: InteractionUpdateWithoutSupplierDataInput;
  create: InteractionCreateWithoutSupplierInput;
};

export type InventoryUpdateWithWhereUniqueWithoutSupplierInput = {
  where: InventoryWhereUniqueInput;
  data: InventoryUpdateWithoutSupplierDataInput;
};

export type InventoryUpsertWithWhereUniqueWithoutSupplierInput = {
  where: InventoryWhereUniqueInput;
  update: InventoryUpdateWithoutSupplierDataInput;
  create: InventoryCreateWithoutSupplierInput;
};

export type MovementUpdateWithWhereUniqueWithoutSupplierInput = {
  where: MovementWhereUniqueInput;
  data: MovementUpdateWithoutSupplierDataInput;
};

export type MovementUpsertWithWhereUniqueWithoutSupplierInput = {
  where: MovementWhereUniqueInput;
  update: MovementUpdateWithoutSupplierDataInput;
  create: MovementCreateWithoutSupplierInput;
};

export type PaymentUpdateWithWhereUniqueWithoutSupplierInput = {
  where: PaymentWhereUniqueInput;
  data: PaymentUpdateWithoutSupplierDataInput;
};

export type PaymentUpsertWithWhereUniqueWithoutSupplierInput = {
  where: PaymentWhereUniqueInput;
  update: PaymentUpdateWithoutSupplierDataInput;
  create: PaymentCreateWithoutSupplierInput;
};

export type SettingFilter = {
  every?: Maybe<SettingWhereInput>;
  some?: Maybe<SettingWhereInput>;
  none?: Maybe<SettingWhereInput>;
};

export type ClientCreateOneWithoutMovementsInput = {
  create?: Maybe<ClientCreateWithoutMovementsInput>;
  connect?: Maybe<ClientWhereUniqueInput>;
};

export type SupplierCreateOneWithoutMovementsInput = {
  create?: Maybe<SupplierCreateWithoutMovementsInput>;
  connect?: Maybe<SupplierWhereUniqueInput>;
};

export type BatchCreateOneWithoutMovementsInput = {
  create?: Maybe<BatchCreateWithoutMovementsInput>;
  connect?: Maybe<BatchWhereUniqueInput>;
};

export type InventoryCreateOneWithoutMovementsInput = {
  create?: Maybe<InventoryCreateWithoutMovementsInput>;
  connect?: Maybe<InventoryWhereUniqueInput>;
};

export type ProductCreateOneWithoutMovementsInput = {
  create?: Maybe<ProductCreateWithoutMovementsInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
};

export type WarehouseCreateOneWithoutMovementsInput = {
  create?: Maybe<WarehouseCreateWithoutMovementsInput>;
  connect?: Maybe<WarehouseWhereUniqueInput>;
};

export type InteractionCreateManyWithoutMovementInput = {
  create?: Maybe<Array<InteractionCreateWithoutMovementInput>>;
  connect?: Maybe<Array<InteractionWhereUniqueInput>>;
};

export type ReservationCreateOneWithoutMovementInput = {
  create?: Maybe<ReservationCreateWithoutMovementInput>;
  connect?: Maybe<ReservationWhereUniqueInput>;
};

export type TransportCreateManyWithoutMovementInput = {
  create?: Maybe<Array<TransportCreateWithoutMovementInput>>;
  connect?: Maybe<Array<TransportWhereUniqueInput>>;
};

export type InvoiceCreateOneWithoutMovementsInput = {
  create?: Maybe<InvoiceCreateWithoutMovementsInput>;
  connect?: Maybe<InvoiceWhereUniqueInput>;
};

export type FileCreateManyWithoutMovementInput = {
  create?: Maybe<Array<FileCreateWithoutMovementInput>>;
  connect?: Maybe<Array<FileWhereUniqueInput>>;
};

export type PaymentCreateManyWithoutMovementInput = {
  create?: Maybe<Array<PaymentCreateWithoutMovementInput>>;
  connect?: Maybe<Array<PaymentWhereUniqueInput>>;
};

export type ClientUpdateOneWithoutMovementsInput = {
  create?: Maybe<ClientCreateWithoutMovementsInput>;
  connect?: Maybe<ClientWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ClientUpdateWithoutMovementsDataInput>;
  upsert?: Maybe<ClientUpsertWithoutMovementsInput>;
};

export type SupplierUpdateOneWithoutMovementsInput = {
  create?: Maybe<SupplierCreateWithoutMovementsInput>;
  connect?: Maybe<SupplierWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<SupplierUpdateWithoutMovementsDataInput>;
  upsert?: Maybe<SupplierUpsertWithoutMovementsInput>;
};

export type BatchUpdateOneWithoutMovementsInput = {
  create?: Maybe<BatchCreateWithoutMovementsInput>;
  connect?: Maybe<BatchWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<BatchUpdateWithoutMovementsDataInput>;
  upsert?: Maybe<BatchUpsertWithoutMovementsInput>;
};

export type InventoryUpdateOneWithoutMovementsInput = {
  create?: Maybe<InventoryCreateWithoutMovementsInput>;
  connect?: Maybe<InventoryWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<InventoryUpdateWithoutMovementsDataInput>;
  upsert?: Maybe<InventoryUpsertWithoutMovementsInput>;
};

export type ProductUpdateOneRequiredWithoutMovementsInput = {
  create?: Maybe<ProductCreateWithoutMovementsInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
  update?: Maybe<ProductUpdateWithoutMovementsDataInput>;
  upsert?: Maybe<ProductUpsertWithoutMovementsInput>;
};

export type WarehouseUpdateOneWithoutMovementsInput = {
  create?: Maybe<WarehouseCreateWithoutMovementsInput>;
  connect?: Maybe<WarehouseWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<WarehouseUpdateWithoutMovementsDataInput>;
  upsert?: Maybe<WarehouseUpsertWithoutMovementsInput>;
};

export type InteractionUpdateManyWithoutMovementInput = {
  create?: Maybe<Array<InteractionCreateWithoutMovementInput>>;
  connect?: Maybe<Array<InteractionWhereUniqueInput>>;
  set?: Maybe<Array<InteractionWhereUniqueInput>>;
  disconnect?: Maybe<Array<InteractionWhereUniqueInput>>;
  delete?: Maybe<Array<InteractionWhereUniqueInput>>;
  update?: Maybe<Array<InteractionUpdateWithWhereUniqueWithoutMovementInput>>;
  updateMany?: Maybe<Array<InteractionUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<InteractionScalarWhereInput>>;
  upsert?: Maybe<Array<InteractionUpsertWithWhereUniqueWithoutMovementInput>>;
};

export type ReservationUpdateOneWithoutMovementInput = {
  create?: Maybe<ReservationCreateWithoutMovementInput>;
  connect?: Maybe<ReservationWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ReservationUpdateWithoutMovementDataInput>;
  upsert?: Maybe<ReservationUpsertWithoutMovementInput>;
};

export type TransportUpdateManyWithoutMovementInput = {
  create?: Maybe<Array<TransportCreateWithoutMovementInput>>;
  connect?: Maybe<Array<TransportWhereUniqueInput>>;
  set?: Maybe<Array<TransportWhereUniqueInput>>;
  disconnect?: Maybe<Array<TransportWhereUniqueInput>>;
  delete?: Maybe<Array<TransportWhereUniqueInput>>;
  update?: Maybe<Array<TransportUpdateWithWhereUniqueWithoutMovementInput>>;
  updateMany?: Maybe<Array<TransportUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<TransportScalarWhereInput>>;
  upsert?: Maybe<Array<TransportUpsertWithWhereUniqueWithoutMovementInput>>;
};

export type InvoiceUpdateOneWithoutMovementsInput = {
  create?: Maybe<InvoiceCreateWithoutMovementsInput>;
  connect?: Maybe<InvoiceWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<InvoiceUpdateWithoutMovementsDataInput>;
  upsert?: Maybe<InvoiceUpsertWithoutMovementsInput>;
};

export type FileUpdateManyWithoutMovementInput = {
  create?: Maybe<Array<FileCreateWithoutMovementInput>>;
  connect?: Maybe<Array<FileWhereUniqueInput>>;
  set?: Maybe<Array<FileWhereUniqueInput>>;
  disconnect?: Maybe<Array<FileWhereUniqueInput>>;
  delete?: Maybe<Array<FileWhereUniqueInput>>;
  update?: Maybe<Array<FileUpdateWithWhereUniqueWithoutMovementInput>>;
  updateMany?: Maybe<Array<FileUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<FileScalarWhereInput>>;
  upsert?: Maybe<Array<FileUpsertWithWhereUniqueWithoutMovementInput>>;
};

export type PaymentUpdateManyWithoutMovementInput = {
  create?: Maybe<Array<PaymentCreateWithoutMovementInput>>;
  connect?: Maybe<Array<PaymentWhereUniqueInput>>;
  set?: Maybe<Array<PaymentWhereUniqueInput>>;
  disconnect?: Maybe<Array<PaymentWhereUniqueInput>>;
  delete?: Maybe<Array<PaymentWhereUniqueInput>>;
  update?: Maybe<Array<PaymentUpdateWithWhereUniqueWithoutMovementInput>>;
  updateMany?: Maybe<Array<PaymentUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<PaymentScalarWhereInput>>;
  upsert?: Maybe<Array<PaymentUpsertWithWhereUniqueWithoutMovementInput>>;
};

export type ManufacturerCreateOneWithoutImagesInput = {
  create?: Maybe<ManufacturerCreateWithoutImagesInput>;
  connect?: Maybe<ManufacturerWhereUniqueInput>;
};

export type ClientCreateOneWithoutImagesInput = {
  create?: Maybe<ClientCreateWithoutImagesInput>;
  connect?: Maybe<ClientWhereUniqueInput>;
};

export type SupplierCreateOneWithoutImagesInput = {
  create?: Maybe<SupplierCreateWithoutImagesInput>;
  connect?: Maybe<SupplierWhereUniqueInput>;
};

export type ProductCreateOneWithoutImagesInput = {
  create?: Maybe<ProductCreateWithoutImagesInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
};

export type TransportAgencyCreateOneWithoutImagesInput = {
  create?: Maybe<TransportAgencyCreateWithoutImagesInput>;
  connect?: Maybe<TransportAgencyWhereUniqueInput>;
};

export type TransporterCreateOneWithoutImagesInput = {
  create?: Maybe<TransporterCreateWithoutImagesInput>;
  connect?: Maybe<TransporterWhereUniqueInput>;
};

export type SettingCreateManyWithoutLogoInput = {
  create?: Maybe<Array<SettingCreateWithoutLogoInput>>;
  connect?: Maybe<Array<SettingWhereUniqueInput>>;
};

export type InvoiceCreateManyWithoutPdfInput = {
  create?: Maybe<Array<InvoiceCreateWithoutPdfInput>>;
  connect?: Maybe<Array<InvoiceWhereUniqueInput>>;
};

export type CategoryCreateManyWithoutImageInput = {
  create?: Maybe<Array<CategoryCreateWithoutImageInput>>;
  connect?: Maybe<Array<CategoryWhereUniqueInput>>;
};

export type CategoryCreateManyWithoutBannerImageInput = {
  create?: Maybe<Array<CategoryCreateWithoutBannerImageInput>>;
  connect?: Maybe<Array<CategoryWhereUniqueInput>>;
};

export type MovementCreateOneWithoutDocumentsInput = {
  create?: Maybe<MovementCreateWithoutDocumentsInput>;
  connect?: Maybe<MovementWhereUniqueInput>;
};

export type PaymentCreateOneWithoutDocumentsInput = {
  create?: Maybe<PaymentCreateWithoutDocumentsInput>;
  connect?: Maybe<PaymentWhereUniqueInput>;
};

export type FileUpdateWithoutMessageDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  smallUrl?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<ManufacturerUpdateOneWithoutImagesInput>;
  client?: Maybe<ClientUpdateOneWithoutImagesInput>;
  supplier?: Maybe<SupplierUpdateOneWithoutImagesInput>;
  product?: Maybe<ProductUpdateOneWithoutImagesInput>;
  transportAgency?: Maybe<TransportAgencyUpdateOneWithoutImagesInput>;
  transporter?: Maybe<TransporterUpdateOneWithoutImagesInput>;
  settings?: Maybe<SettingUpdateManyWithoutLogoInput>;
  Invoice?: Maybe<InvoiceUpdateManyWithoutPdfInput>;
  imageCategory?: Maybe<CategoryUpdateManyWithoutImageInput>;
  bannerCategory?: Maybe<CategoryUpdateManyWithoutBannerImageInput>;
  Movement?: Maybe<MovementUpdateOneWithoutDocumentsInput>;
  Payment?: Maybe<PaymentUpdateOneWithoutDocumentsInput>;
};

export type FileUpdateManyDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  smallUrl?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type MessageCreatementionsInput = {
  set?: Maybe<Array<Scalars['String']>>;
};

export type MovementCreateOneWithoutCommentsInput = {
  create?: Maybe<MovementCreateWithoutCommentsInput>;
  connect?: Maybe<MovementWhereUniqueInput>;
};

export type FileCreateManyWithoutMessageInput = {
  create?: Maybe<Array<FileCreateWithoutMessageInput>>;
  connect?: Maybe<Array<FileWhereUniqueInput>>;
};

export type MessageUpdateWithoutChannelDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  recipient?: Maybe<Scalars['String']>;
  sender?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  mentions?: Maybe<MessageUpdatementionsInput>;
  movement?: Maybe<MovementUpdateOneWithoutCommentsInput>;
  images?: Maybe<FileUpdateManyWithoutMessageInput>;
};

export type MessageUpdateManyDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  recipient?: Maybe<Scalars['String']>;
  sender?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  mentions?: Maybe<MessageUpdatementionsInput>;
};

export type ManufacturerCreateOneWithoutContactPersonsInput = {
  create?: Maybe<ManufacturerCreateWithoutContactPersonsInput>;
  connect?: Maybe<ManufacturerWhereUniqueInput>;
};

export type SupplierCreateOneWithoutContactPersonsInput = {
  create?: Maybe<SupplierCreateWithoutContactPersonsInput>;
  connect?: Maybe<SupplierWhereUniqueInput>;
};

export type TransportAgencyCreateOneWithoutContactPersonsInput = {
  create?: Maybe<TransportAgencyCreateWithoutContactPersonsInput>;
  connect?: Maybe<TransportAgencyWhereUniqueInput>;
};

export type WarehouseCreateOneWithoutContactPersonsInput = {
  create?: Maybe<WarehouseCreateWithoutContactPersonsInput>;
  connect?: Maybe<WarehouseWhereUniqueInput>;
};

export type MessageCreateOneWithoutImagesInput = {
  create?: Maybe<MessageCreateWithoutImagesInput>;
  connect?: Maybe<MessageWhereUniqueInput>;
};

export type SupplierCreateOneWithoutInteractionsInput = {
  create?: Maybe<SupplierCreateWithoutInteractionsInput>;
  connect?: Maybe<SupplierWhereUniqueInput>;
};

export type MovementCreateOneWithoutInteractionsInput = {
  create?: Maybe<MovementCreateWithoutInteractionsInput>;
  connect?: Maybe<MovementWhereUniqueInput>;
};

export type ProductCreateOneWithoutInteractionsInput = {
  create?: Maybe<ProductCreateWithoutInteractionsInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
};

export type SupplierCreateOneWithoutInventoriesInput = {
  create?: Maybe<SupplierCreateWithoutInventoriesInput>;
  connect?: Maybe<SupplierWhereUniqueInput>;
};

export type BatchCreateOneWithoutInventoriesInput = {
  create?: Maybe<BatchCreateWithoutInventoriesInput>;
  connect?: Maybe<BatchWhereUniqueInput>;
};

export type ProductCreateOneWithoutInventoriesInput = {
  create?: Maybe<ProductCreateWithoutInventoriesInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
};

export type WarehouseCreateOneWithoutInventoriesInput = {
  create?: Maybe<WarehouseCreateWithoutInventoriesInput>;
  connect?: Maybe<WarehouseWhereUniqueInput>;
};

export type MovementCreateManyWithoutInventoryInput = {
  create?: Maybe<Array<MovementCreateWithoutInventoryInput>>;
  connect?: Maybe<Array<MovementWhereUniqueInput>>;
};

export type ReservationCreateManyWithoutInventoryInput = {
  create?: Maybe<Array<ReservationCreateWithoutInventoryInput>>;
  connect?: Maybe<Array<ReservationWhereUniqueInput>>;
};

export type MessageCreateManyWithoutMovementInput = {
  create?: Maybe<Array<MessageCreateWithoutMovementInput>>;
  connect?: Maybe<Array<MessageWhereUniqueInput>>;
};

export type InventoryCreateOneWithoutReservationsInput = {
  create?: Maybe<InventoryCreateWithoutReservationsInput>;
  connect?: Maybe<InventoryWhereUniqueInput>;
};

export type MovementCreateOneWithoutReservationInput = {
  create?: Maybe<MovementCreateWithoutReservationInput>;
  connect?: Maybe<MovementWhereUniqueInput>;
};

export type SupplierCreateOneWithoutAddressInput = {
  create?: Maybe<SupplierCreateWithoutAddressInput>;
  connect?: Maybe<SupplierWhereUniqueInput>;
};

export type SupplierCreateOneWithoutBillingAddressInput = {
  create?: Maybe<SupplierCreateWithoutBillingAddressInput>;
  connect?: Maybe<SupplierWhereUniqueInput>;
};

export type ClientCreateOneWithoutBillingAddressInput = {
  create?: Maybe<ClientCreateWithoutBillingAddressInput>;
  connect?: Maybe<ClientWhereUniqueInput>;
};

export type SettingCreateOneWithoutAddressInput = {
  create?: Maybe<SettingCreateWithoutAddressInput>;
  connect?: Maybe<SettingWhereUniqueInput>;
};

export type SettingCreateOneWithoutBillingAddressInput = {
  create?: Maybe<SettingCreateWithoutBillingAddressInput>;
  connect?: Maybe<SettingWhereUniqueInput>;
};

export type ManufacturerCreateManyWithoutAddressInput = {
  create?: Maybe<Array<ManufacturerCreateWithoutAddressInput>>;
  connect?: Maybe<Array<ManufacturerWhereUniqueInput>>;
};

export type TransportAgencyCreateManyWithoutAddressInput = {
  create?: Maybe<Array<TransportAgencyCreateWithoutAddressInput>>;
  connect?: Maybe<Array<TransportAgencyWhereUniqueInput>>;
};

export type WarehouseCreateManyWithoutAddressInput = {
  create?: Maybe<Array<WarehouseCreateWithoutAddressInput>>;
  connect?: Maybe<Array<WarehouseWhereUniqueInput>>;
};

export type ClientCreateOneWithoutAddressInput = {
  create?: Maybe<ClientCreateWithoutAddressInput>;
  connect?: Maybe<ClientWhereUniqueInput>;
};

export type FileCreateOneWithoutInvoiceInput = {
  create?: Maybe<FileCreateWithoutInvoiceInput>;
  connect?: Maybe<FileWhereUniqueInput>;
};

export type MovementCreateManyWithoutInvoiceInput = {
  create?: Maybe<Array<MovementCreateWithoutInvoiceInput>>;
  connect?: Maybe<Array<MovementWhereUniqueInput>>;
};

export type GroupCreateOneWithoutPaymentsInput = {
  create?: Maybe<GroupCreateWithoutPaymentsInput>;
  connect?: Maybe<GroupWhereUniqueInput>;
};

export type TaxRateCreateOneWithoutPaymentsInput = {
  create?: Maybe<TaxRateCreateWithoutPaymentsInput>;
  connect?: Maybe<TaxRateWhereUniqueInput>;
};

export type MovementCreateOneWithoutPaymentsInput = {
  create?: Maybe<MovementCreateWithoutPaymentsInput>;
  connect?: Maybe<MovementWhereUniqueInput>;
};

export type TransportAgencyCreateOneWithoutPaymentsInput = {
  create?: Maybe<TransportAgencyCreateWithoutPaymentsInput>;
  connect?: Maybe<TransportAgencyWhereUniqueInput>;
};

export type SupplierCreateOneWithoutPaymentsInput = {
  create?: Maybe<SupplierCreateWithoutPaymentsInput>;
  connect?: Maybe<SupplierWhereUniqueInput>;
};

export type FileCreateManyWithoutPaymentInput = {
  create?: Maybe<Array<FileCreateWithoutPaymentInput>>;
  connect?: Maybe<Array<FileWhereUniqueInput>>;
};

export type BankAccountCreateOneWithoutPaymentsInput = {
  create?: Maybe<BankAccountCreateWithoutPaymentsInput>;
  connect?: Maybe<BankAccountWhereUniqueInput>;
};

export type ContactPersonUpdateWithoutClientDataInput = {
  active?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  scheduleEnd?: Maybe<Scalars['DateTime']>;
  scheduleStart?: Maybe<Scalars['DateTime']>;
  notes?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<ManufacturerUpdateOneWithoutContactPersonsInput>;
  supplier?: Maybe<SupplierUpdateOneWithoutContactPersonsInput>;
  transportAgency?: Maybe<TransportAgencyUpdateOneWithoutContactPersonsInput>;
  warehouse?: Maybe<WarehouseUpdateOneWithoutContactPersonsInput>;
};

export type ContactPersonUpdateManyDataInput = {
  active?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  scheduleEnd?: Maybe<Scalars['DateTime']>;
  scheduleStart?: Maybe<Scalars['DateTime']>;
  notes?: Maybe<Scalars['String']>;
};

export type FileUpdateWithoutClientDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  smallUrl?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<ManufacturerUpdateOneWithoutImagesInput>;
  message?: Maybe<MessageUpdateOneWithoutImagesInput>;
  supplier?: Maybe<SupplierUpdateOneWithoutImagesInput>;
  product?: Maybe<ProductUpdateOneWithoutImagesInput>;
  transportAgency?: Maybe<TransportAgencyUpdateOneWithoutImagesInput>;
  transporter?: Maybe<TransporterUpdateOneWithoutImagesInput>;
  settings?: Maybe<SettingUpdateManyWithoutLogoInput>;
  Invoice?: Maybe<InvoiceUpdateManyWithoutPdfInput>;
  imageCategory?: Maybe<CategoryUpdateManyWithoutImageInput>;
  bannerCategory?: Maybe<CategoryUpdateManyWithoutBannerImageInput>;
  Movement?: Maybe<MovementUpdateOneWithoutDocumentsInput>;
  Payment?: Maybe<PaymentUpdateOneWithoutDocumentsInput>;
};

export type InteractionUpdateWithoutClientDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  supplier?: Maybe<SupplierUpdateOneWithoutInteractionsInput>;
  movement?: Maybe<MovementUpdateOneWithoutInteractionsInput>;
  product?: Maybe<ProductUpdateOneWithoutInteractionsInput>;
};

export type InteractionUpdateManyDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type InventoryUpdateWithoutClientDataInput = {
  amount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  storageNumber?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  isListed?: Maybe<Scalars['Boolean']>;
  listPrice?: Maybe<Scalars['Float']>;
  supplier?: Maybe<SupplierUpdateOneWithoutInventoriesInput>;
  batch?: Maybe<BatchUpdateOneWithoutInventoriesInput>;
  product?: Maybe<ProductUpdateOneRequiredWithoutInventoriesInput>;
  warehouse?: Maybe<WarehouseUpdateOneWithoutInventoriesInput>;
  movements?: Maybe<MovementUpdateManyWithoutInventoryInput>;
  reservations?: Maybe<ReservationUpdateManyWithoutInventoryInput>;
};

export type InventoryUpdateManyDataInput = {
  amount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  storageNumber?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  isListed?: Maybe<Scalars['Boolean']>;
  listPrice?: Maybe<Scalars['Float']>;
};

export type MovementUpdateWithoutClientDataInput = {
  active?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  status?: Maybe<MovementStatus>;
  movementId?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
  sendMail?: Maybe<Scalars['Boolean']>;
  storageNumber?: Maybe<Scalars['String']>;
  type?: Maybe<MovementType>;
  unitPrice?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  invoiceId?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  supplier?: Maybe<SupplierUpdateOneWithoutMovementsInput>;
  batch?: Maybe<BatchUpdateOneWithoutMovementsInput>;
  inventory?: Maybe<InventoryUpdateOneWithoutMovementsInput>;
  product?: Maybe<ProductUpdateOneRequiredWithoutMovementsInput>;
  warehouse?: Maybe<WarehouseUpdateOneWithoutMovementsInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutMovementInput>;
  comments?: Maybe<MessageUpdateManyWithoutMovementInput>;
  reservation?: Maybe<ReservationUpdateOneWithoutMovementInput>;
  transports?: Maybe<TransportUpdateManyWithoutMovementInput>;
  invoice?: Maybe<InvoiceUpdateOneWithoutMovementsInput>;
  documents?: Maybe<FileUpdateManyWithoutMovementInput>;
  payments?: Maybe<PaymentUpdateManyWithoutMovementInput>;
};

export type MovementUpdateManyDataInput = {
  active?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  status?: Maybe<MovementStatus>;
  movementId?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
  sendMail?: Maybe<Scalars['Boolean']>;
  storageNumber?: Maybe<Scalars['String']>;
  type?: Maybe<MovementType>;
  unitPrice?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  invoiceId?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
};

export type ReservationUpdateWithoutClientDataInput = {
  amount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  notes?: Maybe<Scalars['String']>;
  inventory?: Maybe<InventoryUpdateOneWithoutReservationsInput>;
  movement?: Maybe<MovementUpdateOneRequiredWithoutReservationInput>;
};

export type ReservationUpdateManyDataInput = {
  amount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  notes?: Maybe<Scalars['String']>;
};

export type SupplierUpdateOneWithoutAddressInput = {
  create?: Maybe<SupplierCreateWithoutAddressInput>;
  connect?: Maybe<SupplierWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<SupplierUpdateWithoutAddressDataInput>;
  upsert?: Maybe<SupplierUpsertWithoutAddressInput>;
};

export type SupplierUpdateOneWithoutBillingAddressInput = {
  create?: Maybe<SupplierCreateWithoutBillingAddressInput>;
  connect?: Maybe<SupplierWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<SupplierUpdateWithoutBillingAddressDataInput>;
  upsert?: Maybe<SupplierUpsertWithoutBillingAddressInput>;
};

export type ClientUpdateOneWithoutBillingAddressInput = {
  create?: Maybe<ClientCreateWithoutBillingAddressInput>;
  connect?: Maybe<ClientWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ClientUpdateWithoutBillingAddressDataInput>;
  upsert?: Maybe<ClientUpsertWithoutBillingAddressInput>;
};

export type SettingUpdateOneWithoutAddressInput = {
  create?: Maybe<SettingCreateWithoutAddressInput>;
  connect?: Maybe<SettingWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<SettingUpdateWithoutAddressDataInput>;
  upsert?: Maybe<SettingUpsertWithoutAddressInput>;
};

export type SettingUpdateOneWithoutBillingAddressInput = {
  create?: Maybe<SettingCreateWithoutBillingAddressInput>;
  connect?: Maybe<SettingWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<SettingUpdateWithoutBillingAddressDataInput>;
  upsert?: Maybe<SettingUpsertWithoutBillingAddressInput>;
};

export type ManufacturerUpdateManyWithoutAddressInput = {
  create?: Maybe<Array<ManufacturerCreateWithoutAddressInput>>;
  connect?: Maybe<Array<ManufacturerWhereUniqueInput>>;
  set?: Maybe<Array<ManufacturerWhereUniqueInput>>;
  disconnect?: Maybe<Array<ManufacturerWhereUniqueInput>>;
  delete?: Maybe<Array<ManufacturerWhereUniqueInput>>;
  update?: Maybe<Array<ManufacturerUpdateWithWhereUniqueWithoutAddressInput>>;
  updateMany?: Maybe<Array<ManufacturerUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<ManufacturerScalarWhereInput>>;
  upsert?: Maybe<Array<ManufacturerUpsertWithWhereUniqueWithoutAddressInput>>;
};

export type TransportAgencyUpdateManyWithoutAddressInput = {
  create?: Maybe<Array<TransportAgencyCreateWithoutAddressInput>>;
  connect?: Maybe<Array<TransportAgencyWhereUniqueInput>>;
  set?: Maybe<Array<TransportAgencyWhereUniqueInput>>;
  disconnect?: Maybe<Array<TransportAgencyWhereUniqueInput>>;
  delete?: Maybe<Array<TransportAgencyWhereUniqueInput>>;
  update?: Maybe<Array<TransportAgencyUpdateWithWhereUniqueWithoutAddressInput>>;
  updateMany?: Maybe<Array<TransportAgencyUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<TransportAgencyScalarWhereInput>>;
  upsert?: Maybe<Array<TransportAgencyUpsertWithWhereUniqueWithoutAddressInput>>;
};

export type WarehouseUpdateManyWithoutAddressInput = {
  create?: Maybe<Array<WarehouseCreateWithoutAddressInput>>;
  connect?: Maybe<Array<WarehouseWhereUniqueInput>>;
  set?: Maybe<Array<WarehouseWhereUniqueInput>>;
  disconnect?: Maybe<Array<WarehouseWhereUniqueInput>>;
  delete?: Maybe<Array<WarehouseWhereUniqueInput>>;
  update?: Maybe<Array<WarehouseUpdateWithWhereUniqueWithoutAddressInput>>;
  updateMany?: Maybe<Array<WarehouseUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<WarehouseScalarWhereInput>>;
  upsert?: Maybe<Array<WarehouseUpsertWithWhereUniqueWithoutAddressInput>>;
};

export type ClientUpdateOneWithoutAddressInput = {
  create?: Maybe<ClientCreateWithoutAddressInput>;
  connect?: Maybe<ClientWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ClientUpdateWithoutAddressDataInput>;
  upsert?: Maybe<ClientUpsertWithoutAddressInput>;
};

export type InvoiceUpdateWithoutClientDataInput = {
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  withTaxes?: Maybe<Scalars['Boolean']>;
  notes?: Maybe<Scalars['String']>;
  pdf?: Maybe<FileUpdateOneRequiredWithoutInvoiceInput>;
  movements?: Maybe<MovementUpdateManyWithoutInvoiceInput>;
};

export type InvoiceUpdateManyDataInput = {
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  withTaxes?: Maybe<Scalars['Boolean']>;
  notes?: Maybe<Scalars['String']>;
};

export type PaymentUpdateWithoutClientDataInput = {
  id?: Maybe<Scalars['String']>;
  paymentId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  type?: Maybe<PaymentType>;
  status?: Maybe<PaymentStatus>;
  dueDate?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  concept?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  currency?: Maybe<Scalars['String']>;
  recipient?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  paymentMethod?: Maybe<Scalars['String']>;
  stripePaymentIntentId?: Maybe<Scalars['String']>;
  stripeClientSecret?: Maybe<Scalars['String']>;
  group?: Maybe<GroupUpdateOneWithoutPaymentsInput>;
  taxRate?: Maybe<TaxRateUpdateOneWithoutPaymentsInput>;
  movement?: Maybe<MovementUpdateOneWithoutPaymentsInput>;
  transportAgency?: Maybe<TransportAgencyUpdateOneWithoutPaymentsInput>;
  supplier?: Maybe<SupplierUpdateOneWithoutPaymentsInput>;
  documents?: Maybe<FileUpdateManyWithoutPaymentInput>;
  bankAccount?: Maybe<BankAccountUpdateOneWithoutPaymentsInput>;
};

export type PaymentUpdateManyDataInput = {
  id?: Maybe<Scalars['String']>;
  paymentId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  type?: Maybe<PaymentType>;
  status?: Maybe<PaymentStatus>;
  dueDate?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  concept?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  currency?: Maybe<Scalars['String']>;
  recipient?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  paymentMethod?: Maybe<Scalars['String']>;
  stripePaymentIntentId?: Maybe<Scalars['String']>;
  stripeClientSecret?: Maybe<Scalars['String']>;
};

export type ClientCreateOneWithoutContactPersonsInput = {
  create?: Maybe<ClientCreateWithoutContactPersonsInput>;
  connect?: Maybe<ClientWhereUniqueInput>;
};

export type MovementCreateOneWithoutTransportsInput = {
  create?: Maybe<MovementCreateWithoutTransportsInput>;
  connect?: Maybe<MovementWhereUniqueInput>;
};

export type TransporterCreateOneWithoutTransportsInput = {
  create?: Maybe<TransporterCreateWithoutTransportsInput>;
  connect?: Maybe<TransporterWhereUniqueInput>;
};

export type TransporterCreateidentificationsInput = {
  set?: Maybe<Array<Scalars['String']>>;
};

export type FileCreateManyWithoutTransporterInput = {
  create?: Maybe<Array<FileCreateWithoutTransporterInput>>;
  connect?: Maybe<Array<FileWhereUniqueInput>>;
};

export type TransportCreateManyWithoutTransporterInput = {
  create?: Maybe<Array<TransportCreateWithoutTransporterInput>>;
  connect?: Maybe<Array<TransportWhereUniqueInput>>;
};

export type ClientCreateOneWithoutPaymentsInput = {
  create?: Maybe<ClientCreateWithoutPaymentsInput>;
  connect?: Maybe<ClientWhereUniqueInput>;
};

export type ContactPersonUpdateWithoutTransportAgencyDataInput = {
  active?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  scheduleEnd?: Maybe<Scalars['DateTime']>;
  scheduleStart?: Maybe<Scalars['DateTime']>;
  notes?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<ManufacturerUpdateOneWithoutContactPersonsInput>;
  supplier?: Maybe<SupplierUpdateOneWithoutContactPersonsInput>;
  client?: Maybe<ClientUpdateOneWithoutContactPersonsInput>;
  warehouse?: Maybe<WarehouseUpdateOneWithoutContactPersonsInput>;
};

export type FileUpdateWithoutTransportAgencyDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  smallUrl?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<ManufacturerUpdateOneWithoutImagesInput>;
  message?: Maybe<MessageUpdateOneWithoutImagesInput>;
  client?: Maybe<ClientUpdateOneWithoutImagesInput>;
  supplier?: Maybe<SupplierUpdateOneWithoutImagesInput>;
  product?: Maybe<ProductUpdateOneWithoutImagesInput>;
  transporter?: Maybe<TransporterUpdateOneWithoutImagesInput>;
  settings?: Maybe<SettingUpdateManyWithoutLogoInput>;
  Invoice?: Maybe<InvoiceUpdateManyWithoutPdfInput>;
  imageCategory?: Maybe<CategoryUpdateManyWithoutImageInput>;
  bannerCategory?: Maybe<CategoryUpdateManyWithoutBannerImageInput>;
  Movement?: Maybe<MovementUpdateOneWithoutDocumentsInput>;
  Payment?: Maybe<PaymentUpdateOneWithoutDocumentsInput>;
};

export type TransportUpdateWithoutTransportAgencyDataInput = {
  arrivalDate?: Maybe<Scalars['DateTime']>;
  arrivalPoint?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  notes?: Maybe<Scalars['String']>;
  movement?: Maybe<MovementUpdateOneWithoutTransportsInput>;
  transporter?: Maybe<TransporterUpdateOneWithoutTransportsInput>;
};

export type TransportUpdateManyDataInput = {
  arrivalDate?: Maybe<Scalars['DateTime']>;
  arrivalPoint?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  notes?: Maybe<Scalars['String']>;
};

export type TransporterUpdateWithoutTransportAgencyDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<TransportType>;
  notes?: Maybe<Scalars['String']>;
  identifications?: Maybe<TransporterUpdateidentificationsInput>;
  images?: Maybe<FileUpdateManyWithoutTransporterInput>;
  transports?: Maybe<TransportUpdateManyWithoutTransporterInput>;
};

export type TransporterUpdateManyDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<TransportType>;
  notes?: Maybe<Scalars['String']>;
  identifications?: Maybe<TransporterUpdateidentificationsInput>;
};

export type PaymentUpdateWithoutTransportAgencyDataInput = {
  id?: Maybe<Scalars['String']>;
  paymentId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  type?: Maybe<PaymentType>;
  status?: Maybe<PaymentStatus>;
  dueDate?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  concept?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  currency?: Maybe<Scalars['String']>;
  recipient?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  paymentMethod?: Maybe<Scalars['String']>;
  stripePaymentIntentId?: Maybe<Scalars['String']>;
  stripeClientSecret?: Maybe<Scalars['String']>;
  group?: Maybe<GroupUpdateOneWithoutPaymentsInput>;
  taxRate?: Maybe<TaxRateUpdateOneWithoutPaymentsInput>;
  movement?: Maybe<MovementUpdateOneWithoutPaymentsInput>;
  client?: Maybe<ClientUpdateOneWithoutPaymentsInput>;
  supplier?: Maybe<SupplierUpdateOneWithoutPaymentsInput>;
  documents?: Maybe<FileUpdateManyWithoutPaymentInput>;
  bankAccount?: Maybe<BankAccountUpdateOneWithoutPaymentsInput>;
};

export type ClientCreateOneWithoutInventoriesInput = {
  create?: Maybe<ClientCreateWithoutInventoriesInput>;
  connect?: Maybe<ClientWhereUniqueInput>;
};

export type ContactPersonUpdateWithoutWarehouseDataInput = {
  active?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  scheduleEnd?: Maybe<Scalars['DateTime']>;
  scheduleStart?: Maybe<Scalars['DateTime']>;
  notes?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<ManufacturerUpdateOneWithoutContactPersonsInput>;
  supplier?: Maybe<SupplierUpdateOneWithoutContactPersonsInput>;
  client?: Maybe<ClientUpdateOneWithoutContactPersonsInput>;
  transportAgency?: Maybe<TransportAgencyUpdateOneWithoutContactPersonsInput>;
};

export type InventoryUpdateWithoutWarehouseDataInput = {
  amount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  storageNumber?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  isListed?: Maybe<Scalars['Boolean']>;
  listPrice?: Maybe<Scalars['Float']>;
  supplier?: Maybe<SupplierUpdateOneWithoutInventoriesInput>;
  batch?: Maybe<BatchUpdateOneWithoutInventoriesInput>;
  product?: Maybe<ProductUpdateOneRequiredWithoutInventoriesInput>;
  movements?: Maybe<MovementUpdateManyWithoutInventoryInput>;
  reservations?: Maybe<ReservationUpdateManyWithoutInventoryInput>;
  client?: Maybe<ClientUpdateOneWithoutInventoriesInput>;
};

export type MovementUpdateWithoutWarehouseDataInput = {
  active?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  status?: Maybe<MovementStatus>;
  movementId?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
  sendMail?: Maybe<Scalars['Boolean']>;
  storageNumber?: Maybe<Scalars['String']>;
  type?: Maybe<MovementType>;
  unitPrice?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  invoiceId?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  client?: Maybe<ClientUpdateOneWithoutMovementsInput>;
  supplier?: Maybe<SupplierUpdateOneWithoutMovementsInput>;
  batch?: Maybe<BatchUpdateOneWithoutMovementsInput>;
  inventory?: Maybe<InventoryUpdateOneWithoutMovementsInput>;
  product?: Maybe<ProductUpdateOneRequiredWithoutMovementsInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutMovementInput>;
  comments?: Maybe<MessageUpdateManyWithoutMovementInput>;
  reservation?: Maybe<ReservationUpdateOneWithoutMovementInput>;
  transports?: Maybe<TransportUpdateManyWithoutMovementInput>;
  invoice?: Maybe<InvoiceUpdateOneWithoutMovementsInput>;
  documents?: Maybe<FileUpdateManyWithoutMovementInput>;
  payments?: Maybe<PaymentUpdateManyWithoutMovementInput>;
};

export type NotificationUpdateWithoutWarehouseDataInput = {
  active?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  type?: Maybe<NotificationType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<Scalars['String']>;
  userLanguage?: Maybe<Language>;
  userEmail?: Maybe<Scalars['String']>;
  product?: Maybe<ProductUpdateOneRequiredWithoutNotificationsInput>;
};

export type NotificationUpdateManyDataInput = {
  active?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  type?: Maybe<NotificationType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<Scalars['String']>;
  userLanguage?: Maybe<Language>;
  userEmail?: Maybe<Scalars['String']>;
};

export type PaymentUpdateWithoutTaxRateDataInput = {
  id?: Maybe<Scalars['String']>;
  paymentId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  type?: Maybe<PaymentType>;
  status?: Maybe<PaymentStatus>;
  dueDate?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  concept?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  currency?: Maybe<Scalars['String']>;
  recipient?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  paymentMethod?: Maybe<Scalars['String']>;
  stripePaymentIntentId?: Maybe<Scalars['String']>;
  stripeClientSecret?: Maybe<Scalars['String']>;
  group?: Maybe<GroupUpdateOneWithoutPaymentsInput>;
  movement?: Maybe<MovementUpdateOneWithoutPaymentsInput>;
  transportAgency?: Maybe<TransportAgencyUpdateOneWithoutPaymentsInput>;
  client?: Maybe<ClientUpdateOneWithoutPaymentsInput>;
  supplier?: Maybe<SupplierUpdateOneWithoutPaymentsInput>;
  documents?: Maybe<FileUpdateManyWithoutPaymentInput>;
  bankAccount?: Maybe<BankAccountUpdateOneWithoutPaymentsInput>;
};

export type PaymentUpdateWithoutGroupDataInput = {
  id?: Maybe<Scalars['String']>;
  paymentId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  type?: Maybe<PaymentType>;
  status?: Maybe<PaymentStatus>;
  dueDate?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  concept?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  currency?: Maybe<Scalars['String']>;
  recipient?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  paymentMethod?: Maybe<Scalars['String']>;
  stripePaymentIntentId?: Maybe<Scalars['String']>;
  stripeClientSecret?: Maybe<Scalars['String']>;
  taxRate?: Maybe<TaxRateUpdateOneWithoutPaymentsInput>;
  movement?: Maybe<MovementUpdateOneWithoutPaymentsInput>;
  transportAgency?: Maybe<TransportAgencyUpdateOneWithoutPaymentsInput>;
  client?: Maybe<ClientUpdateOneWithoutPaymentsInput>;
  supplier?: Maybe<SupplierUpdateOneWithoutPaymentsInput>;
  documents?: Maybe<FileUpdateManyWithoutPaymentInput>;
  bankAccount?: Maybe<BankAccountUpdateOneWithoutPaymentsInput>;
};

export type BatchCreateManyWithoutManufacturerInput = {
  create?: Maybe<Array<BatchCreateWithoutManufacturerInput>>;
  connect?: Maybe<Array<BatchWhereUniqueInput>>;
};

export type ContactPersonCreateManyWithoutManufacturerInput = {
  create?: Maybe<Array<ContactPersonCreateWithoutManufacturerInput>>;
  connect?: Maybe<Array<ContactPersonWhereUniqueInput>>;
};

export type FileCreateManyWithoutManufacturerInput = {
  create?: Maybe<Array<FileCreateWithoutManufacturerInput>>;
  connect?: Maybe<Array<FileWhereUniqueInput>>;
};

export type AddressCreateOneWithoutManufacturerInput = {
  create?: Maybe<AddressCreateWithoutManufacturerInput>;
  connect?: Maybe<AddressWhereUniqueInput>;
};

export type ManufacturerCreateOneWithoutBatchesInput = {
  create?: Maybe<ManufacturerCreateWithoutBatchesInput>;
  connect?: Maybe<ManufacturerWhereUniqueInput>;
};

export type InventoryCreateManyWithoutBatchInput = {
  create?: Maybe<Array<InventoryCreateWithoutBatchInput>>;
  connect?: Maybe<Array<InventoryWhereUniqueInput>>;
};

export type MovementCreateManyWithoutBatchInput = {
  create?: Maybe<Array<MovementCreateWithoutBatchInput>>;
  connect?: Maybe<Array<MovementWhereUniqueInput>>;
};

export type ClientCreateOneWithoutInteractionsInput = {
  create?: Maybe<ClientCreateWithoutInteractionsInput>;
  connect?: Maybe<ClientWhereUniqueInput>;
};

export type FileCreateOneWithoutImageCategoryInput = {
  create?: Maybe<FileCreateWithoutImageCategoryInput>;
  connect?: Maybe<FileWhereUniqueInput>;
};

export type FileCreateOneWithoutBannerCategoryInput = {
  create?: Maybe<FileCreateWithoutBannerCategoryInput>;
  connect?: Maybe<FileWhereUniqueInput>;
};

export type CategoryCreateManyWithoutCategoryInput = {
  create?: Maybe<Array<CategoryCreateWithoutCategoryInput>>;
  connect?: Maybe<Array<CategoryWhereUniqueInput>>;
};

export type CategoryCreateOneWithoutSubCategoriesInput = {
  create?: Maybe<CategoryCreateWithoutSubCategoriesInput>;
  connect?: Maybe<CategoryWhereUniqueInput>;
};

export type BatchUpdateManyWithoutManufacturerInput = {
  create?: Maybe<Array<BatchCreateWithoutManufacturerInput>>;
  connect?: Maybe<Array<BatchWhereUniqueInput>>;
  set?: Maybe<Array<BatchWhereUniqueInput>>;
  disconnect?: Maybe<Array<BatchWhereUniqueInput>>;
  delete?: Maybe<Array<BatchWhereUniqueInput>>;
  update?: Maybe<Array<BatchUpdateWithWhereUniqueWithoutManufacturerInput>>;
  updateMany?: Maybe<Array<BatchUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<BatchScalarWhereInput>>;
  upsert?: Maybe<Array<BatchUpsertWithWhereUniqueWithoutManufacturerInput>>;
};

export type ContactPersonUpdateManyWithoutManufacturerInput = {
  create?: Maybe<Array<ContactPersonCreateWithoutManufacturerInput>>;
  connect?: Maybe<Array<ContactPersonWhereUniqueInput>>;
  set?: Maybe<Array<ContactPersonWhereUniqueInput>>;
  disconnect?: Maybe<Array<ContactPersonWhereUniqueInput>>;
  delete?: Maybe<Array<ContactPersonWhereUniqueInput>>;
  update?: Maybe<Array<ContactPersonUpdateWithWhereUniqueWithoutManufacturerInput>>;
  updateMany?: Maybe<Array<ContactPersonUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<ContactPersonScalarWhereInput>>;
  upsert?: Maybe<Array<ContactPersonUpsertWithWhereUniqueWithoutManufacturerInput>>;
};

export type FileUpdateManyWithoutManufacturerInput = {
  create?: Maybe<Array<FileCreateWithoutManufacturerInput>>;
  connect?: Maybe<Array<FileWhereUniqueInput>>;
  set?: Maybe<Array<FileWhereUniqueInput>>;
  disconnect?: Maybe<Array<FileWhereUniqueInput>>;
  delete?: Maybe<Array<FileWhereUniqueInput>>;
  update?: Maybe<Array<FileUpdateWithWhereUniqueWithoutManufacturerInput>>;
  updateMany?: Maybe<Array<FileUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<FileScalarWhereInput>>;
  upsert?: Maybe<Array<FileUpsertWithWhereUniqueWithoutManufacturerInput>>;
};

export type AddressUpdateOneWithoutManufacturerInput = {
  create?: Maybe<AddressCreateWithoutManufacturerInput>;
  connect?: Maybe<AddressWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<AddressUpdateWithoutManufacturerDataInput>;
  upsert?: Maybe<AddressUpsertWithoutManufacturerInput>;
};

export type BatchUpdateWithoutProductDataInput = {
  batchNumber?: Maybe<Scalars['String']>;
  bestBefore?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<ManufacturerUpdateOneWithoutBatchesInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutBatchInput>;
  movements?: Maybe<MovementUpdateManyWithoutBatchInput>;
};

export type BatchUpdateManyDataInput = {
  batchNumber?: Maybe<Scalars['String']>;
  bestBefore?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
};

export type FileUpdateWithoutProductDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  smallUrl?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<ManufacturerUpdateOneWithoutImagesInput>;
  message?: Maybe<MessageUpdateOneWithoutImagesInput>;
  client?: Maybe<ClientUpdateOneWithoutImagesInput>;
  supplier?: Maybe<SupplierUpdateOneWithoutImagesInput>;
  transportAgency?: Maybe<TransportAgencyUpdateOneWithoutImagesInput>;
  transporter?: Maybe<TransporterUpdateOneWithoutImagesInput>;
  settings?: Maybe<SettingUpdateManyWithoutLogoInput>;
  Invoice?: Maybe<InvoiceUpdateManyWithoutPdfInput>;
  imageCategory?: Maybe<CategoryUpdateManyWithoutImageInput>;
  bannerCategory?: Maybe<CategoryUpdateManyWithoutBannerImageInput>;
  Movement?: Maybe<MovementUpdateOneWithoutDocumentsInput>;
  Payment?: Maybe<PaymentUpdateOneWithoutDocumentsInput>;
};

export type InteractionUpdateWithoutProductDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  client?: Maybe<ClientUpdateOneWithoutInteractionsInput>;
  supplier?: Maybe<SupplierUpdateOneWithoutInteractionsInput>;
  movement?: Maybe<MovementUpdateOneWithoutInteractionsInput>;
};

export type InventoryUpdateWithoutProductDataInput = {
  amount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  storageNumber?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  isListed?: Maybe<Scalars['Boolean']>;
  listPrice?: Maybe<Scalars['Float']>;
  supplier?: Maybe<SupplierUpdateOneWithoutInventoriesInput>;
  batch?: Maybe<BatchUpdateOneWithoutInventoriesInput>;
  warehouse?: Maybe<WarehouseUpdateOneWithoutInventoriesInput>;
  movements?: Maybe<MovementUpdateManyWithoutInventoryInput>;
  reservations?: Maybe<ReservationUpdateManyWithoutInventoryInput>;
  client?: Maybe<ClientUpdateOneWithoutInventoriesInput>;
};

export type MovementUpdateWithoutProductDataInput = {
  active?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  status?: Maybe<MovementStatus>;
  movementId?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
  sendMail?: Maybe<Scalars['Boolean']>;
  storageNumber?: Maybe<Scalars['String']>;
  type?: Maybe<MovementType>;
  unitPrice?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  invoiceId?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  client?: Maybe<ClientUpdateOneWithoutMovementsInput>;
  supplier?: Maybe<SupplierUpdateOneWithoutMovementsInput>;
  batch?: Maybe<BatchUpdateOneWithoutMovementsInput>;
  inventory?: Maybe<InventoryUpdateOneWithoutMovementsInput>;
  warehouse?: Maybe<WarehouseUpdateOneWithoutMovementsInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutMovementInput>;
  comments?: Maybe<MessageUpdateManyWithoutMovementInput>;
  reservation?: Maybe<ReservationUpdateOneWithoutMovementInput>;
  transports?: Maybe<TransportUpdateManyWithoutMovementInput>;
  invoice?: Maybe<InvoiceUpdateOneWithoutMovementsInput>;
  documents?: Maybe<FileUpdateManyWithoutMovementInput>;
  payments?: Maybe<PaymentUpdateManyWithoutMovementInput>;
};

export type NotificationUpdateWithoutProductDataInput = {
  active?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  type?: Maybe<NotificationType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<Scalars['String']>;
  userLanguage?: Maybe<Language>;
  userEmail?: Maybe<Scalars['String']>;
  warehouse?: Maybe<WarehouseUpdateOneWithoutNotificationInput>;
};

export type UnitUpdateWithoutProductDataInput = {
  baseAmount?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UnitUpdateManyDataInput = {
  baseAmount?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type TaxRateUpdateWithoutProductDataInput = {
  id?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  isSameCountry?: Maybe<Scalars['Boolean']>;
  isEU?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  group?: Maybe<GroupUpdateOneWithoutTaxRateInput>;
  payments?: Maybe<PaymentUpdateManyWithoutTaxRateInput>;
};

export type TaxRateUpdateManyDataInput = {
  id?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  isSameCountry?: Maybe<Scalars['Boolean']>;
  isEU?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
};

export type ProductUpdateWithoutPackagedProductDataInput = {
  id?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['Int']>;
  ASIN?: Maybe<Scalars['String']>;
  EAN?: Maybe<Scalars['String']>;
  ISBN?: Maybe<Scalars['String']>;
  UPC?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  material?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  isPackaging?: Maybe<Scalars['Boolean']>;
  isListed?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<ProductUpdatetagsInput>;
  dimensions?: Maybe<DimensionUpdateOneWithoutProductInput>;
  manufacturer?: Maybe<ManufacturerUpdateOneWithoutProductsInput>;
  batches?: Maybe<BatchUpdateManyWithoutProductInput>;
  images?: Maybe<FileUpdateManyWithoutProductInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutProductInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutProductInput>;
  movements?: Maybe<MovementUpdateManyWithoutProductInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutProductInput>;
  units?: Maybe<UnitUpdateManyWithoutProductInput>;
  taxRates?: Maybe<TaxRateUpdateManyWithoutProductInput>;
  packaging?: Maybe<ProductUpdateManyWithoutPackagedProductInput>;
  variants?: Maybe<ProductUpdateManyWithoutVariantProductInput>;
  variantProduct?: Maybe<ProductUpdateOneWithoutVariantsInput>;
  categories?: Maybe<CategoryUpdateManyWithoutProductsInput>;
};

export type ProductUpdateManyDataInput = {
  id?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['Int']>;
  ASIN?: Maybe<Scalars['String']>;
  EAN?: Maybe<Scalars['String']>;
  ISBN?: Maybe<Scalars['String']>;
  UPC?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  material?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  isPackaging?: Maybe<Scalars['Boolean']>;
  isListed?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<ProductUpdatetagsInput>;
};

export type ProductUpdateWithoutVariantProductDataInput = {
  id?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['Int']>;
  ASIN?: Maybe<Scalars['String']>;
  EAN?: Maybe<Scalars['String']>;
  ISBN?: Maybe<Scalars['String']>;
  UPC?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  material?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  isPackaging?: Maybe<Scalars['Boolean']>;
  isListed?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<ProductUpdatetagsInput>;
  dimensions?: Maybe<DimensionUpdateOneWithoutProductInput>;
  manufacturer?: Maybe<ManufacturerUpdateOneWithoutProductsInput>;
  batches?: Maybe<BatchUpdateManyWithoutProductInput>;
  images?: Maybe<FileUpdateManyWithoutProductInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutProductInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutProductInput>;
  movements?: Maybe<MovementUpdateManyWithoutProductInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutProductInput>;
  units?: Maybe<UnitUpdateManyWithoutProductInput>;
  taxRates?: Maybe<TaxRateUpdateManyWithoutProductInput>;
  packaging?: Maybe<ProductUpdateManyWithoutPackagedProductInput>;
  variants?: Maybe<ProductUpdateManyWithoutVariantProductInput>;
  packagedProduct?: Maybe<ProductUpdateOneWithoutPackagingInput>;
  categories?: Maybe<CategoryUpdateManyWithoutProductsInput>;
};

export type CategoryUpdateWithoutProductsDataInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<FileUpdateOneWithoutImageCategoryInput>;
  bannerImage?: Maybe<FileUpdateOneWithoutBannerCategoryInput>;
  subCategories?: Maybe<CategoryUpdateManyWithoutCategoryInput>;
  Category?: Maybe<CategoryUpdateOneWithoutSubCategoriesInput>;
};

export type CategoryUpdateManyDataInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ManufacturerUpdateOneWithoutImagesInput = {
  create?: Maybe<ManufacturerCreateWithoutImagesInput>;
  connect?: Maybe<ManufacturerWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ManufacturerUpdateWithoutImagesDataInput>;
  upsert?: Maybe<ManufacturerUpsertWithoutImagesInput>;
};

export type MessageUpdateOneWithoutImagesInput = {
  create?: Maybe<MessageCreateWithoutImagesInput>;
  connect?: Maybe<MessageWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<MessageUpdateWithoutImagesDataInput>;
  upsert?: Maybe<MessageUpsertWithoutImagesInput>;
};

export type ClientUpdateOneWithoutImagesInput = {
  create?: Maybe<ClientCreateWithoutImagesInput>;
  connect?: Maybe<ClientWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ClientUpdateWithoutImagesDataInput>;
  upsert?: Maybe<ClientUpsertWithoutImagesInput>;
};

export type SupplierUpdateOneWithoutImagesInput = {
  create?: Maybe<SupplierCreateWithoutImagesInput>;
  connect?: Maybe<SupplierWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<SupplierUpdateWithoutImagesDataInput>;
  upsert?: Maybe<SupplierUpsertWithoutImagesInput>;
};

export type ProductUpdateOneWithoutImagesInput = {
  create?: Maybe<ProductCreateWithoutImagesInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ProductUpdateWithoutImagesDataInput>;
  upsert?: Maybe<ProductUpsertWithoutImagesInput>;
};

export type TransportAgencyUpdateOneWithoutImagesInput = {
  create?: Maybe<TransportAgencyCreateWithoutImagesInput>;
  connect?: Maybe<TransportAgencyWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<TransportAgencyUpdateWithoutImagesDataInput>;
  upsert?: Maybe<TransportAgencyUpsertWithoutImagesInput>;
};

export type TransporterUpdateOneWithoutImagesInput = {
  create?: Maybe<TransporterCreateWithoutImagesInput>;
  connect?: Maybe<TransporterWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<TransporterUpdateWithoutImagesDataInput>;
  upsert?: Maybe<TransporterUpsertWithoutImagesInput>;
};

export type InvoiceUpdateManyWithoutPdfInput = {
  create?: Maybe<Array<InvoiceCreateWithoutPdfInput>>;
  connect?: Maybe<Array<InvoiceWhereUniqueInput>>;
  set?: Maybe<Array<InvoiceWhereUniqueInput>>;
  disconnect?: Maybe<Array<InvoiceWhereUniqueInput>>;
  delete?: Maybe<Array<InvoiceWhereUniqueInput>>;
  update?: Maybe<Array<InvoiceUpdateWithWhereUniqueWithoutPdfInput>>;
  updateMany?: Maybe<Array<InvoiceUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<InvoiceScalarWhereInput>>;
  upsert?: Maybe<Array<InvoiceUpsertWithWhereUniqueWithoutPdfInput>>;
};

export type CategoryUpdateManyWithoutImageInput = {
  create?: Maybe<Array<CategoryCreateWithoutImageInput>>;
  connect?: Maybe<Array<CategoryWhereUniqueInput>>;
  set?: Maybe<Array<CategoryWhereUniqueInput>>;
  disconnect?: Maybe<Array<CategoryWhereUniqueInput>>;
  delete?: Maybe<Array<CategoryWhereUniqueInput>>;
  update?: Maybe<Array<CategoryUpdateWithWhereUniqueWithoutImageInput>>;
  updateMany?: Maybe<Array<CategoryUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<CategoryScalarWhereInput>>;
  upsert?: Maybe<Array<CategoryUpsertWithWhereUniqueWithoutImageInput>>;
};

export type CategoryUpdateManyWithoutBannerImageInput = {
  create?: Maybe<Array<CategoryCreateWithoutBannerImageInput>>;
  connect?: Maybe<Array<CategoryWhereUniqueInput>>;
  set?: Maybe<Array<CategoryWhereUniqueInput>>;
  disconnect?: Maybe<Array<CategoryWhereUniqueInput>>;
  delete?: Maybe<Array<CategoryWhereUniqueInput>>;
  update?: Maybe<Array<CategoryUpdateWithWhereUniqueWithoutBannerImageInput>>;
  updateMany?: Maybe<Array<CategoryUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<CategoryScalarWhereInput>>;
  upsert?: Maybe<Array<CategoryUpsertWithWhereUniqueWithoutBannerImageInput>>;
};

export type MovementUpdateOneWithoutDocumentsInput = {
  create?: Maybe<MovementCreateWithoutDocumentsInput>;
  connect?: Maybe<MovementWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<MovementUpdateWithoutDocumentsDataInput>;
  upsert?: Maybe<MovementUpsertWithoutDocumentsInput>;
};

export type PaymentUpdateOneWithoutDocumentsInput = {
  create?: Maybe<PaymentCreateWithoutDocumentsInput>;
  connect?: Maybe<PaymentWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<PaymentUpdateWithoutDocumentsDataInput>;
  upsert?: Maybe<PaymentUpsertWithoutDocumentsInput>;
};

export type PresetUpdateWithoutSettingDataInput = {
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  currency?: Maybe<Scalars['String']>;
  filter?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  rowsPerPage?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  tableView?: Maybe<TableView>;
  type?: Maybe<EntityType>;
  user?: Maybe<Scalars['String']>;
  columnOrder?: Maybe<PresetUpdatecolumnOrderInput>;
  hiddenColumns?: Maybe<PresetUpdatehiddenColumnsInput>;
};

export type PresetUpdateManyDataInput = {
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  currency?: Maybe<Scalars['String']>;
  filter?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  rowsPerPage?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  tableView?: Maybe<TableView>;
  type?: Maybe<EntityType>;
  user?: Maybe<Scalars['String']>;
  columnOrder?: Maybe<PresetUpdatecolumnOrderInput>;
  hiddenColumns?: Maybe<PresetUpdatehiddenColumnsInput>;
};

export type ContactPersonUpdateWithoutSupplierDataInput = {
  active?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  scheduleEnd?: Maybe<Scalars['DateTime']>;
  scheduleStart?: Maybe<Scalars['DateTime']>;
  notes?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<ManufacturerUpdateOneWithoutContactPersonsInput>;
  client?: Maybe<ClientUpdateOneWithoutContactPersonsInput>;
  transportAgency?: Maybe<TransportAgencyUpdateOneWithoutContactPersonsInput>;
  warehouse?: Maybe<WarehouseUpdateOneWithoutContactPersonsInput>;
};

export type FileUpdateWithoutSupplierDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  smallUrl?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<ManufacturerUpdateOneWithoutImagesInput>;
  message?: Maybe<MessageUpdateOneWithoutImagesInput>;
  client?: Maybe<ClientUpdateOneWithoutImagesInput>;
  product?: Maybe<ProductUpdateOneWithoutImagesInput>;
  transportAgency?: Maybe<TransportAgencyUpdateOneWithoutImagesInput>;
  transporter?: Maybe<TransporterUpdateOneWithoutImagesInput>;
  settings?: Maybe<SettingUpdateManyWithoutLogoInput>;
  Invoice?: Maybe<InvoiceUpdateManyWithoutPdfInput>;
  imageCategory?: Maybe<CategoryUpdateManyWithoutImageInput>;
  bannerCategory?: Maybe<CategoryUpdateManyWithoutBannerImageInput>;
  Movement?: Maybe<MovementUpdateOneWithoutDocumentsInput>;
  Payment?: Maybe<PaymentUpdateOneWithoutDocumentsInput>;
};

export type InteractionUpdateWithoutSupplierDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  client?: Maybe<ClientUpdateOneWithoutInteractionsInput>;
  movement?: Maybe<MovementUpdateOneWithoutInteractionsInput>;
  product?: Maybe<ProductUpdateOneWithoutInteractionsInput>;
};

export type InventoryUpdateWithoutSupplierDataInput = {
  amount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  storageNumber?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  isListed?: Maybe<Scalars['Boolean']>;
  listPrice?: Maybe<Scalars['Float']>;
  batch?: Maybe<BatchUpdateOneWithoutInventoriesInput>;
  product?: Maybe<ProductUpdateOneRequiredWithoutInventoriesInput>;
  warehouse?: Maybe<WarehouseUpdateOneWithoutInventoriesInput>;
  movements?: Maybe<MovementUpdateManyWithoutInventoryInput>;
  reservations?: Maybe<ReservationUpdateManyWithoutInventoryInput>;
  client?: Maybe<ClientUpdateOneWithoutInventoriesInput>;
};

export type MovementUpdateWithoutSupplierDataInput = {
  active?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  status?: Maybe<MovementStatus>;
  movementId?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
  sendMail?: Maybe<Scalars['Boolean']>;
  storageNumber?: Maybe<Scalars['String']>;
  type?: Maybe<MovementType>;
  unitPrice?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  invoiceId?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  client?: Maybe<ClientUpdateOneWithoutMovementsInput>;
  batch?: Maybe<BatchUpdateOneWithoutMovementsInput>;
  inventory?: Maybe<InventoryUpdateOneWithoutMovementsInput>;
  product?: Maybe<ProductUpdateOneRequiredWithoutMovementsInput>;
  warehouse?: Maybe<WarehouseUpdateOneWithoutMovementsInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutMovementInput>;
  comments?: Maybe<MessageUpdateManyWithoutMovementInput>;
  reservation?: Maybe<ReservationUpdateOneWithoutMovementInput>;
  transports?: Maybe<TransportUpdateManyWithoutMovementInput>;
  invoice?: Maybe<InvoiceUpdateOneWithoutMovementsInput>;
  documents?: Maybe<FileUpdateManyWithoutMovementInput>;
  payments?: Maybe<PaymentUpdateManyWithoutMovementInput>;
};

export type PaymentUpdateWithoutSupplierDataInput = {
  id?: Maybe<Scalars['String']>;
  paymentId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  type?: Maybe<PaymentType>;
  status?: Maybe<PaymentStatus>;
  dueDate?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  concept?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  currency?: Maybe<Scalars['String']>;
  recipient?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  paymentMethod?: Maybe<Scalars['String']>;
  stripePaymentIntentId?: Maybe<Scalars['String']>;
  stripeClientSecret?: Maybe<Scalars['String']>;
  group?: Maybe<GroupUpdateOneWithoutPaymentsInput>;
  taxRate?: Maybe<TaxRateUpdateOneWithoutPaymentsInput>;
  movement?: Maybe<MovementUpdateOneWithoutPaymentsInput>;
  transportAgency?: Maybe<TransportAgencyUpdateOneWithoutPaymentsInput>;
  client?: Maybe<ClientUpdateOneWithoutPaymentsInput>;
  documents?: Maybe<FileUpdateManyWithoutPaymentInput>;
  bankAccount?: Maybe<BankAccountUpdateOneWithoutPaymentsInput>;
};

export type ClientCreateWithoutMovementsInput = {
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobile?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  clientId: Scalars['Int'];
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutClientInput>;
  images?: Maybe<FileCreateManyWithoutClientInput>;
  interactions?: Maybe<InteractionCreateManyWithoutClientInput>;
  inventories?: Maybe<InventoryCreateManyWithoutClientInput>;
  reservations?: Maybe<ReservationCreateManyWithoutClientInput>;
  address?: Maybe<AddressCreateOneWithoutClientAddressInput>;
  billingAddress?: Maybe<AddressCreateOneWithoutClientBillingAddressInput>;
  invoices?: Maybe<InvoiceCreateManyWithoutClientInput>;
  payments?: Maybe<PaymentCreateManyWithoutClientInput>;
};

export type SupplierCreateWithoutMovementsInput = {
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobile?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  supplierId: Scalars['Int'];
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  address?: Maybe<AddressCreateOneWithoutSupplierAddressInput>;
  billingAddress?: Maybe<AddressCreateOneWithoutSupplierBillingAddressInput>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutSupplierInput>;
  images?: Maybe<FileCreateManyWithoutSupplierInput>;
  interactions?: Maybe<InteractionCreateManyWithoutSupplierInput>;
  inventories?: Maybe<InventoryCreateManyWithoutSupplierInput>;
  payments?: Maybe<PaymentCreateManyWithoutSupplierInput>;
};

export type BatchCreateWithoutMovementsInput = {
  batchNumber?: Maybe<Scalars['String']>;
  bestBefore?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<ManufacturerCreateOneWithoutBatchesInput>;
  product: ProductCreateOneWithoutBatchesInput;
  inventories?: Maybe<InventoryCreateManyWithoutBatchInput>;
};

export type InventoryCreateWithoutMovementsInput = {
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  storageNumber?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  isListed?: Maybe<Scalars['Boolean']>;
  listPrice?: Maybe<Scalars['Float']>;
  supplier?: Maybe<SupplierCreateOneWithoutInventoriesInput>;
  batch?: Maybe<BatchCreateOneWithoutInventoriesInput>;
  product: ProductCreateOneWithoutInventoriesInput;
  warehouse?: Maybe<WarehouseCreateOneWithoutInventoriesInput>;
  reservations?: Maybe<ReservationCreateManyWithoutInventoryInput>;
  client?: Maybe<ClientCreateOneWithoutInventoriesInput>;
};

export type ProductCreateWithoutMovementsInput = {
  id?: Maybe<Scalars['String']>;
  productId: Scalars['Int'];
  ASIN?: Maybe<Scalars['String']>;
  EAN?: Maybe<Scalars['String']>;
  ISBN?: Maybe<Scalars['String']>;
  UPC?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  material?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  isPackaging?: Maybe<Scalars['Boolean']>;
  isListed?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<ProductCreatetagsInput>;
  dimensions?: Maybe<DimensionCreateOneWithoutProductInput>;
  manufacturer?: Maybe<ManufacturerCreateOneWithoutProductsInput>;
  batches?: Maybe<BatchCreateManyWithoutProductInput>;
  images?: Maybe<FileCreateManyWithoutProductInput>;
  interactions?: Maybe<InteractionCreateManyWithoutProductInput>;
  inventories?: Maybe<InventoryCreateManyWithoutProductInput>;
  notifications?: Maybe<NotificationCreateManyWithoutProductInput>;
  units?: Maybe<UnitCreateManyWithoutProductInput>;
  taxRates?: Maybe<TaxRateCreateManyWithoutProductInput>;
  packaging?: Maybe<ProductCreateManyWithoutPackagedProductInput>;
  variants?: Maybe<ProductCreateManyWithoutVariantProductInput>;
  packagedProduct?: Maybe<ProductCreateOneWithoutPackagingInput>;
  variantProduct?: Maybe<ProductCreateOneWithoutVariantsInput>;
  categories?: Maybe<CategoryCreateManyWithoutProductsInput>;
};

export type WarehouseCreateWithoutMovementsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutWarehouseInput>;
  inventories?: Maybe<InventoryCreateManyWithoutWarehouseInput>;
  address?: Maybe<AddressCreateOneWithoutWarehouseInput>;
  Notification?: Maybe<NotificationCreateManyWithoutWarehouseInput>;
};

export type InteractionCreateWithoutMovementInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  userId: Scalars['String'];
  client?: Maybe<ClientCreateOneWithoutInteractionsInput>;
  supplier?: Maybe<SupplierCreateOneWithoutInteractionsInput>;
  product?: Maybe<ProductCreateOneWithoutInteractionsInput>;
};

export type ReservationCreateWithoutMovementInput = {
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  notes?: Maybe<Scalars['String']>;
  client: ClientCreateOneWithoutReservationsInput;
  inventory?: Maybe<InventoryCreateOneWithoutReservationsInput>;
};

export type TransportCreateWithoutMovementInput = {
  arrivalDate?: Maybe<Scalars['DateTime']>;
  arrivalPoint?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  notes?: Maybe<Scalars['String']>;
  transportAgency?: Maybe<TransportAgencyCreateOneWithoutTransportsInput>;
  transporter?: Maybe<TransporterCreateOneWithoutTransportsInput>;
};

export type InvoiceCreateWithoutMovementsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  withTaxes: Scalars['Boolean'];
  notes?: Maybe<Scalars['String']>;
  pdf: FileCreateOneWithoutInvoiceInput;
  client: ClientCreateOneWithoutInvoicesInput;
};

export type FileCreateWithoutMovementInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  smallUrl?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  manufacturer?: Maybe<ManufacturerCreateOneWithoutImagesInput>;
  message?: Maybe<MessageCreateOneWithoutImagesInput>;
  client?: Maybe<ClientCreateOneWithoutImagesInput>;
  supplier?: Maybe<SupplierCreateOneWithoutImagesInput>;
  product?: Maybe<ProductCreateOneWithoutImagesInput>;
  transportAgency?: Maybe<TransportAgencyCreateOneWithoutImagesInput>;
  transporter?: Maybe<TransporterCreateOneWithoutImagesInput>;
  settings?: Maybe<SettingCreateManyWithoutLogoInput>;
  Invoice?: Maybe<InvoiceCreateManyWithoutPdfInput>;
  imageCategory?: Maybe<CategoryCreateManyWithoutImageInput>;
  bannerCategory?: Maybe<CategoryCreateManyWithoutBannerImageInput>;
  Payment?: Maybe<PaymentCreateOneWithoutDocumentsInput>;
};

export type PaymentCreateWithoutMovementInput = {
  id?: Maybe<Scalars['String']>;
  paymentId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  type: PaymentType;
  status: PaymentStatus;
  dueDate?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  concept?: Maybe<Scalars['String']>;
  amount: Scalars['Float'];
  currency: Scalars['String'];
  recipient?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  paymentMethod?: Maybe<Scalars['String']>;
  stripePaymentIntentId?: Maybe<Scalars['String']>;
  stripeClientSecret?: Maybe<Scalars['String']>;
  group?: Maybe<GroupCreateOneWithoutPaymentsInput>;
  taxRate?: Maybe<TaxRateCreateOneWithoutPaymentsInput>;
  transportAgency?: Maybe<TransportAgencyCreateOneWithoutPaymentsInput>;
  client?: Maybe<ClientCreateOneWithoutPaymentsInput>;
  supplier?: Maybe<SupplierCreateOneWithoutPaymentsInput>;
  documents?: Maybe<FileCreateManyWithoutPaymentInput>;
  bankAccount?: Maybe<BankAccountCreateOneWithoutPaymentsInput>;
};

export type ClientUpdateWithoutMovementsDataInput = {
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutClientInput>;
  images?: Maybe<FileUpdateManyWithoutClientInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutClientInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutClientInput>;
  reservations?: Maybe<ReservationUpdateManyWithoutClientInput>;
  address?: Maybe<AddressUpdateOneWithoutClientAddressInput>;
  billingAddress?: Maybe<AddressUpdateOneWithoutClientBillingAddressInput>;
  invoices?: Maybe<InvoiceUpdateManyWithoutClientInput>;
  payments?: Maybe<PaymentUpdateManyWithoutClientInput>;
};

export type ClientUpsertWithoutMovementsInput = {
  update: ClientUpdateWithoutMovementsDataInput;
  create: ClientCreateWithoutMovementsInput;
};

export type SupplierUpdateWithoutMovementsDataInput = {
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  supplierId?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  address?: Maybe<AddressUpdateOneWithoutSupplierAddressInput>;
  billingAddress?: Maybe<AddressUpdateOneWithoutSupplierBillingAddressInput>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutSupplierInput>;
  images?: Maybe<FileUpdateManyWithoutSupplierInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutSupplierInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutSupplierInput>;
  payments?: Maybe<PaymentUpdateManyWithoutSupplierInput>;
};

export type SupplierUpsertWithoutMovementsInput = {
  update: SupplierUpdateWithoutMovementsDataInput;
  create: SupplierCreateWithoutMovementsInput;
};

export type BatchUpdateWithoutMovementsDataInput = {
  batchNumber?: Maybe<Scalars['String']>;
  bestBefore?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<ManufacturerUpdateOneWithoutBatchesInput>;
  product?: Maybe<ProductUpdateOneRequiredWithoutBatchesInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutBatchInput>;
};

export type BatchUpsertWithoutMovementsInput = {
  update: BatchUpdateWithoutMovementsDataInput;
  create: BatchCreateWithoutMovementsInput;
};

export type InventoryUpdateWithoutMovementsDataInput = {
  amount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  storageNumber?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  isListed?: Maybe<Scalars['Boolean']>;
  listPrice?: Maybe<Scalars['Float']>;
  supplier?: Maybe<SupplierUpdateOneWithoutInventoriesInput>;
  batch?: Maybe<BatchUpdateOneWithoutInventoriesInput>;
  product?: Maybe<ProductUpdateOneRequiredWithoutInventoriesInput>;
  warehouse?: Maybe<WarehouseUpdateOneWithoutInventoriesInput>;
  reservations?: Maybe<ReservationUpdateManyWithoutInventoryInput>;
  client?: Maybe<ClientUpdateOneWithoutInventoriesInput>;
};

export type InventoryUpsertWithoutMovementsInput = {
  update: InventoryUpdateWithoutMovementsDataInput;
  create: InventoryCreateWithoutMovementsInput;
};

export type ProductUpdateWithoutMovementsDataInput = {
  id?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['Int']>;
  ASIN?: Maybe<Scalars['String']>;
  EAN?: Maybe<Scalars['String']>;
  ISBN?: Maybe<Scalars['String']>;
  UPC?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  material?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  isPackaging?: Maybe<Scalars['Boolean']>;
  isListed?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<ProductUpdatetagsInput>;
  dimensions?: Maybe<DimensionUpdateOneWithoutProductInput>;
  manufacturer?: Maybe<ManufacturerUpdateOneWithoutProductsInput>;
  batches?: Maybe<BatchUpdateManyWithoutProductInput>;
  images?: Maybe<FileUpdateManyWithoutProductInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutProductInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutProductInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutProductInput>;
  units?: Maybe<UnitUpdateManyWithoutProductInput>;
  taxRates?: Maybe<TaxRateUpdateManyWithoutProductInput>;
  packaging?: Maybe<ProductUpdateManyWithoutPackagedProductInput>;
  variants?: Maybe<ProductUpdateManyWithoutVariantProductInput>;
  packagedProduct?: Maybe<ProductUpdateOneWithoutPackagingInput>;
  variantProduct?: Maybe<ProductUpdateOneWithoutVariantsInput>;
  categories?: Maybe<CategoryUpdateManyWithoutProductsInput>;
};

export type ProductUpsertWithoutMovementsInput = {
  update: ProductUpdateWithoutMovementsDataInput;
  create: ProductCreateWithoutMovementsInput;
};

export type WarehouseUpdateWithoutMovementsDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutWarehouseInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutWarehouseInput>;
  address?: Maybe<AddressUpdateOneWithoutWarehouseInput>;
  Notification?: Maybe<NotificationUpdateManyWithoutWarehouseInput>;
};

export type WarehouseUpsertWithoutMovementsInput = {
  update: WarehouseUpdateWithoutMovementsDataInput;
  create: WarehouseCreateWithoutMovementsInput;
};

export type InteractionUpdateWithWhereUniqueWithoutMovementInput = {
  where: InteractionWhereUniqueInput;
  data: InteractionUpdateWithoutMovementDataInput;
};

export type InteractionUpsertWithWhereUniqueWithoutMovementInput = {
  where: InteractionWhereUniqueInput;
  update: InteractionUpdateWithoutMovementDataInput;
  create: InteractionCreateWithoutMovementInput;
};

export type ReservationUpdateWithoutMovementDataInput = {
  amount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  notes?: Maybe<Scalars['String']>;
  client?: Maybe<ClientUpdateOneRequiredWithoutReservationsInput>;
  inventory?: Maybe<InventoryUpdateOneWithoutReservationsInput>;
};

export type ReservationUpsertWithoutMovementInput = {
  update: ReservationUpdateWithoutMovementDataInput;
  create: ReservationCreateWithoutMovementInput;
};

export type TransportUpdateWithWhereUniqueWithoutMovementInput = {
  where: TransportWhereUniqueInput;
  data: TransportUpdateWithoutMovementDataInput;
};

export type TransportUpsertWithWhereUniqueWithoutMovementInput = {
  where: TransportWhereUniqueInput;
  update: TransportUpdateWithoutMovementDataInput;
  create: TransportCreateWithoutMovementInput;
};

export type InvoiceUpdateWithoutMovementsDataInput = {
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  withTaxes?: Maybe<Scalars['Boolean']>;
  notes?: Maybe<Scalars['String']>;
  pdf?: Maybe<FileUpdateOneRequiredWithoutInvoiceInput>;
  client?: Maybe<ClientUpdateOneRequiredWithoutInvoicesInput>;
};

export type InvoiceUpsertWithoutMovementsInput = {
  update: InvoiceUpdateWithoutMovementsDataInput;
  create: InvoiceCreateWithoutMovementsInput;
};

export type FileUpdateWithWhereUniqueWithoutMovementInput = {
  where: FileWhereUniqueInput;
  data: FileUpdateWithoutMovementDataInput;
};

export type FileUpsertWithWhereUniqueWithoutMovementInput = {
  where: FileWhereUniqueInput;
  update: FileUpdateWithoutMovementDataInput;
  create: FileCreateWithoutMovementInput;
};

export type PaymentUpdateWithWhereUniqueWithoutMovementInput = {
  where: PaymentWhereUniqueInput;
  data: PaymentUpdateWithoutMovementDataInput;
};

export type PaymentUpsertWithWhereUniqueWithoutMovementInput = {
  where: PaymentWhereUniqueInput;
  update: PaymentUpdateWithoutMovementDataInput;
  create: PaymentCreateWithoutMovementInput;
};

export type ManufacturerCreateWithoutImagesInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  batches?: Maybe<BatchCreateManyWithoutManufacturerInput>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutManufacturerInput>;
  products?: Maybe<ProductCreateManyWithoutManufacturerInput>;
  address?: Maybe<AddressCreateOneWithoutManufacturerInput>;
};

export type ClientCreateWithoutImagesInput = {
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobile?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  clientId: Scalars['Int'];
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutClientInput>;
  interactions?: Maybe<InteractionCreateManyWithoutClientInput>;
  inventories?: Maybe<InventoryCreateManyWithoutClientInput>;
  movements?: Maybe<MovementCreateManyWithoutClientInput>;
  reservations?: Maybe<ReservationCreateManyWithoutClientInput>;
  address?: Maybe<AddressCreateOneWithoutClientAddressInput>;
  billingAddress?: Maybe<AddressCreateOneWithoutClientBillingAddressInput>;
  invoices?: Maybe<InvoiceCreateManyWithoutClientInput>;
  payments?: Maybe<PaymentCreateManyWithoutClientInput>;
};

export type SupplierCreateWithoutImagesInput = {
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobile?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  supplierId: Scalars['Int'];
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  address?: Maybe<AddressCreateOneWithoutSupplierAddressInput>;
  billingAddress?: Maybe<AddressCreateOneWithoutSupplierBillingAddressInput>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutSupplierInput>;
  interactions?: Maybe<InteractionCreateManyWithoutSupplierInput>;
  inventories?: Maybe<InventoryCreateManyWithoutSupplierInput>;
  movements?: Maybe<MovementCreateManyWithoutSupplierInput>;
  payments?: Maybe<PaymentCreateManyWithoutSupplierInput>;
};

export type ProductCreateWithoutImagesInput = {
  id?: Maybe<Scalars['String']>;
  productId: Scalars['Int'];
  ASIN?: Maybe<Scalars['String']>;
  EAN?: Maybe<Scalars['String']>;
  ISBN?: Maybe<Scalars['String']>;
  UPC?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  material?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  isPackaging?: Maybe<Scalars['Boolean']>;
  isListed?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<ProductCreatetagsInput>;
  dimensions?: Maybe<DimensionCreateOneWithoutProductInput>;
  manufacturer?: Maybe<ManufacturerCreateOneWithoutProductsInput>;
  batches?: Maybe<BatchCreateManyWithoutProductInput>;
  interactions?: Maybe<InteractionCreateManyWithoutProductInput>;
  inventories?: Maybe<InventoryCreateManyWithoutProductInput>;
  movements?: Maybe<MovementCreateManyWithoutProductInput>;
  notifications?: Maybe<NotificationCreateManyWithoutProductInput>;
  units?: Maybe<UnitCreateManyWithoutProductInput>;
  taxRates?: Maybe<TaxRateCreateManyWithoutProductInput>;
  packaging?: Maybe<ProductCreateManyWithoutPackagedProductInput>;
  variants?: Maybe<ProductCreateManyWithoutVariantProductInput>;
  packagedProduct?: Maybe<ProductCreateOneWithoutPackagingInput>;
  variantProduct?: Maybe<ProductCreateOneWithoutVariantsInput>;
  categories?: Maybe<CategoryCreateManyWithoutProductsInput>;
};

export type TransportAgencyCreateWithoutImagesInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutTransportAgencyInput>;
  transports?: Maybe<TransportCreateManyWithoutTransportAgencyInput>;
  transporters?: Maybe<TransporterCreateManyWithoutTransportAgencyInput>;
  address?: Maybe<AddressCreateOneWithoutTransportAgencyInput>;
  payments?: Maybe<PaymentCreateManyWithoutTransportAgencyInput>;
};

export type TransporterCreateWithoutImagesInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type: TransportType;
  notes?: Maybe<Scalars['String']>;
  identifications?: Maybe<TransporterCreateidentificationsInput>;
  transportAgency?: Maybe<TransportAgencyCreateOneWithoutTransportersInput>;
  transports?: Maybe<TransportCreateManyWithoutTransporterInput>;
};

export type SettingCreateWithoutLogoInput = {
  subDomain: Scalars['String'];
  chat?: Maybe<Scalars['Boolean']>;
  currency?: Maybe<Scalars['String']>;
  currencySymbol?: Maybe<Scalars['String']>;
  defaultLanguage?: Maybe<Language>;
  id?: Maybe<Scalars['String']>;
  stripeCustomerId?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  timezone?: Maybe<Scalars['String']>;
  transports?: Maybe<Scalars['Boolean']>;
  plan?: Maybe<AccountPlan>;
  warehouses?: Maybe<Scalars['Boolean']>;
  packaging: Scalars['Boolean'];
  shop?: Maybe<Scalars['Boolean']>;
  accounting?: Maybe<Scalars['Boolean']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  weightUnit?: Maybe<Scalars['String']>;
  lengthUnit?: Maybe<Scalars['String']>;
  manufacturerFields?: Maybe<SettingCreatemanufacturerFieldsInput>;
  movementFields?: Maybe<SettingCreatemovementFieldsInput>;
  supplierFields?: Maybe<SettingCreatesupplierFieldsInput>;
  clientFields?: Maybe<SettingCreateclientFieldsInput>;
  productFields?: Maybe<SettingCreateproductFieldsInput>;
  transportAgencyFields?: Maybe<SettingCreatetransportAgencyFieldsInput>;
  transportFields?: Maybe<SettingCreatetransportFieldsInput>;
  transporterFields?: Maybe<SettingCreatetransporterFieldsInput>;
  paymentFields?: Maybe<SettingCreatepaymentFieldsInput>;
  warehouseFields?: Maybe<SettingCreatewarehouseFieldsInput>;
  presets?: Maybe<PresetCreateManyWithoutSettingInput>;
  address?: Maybe<AddressCreateOneWithoutAddressInput>;
  billingAddress?: Maybe<AddressCreateOneWithoutBillingAddressInput>;
};

export type InvoiceCreateWithoutPdfInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  withTaxes: Scalars['Boolean'];
  notes?: Maybe<Scalars['String']>;
  movements?: Maybe<MovementCreateManyWithoutInvoiceInput>;
  client: ClientCreateOneWithoutInvoicesInput;
};

export type CategoryCreateWithoutImageInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  bannerImage?: Maybe<FileCreateOneWithoutBannerCategoryInput>;
  products?: Maybe<ProductCreateManyWithoutCategoriesInput>;
  subCategories?: Maybe<CategoryCreateManyWithoutCategoryInput>;
  Category?: Maybe<CategoryCreateOneWithoutSubCategoriesInput>;
};

export type CategoryCreateWithoutBannerImageInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<FileCreateOneWithoutImageCategoryInput>;
  products?: Maybe<ProductCreateManyWithoutCategoriesInput>;
  subCategories?: Maybe<CategoryCreateManyWithoutCategoryInput>;
  Category?: Maybe<CategoryCreateOneWithoutSubCategoriesInput>;
};

export type MovementCreateWithoutDocumentsInput = {
  active?: Maybe<Scalars['Boolean']>;
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  date: Scalars['DateTime'];
  id?: Maybe<Scalars['String']>;
  status?: Maybe<MovementStatus>;
  movementId: Scalars['Int'];
  notes?: Maybe<Scalars['String']>;
  sendMail?: Maybe<Scalars['Boolean']>;
  storageNumber?: Maybe<Scalars['String']>;
  type: MovementType;
  unitPrice?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  invoiceId?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  client?: Maybe<ClientCreateOneWithoutMovementsInput>;
  supplier?: Maybe<SupplierCreateOneWithoutMovementsInput>;
  batch?: Maybe<BatchCreateOneWithoutMovementsInput>;
  inventory?: Maybe<InventoryCreateOneWithoutMovementsInput>;
  product: ProductCreateOneWithoutMovementsInput;
  warehouse?: Maybe<WarehouseCreateOneWithoutMovementsInput>;
  interactions?: Maybe<InteractionCreateManyWithoutMovementInput>;
  comments?: Maybe<MessageCreateManyWithoutMovementInput>;
  reservation?: Maybe<ReservationCreateOneWithoutMovementInput>;
  transports?: Maybe<TransportCreateManyWithoutMovementInput>;
  invoice?: Maybe<InvoiceCreateOneWithoutMovementsInput>;
  payments?: Maybe<PaymentCreateManyWithoutMovementInput>;
};

export type PaymentCreateWithoutDocumentsInput = {
  id?: Maybe<Scalars['String']>;
  paymentId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  type: PaymentType;
  status: PaymentStatus;
  dueDate?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  concept?: Maybe<Scalars['String']>;
  amount: Scalars['Float'];
  currency: Scalars['String'];
  recipient?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  paymentMethod?: Maybe<Scalars['String']>;
  stripePaymentIntentId?: Maybe<Scalars['String']>;
  stripeClientSecret?: Maybe<Scalars['String']>;
  group?: Maybe<GroupCreateOneWithoutPaymentsInput>;
  taxRate?: Maybe<TaxRateCreateOneWithoutPaymentsInput>;
  movement?: Maybe<MovementCreateOneWithoutPaymentsInput>;
  transportAgency?: Maybe<TransportAgencyCreateOneWithoutPaymentsInput>;
  client?: Maybe<ClientCreateOneWithoutPaymentsInput>;
  supplier?: Maybe<SupplierCreateOneWithoutPaymentsInput>;
  bankAccount?: Maybe<BankAccountCreateOneWithoutPaymentsInput>;
};

export type SettingUpdateManyWithoutLogoInput = {
  create?: Maybe<Array<SettingCreateWithoutLogoInput>>;
  connect?: Maybe<Array<SettingWhereUniqueInput>>;
  set?: Maybe<Array<SettingWhereUniqueInput>>;
  disconnect?: Maybe<Array<SettingWhereUniqueInput>>;
  delete?: Maybe<Array<SettingWhereUniqueInput>>;
  update?: Maybe<Array<SettingUpdateWithWhereUniqueWithoutLogoInput>>;
  updateMany?: Maybe<Array<SettingUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<SettingScalarWhereInput>>;
  upsert?: Maybe<Array<SettingUpsertWithWhereUniqueWithoutLogoInput>>;
};

export type ManufacturerCreateWithoutContactPersonsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  batches?: Maybe<BatchCreateManyWithoutManufacturerInput>;
  images?: Maybe<FileCreateManyWithoutManufacturerInput>;
  products?: Maybe<ProductCreateManyWithoutManufacturerInput>;
  address?: Maybe<AddressCreateOneWithoutManufacturerInput>;
};

export type SupplierCreateWithoutContactPersonsInput = {
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobile?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  supplierId: Scalars['Int'];
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  address?: Maybe<AddressCreateOneWithoutSupplierAddressInput>;
  billingAddress?: Maybe<AddressCreateOneWithoutSupplierBillingAddressInput>;
  images?: Maybe<FileCreateManyWithoutSupplierInput>;
  interactions?: Maybe<InteractionCreateManyWithoutSupplierInput>;
  inventories?: Maybe<InventoryCreateManyWithoutSupplierInput>;
  movements?: Maybe<MovementCreateManyWithoutSupplierInput>;
  payments?: Maybe<PaymentCreateManyWithoutSupplierInput>;
};

export type TransportAgencyCreateWithoutContactPersonsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  images?: Maybe<FileCreateManyWithoutTransportAgencyInput>;
  transports?: Maybe<TransportCreateManyWithoutTransportAgencyInput>;
  transporters?: Maybe<TransporterCreateManyWithoutTransportAgencyInput>;
  address?: Maybe<AddressCreateOneWithoutTransportAgencyInput>;
  payments?: Maybe<PaymentCreateManyWithoutTransportAgencyInput>;
};

export type WarehouseCreateWithoutContactPersonsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  inventories?: Maybe<InventoryCreateManyWithoutWarehouseInput>;
  movements?: Maybe<MovementCreateManyWithoutWarehouseInput>;
  address?: Maybe<AddressCreateOneWithoutWarehouseInput>;
  Notification?: Maybe<NotificationCreateManyWithoutWarehouseInput>;
};

export type MessageCreateWithoutImagesInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  recipient?: Maybe<Scalars['String']>;
  sender: Scalars['String'];
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  mentions?: Maybe<MessageCreatementionsInput>;
  channel?: Maybe<ChannelCreateOneWithoutMessagesInput>;
  movement?: Maybe<MovementCreateOneWithoutCommentsInput>;
};

export type SupplierCreateWithoutInteractionsInput = {
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobile?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  supplierId: Scalars['Int'];
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  address?: Maybe<AddressCreateOneWithoutSupplierAddressInput>;
  billingAddress?: Maybe<AddressCreateOneWithoutSupplierBillingAddressInput>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutSupplierInput>;
  images?: Maybe<FileCreateManyWithoutSupplierInput>;
  inventories?: Maybe<InventoryCreateManyWithoutSupplierInput>;
  movements?: Maybe<MovementCreateManyWithoutSupplierInput>;
  payments?: Maybe<PaymentCreateManyWithoutSupplierInput>;
};

export type MovementCreateWithoutInteractionsInput = {
  active?: Maybe<Scalars['Boolean']>;
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  date: Scalars['DateTime'];
  id?: Maybe<Scalars['String']>;
  status?: Maybe<MovementStatus>;
  movementId: Scalars['Int'];
  notes?: Maybe<Scalars['String']>;
  sendMail?: Maybe<Scalars['Boolean']>;
  storageNumber?: Maybe<Scalars['String']>;
  type: MovementType;
  unitPrice?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  invoiceId?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  client?: Maybe<ClientCreateOneWithoutMovementsInput>;
  supplier?: Maybe<SupplierCreateOneWithoutMovementsInput>;
  batch?: Maybe<BatchCreateOneWithoutMovementsInput>;
  inventory?: Maybe<InventoryCreateOneWithoutMovementsInput>;
  product: ProductCreateOneWithoutMovementsInput;
  warehouse?: Maybe<WarehouseCreateOneWithoutMovementsInput>;
  comments?: Maybe<MessageCreateManyWithoutMovementInput>;
  reservation?: Maybe<ReservationCreateOneWithoutMovementInput>;
  transports?: Maybe<TransportCreateManyWithoutMovementInput>;
  invoice?: Maybe<InvoiceCreateOneWithoutMovementsInput>;
  documents?: Maybe<FileCreateManyWithoutMovementInput>;
  payments?: Maybe<PaymentCreateManyWithoutMovementInput>;
};

export type ProductCreateWithoutInteractionsInput = {
  id?: Maybe<Scalars['String']>;
  productId: Scalars['Int'];
  ASIN?: Maybe<Scalars['String']>;
  EAN?: Maybe<Scalars['String']>;
  ISBN?: Maybe<Scalars['String']>;
  UPC?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  material?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  isPackaging?: Maybe<Scalars['Boolean']>;
  isListed?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<ProductCreatetagsInput>;
  dimensions?: Maybe<DimensionCreateOneWithoutProductInput>;
  manufacturer?: Maybe<ManufacturerCreateOneWithoutProductsInput>;
  batches?: Maybe<BatchCreateManyWithoutProductInput>;
  images?: Maybe<FileCreateManyWithoutProductInput>;
  inventories?: Maybe<InventoryCreateManyWithoutProductInput>;
  movements?: Maybe<MovementCreateManyWithoutProductInput>;
  notifications?: Maybe<NotificationCreateManyWithoutProductInput>;
  units?: Maybe<UnitCreateManyWithoutProductInput>;
  taxRates?: Maybe<TaxRateCreateManyWithoutProductInput>;
  packaging?: Maybe<ProductCreateManyWithoutPackagedProductInput>;
  variants?: Maybe<ProductCreateManyWithoutVariantProductInput>;
  packagedProduct?: Maybe<ProductCreateOneWithoutPackagingInput>;
  variantProduct?: Maybe<ProductCreateOneWithoutVariantsInput>;
  categories?: Maybe<CategoryCreateManyWithoutProductsInput>;
};

export type SupplierCreateWithoutInventoriesInput = {
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobile?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  supplierId: Scalars['Int'];
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  address?: Maybe<AddressCreateOneWithoutSupplierAddressInput>;
  billingAddress?: Maybe<AddressCreateOneWithoutSupplierBillingAddressInput>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutSupplierInput>;
  images?: Maybe<FileCreateManyWithoutSupplierInput>;
  interactions?: Maybe<InteractionCreateManyWithoutSupplierInput>;
  movements?: Maybe<MovementCreateManyWithoutSupplierInput>;
  payments?: Maybe<PaymentCreateManyWithoutSupplierInput>;
};

export type BatchCreateWithoutInventoriesInput = {
  batchNumber?: Maybe<Scalars['String']>;
  bestBefore?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<ManufacturerCreateOneWithoutBatchesInput>;
  product: ProductCreateOneWithoutBatchesInput;
  movements?: Maybe<MovementCreateManyWithoutBatchInput>;
};

export type ProductCreateWithoutInventoriesInput = {
  id?: Maybe<Scalars['String']>;
  productId: Scalars['Int'];
  ASIN?: Maybe<Scalars['String']>;
  EAN?: Maybe<Scalars['String']>;
  ISBN?: Maybe<Scalars['String']>;
  UPC?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  material?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  isPackaging?: Maybe<Scalars['Boolean']>;
  isListed?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<ProductCreatetagsInput>;
  dimensions?: Maybe<DimensionCreateOneWithoutProductInput>;
  manufacturer?: Maybe<ManufacturerCreateOneWithoutProductsInput>;
  batches?: Maybe<BatchCreateManyWithoutProductInput>;
  images?: Maybe<FileCreateManyWithoutProductInput>;
  interactions?: Maybe<InteractionCreateManyWithoutProductInput>;
  movements?: Maybe<MovementCreateManyWithoutProductInput>;
  notifications?: Maybe<NotificationCreateManyWithoutProductInput>;
  units?: Maybe<UnitCreateManyWithoutProductInput>;
  taxRates?: Maybe<TaxRateCreateManyWithoutProductInput>;
  packaging?: Maybe<ProductCreateManyWithoutPackagedProductInput>;
  variants?: Maybe<ProductCreateManyWithoutVariantProductInput>;
  packagedProduct?: Maybe<ProductCreateOneWithoutPackagingInput>;
  variantProduct?: Maybe<ProductCreateOneWithoutVariantsInput>;
  categories?: Maybe<CategoryCreateManyWithoutProductsInput>;
};

export type WarehouseCreateWithoutInventoriesInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutWarehouseInput>;
  movements?: Maybe<MovementCreateManyWithoutWarehouseInput>;
  address?: Maybe<AddressCreateOneWithoutWarehouseInput>;
  Notification?: Maybe<NotificationCreateManyWithoutWarehouseInput>;
};

export type MovementCreateWithoutInventoryInput = {
  active?: Maybe<Scalars['Boolean']>;
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  date: Scalars['DateTime'];
  id?: Maybe<Scalars['String']>;
  status?: Maybe<MovementStatus>;
  movementId: Scalars['Int'];
  notes?: Maybe<Scalars['String']>;
  sendMail?: Maybe<Scalars['Boolean']>;
  storageNumber?: Maybe<Scalars['String']>;
  type: MovementType;
  unitPrice?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  invoiceId?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  client?: Maybe<ClientCreateOneWithoutMovementsInput>;
  supplier?: Maybe<SupplierCreateOneWithoutMovementsInput>;
  batch?: Maybe<BatchCreateOneWithoutMovementsInput>;
  product: ProductCreateOneWithoutMovementsInput;
  warehouse?: Maybe<WarehouseCreateOneWithoutMovementsInput>;
  interactions?: Maybe<InteractionCreateManyWithoutMovementInput>;
  comments?: Maybe<MessageCreateManyWithoutMovementInput>;
  reservation?: Maybe<ReservationCreateOneWithoutMovementInput>;
  transports?: Maybe<TransportCreateManyWithoutMovementInput>;
  invoice?: Maybe<InvoiceCreateOneWithoutMovementsInput>;
  documents?: Maybe<FileCreateManyWithoutMovementInput>;
  payments?: Maybe<PaymentCreateManyWithoutMovementInput>;
};

export type ReservationCreateWithoutInventoryInput = {
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  notes?: Maybe<Scalars['String']>;
  client: ClientCreateOneWithoutReservationsInput;
  movement: MovementCreateOneWithoutReservationInput;
};

export type MessageCreateWithoutMovementInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  recipient?: Maybe<Scalars['String']>;
  sender: Scalars['String'];
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  mentions?: Maybe<MessageCreatementionsInput>;
  channel?: Maybe<ChannelCreateOneWithoutMessagesInput>;
  images?: Maybe<FileCreateManyWithoutMessageInput>;
};

export type InventoryCreateWithoutReservationsInput = {
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  storageNumber?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  isListed?: Maybe<Scalars['Boolean']>;
  listPrice?: Maybe<Scalars['Float']>;
  supplier?: Maybe<SupplierCreateOneWithoutInventoriesInput>;
  batch?: Maybe<BatchCreateOneWithoutInventoriesInput>;
  product: ProductCreateOneWithoutInventoriesInput;
  warehouse?: Maybe<WarehouseCreateOneWithoutInventoriesInput>;
  movements?: Maybe<MovementCreateManyWithoutInventoryInput>;
  client?: Maybe<ClientCreateOneWithoutInventoriesInput>;
};

export type MovementCreateWithoutReservationInput = {
  active?: Maybe<Scalars['Boolean']>;
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  date: Scalars['DateTime'];
  id?: Maybe<Scalars['String']>;
  status?: Maybe<MovementStatus>;
  movementId: Scalars['Int'];
  notes?: Maybe<Scalars['String']>;
  sendMail?: Maybe<Scalars['Boolean']>;
  storageNumber?: Maybe<Scalars['String']>;
  type: MovementType;
  unitPrice?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  invoiceId?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  client?: Maybe<ClientCreateOneWithoutMovementsInput>;
  supplier?: Maybe<SupplierCreateOneWithoutMovementsInput>;
  batch?: Maybe<BatchCreateOneWithoutMovementsInput>;
  inventory?: Maybe<InventoryCreateOneWithoutMovementsInput>;
  product: ProductCreateOneWithoutMovementsInput;
  warehouse?: Maybe<WarehouseCreateOneWithoutMovementsInput>;
  interactions?: Maybe<InteractionCreateManyWithoutMovementInput>;
  comments?: Maybe<MessageCreateManyWithoutMovementInput>;
  transports?: Maybe<TransportCreateManyWithoutMovementInput>;
  invoice?: Maybe<InvoiceCreateOneWithoutMovementsInput>;
  documents?: Maybe<FileCreateManyWithoutMovementInput>;
  payments?: Maybe<PaymentCreateManyWithoutMovementInput>;
};

export type SupplierCreateWithoutAddressInput = {
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobile?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  supplierId: Scalars['Int'];
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  billingAddress?: Maybe<AddressCreateOneWithoutSupplierBillingAddressInput>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutSupplierInput>;
  images?: Maybe<FileCreateManyWithoutSupplierInput>;
  interactions?: Maybe<InteractionCreateManyWithoutSupplierInput>;
  inventories?: Maybe<InventoryCreateManyWithoutSupplierInput>;
  movements?: Maybe<MovementCreateManyWithoutSupplierInput>;
  payments?: Maybe<PaymentCreateManyWithoutSupplierInput>;
};

export type SupplierCreateWithoutBillingAddressInput = {
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobile?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  supplierId: Scalars['Int'];
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  address?: Maybe<AddressCreateOneWithoutSupplierAddressInput>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutSupplierInput>;
  images?: Maybe<FileCreateManyWithoutSupplierInput>;
  interactions?: Maybe<InteractionCreateManyWithoutSupplierInput>;
  inventories?: Maybe<InventoryCreateManyWithoutSupplierInput>;
  movements?: Maybe<MovementCreateManyWithoutSupplierInput>;
  payments?: Maybe<PaymentCreateManyWithoutSupplierInput>;
};

export type ClientCreateWithoutBillingAddressInput = {
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobile?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  clientId: Scalars['Int'];
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutClientInput>;
  images?: Maybe<FileCreateManyWithoutClientInput>;
  interactions?: Maybe<InteractionCreateManyWithoutClientInput>;
  inventories?: Maybe<InventoryCreateManyWithoutClientInput>;
  movements?: Maybe<MovementCreateManyWithoutClientInput>;
  reservations?: Maybe<ReservationCreateManyWithoutClientInput>;
  address?: Maybe<AddressCreateOneWithoutClientAddressInput>;
  invoices?: Maybe<InvoiceCreateManyWithoutClientInput>;
  payments?: Maybe<PaymentCreateManyWithoutClientInput>;
};

export type SettingCreateWithoutAddressInput = {
  subDomain: Scalars['String'];
  chat?: Maybe<Scalars['Boolean']>;
  currency?: Maybe<Scalars['String']>;
  currencySymbol?: Maybe<Scalars['String']>;
  defaultLanguage?: Maybe<Language>;
  id?: Maybe<Scalars['String']>;
  stripeCustomerId?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  timezone?: Maybe<Scalars['String']>;
  transports?: Maybe<Scalars['Boolean']>;
  plan?: Maybe<AccountPlan>;
  warehouses?: Maybe<Scalars['Boolean']>;
  packaging: Scalars['Boolean'];
  shop?: Maybe<Scalars['Boolean']>;
  accounting?: Maybe<Scalars['Boolean']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  weightUnit?: Maybe<Scalars['String']>;
  lengthUnit?: Maybe<Scalars['String']>;
  manufacturerFields?: Maybe<SettingCreatemanufacturerFieldsInput>;
  movementFields?: Maybe<SettingCreatemovementFieldsInput>;
  supplierFields?: Maybe<SettingCreatesupplierFieldsInput>;
  clientFields?: Maybe<SettingCreateclientFieldsInput>;
  productFields?: Maybe<SettingCreateproductFieldsInput>;
  transportAgencyFields?: Maybe<SettingCreatetransportAgencyFieldsInput>;
  transportFields?: Maybe<SettingCreatetransportFieldsInput>;
  transporterFields?: Maybe<SettingCreatetransporterFieldsInput>;
  paymentFields?: Maybe<SettingCreatepaymentFieldsInput>;
  warehouseFields?: Maybe<SettingCreatewarehouseFieldsInput>;
  logo?: Maybe<FileCreateOneWithoutSettingsInput>;
  presets?: Maybe<PresetCreateManyWithoutSettingInput>;
  billingAddress?: Maybe<AddressCreateOneWithoutBillingAddressInput>;
};

export type SettingCreateWithoutBillingAddressInput = {
  subDomain: Scalars['String'];
  chat?: Maybe<Scalars['Boolean']>;
  currency?: Maybe<Scalars['String']>;
  currencySymbol?: Maybe<Scalars['String']>;
  defaultLanguage?: Maybe<Language>;
  id?: Maybe<Scalars['String']>;
  stripeCustomerId?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  timezone?: Maybe<Scalars['String']>;
  transports?: Maybe<Scalars['Boolean']>;
  plan?: Maybe<AccountPlan>;
  warehouses?: Maybe<Scalars['Boolean']>;
  packaging: Scalars['Boolean'];
  shop?: Maybe<Scalars['Boolean']>;
  accounting?: Maybe<Scalars['Boolean']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  weightUnit?: Maybe<Scalars['String']>;
  lengthUnit?: Maybe<Scalars['String']>;
  manufacturerFields?: Maybe<SettingCreatemanufacturerFieldsInput>;
  movementFields?: Maybe<SettingCreatemovementFieldsInput>;
  supplierFields?: Maybe<SettingCreatesupplierFieldsInput>;
  clientFields?: Maybe<SettingCreateclientFieldsInput>;
  productFields?: Maybe<SettingCreateproductFieldsInput>;
  transportAgencyFields?: Maybe<SettingCreatetransportAgencyFieldsInput>;
  transportFields?: Maybe<SettingCreatetransportFieldsInput>;
  transporterFields?: Maybe<SettingCreatetransporterFieldsInput>;
  paymentFields?: Maybe<SettingCreatepaymentFieldsInput>;
  warehouseFields?: Maybe<SettingCreatewarehouseFieldsInput>;
  logo?: Maybe<FileCreateOneWithoutSettingsInput>;
  presets?: Maybe<PresetCreateManyWithoutSettingInput>;
  address?: Maybe<AddressCreateOneWithoutAddressInput>;
};

export type ManufacturerCreateWithoutAddressInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  batches?: Maybe<BatchCreateManyWithoutManufacturerInput>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutManufacturerInput>;
  images?: Maybe<FileCreateManyWithoutManufacturerInput>;
  products?: Maybe<ProductCreateManyWithoutManufacturerInput>;
};

export type TransportAgencyCreateWithoutAddressInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutTransportAgencyInput>;
  images?: Maybe<FileCreateManyWithoutTransportAgencyInput>;
  transports?: Maybe<TransportCreateManyWithoutTransportAgencyInput>;
  transporters?: Maybe<TransporterCreateManyWithoutTransportAgencyInput>;
  payments?: Maybe<PaymentCreateManyWithoutTransportAgencyInput>;
};

export type WarehouseCreateWithoutAddressInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutWarehouseInput>;
  inventories?: Maybe<InventoryCreateManyWithoutWarehouseInput>;
  movements?: Maybe<MovementCreateManyWithoutWarehouseInput>;
  Notification?: Maybe<NotificationCreateManyWithoutWarehouseInput>;
};

export type ClientCreateWithoutAddressInput = {
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobile?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  clientId: Scalars['Int'];
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutClientInput>;
  images?: Maybe<FileCreateManyWithoutClientInput>;
  interactions?: Maybe<InteractionCreateManyWithoutClientInput>;
  inventories?: Maybe<InventoryCreateManyWithoutClientInput>;
  movements?: Maybe<MovementCreateManyWithoutClientInput>;
  reservations?: Maybe<ReservationCreateManyWithoutClientInput>;
  billingAddress?: Maybe<AddressCreateOneWithoutClientBillingAddressInput>;
  invoices?: Maybe<InvoiceCreateManyWithoutClientInput>;
  payments?: Maybe<PaymentCreateManyWithoutClientInput>;
};

export type FileCreateWithoutInvoiceInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  smallUrl?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  manufacturer?: Maybe<ManufacturerCreateOneWithoutImagesInput>;
  message?: Maybe<MessageCreateOneWithoutImagesInput>;
  client?: Maybe<ClientCreateOneWithoutImagesInput>;
  supplier?: Maybe<SupplierCreateOneWithoutImagesInput>;
  product?: Maybe<ProductCreateOneWithoutImagesInput>;
  transportAgency?: Maybe<TransportAgencyCreateOneWithoutImagesInput>;
  transporter?: Maybe<TransporterCreateOneWithoutImagesInput>;
  settings?: Maybe<SettingCreateManyWithoutLogoInput>;
  imageCategory?: Maybe<CategoryCreateManyWithoutImageInput>;
  bannerCategory?: Maybe<CategoryCreateManyWithoutBannerImageInput>;
  Movement?: Maybe<MovementCreateOneWithoutDocumentsInput>;
  Payment?: Maybe<PaymentCreateOneWithoutDocumentsInput>;
};

export type MovementCreateWithoutInvoiceInput = {
  active?: Maybe<Scalars['Boolean']>;
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  date: Scalars['DateTime'];
  id?: Maybe<Scalars['String']>;
  status?: Maybe<MovementStatus>;
  movementId: Scalars['Int'];
  notes?: Maybe<Scalars['String']>;
  sendMail?: Maybe<Scalars['Boolean']>;
  storageNumber?: Maybe<Scalars['String']>;
  type: MovementType;
  unitPrice?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  invoiceId?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  client?: Maybe<ClientCreateOneWithoutMovementsInput>;
  supplier?: Maybe<SupplierCreateOneWithoutMovementsInput>;
  batch?: Maybe<BatchCreateOneWithoutMovementsInput>;
  inventory?: Maybe<InventoryCreateOneWithoutMovementsInput>;
  product: ProductCreateOneWithoutMovementsInput;
  warehouse?: Maybe<WarehouseCreateOneWithoutMovementsInput>;
  interactions?: Maybe<InteractionCreateManyWithoutMovementInput>;
  comments?: Maybe<MessageCreateManyWithoutMovementInput>;
  reservation?: Maybe<ReservationCreateOneWithoutMovementInput>;
  transports?: Maybe<TransportCreateManyWithoutMovementInput>;
  documents?: Maybe<FileCreateManyWithoutMovementInput>;
  payments?: Maybe<PaymentCreateManyWithoutMovementInput>;
};

export type GroupCreateWithoutPaymentsInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  taxRate?: Maybe<TaxRateCreateOneWithoutGroupInput>;
};

export type TaxRateCreateWithoutPaymentsInput = {
  id?: Maybe<Scalars['String']>;
  amount: Scalars['Float'];
  isSameCountry: Scalars['Boolean'];
  isEU?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  group?: Maybe<GroupCreateOneWithoutTaxRateInput>;
  product?: Maybe<ProductCreateOneWithoutTaxRatesInput>;
};

export type MovementCreateWithoutPaymentsInput = {
  active?: Maybe<Scalars['Boolean']>;
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  date: Scalars['DateTime'];
  id?: Maybe<Scalars['String']>;
  status?: Maybe<MovementStatus>;
  movementId: Scalars['Int'];
  notes?: Maybe<Scalars['String']>;
  sendMail?: Maybe<Scalars['Boolean']>;
  storageNumber?: Maybe<Scalars['String']>;
  type: MovementType;
  unitPrice?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  invoiceId?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  client?: Maybe<ClientCreateOneWithoutMovementsInput>;
  supplier?: Maybe<SupplierCreateOneWithoutMovementsInput>;
  batch?: Maybe<BatchCreateOneWithoutMovementsInput>;
  inventory?: Maybe<InventoryCreateOneWithoutMovementsInput>;
  product: ProductCreateOneWithoutMovementsInput;
  warehouse?: Maybe<WarehouseCreateOneWithoutMovementsInput>;
  interactions?: Maybe<InteractionCreateManyWithoutMovementInput>;
  comments?: Maybe<MessageCreateManyWithoutMovementInput>;
  reservation?: Maybe<ReservationCreateOneWithoutMovementInput>;
  transports?: Maybe<TransportCreateManyWithoutMovementInput>;
  invoice?: Maybe<InvoiceCreateOneWithoutMovementsInput>;
  documents?: Maybe<FileCreateManyWithoutMovementInput>;
};

export type TransportAgencyCreateWithoutPaymentsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutTransportAgencyInput>;
  images?: Maybe<FileCreateManyWithoutTransportAgencyInput>;
  transports?: Maybe<TransportCreateManyWithoutTransportAgencyInput>;
  transporters?: Maybe<TransporterCreateManyWithoutTransportAgencyInput>;
  address?: Maybe<AddressCreateOneWithoutTransportAgencyInput>;
};

export type SupplierCreateWithoutPaymentsInput = {
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobile?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  supplierId: Scalars['Int'];
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  address?: Maybe<AddressCreateOneWithoutSupplierAddressInput>;
  billingAddress?: Maybe<AddressCreateOneWithoutSupplierBillingAddressInput>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutSupplierInput>;
  images?: Maybe<FileCreateManyWithoutSupplierInput>;
  interactions?: Maybe<InteractionCreateManyWithoutSupplierInput>;
  inventories?: Maybe<InventoryCreateManyWithoutSupplierInput>;
  movements?: Maybe<MovementCreateManyWithoutSupplierInput>;
};

export type FileCreateWithoutPaymentInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  smallUrl?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  manufacturer?: Maybe<ManufacturerCreateOneWithoutImagesInput>;
  message?: Maybe<MessageCreateOneWithoutImagesInput>;
  client?: Maybe<ClientCreateOneWithoutImagesInput>;
  supplier?: Maybe<SupplierCreateOneWithoutImagesInput>;
  product?: Maybe<ProductCreateOneWithoutImagesInput>;
  transportAgency?: Maybe<TransportAgencyCreateOneWithoutImagesInput>;
  transporter?: Maybe<TransporterCreateOneWithoutImagesInput>;
  settings?: Maybe<SettingCreateManyWithoutLogoInput>;
  Invoice?: Maybe<InvoiceCreateManyWithoutPdfInput>;
  imageCategory?: Maybe<CategoryCreateManyWithoutImageInput>;
  bannerCategory?: Maybe<CategoryCreateManyWithoutBannerImageInput>;
  Movement?: Maybe<MovementCreateOneWithoutDocumentsInput>;
};

export type BankAccountCreateWithoutPaymentsInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type ManufacturerUpdateOneWithoutContactPersonsInput = {
  create?: Maybe<ManufacturerCreateWithoutContactPersonsInput>;
  connect?: Maybe<ManufacturerWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ManufacturerUpdateWithoutContactPersonsDataInput>;
  upsert?: Maybe<ManufacturerUpsertWithoutContactPersonsInput>;
};

export type SupplierUpdateOneWithoutContactPersonsInput = {
  create?: Maybe<SupplierCreateWithoutContactPersonsInput>;
  connect?: Maybe<SupplierWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<SupplierUpdateWithoutContactPersonsDataInput>;
  upsert?: Maybe<SupplierUpsertWithoutContactPersonsInput>;
};

export type TransportAgencyUpdateOneWithoutContactPersonsInput = {
  create?: Maybe<TransportAgencyCreateWithoutContactPersonsInput>;
  connect?: Maybe<TransportAgencyWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<TransportAgencyUpdateWithoutContactPersonsDataInput>;
  upsert?: Maybe<TransportAgencyUpsertWithoutContactPersonsInput>;
};

export type WarehouseUpdateOneWithoutContactPersonsInput = {
  create?: Maybe<WarehouseCreateWithoutContactPersonsInput>;
  connect?: Maybe<WarehouseWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<WarehouseUpdateWithoutContactPersonsDataInput>;
  upsert?: Maybe<WarehouseUpsertWithoutContactPersonsInput>;
};

export type SupplierUpdateOneWithoutInteractionsInput = {
  create?: Maybe<SupplierCreateWithoutInteractionsInput>;
  connect?: Maybe<SupplierWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<SupplierUpdateWithoutInteractionsDataInput>;
  upsert?: Maybe<SupplierUpsertWithoutInteractionsInput>;
};

export type MovementUpdateOneWithoutInteractionsInput = {
  create?: Maybe<MovementCreateWithoutInteractionsInput>;
  connect?: Maybe<MovementWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<MovementUpdateWithoutInteractionsDataInput>;
  upsert?: Maybe<MovementUpsertWithoutInteractionsInput>;
};

export type ProductUpdateOneWithoutInteractionsInput = {
  create?: Maybe<ProductCreateWithoutInteractionsInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ProductUpdateWithoutInteractionsDataInput>;
  upsert?: Maybe<ProductUpsertWithoutInteractionsInput>;
};

export type SupplierUpdateOneWithoutInventoriesInput = {
  create?: Maybe<SupplierCreateWithoutInventoriesInput>;
  connect?: Maybe<SupplierWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<SupplierUpdateWithoutInventoriesDataInput>;
  upsert?: Maybe<SupplierUpsertWithoutInventoriesInput>;
};

export type BatchUpdateOneWithoutInventoriesInput = {
  create?: Maybe<BatchCreateWithoutInventoriesInput>;
  connect?: Maybe<BatchWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<BatchUpdateWithoutInventoriesDataInput>;
  upsert?: Maybe<BatchUpsertWithoutInventoriesInput>;
};

export type ProductUpdateOneRequiredWithoutInventoriesInput = {
  create?: Maybe<ProductCreateWithoutInventoriesInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
  update?: Maybe<ProductUpdateWithoutInventoriesDataInput>;
  upsert?: Maybe<ProductUpsertWithoutInventoriesInput>;
};

export type WarehouseUpdateOneWithoutInventoriesInput = {
  create?: Maybe<WarehouseCreateWithoutInventoriesInput>;
  connect?: Maybe<WarehouseWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<WarehouseUpdateWithoutInventoriesDataInput>;
  upsert?: Maybe<WarehouseUpsertWithoutInventoriesInput>;
};

export type MovementUpdateManyWithoutInventoryInput = {
  create?: Maybe<Array<MovementCreateWithoutInventoryInput>>;
  connect?: Maybe<Array<MovementWhereUniqueInput>>;
  set?: Maybe<Array<MovementWhereUniqueInput>>;
  disconnect?: Maybe<Array<MovementWhereUniqueInput>>;
  delete?: Maybe<Array<MovementWhereUniqueInput>>;
  update?: Maybe<Array<MovementUpdateWithWhereUniqueWithoutInventoryInput>>;
  updateMany?: Maybe<Array<MovementUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<MovementScalarWhereInput>>;
  upsert?: Maybe<Array<MovementUpsertWithWhereUniqueWithoutInventoryInput>>;
};

export type ReservationUpdateManyWithoutInventoryInput = {
  create?: Maybe<Array<ReservationCreateWithoutInventoryInput>>;
  connect?: Maybe<Array<ReservationWhereUniqueInput>>;
  set?: Maybe<Array<ReservationWhereUniqueInput>>;
  disconnect?: Maybe<Array<ReservationWhereUniqueInput>>;
  delete?: Maybe<Array<ReservationWhereUniqueInput>>;
  update?: Maybe<Array<ReservationUpdateWithWhereUniqueWithoutInventoryInput>>;
  updateMany?: Maybe<Array<ReservationUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<ReservationScalarWhereInput>>;
  upsert?: Maybe<Array<ReservationUpsertWithWhereUniqueWithoutInventoryInput>>;
};

export type MessageUpdateManyWithoutMovementInput = {
  create?: Maybe<Array<MessageCreateWithoutMovementInput>>;
  connect?: Maybe<Array<MessageWhereUniqueInput>>;
  set?: Maybe<Array<MessageWhereUniqueInput>>;
  disconnect?: Maybe<Array<MessageWhereUniqueInput>>;
  delete?: Maybe<Array<MessageWhereUniqueInput>>;
  update?: Maybe<Array<MessageUpdateWithWhereUniqueWithoutMovementInput>>;
  updateMany?: Maybe<Array<MessageUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<MessageScalarWhereInput>>;
  upsert?: Maybe<Array<MessageUpsertWithWhereUniqueWithoutMovementInput>>;
};

export type InventoryUpdateOneWithoutReservationsInput = {
  create?: Maybe<InventoryCreateWithoutReservationsInput>;
  connect?: Maybe<InventoryWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<InventoryUpdateWithoutReservationsDataInput>;
  upsert?: Maybe<InventoryUpsertWithoutReservationsInput>;
};

export type MovementUpdateOneRequiredWithoutReservationInput = {
  create?: Maybe<MovementCreateWithoutReservationInput>;
  connect?: Maybe<MovementWhereUniqueInput>;
  update?: Maybe<MovementUpdateWithoutReservationDataInput>;
  upsert?: Maybe<MovementUpsertWithoutReservationInput>;
};

export type SupplierUpdateWithoutAddressDataInput = {
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  supplierId?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  billingAddress?: Maybe<AddressUpdateOneWithoutSupplierBillingAddressInput>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutSupplierInput>;
  images?: Maybe<FileUpdateManyWithoutSupplierInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutSupplierInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutSupplierInput>;
  movements?: Maybe<MovementUpdateManyWithoutSupplierInput>;
  payments?: Maybe<PaymentUpdateManyWithoutSupplierInput>;
};

export type SupplierUpsertWithoutAddressInput = {
  update: SupplierUpdateWithoutAddressDataInput;
  create: SupplierCreateWithoutAddressInput;
};

export type SupplierUpdateWithoutBillingAddressDataInput = {
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  supplierId?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  address?: Maybe<AddressUpdateOneWithoutSupplierAddressInput>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutSupplierInput>;
  images?: Maybe<FileUpdateManyWithoutSupplierInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutSupplierInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutSupplierInput>;
  movements?: Maybe<MovementUpdateManyWithoutSupplierInput>;
  payments?: Maybe<PaymentUpdateManyWithoutSupplierInput>;
};

export type SupplierUpsertWithoutBillingAddressInput = {
  update: SupplierUpdateWithoutBillingAddressDataInput;
  create: SupplierCreateWithoutBillingAddressInput;
};

export type ClientUpdateWithoutBillingAddressDataInput = {
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutClientInput>;
  images?: Maybe<FileUpdateManyWithoutClientInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutClientInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutClientInput>;
  movements?: Maybe<MovementUpdateManyWithoutClientInput>;
  reservations?: Maybe<ReservationUpdateManyWithoutClientInput>;
  address?: Maybe<AddressUpdateOneWithoutClientAddressInput>;
  invoices?: Maybe<InvoiceUpdateManyWithoutClientInput>;
  payments?: Maybe<PaymentUpdateManyWithoutClientInput>;
};

export type ClientUpsertWithoutBillingAddressInput = {
  update: ClientUpdateWithoutBillingAddressDataInput;
  create: ClientCreateWithoutBillingAddressInput;
};

export type SettingUpdateWithoutAddressDataInput = {
  subDomain?: Maybe<Scalars['String']>;
  chat?: Maybe<Scalars['Boolean']>;
  currency?: Maybe<Scalars['String']>;
  currencySymbol?: Maybe<Scalars['String']>;
  defaultLanguage?: Maybe<Language>;
  id?: Maybe<Scalars['String']>;
  stripeCustomerId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  transports?: Maybe<Scalars['Boolean']>;
  plan?: Maybe<AccountPlan>;
  warehouses?: Maybe<Scalars['Boolean']>;
  packaging?: Maybe<Scalars['Boolean']>;
  shop?: Maybe<Scalars['Boolean']>;
  accounting?: Maybe<Scalars['Boolean']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  weightUnit?: Maybe<Scalars['String']>;
  lengthUnit?: Maybe<Scalars['String']>;
  manufacturerFields?: Maybe<SettingUpdatemanufacturerFieldsInput>;
  movementFields?: Maybe<SettingUpdatemovementFieldsInput>;
  supplierFields?: Maybe<SettingUpdatesupplierFieldsInput>;
  clientFields?: Maybe<SettingUpdateclientFieldsInput>;
  productFields?: Maybe<SettingUpdateproductFieldsInput>;
  transportAgencyFields?: Maybe<SettingUpdatetransportAgencyFieldsInput>;
  transportFields?: Maybe<SettingUpdatetransportFieldsInput>;
  transporterFields?: Maybe<SettingUpdatetransporterFieldsInput>;
  paymentFields?: Maybe<SettingUpdatepaymentFieldsInput>;
  warehouseFields?: Maybe<SettingUpdatewarehouseFieldsInput>;
  logo?: Maybe<FileUpdateOneWithoutSettingsInput>;
  presets?: Maybe<PresetUpdateManyWithoutSettingInput>;
  billingAddress?: Maybe<AddressUpdateOneWithoutBillingAddressInput>;
};

export type SettingUpsertWithoutAddressInput = {
  update: SettingUpdateWithoutAddressDataInput;
  create: SettingCreateWithoutAddressInput;
};

export type SettingUpdateWithoutBillingAddressDataInput = {
  subDomain?: Maybe<Scalars['String']>;
  chat?: Maybe<Scalars['Boolean']>;
  currency?: Maybe<Scalars['String']>;
  currencySymbol?: Maybe<Scalars['String']>;
  defaultLanguage?: Maybe<Language>;
  id?: Maybe<Scalars['String']>;
  stripeCustomerId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  transports?: Maybe<Scalars['Boolean']>;
  plan?: Maybe<AccountPlan>;
  warehouses?: Maybe<Scalars['Boolean']>;
  packaging?: Maybe<Scalars['Boolean']>;
  shop?: Maybe<Scalars['Boolean']>;
  accounting?: Maybe<Scalars['Boolean']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  weightUnit?: Maybe<Scalars['String']>;
  lengthUnit?: Maybe<Scalars['String']>;
  manufacturerFields?: Maybe<SettingUpdatemanufacturerFieldsInput>;
  movementFields?: Maybe<SettingUpdatemovementFieldsInput>;
  supplierFields?: Maybe<SettingUpdatesupplierFieldsInput>;
  clientFields?: Maybe<SettingUpdateclientFieldsInput>;
  productFields?: Maybe<SettingUpdateproductFieldsInput>;
  transportAgencyFields?: Maybe<SettingUpdatetransportAgencyFieldsInput>;
  transportFields?: Maybe<SettingUpdatetransportFieldsInput>;
  transporterFields?: Maybe<SettingUpdatetransporterFieldsInput>;
  paymentFields?: Maybe<SettingUpdatepaymentFieldsInput>;
  warehouseFields?: Maybe<SettingUpdatewarehouseFieldsInput>;
  logo?: Maybe<FileUpdateOneWithoutSettingsInput>;
  presets?: Maybe<PresetUpdateManyWithoutSettingInput>;
  address?: Maybe<AddressUpdateOneWithoutAddressInput>;
};

export type SettingUpsertWithoutBillingAddressInput = {
  update: SettingUpdateWithoutBillingAddressDataInput;
  create: SettingCreateWithoutBillingAddressInput;
};

export type ManufacturerUpdateWithWhereUniqueWithoutAddressInput = {
  where: ManufacturerWhereUniqueInput;
  data: ManufacturerUpdateWithoutAddressDataInput;
};

export type ManufacturerUpdateManyWithWhereNestedInput = {
  where: ManufacturerScalarWhereInput;
  data: ManufacturerUpdateManyDataInput;
};

export type ManufacturerScalarWhereInput = {
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<NullableStringFilter>;
  fiscalNumber?: Maybe<NullableStringFilter>;
  id?: Maybe<StringFilter>;
  mobile?: Maybe<NullableStringFilter>;
  name?: Maybe<StringFilter>;
  phone?: Maybe<NullableStringFilter>;
  website?: Maybe<NullableStringFilter>;
  batches?: Maybe<BatchFilter>;
  contactPersons?: Maybe<ContactPersonFilter>;
  images?: Maybe<FileFilter>;
  products?: Maybe<ProductFilter>;
  addressId?: Maybe<NullableStringFilter>;
  source?: Maybe<NullableStringFilter>;
  notes?: Maybe<NullableStringFilter>;
  AND?: Maybe<Array<ManufacturerScalarWhereInput>>;
  OR?: Maybe<Array<ManufacturerScalarWhereInput>>;
  NOT?: Maybe<Array<ManufacturerScalarWhereInput>>;
};

export type ManufacturerUpsertWithWhereUniqueWithoutAddressInput = {
  where: ManufacturerWhereUniqueInput;
  update: ManufacturerUpdateWithoutAddressDataInput;
  create: ManufacturerCreateWithoutAddressInput;
};

export type TransportAgencyUpdateWithWhereUniqueWithoutAddressInput = {
  where: TransportAgencyWhereUniqueInput;
  data: TransportAgencyUpdateWithoutAddressDataInput;
};

export type TransportAgencyUpdateManyWithWhereNestedInput = {
  where: TransportAgencyScalarWhereInput;
  data: TransportAgencyUpdateManyDataInput;
};

export type TransportAgencyScalarWhereInput = {
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<NullableStringFilter>;
  id?: Maybe<StringFilter>;
  mobile?: Maybe<NullableStringFilter>;
  name?: Maybe<StringFilter>;
  phone?: Maybe<NullableStringFilter>;
  website?: Maybe<NullableStringFilter>;
  contactPersons?: Maybe<ContactPersonFilter>;
  images?: Maybe<FileFilter>;
  transports?: Maybe<TransportFilter>;
  transporters?: Maybe<TransporterFilter>;
  addressId?: Maybe<NullableStringFilter>;
  source?: Maybe<NullableStringFilter>;
  notes?: Maybe<NullableStringFilter>;
  payments?: Maybe<PaymentFilter>;
  AND?: Maybe<Array<TransportAgencyScalarWhereInput>>;
  OR?: Maybe<Array<TransportAgencyScalarWhereInput>>;
  NOT?: Maybe<Array<TransportAgencyScalarWhereInput>>;
};

export type TransportAgencyUpsertWithWhereUniqueWithoutAddressInput = {
  where: TransportAgencyWhereUniqueInput;
  update: TransportAgencyUpdateWithoutAddressDataInput;
  create: TransportAgencyCreateWithoutAddressInput;
};

export type WarehouseUpdateWithWhereUniqueWithoutAddressInput = {
  where: WarehouseWhereUniqueInput;
  data: WarehouseUpdateWithoutAddressDataInput;
};

export type WarehouseUpdateManyWithWhereNestedInput = {
  where: WarehouseScalarWhereInput;
  data: WarehouseUpdateManyDataInput;
};

export type WarehouseScalarWhereInput = {
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<NullableStringFilter>;
  id?: Maybe<StringFilter>;
  mobile?: Maybe<NullableStringFilter>;
  name?: Maybe<StringFilter>;
  phone?: Maybe<NullableStringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  website?: Maybe<NullableStringFilter>;
  contactPersons?: Maybe<ContactPersonFilter>;
  inventories?: Maybe<InventoryFilter>;
  movements?: Maybe<MovementFilter>;
  addressId?: Maybe<NullableStringFilter>;
  Notification?: Maybe<NotificationFilter>;
  notes?: Maybe<NullableStringFilter>;
  AND?: Maybe<Array<WarehouseScalarWhereInput>>;
  OR?: Maybe<Array<WarehouseScalarWhereInput>>;
  NOT?: Maybe<Array<WarehouseScalarWhereInput>>;
};

export type WarehouseUpsertWithWhereUniqueWithoutAddressInput = {
  where: WarehouseWhereUniqueInput;
  update: WarehouseUpdateWithoutAddressDataInput;
  create: WarehouseCreateWithoutAddressInput;
};

export type ClientUpdateWithoutAddressDataInput = {
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutClientInput>;
  images?: Maybe<FileUpdateManyWithoutClientInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutClientInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutClientInput>;
  movements?: Maybe<MovementUpdateManyWithoutClientInput>;
  reservations?: Maybe<ReservationUpdateManyWithoutClientInput>;
  billingAddress?: Maybe<AddressUpdateOneWithoutClientBillingAddressInput>;
  invoices?: Maybe<InvoiceUpdateManyWithoutClientInput>;
  payments?: Maybe<PaymentUpdateManyWithoutClientInput>;
};

export type ClientUpsertWithoutAddressInput = {
  update: ClientUpdateWithoutAddressDataInput;
  create: ClientCreateWithoutAddressInput;
};

export type FileUpdateOneRequiredWithoutInvoiceInput = {
  create?: Maybe<FileCreateWithoutInvoiceInput>;
  connect?: Maybe<FileWhereUniqueInput>;
  update?: Maybe<FileUpdateWithoutInvoiceDataInput>;
  upsert?: Maybe<FileUpsertWithoutInvoiceInput>;
};

export type MovementUpdateManyWithoutInvoiceInput = {
  create?: Maybe<Array<MovementCreateWithoutInvoiceInput>>;
  connect?: Maybe<Array<MovementWhereUniqueInput>>;
  set?: Maybe<Array<MovementWhereUniqueInput>>;
  disconnect?: Maybe<Array<MovementWhereUniqueInput>>;
  delete?: Maybe<Array<MovementWhereUniqueInput>>;
  update?: Maybe<Array<MovementUpdateWithWhereUniqueWithoutInvoiceInput>>;
  updateMany?: Maybe<Array<MovementUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<MovementScalarWhereInput>>;
  upsert?: Maybe<Array<MovementUpsertWithWhereUniqueWithoutInvoiceInput>>;
};

export type GroupUpdateOneWithoutPaymentsInput = {
  create?: Maybe<GroupCreateWithoutPaymentsInput>;
  connect?: Maybe<GroupWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<GroupUpdateWithoutPaymentsDataInput>;
  upsert?: Maybe<GroupUpsertWithoutPaymentsInput>;
};

export type TaxRateUpdateOneWithoutPaymentsInput = {
  create?: Maybe<TaxRateCreateWithoutPaymentsInput>;
  connect?: Maybe<TaxRateWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<TaxRateUpdateWithoutPaymentsDataInput>;
  upsert?: Maybe<TaxRateUpsertWithoutPaymentsInput>;
};

export type MovementUpdateOneWithoutPaymentsInput = {
  create?: Maybe<MovementCreateWithoutPaymentsInput>;
  connect?: Maybe<MovementWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<MovementUpdateWithoutPaymentsDataInput>;
  upsert?: Maybe<MovementUpsertWithoutPaymentsInput>;
};

export type TransportAgencyUpdateOneWithoutPaymentsInput = {
  create?: Maybe<TransportAgencyCreateWithoutPaymentsInput>;
  connect?: Maybe<TransportAgencyWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<TransportAgencyUpdateWithoutPaymentsDataInput>;
  upsert?: Maybe<TransportAgencyUpsertWithoutPaymentsInput>;
};

export type SupplierUpdateOneWithoutPaymentsInput = {
  create?: Maybe<SupplierCreateWithoutPaymentsInput>;
  connect?: Maybe<SupplierWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<SupplierUpdateWithoutPaymentsDataInput>;
  upsert?: Maybe<SupplierUpsertWithoutPaymentsInput>;
};

export type FileUpdateManyWithoutPaymentInput = {
  create?: Maybe<Array<FileCreateWithoutPaymentInput>>;
  connect?: Maybe<Array<FileWhereUniqueInput>>;
  set?: Maybe<Array<FileWhereUniqueInput>>;
  disconnect?: Maybe<Array<FileWhereUniqueInput>>;
  delete?: Maybe<Array<FileWhereUniqueInput>>;
  update?: Maybe<Array<FileUpdateWithWhereUniqueWithoutPaymentInput>>;
  updateMany?: Maybe<Array<FileUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<FileScalarWhereInput>>;
  upsert?: Maybe<Array<FileUpsertWithWhereUniqueWithoutPaymentInput>>;
};

export type BankAccountUpdateOneWithoutPaymentsInput = {
  create?: Maybe<BankAccountCreateWithoutPaymentsInput>;
  connect?: Maybe<BankAccountWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<BankAccountUpdateWithoutPaymentsDataInput>;
  upsert?: Maybe<BankAccountUpsertWithoutPaymentsInput>;
};

export type ClientCreateWithoutContactPersonsInput = {
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobile?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  clientId: Scalars['Int'];
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  images?: Maybe<FileCreateManyWithoutClientInput>;
  interactions?: Maybe<InteractionCreateManyWithoutClientInput>;
  inventories?: Maybe<InventoryCreateManyWithoutClientInput>;
  movements?: Maybe<MovementCreateManyWithoutClientInput>;
  reservations?: Maybe<ReservationCreateManyWithoutClientInput>;
  address?: Maybe<AddressCreateOneWithoutClientAddressInput>;
  billingAddress?: Maybe<AddressCreateOneWithoutClientBillingAddressInput>;
  invoices?: Maybe<InvoiceCreateManyWithoutClientInput>;
  payments?: Maybe<PaymentCreateManyWithoutClientInput>;
};

export type MovementCreateWithoutTransportsInput = {
  active?: Maybe<Scalars['Boolean']>;
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  date: Scalars['DateTime'];
  id?: Maybe<Scalars['String']>;
  status?: Maybe<MovementStatus>;
  movementId: Scalars['Int'];
  notes?: Maybe<Scalars['String']>;
  sendMail?: Maybe<Scalars['Boolean']>;
  storageNumber?: Maybe<Scalars['String']>;
  type: MovementType;
  unitPrice?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  invoiceId?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  client?: Maybe<ClientCreateOneWithoutMovementsInput>;
  supplier?: Maybe<SupplierCreateOneWithoutMovementsInput>;
  batch?: Maybe<BatchCreateOneWithoutMovementsInput>;
  inventory?: Maybe<InventoryCreateOneWithoutMovementsInput>;
  product: ProductCreateOneWithoutMovementsInput;
  warehouse?: Maybe<WarehouseCreateOneWithoutMovementsInput>;
  interactions?: Maybe<InteractionCreateManyWithoutMovementInput>;
  comments?: Maybe<MessageCreateManyWithoutMovementInput>;
  reservation?: Maybe<ReservationCreateOneWithoutMovementInput>;
  invoice?: Maybe<InvoiceCreateOneWithoutMovementsInput>;
  documents?: Maybe<FileCreateManyWithoutMovementInput>;
  payments?: Maybe<PaymentCreateManyWithoutMovementInput>;
};

export type TransporterCreateWithoutTransportsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type: TransportType;
  notes?: Maybe<Scalars['String']>;
  identifications?: Maybe<TransporterCreateidentificationsInput>;
  transportAgency?: Maybe<TransportAgencyCreateOneWithoutTransportersInput>;
  images?: Maybe<FileCreateManyWithoutTransporterInput>;
};

export type FileCreateWithoutTransporterInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  smallUrl?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  manufacturer?: Maybe<ManufacturerCreateOneWithoutImagesInput>;
  message?: Maybe<MessageCreateOneWithoutImagesInput>;
  client?: Maybe<ClientCreateOneWithoutImagesInput>;
  supplier?: Maybe<SupplierCreateOneWithoutImagesInput>;
  product?: Maybe<ProductCreateOneWithoutImagesInput>;
  transportAgency?: Maybe<TransportAgencyCreateOneWithoutImagesInput>;
  settings?: Maybe<SettingCreateManyWithoutLogoInput>;
  Invoice?: Maybe<InvoiceCreateManyWithoutPdfInput>;
  imageCategory?: Maybe<CategoryCreateManyWithoutImageInput>;
  bannerCategory?: Maybe<CategoryCreateManyWithoutBannerImageInput>;
  Movement?: Maybe<MovementCreateOneWithoutDocumentsInput>;
  Payment?: Maybe<PaymentCreateOneWithoutDocumentsInput>;
};

export type TransportCreateWithoutTransporterInput = {
  arrivalDate?: Maybe<Scalars['DateTime']>;
  arrivalPoint?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  notes?: Maybe<Scalars['String']>;
  movement?: Maybe<MovementCreateOneWithoutTransportsInput>;
  transportAgency?: Maybe<TransportAgencyCreateOneWithoutTransportsInput>;
};

export type ClientCreateWithoutPaymentsInput = {
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobile?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  clientId: Scalars['Int'];
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutClientInput>;
  images?: Maybe<FileCreateManyWithoutClientInput>;
  interactions?: Maybe<InteractionCreateManyWithoutClientInput>;
  inventories?: Maybe<InventoryCreateManyWithoutClientInput>;
  movements?: Maybe<MovementCreateManyWithoutClientInput>;
  reservations?: Maybe<ReservationCreateManyWithoutClientInput>;
  address?: Maybe<AddressCreateOneWithoutClientAddressInput>;
  billingAddress?: Maybe<AddressCreateOneWithoutClientBillingAddressInput>;
  invoices?: Maybe<InvoiceCreateManyWithoutClientInput>;
};

export type ClientUpdateOneWithoutContactPersonsInput = {
  create?: Maybe<ClientCreateWithoutContactPersonsInput>;
  connect?: Maybe<ClientWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ClientUpdateWithoutContactPersonsDataInput>;
  upsert?: Maybe<ClientUpsertWithoutContactPersonsInput>;
};

export type MovementUpdateOneWithoutTransportsInput = {
  create?: Maybe<MovementCreateWithoutTransportsInput>;
  connect?: Maybe<MovementWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<MovementUpdateWithoutTransportsDataInput>;
  upsert?: Maybe<MovementUpsertWithoutTransportsInput>;
};

export type TransporterUpdateOneWithoutTransportsInput = {
  create?: Maybe<TransporterCreateWithoutTransportsInput>;
  connect?: Maybe<TransporterWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<TransporterUpdateWithoutTransportsDataInput>;
  upsert?: Maybe<TransporterUpsertWithoutTransportsInput>;
};

export type TransporterUpdateidentificationsInput = {
  set?: Maybe<Array<Scalars['String']>>;
};

export type FileUpdateManyWithoutTransporterInput = {
  create?: Maybe<Array<FileCreateWithoutTransporterInput>>;
  connect?: Maybe<Array<FileWhereUniqueInput>>;
  set?: Maybe<Array<FileWhereUniqueInput>>;
  disconnect?: Maybe<Array<FileWhereUniqueInput>>;
  delete?: Maybe<Array<FileWhereUniqueInput>>;
  update?: Maybe<Array<FileUpdateWithWhereUniqueWithoutTransporterInput>>;
  updateMany?: Maybe<Array<FileUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<FileScalarWhereInput>>;
  upsert?: Maybe<Array<FileUpsertWithWhereUniqueWithoutTransporterInput>>;
};

export type TransportUpdateManyWithoutTransporterInput = {
  create?: Maybe<Array<TransportCreateWithoutTransporterInput>>;
  connect?: Maybe<Array<TransportWhereUniqueInput>>;
  set?: Maybe<Array<TransportWhereUniqueInput>>;
  disconnect?: Maybe<Array<TransportWhereUniqueInput>>;
  delete?: Maybe<Array<TransportWhereUniqueInput>>;
  update?: Maybe<Array<TransportUpdateWithWhereUniqueWithoutTransporterInput>>;
  updateMany?: Maybe<Array<TransportUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<TransportScalarWhereInput>>;
  upsert?: Maybe<Array<TransportUpsertWithWhereUniqueWithoutTransporterInput>>;
};

export type ClientUpdateOneWithoutPaymentsInput = {
  create?: Maybe<ClientCreateWithoutPaymentsInput>;
  connect?: Maybe<ClientWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ClientUpdateWithoutPaymentsDataInput>;
  upsert?: Maybe<ClientUpsertWithoutPaymentsInput>;
};

export type ClientCreateWithoutInventoriesInput = {
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobile?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  clientId: Scalars['Int'];
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutClientInput>;
  images?: Maybe<FileCreateManyWithoutClientInput>;
  interactions?: Maybe<InteractionCreateManyWithoutClientInput>;
  movements?: Maybe<MovementCreateManyWithoutClientInput>;
  reservations?: Maybe<ReservationCreateManyWithoutClientInput>;
  address?: Maybe<AddressCreateOneWithoutClientAddressInput>;
  billingAddress?: Maybe<AddressCreateOneWithoutClientBillingAddressInput>;
  invoices?: Maybe<InvoiceCreateManyWithoutClientInput>;
  payments?: Maybe<PaymentCreateManyWithoutClientInput>;
};

export type ClientUpdateOneWithoutInventoriesInput = {
  create?: Maybe<ClientCreateWithoutInventoriesInput>;
  connect?: Maybe<ClientWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ClientUpdateWithoutInventoriesDataInput>;
  upsert?: Maybe<ClientUpsertWithoutInventoriesInput>;
};

export type BatchCreateWithoutManufacturerInput = {
  batchNumber?: Maybe<Scalars['String']>;
  bestBefore?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  product: ProductCreateOneWithoutBatchesInput;
  inventories?: Maybe<InventoryCreateManyWithoutBatchInput>;
  movements?: Maybe<MovementCreateManyWithoutBatchInput>;
};

export type ContactPersonCreateWithoutManufacturerInput = {
  active?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  scheduleEnd?: Maybe<Scalars['DateTime']>;
  scheduleStart?: Maybe<Scalars['DateTime']>;
  notes?: Maybe<Scalars['String']>;
  supplier?: Maybe<SupplierCreateOneWithoutContactPersonsInput>;
  client?: Maybe<ClientCreateOneWithoutContactPersonsInput>;
  transportAgency?: Maybe<TransportAgencyCreateOneWithoutContactPersonsInput>;
  warehouse?: Maybe<WarehouseCreateOneWithoutContactPersonsInput>;
};

export type FileCreateWithoutManufacturerInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  smallUrl?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  message?: Maybe<MessageCreateOneWithoutImagesInput>;
  client?: Maybe<ClientCreateOneWithoutImagesInput>;
  supplier?: Maybe<SupplierCreateOneWithoutImagesInput>;
  product?: Maybe<ProductCreateOneWithoutImagesInput>;
  transportAgency?: Maybe<TransportAgencyCreateOneWithoutImagesInput>;
  transporter?: Maybe<TransporterCreateOneWithoutImagesInput>;
  settings?: Maybe<SettingCreateManyWithoutLogoInput>;
  Invoice?: Maybe<InvoiceCreateManyWithoutPdfInput>;
  imageCategory?: Maybe<CategoryCreateManyWithoutImageInput>;
  bannerCategory?: Maybe<CategoryCreateManyWithoutBannerImageInput>;
  Movement?: Maybe<MovementCreateOneWithoutDocumentsInput>;
  Payment?: Maybe<PaymentCreateOneWithoutDocumentsInput>;
};

export type AddressCreateWithoutManufacturerInput = {
  id?: Maybe<Scalars['String']>;
  addressLine1?: Maybe<Scalars['String']>;
  addressLine2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  supplierAddress?: Maybe<SupplierCreateOneWithoutAddressInput>;
  supplierBillingAddress?: Maybe<SupplierCreateOneWithoutBillingAddressInput>;
  clientAddress?: Maybe<ClientCreateOneWithoutAddressInput>;
  clientBillingAddress?: Maybe<ClientCreateOneWithoutBillingAddressInput>;
  address?: Maybe<SettingCreateOneWithoutAddressInput>;
  billingAddress?: Maybe<SettingCreateOneWithoutBillingAddressInput>;
  TransportAgency?: Maybe<TransportAgencyCreateManyWithoutAddressInput>;
  Warehouse?: Maybe<WarehouseCreateManyWithoutAddressInput>;
};

export type ManufacturerCreateWithoutBatchesInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutManufacturerInput>;
  images?: Maybe<FileCreateManyWithoutManufacturerInput>;
  products?: Maybe<ProductCreateManyWithoutManufacturerInput>;
  address?: Maybe<AddressCreateOneWithoutManufacturerInput>;
};

export type InventoryCreateWithoutBatchInput = {
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  storageNumber?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  isListed?: Maybe<Scalars['Boolean']>;
  listPrice?: Maybe<Scalars['Float']>;
  supplier?: Maybe<SupplierCreateOneWithoutInventoriesInput>;
  product: ProductCreateOneWithoutInventoriesInput;
  warehouse?: Maybe<WarehouseCreateOneWithoutInventoriesInput>;
  movements?: Maybe<MovementCreateManyWithoutInventoryInput>;
  reservations?: Maybe<ReservationCreateManyWithoutInventoryInput>;
  client?: Maybe<ClientCreateOneWithoutInventoriesInput>;
};

export type MovementCreateWithoutBatchInput = {
  active?: Maybe<Scalars['Boolean']>;
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  date: Scalars['DateTime'];
  id?: Maybe<Scalars['String']>;
  status?: Maybe<MovementStatus>;
  movementId: Scalars['Int'];
  notes?: Maybe<Scalars['String']>;
  sendMail?: Maybe<Scalars['Boolean']>;
  storageNumber?: Maybe<Scalars['String']>;
  type: MovementType;
  unitPrice?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  invoiceId?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  client?: Maybe<ClientCreateOneWithoutMovementsInput>;
  supplier?: Maybe<SupplierCreateOneWithoutMovementsInput>;
  inventory?: Maybe<InventoryCreateOneWithoutMovementsInput>;
  product: ProductCreateOneWithoutMovementsInput;
  warehouse?: Maybe<WarehouseCreateOneWithoutMovementsInput>;
  interactions?: Maybe<InteractionCreateManyWithoutMovementInput>;
  comments?: Maybe<MessageCreateManyWithoutMovementInput>;
  reservation?: Maybe<ReservationCreateOneWithoutMovementInput>;
  transports?: Maybe<TransportCreateManyWithoutMovementInput>;
  invoice?: Maybe<InvoiceCreateOneWithoutMovementsInput>;
  documents?: Maybe<FileCreateManyWithoutMovementInput>;
  payments?: Maybe<PaymentCreateManyWithoutMovementInput>;
};

export type ClientCreateWithoutInteractionsInput = {
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobile?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  clientId: Scalars['Int'];
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutClientInput>;
  images?: Maybe<FileCreateManyWithoutClientInput>;
  inventories?: Maybe<InventoryCreateManyWithoutClientInput>;
  movements?: Maybe<MovementCreateManyWithoutClientInput>;
  reservations?: Maybe<ReservationCreateManyWithoutClientInput>;
  address?: Maybe<AddressCreateOneWithoutClientAddressInput>;
  billingAddress?: Maybe<AddressCreateOneWithoutClientBillingAddressInput>;
  invoices?: Maybe<InvoiceCreateManyWithoutClientInput>;
  payments?: Maybe<PaymentCreateManyWithoutClientInput>;
};

export type FileCreateWithoutImageCategoryInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  smallUrl?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  manufacturer?: Maybe<ManufacturerCreateOneWithoutImagesInput>;
  message?: Maybe<MessageCreateOneWithoutImagesInput>;
  client?: Maybe<ClientCreateOneWithoutImagesInput>;
  supplier?: Maybe<SupplierCreateOneWithoutImagesInput>;
  product?: Maybe<ProductCreateOneWithoutImagesInput>;
  transportAgency?: Maybe<TransportAgencyCreateOneWithoutImagesInput>;
  transporter?: Maybe<TransporterCreateOneWithoutImagesInput>;
  settings?: Maybe<SettingCreateManyWithoutLogoInput>;
  Invoice?: Maybe<InvoiceCreateManyWithoutPdfInput>;
  bannerCategory?: Maybe<CategoryCreateManyWithoutBannerImageInput>;
  Movement?: Maybe<MovementCreateOneWithoutDocumentsInput>;
  Payment?: Maybe<PaymentCreateOneWithoutDocumentsInput>;
};

export type FileCreateWithoutBannerCategoryInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  smallUrl?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  manufacturer?: Maybe<ManufacturerCreateOneWithoutImagesInput>;
  message?: Maybe<MessageCreateOneWithoutImagesInput>;
  client?: Maybe<ClientCreateOneWithoutImagesInput>;
  supplier?: Maybe<SupplierCreateOneWithoutImagesInput>;
  product?: Maybe<ProductCreateOneWithoutImagesInput>;
  transportAgency?: Maybe<TransportAgencyCreateOneWithoutImagesInput>;
  transporter?: Maybe<TransporterCreateOneWithoutImagesInput>;
  settings?: Maybe<SettingCreateManyWithoutLogoInput>;
  Invoice?: Maybe<InvoiceCreateManyWithoutPdfInput>;
  imageCategory?: Maybe<CategoryCreateManyWithoutImageInput>;
  Movement?: Maybe<MovementCreateOneWithoutDocumentsInput>;
  Payment?: Maybe<PaymentCreateOneWithoutDocumentsInput>;
};

export type CategoryCreateWithoutCategoryInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<FileCreateOneWithoutImageCategoryInput>;
  bannerImage?: Maybe<FileCreateOneWithoutBannerCategoryInput>;
  products?: Maybe<ProductCreateManyWithoutCategoriesInput>;
  subCategories?: Maybe<CategoryCreateManyWithoutCategoryInput>;
};

export type CategoryCreateWithoutSubCategoriesInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<FileCreateOneWithoutImageCategoryInput>;
  bannerImage?: Maybe<FileCreateOneWithoutBannerCategoryInput>;
  products?: Maybe<ProductCreateManyWithoutCategoriesInput>;
  Category?: Maybe<CategoryCreateOneWithoutSubCategoriesInput>;
};

export type BatchUpdateWithWhereUniqueWithoutManufacturerInput = {
  where: BatchWhereUniqueInput;
  data: BatchUpdateWithoutManufacturerDataInput;
};

export type BatchUpsertWithWhereUniqueWithoutManufacturerInput = {
  where: BatchWhereUniqueInput;
  update: BatchUpdateWithoutManufacturerDataInput;
  create: BatchCreateWithoutManufacturerInput;
};

export type ContactPersonUpdateWithWhereUniqueWithoutManufacturerInput = {
  where: ContactPersonWhereUniqueInput;
  data: ContactPersonUpdateWithoutManufacturerDataInput;
};

export type ContactPersonUpsertWithWhereUniqueWithoutManufacturerInput = {
  where: ContactPersonWhereUniqueInput;
  update: ContactPersonUpdateWithoutManufacturerDataInput;
  create: ContactPersonCreateWithoutManufacturerInput;
};

export type FileUpdateWithWhereUniqueWithoutManufacturerInput = {
  where: FileWhereUniqueInput;
  data: FileUpdateWithoutManufacturerDataInput;
};

export type FileUpsertWithWhereUniqueWithoutManufacturerInput = {
  where: FileWhereUniqueInput;
  update: FileUpdateWithoutManufacturerDataInput;
  create: FileCreateWithoutManufacturerInput;
};

export type AddressUpdateWithoutManufacturerDataInput = {
  id?: Maybe<Scalars['String']>;
  addressLine1?: Maybe<Scalars['String']>;
  addressLine2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  supplierAddress?: Maybe<SupplierUpdateOneWithoutAddressInput>;
  supplierBillingAddress?: Maybe<SupplierUpdateOneWithoutBillingAddressInput>;
  clientAddress?: Maybe<ClientUpdateOneWithoutAddressInput>;
  clientBillingAddress?: Maybe<ClientUpdateOneWithoutBillingAddressInput>;
  address?: Maybe<SettingUpdateOneWithoutAddressInput>;
  billingAddress?: Maybe<SettingUpdateOneWithoutBillingAddressInput>;
  TransportAgency?: Maybe<TransportAgencyUpdateManyWithoutAddressInput>;
  Warehouse?: Maybe<WarehouseUpdateManyWithoutAddressInput>;
};

export type AddressUpsertWithoutManufacturerInput = {
  update: AddressUpdateWithoutManufacturerDataInput;
  create: AddressCreateWithoutManufacturerInput;
};

export type ManufacturerUpdateOneWithoutBatchesInput = {
  create?: Maybe<ManufacturerCreateWithoutBatchesInput>;
  connect?: Maybe<ManufacturerWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ManufacturerUpdateWithoutBatchesDataInput>;
  upsert?: Maybe<ManufacturerUpsertWithoutBatchesInput>;
};

export type InventoryUpdateManyWithoutBatchInput = {
  create?: Maybe<Array<InventoryCreateWithoutBatchInput>>;
  connect?: Maybe<Array<InventoryWhereUniqueInput>>;
  set?: Maybe<Array<InventoryWhereUniqueInput>>;
  disconnect?: Maybe<Array<InventoryWhereUniqueInput>>;
  delete?: Maybe<Array<InventoryWhereUniqueInput>>;
  update?: Maybe<Array<InventoryUpdateWithWhereUniqueWithoutBatchInput>>;
  updateMany?: Maybe<Array<InventoryUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<InventoryScalarWhereInput>>;
  upsert?: Maybe<Array<InventoryUpsertWithWhereUniqueWithoutBatchInput>>;
};

export type MovementUpdateManyWithoutBatchInput = {
  create?: Maybe<Array<MovementCreateWithoutBatchInput>>;
  connect?: Maybe<Array<MovementWhereUniqueInput>>;
  set?: Maybe<Array<MovementWhereUniqueInput>>;
  disconnect?: Maybe<Array<MovementWhereUniqueInput>>;
  delete?: Maybe<Array<MovementWhereUniqueInput>>;
  update?: Maybe<Array<MovementUpdateWithWhereUniqueWithoutBatchInput>>;
  updateMany?: Maybe<Array<MovementUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<MovementScalarWhereInput>>;
  upsert?: Maybe<Array<MovementUpsertWithWhereUniqueWithoutBatchInput>>;
};

export type ClientUpdateOneWithoutInteractionsInput = {
  create?: Maybe<ClientCreateWithoutInteractionsInput>;
  connect?: Maybe<ClientWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ClientUpdateWithoutInteractionsDataInput>;
  upsert?: Maybe<ClientUpsertWithoutInteractionsInput>;
};

export type FileUpdateOneWithoutImageCategoryInput = {
  create?: Maybe<FileCreateWithoutImageCategoryInput>;
  connect?: Maybe<FileWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<FileUpdateWithoutImageCategoryDataInput>;
  upsert?: Maybe<FileUpsertWithoutImageCategoryInput>;
};

export type FileUpdateOneWithoutBannerCategoryInput = {
  create?: Maybe<FileCreateWithoutBannerCategoryInput>;
  connect?: Maybe<FileWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<FileUpdateWithoutBannerCategoryDataInput>;
  upsert?: Maybe<FileUpsertWithoutBannerCategoryInput>;
};

export type CategoryUpdateManyWithoutCategoryInput = {
  create?: Maybe<Array<CategoryCreateWithoutCategoryInput>>;
  connect?: Maybe<Array<CategoryWhereUniqueInput>>;
  set?: Maybe<Array<CategoryWhereUniqueInput>>;
  disconnect?: Maybe<Array<CategoryWhereUniqueInput>>;
  delete?: Maybe<Array<CategoryWhereUniqueInput>>;
  update?: Maybe<Array<CategoryUpdateWithWhereUniqueWithoutCategoryInput>>;
  updateMany?: Maybe<Array<CategoryUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<CategoryScalarWhereInput>>;
  upsert?: Maybe<Array<CategoryUpsertWithWhereUniqueWithoutCategoryInput>>;
};

export type CategoryUpdateOneWithoutSubCategoriesInput = {
  create?: Maybe<CategoryCreateWithoutSubCategoriesInput>;
  connect?: Maybe<CategoryWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<CategoryUpdateWithoutSubCategoriesDataInput>;
  upsert?: Maybe<CategoryUpsertWithoutSubCategoriesInput>;
};

export type ManufacturerUpdateWithoutImagesDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  batches?: Maybe<BatchUpdateManyWithoutManufacturerInput>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutManufacturerInput>;
  products?: Maybe<ProductUpdateManyWithoutManufacturerInput>;
  address?: Maybe<AddressUpdateOneWithoutManufacturerInput>;
};

export type ManufacturerUpsertWithoutImagesInput = {
  update: ManufacturerUpdateWithoutImagesDataInput;
  create: ManufacturerCreateWithoutImagesInput;
};

export type MessageUpdateWithoutImagesDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  recipient?: Maybe<Scalars['String']>;
  sender?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  mentions?: Maybe<MessageUpdatementionsInput>;
  channel?: Maybe<ChannelUpdateOneWithoutMessagesInput>;
  movement?: Maybe<MovementUpdateOneWithoutCommentsInput>;
};

export type MessageUpsertWithoutImagesInput = {
  update: MessageUpdateWithoutImagesDataInput;
  create: MessageCreateWithoutImagesInput;
};

export type ClientUpdateWithoutImagesDataInput = {
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutClientInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutClientInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutClientInput>;
  movements?: Maybe<MovementUpdateManyWithoutClientInput>;
  reservations?: Maybe<ReservationUpdateManyWithoutClientInput>;
  address?: Maybe<AddressUpdateOneWithoutClientAddressInput>;
  billingAddress?: Maybe<AddressUpdateOneWithoutClientBillingAddressInput>;
  invoices?: Maybe<InvoiceUpdateManyWithoutClientInput>;
  payments?: Maybe<PaymentUpdateManyWithoutClientInput>;
};

export type ClientUpsertWithoutImagesInput = {
  update: ClientUpdateWithoutImagesDataInput;
  create: ClientCreateWithoutImagesInput;
};

export type SupplierUpdateWithoutImagesDataInput = {
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  supplierId?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  address?: Maybe<AddressUpdateOneWithoutSupplierAddressInput>;
  billingAddress?: Maybe<AddressUpdateOneWithoutSupplierBillingAddressInput>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutSupplierInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutSupplierInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutSupplierInput>;
  movements?: Maybe<MovementUpdateManyWithoutSupplierInput>;
  payments?: Maybe<PaymentUpdateManyWithoutSupplierInput>;
};

export type SupplierUpsertWithoutImagesInput = {
  update: SupplierUpdateWithoutImagesDataInput;
  create: SupplierCreateWithoutImagesInput;
};

export type ProductUpdateWithoutImagesDataInput = {
  id?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['Int']>;
  ASIN?: Maybe<Scalars['String']>;
  EAN?: Maybe<Scalars['String']>;
  ISBN?: Maybe<Scalars['String']>;
  UPC?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  material?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  isPackaging?: Maybe<Scalars['Boolean']>;
  isListed?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<ProductUpdatetagsInput>;
  dimensions?: Maybe<DimensionUpdateOneWithoutProductInput>;
  manufacturer?: Maybe<ManufacturerUpdateOneWithoutProductsInput>;
  batches?: Maybe<BatchUpdateManyWithoutProductInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutProductInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutProductInput>;
  movements?: Maybe<MovementUpdateManyWithoutProductInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutProductInput>;
  units?: Maybe<UnitUpdateManyWithoutProductInput>;
  taxRates?: Maybe<TaxRateUpdateManyWithoutProductInput>;
  packaging?: Maybe<ProductUpdateManyWithoutPackagedProductInput>;
  variants?: Maybe<ProductUpdateManyWithoutVariantProductInput>;
  packagedProduct?: Maybe<ProductUpdateOneWithoutPackagingInput>;
  variantProduct?: Maybe<ProductUpdateOneWithoutVariantsInput>;
  categories?: Maybe<CategoryUpdateManyWithoutProductsInput>;
};

export type ProductUpsertWithoutImagesInput = {
  update: ProductUpdateWithoutImagesDataInput;
  create: ProductCreateWithoutImagesInput;
};

export type TransportAgencyUpdateWithoutImagesDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutTransportAgencyInput>;
  transports?: Maybe<TransportUpdateManyWithoutTransportAgencyInput>;
  transporters?: Maybe<TransporterUpdateManyWithoutTransportAgencyInput>;
  address?: Maybe<AddressUpdateOneWithoutTransportAgencyInput>;
  payments?: Maybe<PaymentUpdateManyWithoutTransportAgencyInput>;
};

export type TransportAgencyUpsertWithoutImagesInput = {
  update: TransportAgencyUpdateWithoutImagesDataInput;
  create: TransportAgencyCreateWithoutImagesInput;
};

export type TransporterUpdateWithoutImagesDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<TransportType>;
  notes?: Maybe<Scalars['String']>;
  identifications?: Maybe<TransporterUpdateidentificationsInput>;
  transportAgency?: Maybe<TransportAgencyUpdateOneWithoutTransportersInput>;
  transports?: Maybe<TransportUpdateManyWithoutTransporterInput>;
};

export type TransporterUpsertWithoutImagesInput = {
  update: TransporterUpdateWithoutImagesDataInput;
  create: TransporterCreateWithoutImagesInput;
};

export type InvoiceUpdateWithWhereUniqueWithoutPdfInput = {
  where: InvoiceWhereUniqueInput;
  data: InvoiceUpdateWithoutPdfDataInput;
};

export type InvoiceUpsertWithWhereUniqueWithoutPdfInput = {
  where: InvoiceWhereUniqueInput;
  update: InvoiceUpdateWithoutPdfDataInput;
  create: InvoiceCreateWithoutPdfInput;
};

export type CategoryUpdateWithWhereUniqueWithoutImageInput = {
  where: CategoryWhereUniqueInput;
  data: CategoryUpdateWithoutImageDataInput;
};

export type CategoryUpsertWithWhereUniqueWithoutImageInput = {
  where: CategoryWhereUniqueInput;
  update: CategoryUpdateWithoutImageDataInput;
  create: CategoryCreateWithoutImageInput;
};

export type CategoryUpdateWithWhereUniqueWithoutBannerImageInput = {
  where: CategoryWhereUniqueInput;
  data: CategoryUpdateWithoutBannerImageDataInput;
};

export type CategoryUpsertWithWhereUniqueWithoutBannerImageInput = {
  where: CategoryWhereUniqueInput;
  update: CategoryUpdateWithoutBannerImageDataInput;
  create: CategoryCreateWithoutBannerImageInput;
};

export type MovementUpdateWithoutDocumentsDataInput = {
  active?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  status?: Maybe<MovementStatus>;
  movementId?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
  sendMail?: Maybe<Scalars['Boolean']>;
  storageNumber?: Maybe<Scalars['String']>;
  type?: Maybe<MovementType>;
  unitPrice?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  invoiceId?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  client?: Maybe<ClientUpdateOneWithoutMovementsInput>;
  supplier?: Maybe<SupplierUpdateOneWithoutMovementsInput>;
  batch?: Maybe<BatchUpdateOneWithoutMovementsInput>;
  inventory?: Maybe<InventoryUpdateOneWithoutMovementsInput>;
  product?: Maybe<ProductUpdateOneRequiredWithoutMovementsInput>;
  warehouse?: Maybe<WarehouseUpdateOneWithoutMovementsInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutMovementInput>;
  comments?: Maybe<MessageUpdateManyWithoutMovementInput>;
  reservation?: Maybe<ReservationUpdateOneWithoutMovementInput>;
  transports?: Maybe<TransportUpdateManyWithoutMovementInput>;
  invoice?: Maybe<InvoiceUpdateOneWithoutMovementsInput>;
  payments?: Maybe<PaymentUpdateManyWithoutMovementInput>;
};

export type MovementUpsertWithoutDocumentsInput = {
  update: MovementUpdateWithoutDocumentsDataInput;
  create: MovementCreateWithoutDocumentsInput;
};

export type PaymentUpdateWithoutDocumentsDataInput = {
  id?: Maybe<Scalars['String']>;
  paymentId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  type?: Maybe<PaymentType>;
  status?: Maybe<PaymentStatus>;
  dueDate?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  concept?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  currency?: Maybe<Scalars['String']>;
  recipient?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  paymentMethod?: Maybe<Scalars['String']>;
  stripePaymentIntentId?: Maybe<Scalars['String']>;
  stripeClientSecret?: Maybe<Scalars['String']>;
  group?: Maybe<GroupUpdateOneWithoutPaymentsInput>;
  taxRate?: Maybe<TaxRateUpdateOneWithoutPaymentsInput>;
  movement?: Maybe<MovementUpdateOneWithoutPaymentsInput>;
  transportAgency?: Maybe<TransportAgencyUpdateOneWithoutPaymentsInput>;
  client?: Maybe<ClientUpdateOneWithoutPaymentsInput>;
  supplier?: Maybe<SupplierUpdateOneWithoutPaymentsInput>;
  bankAccount?: Maybe<BankAccountUpdateOneWithoutPaymentsInput>;
};

export type PaymentUpsertWithoutDocumentsInput = {
  update: PaymentUpdateWithoutDocumentsDataInput;
  create: PaymentCreateWithoutDocumentsInput;
};

export type ProductCreateOneWithoutBatchesInput = {
  create?: Maybe<ProductCreateWithoutBatchesInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
};

export type ClientCreateOneWithoutReservationsInput = {
  create?: Maybe<ClientCreateWithoutReservationsInput>;
  connect?: Maybe<ClientWhereUniqueInput>;
};

export type TransportAgencyCreateOneWithoutTransportsInput = {
  create?: Maybe<TransportAgencyCreateWithoutTransportsInput>;
  connect?: Maybe<TransportAgencyWhereUniqueInput>;
};

export type ClientCreateOneWithoutInvoicesInput = {
  create?: Maybe<ClientCreateWithoutInvoicesInput>;
  connect?: Maybe<ClientWhereUniqueInput>;
};

export type ProductUpdateOneRequiredWithoutBatchesInput = {
  create?: Maybe<ProductCreateWithoutBatchesInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
  update?: Maybe<ProductUpdateWithoutBatchesDataInput>;
  upsert?: Maybe<ProductUpsertWithoutBatchesInput>;
};

export type InteractionUpdateWithoutMovementDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  client?: Maybe<ClientUpdateOneWithoutInteractionsInput>;
  supplier?: Maybe<SupplierUpdateOneWithoutInteractionsInput>;
  product?: Maybe<ProductUpdateOneWithoutInteractionsInput>;
};

export type ClientUpdateOneRequiredWithoutReservationsInput = {
  create?: Maybe<ClientCreateWithoutReservationsInput>;
  connect?: Maybe<ClientWhereUniqueInput>;
  update?: Maybe<ClientUpdateWithoutReservationsDataInput>;
  upsert?: Maybe<ClientUpsertWithoutReservationsInput>;
};

export type TransportUpdateWithoutMovementDataInput = {
  arrivalDate?: Maybe<Scalars['DateTime']>;
  arrivalPoint?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  notes?: Maybe<Scalars['String']>;
  transportAgency?: Maybe<TransportAgencyUpdateOneWithoutTransportsInput>;
  transporter?: Maybe<TransporterUpdateOneWithoutTransportsInput>;
};

export type ClientUpdateOneRequiredWithoutInvoicesInput = {
  create?: Maybe<ClientCreateWithoutInvoicesInput>;
  connect?: Maybe<ClientWhereUniqueInput>;
  update?: Maybe<ClientUpdateWithoutInvoicesDataInput>;
  upsert?: Maybe<ClientUpsertWithoutInvoicesInput>;
};

export type FileUpdateWithoutMovementDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  smallUrl?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<ManufacturerUpdateOneWithoutImagesInput>;
  message?: Maybe<MessageUpdateOneWithoutImagesInput>;
  client?: Maybe<ClientUpdateOneWithoutImagesInput>;
  supplier?: Maybe<SupplierUpdateOneWithoutImagesInput>;
  product?: Maybe<ProductUpdateOneWithoutImagesInput>;
  transportAgency?: Maybe<TransportAgencyUpdateOneWithoutImagesInput>;
  transporter?: Maybe<TransporterUpdateOneWithoutImagesInput>;
  settings?: Maybe<SettingUpdateManyWithoutLogoInput>;
  Invoice?: Maybe<InvoiceUpdateManyWithoutPdfInput>;
  imageCategory?: Maybe<CategoryUpdateManyWithoutImageInput>;
  bannerCategory?: Maybe<CategoryUpdateManyWithoutBannerImageInput>;
  Payment?: Maybe<PaymentUpdateOneWithoutDocumentsInput>;
};

export type PaymentUpdateWithoutMovementDataInput = {
  id?: Maybe<Scalars['String']>;
  paymentId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  type?: Maybe<PaymentType>;
  status?: Maybe<PaymentStatus>;
  dueDate?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  concept?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  currency?: Maybe<Scalars['String']>;
  recipient?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  paymentMethod?: Maybe<Scalars['String']>;
  stripePaymentIntentId?: Maybe<Scalars['String']>;
  stripeClientSecret?: Maybe<Scalars['String']>;
  group?: Maybe<GroupUpdateOneWithoutPaymentsInput>;
  taxRate?: Maybe<TaxRateUpdateOneWithoutPaymentsInput>;
  transportAgency?: Maybe<TransportAgencyUpdateOneWithoutPaymentsInput>;
  client?: Maybe<ClientUpdateOneWithoutPaymentsInput>;
  supplier?: Maybe<SupplierUpdateOneWithoutPaymentsInput>;
  documents?: Maybe<FileUpdateManyWithoutPaymentInput>;
  bankAccount?: Maybe<BankAccountUpdateOneWithoutPaymentsInput>;
};

export type ProductCreateManyWithoutManufacturerInput = {
  create?: Maybe<Array<ProductCreateWithoutManufacturerInput>>;
  connect?: Maybe<Array<ProductWhereUniqueInput>>;
};

export type TransportAgencyCreateOneWithoutTransportersInput = {
  create?: Maybe<TransportAgencyCreateWithoutTransportersInput>;
  connect?: Maybe<TransportAgencyWhereUniqueInput>;
};

export type ProductCreateManyWithoutCategoriesInput = {
  create?: Maybe<Array<ProductCreateWithoutCategoriesInput>>;
  connect?: Maybe<Array<ProductWhereUniqueInput>>;
};

export type SettingUpdateWithWhereUniqueWithoutLogoInput = {
  where: SettingWhereUniqueInput;
  data: SettingUpdateWithoutLogoDataInput;
};

export type SettingUpdateManyWithWhereNestedInput = {
  where: SettingScalarWhereInput;
  data: SettingUpdateManyDataInput;
};

export type SettingScalarWhereInput = {
  subDomain?: Maybe<StringFilter>;
  chat?: Maybe<BooleanFilter>;
  currency?: Maybe<NullableStringFilter>;
  currencySymbol?: Maybe<NullableStringFilter>;
  defaultLanguage?: Maybe<Language>;
  id?: Maybe<StringFilter>;
  stripeCustomerId?: Maybe<NullableStringFilter>;
  logoId?: Maybe<NullableStringFilter>;
  name?: Maybe<StringFilter>;
  timezone?: Maybe<NullableStringFilter>;
  transports?: Maybe<BooleanFilter>;
  plan?: Maybe<AccountPlan>;
  warehouses?: Maybe<BooleanFilter>;
  packaging?: Maybe<BooleanFilter>;
  shop?: Maybe<BooleanFilter>;
  accounting?: Maybe<BooleanFilter>;
  presets?: Maybe<PresetFilter>;
  addressId?: Maybe<NullableStringFilter>;
  billingAddressId?: Maybe<NullableStringFilter>;
  fiscalNumber?: Maybe<NullableStringFilter>;
  email?: Maybe<NullableStringFilter>;
  phone?: Maybe<NullableStringFilter>;
  mobile?: Maybe<NullableStringFilter>;
  website?: Maybe<NullableStringFilter>;
  weightUnit?: Maybe<NullableStringFilter>;
  lengthUnit?: Maybe<NullableStringFilter>;
  AND?: Maybe<Array<SettingScalarWhereInput>>;
  OR?: Maybe<Array<SettingScalarWhereInput>>;
  NOT?: Maybe<Array<SettingScalarWhereInput>>;
};

export type SettingUpsertWithWhereUniqueWithoutLogoInput = {
  where: SettingWhereUniqueInput;
  update: SettingUpdateWithoutLogoDataInput;
  create: SettingCreateWithoutLogoInput;
};

export type ChannelCreateOneWithoutMessagesInput = {
  create?: Maybe<ChannelCreateWithoutMessagesInput>;
  connect?: Maybe<ChannelWhereUniqueInput>;
};

export type ManufacturerUpdateWithoutContactPersonsDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  batches?: Maybe<BatchUpdateManyWithoutManufacturerInput>;
  images?: Maybe<FileUpdateManyWithoutManufacturerInput>;
  products?: Maybe<ProductUpdateManyWithoutManufacturerInput>;
  address?: Maybe<AddressUpdateOneWithoutManufacturerInput>;
};

export type ManufacturerUpsertWithoutContactPersonsInput = {
  update: ManufacturerUpdateWithoutContactPersonsDataInput;
  create: ManufacturerCreateWithoutContactPersonsInput;
};

export type SupplierUpdateWithoutContactPersonsDataInput = {
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  supplierId?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  address?: Maybe<AddressUpdateOneWithoutSupplierAddressInput>;
  billingAddress?: Maybe<AddressUpdateOneWithoutSupplierBillingAddressInput>;
  images?: Maybe<FileUpdateManyWithoutSupplierInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutSupplierInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutSupplierInput>;
  movements?: Maybe<MovementUpdateManyWithoutSupplierInput>;
  payments?: Maybe<PaymentUpdateManyWithoutSupplierInput>;
};

export type SupplierUpsertWithoutContactPersonsInput = {
  update: SupplierUpdateWithoutContactPersonsDataInput;
  create: SupplierCreateWithoutContactPersonsInput;
};

export type TransportAgencyUpdateWithoutContactPersonsDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  images?: Maybe<FileUpdateManyWithoutTransportAgencyInput>;
  transports?: Maybe<TransportUpdateManyWithoutTransportAgencyInput>;
  transporters?: Maybe<TransporterUpdateManyWithoutTransportAgencyInput>;
  address?: Maybe<AddressUpdateOneWithoutTransportAgencyInput>;
  payments?: Maybe<PaymentUpdateManyWithoutTransportAgencyInput>;
};

export type TransportAgencyUpsertWithoutContactPersonsInput = {
  update: TransportAgencyUpdateWithoutContactPersonsDataInput;
  create: TransportAgencyCreateWithoutContactPersonsInput;
};

export type WarehouseUpdateWithoutContactPersonsDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  inventories?: Maybe<InventoryUpdateManyWithoutWarehouseInput>;
  movements?: Maybe<MovementUpdateManyWithoutWarehouseInput>;
  address?: Maybe<AddressUpdateOneWithoutWarehouseInput>;
  Notification?: Maybe<NotificationUpdateManyWithoutWarehouseInput>;
};

export type WarehouseUpsertWithoutContactPersonsInput = {
  update: WarehouseUpdateWithoutContactPersonsDataInput;
  create: WarehouseCreateWithoutContactPersonsInput;
};

export type SupplierUpdateWithoutInteractionsDataInput = {
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  supplierId?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  address?: Maybe<AddressUpdateOneWithoutSupplierAddressInput>;
  billingAddress?: Maybe<AddressUpdateOneWithoutSupplierBillingAddressInput>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutSupplierInput>;
  images?: Maybe<FileUpdateManyWithoutSupplierInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutSupplierInput>;
  movements?: Maybe<MovementUpdateManyWithoutSupplierInput>;
  payments?: Maybe<PaymentUpdateManyWithoutSupplierInput>;
};

export type SupplierUpsertWithoutInteractionsInput = {
  update: SupplierUpdateWithoutInteractionsDataInput;
  create: SupplierCreateWithoutInteractionsInput;
};

export type MovementUpdateWithoutInteractionsDataInput = {
  active?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  status?: Maybe<MovementStatus>;
  movementId?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
  sendMail?: Maybe<Scalars['Boolean']>;
  storageNumber?: Maybe<Scalars['String']>;
  type?: Maybe<MovementType>;
  unitPrice?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  invoiceId?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  client?: Maybe<ClientUpdateOneWithoutMovementsInput>;
  supplier?: Maybe<SupplierUpdateOneWithoutMovementsInput>;
  batch?: Maybe<BatchUpdateOneWithoutMovementsInput>;
  inventory?: Maybe<InventoryUpdateOneWithoutMovementsInput>;
  product?: Maybe<ProductUpdateOneRequiredWithoutMovementsInput>;
  warehouse?: Maybe<WarehouseUpdateOneWithoutMovementsInput>;
  comments?: Maybe<MessageUpdateManyWithoutMovementInput>;
  reservation?: Maybe<ReservationUpdateOneWithoutMovementInput>;
  transports?: Maybe<TransportUpdateManyWithoutMovementInput>;
  invoice?: Maybe<InvoiceUpdateOneWithoutMovementsInput>;
  documents?: Maybe<FileUpdateManyWithoutMovementInput>;
  payments?: Maybe<PaymentUpdateManyWithoutMovementInput>;
};

export type MovementUpsertWithoutInteractionsInput = {
  update: MovementUpdateWithoutInteractionsDataInput;
  create: MovementCreateWithoutInteractionsInput;
};

export type ProductUpdateWithoutInteractionsDataInput = {
  id?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['Int']>;
  ASIN?: Maybe<Scalars['String']>;
  EAN?: Maybe<Scalars['String']>;
  ISBN?: Maybe<Scalars['String']>;
  UPC?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  material?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  isPackaging?: Maybe<Scalars['Boolean']>;
  isListed?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<ProductUpdatetagsInput>;
  dimensions?: Maybe<DimensionUpdateOneWithoutProductInput>;
  manufacturer?: Maybe<ManufacturerUpdateOneWithoutProductsInput>;
  batches?: Maybe<BatchUpdateManyWithoutProductInput>;
  images?: Maybe<FileUpdateManyWithoutProductInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutProductInput>;
  movements?: Maybe<MovementUpdateManyWithoutProductInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutProductInput>;
  units?: Maybe<UnitUpdateManyWithoutProductInput>;
  taxRates?: Maybe<TaxRateUpdateManyWithoutProductInput>;
  packaging?: Maybe<ProductUpdateManyWithoutPackagedProductInput>;
  variants?: Maybe<ProductUpdateManyWithoutVariantProductInput>;
  packagedProduct?: Maybe<ProductUpdateOneWithoutPackagingInput>;
  variantProduct?: Maybe<ProductUpdateOneWithoutVariantsInput>;
  categories?: Maybe<CategoryUpdateManyWithoutProductsInput>;
};

export type ProductUpsertWithoutInteractionsInput = {
  update: ProductUpdateWithoutInteractionsDataInput;
  create: ProductCreateWithoutInteractionsInput;
};

export type SupplierUpdateWithoutInventoriesDataInput = {
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  supplierId?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  address?: Maybe<AddressUpdateOneWithoutSupplierAddressInput>;
  billingAddress?: Maybe<AddressUpdateOneWithoutSupplierBillingAddressInput>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutSupplierInput>;
  images?: Maybe<FileUpdateManyWithoutSupplierInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutSupplierInput>;
  movements?: Maybe<MovementUpdateManyWithoutSupplierInput>;
  payments?: Maybe<PaymentUpdateManyWithoutSupplierInput>;
};

export type SupplierUpsertWithoutInventoriesInput = {
  update: SupplierUpdateWithoutInventoriesDataInput;
  create: SupplierCreateWithoutInventoriesInput;
};

export type BatchUpdateWithoutInventoriesDataInput = {
  batchNumber?: Maybe<Scalars['String']>;
  bestBefore?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<ManufacturerUpdateOneWithoutBatchesInput>;
  product?: Maybe<ProductUpdateOneRequiredWithoutBatchesInput>;
  movements?: Maybe<MovementUpdateManyWithoutBatchInput>;
};

export type BatchUpsertWithoutInventoriesInput = {
  update: BatchUpdateWithoutInventoriesDataInput;
  create: BatchCreateWithoutInventoriesInput;
};

export type ProductUpdateWithoutInventoriesDataInput = {
  id?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['Int']>;
  ASIN?: Maybe<Scalars['String']>;
  EAN?: Maybe<Scalars['String']>;
  ISBN?: Maybe<Scalars['String']>;
  UPC?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  material?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  isPackaging?: Maybe<Scalars['Boolean']>;
  isListed?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<ProductUpdatetagsInput>;
  dimensions?: Maybe<DimensionUpdateOneWithoutProductInput>;
  manufacturer?: Maybe<ManufacturerUpdateOneWithoutProductsInput>;
  batches?: Maybe<BatchUpdateManyWithoutProductInput>;
  images?: Maybe<FileUpdateManyWithoutProductInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutProductInput>;
  movements?: Maybe<MovementUpdateManyWithoutProductInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutProductInput>;
  units?: Maybe<UnitUpdateManyWithoutProductInput>;
  taxRates?: Maybe<TaxRateUpdateManyWithoutProductInput>;
  packaging?: Maybe<ProductUpdateManyWithoutPackagedProductInput>;
  variants?: Maybe<ProductUpdateManyWithoutVariantProductInput>;
  packagedProduct?: Maybe<ProductUpdateOneWithoutPackagingInput>;
  variantProduct?: Maybe<ProductUpdateOneWithoutVariantsInput>;
  categories?: Maybe<CategoryUpdateManyWithoutProductsInput>;
};

export type ProductUpsertWithoutInventoriesInput = {
  update: ProductUpdateWithoutInventoriesDataInput;
  create: ProductCreateWithoutInventoriesInput;
};

export type WarehouseUpdateWithoutInventoriesDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutWarehouseInput>;
  movements?: Maybe<MovementUpdateManyWithoutWarehouseInput>;
  address?: Maybe<AddressUpdateOneWithoutWarehouseInput>;
  Notification?: Maybe<NotificationUpdateManyWithoutWarehouseInput>;
};

export type WarehouseUpsertWithoutInventoriesInput = {
  update: WarehouseUpdateWithoutInventoriesDataInput;
  create: WarehouseCreateWithoutInventoriesInput;
};

export type MovementUpdateWithWhereUniqueWithoutInventoryInput = {
  where: MovementWhereUniqueInput;
  data: MovementUpdateWithoutInventoryDataInput;
};

export type MovementUpsertWithWhereUniqueWithoutInventoryInput = {
  where: MovementWhereUniqueInput;
  update: MovementUpdateWithoutInventoryDataInput;
  create: MovementCreateWithoutInventoryInput;
};

export type ReservationUpdateWithWhereUniqueWithoutInventoryInput = {
  where: ReservationWhereUniqueInput;
  data: ReservationUpdateWithoutInventoryDataInput;
};

export type ReservationUpsertWithWhereUniqueWithoutInventoryInput = {
  where: ReservationWhereUniqueInput;
  update: ReservationUpdateWithoutInventoryDataInput;
  create: ReservationCreateWithoutInventoryInput;
};

export type MessageUpdateWithWhereUniqueWithoutMovementInput = {
  where: MessageWhereUniqueInput;
  data: MessageUpdateWithoutMovementDataInput;
};

export type MessageUpsertWithWhereUniqueWithoutMovementInput = {
  where: MessageWhereUniqueInput;
  update: MessageUpdateWithoutMovementDataInput;
  create: MessageCreateWithoutMovementInput;
};

export type InventoryUpdateWithoutReservationsDataInput = {
  amount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  storageNumber?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  isListed?: Maybe<Scalars['Boolean']>;
  listPrice?: Maybe<Scalars['Float']>;
  supplier?: Maybe<SupplierUpdateOneWithoutInventoriesInput>;
  batch?: Maybe<BatchUpdateOneWithoutInventoriesInput>;
  product?: Maybe<ProductUpdateOneRequiredWithoutInventoriesInput>;
  warehouse?: Maybe<WarehouseUpdateOneWithoutInventoriesInput>;
  movements?: Maybe<MovementUpdateManyWithoutInventoryInput>;
  client?: Maybe<ClientUpdateOneWithoutInventoriesInput>;
};

export type InventoryUpsertWithoutReservationsInput = {
  update: InventoryUpdateWithoutReservationsDataInput;
  create: InventoryCreateWithoutReservationsInput;
};

export type MovementUpdateWithoutReservationDataInput = {
  active?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  status?: Maybe<MovementStatus>;
  movementId?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
  sendMail?: Maybe<Scalars['Boolean']>;
  storageNumber?: Maybe<Scalars['String']>;
  type?: Maybe<MovementType>;
  unitPrice?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  invoiceId?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  client?: Maybe<ClientUpdateOneWithoutMovementsInput>;
  supplier?: Maybe<SupplierUpdateOneWithoutMovementsInput>;
  batch?: Maybe<BatchUpdateOneWithoutMovementsInput>;
  inventory?: Maybe<InventoryUpdateOneWithoutMovementsInput>;
  product?: Maybe<ProductUpdateOneRequiredWithoutMovementsInput>;
  warehouse?: Maybe<WarehouseUpdateOneWithoutMovementsInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutMovementInput>;
  comments?: Maybe<MessageUpdateManyWithoutMovementInput>;
  transports?: Maybe<TransportUpdateManyWithoutMovementInput>;
  invoice?: Maybe<InvoiceUpdateOneWithoutMovementsInput>;
  documents?: Maybe<FileUpdateManyWithoutMovementInput>;
  payments?: Maybe<PaymentUpdateManyWithoutMovementInput>;
};

export type MovementUpsertWithoutReservationInput = {
  update: MovementUpdateWithoutReservationDataInput;
  create: MovementCreateWithoutReservationInput;
};

export type ManufacturerUpdateWithoutAddressDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  batches?: Maybe<BatchUpdateManyWithoutManufacturerInput>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutManufacturerInput>;
  images?: Maybe<FileUpdateManyWithoutManufacturerInput>;
  products?: Maybe<ProductUpdateManyWithoutManufacturerInput>;
};

export type ManufacturerUpdateManyDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
};

export type TransportAgencyUpdateWithoutAddressDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutTransportAgencyInput>;
  images?: Maybe<FileUpdateManyWithoutTransportAgencyInput>;
  transports?: Maybe<TransportUpdateManyWithoutTransportAgencyInput>;
  transporters?: Maybe<TransporterUpdateManyWithoutTransportAgencyInput>;
  payments?: Maybe<PaymentUpdateManyWithoutTransportAgencyInput>;
};

export type TransportAgencyUpdateManyDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
};

export type WarehouseUpdateWithoutAddressDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutWarehouseInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutWarehouseInput>;
  movements?: Maybe<MovementUpdateManyWithoutWarehouseInput>;
  Notification?: Maybe<NotificationUpdateManyWithoutWarehouseInput>;
};

export type WarehouseUpdateManyDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
};

export type FileUpdateWithoutInvoiceDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  smallUrl?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<ManufacturerUpdateOneWithoutImagesInput>;
  message?: Maybe<MessageUpdateOneWithoutImagesInput>;
  client?: Maybe<ClientUpdateOneWithoutImagesInput>;
  supplier?: Maybe<SupplierUpdateOneWithoutImagesInput>;
  product?: Maybe<ProductUpdateOneWithoutImagesInput>;
  transportAgency?: Maybe<TransportAgencyUpdateOneWithoutImagesInput>;
  transporter?: Maybe<TransporterUpdateOneWithoutImagesInput>;
  settings?: Maybe<SettingUpdateManyWithoutLogoInput>;
  imageCategory?: Maybe<CategoryUpdateManyWithoutImageInput>;
  bannerCategory?: Maybe<CategoryUpdateManyWithoutBannerImageInput>;
  Movement?: Maybe<MovementUpdateOneWithoutDocumentsInput>;
  Payment?: Maybe<PaymentUpdateOneWithoutDocumentsInput>;
};

export type FileUpsertWithoutInvoiceInput = {
  update: FileUpdateWithoutInvoiceDataInput;
  create: FileCreateWithoutInvoiceInput;
};

export type MovementUpdateWithWhereUniqueWithoutInvoiceInput = {
  where: MovementWhereUniqueInput;
  data: MovementUpdateWithoutInvoiceDataInput;
};

export type MovementUpsertWithWhereUniqueWithoutInvoiceInput = {
  where: MovementWhereUniqueInput;
  update: MovementUpdateWithoutInvoiceDataInput;
  create: MovementCreateWithoutInvoiceInput;
};

export type GroupUpdateWithoutPaymentsDataInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  taxRate?: Maybe<TaxRateUpdateOneWithoutGroupInput>;
};

export type GroupUpsertWithoutPaymentsInput = {
  update: GroupUpdateWithoutPaymentsDataInput;
  create: GroupCreateWithoutPaymentsInput;
};

export type TaxRateUpdateWithoutPaymentsDataInput = {
  id?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  isSameCountry?: Maybe<Scalars['Boolean']>;
  isEU?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  group?: Maybe<GroupUpdateOneWithoutTaxRateInput>;
  product?: Maybe<ProductUpdateOneWithoutTaxRatesInput>;
};

export type TaxRateUpsertWithoutPaymentsInput = {
  update: TaxRateUpdateWithoutPaymentsDataInput;
  create: TaxRateCreateWithoutPaymentsInput;
};

export type MovementUpdateWithoutPaymentsDataInput = {
  active?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  status?: Maybe<MovementStatus>;
  movementId?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
  sendMail?: Maybe<Scalars['Boolean']>;
  storageNumber?: Maybe<Scalars['String']>;
  type?: Maybe<MovementType>;
  unitPrice?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  invoiceId?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  client?: Maybe<ClientUpdateOneWithoutMovementsInput>;
  supplier?: Maybe<SupplierUpdateOneWithoutMovementsInput>;
  batch?: Maybe<BatchUpdateOneWithoutMovementsInput>;
  inventory?: Maybe<InventoryUpdateOneWithoutMovementsInput>;
  product?: Maybe<ProductUpdateOneRequiredWithoutMovementsInput>;
  warehouse?: Maybe<WarehouseUpdateOneWithoutMovementsInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutMovementInput>;
  comments?: Maybe<MessageUpdateManyWithoutMovementInput>;
  reservation?: Maybe<ReservationUpdateOneWithoutMovementInput>;
  transports?: Maybe<TransportUpdateManyWithoutMovementInput>;
  invoice?: Maybe<InvoiceUpdateOneWithoutMovementsInput>;
  documents?: Maybe<FileUpdateManyWithoutMovementInput>;
};

export type MovementUpsertWithoutPaymentsInput = {
  update: MovementUpdateWithoutPaymentsDataInput;
  create: MovementCreateWithoutPaymentsInput;
};

export type TransportAgencyUpdateWithoutPaymentsDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutTransportAgencyInput>;
  images?: Maybe<FileUpdateManyWithoutTransportAgencyInput>;
  transports?: Maybe<TransportUpdateManyWithoutTransportAgencyInput>;
  transporters?: Maybe<TransporterUpdateManyWithoutTransportAgencyInput>;
  address?: Maybe<AddressUpdateOneWithoutTransportAgencyInput>;
};

export type TransportAgencyUpsertWithoutPaymentsInput = {
  update: TransportAgencyUpdateWithoutPaymentsDataInput;
  create: TransportAgencyCreateWithoutPaymentsInput;
};

export type SupplierUpdateWithoutPaymentsDataInput = {
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  supplierId?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  address?: Maybe<AddressUpdateOneWithoutSupplierAddressInput>;
  billingAddress?: Maybe<AddressUpdateOneWithoutSupplierBillingAddressInput>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutSupplierInput>;
  images?: Maybe<FileUpdateManyWithoutSupplierInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutSupplierInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutSupplierInput>;
  movements?: Maybe<MovementUpdateManyWithoutSupplierInput>;
};

export type SupplierUpsertWithoutPaymentsInput = {
  update: SupplierUpdateWithoutPaymentsDataInput;
  create: SupplierCreateWithoutPaymentsInput;
};

export type FileUpdateWithWhereUniqueWithoutPaymentInput = {
  where: FileWhereUniqueInput;
  data: FileUpdateWithoutPaymentDataInput;
};

export type FileUpsertWithWhereUniqueWithoutPaymentInput = {
  where: FileWhereUniqueInput;
  update: FileUpdateWithoutPaymentDataInput;
  create: FileCreateWithoutPaymentInput;
};

export type BankAccountUpdateWithoutPaymentsDataInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type BankAccountUpsertWithoutPaymentsInput = {
  update: BankAccountUpdateWithoutPaymentsDataInput;
  create: BankAccountCreateWithoutPaymentsInput;
};

export type ClientUpdateWithoutContactPersonsDataInput = {
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  images?: Maybe<FileUpdateManyWithoutClientInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutClientInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutClientInput>;
  movements?: Maybe<MovementUpdateManyWithoutClientInput>;
  reservations?: Maybe<ReservationUpdateManyWithoutClientInput>;
  address?: Maybe<AddressUpdateOneWithoutClientAddressInput>;
  billingAddress?: Maybe<AddressUpdateOneWithoutClientBillingAddressInput>;
  invoices?: Maybe<InvoiceUpdateManyWithoutClientInput>;
  payments?: Maybe<PaymentUpdateManyWithoutClientInput>;
};

export type ClientUpsertWithoutContactPersonsInput = {
  update: ClientUpdateWithoutContactPersonsDataInput;
  create: ClientCreateWithoutContactPersonsInput;
};

export type MovementUpdateWithoutTransportsDataInput = {
  active?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  status?: Maybe<MovementStatus>;
  movementId?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
  sendMail?: Maybe<Scalars['Boolean']>;
  storageNumber?: Maybe<Scalars['String']>;
  type?: Maybe<MovementType>;
  unitPrice?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  invoiceId?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  client?: Maybe<ClientUpdateOneWithoutMovementsInput>;
  supplier?: Maybe<SupplierUpdateOneWithoutMovementsInput>;
  batch?: Maybe<BatchUpdateOneWithoutMovementsInput>;
  inventory?: Maybe<InventoryUpdateOneWithoutMovementsInput>;
  product?: Maybe<ProductUpdateOneRequiredWithoutMovementsInput>;
  warehouse?: Maybe<WarehouseUpdateOneWithoutMovementsInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutMovementInput>;
  comments?: Maybe<MessageUpdateManyWithoutMovementInput>;
  reservation?: Maybe<ReservationUpdateOneWithoutMovementInput>;
  invoice?: Maybe<InvoiceUpdateOneWithoutMovementsInput>;
  documents?: Maybe<FileUpdateManyWithoutMovementInput>;
  payments?: Maybe<PaymentUpdateManyWithoutMovementInput>;
};

export type MovementUpsertWithoutTransportsInput = {
  update: MovementUpdateWithoutTransportsDataInput;
  create: MovementCreateWithoutTransportsInput;
};

export type TransporterUpdateWithoutTransportsDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<TransportType>;
  notes?: Maybe<Scalars['String']>;
  identifications?: Maybe<TransporterUpdateidentificationsInput>;
  transportAgency?: Maybe<TransportAgencyUpdateOneWithoutTransportersInput>;
  images?: Maybe<FileUpdateManyWithoutTransporterInput>;
};

export type TransporterUpsertWithoutTransportsInput = {
  update: TransporterUpdateWithoutTransportsDataInput;
  create: TransporterCreateWithoutTransportsInput;
};

export type FileUpdateWithWhereUniqueWithoutTransporterInput = {
  where: FileWhereUniqueInput;
  data: FileUpdateWithoutTransporterDataInput;
};

export type FileUpsertWithWhereUniqueWithoutTransporterInput = {
  where: FileWhereUniqueInput;
  update: FileUpdateWithoutTransporterDataInput;
  create: FileCreateWithoutTransporterInput;
};

export type TransportUpdateWithWhereUniqueWithoutTransporterInput = {
  where: TransportWhereUniqueInput;
  data: TransportUpdateWithoutTransporterDataInput;
};

export type TransportUpsertWithWhereUniqueWithoutTransporterInput = {
  where: TransportWhereUniqueInput;
  update: TransportUpdateWithoutTransporterDataInput;
  create: TransportCreateWithoutTransporterInput;
};

export type ClientUpdateWithoutPaymentsDataInput = {
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutClientInput>;
  images?: Maybe<FileUpdateManyWithoutClientInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutClientInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutClientInput>;
  movements?: Maybe<MovementUpdateManyWithoutClientInput>;
  reservations?: Maybe<ReservationUpdateManyWithoutClientInput>;
  address?: Maybe<AddressUpdateOneWithoutClientAddressInput>;
  billingAddress?: Maybe<AddressUpdateOneWithoutClientBillingAddressInput>;
  invoices?: Maybe<InvoiceUpdateManyWithoutClientInput>;
};

export type ClientUpsertWithoutPaymentsInput = {
  update: ClientUpdateWithoutPaymentsDataInput;
  create: ClientCreateWithoutPaymentsInput;
};

export type ClientUpdateWithoutInventoriesDataInput = {
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutClientInput>;
  images?: Maybe<FileUpdateManyWithoutClientInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutClientInput>;
  movements?: Maybe<MovementUpdateManyWithoutClientInput>;
  reservations?: Maybe<ReservationUpdateManyWithoutClientInput>;
  address?: Maybe<AddressUpdateOneWithoutClientAddressInput>;
  billingAddress?: Maybe<AddressUpdateOneWithoutClientBillingAddressInput>;
  invoices?: Maybe<InvoiceUpdateManyWithoutClientInput>;
  payments?: Maybe<PaymentUpdateManyWithoutClientInput>;
};

export type ClientUpsertWithoutInventoriesInput = {
  update: ClientUpdateWithoutInventoriesDataInput;
  create: ClientCreateWithoutInventoriesInput;
};

export type BatchUpdateWithoutManufacturerDataInput = {
  batchNumber?: Maybe<Scalars['String']>;
  bestBefore?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  product?: Maybe<ProductUpdateOneRequiredWithoutBatchesInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutBatchInput>;
  movements?: Maybe<MovementUpdateManyWithoutBatchInput>;
};

export type ContactPersonUpdateWithoutManufacturerDataInput = {
  active?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  scheduleEnd?: Maybe<Scalars['DateTime']>;
  scheduleStart?: Maybe<Scalars['DateTime']>;
  notes?: Maybe<Scalars['String']>;
  supplier?: Maybe<SupplierUpdateOneWithoutContactPersonsInput>;
  client?: Maybe<ClientUpdateOneWithoutContactPersonsInput>;
  transportAgency?: Maybe<TransportAgencyUpdateOneWithoutContactPersonsInput>;
  warehouse?: Maybe<WarehouseUpdateOneWithoutContactPersonsInput>;
};

export type FileUpdateWithoutManufacturerDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  smallUrl?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  message?: Maybe<MessageUpdateOneWithoutImagesInput>;
  client?: Maybe<ClientUpdateOneWithoutImagesInput>;
  supplier?: Maybe<SupplierUpdateOneWithoutImagesInput>;
  product?: Maybe<ProductUpdateOneWithoutImagesInput>;
  transportAgency?: Maybe<TransportAgencyUpdateOneWithoutImagesInput>;
  transporter?: Maybe<TransporterUpdateOneWithoutImagesInput>;
  settings?: Maybe<SettingUpdateManyWithoutLogoInput>;
  Invoice?: Maybe<InvoiceUpdateManyWithoutPdfInput>;
  imageCategory?: Maybe<CategoryUpdateManyWithoutImageInput>;
  bannerCategory?: Maybe<CategoryUpdateManyWithoutBannerImageInput>;
  Movement?: Maybe<MovementUpdateOneWithoutDocumentsInput>;
  Payment?: Maybe<PaymentUpdateOneWithoutDocumentsInput>;
};

export type ManufacturerUpdateWithoutBatchesDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutManufacturerInput>;
  images?: Maybe<FileUpdateManyWithoutManufacturerInput>;
  products?: Maybe<ProductUpdateManyWithoutManufacturerInput>;
  address?: Maybe<AddressUpdateOneWithoutManufacturerInput>;
};

export type ManufacturerUpsertWithoutBatchesInput = {
  update: ManufacturerUpdateWithoutBatchesDataInput;
  create: ManufacturerCreateWithoutBatchesInput;
};

export type InventoryUpdateWithWhereUniqueWithoutBatchInput = {
  where: InventoryWhereUniqueInput;
  data: InventoryUpdateWithoutBatchDataInput;
};

export type InventoryUpsertWithWhereUniqueWithoutBatchInput = {
  where: InventoryWhereUniqueInput;
  update: InventoryUpdateWithoutBatchDataInput;
  create: InventoryCreateWithoutBatchInput;
};

export type MovementUpdateWithWhereUniqueWithoutBatchInput = {
  where: MovementWhereUniqueInput;
  data: MovementUpdateWithoutBatchDataInput;
};

export type MovementUpsertWithWhereUniqueWithoutBatchInput = {
  where: MovementWhereUniqueInput;
  update: MovementUpdateWithoutBatchDataInput;
  create: MovementCreateWithoutBatchInput;
};

export type ClientUpdateWithoutInteractionsDataInput = {
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutClientInput>;
  images?: Maybe<FileUpdateManyWithoutClientInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutClientInput>;
  movements?: Maybe<MovementUpdateManyWithoutClientInput>;
  reservations?: Maybe<ReservationUpdateManyWithoutClientInput>;
  address?: Maybe<AddressUpdateOneWithoutClientAddressInput>;
  billingAddress?: Maybe<AddressUpdateOneWithoutClientBillingAddressInput>;
  invoices?: Maybe<InvoiceUpdateManyWithoutClientInput>;
  payments?: Maybe<PaymentUpdateManyWithoutClientInput>;
};

export type ClientUpsertWithoutInteractionsInput = {
  update: ClientUpdateWithoutInteractionsDataInput;
  create: ClientCreateWithoutInteractionsInput;
};

export type FileUpdateWithoutImageCategoryDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  smallUrl?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<ManufacturerUpdateOneWithoutImagesInput>;
  message?: Maybe<MessageUpdateOneWithoutImagesInput>;
  client?: Maybe<ClientUpdateOneWithoutImagesInput>;
  supplier?: Maybe<SupplierUpdateOneWithoutImagesInput>;
  product?: Maybe<ProductUpdateOneWithoutImagesInput>;
  transportAgency?: Maybe<TransportAgencyUpdateOneWithoutImagesInput>;
  transporter?: Maybe<TransporterUpdateOneWithoutImagesInput>;
  settings?: Maybe<SettingUpdateManyWithoutLogoInput>;
  Invoice?: Maybe<InvoiceUpdateManyWithoutPdfInput>;
  bannerCategory?: Maybe<CategoryUpdateManyWithoutBannerImageInput>;
  Movement?: Maybe<MovementUpdateOneWithoutDocumentsInput>;
  Payment?: Maybe<PaymentUpdateOneWithoutDocumentsInput>;
};

export type FileUpsertWithoutImageCategoryInput = {
  update: FileUpdateWithoutImageCategoryDataInput;
  create: FileCreateWithoutImageCategoryInput;
};

export type FileUpdateWithoutBannerCategoryDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  smallUrl?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<ManufacturerUpdateOneWithoutImagesInput>;
  message?: Maybe<MessageUpdateOneWithoutImagesInput>;
  client?: Maybe<ClientUpdateOneWithoutImagesInput>;
  supplier?: Maybe<SupplierUpdateOneWithoutImagesInput>;
  product?: Maybe<ProductUpdateOneWithoutImagesInput>;
  transportAgency?: Maybe<TransportAgencyUpdateOneWithoutImagesInput>;
  transporter?: Maybe<TransporterUpdateOneWithoutImagesInput>;
  settings?: Maybe<SettingUpdateManyWithoutLogoInput>;
  Invoice?: Maybe<InvoiceUpdateManyWithoutPdfInput>;
  imageCategory?: Maybe<CategoryUpdateManyWithoutImageInput>;
  Movement?: Maybe<MovementUpdateOneWithoutDocumentsInput>;
  Payment?: Maybe<PaymentUpdateOneWithoutDocumentsInput>;
};

export type FileUpsertWithoutBannerCategoryInput = {
  update: FileUpdateWithoutBannerCategoryDataInput;
  create: FileCreateWithoutBannerCategoryInput;
};

export type CategoryUpdateWithWhereUniqueWithoutCategoryInput = {
  where: CategoryWhereUniqueInput;
  data: CategoryUpdateWithoutCategoryDataInput;
};

export type CategoryUpsertWithWhereUniqueWithoutCategoryInput = {
  where: CategoryWhereUniqueInput;
  update: CategoryUpdateWithoutCategoryDataInput;
  create: CategoryCreateWithoutCategoryInput;
};

export type CategoryUpdateWithoutSubCategoriesDataInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<FileUpdateOneWithoutImageCategoryInput>;
  bannerImage?: Maybe<FileUpdateOneWithoutBannerCategoryInput>;
  products?: Maybe<ProductUpdateManyWithoutCategoriesInput>;
  Category?: Maybe<CategoryUpdateOneWithoutSubCategoriesInput>;
};

export type CategoryUpsertWithoutSubCategoriesInput = {
  update: CategoryUpdateWithoutSubCategoriesDataInput;
  create: CategoryCreateWithoutSubCategoriesInput;
};

export type ProductUpdateManyWithoutManufacturerInput = {
  create?: Maybe<Array<ProductCreateWithoutManufacturerInput>>;
  connect?: Maybe<Array<ProductWhereUniqueInput>>;
  set?: Maybe<Array<ProductWhereUniqueInput>>;
  disconnect?: Maybe<Array<ProductWhereUniqueInput>>;
  delete?: Maybe<Array<ProductWhereUniqueInput>>;
  update?: Maybe<Array<ProductUpdateWithWhereUniqueWithoutManufacturerInput>>;
  updateMany?: Maybe<Array<ProductUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<ProductScalarWhereInput>>;
  upsert?: Maybe<Array<ProductUpsertWithWhereUniqueWithoutManufacturerInput>>;
};

export type TransportAgencyUpdateOneWithoutTransportersInput = {
  create?: Maybe<TransportAgencyCreateWithoutTransportersInput>;
  connect?: Maybe<TransportAgencyWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<TransportAgencyUpdateWithoutTransportersDataInput>;
  upsert?: Maybe<TransportAgencyUpsertWithoutTransportersInput>;
};

export type InvoiceUpdateWithoutPdfDataInput = {
  id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  withTaxes?: Maybe<Scalars['Boolean']>;
  notes?: Maybe<Scalars['String']>;
  movements?: Maybe<MovementUpdateManyWithoutInvoiceInput>;
  client?: Maybe<ClientUpdateOneRequiredWithoutInvoicesInput>;
};

export type CategoryUpdateWithoutImageDataInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  bannerImage?: Maybe<FileUpdateOneWithoutBannerCategoryInput>;
  products?: Maybe<ProductUpdateManyWithoutCategoriesInput>;
  subCategories?: Maybe<CategoryUpdateManyWithoutCategoryInput>;
  Category?: Maybe<CategoryUpdateOneWithoutSubCategoriesInput>;
};

export type CategoryUpdateWithoutBannerImageDataInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<FileUpdateOneWithoutImageCategoryInput>;
  products?: Maybe<ProductUpdateManyWithoutCategoriesInput>;
  subCategories?: Maybe<CategoryUpdateManyWithoutCategoryInput>;
  Category?: Maybe<CategoryUpdateOneWithoutSubCategoriesInput>;
};

export type ProductCreateWithoutBatchesInput = {
  id?: Maybe<Scalars['String']>;
  productId: Scalars['Int'];
  ASIN?: Maybe<Scalars['String']>;
  EAN?: Maybe<Scalars['String']>;
  ISBN?: Maybe<Scalars['String']>;
  UPC?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  material?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  isPackaging?: Maybe<Scalars['Boolean']>;
  isListed?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<ProductCreatetagsInput>;
  dimensions?: Maybe<DimensionCreateOneWithoutProductInput>;
  manufacturer?: Maybe<ManufacturerCreateOneWithoutProductsInput>;
  images?: Maybe<FileCreateManyWithoutProductInput>;
  interactions?: Maybe<InteractionCreateManyWithoutProductInput>;
  inventories?: Maybe<InventoryCreateManyWithoutProductInput>;
  movements?: Maybe<MovementCreateManyWithoutProductInput>;
  notifications?: Maybe<NotificationCreateManyWithoutProductInput>;
  units?: Maybe<UnitCreateManyWithoutProductInput>;
  taxRates?: Maybe<TaxRateCreateManyWithoutProductInput>;
  packaging?: Maybe<ProductCreateManyWithoutPackagedProductInput>;
  variants?: Maybe<ProductCreateManyWithoutVariantProductInput>;
  packagedProduct?: Maybe<ProductCreateOneWithoutPackagingInput>;
  variantProduct?: Maybe<ProductCreateOneWithoutVariantsInput>;
  categories?: Maybe<CategoryCreateManyWithoutProductsInput>;
};

export type ClientCreateWithoutReservationsInput = {
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobile?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  clientId: Scalars['Int'];
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutClientInput>;
  images?: Maybe<FileCreateManyWithoutClientInput>;
  interactions?: Maybe<InteractionCreateManyWithoutClientInput>;
  inventories?: Maybe<InventoryCreateManyWithoutClientInput>;
  movements?: Maybe<MovementCreateManyWithoutClientInput>;
  address?: Maybe<AddressCreateOneWithoutClientAddressInput>;
  billingAddress?: Maybe<AddressCreateOneWithoutClientBillingAddressInput>;
  invoices?: Maybe<InvoiceCreateManyWithoutClientInput>;
  payments?: Maybe<PaymentCreateManyWithoutClientInput>;
};

export type TransportAgencyCreateWithoutTransportsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutTransportAgencyInput>;
  images?: Maybe<FileCreateManyWithoutTransportAgencyInput>;
  transporters?: Maybe<TransporterCreateManyWithoutTransportAgencyInput>;
  address?: Maybe<AddressCreateOneWithoutTransportAgencyInput>;
  payments?: Maybe<PaymentCreateManyWithoutTransportAgencyInput>;
};

export type ClientCreateWithoutInvoicesInput = {
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobile?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  clientId: Scalars['Int'];
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutClientInput>;
  images?: Maybe<FileCreateManyWithoutClientInput>;
  interactions?: Maybe<InteractionCreateManyWithoutClientInput>;
  inventories?: Maybe<InventoryCreateManyWithoutClientInput>;
  movements?: Maybe<MovementCreateManyWithoutClientInput>;
  reservations?: Maybe<ReservationCreateManyWithoutClientInput>;
  address?: Maybe<AddressCreateOneWithoutClientAddressInput>;
  billingAddress?: Maybe<AddressCreateOneWithoutClientBillingAddressInput>;
  payments?: Maybe<PaymentCreateManyWithoutClientInput>;
};

export type ProductUpdateWithoutBatchesDataInput = {
  id?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['Int']>;
  ASIN?: Maybe<Scalars['String']>;
  EAN?: Maybe<Scalars['String']>;
  ISBN?: Maybe<Scalars['String']>;
  UPC?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  material?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  isPackaging?: Maybe<Scalars['Boolean']>;
  isListed?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<ProductUpdatetagsInput>;
  dimensions?: Maybe<DimensionUpdateOneWithoutProductInput>;
  manufacturer?: Maybe<ManufacturerUpdateOneWithoutProductsInput>;
  images?: Maybe<FileUpdateManyWithoutProductInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutProductInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutProductInput>;
  movements?: Maybe<MovementUpdateManyWithoutProductInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutProductInput>;
  units?: Maybe<UnitUpdateManyWithoutProductInput>;
  taxRates?: Maybe<TaxRateUpdateManyWithoutProductInput>;
  packaging?: Maybe<ProductUpdateManyWithoutPackagedProductInput>;
  variants?: Maybe<ProductUpdateManyWithoutVariantProductInput>;
  packagedProduct?: Maybe<ProductUpdateOneWithoutPackagingInput>;
  variantProduct?: Maybe<ProductUpdateOneWithoutVariantsInput>;
  categories?: Maybe<CategoryUpdateManyWithoutProductsInput>;
};

export type ProductUpsertWithoutBatchesInput = {
  update: ProductUpdateWithoutBatchesDataInput;
  create: ProductCreateWithoutBatchesInput;
};

export type ClientUpdateWithoutReservationsDataInput = {
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutClientInput>;
  images?: Maybe<FileUpdateManyWithoutClientInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutClientInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutClientInput>;
  movements?: Maybe<MovementUpdateManyWithoutClientInput>;
  address?: Maybe<AddressUpdateOneWithoutClientAddressInput>;
  billingAddress?: Maybe<AddressUpdateOneWithoutClientBillingAddressInput>;
  invoices?: Maybe<InvoiceUpdateManyWithoutClientInput>;
  payments?: Maybe<PaymentUpdateManyWithoutClientInput>;
};

export type ClientUpsertWithoutReservationsInput = {
  update: ClientUpdateWithoutReservationsDataInput;
  create: ClientCreateWithoutReservationsInput;
};

export type TransportAgencyUpdateOneWithoutTransportsInput = {
  create?: Maybe<TransportAgencyCreateWithoutTransportsInput>;
  connect?: Maybe<TransportAgencyWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<TransportAgencyUpdateWithoutTransportsDataInput>;
  upsert?: Maybe<TransportAgencyUpsertWithoutTransportsInput>;
};

export type ClientUpdateWithoutInvoicesDataInput = {
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutClientInput>;
  images?: Maybe<FileUpdateManyWithoutClientInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutClientInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutClientInput>;
  movements?: Maybe<MovementUpdateManyWithoutClientInput>;
  reservations?: Maybe<ReservationUpdateManyWithoutClientInput>;
  address?: Maybe<AddressUpdateOneWithoutClientAddressInput>;
  billingAddress?: Maybe<AddressUpdateOneWithoutClientBillingAddressInput>;
  payments?: Maybe<PaymentUpdateManyWithoutClientInput>;
};

export type ClientUpsertWithoutInvoicesInput = {
  update: ClientUpdateWithoutInvoicesDataInput;
  create: ClientCreateWithoutInvoicesInput;
};

export type ProductCreateWithoutManufacturerInput = {
  id?: Maybe<Scalars['String']>;
  productId: Scalars['Int'];
  ASIN?: Maybe<Scalars['String']>;
  EAN?: Maybe<Scalars['String']>;
  ISBN?: Maybe<Scalars['String']>;
  UPC?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  material?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  isPackaging?: Maybe<Scalars['Boolean']>;
  isListed?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<ProductCreatetagsInput>;
  dimensions?: Maybe<DimensionCreateOneWithoutProductInput>;
  batches?: Maybe<BatchCreateManyWithoutProductInput>;
  images?: Maybe<FileCreateManyWithoutProductInput>;
  interactions?: Maybe<InteractionCreateManyWithoutProductInput>;
  inventories?: Maybe<InventoryCreateManyWithoutProductInput>;
  movements?: Maybe<MovementCreateManyWithoutProductInput>;
  notifications?: Maybe<NotificationCreateManyWithoutProductInput>;
  units?: Maybe<UnitCreateManyWithoutProductInput>;
  taxRates?: Maybe<TaxRateCreateManyWithoutProductInput>;
  packaging?: Maybe<ProductCreateManyWithoutPackagedProductInput>;
  variants?: Maybe<ProductCreateManyWithoutVariantProductInput>;
  packagedProduct?: Maybe<ProductCreateOneWithoutPackagingInput>;
  variantProduct?: Maybe<ProductCreateOneWithoutVariantsInput>;
  categories?: Maybe<CategoryCreateManyWithoutProductsInput>;
};

export type TransportAgencyCreateWithoutTransportersInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutTransportAgencyInput>;
  images?: Maybe<FileCreateManyWithoutTransportAgencyInput>;
  transports?: Maybe<TransportCreateManyWithoutTransportAgencyInput>;
  address?: Maybe<AddressCreateOneWithoutTransportAgencyInput>;
  payments?: Maybe<PaymentCreateManyWithoutTransportAgencyInput>;
};

export type ProductCreateWithoutCategoriesInput = {
  id?: Maybe<Scalars['String']>;
  productId: Scalars['Int'];
  ASIN?: Maybe<Scalars['String']>;
  EAN?: Maybe<Scalars['String']>;
  ISBN?: Maybe<Scalars['String']>;
  UPC?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  material?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  isPackaging?: Maybe<Scalars['Boolean']>;
  isListed?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<ProductCreatetagsInput>;
  dimensions?: Maybe<DimensionCreateOneWithoutProductInput>;
  manufacturer?: Maybe<ManufacturerCreateOneWithoutProductsInput>;
  batches?: Maybe<BatchCreateManyWithoutProductInput>;
  images?: Maybe<FileCreateManyWithoutProductInput>;
  interactions?: Maybe<InteractionCreateManyWithoutProductInput>;
  inventories?: Maybe<InventoryCreateManyWithoutProductInput>;
  movements?: Maybe<MovementCreateManyWithoutProductInput>;
  notifications?: Maybe<NotificationCreateManyWithoutProductInput>;
  units?: Maybe<UnitCreateManyWithoutProductInput>;
  taxRates?: Maybe<TaxRateCreateManyWithoutProductInput>;
  packaging?: Maybe<ProductCreateManyWithoutPackagedProductInput>;
  variants?: Maybe<ProductCreateManyWithoutVariantProductInput>;
  packagedProduct?: Maybe<ProductCreateOneWithoutPackagingInput>;
  variantProduct?: Maybe<ProductCreateOneWithoutVariantsInput>;
};

export type SettingUpdateWithoutLogoDataInput = {
  subDomain?: Maybe<Scalars['String']>;
  chat?: Maybe<Scalars['Boolean']>;
  currency?: Maybe<Scalars['String']>;
  currencySymbol?: Maybe<Scalars['String']>;
  defaultLanguage?: Maybe<Language>;
  id?: Maybe<Scalars['String']>;
  stripeCustomerId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  transports?: Maybe<Scalars['Boolean']>;
  plan?: Maybe<AccountPlan>;
  warehouses?: Maybe<Scalars['Boolean']>;
  packaging?: Maybe<Scalars['Boolean']>;
  shop?: Maybe<Scalars['Boolean']>;
  accounting?: Maybe<Scalars['Boolean']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  weightUnit?: Maybe<Scalars['String']>;
  lengthUnit?: Maybe<Scalars['String']>;
  manufacturerFields?: Maybe<SettingUpdatemanufacturerFieldsInput>;
  movementFields?: Maybe<SettingUpdatemovementFieldsInput>;
  supplierFields?: Maybe<SettingUpdatesupplierFieldsInput>;
  clientFields?: Maybe<SettingUpdateclientFieldsInput>;
  productFields?: Maybe<SettingUpdateproductFieldsInput>;
  transportAgencyFields?: Maybe<SettingUpdatetransportAgencyFieldsInput>;
  transportFields?: Maybe<SettingUpdatetransportFieldsInput>;
  transporterFields?: Maybe<SettingUpdatetransporterFieldsInput>;
  paymentFields?: Maybe<SettingUpdatepaymentFieldsInput>;
  warehouseFields?: Maybe<SettingUpdatewarehouseFieldsInput>;
  presets?: Maybe<PresetUpdateManyWithoutSettingInput>;
  address?: Maybe<AddressUpdateOneWithoutAddressInput>;
  billingAddress?: Maybe<AddressUpdateOneWithoutBillingAddressInput>;
};

export type SettingUpdateManyDataInput = {
  subDomain?: Maybe<Scalars['String']>;
  chat?: Maybe<Scalars['Boolean']>;
  currency?: Maybe<Scalars['String']>;
  currencySymbol?: Maybe<Scalars['String']>;
  defaultLanguage?: Maybe<Language>;
  id?: Maybe<Scalars['String']>;
  stripeCustomerId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  transports?: Maybe<Scalars['Boolean']>;
  plan?: Maybe<AccountPlan>;
  warehouses?: Maybe<Scalars['Boolean']>;
  packaging?: Maybe<Scalars['Boolean']>;
  shop?: Maybe<Scalars['Boolean']>;
  accounting?: Maybe<Scalars['Boolean']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  weightUnit?: Maybe<Scalars['String']>;
  lengthUnit?: Maybe<Scalars['String']>;
  manufacturerFields?: Maybe<SettingUpdatemanufacturerFieldsInput>;
  movementFields?: Maybe<SettingUpdatemovementFieldsInput>;
  supplierFields?: Maybe<SettingUpdatesupplierFieldsInput>;
  clientFields?: Maybe<SettingUpdateclientFieldsInput>;
  productFields?: Maybe<SettingUpdateproductFieldsInput>;
  transportAgencyFields?: Maybe<SettingUpdatetransportAgencyFieldsInput>;
  transportFields?: Maybe<SettingUpdatetransportFieldsInput>;
  transporterFields?: Maybe<SettingUpdatetransporterFieldsInput>;
  paymentFields?: Maybe<SettingUpdatepaymentFieldsInput>;
  warehouseFields?: Maybe<SettingUpdatewarehouseFieldsInput>;
};

export type MovementUpdateWithoutInventoryDataInput = {
  active?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  status?: Maybe<MovementStatus>;
  movementId?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
  sendMail?: Maybe<Scalars['Boolean']>;
  storageNumber?: Maybe<Scalars['String']>;
  type?: Maybe<MovementType>;
  unitPrice?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  invoiceId?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  client?: Maybe<ClientUpdateOneWithoutMovementsInput>;
  supplier?: Maybe<SupplierUpdateOneWithoutMovementsInput>;
  batch?: Maybe<BatchUpdateOneWithoutMovementsInput>;
  product?: Maybe<ProductUpdateOneRequiredWithoutMovementsInput>;
  warehouse?: Maybe<WarehouseUpdateOneWithoutMovementsInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutMovementInput>;
  comments?: Maybe<MessageUpdateManyWithoutMovementInput>;
  reservation?: Maybe<ReservationUpdateOneWithoutMovementInput>;
  transports?: Maybe<TransportUpdateManyWithoutMovementInput>;
  invoice?: Maybe<InvoiceUpdateOneWithoutMovementsInput>;
  documents?: Maybe<FileUpdateManyWithoutMovementInput>;
  payments?: Maybe<PaymentUpdateManyWithoutMovementInput>;
};

export type ReservationUpdateWithoutInventoryDataInput = {
  amount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  notes?: Maybe<Scalars['String']>;
  client?: Maybe<ClientUpdateOneRequiredWithoutReservationsInput>;
  movement?: Maybe<MovementUpdateOneRequiredWithoutReservationInput>;
};

export type MessageUpdateWithoutMovementDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  recipient?: Maybe<Scalars['String']>;
  sender?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  mentions?: Maybe<MessageUpdatementionsInput>;
  channel?: Maybe<ChannelUpdateOneWithoutMessagesInput>;
  images?: Maybe<FileUpdateManyWithoutMessageInput>;
};

export type MovementUpdateWithoutInvoiceDataInput = {
  active?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  status?: Maybe<MovementStatus>;
  movementId?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
  sendMail?: Maybe<Scalars['Boolean']>;
  storageNumber?: Maybe<Scalars['String']>;
  type?: Maybe<MovementType>;
  unitPrice?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  invoiceId?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  client?: Maybe<ClientUpdateOneWithoutMovementsInput>;
  supplier?: Maybe<SupplierUpdateOneWithoutMovementsInput>;
  batch?: Maybe<BatchUpdateOneWithoutMovementsInput>;
  inventory?: Maybe<InventoryUpdateOneWithoutMovementsInput>;
  product?: Maybe<ProductUpdateOneRequiredWithoutMovementsInput>;
  warehouse?: Maybe<WarehouseUpdateOneWithoutMovementsInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutMovementInput>;
  comments?: Maybe<MessageUpdateManyWithoutMovementInput>;
  reservation?: Maybe<ReservationUpdateOneWithoutMovementInput>;
  transports?: Maybe<TransportUpdateManyWithoutMovementInput>;
  documents?: Maybe<FileUpdateManyWithoutMovementInput>;
  payments?: Maybe<PaymentUpdateManyWithoutMovementInput>;
};

export type FileUpdateWithoutPaymentDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  smallUrl?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<ManufacturerUpdateOneWithoutImagesInput>;
  message?: Maybe<MessageUpdateOneWithoutImagesInput>;
  client?: Maybe<ClientUpdateOneWithoutImagesInput>;
  supplier?: Maybe<SupplierUpdateOneWithoutImagesInput>;
  product?: Maybe<ProductUpdateOneWithoutImagesInput>;
  transportAgency?: Maybe<TransportAgencyUpdateOneWithoutImagesInput>;
  transporter?: Maybe<TransporterUpdateOneWithoutImagesInput>;
  settings?: Maybe<SettingUpdateManyWithoutLogoInput>;
  Invoice?: Maybe<InvoiceUpdateManyWithoutPdfInput>;
  imageCategory?: Maybe<CategoryUpdateManyWithoutImageInput>;
  bannerCategory?: Maybe<CategoryUpdateManyWithoutBannerImageInput>;
  Movement?: Maybe<MovementUpdateOneWithoutDocumentsInput>;
};

export type FileUpdateWithoutTransporterDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  smallUrl?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<ManufacturerUpdateOneWithoutImagesInput>;
  message?: Maybe<MessageUpdateOneWithoutImagesInput>;
  client?: Maybe<ClientUpdateOneWithoutImagesInput>;
  supplier?: Maybe<SupplierUpdateOneWithoutImagesInput>;
  product?: Maybe<ProductUpdateOneWithoutImagesInput>;
  transportAgency?: Maybe<TransportAgencyUpdateOneWithoutImagesInput>;
  settings?: Maybe<SettingUpdateManyWithoutLogoInput>;
  Invoice?: Maybe<InvoiceUpdateManyWithoutPdfInput>;
  imageCategory?: Maybe<CategoryUpdateManyWithoutImageInput>;
  bannerCategory?: Maybe<CategoryUpdateManyWithoutBannerImageInput>;
  Movement?: Maybe<MovementUpdateOneWithoutDocumentsInput>;
  Payment?: Maybe<PaymentUpdateOneWithoutDocumentsInput>;
};

export type TransportUpdateWithoutTransporterDataInput = {
  arrivalDate?: Maybe<Scalars['DateTime']>;
  arrivalPoint?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  notes?: Maybe<Scalars['String']>;
  movement?: Maybe<MovementUpdateOneWithoutTransportsInput>;
  transportAgency?: Maybe<TransportAgencyUpdateOneWithoutTransportsInput>;
};

export type InventoryUpdateWithoutBatchDataInput = {
  amount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  storageNumber?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  isListed?: Maybe<Scalars['Boolean']>;
  listPrice?: Maybe<Scalars['Float']>;
  supplier?: Maybe<SupplierUpdateOneWithoutInventoriesInput>;
  product?: Maybe<ProductUpdateOneRequiredWithoutInventoriesInput>;
  warehouse?: Maybe<WarehouseUpdateOneWithoutInventoriesInput>;
  movements?: Maybe<MovementUpdateManyWithoutInventoryInput>;
  reservations?: Maybe<ReservationUpdateManyWithoutInventoryInput>;
  client?: Maybe<ClientUpdateOneWithoutInventoriesInput>;
};

export type MovementUpdateWithoutBatchDataInput = {
  active?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  status?: Maybe<MovementStatus>;
  movementId?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
  sendMail?: Maybe<Scalars['Boolean']>;
  storageNumber?: Maybe<Scalars['String']>;
  type?: Maybe<MovementType>;
  unitPrice?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  invoiceId?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  client?: Maybe<ClientUpdateOneWithoutMovementsInput>;
  supplier?: Maybe<SupplierUpdateOneWithoutMovementsInput>;
  inventory?: Maybe<InventoryUpdateOneWithoutMovementsInput>;
  product?: Maybe<ProductUpdateOneRequiredWithoutMovementsInput>;
  warehouse?: Maybe<WarehouseUpdateOneWithoutMovementsInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutMovementInput>;
  comments?: Maybe<MessageUpdateManyWithoutMovementInput>;
  reservation?: Maybe<ReservationUpdateOneWithoutMovementInput>;
  transports?: Maybe<TransportUpdateManyWithoutMovementInput>;
  invoice?: Maybe<InvoiceUpdateOneWithoutMovementsInput>;
  documents?: Maybe<FileUpdateManyWithoutMovementInput>;
  payments?: Maybe<PaymentUpdateManyWithoutMovementInput>;
};

export type CategoryUpdateWithoutCategoryDataInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<FileUpdateOneWithoutImageCategoryInput>;
  bannerImage?: Maybe<FileUpdateOneWithoutBannerCategoryInput>;
  products?: Maybe<ProductUpdateManyWithoutCategoriesInput>;
  subCategories?: Maybe<CategoryUpdateManyWithoutCategoryInput>;
};

export type ProductUpdateManyWithoutCategoriesInput = {
  create?: Maybe<Array<ProductCreateWithoutCategoriesInput>>;
  connect?: Maybe<Array<ProductWhereUniqueInput>>;
  set?: Maybe<Array<ProductWhereUniqueInput>>;
  disconnect?: Maybe<Array<ProductWhereUniqueInput>>;
  delete?: Maybe<Array<ProductWhereUniqueInput>>;
  update?: Maybe<Array<ProductUpdateWithWhereUniqueWithoutCategoriesInput>>;
  updateMany?: Maybe<Array<ProductUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<ProductScalarWhereInput>>;
  upsert?: Maybe<Array<ProductUpsertWithWhereUniqueWithoutCategoriesInput>>;
};

export type ProductUpdateWithWhereUniqueWithoutManufacturerInput = {
  where: ProductWhereUniqueInput;
  data: ProductUpdateWithoutManufacturerDataInput;
};

export type ProductUpsertWithWhereUniqueWithoutManufacturerInput = {
  where: ProductWhereUniqueInput;
  update: ProductUpdateWithoutManufacturerDataInput;
  create: ProductCreateWithoutManufacturerInput;
};

export type TransportAgencyUpdateWithoutTransportersDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutTransportAgencyInput>;
  images?: Maybe<FileUpdateManyWithoutTransportAgencyInput>;
  transports?: Maybe<TransportUpdateManyWithoutTransportAgencyInput>;
  address?: Maybe<AddressUpdateOneWithoutTransportAgencyInput>;
  payments?: Maybe<PaymentUpdateManyWithoutTransportAgencyInput>;
};

export type TransportAgencyUpsertWithoutTransportersInput = {
  update: TransportAgencyUpdateWithoutTransportersDataInput;
  create: TransportAgencyCreateWithoutTransportersInput;
};

export type TransportAgencyUpdateWithoutTransportsDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutTransportAgencyInput>;
  images?: Maybe<FileUpdateManyWithoutTransportAgencyInput>;
  transporters?: Maybe<TransporterUpdateManyWithoutTransportAgencyInput>;
  address?: Maybe<AddressUpdateOneWithoutTransportAgencyInput>;
  payments?: Maybe<PaymentUpdateManyWithoutTransportAgencyInput>;
};

export type TransportAgencyUpsertWithoutTransportsInput = {
  update: TransportAgencyUpdateWithoutTransportsDataInput;
  create: TransportAgencyCreateWithoutTransportsInput;
};

export type ProductUpdateWithWhereUniqueWithoutCategoriesInput = {
  where: ProductWhereUniqueInput;
  data: ProductUpdateWithoutCategoriesDataInput;
};

export type ProductUpsertWithWhereUniqueWithoutCategoriesInput = {
  where: ProductWhereUniqueInput;
  update: ProductUpdateWithoutCategoriesDataInput;
  create: ProductCreateWithoutCategoriesInput;
};

export type ProductUpdateWithoutManufacturerDataInput = {
  id?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['Int']>;
  ASIN?: Maybe<Scalars['String']>;
  EAN?: Maybe<Scalars['String']>;
  ISBN?: Maybe<Scalars['String']>;
  UPC?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  material?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  isPackaging?: Maybe<Scalars['Boolean']>;
  isListed?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<ProductUpdatetagsInput>;
  dimensions?: Maybe<DimensionUpdateOneWithoutProductInput>;
  batches?: Maybe<BatchUpdateManyWithoutProductInput>;
  images?: Maybe<FileUpdateManyWithoutProductInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutProductInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutProductInput>;
  movements?: Maybe<MovementUpdateManyWithoutProductInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutProductInput>;
  units?: Maybe<UnitUpdateManyWithoutProductInput>;
  taxRates?: Maybe<TaxRateUpdateManyWithoutProductInput>;
  packaging?: Maybe<ProductUpdateManyWithoutPackagedProductInput>;
  variants?: Maybe<ProductUpdateManyWithoutVariantProductInput>;
  packagedProduct?: Maybe<ProductUpdateOneWithoutPackagingInput>;
  variantProduct?: Maybe<ProductUpdateOneWithoutVariantsInput>;
  categories?: Maybe<CategoryUpdateManyWithoutProductsInput>;
};

export type ProductUpdateWithoutCategoriesDataInput = {
  id?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['Int']>;
  ASIN?: Maybe<Scalars['String']>;
  EAN?: Maybe<Scalars['String']>;
  ISBN?: Maybe<Scalars['String']>;
  UPC?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  material?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  isPackaging?: Maybe<Scalars['Boolean']>;
  isListed?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<ProductUpdatetagsInput>;
  dimensions?: Maybe<DimensionUpdateOneWithoutProductInput>;
  manufacturer?: Maybe<ManufacturerUpdateOneWithoutProductsInput>;
  batches?: Maybe<BatchUpdateManyWithoutProductInput>;
  images?: Maybe<FileUpdateManyWithoutProductInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutProductInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutProductInput>;
  movements?: Maybe<MovementUpdateManyWithoutProductInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutProductInput>;
  units?: Maybe<UnitUpdateManyWithoutProductInput>;
  taxRates?: Maybe<TaxRateUpdateManyWithoutProductInput>;
  packaging?: Maybe<ProductUpdateManyWithoutPackagedProductInput>;
  variants?: Maybe<ProductUpdateManyWithoutVariantProductInput>;
  packagedProduct?: Maybe<ProductUpdateOneWithoutPackagingInput>;
  variantProduct?: Maybe<ProductUpdateOneWithoutVariantsInput>;
};

export type Query = {
  me: User;
  user: User;
  users: Array<User>;
  userCount: Scalars['Int'];
  permissions: Array<Permission>;
  channels: Array<Channel>;
  messages: Array<Message>;
  client?: Maybe<Client>;
  clients: Array<Client>;
  clientCount: Scalars['Int'];
  batches: Array<Batch>;
  inventory?: Maybe<Inventory>;
  _inventories: Array<Inventory>;
  inventories: Array<Inventory>;
  inventoryCount: Scalars['Int'];
  supplierInventories: Array<Inventory>;
  supplierInventoryCount: Scalars['Int'];
  invoices: Array<Invoice>;
  transporters: Array<Transporter>;
  warehouse?: Maybe<Warehouse>;
  warehouses: Array<Warehouse>;
  transportAgencies: Array<TransportAgency>;
  transportAgency?: Maybe<TransportAgency>;
  transportAgencyCount: Scalars['Int'];
  warehouseCount: Scalars['Int'];
  movement?: Maybe<Movement>;
  movements: Array<Movement>;
  movementCount: Scalars['Int'];
  clientMovements: Array<Movement>;
  clientMovementCount: Scalars['Int'];
  supplierMovements: Array<Movement>;
  supplierMovementCount: Scalars['Int'];
  notifications: Array<Notification>;
  taxRate?: Maybe<TaxRate>;
  taxRates: Array<TaxRate>;
  group?: Maybe<Group>;
  groups: Array<Group>;
  bankAccounts: Array<BankAccount>;
  payment?: Maybe<Payment>;
  payments: Array<Payment>;
  paymentCount: Scalars['Int'];
  publicPayment: PublicPayment;
  product?: Maybe<Product>;
  products: Array<Product>;
  unit?: Maybe<Unit>;
  units: Array<Unit>;
  productCount: Scalars['Int'];
  listedProduct: ListedProduct;
  listedProducts: Array<ListedProduct>;
  role: Role;
  roles: Array<Role>;
  roleCount: Scalars['Int'];
  presets: Array<Preset>;
  setting?: Maybe<Setting>;
  supplier?: Maybe<Supplier>;
  suppliers: Array<Supplier>;
  supplierCount: Scalars['Int'];
};


export type QueryUserArgs = {
  id: Scalars['String'];
};


export type QueryChannelsArgs = {
  where?: Maybe<ChannelWhereInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ChannelWhereUniqueInput>;
};


export type QueryMessagesArgs = {
  where?: Maybe<MessageWhereInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<MessageWhereUniqueInput>;
};


export type QueryClientArgs = {
  where: ClientWhereUniqueInput;
};


export type QueryClientsArgs = {
  where?: Maybe<ClientWhereInput>;
  orderBy?: Maybe<ClientOrderByInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ClientWhereUniqueInput>;
};


export type QueryClientCountArgs = {
  where?: Maybe<ClientWhereInput>;
};


export type QueryBatchesArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<BatchWhereUniqueInput>;
};


export type QueryInventoryArgs = {
  where: InventoryWhereUniqueInput;
};


export type Query_InventoriesArgs = {
  where?: Maybe<InventoryWhereInput>;
  orderBy?: Maybe<InventoryOrderByInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<InventoryWhereUniqueInput>;
};


export type QueryInventoriesArgs = {
  where?: Maybe<InventoryWhereInput>;
  orderBy?: Maybe<InventoryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryInventoryCountArgs = {
  where?: Maybe<InventoryWhereInput>;
};


export type QuerySupplierInventoriesArgs = {
  where?: Maybe<InventoryWhereInput>;
  orderBy?: Maybe<InventoryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QuerySupplierInventoryCountArgs = {
  where?: Maybe<InventoryWhereInput>;
};


export type QueryInvoicesArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<InvoiceWhereUniqueInput>;
};


export type QueryTransportersArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<TransporterWhereUniqueInput>;
};


export type QueryWarehouseArgs = {
  where: WarehouseWhereUniqueInput;
};


export type QueryWarehousesArgs = {
  where?: Maybe<WarehouseWhereInput>;
  orderBy?: Maybe<WarehouseOrderByInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<WarehouseWhereUniqueInput>;
};


export type QueryTransportAgenciesArgs = {
  where?: Maybe<TransportAgencyWhereInput>;
  orderBy?: Maybe<TransportAgencyOrderByInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<TransportAgencyWhereUniqueInput>;
};


export type QueryTransportAgencyArgs = {
  where: TransportAgencyWhereUniqueInput;
};


export type QueryTransportAgencyCountArgs = {
  where?: Maybe<TransportAgencyWhereInput>;
};


export type QueryWarehouseCountArgs = {
  where?: Maybe<WarehouseWhereInput>;
};


export type QueryMovementArgs = {
  where: MovementWhereUniqueInput;
};


export type QueryMovementsArgs = {
  where?: Maybe<MovementWhereInput>;
  orderBy?: Maybe<MovementOrderByInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<MovementWhereUniqueInput>;
};


export type QueryMovementCountArgs = {
  where?: Maybe<MovementWhereInput>;
};


export type QueryClientMovementsArgs = {
  where?: Maybe<MovementWhereInput>;
  orderBy?: Maybe<MovementOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryClientMovementCountArgs = {
  where?: Maybe<MovementWhereInput>;
};


export type QuerySupplierMovementsArgs = {
  where?: Maybe<MovementWhereInput>;
  orderBy?: Maybe<MovementOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QuerySupplierMovementCountArgs = {
  where?: Maybe<MovementWhereInput>;
};


export type QueryTaxRateArgs = {
  where: TaxRateWhereUniqueInput;
};


export type QueryTaxRatesArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<TaxRateWhereUniqueInput>;
};


export type QueryGroupArgs = {
  where: GroupWhereUniqueInput;
};


export type QueryGroupsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<GroupWhereUniqueInput>;
};


export type QueryBankAccountsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<BankAccountWhereUniqueInput>;
};


export type QueryPaymentArgs = {
  where: PaymentWhereUniqueInput;
};


export type QueryPaymentsArgs = {
  where?: Maybe<PaymentWhereInput>;
  orderBy?: Maybe<PaymentOrderByInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<PaymentWhereUniqueInput>;
};


export type QueryPaymentCountArgs = {
  where?: Maybe<PaymentWhereInput>;
};


export type QueryPublicPaymentArgs = {
  id: Scalars['String'];
};


export type QueryProductArgs = {
  where: ProductWhereUniqueInput;
};


export type QueryProductsArgs = {
  where?: Maybe<ProductWhereInput>;
  orderBy?: Maybe<ProductOrderByInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ProductWhereUniqueInput>;
};


export type QueryUnitArgs = {
  where: UnitWhereUniqueInput;
};


export type QueryUnitsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<UnitWhereUniqueInput>;
};


export type QueryProductCountArgs = {
  where?: Maybe<ProductWhereInput>;
};


export type QueryListedProductArgs = {
  where?: Maybe<ProductWhereUniqueInput>;
};


export type QueryListedProductsArgs = {
  where?: Maybe<ProductWhereInput>;
  orderBy?: Maybe<ProductOrderByInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryRoleArgs = {
  id: Scalars['String'];
};


export type QueryPresetsArgs = {
  where?: Maybe<PresetWhereInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<PresetWhereUniqueInput>;
};


export type QuerySettingArgs = {
  where: SettingWhereUniqueInput;
};


export type QuerySupplierArgs = {
  where: SupplierWhereUniqueInput;
};


export type QuerySuppliersArgs = {
  where?: Maybe<SupplierWhereInput>;
  orderBy?: Maybe<SupplierOrderByInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<SupplierWhereUniqueInput>;
};


export type QuerySupplierCountArgs = {
  where?: Maybe<SupplierWhereInput>;
};

export type Mutation = {
  createOneIntegrationRequest: IntegrationRequest;
  sendSupportMessage: ValidationPayload;
  createOneUser: ValidationPayload;
  setPassword: ValidationPayload;
  updateOneUser: ValidationPayload;
  deleteOneUser: ValidationPayload;
  changePassword: ResetPasswordPayload;
  createOneSubscription: ValidationPayload;
  authenticateShopifyIntegration: ValidationPayload;
  createOneMessage: Message;
  updateOneMessage?: Maybe<Message>;
  deleteOneMessage?: Maybe<Message>;
  createOneChannel: Channel;
  updateOneChannel?: Maybe<Channel>;
  deleteOneChannel?: Maybe<Channel>;
  _createOneClient: Client;
  updateOneClient?: Maybe<Client>;
  deleteOneClient: Client;
  deleteOneContactPerson?: Maybe<ContactPerson>;
  createOneClient: Client;
  importClients: ValidationPayload;
  updateOneInventory: Inventory;
  deleteOneInvoice?: Maybe<Invoice>;
  createOneInvoice: Invoice;
  createOneTransportAgency: TransportAgency;
  updateOneTransportAgency?: Maybe<TransportAgency>;
  deleteOneTransportAgency?: Maybe<TransportAgency>;
  createOneWarehouse: Warehouse;
  updateOneWarehouse?: Maybe<Warehouse>;
  deleteOneWarehouse?: Maybe<Warehouse>;
  deleteOneTransport?: Maybe<Transport>;
  deleteOneTransporter?: Maybe<Transporter>;
  createOneOutgoingMovement: Movement;
  createOneIncomingMovement: Movement;
  updateOneMovement: Movement;
  deleteOneMovement: Movement;
  importMovements: ValidationPayload;
  _createOneNotification: Notification;
  createOneNotification: Notification;
  updateOneNotification?: Maybe<Notification>;
  deleteOneNotification?: Maybe<Notification>;
  createOnePayment: Payment;
  updateOnePayment: Payment;
  createOneCheckout: StripeCheckout;
  deleteOnePayment?: Maybe<Payment>;
  createOneTaxRate: TaxRate;
  updateOneTaxRate?: Maybe<TaxRate>;
  deleteOneTaxRate?: Maybe<TaxRate>;
  createOneGroup: Group;
  updateOneGroup?: Maybe<Group>;
  deleteOneGroup?: Maybe<Group>;
  createOneUnit: Unit;
  createOneProduct: Product;
  updateOneProduct: Product;
  deleteOneProduct?: Maybe<Product>;
  deleteOneUnit?: Maybe<Unit>;
  deleteOneFile?: Maybe<File>;
  assignRole: ValidationPayload;
  createOneRole: Role;
  updateOneRole: ValidationPayload;
  deleteOneRole: ValidationPayload;
  createOnePreset: Preset;
  updateOnePreset?: Maybe<Preset>;
  deleteOnePreset?: Maybe<Preset>;
  _updateOneSetting?: Maybe<Setting>;
  createOneSetting: Setting;
  updateOneSetting: Setting;
  activatePreset: ValidationPayload;
  _createOneSupplier: Supplier;
  updateOneSupplier?: Maybe<Supplier>;
  deleteOneSupplier: Supplier;
  createOneSupplier: Supplier;
  importSuppliers: ValidationPayload;
};


export type MutationCreateOneIntegrationRequestArgs = {
  data: IntegrationRequestCreateInput;
};


export type MutationSendSupportMessageArgs = {
  message: Scalars['String'];
};


export type MutationCreateOneUserArgs = {
  name: Scalars['String'];
  email: Scalars['String'];
  roleId: Scalars['ID'];
};


export type MutationSetPasswordArgs = {
  password: Scalars['String'];
};


export type MutationUpdateOneUserArgs = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  roleId?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  timezone?: Maybe<Scalars['String']>;
};


export type MutationDeleteOneUserArgs = {
  id: Scalars['String'];
};


export type MutationCreateOneSubscriptionArgs = {
  customerId: Scalars['String'];
  plan: Scalars['String'];
  paymentMethodId: Scalars['String'];
};


export type MutationAuthenticateShopifyIntegrationArgs = {
  state: Scalars['String'];
  shop: Scalars['String'];
  hmac: Scalars['String'];
  code: Scalars['String'];
};


export type MutationCreateOneMessageArgs = {
  text?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Scalars['Upload']>>;
  mentions?: Maybe<Array<Scalars['String']>>;
  channelId: Scalars['ID'];
};


export type MutationUpdateOneMessageArgs = {
  data: MessageUpdateInput;
  where: MessageWhereUniqueInput;
};


export type MutationDeleteOneMessageArgs = {
  where: MessageWhereUniqueInput;
};


export type MutationCreateOneChannelArgs = {
  data: ChannelCreateInput;
};


export type MutationUpdateOneChannelArgs = {
  data: ChannelUpdateInput;
  where: ChannelWhereUniqueInput;
};


export type MutationDeleteOneChannelArgs = {
  where: ChannelWhereUniqueInput;
};


export type Mutation_CreateOneClientArgs = {
  data: ClientCreateInput;
};


export type MutationUpdateOneClientArgs = {
  data: ClientUpdateInput;
  where: ClientWhereUniqueInput;
};


export type MutationDeleteOneClientArgs = {
  where?: Maybe<ClientWhereUniqueInput>;
};


export type MutationDeleteOneContactPersonArgs = {
  where: ContactPersonWhereUniqueInput;
};


export type MutationCreateOneClientArgs = {
  name: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  withAccount: Scalars['Boolean'];
  clientId?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  address?: Maybe<AddressCreateOneWithoutClientAddressInput>;
  billingAddress?: Maybe<AddressCreateOneWithoutClientBillingAddressInput>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutClientInput>;
  phone?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  importId?: Maybe<Scalars['ID']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
};


export type MutationImportClientsArgs = {
  importClients: Array<ClientImport>;
};


export type MutationUpdateOneInventoryArgs = {
  isListed?: Maybe<Scalars['Boolean']>;
  listPrice?: Maybe<Scalars['Float']>;
  id: Scalars['String'];
};


export type MutationDeleteOneInvoiceArgs = {
  where: InvoiceWhereUniqueInput;
};


export type MutationCreateOneInvoiceArgs = {
  withTaxes: Scalars['Boolean'];
  language: Language;
  movements?: Maybe<MovementCreateManyWithoutInvoiceInput>;
};


export type MutationCreateOneTransportAgencyArgs = {
  data: TransportAgencyCreateInput;
};


export type MutationUpdateOneTransportAgencyArgs = {
  data: TransportAgencyUpdateInput;
  where: TransportAgencyWhereUniqueInput;
};


export type MutationDeleteOneTransportAgencyArgs = {
  where: TransportAgencyWhereUniqueInput;
};


export type MutationCreateOneWarehouseArgs = {
  data: WarehouseCreateInput;
};


export type MutationUpdateOneWarehouseArgs = {
  data: WarehouseUpdateInput;
  where: WarehouseWhereUniqueInput;
};


export type MutationDeleteOneWarehouseArgs = {
  where: WarehouseWhereUniqueInput;
};


export type MutationDeleteOneTransportArgs = {
  where: TransportWhereUniqueInput;
};


export type MutationDeleteOneTransporterArgs = {
  where: TransporterWhereUniqueInput;
};


export type MutationCreateOneOutgoingMovementArgs = {
  inventoryId: Scalars['String'];
  amount: Scalars['Int'];
  notes?: Maybe<Scalars['String']>;
  sendMail: Scalars['Boolean'];
  clientId: Scalars['String'];
  date: Scalars['DateTime'];
  unitPrice?: Maybe<Scalars['Float']>;
  transports?: Maybe<TransportCreateManyWithoutMovementInput>;
  documents?: Maybe<Array<Scalars['Upload']>>;
};


export type MutationCreateOneIncomingMovementArgs = {
  amount: Scalars['Int'];
  notes?: Maybe<Scalars['String']>;
  sendMail: Scalars['Boolean'];
  supplierId: Scalars['ID'];
  date: Scalars['DateTime'];
  productId: Scalars['ID'];
  batchNumber?: Maybe<Scalars['String']>;
  unitPrice?: Maybe<Scalars['Float']>;
  bestBefore?: Maybe<Scalars['DateTime']>;
  transports?: Maybe<TransportCreateManyWithoutMovementInput>;
  documents?: Maybe<Array<Scalars['Upload']>>;
  warehouseId?: Maybe<Scalars['ID']>;
};


export type MutationUpdateOneMovementArgs = {
  id: Scalars['ID'];
  amount?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
  sendMail?: Maybe<Scalars['Boolean']>;
  date?: Maybe<Scalars['DateTime']>;
  unitPrice?: Maybe<Scalars['Float']>;
  transports?: Maybe<TransportUpdateManyWithoutMovementInput>;
  documents?: Maybe<Array<Scalars['Upload']>>;
};


export type MutationDeleteOneMovementArgs = {
  id: Scalars['ID'];
};


export type MutationImportMovementsArgs = {
  importMovements: Array<MovementImport>;
};


export type Mutation_CreateOneNotificationArgs = {
  data: NotificationCreateInput;
};


export type MutationCreateOneNotificationArgs = {
  amount: Scalars['Int'];
  product?: Maybe<ProductCreateOneWithoutNotificationsInput>;
  type: NotificationType;
  warehouse?: Maybe<WarehouseCreateOneWithoutNotificationInput>;
};


export type MutationUpdateOneNotificationArgs = {
  data: NotificationUpdateInput;
  where: NotificationWhereUniqueInput;
};


export type MutationDeleteOneNotificationArgs = {
  where: NotificationWhereUniqueInput;
};


export type MutationCreateOnePaymentArgs = {
  type: PaymentType;
  concept?: Maybe<Scalars['String']>;
  amount: Scalars['Float'];
  notes?: Maybe<Scalars['String']>;
  recipient?: Maybe<Scalars['String']>;
  supplierId?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['String']>;
  transportAgencyId?: Maybe<Scalars['String']>;
  group?: Maybe<GroupCreateOneWithoutPaymentsInput>;
  taxRate?: Maybe<TaxRateCreateOneWithoutPaymentsInput>;
  status: PaymentStatus;
  documents?: Maybe<Array<Scalars['Upload']>>;
  date?: Maybe<Scalars['DateTime']>;
  dueDate?: Maybe<Scalars['DateTime']>;
  withStripe: Scalars['Boolean'];
};


export type MutationUpdateOnePaymentArgs = {
  id: Scalars['String'];
  concept?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  notes?: Maybe<Scalars['String']>;
  group?: Maybe<GroupUpdateOneWithoutPaymentsInput>;
  taxRate?: Maybe<TaxRateUpdateOneWithoutPaymentsInput>;
  status?: Maybe<PaymentStatus>;
  documents?: Maybe<Array<Scalars['Upload']>>;
  date?: Maybe<Scalars['DateTime']>;
  dueDate?: Maybe<Scalars['DateTime']>;
};


export type MutationCreateOneCheckoutArgs = {
  successUrl: Scalars['String'];
  cancelUrl: Scalars['String'];
  inventories: Array<StripeCheckoutInventory>;
};


export type MutationDeleteOnePaymentArgs = {
  where: PaymentWhereUniqueInput;
};


export type MutationCreateOneTaxRateArgs = {
  data: TaxRateCreateInput;
};


export type MutationUpdateOneTaxRateArgs = {
  data: TaxRateUpdateInput;
  where: TaxRateWhereUniqueInput;
};


export type MutationDeleteOneTaxRateArgs = {
  where: TaxRateWhereUniqueInput;
};


export type MutationCreateOneGroupArgs = {
  data: GroupCreateInput;
};


export type MutationUpdateOneGroupArgs = {
  data: GroupUpdateInput;
  where: GroupWhereUniqueInput;
};


export type MutationDeleteOneGroupArgs = {
  where: GroupWhereUniqueInput;
};


export type MutationCreateOneUnitArgs = {
  data: UnitCreateInput;
};


export type MutationCreateOneProductArgs = {
  EAN?: Maybe<Scalars['String']>;
  ISBN?: Maybe<Scalars['String']>;
  ASIN?: Maybe<Scalars['String']>;
  UPC?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  units?: Maybe<UnitCreateManyWithoutProductInput>;
  dimensions?: Maybe<DimensionCreateOneWithoutProductInput>;
  weight?: Maybe<Scalars['Float']>;
  color?: Maybe<Scalars['String']>;
  material?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Scalars['Upload']>>;
  isPackaging?: Maybe<Scalars['Boolean']>;
  taxRates?: Maybe<TaxRateCreateManyWithoutProductInput>;
  packaging?: Maybe<ProductCreateManyWithoutPackagedProductInput>;
  variants?: Maybe<Array<VariantProductInput>>;
  isListed?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateOneProductArgs = {
  id: Scalars['ID'];
  EAN?: Maybe<Scalars['String']>;
  ISBN?: Maybe<Scalars['String']>;
  ASIN?: Maybe<Scalars['String']>;
  UPC?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  units?: Maybe<UnitUpdateManyWithoutProductInput>;
  dimensions?: Maybe<DimensionUpdateOneWithoutProductInput>;
  weight?: Maybe<Scalars['Float']>;
  color?: Maybe<Scalars['String']>;
  material?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Scalars['Upload']>>;
  taxRates?: Maybe<TaxRateUpdateManyWithoutProductInput>;
  isPackaging?: Maybe<Scalars['Boolean']>;
  packaging?: Maybe<ProductUpdateManyWithoutPackagedProductInput>;
  variants?: Maybe<ProductUpdateManyWithoutVariantProductInput>;
  isListed?: Maybe<Scalars['Boolean']>;
};


export type MutationDeleteOneProductArgs = {
  where: ProductWhereUniqueInput;
};


export type MutationDeleteOneUnitArgs = {
  where: UnitWhereUniqueInput;
};


export type MutationDeleteOneFileArgs = {
  where: FileWhereUniqueInput;
};


export type MutationAssignRoleArgs = {
  email: Scalars['String'];
  role: Scalars['String'];
};


export type MutationCreateOneRoleArgs = {
  name: Scalars['String'];
  description: Scalars['String'];
  permissions: Array<Scalars['String']>;
};


export type MutationUpdateOneRoleArgs = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Scalars['String']>>;
};


export type MutationDeleteOneRoleArgs = {
  id: Scalars['ID'];
};


export type MutationCreateOnePresetArgs = {
  data: PresetCreateInput;
};


export type MutationUpdateOnePresetArgs = {
  data: PresetUpdateInput;
  where: PresetWhereUniqueInput;
};


export type MutationDeleteOnePresetArgs = {
  where: PresetWhereUniqueInput;
};


export type Mutation_UpdateOneSettingArgs = {
  data: SettingUpdateInput;
  where: SettingWhereUniqueInput;
};


export type MutationCreateOneSettingArgs = {
  data: SettingCreateInput;
};


export type MutationUpdateOneSettingArgs = {
  timezone?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  currencySymbol?: Maybe<Scalars['String']>;
  clientFields?: Maybe<SettingUpdateclientFieldsInput>;
  supplierFields?: Maybe<SettingUpdatesupplierFieldsInput>;
  productFields?: Maybe<SettingUpdateproductFieldsInput>;
  transportAgencyFields?: Maybe<SettingUpdatetransportAgencyFieldsInput>;
  movementFields?: Maybe<SettingUpdatemovementFieldsInput>;
  transportFields?: Maybe<SettingUpdatetransportFieldsInput>;
  transporterFields?: Maybe<SettingUpdatetransporterFieldsInput>;
  warehouseFields?: Maybe<SettingUpdatewarehouseFieldsInput>;
  paymentFields?: Maybe<SettingUpdatepaymentFieldsInput>;
  chat?: Maybe<Scalars['Boolean']>;
  transports?: Maybe<Scalars['Boolean']>;
  warehouses?: Maybe<Scalars['Boolean']>;
  accounting?: Maybe<Scalars['Boolean']>;
  defaultLanguage?: Maybe<Language>;
  name?: Maybe<Scalars['String']>;
  address?: Maybe<AddressUpdateOneWithoutAddressInput>;
  billingAddress?: Maybe<AddressUpdateOneWithoutBillingAddressInput>;
  fiscalNumber?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['Upload']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  packaging?: Maybe<Scalars['Boolean']>;
  lengthUnit?: Maybe<Scalars['String']>;
  weightUnit?: Maybe<Scalars['String']>;
};


export type MutationActivatePresetArgs = {
  id?: Maybe<Scalars['ID']>;
  type?: Maybe<EntityType>;
};


export type Mutation_CreateOneSupplierArgs = {
  data: SupplierCreateInput;
};


export type MutationUpdateOneSupplierArgs = {
  data: SupplierUpdateInput;
  where: SupplierWhereUniqueInput;
};


export type MutationDeleteOneSupplierArgs = {
  where?: Maybe<SupplierWhereUniqueInput>;
};


export type MutationCreateOneSupplierArgs = {
  name: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  withAccount: Scalars['Boolean'];
  supplierId?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  address?: Maybe<AddressCreateOneWithoutSupplierAddressInput>;
  billingAddress?: Maybe<AddressCreateOneWithoutSupplierBillingAddressInput>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutSupplierInput>;
  phone?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
};


export type MutationImportSuppliersArgs = {
  importSuppliers: Array<SupplierImport>;
};

export type Create_CheckoutMutationVariables = Exact<{
  successUrl: Scalars['String'];
  cancelUrl: Scalars['String'];
  inventories: Array<StripeCheckoutInventory>;
}>;


export type Create_CheckoutMutation = { createOneCheckout: Pick<StripeCheckout, 'checkoutId' | 'stripeAccountId'> };

export type Get_ProductQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type Get_ProductQuery = { listedProduct: (
    Pick<ListedProduct, 'id' | 'name' | 'slug' | 'currencySymbol' | 'description'>
    & { images: Array<Pick<File, 'id' | 'url'>>, listedInventories: Array<Pick<ListedInventory, 'id' | 'amount' | 'listPrice'>> }
  ) };

export type Get_ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type Get_ProductsQuery = { listedProducts: Array<(
    Pick<ListedProduct, 'id' | 'name' | 'slug' | 'currencySymbol'>
    & { listedInventories: Array<Pick<ListedInventory, 'id' | 'amount'>>, images: Array<Pick<File, 'id' | 'url'>> }
  )> };


export const Create_CheckoutDocument = gql`
    mutation CREATE_CHECKOUT($successUrl: String!, $cancelUrl: String!, $inventories: [StripeCheckoutInventory!]!) {
  createOneCheckout(successUrl: $successUrl, cancelUrl: $cancelUrl, inventories: $inventories) {
    checkoutId
    stripeAccountId
  }
}
    `;

export function useCreate_CheckoutMutation() {
  return Urql.useMutation<Create_CheckoutMutation, Create_CheckoutMutationVariables>(Create_CheckoutDocument);
};
export const Get_ProductDocument = gql`
    query GET_PRODUCT($slug: String!) {
  listedProduct(where: {slug: $slug}) {
    id
    name
    slug
    images {
      id
      url
    }
    currencySymbol
    listedInventories {
      id
      amount
      listPrice
    }
    description
  }
}
    `;

export function useGet_ProductQuery(options: Omit<Urql.UseQueryArgs<Get_ProductQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<Get_ProductQuery>({ query: Get_ProductDocument, ...options });
};
export const Get_ProductsDocument = gql`
    query GET_PRODUCTS {
  listedProducts {
    id
    name
    slug
    listedInventories {
      id
      amount
    }
    currencySymbol
    images {
      id
      url
    }
  }
}
    `;

export function useGet_ProductsQuery(options: Omit<Urql.UseQueryArgs<Get_ProductsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<Get_ProductsQuery>({ query: Get_ProductsDocument, ...options });
};