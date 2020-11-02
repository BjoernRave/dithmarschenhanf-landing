import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
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
  phonePrefix?: Maybe<Scalars['Int']>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  scheduleStart?: Maybe<Scalars['DateTime']>;
  scheduleEnd?: Maybe<Scalars['DateTime']>;
  notes?: Maybe<Scalars['String']>;
  tags: Array<Scalars['String']>;
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
  Unit = 'unit',
  Consumable = 'consumable',
  Payment = 'payment'
}

export type File = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  smallUrl?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
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
  success?: Maybe<Scalars['Boolean']>;
};

export type Permission = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type User = {
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  permissions?: Maybe<Array<Maybe<Scalars['String']>>>;
  timezone?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
};

export type ResetPasswordPayload = {
  url?: Maybe<Scalars['String']>;
};

export type Checkout = {
  href?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type AccountCreation = {
  id?: Maybe<Scalars['ID']>;
  type?: Maybe<Scalars['String']>;
  checkout?: Maybe<Checkout>;
};

export type IntegrationRequest = {
  id: Scalars['String'];
};

export type DashboardLink = {
  href?: Maybe<Scalars['String']>;
};

export type SubscriptionPayload = {
  email?: Maybe<Scalars['String']>;
  plan?: Maybe<Scalars['String']>;
  customerId?: Maybe<Scalars['String']>;
  subDomain?: Maybe<Scalars['String']>;
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
  deleted: Scalars['Boolean'];
  stripeId?: Maybe<Scalars['String']>;
  clientId: Scalars['Int'];
  email?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  name: Scalars['String'];
  withAccount?: Maybe<Scalars['Boolean']>;
  contactPersons: Array<ContactPerson>;
  mobile?: Maybe<Scalars['String']>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  website?: Maybe<Scalars['String']>;
  address?: Maybe<Address>;
  billingAddress?: Maybe<Address>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  tags: Array<Scalars['String']>;
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
  where?: Maybe<MovementWhereInput>;
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
  amount: Scalars['Float'];
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
  where?: Maybe<MovementWhereInput>;
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
  notes?: Maybe<Scalars['String']>;
  tags: Array<Scalars['String']>;
};


export type InvoiceMovementsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<MovementWhereUniqueInput>;
};

export type TransportAgency = {
  id: Scalars['String'];
  deleted: Scalars['Boolean'];
  email?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  contactPersons: Array<ContactPerson>;
  mobile?: Maybe<Scalars['String']>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  website?: Maybe<Scalars['String']>;
  address?: Maybe<Address>;
  billingAddress?: Maybe<Address>;
  source?: Maybe<Scalars['String']>;
  transporters: Array<Transporter>;
  notes?: Maybe<Scalars['String']>;
  tags: Array<Scalars['String']>;
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
  notes?: Maybe<Scalars['String']>;
  tags: Array<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
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
  deleted: Scalars['Boolean'];
  name: Scalars['String'];
  contactPersons: Array<ContactPerson>;
  mobile?: Maybe<Scalars['String']>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  address?: Maybe<Address>;
  email?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  tags: Array<Scalars['String']>;
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
  where?: Maybe<MovementWhereInput>;
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

export enum MovementStatus {
  Cancelled = 'cancelled',
  Pending = 'pending',
  Paid = 'paid',
  Completed = 'completed'
}

export type ConsumableInput = {
  inventoryId: Scalars['String'];
  amount: Scalars['Float'];
};

export type MovementImport = {
  id?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['DateTime']>;
  type?: Maybe<MovementType>;
  productName?: Maybe<Scalars['String']>;
  productWeight?: Maybe<Scalars['Float']>;
  productDimensions?: Maybe<Scalars['String']>;
  productColor?: Maybe<Scalars['String']>;
  productMaterial?: Maybe<Scalars['String']>;
  productTaxPercentage?: Maybe<Scalars['String']>;
  EAN?: Maybe<Scalars['String']>;
  ISBN?: Maybe<Scalars['String']>;
  ASIN?: Maybe<Scalars['String']>;
  UPC?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  client?: Maybe<Scalars['String']>;
  supplier?: Maybe<Scalars['String']>;
  batchNumber?: Maybe<Scalars['String']>;
  unitPrice?: Maybe<Scalars['Float']>;
  bestBefore?: Maybe<Scalars['DateTime']>;
};

export type Movement = {
  id: Scalars['String'];
  deleted: Scalars['Boolean'];
  status?: Maybe<MovementStatus>;
  movementId: Scalars['Int'];
  documents: Array<File>;
  amount: Scalars['Float'];
  client?: Maybe<Client>;
  supplier?: Maybe<Supplier>;
  product: Product;
  sendMail: Scalars['Boolean'];
  notes?: Maybe<Scalars['String']>;
  tags: Array<Scalars['String']>;
  date: Scalars['DateTime'];
  type: MovementType;
  batch?: Maybe<Batch>;
  unitPrice?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  invoice?: Maybe<Invoice>;
  transports: Array<Transport>;
  storageNumber?: Maybe<Scalars['String']>;
  warehouse?: Maybe<Warehouse>;
  inventoryId?: Maybe<Scalars['String']>;
  inventory?: Maybe<Inventory>;
  consumablesMovements: Array<Movement>;
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


export type MovementConsumablesMovementsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<MovementWhereUniqueInput>;
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
  deleted: Scalars['Boolean'];
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
  tags: Array<Scalars['String']>;
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
  id?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  status?: Maybe<PaymentStatus>;
  stripeClientSecret?: Maybe<Scalars['String']>;
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
  checkoutId?: Maybe<Scalars['String']>;
  stripeAccountId?: Maybe<Scalars['String']>;
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
  baseAmount: Scalars['Float'];
};

export type Dimension = {
  id: Scalars['String'];
  depth?: Maybe<Scalars['Float']>;
  height: Scalars['Float'];
  width?: Maybe<Scalars['Float']>;
};

export type Product = {
  id: Scalars['String'];
  deleted: Scalars['Boolean'];
  productId: Scalars['Int'];
  name: Scalars['String'];
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
  consumables: Array<Consumable>;
  consumers: Array<Consumable>;
  isListed?: Maybe<Scalars['Boolean']>;
  variantProduct: Array<Product>;
  inventories: Array<Inventory>;
  tags: Array<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Float']>;
};


export type ProductUnitsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<UnitWhereUniqueInput>;
};


export type ProductVariantsArgs = {
  where?: Maybe<ProductWhereInput>;
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
  where?: Maybe<MovementWhereInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<MovementWhereUniqueInput>;
};


export type ProductConsumablesArgs = {
  where?: Maybe<ConsumableWhereInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ConsumableWhereUniqueInput>;
};


export type ProductConsumersArgs = {
  where?: Maybe<ConsumableWhereInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ConsumableWhereUniqueInput>;
};


export type ProductVariantProductArgs = {
  where?: Maybe<ProductWhereInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ProductWhereUniqueInput>;
};


export type ProductInventoriesArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<InventoryWhereUniqueInput>;
};

export type Consumable = {
  id: Scalars['String'];
  product: Product;
  amount: Scalars['Float'];
  atIncoming: Scalars['Boolean'];
  consumer: Product;
};

export type ListedInventory = {
  id?: Maybe<Scalars['String']>;
  listPrice?: Maybe<Scalars['Float']>;
  amount?: Maybe<Scalars['Int']>;
};

export type ListedProduct = {
  id?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  weightUnit?: Maybe<Scalars['String']>;
  lengthUnit?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  currencySymbol?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  listedInventories?: Maybe<Array<Maybe<ListedInventory>>>;
  weight?: Maybe<Scalars['Float']>;
  material?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  dimensions?: Maybe<Dimension>;
  quantity?: Maybe<Scalars['Float']>;
  images?: Maybe<Array<Maybe<File>>>;
  variants?: Maybe<Array<Maybe<ListedProduct>>>;
};

export type VariantProductInput = {
  color?: Maybe<Scalars['String']>;
  material?: Maybe<Scalars['String']>;
  dimensions?: Maybe<DimensionCreateOneWithoutProductInput>;
  weight?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  consumables?: Maybe<ConsumableCreateManyWithoutConsumerInput>;
};

export type ImageOrderInput = {
  order?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
};

export type Role = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum ClientFields {
  Address = 'address',
  Phone = 'phone',
  Mobile = 'mobile',
  Website = 'website',
  ContactPersons = 'contactPersons',
  FiscalNumber = 'fiscalNumber',
  Images = 'images',
  Notes = 'notes',
  Tags = 'tags'
}

export enum SupplierFields {
  Address = 'address',
  Phone = 'phone',
  Mobile = 'mobile',
  Website = 'website',
  ContactPersons = 'contactPersons',
  FiscalNumber = 'fiscalNumber',
  Images = 'images',
  Notes = 'notes',
  Tags = 'tags'
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
  Material = 'material',
  Tags = 'tags',
  Notes = 'notes',
  Quantity = 'quantity'
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
  Images = 'images',
  Notes = 'notes',
  Tags = 'tags'
}

export enum MovementFields {
  Notes = 'notes',
  Tags = 'tags',
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
  Tags = 'tags',
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
  Notes = 'notes',
  Tags = 'tags',
  TransportAgency = 'transportAgency'
}

export enum WarehouseFields {
  Address = 'address',
  Mobile = 'mobile',
  Phone = 'phone',
  ContactPersons = 'contactPersons',
  Website = 'website',
  Notes = 'notes',
  Tags = 'tags'
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

export type RegistrationPayload = {
  success?: Maybe<Scalars['Boolean']>;
  customerId?: Maybe<Scalars['String']>;
  subDomain?: Maybe<Scalars['String']>;
};

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
  phonePrefix?: Maybe<Scalars['Int']>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  consumables: Scalars['Boolean'];
  shop: Scalars['Boolean'];
  lengthUnit?: Maybe<Scalars['String']>;
  weightUnit?: Maybe<Scalars['String']>;
  paymentFields: Array<PaymentFields>;
  accounting: Scalars['Boolean'];
  invoicing: Scalars['Boolean'];
  shopPurchasedEmail?: Maybe<Scalars['String']>;
  invoiceText?: Maybe<Scalars['String']>;
};


export type SettingPresetsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<PresetWhereUniqueInput>;
};

export type Integration = {
  id: Scalars['String'];
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

export type Interaction = {
  id: Scalars['String'];
  user?: Maybe<User>;
  type: Scalars['String'];
  action: Scalars['String'];
  data: Scalars['String'];
  client?: Maybe<Client>;
  createdAt: Scalars['DateTime'];
  movement?: Maybe<Movement>;
  product?: Maybe<Product>;
  supplier?: Maybe<Supplier>;
  payment?: Maybe<Payment>;
  transportAgency?: Maybe<TransportAgency>;
  warehouse?: Maybe<Warehouse>;
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
  deleted: Scalars['Boolean'];
  supplierId: Scalars['Int'];
  email?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  name: Scalars['String'];
  withAccount?: Maybe<Scalars['Boolean']>;
  contactPersons: Array<ContactPerson>;
  mobile?: Maybe<Scalars['String']>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  website?: Maybe<Scalars['String']>;
  address?: Maybe<Address>;
  billingAddress?: Maybe<Address>;
  fiscalNumber?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  movements: Array<Movement>;
  inventories: Array<Inventory>;
  tags: Array<Scalars['String']>;
};


export type SupplierContactPersonsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ContactPersonWhereUniqueInput>;
};


export type SupplierMovementsArgs = {
  where?: Maybe<MovementWhereInput>;
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
  tenantId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type FileWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  tenantId_smallUrl?: Maybe<TenantIdSmallUrlCompoundUniqueInput>;
};

export type MessageWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type ChannelWhereInput = {
  AND?: Maybe<Array<ChannelWhereInput>>;
  OR?: Maybe<Array<ChannelWhereInput>>;
  NOT?: Maybe<Array<ChannelWhereInput>>;
  tenantId?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  description?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  role?: Maybe<StringNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  messages?: Maybe<MessageListRelationFilter>;
  members?: Maybe<StringNullableListFilter>;
};

export type ChannelWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  tenantId_name?: Maybe<TenantIdNameCompoundUniqueInput>;
};

export type MessageWhereInput = {
  AND?: Maybe<Array<MessageWhereInput>>;
  OR?: Maybe<Array<MessageWhereInput>>;
  NOT?: Maybe<Array<MessageWhereInput>>;
  tenantId?: Maybe<StringNullableFilter>;
  channelId?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  mentions?: Maybe<StringNullableListFilter>;
  movementId?: Maybe<StringNullableFilter>;
  recipient?: Maybe<StringNullableFilter>;
  sender?: Maybe<StringFilter>;
  text?: Maybe<StringNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  channel?: Maybe<ChannelWhereInput>;
  movement?: Maybe<MovementWhereInput>;
  images?: Maybe<FileListRelationFilter>;
};

export type MessageUpdateInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  recipient?: Maybe<NullableStringFieldUpdateOperationsInput>;
  sender?: Maybe<StringFieldUpdateOperationsInput>;
  text?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  mentions?: Maybe<MessageUpdatementionsInput>;
  channel?: Maybe<ChannelUpdateOneWithoutMessagesInput>;
  movement?: Maybe<MovementUpdateOneWithoutCommentsInput>;
  images?: Maybe<FileUpdateManyWithoutMessagesInput>;
};

export type ChannelCreateInput = {
  tenantId?: Maybe<Scalars['String']>;
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
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  members?: Maybe<ChannelUpdatemembersInput>;
  messages?: Maybe<MessageUpdateManyWithoutChannelInput>;
};

export type ContactPersonWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  firstName_lastName_email_tenantId?: Maybe<FirstNameLastNameEmailTenantIdCompoundUniqueInput>;
};

export type MovementWhereInput = {
  AND?: Maybe<Array<MovementWhereInput>>;
  OR?: Maybe<Array<MovementWhereInput>>;
  NOT?: Maybe<Array<MovementWhereInput>>;
  tenantId?: Maybe<StringNullableFilter>;
  deleted?: Maybe<BoolFilter>;
  amount?: Maybe<FloatFilter>;
  batchId?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  date?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  status?: Maybe<EnumMovementStatusNullableFilter>;
  inventoryId?: Maybe<StringNullableFilter>;
  movementId?: Maybe<IntFilter>;
  notes?: Maybe<StringNullableFilter>;
  tags?: Maybe<StringNullableListFilter>;
  productId?: Maybe<StringFilter>;
  sendMail?: Maybe<BoolFilter>;
  storageNumber?: Maybe<StringNullableFilter>;
  type?: Maybe<EnumMovementTypeFilter>;
  unitPrice?: Maybe<FloatNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  warehouseId?: Maybe<StringNullableFilter>;
  clientId?: Maybe<StringNullableFilter>;
  supplierId?: Maybe<StringNullableFilter>;
  client?: Maybe<ClientWhereInput>;
  supplier?: Maybe<SupplierWhereInput>;
  batch?: Maybe<BatchWhereInput>;
  inventory?: Maybe<InventoryWhereInput>;
  product?: Maybe<ProductWhereInput>;
  warehouse?: Maybe<WarehouseWhereInput>;
  interactions?: Maybe<InteractionListRelationFilter>;
  comments?: Maybe<MessageListRelationFilter>;
  reservation?: Maybe<ReservationWhereInput>;
  transports?: Maybe<TransportListRelationFilter>;
  invoiceId?: Maybe<StringNullableFilter>;
  invoiceId_InvoiceToMovement?: Maybe<IntNullableFilter>;
  invoice?: Maybe<InvoiceWhereInput>;
  source?: Maybe<StringNullableFilter>;
  documents?: Maybe<FileListRelationFilter>;
  payments?: Maybe<PaymentListRelationFilter>;
  consumablesMovements?: Maybe<MovementListRelationFilter>;
  consumedFrom?: Maybe<MovementWhereInput>;
  movementId_MovementToMovement?: Maybe<StringNullableFilter>;
};

export type MovementWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type InventoryWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type ClientWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  email_tenantId?: Maybe<EmailTenantIdCompoundUniqueInput>;
  name_tenantId?: Maybe<NameTenantIdCompoundUniqueInput>;
  clientId_tenantId?: Maybe<ClientIdTenantIdCompoundUniqueInput>;
};

export type ClientWhereInput = {
  AND?: Maybe<Array<ClientWhereInput>>;
  OR?: Maybe<Array<ClientWhereInput>>;
  NOT?: Maybe<Array<ClientWhereInput>>;
  tenantId?: Maybe<StringNullableFilter>;
  deleted?: Maybe<BoolFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringNullableFilter>;
  fiscalNumber?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  language?: Maybe<EnumLanguageNullableFilter>;
  mobilePrefix?: Maybe<IntNullableFilter>;
  mobile?: Maybe<StringNullableFilter>;
  phonePrefix?: Maybe<IntNullableFilter>;
  phone?: Maybe<StringNullableFilter>;
  name?: Maybe<StringFilter>;
  clientId?: Maybe<IntFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  website?: Maybe<StringNullableFilter>;
  withAccount?: Maybe<BoolNullableFilter>;
  contactPersons?: Maybe<ContactPersonListRelationFilter>;
  images?: Maybe<FileListRelationFilter>;
  interactions?: Maybe<InteractionListRelationFilter>;
  inventories?: Maybe<InventoryListRelationFilter>;
  movements?: Maybe<MovementListRelationFilter>;
  reservations?: Maybe<ReservationListRelationFilter>;
  addressId?: Maybe<StringNullableFilter>;
  address?: Maybe<AddressWhereInput>;
  billingAddressId?: Maybe<StringNullableFilter>;
  billingAddress?: Maybe<AddressWhereInput>;
  invoices?: Maybe<InvoiceListRelationFilter>;
  source?: Maybe<StringNullableFilter>;
  notes?: Maybe<StringNullableFilter>;
  tags?: Maybe<StringNullableListFilter>;
  payments?: Maybe<PaymentListRelationFilter>;
  stripeId?: Maybe<StringNullableFilter>;
};

export type ClientOrderByInput = {
  tenantId?: Maybe<SortOrder>;
  deleted?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  fiscalNumber?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  language?: Maybe<SortOrder>;
  mobilePrefix?: Maybe<SortOrder>;
  mobile?: Maybe<SortOrder>;
  phonePrefix?: Maybe<SortOrder>;
  phone?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  clientId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  website?: Maybe<SortOrder>;
  withAccount?: Maybe<SortOrder>;
  addressId?: Maybe<SortOrder>;
  billingAddressId?: Maybe<SortOrder>;
  source?: Maybe<SortOrder>;
  notes?: Maybe<SortOrder>;
  tags?: Maybe<SortOrder>;
  stripeId?: Maybe<SortOrder>;
};

export type ClientCreateInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  clientId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  tags?: Maybe<ClientCreatetagsInput>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutClientInput>;
  images?: Maybe<FileCreateManyWithoutClientsInput>;
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
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  fiscalNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  language?: Maybe<NullableEnumLanguageFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  clientId?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  withAccount?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  stripeId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<ClientUpdatetagsInput>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutClientInput>;
  images?: Maybe<FileUpdateManyWithoutClientsInput>;
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
  tenantId_movementId?: Maybe<TenantIdMovementIdCompoundUniqueInput>;
};

export type BatchWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type InventoryWhereInput = {
  AND?: Maybe<Array<InventoryWhereInput>>;
  OR?: Maybe<Array<InventoryWhereInput>>;
  NOT?: Maybe<Array<InventoryWhereInput>>;
  tenantId?: Maybe<StringNullableFilter>;
  amount?: Maybe<FloatFilter>;
  batchId?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  productId?: Maybe<StringFilter>;
  storageNumber?: Maybe<StringNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  warehouseId?: Maybe<StringNullableFilter>;
  supplierId?: Maybe<StringNullableFilter>;
  supplier?: Maybe<SupplierWhereInput>;
  batch?: Maybe<BatchWhereInput>;
  product?: Maybe<ProductWhereInput>;
  warehouse?: Maybe<WarehouseWhereInput>;
  movements?: Maybe<MovementListRelationFilter>;
  reservations?: Maybe<ReservationListRelationFilter>;
  clientId?: Maybe<StringNullableFilter>;
  client?: Maybe<ClientWhereInput>;
  source?: Maybe<StringNullableFilter>;
  isListed?: Maybe<BoolNullableFilter>;
  listPrice?: Maybe<FloatNullableFilter>;
};

export type InventoryOrderByInput = {
  tenantId?: Maybe<SortOrder>;
  amount?: Maybe<SortOrder>;
  batchId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  productId?: Maybe<SortOrder>;
  storageNumber?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  warehouseId?: Maybe<SortOrder>;
  supplierId?: Maybe<SortOrder>;
  clientId?: Maybe<SortOrder>;
  source?: Maybe<SortOrder>;
  isListed?: Maybe<SortOrder>;
  listPrice?: Maybe<SortOrder>;
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
  id?: Maybe<Scalars['String']>;
};

export type WarehouseWhereInput = {
  AND?: Maybe<Array<WarehouseWhereInput>>;
  OR?: Maybe<Array<WarehouseWhereInput>>;
  NOT?: Maybe<Array<WarehouseWhereInput>>;
  tenantId?: Maybe<StringNullableFilter>;
  deleted?: Maybe<BoolFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  mobilePrefix?: Maybe<IntNullableFilter>;
  mobile?: Maybe<StringNullableFilter>;
  phonePrefix?: Maybe<IntNullableFilter>;
  phone?: Maybe<StringNullableFilter>;
  name?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  website?: Maybe<StringNullableFilter>;
  contactPersons?: Maybe<ContactPersonListRelationFilter>;
  inventories?: Maybe<InventoryListRelationFilter>;
  movements?: Maybe<MovementListRelationFilter>;
  addressId?: Maybe<StringNullableFilter>;
  address?: Maybe<AddressWhereInput>;
  Notification?: Maybe<NotificationListRelationFilter>;
  notes?: Maybe<StringNullableFilter>;
  tags?: Maybe<StringNullableListFilter>;
  phoneNumberId?: Maybe<StringNullableFilter>;
  Interaction?: Maybe<InteractionListRelationFilter>;
};

export type WarehouseOrderByInput = {
  tenantId?: Maybe<SortOrder>;
  deleted?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  mobilePrefix?: Maybe<SortOrder>;
  mobile?: Maybe<SortOrder>;
  phonePrefix?: Maybe<SortOrder>;
  phone?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  website?: Maybe<SortOrder>;
  addressId?: Maybe<SortOrder>;
  notes?: Maybe<SortOrder>;
  tags?: Maybe<SortOrder>;
  phoneNumberId?: Maybe<SortOrder>;
};

export type TransportAgencyWhereInput = {
  AND?: Maybe<Array<TransportAgencyWhereInput>>;
  OR?: Maybe<Array<TransportAgencyWhereInput>>;
  NOT?: Maybe<Array<TransportAgencyWhereInput>>;
  tenantId?: Maybe<StringNullableFilter>;
  deleted?: Maybe<BoolFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  mobilePrefix?: Maybe<IntNullableFilter>;
  mobile?: Maybe<StringNullableFilter>;
  phonePrefix?: Maybe<IntNullableFilter>;
  phone?: Maybe<StringNullableFilter>;
  name?: Maybe<StringFilter>;
  website?: Maybe<StringNullableFilter>;
  contactPersons?: Maybe<ContactPersonListRelationFilter>;
  images?: Maybe<FileListRelationFilter>;
  transports?: Maybe<TransportListRelationFilter>;
  transporters?: Maybe<TransporterListRelationFilter>;
  addressId?: Maybe<StringNullableFilter>;
  address?: Maybe<AddressWhereInput>;
  billingAddressId?: Maybe<StringNullableFilter>;
  billingAddress?: Maybe<AddressWhereInput>;
  source?: Maybe<StringNullableFilter>;
  notes?: Maybe<StringNullableFilter>;
  tags?: Maybe<StringNullableListFilter>;
  payments?: Maybe<PaymentListRelationFilter>;
  Address?: Maybe<AddressWhereInput>;
  Interaction?: Maybe<InteractionListRelationFilter>;
};

export type TransportAgencyOrderByInput = {
  tenantId?: Maybe<SortOrder>;
  deleted?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  mobilePrefix?: Maybe<SortOrder>;
  mobile?: Maybe<SortOrder>;
  phonePrefix?: Maybe<SortOrder>;
  phone?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  website?: Maybe<SortOrder>;
  addressId?: Maybe<SortOrder>;
  billingAddressId?: Maybe<SortOrder>;
  source?: Maybe<SortOrder>;
  notes?: Maybe<SortOrder>;
  tags?: Maybe<SortOrder>;
};

export type TransportAgencyWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type TransportAgencyCreateInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  website?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  tags?: Maybe<TransportAgencyCreatetagsInput>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutTransportAgencyInput>;
  images?: Maybe<FileCreateManyWithoutTransportAgenciesInput>;
  transports?: Maybe<TransportCreateManyWithoutTransportAgencyInput>;
  transporters?: Maybe<TransporterCreateManyWithoutTransportAgencyInput>;
  address?: Maybe<AddressCreateOneWithoutTransportAgencyAddressInput>;
  billingAddress?: Maybe<AddressCreateOneWithoutTransportAgencyBillingAddressInput>;
  payments?: Maybe<PaymentCreateManyWithoutTransportAgencyInput>;
  Address?: Maybe<AddressCreateOneWithoutTransportAgencyInput>;
  Interaction?: Maybe<InteractionCreateManyWithoutTransportAgencyInput>;
};

export type TransportAgencyUpdateInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<TransportAgencyUpdatetagsInput>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutTransportAgencyInput>;
  images?: Maybe<FileUpdateManyWithoutTransportAgenciesInput>;
  transports?: Maybe<TransportUpdateManyWithoutTransportAgencyInput>;
  transporters?: Maybe<TransporterUpdateManyWithoutTransportAgencyInput>;
  address?: Maybe<AddressUpdateOneWithoutTransportAgencyAddressInput>;
  billingAddress?: Maybe<AddressUpdateOneWithoutTransportAgencyBillingAddressInput>;
  payments?: Maybe<PaymentUpdateManyWithoutTransportAgencyInput>;
  Address?: Maybe<AddressUpdateOneWithoutTransportAgencyInput>;
  Interaction?: Maybe<InteractionUpdateManyWithoutTransportAgencyInput>;
};

export type WarehouseCreateInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  phoneNumberId?: Maybe<Scalars['String']>;
  tags?: Maybe<WarehouseCreatetagsInput>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutWarehouseInput>;
  inventories?: Maybe<InventoryCreateManyWithoutWarehouseInput>;
  movements?: Maybe<MovementCreateManyWithoutWarehouseInput>;
  address?: Maybe<AddressCreateOneWithoutWarehouseInput>;
  Notification?: Maybe<NotificationCreateManyWithoutWarehouseInput>;
  Interaction?: Maybe<InteractionCreateManyWithoutWarehouseInput>;
};

export type WarehouseUpdateInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phoneNumberId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<WarehouseUpdatetagsInput>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutWarehouseInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutWarehouseInput>;
  movements?: Maybe<MovementUpdateManyWithoutWarehouseInput>;
  address?: Maybe<AddressUpdateOneWithoutWarehouseInput>;
  Notification?: Maybe<NotificationUpdateManyWithoutWarehouseInput>;
  Interaction?: Maybe<InteractionUpdateManyWithoutWarehouseInput>;
};

export type TransportWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  arrivalDate_arrivalPoint?: Maybe<ArrivalDateArrivalPointCompoundUniqueInput>;
};

export type MovementOrderByInput = {
  tenantId?: Maybe<SortOrder>;
  deleted?: Maybe<SortOrder>;
  amount?: Maybe<SortOrder>;
  batchId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  date?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  status?: Maybe<SortOrder>;
  inventoryId?: Maybe<SortOrder>;
  movementId?: Maybe<SortOrder>;
  notes?: Maybe<SortOrder>;
  tags?: Maybe<SortOrder>;
  productId?: Maybe<SortOrder>;
  sendMail?: Maybe<SortOrder>;
  storageNumber?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
  unitPrice?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  warehouseId?: Maybe<SortOrder>;
  clientId?: Maybe<SortOrder>;
  supplierId?: Maybe<SortOrder>;
  invoiceId?: Maybe<SortOrder>;
  invoiceId_InvoiceToMovement?: Maybe<SortOrder>;
  source?: Maybe<SortOrder>;
  movementId_MovementToMovement?: Maybe<SortOrder>;
};

export type NotificationCreateInput = {
  tenantId?: Maybe<Scalars['String']>;
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  type: NotificationType;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: Scalars['String'];
  userLanguage?: Maybe<Language>;
  userEmail: Scalars['String'];
  warehouse?: Maybe<WarehouseCreateOneWithoutNotificationInput>;
  product: ProductCreateOneWithoutNotificationsInput;
};

export type NotificationUpdateInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  active?: Maybe<BoolFieldUpdateOperationsInput>;
  type?: Maybe<EnumNotificationTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<StringFieldUpdateOperationsInput>;
  userLanguage?: Maybe<NullableEnumLanguageFieldUpdateOperationsInput>;
  userEmail?: Maybe<StringFieldUpdateOperationsInput>;
  warehouse?: Maybe<WarehouseUpdateOneWithoutNotificationInput>;
  product?: Maybe<ProductUpdateOneRequiredWithoutNotificationsInput>;
};

export type NotificationWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  productId_user_type_amount?: Maybe<ProductIdUserTypeAmountCompoundUniqueInput>;
};

export type PaymentWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  tenantId_paymentId?: Maybe<TenantIdPaymentIdCompoundUniqueInput>;
  tenantId_stripePaymentIntentId?: Maybe<TenantIdStripePaymentIntentIdCompoundUniqueInput>;
  tenantId_stripeClientSecret?: Maybe<TenantIdStripeClientSecretCompoundUniqueInput>;
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
  AND?: Maybe<Array<PaymentWhereInput>>;
  OR?: Maybe<Array<PaymentWhereInput>>;
  NOT?: Maybe<Array<PaymentWhereInput>>;
  tenantId?: Maybe<StringNullableFilter>;
  deleted?: Maybe<BoolFilter>;
  id?: Maybe<StringFilter>;
  paymentId?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  type?: Maybe<EnumPaymentTypeFilter>;
  status?: Maybe<EnumPaymentStatusFilter>;
  dueDate?: Maybe<DateTimeNullableFilter>;
  date?: Maybe<DateTimeNullableFilter>;
  source?: Maybe<StringNullableFilter>;
  concept?: Maybe<StringNullableFilter>;
  group?: Maybe<GroupWhereInput>;
  groupId?: Maybe<StringNullableFilter>;
  amount?: Maybe<FloatFilter>;
  currency?: Maybe<StringFilter>;
  taxRate?: Maybe<TaxRateWhereInput>;
  taxRateId?: Maybe<StringNullableFilter>;
  recipient?: Maybe<StringNullableFilter>;
  notes?: Maybe<StringNullableFilter>;
  tags?: Maybe<StringNullableListFilter>;
  movement?: Maybe<MovementWhereInput>;
  movementId?: Maybe<StringNullableFilter>;
  transportAgency?: Maybe<TransportAgencyWhereInput>;
  transportAgencyId?: Maybe<StringNullableFilter>;
  client?: Maybe<ClientWhereInput>;
  clientId?: Maybe<StringNullableFilter>;
  supplier?: Maybe<SupplierWhereInput>;
  supplierId?: Maybe<StringNullableFilter>;
  documents?: Maybe<FileListRelationFilter>;
  bankAccount?: Maybe<BankAccountWhereInput>;
  bankAccountId?: Maybe<StringNullableFilter>;
  paymentMethod?: Maybe<StringNullableFilter>;
  stripePaymentIntentId?: Maybe<StringNullableFilter>;
  stripeClientSecret?: Maybe<StringNullableFilter>;
  Interaction?: Maybe<InteractionListRelationFilter>;
};

export type PaymentOrderByInput = {
  tenantId?: Maybe<SortOrder>;
  deleted?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  paymentId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
  status?: Maybe<SortOrder>;
  dueDate?: Maybe<SortOrder>;
  date?: Maybe<SortOrder>;
  source?: Maybe<SortOrder>;
  concept?: Maybe<SortOrder>;
  groupId?: Maybe<SortOrder>;
  amount?: Maybe<SortOrder>;
  currency?: Maybe<SortOrder>;
  taxRateId?: Maybe<SortOrder>;
  recipient?: Maybe<SortOrder>;
  notes?: Maybe<SortOrder>;
  tags?: Maybe<SortOrder>;
  movementId?: Maybe<SortOrder>;
  transportAgencyId?: Maybe<SortOrder>;
  clientId?: Maybe<SortOrder>;
  supplierId?: Maybe<SortOrder>;
  bankAccountId?: Maybe<SortOrder>;
  paymentMethod?: Maybe<SortOrder>;
  stripePaymentIntentId?: Maybe<SortOrder>;
  stripeClientSecret?: Maybe<SortOrder>;
};

export type TaxRateCreateInput = {
  tenantId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  amount: Scalars['Float'];
  isSameCountry: Scalars['Boolean'];
  isEU?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  tags?: Maybe<TaxRateCreatetagsInput>;
  group?: Maybe<GroupCreateOneWithoutTaxRateInput>;
  product?: Maybe<ProductCreateOneWithoutTaxRatesInput>;
  payments?: Maybe<PaymentCreateManyWithoutTaxRateInput>;
};

export type TaxRateUpdateInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  isSameCountry?: Maybe<BoolFieldUpdateOperationsInput>;
  isEU?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<TaxRateUpdatetagsInput>;
  group?: Maybe<GroupUpdateOneWithoutTaxRateInput>;
  product?: Maybe<ProductUpdateOneWithoutTaxRatesInput>;
  payments?: Maybe<PaymentUpdateManyWithoutTaxRateInput>;
};

export type GroupCreateInput = {
  tenantId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  payments?: Maybe<PaymentCreateManyWithoutGroupInput>;
  taxRate?: Maybe<TaxRateCreateOneWithoutGroupInput>;
};

export type GroupUpdateInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  code?: Maybe<NullableIntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  payments?: Maybe<PaymentUpdateManyWithoutGroupInput>;
  taxRate?: Maybe<TaxRateUpdateOneWithoutGroupInput>;
};

export type UnitWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type ProductWhereInput = {
  AND?: Maybe<Array<ProductWhereInput>>;
  OR?: Maybe<Array<ProductWhereInput>>;
  NOT?: Maybe<Array<ProductWhereInput>>;
  tenantId?: Maybe<StringNullableFilter>;
  deleted?: Maybe<BoolFilter>;
  id?: Maybe<StringFilter>;
  productId?: Maybe<IntFilter>;
  ASIN?: Maybe<StringNullableFilter>;
  EAN?: Maybe<StringNullableFilter>;
  ISBN?: Maybe<StringNullableFilter>;
  UPC?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  description?: Maybe<StringNullableFilter>;
  manufacturerId?: Maybe<StringNullableFilter>;
  name?: Maybe<StringFilter>;
  slug?: Maybe<StringFilter>;
  dimensions?: Maybe<DimensionWhereInput>;
  dimensionId?: Maybe<StringNullableFilter>;
  material?: Maybe<StringNullableFilter>;
  color?: Maybe<StringNullableFilter>;
  weight?: Maybe<FloatNullableFilter>;
  manufacturer?: Maybe<ManufacturerWhereInput>;
  batches?: Maybe<BatchListRelationFilter>;
  images?: Maybe<FileListRelationFilter>;
  interactions?: Maybe<InteractionListRelationFilter>;
  inventories?: Maybe<InventoryListRelationFilter>;
  movements?: Maybe<MovementListRelationFilter>;
  notifications?: Maybe<NotificationListRelationFilter>;
  units?: Maybe<UnitListRelationFilter>;
  taxRates?: Maybe<TaxRateListRelationFilter>;
  source?: Maybe<StringNullableFilter>;
  isListed?: Maybe<BoolNullableFilter>;
  variants?: Maybe<ProductListRelationFilter>;
  variantProduct?: Maybe<ProductListRelationFilter>;
  notes?: Maybe<StringNullableFilter>;
  tags?: Maybe<StringNullableListFilter>;
  quantity?: Maybe<FloatNullableFilter>;
  categories?: Maybe<CategoryListRelationFilter>;
  consumables?: Maybe<ConsumableListRelationFilter>;
  consumers?: Maybe<ConsumableListRelationFilter>;
};

export type ProductWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  name_color_material_dimensionId_weight_quantity?: Maybe<NameColorMaterialDimensionIdWeightQuantityCompoundUniqueInput>;
};

export type ConsumableWhereInput = {
  AND?: Maybe<Array<ConsumableWhereInput>>;
  OR?: Maybe<Array<ConsumableWhereInput>>;
  NOT?: Maybe<Array<ConsumableWhereInput>>;
  tenantId?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  amount?: Maybe<FloatFilter>;
  atIncoming?: Maybe<BoolFilter>;
  productId?: Maybe<StringFilter>;
  product?: Maybe<ProductWhereInput>;
  consumerId?: Maybe<StringFilter>;
  consumer?: Maybe<ProductWhereInput>;
};

export type ConsumableWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type ProductOrderByInput = {
  tenantId?: Maybe<SortOrder>;
  deleted?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  productId?: Maybe<SortOrder>;
  ASIN?: Maybe<SortOrder>;
  EAN?: Maybe<SortOrder>;
  ISBN?: Maybe<SortOrder>;
  UPC?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  manufacturerId?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  slug?: Maybe<SortOrder>;
  dimensionId?: Maybe<SortOrder>;
  material?: Maybe<SortOrder>;
  color?: Maybe<SortOrder>;
  weight?: Maybe<SortOrder>;
  source?: Maybe<SortOrder>;
  isListed?: Maybe<SortOrder>;
  notes?: Maybe<SortOrder>;
  tags?: Maybe<SortOrder>;
  quantity?: Maybe<SortOrder>;
};

export type UnitCreateInput = {
  tenantId?: Maybe<Scalars['String']>;
  baseAmount: Scalars['Float'];
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  product?: Maybe<ProductCreateOneWithoutUnitsInput>;
};

export type ProductCreateInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  productId: Scalars['Int'];
  ASIN?: Maybe<Scalars['String']>;
  EAN?: Maybe<Scalars['String']>;
  ISBN?: Maybe<Scalars['String']>;
  UPC?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  material?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  isListed?: Maybe<Scalars['Boolean']>;
  notes?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Float']>;
  tags?: Maybe<ProductCreatetagsInput>;
  dimensions?: Maybe<DimensionCreateOneWithoutProductInput>;
  manufacturer?: Maybe<ManufacturerCreateOneWithoutProductsInput>;
  batches?: Maybe<BatchCreateManyWithoutProductInput>;
  images?: Maybe<FileCreateManyWithoutProductsInput>;
  interactions?: Maybe<InteractionCreateManyWithoutProductInput>;
  inventories?: Maybe<InventoryCreateManyWithoutProductInput>;
  movements?: Maybe<MovementCreateManyWithoutProductInput>;
  notifications?: Maybe<NotificationCreateManyWithoutProductInput>;
  units?: Maybe<UnitCreateManyWithoutProductInput>;
  taxRates?: Maybe<TaxRateCreateManyWithoutProductInput>;
  variants?: Maybe<ProductCreateManyWithoutVariantProductInput>;
  variantProduct?: Maybe<ProductCreateManyWithoutVariantsInput>;
  categories?: Maybe<CategoryCreateManyWithoutProductsInput>;
  consumables?: Maybe<ConsumableCreateManyWithoutConsumerInput>;
  consumers?: Maybe<ConsumableCreateManyWithoutProductInput>;
};

export type ProductUpdateInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  productId?: Maybe<IntFieldUpdateOperationsInput>;
  ASIN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  EAN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  ISBN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  UPC?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  material?: Maybe<NullableStringFieldUpdateOperationsInput>;
  color?: Maybe<NullableStringFieldUpdateOperationsInput>;
  weight?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isListed?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  quantity?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  tags?: Maybe<ProductUpdatetagsInput>;
  dimensions?: Maybe<DimensionUpdateOneWithoutProductInput>;
  manufacturer?: Maybe<ManufacturerUpdateOneWithoutProductsInput>;
  batches?: Maybe<BatchUpdateManyWithoutProductInput>;
  images?: Maybe<FileUpdateManyWithoutProductsInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutProductInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutProductInput>;
  movements?: Maybe<MovementUpdateManyWithoutProductInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutProductInput>;
  units?: Maybe<UnitUpdateManyWithoutProductInput>;
  taxRates?: Maybe<TaxRateUpdateManyWithoutProductInput>;
  variants?: Maybe<ProductUpdateManyWithoutVariantProductInput>;
  variantProduct?: Maybe<ProductUpdateManyWithoutVariantsInput>;
  categories?: Maybe<CategoryUpdateManyWithoutProductsInput>;
  consumables?: Maybe<ConsumableUpdateManyWithoutConsumerInput>;
  consumers?: Maybe<ConsumableUpdateManyWithoutProductInput>;
};

export type PresetWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  user_name_type?: Maybe<UserNameTypeCompoundUniqueInput>;
};

export type PresetWhereInput = {
  AND?: Maybe<Array<PresetWhereInput>>;
  OR?: Maybe<Array<PresetWhereInput>>;
  NOT?: Maybe<Array<PresetWhereInput>>;
  tenantId?: Maybe<StringNullableFilter>;
  active?: Maybe<BoolFilter>;
  columnOrder?: Maybe<StringNullableListFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  currency?: Maybe<StringNullableFilter>;
  filter?: Maybe<StringNullableFilter>;
  hiddenColumns?: Maybe<StringNullableListFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  rowsPerPage?: Maybe<IntNullableFilter>;
  settingId?: Maybe<StringNullableFilter>;
  sort?: Maybe<StringNullableFilter>;
  tableView?: Maybe<EnumTableViewNullableFilter>;
  type?: Maybe<EnumEntityTypeFilter>;
  user?: Maybe<StringNullableFilter>;
  setting?: Maybe<SettingWhereInput>;
};

export type IntegrationWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type PresetCreateInput = {
  tenantId?: Maybe<Scalars['String']>;
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
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  active?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  currency?: Maybe<NullableStringFieldUpdateOperationsInput>;
  filter?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  rowsPerPage?: Maybe<NullableIntFieldUpdateOperationsInput>;
  sort?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tableView?: Maybe<NullableEnumTableViewFieldUpdateOperationsInput>;
  type?: Maybe<EnumEntityTypeFieldUpdateOperationsInput>;
  user?: Maybe<NullableStringFieldUpdateOperationsInput>;
  columnOrder?: Maybe<PresetUpdatecolumnOrderInput>;
  hiddenColumns?: Maybe<PresetUpdatehiddenColumnsInput>;
  setting?: Maybe<SettingUpdateOneWithoutPresetsInput>;
};

export type SettingUpdateInput = {
  subDomain?: Maybe<StringFieldUpdateOperationsInput>;
  chat?: Maybe<BoolFieldUpdateOperationsInput>;
  currency?: Maybe<NullableStringFieldUpdateOperationsInput>;
  currencySymbol?: Maybe<NullableStringFieldUpdateOperationsInput>;
  defaultLanguage?: Maybe<NullableEnumLanguageFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  stripeCustomerId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  timezone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  plan?: Maybe<NullableEnumAccountPlanFieldUpdateOperationsInput>;
  transports?: Maybe<BoolFieldUpdateOperationsInput>;
  warehouses?: Maybe<BoolFieldUpdateOperationsInput>;
  consumables?: Maybe<BoolFieldUpdateOperationsInput>;
  shop?: Maybe<BoolFieldUpdateOperationsInput>;
  accounting?: Maybe<BoolFieldUpdateOperationsInput>;
  invoicing?: Maybe<BoolFieldUpdateOperationsInput>;
  fiscalNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  weightUnit?: Maybe<NullableStringFieldUpdateOperationsInput>;
  lengthUnit?: Maybe<NullableStringFieldUpdateOperationsInput>;
  shopPurchasedEmail?: Maybe<NullableStringFieldUpdateOperationsInput>;
  invoiceText?: Maybe<NullableStringFieldUpdateOperationsInput>;
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

export type SettingWhereUniqueInput = {
  subDomain?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
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
  plan?: Maybe<AccountPlan>;
  transports?: Maybe<Scalars['Boolean']>;
  warehouses?: Maybe<Scalars['Boolean']>;
  consumables?: Maybe<Scalars['Boolean']>;
  shop?: Maybe<Scalars['Boolean']>;
  accounting?: Maybe<Scalars['Boolean']>;
  invoicing?: Maybe<Scalars['Boolean']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  weightUnit?: Maybe<Scalars['String']>;
  lengthUnit?: Maybe<Scalars['String']>;
  shopPurchasedEmail?: Maybe<Scalars['String']>;
  invoiceText?: Maybe<Scalars['String']>;
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
  id?: Maybe<Scalars['String']>;
  name_tenantId?: Maybe<NameTenantIdCompoundUniqueInput>;
  email_tenantId?: Maybe<EmailTenantIdCompoundUniqueInput>;
  supplierId_tenantId?: Maybe<SupplierIdTenantIdCompoundUniqueInput>;
};

export type SupplierWhereInput = {
  AND?: Maybe<Array<SupplierWhereInput>>;
  OR?: Maybe<Array<SupplierWhereInput>>;
  NOT?: Maybe<Array<SupplierWhereInput>>;
  tenantId?: Maybe<StringNullableFilter>;
  deleted?: Maybe<BoolFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringNullableFilter>;
  fiscalNumber?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  language?: Maybe<EnumLanguageNullableFilter>;
  mobilePrefix?: Maybe<IntNullableFilter>;
  mobile?: Maybe<StringNullableFilter>;
  phonePrefix?: Maybe<IntNullableFilter>;
  phone?: Maybe<StringNullableFilter>;
  name?: Maybe<StringFilter>;
  supplierId?: Maybe<IntFilter>;
  addressId?: Maybe<StringNullableFilter>;
  address?: Maybe<AddressWhereInput>;
  billingAddressId?: Maybe<StringNullableFilter>;
  billingAddress?: Maybe<AddressWhereInput>;
  updatedAt?: Maybe<DateTimeFilter>;
  website?: Maybe<StringNullableFilter>;
  withAccount?: Maybe<BoolNullableFilter>;
  contactPersons?: Maybe<ContactPersonListRelationFilter>;
  images?: Maybe<FileListRelationFilter>;
  interactions?: Maybe<InteractionListRelationFilter>;
  inventories?: Maybe<InventoryListRelationFilter>;
  movements?: Maybe<MovementListRelationFilter>;
  source?: Maybe<StringNullableFilter>;
  notes?: Maybe<StringNullableFilter>;
  tags?: Maybe<StringNullableListFilter>;
  payments?: Maybe<PaymentListRelationFilter>;
};

export type SupplierOrderByInput = {
  tenantId?: Maybe<SortOrder>;
  deleted?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  fiscalNumber?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  language?: Maybe<SortOrder>;
  mobilePrefix?: Maybe<SortOrder>;
  mobile?: Maybe<SortOrder>;
  phonePrefix?: Maybe<SortOrder>;
  phone?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  supplierId?: Maybe<SortOrder>;
  addressId?: Maybe<SortOrder>;
  billingAddressId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  website?: Maybe<SortOrder>;
  withAccount?: Maybe<SortOrder>;
  source?: Maybe<SortOrder>;
  notes?: Maybe<SortOrder>;
  tags?: Maybe<SortOrder>;
};

export type SupplierCreateInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  supplierId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  tags?: Maybe<SupplierCreatetagsInput>;
  address?: Maybe<AddressCreateOneWithoutSupplierAddressInput>;
  billingAddress?: Maybe<AddressCreateOneWithoutSupplierBillingAddressInput>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutSupplierInput>;
  images?: Maybe<FileCreateManyWithoutSuppliersInput>;
  interactions?: Maybe<InteractionCreateManyWithoutSupplierInput>;
  inventories?: Maybe<InventoryCreateManyWithoutSupplierInput>;
  movements?: Maybe<MovementCreateManyWithoutSupplierInput>;
  payments?: Maybe<PaymentCreateManyWithoutSupplierInput>;
};

export type SupplierUpdateInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  fiscalNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  language?: Maybe<NullableEnumLanguageFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  supplierId?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  withAccount?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<SupplierUpdatetagsInput>;
  address?: Maybe<AddressUpdateOneWithoutSupplierAddressInput>;
  billingAddress?: Maybe<AddressUpdateOneWithoutSupplierBillingAddressInput>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutSupplierInput>;
  images?: Maybe<FileUpdateManyWithoutSuppliersInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutSupplierInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutSupplierInput>;
  movements?: Maybe<MovementUpdateManyWithoutSupplierInput>;
  payments?: Maybe<PaymentUpdateManyWithoutSupplierInput>;
};

export type TenantIdSmallUrlCompoundUniqueInput = {
  tenantId: Scalars['String'];
  smallUrl: Scalars['String'];
};

export type StringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
};

export type MessageListRelationFilter = {
  every?: Maybe<MessageWhereInput>;
  some?: Maybe<MessageWhereInput>;
  none?: Maybe<MessageWhereInput>;
};

export type StringNullableListFilter = {
  equals?: Maybe<Array<Scalars['String']>>;
};

export type TenantIdNameCompoundUniqueInput = {
  tenantId: Scalars['String'];
  name: Scalars['String'];
};

export type FileListRelationFilter = {
  every?: Maybe<FileWhereInput>;
  some?: Maybe<FileWhereInput>;
  none?: Maybe<FileWhereInput>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type MessageUpdatementionsInput = {
  set: Array<Scalars['String']>;
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

export type FileUpdateManyWithoutMessagesInput = {
  create?: Maybe<Array<FileCreateWithoutMessagesInput>>;
  connect?: Maybe<Array<FileWhereUniqueInput>>;
  set?: Maybe<Array<FileWhereUniqueInput>>;
  disconnect?: Maybe<Array<FileWhereUniqueInput>>;
  delete?: Maybe<Array<FileWhereUniqueInput>>;
  update?: Maybe<Array<FileUpdateWithWhereUniqueWithoutMessagesInput>>;
  updateMany?: Maybe<Array<FileUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<FileScalarWhereInput>>;
  upsert?: Maybe<Array<FileUpsertWithWhereUniqueWithoutMessagesInput>>;
};

export type ChannelCreatemembersInput = {
  set: Array<Scalars['String']>;
};

export type MessageCreateManyWithoutChannelInput = {
  create?: Maybe<Array<MessageCreateWithoutChannelInput>>;
  connect?: Maybe<Array<MessageWhereUniqueInput>>;
};

export type ChannelUpdatemembersInput = {
  set: Array<Scalars['String']>;
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

export type FirstNameLastNameEmailTenantIdCompoundUniqueInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  tenantId: Scalars['String'];
};

export type BoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type FloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
};

export type EnumMovementStatusNullableFilter = {
  equals?: Maybe<MovementStatus>;
  in?: Maybe<Array<MovementStatus>>;
  notIn?: Maybe<Array<MovementStatus>>;
  not?: Maybe<NestedEnumMovementStatusNullableFilter>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type EnumMovementTypeFilter = {
  equals?: Maybe<MovementType>;
  in?: Maybe<Array<MovementType>>;
  notIn?: Maybe<Array<MovementType>>;
  not?: Maybe<NestedEnumMovementTypeFilter>;
};

export type FloatNullableFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatNullableFilter>;
};

export type BatchWhereInput = {
  AND?: Maybe<Array<BatchWhereInput>>;
  OR?: Maybe<Array<BatchWhereInput>>;
  NOT?: Maybe<Array<BatchWhereInput>>;
  tenantId?: Maybe<StringNullableFilter>;
  batchNumber?: Maybe<StringNullableFilter>;
  bestBefore?: Maybe<DateTimeNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  date?: Maybe<DateTimeNullableFilter>;
  id?: Maybe<StringFilter>;
  manufacturerId?: Maybe<StringNullableFilter>;
  productId?: Maybe<StringFilter>;
  manufacturer?: Maybe<ManufacturerWhereInput>;
  product?: Maybe<ProductWhereInput>;
  inventories?: Maybe<InventoryListRelationFilter>;
  movements?: Maybe<MovementListRelationFilter>;
  source?: Maybe<StringNullableFilter>;
};

export type InteractionListRelationFilter = {
  every?: Maybe<InteractionWhereInput>;
  some?: Maybe<InteractionWhereInput>;
  none?: Maybe<InteractionWhereInput>;
};

export type ReservationWhereInput = {
  AND?: Maybe<Array<ReservationWhereInput>>;
  OR?: Maybe<Array<ReservationWhereInput>>;
  NOT?: Maybe<Array<ReservationWhereInput>>;
  tenantId?: Maybe<StringNullableFilter>;
  amount?: Maybe<IntFilter>;
  clientId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  inventoryId?: Maybe<StringNullableFilter>;
  movementId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  client?: Maybe<ClientWhereInput>;
  inventory?: Maybe<InventoryWhereInput>;
  movement?: Maybe<MovementWhereInput>;
  notes?: Maybe<StringNullableFilter>;
};

export type TransportListRelationFilter = {
  every?: Maybe<TransportWhereInput>;
  some?: Maybe<TransportWhereInput>;
  none?: Maybe<TransportWhereInput>;
};

export type IntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
};

export type InvoiceWhereInput = {
  AND?: Maybe<Array<InvoiceWhereInput>>;
  OR?: Maybe<Array<InvoiceWhereInput>>;
  NOT?: Maybe<Array<InvoiceWhereInput>>;
  tenantId?: Maybe<StringNullableFilter>;
  id?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  pdfId?: Maybe<StringFilter>;
  pdf?: Maybe<FileWhereInput>;
  movements?: Maybe<MovementListRelationFilter>;
  clientId?: Maybe<StringFilter>;
  client?: Maybe<ClientWhereInput>;
  withTaxes?: Maybe<BoolFilter>;
  notes?: Maybe<StringNullableFilter>;
  tags?: Maybe<StringNullableListFilter>;
};

export type PaymentListRelationFilter = {
  every?: Maybe<PaymentWhereInput>;
  some?: Maybe<PaymentWhereInput>;
  none?: Maybe<PaymentWhereInput>;
};

export type MovementListRelationFilter = {
  every?: Maybe<MovementWhereInput>;
  some?: Maybe<MovementWhereInput>;
  none?: Maybe<MovementWhereInput>;
};

export type EmailTenantIdCompoundUniqueInput = {
  email: Scalars['String'];
  tenantId: Scalars['String'];
};

export type NameTenantIdCompoundUniqueInput = {
  name: Scalars['String'];
  tenantId: Scalars['String'];
};

export type ClientIdTenantIdCompoundUniqueInput = {
  clientId: Scalars['Int'];
  tenantId: Scalars['String'];
};

export type EnumLanguageNullableFilter = {
  equals?: Maybe<Language>;
  in?: Maybe<Array<Language>>;
  notIn?: Maybe<Array<Language>>;
  not?: Maybe<NestedEnumLanguageNullableFilter>;
};

export type BoolNullableFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolNullableFilter>;
};

export type ContactPersonListRelationFilter = {
  every?: Maybe<ContactPersonWhereInput>;
  some?: Maybe<ContactPersonWhereInput>;
  none?: Maybe<ContactPersonWhereInput>;
};

export type InventoryListRelationFilter = {
  every?: Maybe<InventoryWhereInput>;
  some?: Maybe<InventoryWhereInput>;
  none?: Maybe<InventoryWhereInput>;
};

export type ReservationListRelationFilter = {
  every?: Maybe<ReservationWhereInput>;
  some?: Maybe<ReservationWhereInput>;
  none?: Maybe<ReservationWhereInput>;
};

export type AddressWhereInput = {
  AND?: Maybe<Array<AddressWhereInput>>;
  OR?: Maybe<Array<AddressWhereInput>>;
  NOT?: Maybe<Array<AddressWhereInput>>;
  tenantId?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  addressLine1?: Maybe<StringNullableFilter>;
  addressLine2?: Maybe<StringNullableFilter>;
  city?: Maybe<StringNullableFilter>;
  country?: Maybe<StringNullableFilter>;
  state?: Maybe<StringNullableFilter>;
  zip?: Maybe<StringNullableFilter>;
  supplierAddress?: Maybe<SupplierWhereInput>;
  supplierBillingAddress?: Maybe<SupplierWhereInput>;
  clientAddress?: Maybe<ClientWhereInput>;
  clientBillingAddress?: Maybe<ClientWhereInput>;
  address?: Maybe<SettingWhereInput>;
  billingAddress?: Maybe<SettingWhereInput>;
  transportAgencyAddress?: Maybe<TransportAgencyWhereInput>;
  transportAgencyBillingAddress?: Maybe<TransportAgencyWhereInput>;
  Manufacturer?: Maybe<ManufacturerListRelationFilter>;
  Warehouse?: Maybe<WarehouseListRelationFilter>;
  TransportAgency?: Maybe<TransportAgencyListRelationFilter>;
};

export type InvoiceListRelationFilter = {
  every?: Maybe<InvoiceWhereInput>;
  some?: Maybe<InvoiceWhereInput>;
  none?: Maybe<InvoiceWhereInput>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type ClientCreatetagsInput = {
  set: Array<Scalars['String']>;
};

export type ContactPersonCreateManyWithoutClientInput = {
  create?: Maybe<Array<ContactPersonCreateWithoutClientInput>>;
  connect?: Maybe<Array<ContactPersonWhereUniqueInput>>;
};

export type FileCreateManyWithoutClientsInput = {
  create?: Maybe<Array<FileCreateWithoutClientsInput>>;
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

export type BoolFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Boolean']>;
};

export type NullableEnumLanguageFieldUpdateOperationsInput = {
  set?: Maybe<Language>;
};

export type NullableIntFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  decrement?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
};

export type IntFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  decrement?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
};

export type NullableBoolFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Boolean']>;
};

export type ClientUpdatetagsInput = {
  set: Array<Scalars['String']>;
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

export type FileUpdateManyWithoutClientsInput = {
  create?: Maybe<Array<FileCreateWithoutClientsInput>>;
  connect?: Maybe<Array<FileWhereUniqueInput>>;
  set?: Maybe<Array<FileWhereUniqueInput>>;
  disconnect?: Maybe<Array<FileWhereUniqueInput>>;
  delete?: Maybe<Array<FileWhereUniqueInput>>;
  update?: Maybe<Array<FileUpdateWithWhereUniqueWithoutClientsInput>>;
  updateMany?: Maybe<Array<FileUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<FileScalarWhereInput>>;
  upsert?: Maybe<Array<FileUpsertWithWhereUniqueWithoutClientsInput>>;
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

export type TenantIdMovementIdCompoundUniqueInput = {
  tenantId: Scalars['String'];
  movementId: Scalars['String'];
};

export type NotificationListRelationFilter = {
  every?: Maybe<NotificationWhereInput>;
  some?: Maybe<NotificationWhereInput>;
  none?: Maybe<NotificationWhereInput>;
};

export type TransporterListRelationFilter = {
  every?: Maybe<TransporterWhereInput>;
  some?: Maybe<TransporterWhereInput>;
  none?: Maybe<TransporterWhereInput>;
};

export type TransportAgencyCreatetagsInput = {
  set: Array<Scalars['String']>;
};

export type ContactPersonCreateManyWithoutTransportAgencyInput = {
  create?: Maybe<Array<ContactPersonCreateWithoutTransportAgencyInput>>;
  connect?: Maybe<Array<ContactPersonWhereUniqueInput>>;
};

export type FileCreateManyWithoutTransportAgenciesInput = {
  create?: Maybe<Array<FileCreateWithoutTransportAgenciesInput>>;
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

export type AddressCreateOneWithoutTransportAgencyAddressInput = {
  create?: Maybe<AddressCreateWithoutTransportAgencyAddressInput>;
  connect?: Maybe<AddressWhereUniqueInput>;
};

export type AddressCreateOneWithoutTransportAgencyBillingAddressInput = {
  create?: Maybe<AddressCreateWithoutTransportAgencyBillingAddressInput>;
  connect?: Maybe<AddressWhereUniqueInput>;
};

export type PaymentCreateManyWithoutTransportAgencyInput = {
  create?: Maybe<Array<PaymentCreateWithoutTransportAgencyInput>>;
  connect?: Maybe<Array<PaymentWhereUniqueInput>>;
};

export type AddressCreateOneWithoutTransportAgencyInput = {
  create?: Maybe<AddressCreateWithoutTransportAgencyInput>;
  connect?: Maybe<AddressWhereUniqueInput>;
};

export type InteractionCreateManyWithoutTransportAgencyInput = {
  create?: Maybe<Array<InteractionCreateWithoutTransportAgencyInput>>;
  connect?: Maybe<Array<InteractionWhereUniqueInput>>;
};

export type TransportAgencyUpdatetagsInput = {
  set: Array<Scalars['String']>;
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

export type FileUpdateManyWithoutTransportAgenciesInput = {
  create?: Maybe<Array<FileCreateWithoutTransportAgenciesInput>>;
  connect?: Maybe<Array<FileWhereUniqueInput>>;
  set?: Maybe<Array<FileWhereUniqueInput>>;
  disconnect?: Maybe<Array<FileWhereUniqueInput>>;
  delete?: Maybe<Array<FileWhereUniqueInput>>;
  update?: Maybe<Array<FileUpdateWithWhereUniqueWithoutTransportAgenciesInput>>;
  updateMany?: Maybe<Array<FileUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<FileScalarWhereInput>>;
  upsert?: Maybe<Array<FileUpsertWithWhereUniqueWithoutTransportAgenciesInput>>;
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

export type AddressUpdateOneWithoutTransportAgencyAddressInput = {
  create?: Maybe<AddressCreateWithoutTransportAgencyAddressInput>;
  connect?: Maybe<AddressWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<AddressUpdateWithoutTransportAgencyAddressDataInput>;
  upsert?: Maybe<AddressUpsertWithoutTransportAgencyAddressInput>;
};

export type AddressUpdateOneWithoutTransportAgencyBillingAddressInput = {
  create?: Maybe<AddressCreateWithoutTransportAgencyBillingAddressInput>;
  connect?: Maybe<AddressWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<AddressUpdateWithoutTransportAgencyBillingAddressDataInput>;
  upsert?: Maybe<AddressUpsertWithoutTransportAgencyBillingAddressInput>;
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

export type AddressUpdateOneWithoutTransportAgencyInput = {
  create?: Maybe<AddressCreateWithoutTransportAgencyInput>;
  connect?: Maybe<AddressWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<AddressUpdateWithoutTransportAgencyDataInput>;
  upsert?: Maybe<AddressUpsertWithoutTransportAgencyInput>;
};

export type InteractionUpdateManyWithoutTransportAgencyInput = {
  create?: Maybe<Array<InteractionCreateWithoutTransportAgencyInput>>;
  connect?: Maybe<Array<InteractionWhereUniqueInput>>;
  set?: Maybe<Array<InteractionWhereUniqueInput>>;
  disconnect?: Maybe<Array<InteractionWhereUniqueInput>>;
  delete?: Maybe<Array<InteractionWhereUniqueInput>>;
  update?: Maybe<Array<InteractionUpdateWithWhereUniqueWithoutTransportAgencyInput>>;
  updateMany?: Maybe<Array<InteractionUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<InteractionScalarWhereInput>>;
  upsert?: Maybe<Array<InteractionUpsertWithWhereUniqueWithoutTransportAgencyInput>>;
};

export type WarehouseCreatetagsInput = {
  set: Array<Scalars['String']>;
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

export type InteractionCreateManyWithoutWarehouseInput = {
  create?: Maybe<Array<InteractionCreateWithoutWarehouseInput>>;
  connect?: Maybe<Array<InteractionWhereUniqueInput>>;
};

export type WarehouseUpdatetagsInput = {
  set: Array<Scalars['String']>;
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

export type InteractionUpdateManyWithoutWarehouseInput = {
  create?: Maybe<Array<InteractionCreateWithoutWarehouseInput>>;
  connect?: Maybe<Array<InteractionWhereUniqueInput>>;
  set?: Maybe<Array<InteractionWhereUniqueInput>>;
  disconnect?: Maybe<Array<InteractionWhereUniqueInput>>;
  delete?: Maybe<Array<InteractionWhereUniqueInput>>;
  update?: Maybe<Array<InteractionUpdateWithWhereUniqueWithoutWarehouseInput>>;
  updateMany?: Maybe<Array<InteractionUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<InteractionScalarWhereInput>>;
  upsert?: Maybe<Array<InteractionUpsertWithWhereUniqueWithoutWarehouseInput>>;
};

export type ArrivalDateArrivalPointCompoundUniqueInput = {
  arrivalDate: Scalars['DateTime'];
  arrivalPoint: Scalars['String'];
};

export type WarehouseCreateOneWithoutNotificationInput = {
  create?: Maybe<WarehouseCreateWithoutNotificationInput>;
  connect?: Maybe<WarehouseWhereUniqueInput>;
};

export type ProductCreateOneWithoutNotificationsInput = {
  create?: Maybe<ProductCreateWithoutNotificationsInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
};

export type EnumNotificationTypeFieldUpdateOperationsInput = {
  set?: Maybe<NotificationType>;
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

export type TenantIdPaymentIdCompoundUniqueInput = {
  tenantId: Scalars['String'];
  paymentId: Scalars['Int'];
};

export type TenantIdStripePaymentIntentIdCompoundUniqueInput = {
  tenantId: Scalars['String'];
  stripePaymentIntentId: Scalars['String'];
};

export type TenantIdStripeClientSecretCompoundUniqueInput = {
  tenantId: Scalars['String'];
  stripeClientSecret: Scalars['String'];
};

export type EnumPaymentTypeFilter = {
  equals?: Maybe<PaymentType>;
  in?: Maybe<Array<PaymentType>>;
  notIn?: Maybe<Array<PaymentType>>;
  not?: Maybe<NestedEnumPaymentTypeFilter>;
};

export type EnumPaymentStatusFilter = {
  equals?: Maybe<PaymentStatus>;
  in?: Maybe<Array<PaymentStatus>>;
  notIn?: Maybe<Array<PaymentStatus>>;
  not?: Maybe<NestedEnumPaymentStatusFilter>;
};

export type DateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
};

export type GroupWhereInput = {
  AND?: Maybe<Array<GroupWhereInput>>;
  OR?: Maybe<Array<GroupWhereInput>>;
  NOT?: Maybe<Array<GroupWhereInput>>;
  tenantId?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  code?: Maybe<IntNullableFilter>;
  name?: Maybe<StringFilter>;
  payments?: Maybe<PaymentListRelationFilter>;
  taxRate?: Maybe<TaxRateWhereInput>;
  taxRateId?: Maybe<StringNullableFilter>;
};

export type TaxRateWhereInput = {
  AND?: Maybe<Array<TaxRateWhereInput>>;
  OR?: Maybe<Array<TaxRateWhereInput>>;
  NOT?: Maybe<Array<TaxRateWhereInput>>;
  tenantId?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  amount?: Maybe<FloatFilter>;
  isSameCountry?: Maybe<BoolFilter>;
  isEU?: Maybe<BoolNullableFilter>;
  name?: Maybe<StringNullableFilter>;
  group?: Maybe<GroupWhereInput>;
  product?: Maybe<ProductWhereInput>;
  productId?: Maybe<StringNullableFilter>;
  payments?: Maybe<PaymentListRelationFilter>;
  notes?: Maybe<StringNullableFilter>;
  tags?: Maybe<StringNullableListFilter>;
};

export type BankAccountWhereInput = {
  AND?: Maybe<Array<BankAccountWhereInput>>;
  OR?: Maybe<Array<BankAccountWhereInput>>;
  NOT?: Maybe<Array<BankAccountWhereInput>>;
  tenantId?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  payments?: Maybe<PaymentListRelationFilter>;
};

export type TaxRateCreatetagsInput = {
  set: Array<Scalars['String']>;
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

export type FloatFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Float']>;
  increment?: Maybe<Scalars['Float']>;
  decrement?: Maybe<Scalars['Float']>;
  multiply?: Maybe<Scalars['Float']>;
  divide?: Maybe<Scalars['Float']>;
};

export type TaxRateUpdatetagsInput = {
  set: Array<Scalars['String']>;
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

export type DimensionWhereInput = {
  AND?: Maybe<Array<DimensionWhereInput>>;
  OR?: Maybe<Array<DimensionWhereInput>>;
  NOT?: Maybe<Array<DimensionWhereInput>>;
  tenantId?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  height?: Maybe<FloatFilter>;
  width?: Maybe<FloatNullableFilter>;
  depth?: Maybe<FloatNullableFilter>;
  Product?: Maybe<ProductListRelationFilter>;
};

export type ManufacturerWhereInput = {
  AND?: Maybe<Array<ManufacturerWhereInput>>;
  OR?: Maybe<Array<ManufacturerWhereInput>>;
  NOT?: Maybe<Array<ManufacturerWhereInput>>;
  tenantId?: Maybe<StringNullableFilter>;
  deleted?: Maybe<BoolFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringNullableFilter>;
  fiscalNumber?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  mobilePrefix?: Maybe<IntNullableFilter>;
  mobile?: Maybe<StringNullableFilter>;
  phonePrefix?: Maybe<IntNullableFilter>;
  phone?: Maybe<StringNullableFilter>;
  name?: Maybe<StringFilter>;
  website?: Maybe<StringNullableFilter>;
  batches?: Maybe<BatchListRelationFilter>;
  contactPersons?: Maybe<ContactPersonListRelationFilter>;
  images?: Maybe<FileListRelationFilter>;
  products?: Maybe<ProductListRelationFilter>;
  addressId?: Maybe<StringNullableFilter>;
  address?: Maybe<AddressWhereInput>;
  source?: Maybe<StringNullableFilter>;
  notes?: Maybe<StringNullableFilter>;
  tags?: Maybe<StringNullableListFilter>;
};

export type BatchListRelationFilter = {
  every?: Maybe<BatchWhereInput>;
  some?: Maybe<BatchWhereInput>;
  none?: Maybe<BatchWhereInput>;
};

export type UnitListRelationFilter = {
  every?: Maybe<UnitWhereInput>;
  some?: Maybe<UnitWhereInput>;
  none?: Maybe<UnitWhereInput>;
};

export type TaxRateListRelationFilter = {
  every?: Maybe<TaxRateWhereInput>;
  some?: Maybe<TaxRateWhereInput>;
  none?: Maybe<TaxRateWhereInput>;
};

export type ProductListRelationFilter = {
  every?: Maybe<ProductWhereInput>;
  some?: Maybe<ProductWhereInput>;
  none?: Maybe<ProductWhereInput>;
};

export type CategoryListRelationFilter = {
  every?: Maybe<CategoryWhereInput>;
  some?: Maybe<CategoryWhereInput>;
  none?: Maybe<CategoryWhereInput>;
};

export type ConsumableListRelationFilter = {
  every?: Maybe<ConsumableWhereInput>;
  some?: Maybe<ConsumableWhereInput>;
  none?: Maybe<ConsumableWhereInput>;
};

export type NameColorMaterialDimensionIdWeightQuantityCompoundUniqueInput = {
  name: Scalars['String'];
  color: Scalars['String'];
  material: Scalars['String'];
  dimensionId: Scalars['String'];
  weight: Scalars['Float'];
  quantity: Scalars['Float'];
};

export type ProductCreateOneWithoutUnitsInput = {
  create?: Maybe<ProductCreateWithoutUnitsInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
};

export type ProductCreatetagsInput = {
  set: Array<Scalars['String']>;
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

export type FileCreateManyWithoutProductsInput = {
  create?: Maybe<Array<FileCreateWithoutProductsInput>>;
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

export type ProductCreateManyWithoutVariantProductInput = {
  create?: Maybe<Array<ProductCreateWithoutVariantProductInput>>;
  connect?: Maybe<Array<ProductWhereUniqueInput>>;
};

export type ProductCreateManyWithoutVariantsInput = {
  create?: Maybe<Array<ProductCreateWithoutVariantsInput>>;
  connect?: Maybe<Array<ProductWhereUniqueInput>>;
};

export type CategoryCreateManyWithoutProductsInput = {
  create?: Maybe<Array<CategoryCreateWithoutProductsInput>>;
  connect?: Maybe<Array<CategoryWhereUniqueInput>>;
};

export type ConsumableCreateManyWithoutConsumerInput = {
  create?: Maybe<Array<ConsumableCreateWithoutConsumerInput>>;
  connect?: Maybe<Array<ConsumableWhereUniqueInput>>;
};

export type ConsumableCreateManyWithoutProductInput = {
  create?: Maybe<Array<ConsumableCreateWithoutProductInput>>;
  connect?: Maybe<Array<ConsumableWhereUniqueInput>>;
};

export type NullableFloatFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Float']>;
  increment?: Maybe<Scalars['Float']>;
  decrement?: Maybe<Scalars['Float']>;
  multiply?: Maybe<Scalars['Float']>;
  divide?: Maybe<Scalars['Float']>;
};

export type ProductUpdatetagsInput = {
  set: Array<Scalars['String']>;
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

export type FileUpdateManyWithoutProductsInput = {
  create?: Maybe<Array<FileCreateWithoutProductsInput>>;
  connect?: Maybe<Array<FileWhereUniqueInput>>;
  set?: Maybe<Array<FileWhereUniqueInput>>;
  disconnect?: Maybe<Array<FileWhereUniqueInput>>;
  delete?: Maybe<Array<FileWhereUniqueInput>>;
  update?: Maybe<Array<FileUpdateWithWhereUniqueWithoutProductsInput>>;
  updateMany?: Maybe<Array<FileUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<FileScalarWhereInput>>;
  upsert?: Maybe<Array<FileUpsertWithWhereUniqueWithoutProductsInput>>;
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

export type ProductUpdateManyWithoutVariantsInput = {
  create?: Maybe<Array<ProductCreateWithoutVariantsInput>>;
  connect?: Maybe<Array<ProductWhereUniqueInput>>;
  set?: Maybe<Array<ProductWhereUniqueInput>>;
  disconnect?: Maybe<Array<ProductWhereUniqueInput>>;
  delete?: Maybe<Array<ProductWhereUniqueInput>>;
  update?: Maybe<Array<ProductUpdateWithWhereUniqueWithoutVariantsInput>>;
  updateMany?: Maybe<Array<ProductUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<ProductScalarWhereInput>>;
  upsert?: Maybe<Array<ProductUpsertWithWhereUniqueWithoutVariantsInput>>;
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

export type ConsumableUpdateManyWithoutConsumerInput = {
  create?: Maybe<Array<ConsumableCreateWithoutConsumerInput>>;
  connect?: Maybe<Array<ConsumableWhereUniqueInput>>;
  set?: Maybe<Array<ConsumableWhereUniqueInput>>;
  disconnect?: Maybe<Array<ConsumableWhereUniqueInput>>;
  delete?: Maybe<Array<ConsumableWhereUniqueInput>>;
  update?: Maybe<Array<ConsumableUpdateWithWhereUniqueWithoutConsumerInput>>;
  updateMany?: Maybe<Array<ConsumableUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<ConsumableScalarWhereInput>>;
  upsert?: Maybe<Array<ConsumableUpsertWithWhereUniqueWithoutConsumerInput>>;
};

export type ConsumableUpdateManyWithoutProductInput = {
  create?: Maybe<Array<ConsumableCreateWithoutProductInput>>;
  connect?: Maybe<Array<ConsumableWhereUniqueInput>>;
  set?: Maybe<Array<ConsumableWhereUniqueInput>>;
  disconnect?: Maybe<Array<ConsumableWhereUniqueInput>>;
  delete?: Maybe<Array<ConsumableWhereUniqueInput>>;
  update?: Maybe<Array<ConsumableUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: Maybe<Array<ConsumableUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<ConsumableScalarWhereInput>>;
  upsert?: Maybe<Array<ConsumableUpsertWithWhereUniqueWithoutProductInput>>;
};

export type UserNameTypeCompoundUniqueInput = {
  user: Scalars['String'];
  name: Scalars['String'];
  type: EntityType;
};

export type EnumTableViewNullableFilter = {
  equals?: Maybe<TableView>;
  in?: Maybe<Array<TableView>>;
  notIn?: Maybe<Array<TableView>>;
  not?: Maybe<NestedEnumTableViewNullableFilter>;
};

export type EnumEntityTypeFilter = {
  equals?: Maybe<EntityType>;
  in?: Maybe<Array<EntityType>>;
  notIn?: Maybe<Array<EntityType>>;
  not?: Maybe<NestedEnumEntityTypeFilter>;
};

export type SettingWhereInput = {
  AND?: Maybe<Array<SettingWhereInput>>;
  OR?: Maybe<Array<SettingWhereInput>>;
  NOT?: Maybe<Array<SettingWhereInput>>;
  subDomain?: Maybe<StringFilter>;
  chat?: Maybe<BoolFilter>;
  currency?: Maybe<StringNullableFilter>;
  currencySymbol?: Maybe<StringNullableFilter>;
  defaultLanguage?: Maybe<EnumLanguageNullableFilter>;
  id?: Maybe<StringFilter>;
  stripeCustomerId?: Maybe<StringNullableFilter>;
  logoId?: Maybe<StringNullableFilter>;
  manufacturerFields?: Maybe<EnumManufacturerFieldsNullableListFilter>;
  movementFields?: Maybe<EnumMovementFieldsNullableListFilter>;
  name?: Maybe<StringFilter>;
  supplierFields?: Maybe<EnumSupplierFieldsNullableListFilter>;
  clientFields?: Maybe<EnumClientFieldsNullableListFilter>;
  productFields?: Maybe<EnumProductFieldsNullableListFilter>;
  timezone?: Maybe<StringNullableFilter>;
  transportAgencyFields?: Maybe<EnumTransportAgencyFieldsNullableListFilter>;
  transportFields?: Maybe<EnumTransportFieldsNullableListFilter>;
  transporterFields?: Maybe<EnumTransporterFieldsNullableListFilter>;
  paymentFields?: Maybe<EnumPaymentFieldsNullableListFilter>;
  warehouseFields?: Maybe<EnumWarehouseFieldsNullableListFilter>;
  plan?: Maybe<EnumAccountPlanNullableFilter>;
  transports?: Maybe<BoolFilter>;
  warehouses?: Maybe<BoolFilter>;
  consumables?: Maybe<BoolFilter>;
  shop?: Maybe<BoolFilter>;
  accounting?: Maybe<BoolFilter>;
  invoicing?: Maybe<BoolFilter>;
  logo?: Maybe<FileWhereInput>;
  presets?: Maybe<PresetListRelationFilter>;
  addressId?: Maybe<StringNullableFilter>;
  address?: Maybe<AddressWhereInput>;
  billingAddressId?: Maybe<StringNullableFilter>;
  billingAddress?: Maybe<AddressWhereInput>;
  fiscalNumber?: Maybe<StringNullableFilter>;
  email?: Maybe<StringNullableFilter>;
  mobilePrefix?: Maybe<IntNullableFilter>;
  mobile?: Maybe<StringNullableFilter>;
  phonePrefix?: Maybe<IntNullableFilter>;
  phone?: Maybe<StringNullableFilter>;
  website?: Maybe<StringNullableFilter>;
  weightUnit?: Maybe<StringNullableFilter>;
  lengthUnit?: Maybe<StringNullableFilter>;
  shopPurchasedEmail?: Maybe<StringNullableFilter>;
  invoiceText?: Maybe<StringNullableFilter>;
};

export type PresetCreatecolumnOrderInput = {
  set: Array<Scalars['String']>;
};

export type PresetCreatehiddenColumnsInput = {
  set: Array<Scalars['String']>;
};

export type SettingCreateOneWithoutPresetsInput = {
  create?: Maybe<SettingCreateWithoutPresetsInput>;
  connect?: Maybe<SettingWhereUniqueInput>;
};

export type NullableEnumTableViewFieldUpdateOperationsInput = {
  set?: Maybe<TableView>;
};

export type EnumEntityTypeFieldUpdateOperationsInput = {
  set?: Maybe<EntityType>;
};

export type PresetUpdatecolumnOrderInput = {
  set: Array<Scalars['String']>;
};

export type PresetUpdatehiddenColumnsInput = {
  set: Array<Scalars['String']>;
};

export type SettingUpdateOneWithoutPresetsInput = {
  create?: Maybe<SettingCreateWithoutPresetsInput>;
  connect?: Maybe<SettingWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<SettingUpdateWithoutPresetsDataInput>;
  upsert?: Maybe<SettingUpsertWithoutPresetsInput>;
};

export type NullableEnumAccountPlanFieldUpdateOperationsInput = {
  set?: Maybe<AccountPlan>;
};

export type SettingUpdatemanufacturerFieldsInput = {
  set: Array<ManufacturerFields>;
};

export type SettingUpdatemovementFieldsInput = {
  set: Array<MovementFields>;
};

export type SettingUpdatesupplierFieldsInput = {
  set: Array<SupplierFields>;
};

export type SettingUpdateclientFieldsInput = {
  set: Array<ClientFields>;
};

export type SettingUpdateproductFieldsInput = {
  set: Array<ProductFields>;
};

export type SettingUpdatetransportAgencyFieldsInput = {
  set: Array<TransportAgencyFields>;
};

export type SettingUpdatetransportFieldsInput = {
  set: Array<TransportFields>;
};

export type SettingUpdatetransporterFieldsInput = {
  set: Array<TransporterFields>;
};

export type SettingUpdatepaymentFieldsInput = {
  set: Array<PaymentFields>;
};

export type SettingUpdatewarehouseFieldsInput = {
  set: Array<WarehouseFields>;
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
  set: Array<ManufacturerFields>;
};

export type SettingCreatemovementFieldsInput = {
  set: Array<MovementFields>;
};

export type SettingCreatesupplierFieldsInput = {
  set: Array<SupplierFields>;
};

export type SettingCreateclientFieldsInput = {
  set: Array<ClientFields>;
};

export type SettingCreateproductFieldsInput = {
  set: Array<ProductFields>;
};

export type SettingCreatetransportAgencyFieldsInput = {
  set: Array<TransportAgencyFields>;
};

export type SettingCreatetransportFieldsInput = {
  set: Array<TransportFields>;
};

export type SettingCreatetransporterFieldsInput = {
  set: Array<TransporterFields>;
};

export type SettingCreatepaymentFieldsInput = {
  set: Array<PaymentFields>;
};

export type SettingCreatewarehouseFieldsInput = {
  set: Array<WarehouseFields>;
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

export type SupplierIdTenantIdCompoundUniqueInput = {
  supplierId: Scalars['Int'];
  tenantId: Scalars['String'];
};

export type SupplierCreatetagsInput = {
  set: Array<Scalars['String']>;
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

export type FileCreateManyWithoutSuppliersInput = {
  create?: Maybe<Array<FileCreateWithoutSuppliersInput>>;
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

export type SupplierUpdatetagsInput = {
  set: Array<Scalars['String']>;
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

export type FileUpdateManyWithoutSuppliersInput = {
  create?: Maybe<Array<FileCreateWithoutSuppliersInput>>;
  connect?: Maybe<Array<FileWhereUniqueInput>>;
  set?: Maybe<Array<FileWhereUniqueInput>>;
  disconnect?: Maybe<Array<FileWhereUniqueInput>>;
  delete?: Maybe<Array<FileWhereUniqueInput>>;
  update?: Maybe<Array<FileUpdateWithWhereUniqueWithoutSuppliersInput>>;
  updateMany?: Maybe<Array<FileUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<FileScalarWhereInput>>;
  upsert?: Maybe<Array<FileUpsertWithWhereUniqueWithoutSuppliersInput>>;
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

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type NestedStringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type NestedStringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type FileWhereInput = {
  AND?: Maybe<Array<FileWhereInput>>;
  OR?: Maybe<Array<FileWhereInput>>;
  NOT?: Maybe<Array<FileWhereInput>>;
  tenantId?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  manufacturerId?: Maybe<StringNullableFilter>;
  messageId?: Maybe<StringNullableFilter>;
  name?: Maybe<StringNullableFilter>;
  notes?: Maybe<StringNullableFilter>;
  tags?: Maybe<StringNullableListFilter>;
  description?: Maybe<StringNullableFilter>;
  supplierId?: Maybe<StringNullableFilter>;
  clientId?: Maybe<StringNullableFilter>;
  smallUrl?: Maybe<StringNullableFilter>;
  transportAgencyId?: Maybe<StringNullableFilter>;
  transporterId?: Maybe<StringNullableFilter>;
  url?: Maybe<StringFilter>;
  manufacturers?: Maybe<ManufacturerListRelationFilter>;
  messages?: Maybe<MessageListRelationFilter>;
  clients?: Maybe<ClientListRelationFilter>;
  suppliers?: Maybe<SupplierListRelationFilter>;
  products?: Maybe<ProductListRelationFilter>;
  transportAgencies?: Maybe<TransportAgencyListRelationFilter>;
  transporters?: Maybe<TransporterListRelationFilter>;
  settings?: Maybe<SettingListRelationFilter>;
  Invoice?: Maybe<InvoiceListRelationFilter>;
  imageCategory?: Maybe<CategoryListRelationFilter>;
  bannerCategory?: Maybe<CategoryListRelationFilter>;
  movements?: Maybe<MovementListRelationFilter>;
  movementId?: Maybe<StringNullableFilter>;
  payments?: Maybe<PaymentListRelationFilter>;
  paymentId?: Maybe<StringNullableFilter>;
  order?: Maybe<IntNullableFilter>;
};

export type ChannelCreateWithoutMessagesInput = {
  tenantId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  role?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  members?: Maybe<ChannelCreatemembersInput>;
};

export type ChannelUpdateWithoutMessagesDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  members?: Maybe<ChannelUpdatemembersInput>;
};

export type ChannelUpsertWithoutMessagesInput = {
  update: ChannelUpdateWithoutMessagesDataInput;
  create: ChannelCreateWithoutMessagesInput;
};

export type MovementCreateWithoutCommentsInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  amount: Scalars['Float'];
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
  tags?: Maybe<MovementCreatetagsInput>;
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
  documents?: Maybe<FileCreateManyWithoutMovementsInput>;
  payments?: Maybe<PaymentCreateManyWithoutMovementInput>;
  consumablesMovements?: Maybe<MovementCreateManyWithoutConsumedFromInput>;
  consumedFrom?: Maybe<MovementCreateOneWithoutConsumablesMovementsInput>;
};

export type MovementUpdateWithoutCommentsDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  date?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  status?: Maybe<NullableEnumMovementStatusFieldUpdateOperationsInput>;
  movementId?: Maybe<IntFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  sendMail?: Maybe<BoolFieldUpdateOperationsInput>;
  storageNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  type?: Maybe<EnumMovementTypeFieldUpdateOperationsInput>;
  unitPrice?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  invoiceId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<MovementUpdatetagsInput>;
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
  documents?: Maybe<FileUpdateManyWithoutMovementsInput>;
  payments?: Maybe<PaymentUpdateManyWithoutMovementInput>;
  consumablesMovements?: Maybe<MovementUpdateManyWithoutConsumedFromInput>;
  consumedFrom?: Maybe<MovementUpdateOneWithoutConsumablesMovementsInput>;
};

export type MovementUpsertWithoutCommentsInput = {
  update: MovementUpdateWithoutCommentsDataInput;
  create: MovementCreateWithoutCommentsInput;
};

export type FileCreateWithoutMessagesInput = {
  tenantId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  manufacturerId?: Maybe<Scalars['String']>;
  messageId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  supplierId?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['String']>;
  smallUrl?: Maybe<Scalars['String']>;
  transportAgencyId?: Maybe<Scalars['String']>;
  transporterId?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  movementId?: Maybe<Scalars['String']>;
  paymentId?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  tags?: Maybe<FileCreatetagsInput>;
  manufacturers?: Maybe<ManufacturerCreateManyWithoutImagesInput>;
  clients?: Maybe<ClientCreateManyWithoutImagesInput>;
  suppliers?: Maybe<SupplierCreateManyWithoutImagesInput>;
  products?: Maybe<ProductCreateManyWithoutImagesInput>;
  transportAgencies?: Maybe<TransportAgencyCreateManyWithoutImagesInput>;
  transporters?: Maybe<TransporterCreateManyWithoutImagesInput>;
  settings?: Maybe<SettingCreateManyWithoutLogoInput>;
  Invoice?: Maybe<InvoiceCreateManyWithoutPdfInput>;
  imageCategory?: Maybe<CategoryCreateManyWithoutImageInput>;
  bannerCategory?: Maybe<CategoryCreateManyWithoutBannerImageInput>;
  movements?: Maybe<MovementCreateManyWithoutDocumentsInput>;
  payments?: Maybe<PaymentCreateManyWithoutDocumentsInput>;
};

export type FileUpdateWithWhereUniqueWithoutMessagesInput = {
  where: FileWhereUniqueInput;
  data: FileUpdateWithoutMessagesDataInput;
};

export type FileUpdateManyWithWhereNestedInput = {
  where: FileScalarWhereInput;
  data: FileUpdateManyDataInput;
};

export type FileScalarWhereInput = {
  AND?: Maybe<Array<FileScalarWhereInput>>;
  OR?: Maybe<Array<FileScalarWhereInput>>;
  NOT?: Maybe<Array<FileScalarWhereInput>>;
  tenantId?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  manufacturerId?: Maybe<StringNullableFilter>;
  messageId?: Maybe<StringNullableFilter>;
  name?: Maybe<StringNullableFilter>;
  notes?: Maybe<StringNullableFilter>;
  tags?: Maybe<StringNullableListFilter>;
  description?: Maybe<StringNullableFilter>;
  supplierId?: Maybe<StringNullableFilter>;
  clientId?: Maybe<StringNullableFilter>;
  smallUrl?: Maybe<StringNullableFilter>;
  transportAgencyId?: Maybe<StringNullableFilter>;
  transporterId?: Maybe<StringNullableFilter>;
  url?: Maybe<StringFilter>;
  movementId?: Maybe<StringNullableFilter>;
  paymentId?: Maybe<StringNullableFilter>;
  order?: Maybe<IntNullableFilter>;
};

export type FileUpsertWithWhereUniqueWithoutMessagesInput = {
  where: FileWhereUniqueInput;
  update: FileUpdateWithoutMessagesDataInput;
  create: FileCreateWithoutMessagesInput;
};

export type MessageCreateWithoutChannelInput = {
  tenantId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  recipient?: Maybe<Scalars['String']>;
  sender: Scalars['String'];
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  mentions?: Maybe<MessageCreatementionsInput>;
  movement?: Maybe<MovementCreateOneWithoutCommentsInput>;
  images?: Maybe<FileCreateManyWithoutMessagesInput>;
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
  AND?: Maybe<Array<MessageScalarWhereInput>>;
  OR?: Maybe<Array<MessageScalarWhereInput>>;
  NOT?: Maybe<Array<MessageScalarWhereInput>>;
  tenantId?: Maybe<StringNullableFilter>;
  channelId?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  mentions?: Maybe<StringNullableListFilter>;
  movementId?: Maybe<StringNullableFilter>;
  recipient?: Maybe<StringNullableFilter>;
  sender?: Maybe<StringFilter>;
  text?: Maybe<StringNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type MessageUpsertWithWhereUniqueWithoutChannelInput = {
  where: MessageWhereUniqueInput;
  update: MessageUpdateWithoutChannelDataInput;
  create: MessageCreateWithoutChannelInput;
};

export type NestedBoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type NestedFloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
};

export type NestedEnumMovementStatusNullableFilter = {
  equals?: Maybe<MovementStatus>;
  in?: Maybe<Array<MovementStatus>>;
  notIn?: Maybe<Array<MovementStatus>>;
  not?: Maybe<NestedEnumMovementStatusNullableFilter>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type NestedEnumMovementTypeFilter = {
  equals?: Maybe<MovementType>;
  in?: Maybe<Array<MovementType>>;
  notIn?: Maybe<Array<MovementType>>;
  not?: Maybe<NestedEnumMovementTypeFilter>;
};

export type NestedFloatNullableFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatNullableFilter>;
};

export type InteractionWhereInput = {
  AND?: Maybe<Array<InteractionWhereInput>>;
  OR?: Maybe<Array<InteractionWhereInput>>;
  NOT?: Maybe<Array<InteractionWhereInput>>;
  tenantId?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  movementId?: Maybe<StringNullableFilter>;
  productId?: Maybe<StringNullableFilter>;
  type?: Maybe<StringFilter>;
  action?: Maybe<StringFilter>;
  userId?: Maybe<StringFilter>;
  clientId?: Maybe<StringNullableFilter>;
  supplierId?: Maybe<StringNullableFilter>;
  transportAgencyId?: Maybe<StringNullableFilter>;
  warehouseId?: Maybe<StringNullableFilter>;
  paymentId?: Maybe<StringNullableFilter>;
  client?: Maybe<ClientWhereInput>;
  supplier?: Maybe<SupplierWhereInput>;
  movement?: Maybe<MovementWhereInput>;
  product?: Maybe<ProductWhereInput>;
  transportAgency?: Maybe<TransportAgencyWhereInput>;
  warehouse?: Maybe<WarehouseWhereInput>;
  payment?: Maybe<PaymentWhereInput>;
  data?: Maybe<StringFilter>;
};

export type TransportWhereInput = {
  AND?: Maybe<Array<TransportWhereInput>>;
  OR?: Maybe<Array<TransportWhereInput>>;
  NOT?: Maybe<Array<TransportWhereInput>>;
  tenantId?: Maybe<StringNullableFilter>;
  arrivalDate?: Maybe<DateTimeNullableFilter>;
  arrivalPoint?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  movementId?: Maybe<StringNullableFilter>;
  price?: Maybe<FloatNullableFilter>;
  transportAgencyId?: Maybe<StringNullableFilter>;
  transporterId?: Maybe<StringNullableFilter>;
  movement?: Maybe<MovementWhereInput>;
  transportAgency?: Maybe<TransportAgencyWhereInput>;
  transporter?: Maybe<TransporterWhereInput>;
  notes?: Maybe<StringNullableFilter>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
};

export type NestedEnumLanguageNullableFilter = {
  equals?: Maybe<Language>;
  in?: Maybe<Array<Language>>;
  notIn?: Maybe<Array<Language>>;
  not?: Maybe<NestedEnumLanguageNullableFilter>;
};

export type NestedBoolNullableFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolNullableFilter>;
};

export type ContactPersonWhereInput = {
  AND?: Maybe<Array<ContactPersonWhereInput>>;
  OR?: Maybe<Array<ContactPersonWhereInput>>;
  NOT?: Maybe<Array<ContactPersonWhereInput>>;
  tenantId?: Maybe<StringNullableFilter>;
  email?: Maybe<StringNullableFilter>;
  firstName?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  lastName?: Maybe<StringNullableFilter>;
  manufacturerId?: Maybe<StringNullableFilter>;
  mobilePrefix?: Maybe<IntNullableFilter>;
  mobile?: Maybe<StringNullableFilter>;
  phonePrefix?: Maybe<IntNullableFilter>;
  phone?: Maybe<StringNullableFilter>;
  clientId?: Maybe<StringNullableFilter>;
  supplierId?: Maybe<StringNullableFilter>;
  scheduleEnd?: Maybe<DateTimeNullableFilter>;
  scheduleStart?: Maybe<DateTimeNullableFilter>;
  notes?: Maybe<StringNullableFilter>;
  tags?: Maybe<StringNullableListFilter>;
  transportAgencyId?: Maybe<StringNullableFilter>;
  warehouseId?: Maybe<StringNullableFilter>;
  manufacturer?: Maybe<ManufacturerWhereInput>;
  supplier?: Maybe<SupplierWhereInput>;
  client?: Maybe<ClientWhereInput>;
  transportAgency?: Maybe<TransportAgencyWhereInput>;
  warehouse?: Maybe<WarehouseWhereInput>;
};

export type ManufacturerListRelationFilter = {
  every?: Maybe<ManufacturerWhereInput>;
  some?: Maybe<ManufacturerWhereInput>;
  none?: Maybe<ManufacturerWhereInput>;
};

export type WarehouseListRelationFilter = {
  every?: Maybe<WarehouseWhereInput>;
  some?: Maybe<WarehouseWhereInput>;
  none?: Maybe<WarehouseWhereInput>;
};

export type TransportAgencyListRelationFilter = {
  every?: Maybe<TransportAgencyWhereInput>;
  some?: Maybe<TransportAgencyWhereInput>;
  none?: Maybe<TransportAgencyWhereInput>;
};

export type ContactPersonCreateWithoutClientInput = {
  tenantId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  scheduleEnd?: Maybe<Scalars['DateTime']>;
  scheduleStart?: Maybe<Scalars['DateTime']>;
  notes?: Maybe<Scalars['String']>;
  tags?: Maybe<ContactPersonCreatetagsInput>;
  manufacturer?: Maybe<ManufacturerCreateOneWithoutContactPersonsInput>;
  supplier?: Maybe<SupplierCreateOneWithoutContactPersonsInput>;
  transportAgency?: Maybe<TransportAgencyCreateOneWithoutContactPersonsInput>;
  warehouse?: Maybe<WarehouseCreateOneWithoutContactPersonsInput>;
};

export type FileCreateWithoutClientsInput = {
  tenantId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  manufacturerId?: Maybe<Scalars['String']>;
  messageId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  supplierId?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['String']>;
  smallUrl?: Maybe<Scalars['String']>;
  transportAgencyId?: Maybe<Scalars['String']>;
  transporterId?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  movementId?: Maybe<Scalars['String']>;
  paymentId?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  tags?: Maybe<FileCreatetagsInput>;
  manufacturers?: Maybe<ManufacturerCreateManyWithoutImagesInput>;
  messages?: Maybe<MessageCreateManyWithoutImagesInput>;
  suppliers?: Maybe<SupplierCreateManyWithoutImagesInput>;
  products?: Maybe<ProductCreateManyWithoutImagesInput>;
  transportAgencies?: Maybe<TransportAgencyCreateManyWithoutImagesInput>;
  transporters?: Maybe<TransporterCreateManyWithoutImagesInput>;
  settings?: Maybe<SettingCreateManyWithoutLogoInput>;
  Invoice?: Maybe<InvoiceCreateManyWithoutPdfInput>;
  imageCategory?: Maybe<CategoryCreateManyWithoutImageInput>;
  bannerCategory?: Maybe<CategoryCreateManyWithoutBannerImageInput>;
  movements?: Maybe<MovementCreateManyWithoutDocumentsInput>;
  payments?: Maybe<PaymentCreateManyWithoutDocumentsInput>;
};

export type InteractionCreateWithoutClientInput = {
  tenantId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  action: Scalars['String'];
  userId: Scalars['String'];
  data: Scalars['String'];
  supplier?: Maybe<SupplierCreateOneWithoutInteractionsInput>;
  movement?: Maybe<MovementCreateOneWithoutInteractionsInput>;
  product?: Maybe<ProductCreateOneWithoutInteractionsInput>;
  transportAgency?: Maybe<TransportAgencyCreateOneWithoutInteractionInput>;
  warehouse?: Maybe<WarehouseCreateOneWithoutInteractionInput>;
  payment?: Maybe<PaymentCreateOneWithoutInteractionInput>;
};

export type InteractionWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type InventoryCreateWithoutClientInput = {
  tenantId?: Maybe<Scalars['String']>;
  amount: Scalars['Float'];
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
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  amount: Scalars['Float'];
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
  tags?: Maybe<MovementCreatetagsInput>;
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
  documents?: Maybe<FileCreateManyWithoutMovementsInput>;
  payments?: Maybe<PaymentCreateManyWithoutMovementInput>;
  consumablesMovements?: Maybe<MovementCreateManyWithoutConsumedFromInput>;
  consumedFrom?: Maybe<MovementCreateOneWithoutConsumablesMovementsInput>;
};

export type ReservationCreateWithoutClientInput = {
  tenantId?: Maybe<Scalars['String']>;
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  notes?: Maybe<Scalars['String']>;
  inventory?: Maybe<InventoryCreateOneWithoutReservationsInput>;
  movement: MovementCreateOneWithoutReservationInput;
};

export type AddressCreateWithoutClientAddressInput = {
  tenantId?: Maybe<Scalars['String']>;
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
  transportAgencyAddress?: Maybe<TransportAgencyCreateOneWithoutAddressInput>;
  transportAgencyBillingAddress?: Maybe<TransportAgencyCreateOneWithoutBillingAddressInput>;
  Manufacturer?: Maybe<ManufacturerCreateManyWithoutAddressInput>;
  Warehouse?: Maybe<WarehouseCreateManyWithoutAddressInput>;
  TransportAgency?: Maybe<TransportAgencyCreateManyWithoutAddressInput>;
};

export type AddressWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type AddressCreateWithoutClientBillingAddressInput = {
  tenantId?: Maybe<Scalars['String']>;
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
  transportAgencyAddress?: Maybe<TransportAgencyCreateOneWithoutAddressInput>;
  transportAgencyBillingAddress?: Maybe<TransportAgencyCreateOneWithoutBillingAddressInput>;
  Manufacturer?: Maybe<ManufacturerCreateManyWithoutAddressInput>;
  Warehouse?: Maybe<WarehouseCreateManyWithoutAddressInput>;
  TransportAgency?: Maybe<TransportAgencyCreateManyWithoutAddressInput>;
};

export type InvoiceCreateWithoutClientInput = {
  tenantId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  withTaxes: Scalars['Boolean'];
  notes?: Maybe<Scalars['String']>;
  tags?: Maybe<InvoiceCreatetagsInput>;
  pdf: FileCreateOneWithoutInvoiceInput;
  movements?: Maybe<MovementCreateManyWithoutInvoiceInput>;
};

export type PaymentCreateWithoutClientInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
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
  tags?: Maybe<PaymentCreatetagsInput>;
  group?: Maybe<GroupCreateOneWithoutPaymentsInput>;
  taxRate?: Maybe<TaxRateCreateOneWithoutPaymentsInput>;
  movement?: Maybe<MovementCreateOneWithoutPaymentsInput>;
  transportAgency?: Maybe<TransportAgencyCreateOneWithoutPaymentsInput>;
  supplier?: Maybe<SupplierCreateOneWithoutPaymentsInput>;
  documents?: Maybe<FileCreateManyWithoutPaymentsInput>;
  bankAccount?: Maybe<BankAccountCreateOneWithoutPaymentsInput>;
  Interaction?: Maybe<InteractionCreateManyWithoutPaymentInput>;
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
  AND?: Maybe<Array<ContactPersonScalarWhereInput>>;
  OR?: Maybe<Array<ContactPersonScalarWhereInput>>;
  NOT?: Maybe<Array<ContactPersonScalarWhereInput>>;
  tenantId?: Maybe<StringNullableFilter>;
  email?: Maybe<StringNullableFilter>;
  firstName?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  lastName?: Maybe<StringNullableFilter>;
  manufacturerId?: Maybe<StringNullableFilter>;
  mobilePrefix?: Maybe<IntNullableFilter>;
  mobile?: Maybe<StringNullableFilter>;
  phonePrefix?: Maybe<IntNullableFilter>;
  phone?: Maybe<StringNullableFilter>;
  clientId?: Maybe<StringNullableFilter>;
  supplierId?: Maybe<StringNullableFilter>;
  scheduleEnd?: Maybe<DateTimeNullableFilter>;
  scheduleStart?: Maybe<DateTimeNullableFilter>;
  notes?: Maybe<StringNullableFilter>;
  tags?: Maybe<StringNullableListFilter>;
  transportAgencyId?: Maybe<StringNullableFilter>;
  warehouseId?: Maybe<StringNullableFilter>;
};

export type ContactPersonUpsertWithWhereUniqueWithoutClientInput = {
  where: ContactPersonWhereUniqueInput;
  update: ContactPersonUpdateWithoutClientDataInput;
  create: ContactPersonCreateWithoutClientInput;
};

export type FileUpdateWithWhereUniqueWithoutClientsInput = {
  where: FileWhereUniqueInput;
  data: FileUpdateWithoutClientsDataInput;
};

export type FileUpsertWithWhereUniqueWithoutClientsInput = {
  where: FileWhereUniqueInput;
  update: FileUpdateWithoutClientsDataInput;
  create: FileCreateWithoutClientsInput;
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
  AND?: Maybe<Array<InteractionScalarWhereInput>>;
  OR?: Maybe<Array<InteractionScalarWhereInput>>;
  NOT?: Maybe<Array<InteractionScalarWhereInput>>;
  tenantId?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  movementId?: Maybe<StringNullableFilter>;
  productId?: Maybe<StringNullableFilter>;
  type?: Maybe<StringFilter>;
  action?: Maybe<StringFilter>;
  userId?: Maybe<StringFilter>;
  clientId?: Maybe<StringNullableFilter>;
  supplierId?: Maybe<StringNullableFilter>;
  transportAgencyId?: Maybe<StringNullableFilter>;
  warehouseId?: Maybe<StringNullableFilter>;
  paymentId?: Maybe<StringNullableFilter>;
  data?: Maybe<StringFilter>;
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
  AND?: Maybe<Array<InventoryScalarWhereInput>>;
  OR?: Maybe<Array<InventoryScalarWhereInput>>;
  NOT?: Maybe<Array<InventoryScalarWhereInput>>;
  tenantId?: Maybe<StringNullableFilter>;
  amount?: Maybe<FloatFilter>;
  batchId?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  productId?: Maybe<StringFilter>;
  storageNumber?: Maybe<StringNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  warehouseId?: Maybe<StringNullableFilter>;
  supplierId?: Maybe<StringNullableFilter>;
  clientId?: Maybe<StringNullableFilter>;
  source?: Maybe<StringNullableFilter>;
  isListed?: Maybe<BoolNullableFilter>;
  listPrice?: Maybe<FloatNullableFilter>;
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
  AND?: Maybe<Array<MovementScalarWhereInput>>;
  OR?: Maybe<Array<MovementScalarWhereInput>>;
  NOT?: Maybe<Array<MovementScalarWhereInput>>;
  tenantId?: Maybe<StringNullableFilter>;
  deleted?: Maybe<BoolFilter>;
  amount?: Maybe<FloatFilter>;
  batchId?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  date?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  status?: Maybe<EnumMovementStatusNullableFilter>;
  inventoryId?: Maybe<StringNullableFilter>;
  movementId?: Maybe<IntFilter>;
  notes?: Maybe<StringNullableFilter>;
  tags?: Maybe<StringNullableListFilter>;
  productId?: Maybe<StringFilter>;
  sendMail?: Maybe<BoolFilter>;
  storageNumber?: Maybe<StringNullableFilter>;
  type?: Maybe<EnumMovementTypeFilter>;
  unitPrice?: Maybe<FloatNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  warehouseId?: Maybe<StringNullableFilter>;
  clientId?: Maybe<StringNullableFilter>;
  supplierId?: Maybe<StringNullableFilter>;
  invoiceId?: Maybe<StringNullableFilter>;
  invoiceId_InvoiceToMovement?: Maybe<IntNullableFilter>;
  source?: Maybe<StringNullableFilter>;
  movementId_MovementToMovement?: Maybe<StringNullableFilter>;
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
  AND?: Maybe<Array<ReservationScalarWhereInput>>;
  OR?: Maybe<Array<ReservationScalarWhereInput>>;
  NOT?: Maybe<Array<ReservationScalarWhereInput>>;
  tenantId?: Maybe<StringNullableFilter>;
  amount?: Maybe<IntFilter>;
  clientId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  inventoryId?: Maybe<StringNullableFilter>;
  movementId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  notes?: Maybe<StringNullableFilter>;
};

export type ReservationUpsertWithWhereUniqueWithoutClientInput = {
  where: ReservationWhereUniqueInput;
  update: ReservationUpdateWithoutClientDataInput;
  create: ReservationCreateWithoutClientInput;
};

export type AddressUpdateWithoutClientAddressDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  addressLine1?: Maybe<NullableStringFieldUpdateOperationsInput>;
  addressLine2?: Maybe<NullableStringFieldUpdateOperationsInput>;
  city?: Maybe<NullableStringFieldUpdateOperationsInput>;
  country?: Maybe<NullableStringFieldUpdateOperationsInput>;
  state?: Maybe<NullableStringFieldUpdateOperationsInput>;
  zip?: Maybe<NullableStringFieldUpdateOperationsInput>;
  supplierAddress?: Maybe<SupplierUpdateOneWithoutAddressInput>;
  supplierBillingAddress?: Maybe<SupplierUpdateOneWithoutBillingAddressInput>;
  clientBillingAddress?: Maybe<ClientUpdateOneWithoutBillingAddressInput>;
  address?: Maybe<SettingUpdateOneWithoutAddressInput>;
  billingAddress?: Maybe<SettingUpdateOneWithoutBillingAddressInput>;
  transportAgencyAddress?: Maybe<TransportAgencyUpdateOneWithoutAddressInput>;
  transportAgencyBillingAddress?: Maybe<TransportAgencyUpdateOneWithoutBillingAddressInput>;
  Manufacturer?: Maybe<ManufacturerUpdateManyWithoutAddressInput>;
  Warehouse?: Maybe<WarehouseUpdateManyWithoutAddressInput>;
  TransportAgency?: Maybe<TransportAgencyUpdateManyWithoutAddressInput>;
};

export type AddressUpsertWithoutClientAddressInput = {
  update: AddressUpdateWithoutClientAddressDataInput;
  create: AddressCreateWithoutClientAddressInput;
};

export type AddressUpdateWithoutClientBillingAddressDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  addressLine1?: Maybe<NullableStringFieldUpdateOperationsInput>;
  addressLine2?: Maybe<NullableStringFieldUpdateOperationsInput>;
  city?: Maybe<NullableStringFieldUpdateOperationsInput>;
  country?: Maybe<NullableStringFieldUpdateOperationsInput>;
  state?: Maybe<NullableStringFieldUpdateOperationsInput>;
  zip?: Maybe<NullableStringFieldUpdateOperationsInput>;
  supplierAddress?: Maybe<SupplierUpdateOneWithoutAddressInput>;
  supplierBillingAddress?: Maybe<SupplierUpdateOneWithoutBillingAddressInput>;
  clientAddress?: Maybe<ClientUpdateOneWithoutAddressInput>;
  address?: Maybe<SettingUpdateOneWithoutAddressInput>;
  billingAddress?: Maybe<SettingUpdateOneWithoutBillingAddressInput>;
  transportAgencyAddress?: Maybe<TransportAgencyUpdateOneWithoutAddressInput>;
  transportAgencyBillingAddress?: Maybe<TransportAgencyUpdateOneWithoutBillingAddressInput>;
  Manufacturer?: Maybe<ManufacturerUpdateManyWithoutAddressInput>;
  Warehouse?: Maybe<WarehouseUpdateManyWithoutAddressInput>;
  TransportAgency?: Maybe<TransportAgencyUpdateManyWithoutAddressInput>;
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
  AND?: Maybe<Array<InvoiceScalarWhereInput>>;
  OR?: Maybe<Array<InvoiceScalarWhereInput>>;
  NOT?: Maybe<Array<InvoiceScalarWhereInput>>;
  tenantId?: Maybe<StringNullableFilter>;
  id?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  pdfId?: Maybe<StringFilter>;
  clientId?: Maybe<StringFilter>;
  withTaxes?: Maybe<BoolFilter>;
  notes?: Maybe<StringNullableFilter>;
  tags?: Maybe<StringNullableListFilter>;
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
  AND?: Maybe<Array<PaymentScalarWhereInput>>;
  OR?: Maybe<Array<PaymentScalarWhereInput>>;
  NOT?: Maybe<Array<PaymentScalarWhereInput>>;
  tenantId?: Maybe<StringNullableFilter>;
  deleted?: Maybe<BoolFilter>;
  id?: Maybe<StringFilter>;
  paymentId?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  type?: Maybe<EnumPaymentTypeFilter>;
  status?: Maybe<EnumPaymentStatusFilter>;
  dueDate?: Maybe<DateTimeNullableFilter>;
  date?: Maybe<DateTimeNullableFilter>;
  source?: Maybe<StringNullableFilter>;
  concept?: Maybe<StringNullableFilter>;
  groupId?: Maybe<StringNullableFilter>;
  amount?: Maybe<FloatFilter>;
  currency?: Maybe<StringFilter>;
  taxRateId?: Maybe<StringNullableFilter>;
  recipient?: Maybe<StringNullableFilter>;
  notes?: Maybe<StringNullableFilter>;
  tags?: Maybe<StringNullableListFilter>;
  movementId?: Maybe<StringNullableFilter>;
  transportAgencyId?: Maybe<StringNullableFilter>;
  clientId?: Maybe<StringNullableFilter>;
  supplierId?: Maybe<StringNullableFilter>;
  bankAccountId?: Maybe<StringNullableFilter>;
  paymentMethod?: Maybe<StringNullableFilter>;
  stripePaymentIntentId?: Maybe<StringNullableFilter>;
  stripeClientSecret?: Maybe<StringNullableFilter>;
};

export type PaymentUpsertWithWhereUniqueWithoutClientInput = {
  where: PaymentWhereUniqueInput;
  update: PaymentUpdateWithoutClientDataInput;
  create: PaymentCreateWithoutClientInput;
};

export type NotificationWhereInput = {
  AND?: Maybe<Array<NotificationWhereInput>>;
  OR?: Maybe<Array<NotificationWhereInput>>;
  NOT?: Maybe<Array<NotificationWhereInput>>;
  tenantId?: Maybe<StringNullableFilter>;
  amount?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  active?: Maybe<BoolFilter>;
  productId?: Maybe<StringFilter>;
  type?: Maybe<EnumNotificationTypeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  warehouseId?: Maybe<StringNullableFilter>;
  warehouse?: Maybe<WarehouseWhereInput>;
  user?: Maybe<StringFilter>;
  userLanguage?: Maybe<EnumLanguageNullableFilter>;
  userEmail?: Maybe<StringFilter>;
  product?: Maybe<ProductWhereInput>;
};

export type TransporterWhereInput = {
  AND?: Maybe<Array<TransporterWhereInput>>;
  OR?: Maybe<Array<TransporterWhereInput>>;
  NOT?: Maybe<Array<TransporterWhereInput>>;
  tenantId?: Maybe<StringNullableFilter>;
  transportAgencyId?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringNullableFilter>;
  type?: Maybe<EnumTransportTypeFilter>;
  transportAgency?: Maybe<TransportAgencyWhereInput>;
  images?: Maybe<FileListRelationFilter>;
  transports?: Maybe<TransportListRelationFilter>;
  notes?: Maybe<StringNullableFilter>;
  tags?: Maybe<StringNullableListFilter>;
};

export type ContactPersonCreateWithoutTransportAgencyInput = {
  tenantId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  scheduleEnd?: Maybe<Scalars['DateTime']>;
  scheduleStart?: Maybe<Scalars['DateTime']>;
  notes?: Maybe<Scalars['String']>;
  tags?: Maybe<ContactPersonCreatetagsInput>;
  manufacturer?: Maybe<ManufacturerCreateOneWithoutContactPersonsInput>;
  supplier?: Maybe<SupplierCreateOneWithoutContactPersonsInput>;
  client?: Maybe<ClientCreateOneWithoutContactPersonsInput>;
  warehouse?: Maybe<WarehouseCreateOneWithoutContactPersonsInput>;
};

export type FileCreateWithoutTransportAgenciesInput = {
  tenantId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  manufacturerId?: Maybe<Scalars['String']>;
  messageId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  supplierId?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['String']>;
  smallUrl?: Maybe<Scalars['String']>;
  transportAgencyId?: Maybe<Scalars['String']>;
  transporterId?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  movementId?: Maybe<Scalars['String']>;
  paymentId?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  tags?: Maybe<FileCreatetagsInput>;
  manufacturers?: Maybe<ManufacturerCreateManyWithoutImagesInput>;
  messages?: Maybe<MessageCreateManyWithoutImagesInput>;
  clients?: Maybe<ClientCreateManyWithoutImagesInput>;
  suppliers?: Maybe<SupplierCreateManyWithoutImagesInput>;
  products?: Maybe<ProductCreateManyWithoutImagesInput>;
  transporters?: Maybe<TransporterCreateManyWithoutImagesInput>;
  settings?: Maybe<SettingCreateManyWithoutLogoInput>;
  Invoice?: Maybe<InvoiceCreateManyWithoutPdfInput>;
  imageCategory?: Maybe<CategoryCreateManyWithoutImageInput>;
  bannerCategory?: Maybe<CategoryCreateManyWithoutBannerImageInput>;
  movements?: Maybe<MovementCreateManyWithoutDocumentsInput>;
  payments?: Maybe<PaymentCreateManyWithoutDocumentsInput>;
};

export type TransportCreateWithoutTransportAgencyInput = {
  tenantId?: Maybe<Scalars['String']>;
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
  tenantId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type: TransportType;
  notes?: Maybe<Scalars['String']>;
  tags?: Maybe<TransporterCreatetagsInput>;
  images?: Maybe<FileCreateManyWithoutTransportersInput>;
  transports?: Maybe<TransportCreateManyWithoutTransporterInput>;
};

export type AddressCreateWithoutTransportAgencyAddressInput = {
  tenantId?: Maybe<Scalars['String']>;
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
  transportAgencyBillingAddress?: Maybe<TransportAgencyCreateOneWithoutBillingAddressInput>;
  Manufacturer?: Maybe<ManufacturerCreateManyWithoutAddressInput>;
  Warehouse?: Maybe<WarehouseCreateManyWithoutAddressInput>;
  TransportAgency?: Maybe<TransportAgencyCreateManyWithoutAddressInput>;
};

export type AddressCreateWithoutTransportAgencyBillingAddressInput = {
  tenantId?: Maybe<Scalars['String']>;
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
  transportAgencyAddress?: Maybe<TransportAgencyCreateOneWithoutAddressInput>;
  Manufacturer?: Maybe<ManufacturerCreateManyWithoutAddressInput>;
  Warehouse?: Maybe<WarehouseCreateManyWithoutAddressInput>;
  TransportAgency?: Maybe<TransportAgencyCreateManyWithoutAddressInput>;
};

export type PaymentCreateWithoutTransportAgencyInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
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
  tags?: Maybe<PaymentCreatetagsInput>;
  group?: Maybe<GroupCreateOneWithoutPaymentsInput>;
  taxRate?: Maybe<TaxRateCreateOneWithoutPaymentsInput>;
  movement?: Maybe<MovementCreateOneWithoutPaymentsInput>;
  client?: Maybe<ClientCreateOneWithoutPaymentsInput>;
  supplier?: Maybe<SupplierCreateOneWithoutPaymentsInput>;
  documents?: Maybe<FileCreateManyWithoutPaymentsInput>;
  bankAccount?: Maybe<BankAccountCreateOneWithoutPaymentsInput>;
  Interaction?: Maybe<InteractionCreateManyWithoutPaymentInput>;
};

export type AddressCreateWithoutTransportAgencyInput = {
  tenantId?: Maybe<Scalars['String']>;
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
  transportAgencyAddress?: Maybe<TransportAgencyCreateOneWithoutAddressInput>;
  transportAgencyBillingAddress?: Maybe<TransportAgencyCreateOneWithoutBillingAddressInput>;
  Manufacturer?: Maybe<ManufacturerCreateManyWithoutAddressInput>;
  Warehouse?: Maybe<WarehouseCreateManyWithoutAddressInput>;
};

export type InteractionCreateWithoutTransportAgencyInput = {
  tenantId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  action: Scalars['String'];
  userId: Scalars['String'];
  data: Scalars['String'];
  client?: Maybe<ClientCreateOneWithoutInteractionsInput>;
  supplier?: Maybe<SupplierCreateOneWithoutInteractionsInput>;
  movement?: Maybe<MovementCreateOneWithoutInteractionsInput>;
  product?: Maybe<ProductCreateOneWithoutInteractionsInput>;
  warehouse?: Maybe<WarehouseCreateOneWithoutInteractionInput>;
  payment?: Maybe<PaymentCreateOneWithoutInteractionInput>;
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

export type FileUpdateWithWhereUniqueWithoutTransportAgenciesInput = {
  where: FileWhereUniqueInput;
  data: FileUpdateWithoutTransportAgenciesDataInput;
};

export type FileUpsertWithWhereUniqueWithoutTransportAgenciesInput = {
  where: FileWhereUniqueInput;
  update: FileUpdateWithoutTransportAgenciesDataInput;
  create: FileCreateWithoutTransportAgenciesInput;
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
  AND?: Maybe<Array<TransportScalarWhereInput>>;
  OR?: Maybe<Array<TransportScalarWhereInput>>;
  NOT?: Maybe<Array<TransportScalarWhereInput>>;
  tenantId?: Maybe<StringNullableFilter>;
  arrivalDate?: Maybe<DateTimeNullableFilter>;
  arrivalPoint?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  movementId?: Maybe<StringNullableFilter>;
  price?: Maybe<FloatNullableFilter>;
  transportAgencyId?: Maybe<StringNullableFilter>;
  transporterId?: Maybe<StringNullableFilter>;
  notes?: Maybe<StringNullableFilter>;
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
  AND?: Maybe<Array<TransporterScalarWhereInput>>;
  OR?: Maybe<Array<TransporterScalarWhereInput>>;
  NOT?: Maybe<Array<TransporterScalarWhereInput>>;
  tenantId?: Maybe<StringNullableFilter>;
  transportAgencyId?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringNullableFilter>;
  type?: Maybe<EnumTransportTypeFilter>;
  notes?: Maybe<StringNullableFilter>;
  tags?: Maybe<StringNullableListFilter>;
};

export type TransporterUpsertWithWhereUniqueWithoutTransportAgencyInput = {
  where: TransporterWhereUniqueInput;
  update: TransporterUpdateWithoutTransportAgencyDataInput;
  create: TransporterCreateWithoutTransportAgencyInput;
};

export type AddressUpdateWithoutTransportAgencyAddressDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  addressLine1?: Maybe<NullableStringFieldUpdateOperationsInput>;
  addressLine2?: Maybe<NullableStringFieldUpdateOperationsInput>;
  city?: Maybe<NullableStringFieldUpdateOperationsInput>;
  country?: Maybe<NullableStringFieldUpdateOperationsInput>;
  state?: Maybe<NullableStringFieldUpdateOperationsInput>;
  zip?: Maybe<NullableStringFieldUpdateOperationsInput>;
  supplierAddress?: Maybe<SupplierUpdateOneWithoutAddressInput>;
  supplierBillingAddress?: Maybe<SupplierUpdateOneWithoutBillingAddressInput>;
  clientAddress?: Maybe<ClientUpdateOneWithoutAddressInput>;
  clientBillingAddress?: Maybe<ClientUpdateOneWithoutBillingAddressInput>;
  address?: Maybe<SettingUpdateOneWithoutAddressInput>;
  billingAddress?: Maybe<SettingUpdateOneWithoutBillingAddressInput>;
  transportAgencyBillingAddress?: Maybe<TransportAgencyUpdateOneWithoutBillingAddressInput>;
  Manufacturer?: Maybe<ManufacturerUpdateManyWithoutAddressInput>;
  Warehouse?: Maybe<WarehouseUpdateManyWithoutAddressInput>;
  TransportAgency?: Maybe<TransportAgencyUpdateManyWithoutAddressInput>;
};

export type AddressUpsertWithoutTransportAgencyAddressInput = {
  update: AddressUpdateWithoutTransportAgencyAddressDataInput;
  create: AddressCreateWithoutTransportAgencyAddressInput;
};

export type AddressUpdateWithoutTransportAgencyBillingAddressDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  addressLine1?: Maybe<NullableStringFieldUpdateOperationsInput>;
  addressLine2?: Maybe<NullableStringFieldUpdateOperationsInput>;
  city?: Maybe<NullableStringFieldUpdateOperationsInput>;
  country?: Maybe<NullableStringFieldUpdateOperationsInput>;
  state?: Maybe<NullableStringFieldUpdateOperationsInput>;
  zip?: Maybe<NullableStringFieldUpdateOperationsInput>;
  supplierAddress?: Maybe<SupplierUpdateOneWithoutAddressInput>;
  supplierBillingAddress?: Maybe<SupplierUpdateOneWithoutBillingAddressInput>;
  clientAddress?: Maybe<ClientUpdateOneWithoutAddressInput>;
  clientBillingAddress?: Maybe<ClientUpdateOneWithoutBillingAddressInput>;
  address?: Maybe<SettingUpdateOneWithoutAddressInput>;
  billingAddress?: Maybe<SettingUpdateOneWithoutBillingAddressInput>;
  transportAgencyAddress?: Maybe<TransportAgencyUpdateOneWithoutAddressInput>;
  Manufacturer?: Maybe<ManufacturerUpdateManyWithoutAddressInput>;
  Warehouse?: Maybe<WarehouseUpdateManyWithoutAddressInput>;
  TransportAgency?: Maybe<TransportAgencyUpdateManyWithoutAddressInput>;
};

export type AddressUpsertWithoutTransportAgencyBillingAddressInput = {
  update: AddressUpdateWithoutTransportAgencyBillingAddressDataInput;
  create: AddressCreateWithoutTransportAgencyBillingAddressInput;
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

export type AddressUpdateWithoutTransportAgencyDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  addressLine1?: Maybe<NullableStringFieldUpdateOperationsInput>;
  addressLine2?: Maybe<NullableStringFieldUpdateOperationsInput>;
  city?: Maybe<NullableStringFieldUpdateOperationsInput>;
  country?: Maybe<NullableStringFieldUpdateOperationsInput>;
  state?: Maybe<NullableStringFieldUpdateOperationsInput>;
  zip?: Maybe<NullableStringFieldUpdateOperationsInput>;
  supplierAddress?: Maybe<SupplierUpdateOneWithoutAddressInput>;
  supplierBillingAddress?: Maybe<SupplierUpdateOneWithoutBillingAddressInput>;
  clientAddress?: Maybe<ClientUpdateOneWithoutAddressInput>;
  clientBillingAddress?: Maybe<ClientUpdateOneWithoutBillingAddressInput>;
  address?: Maybe<SettingUpdateOneWithoutAddressInput>;
  billingAddress?: Maybe<SettingUpdateOneWithoutBillingAddressInput>;
  transportAgencyAddress?: Maybe<TransportAgencyUpdateOneWithoutAddressInput>;
  transportAgencyBillingAddress?: Maybe<TransportAgencyUpdateOneWithoutBillingAddressInput>;
  Manufacturer?: Maybe<ManufacturerUpdateManyWithoutAddressInput>;
  Warehouse?: Maybe<WarehouseUpdateManyWithoutAddressInput>;
};

export type AddressUpsertWithoutTransportAgencyInput = {
  update: AddressUpdateWithoutTransportAgencyDataInput;
  create: AddressCreateWithoutTransportAgencyInput;
};

export type InteractionUpdateWithWhereUniqueWithoutTransportAgencyInput = {
  where: InteractionWhereUniqueInput;
  data: InteractionUpdateWithoutTransportAgencyDataInput;
};

export type InteractionUpsertWithWhereUniqueWithoutTransportAgencyInput = {
  where: InteractionWhereUniqueInput;
  update: InteractionUpdateWithoutTransportAgencyDataInput;
  create: InteractionCreateWithoutTransportAgencyInput;
};

export type ContactPersonCreateWithoutWarehouseInput = {
  tenantId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  scheduleEnd?: Maybe<Scalars['DateTime']>;
  scheduleStart?: Maybe<Scalars['DateTime']>;
  notes?: Maybe<Scalars['String']>;
  tags?: Maybe<ContactPersonCreatetagsInput>;
  manufacturer?: Maybe<ManufacturerCreateOneWithoutContactPersonsInput>;
  supplier?: Maybe<SupplierCreateOneWithoutContactPersonsInput>;
  client?: Maybe<ClientCreateOneWithoutContactPersonsInput>;
  transportAgency?: Maybe<TransportAgencyCreateOneWithoutContactPersonsInput>;
};

export type InventoryCreateWithoutWarehouseInput = {
  tenantId?: Maybe<Scalars['String']>;
  amount: Scalars['Float'];
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
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  amount: Scalars['Float'];
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
  tags?: Maybe<MovementCreatetagsInput>;
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
  documents?: Maybe<FileCreateManyWithoutMovementsInput>;
  payments?: Maybe<PaymentCreateManyWithoutMovementInput>;
  consumablesMovements?: Maybe<MovementCreateManyWithoutConsumedFromInput>;
  consumedFrom?: Maybe<MovementCreateOneWithoutConsumablesMovementsInput>;
};

export type AddressCreateWithoutWarehouseInput = {
  tenantId?: Maybe<Scalars['String']>;
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
  transportAgencyAddress?: Maybe<TransportAgencyCreateOneWithoutAddressInput>;
  transportAgencyBillingAddress?: Maybe<TransportAgencyCreateOneWithoutBillingAddressInput>;
  Manufacturer?: Maybe<ManufacturerCreateManyWithoutAddressInput>;
  TransportAgency?: Maybe<TransportAgencyCreateManyWithoutAddressInput>;
};

export type NotificationCreateWithoutWarehouseInput = {
  tenantId?: Maybe<Scalars['String']>;
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  type: NotificationType;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: Scalars['String'];
  userLanguage?: Maybe<Language>;
  userEmail: Scalars['String'];
  product: ProductCreateOneWithoutNotificationsInput;
};

export type InteractionCreateWithoutWarehouseInput = {
  tenantId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  action: Scalars['String'];
  userId: Scalars['String'];
  data: Scalars['String'];
  client?: Maybe<ClientCreateOneWithoutInteractionsInput>;
  supplier?: Maybe<SupplierCreateOneWithoutInteractionsInput>;
  movement?: Maybe<MovementCreateOneWithoutInteractionsInput>;
  product?: Maybe<ProductCreateOneWithoutInteractionsInput>;
  transportAgency?: Maybe<TransportAgencyCreateOneWithoutInteractionInput>;
  payment?: Maybe<PaymentCreateOneWithoutInteractionInput>;
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
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  addressLine1?: Maybe<NullableStringFieldUpdateOperationsInput>;
  addressLine2?: Maybe<NullableStringFieldUpdateOperationsInput>;
  city?: Maybe<NullableStringFieldUpdateOperationsInput>;
  country?: Maybe<NullableStringFieldUpdateOperationsInput>;
  state?: Maybe<NullableStringFieldUpdateOperationsInput>;
  zip?: Maybe<NullableStringFieldUpdateOperationsInput>;
  supplierAddress?: Maybe<SupplierUpdateOneWithoutAddressInput>;
  supplierBillingAddress?: Maybe<SupplierUpdateOneWithoutBillingAddressInput>;
  clientAddress?: Maybe<ClientUpdateOneWithoutAddressInput>;
  clientBillingAddress?: Maybe<ClientUpdateOneWithoutBillingAddressInput>;
  address?: Maybe<SettingUpdateOneWithoutAddressInput>;
  billingAddress?: Maybe<SettingUpdateOneWithoutBillingAddressInput>;
  transportAgencyAddress?: Maybe<TransportAgencyUpdateOneWithoutAddressInput>;
  transportAgencyBillingAddress?: Maybe<TransportAgencyUpdateOneWithoutBillingAddressInput>;
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
  AND?: Maybe<Array<NotificationScalarWhereInput>>;
  OR?: Maybe<Array<NotificationScalarWhereInput>>;
  NOT?: Maybe<Array<NotificationScalarWhereInput>>;
  tenantId?: Maybe<StringNullableFilter>;
  amount?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  active?: Maybe<BoolFilter>;
  productId?: Maybe<StringFilter>;
  type?: Maybe<EnumNotificationTypeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  warehouseId?: Maybe<StringNullableFilter>;
  user?: Maybe<StringFilter>;
  userLanguage?: Maybe<EnumLanguageNullableFilter>;
  userEmail?: Maybe<StringFilter>;
};

export type NotificationUpsertWithWhereUniqueWithoutWarehouseInput = {
  where: NotificationWhereUniqueInput;
  update: NotificationUpdateWithoutWarehouseDataInput;
  create: NotificationCreateWithoutWarehouseInput;
};

export type InteractionUpdateWithWhereUniqueWithoutWarehouseInput = {
  where: InteractionWhereUniqueInput;
  data: InteractionUpdateWithoutWarehouseDataInput;
};

export type InteractionUpsertWithWhereUniqueWithoutWarehouseInput = {
  where: InteractionWhereUniqueInput;
  update: InteractionUpdateWithoutWarehouseDataInput;
  create: InteractionCreateWithoutWarehouseInput;
};

export type WarehouseCreateWithoutNotificationInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  phoneNumberId?: Maybe<Scalars['String']>;
  tags?: Maybe<WarehouseCreatetagsInput>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutWarehouseInput>;
  inventories?: Maybe<InventoryCreateManyWithoutWarehouseInput>;
  movements?: Maybe<MovementCreateManyWithoutWarehouseInput>;
  address?: Maybe<AddressCreateOneWithoutWarehouseInput>;
  Interaction?: Maybe<InteractionCreateManyWithoutWarehouseInput>;
};

export type ProductCreateWithoutNotificationsInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  productId: Scalars['Int'];
  ASIN?: Maybe<Scalars['String']>;
  EAN?: Maybe<Scalars['String']>;
  ISBN?: Maybe<Scalars['String']>;
  UPC?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  material?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  isListed?: Maybe<Scalars['Boolean']>;
  notes?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Float']>;
  tags?: Maybe<ProductCreatetagsInput>;
  dimensions?: Maybe<DimensionCreateOneWithoutProductInput>;
  manufacturer?: Maybe<ManufacturerCreateOneWithoutProductsInput>;
  batches?: Maybe<BatchCreateManyWithoutProductInput>;
  images?: Maybe<FileCreateManyWithoutProductsInput>;
  interactions?: Maybe<InteractionCreateManyWithoutProductInput>;
  inventories?: Maybe<InventoryCreateManyWithoutProductInput>;
  movements?: Maybe<MovementCreateManyWithoutProductInput>;
  units?: Maybe<UnitCreateManyWithoutProductInput>;
  taxRates?: Maybe<TaxRateCreateManyWithoutProductInput>;
  variants?: Maybe<ProductCreateManyWithoutVariantProductInput>;
  variantProduct?: Maybe<ProductCreateManyWithoutVariantsInput>;
  categories?: Maybe<CategoryCreateManyWithoutProductsInput>;
  consumables?: Maybe<ConsumableCreateManyWithoutConsumerInput>;
  consumers?: Maybe<ConsumableCreateManyWithoutProductInput>;
};

export type WarehouseUpdateWithoutNotificationDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phoneNumberId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<WarehouseUpdatetagsInput>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutWarehouseInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutWarehouseInput>;
  movements?: Maybe<MovementUpdateManyWithoutWarehouseInput>;
  address?: Maybe<AddressUpdateOneWithoutWarehouseInput>;
  Interaction?: Maybe<InteractionUpdateManyWithoutWarehouseInput>;
};

export type WarehouseUpsertWithoutNotificationInput = {
  update: WarehouseUpdateWithoutNotificationDataInput;
  create: WarehouseCreateWithoutNotificationInput;
};

export type ProductUpdateWithoutNotificationsDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  productId?: Maybe<IntFieldUpdateOperationsInput>;
  ASIN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  EAN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  ISBN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  UPC?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  material?: Maybe<NullableStringFieldUpdateOperationsInput>;
  color?: Maybe<NullableStringFieldUpdateOperationsInput>;
  weight?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isListed?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  quantity?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  tags?: Maybe<ProductUpdatetagsInput>;
  dimensions?: Maybe<DimensionUpdateOneWithoutProductInput>;
  manufacturer?: Maybe<ManufacturerUpdateOneWithoutProductsInput>;
  batches?: Maybe<BatchUpdateManyWithoutProductInput>;
  images?: Maybe<FileUpdateManyWithoutProductsInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutProductInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutProductInput>;
  movements?: Maybe<MovementUpdateManyWithoutProductInput>;
  units?: Maybe<UnitUpdateManyWithoutProductInput>;
  taxRates?: Maybe<TaxRateUpdateManyWithoutProductInput>;
  variants?: Maybe<ProductUpdateManyWithoutVariantProductInput>;
  variantProduct?: Maybe<ProductUpdateManyWithoutVariantsInput>;
  categories?: Maybe<CategoryUpdateManyWithoutProductsInput>;
  consumables?: Maybe<ConsumableUpdateManyWithoutConsumerInput>;
  consumers?: Maybe<ConsumableUpdateManyWithoutProductInput>;
};

export type ProductUpsertWithoutNotificationsInput = {
  update: ProductUpdateWithoutNotificationsDataInput;
  create: ProductCreateWithoutNotificationsInput;
};

export type NestedEnumPaymentTypeFilter = {
  equals?: Maybe<PaymentType>;
  in?: Maybe<Array<PaymentType>>;
  notIn?: Maybe<Array<PaymentType>>;
  not?: Maybe<NestedEnumPaymentTypeFilter>;
};

export type NestedEnumPaymentStatusFilter = {
  equals?: Maybe<PaymentStatus>;
  in?: Maybe<Array<PaymentStatus>>;
  notIn?: Maybe<Array<PaymentStatus>>;
  not?: Maybe<NestedEnumPaymentStatusFilter>;
};

export type NestedDateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
};

export type GroupCreateWithoutTaxRateInput = {
  tenantId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  payments?: Maybe<PaymentCreateManyWithoutGroupInput>;
};

export type ProductCreateWithoutTaxRatesInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  productId: Scalars['Int'];
  ASIN?: Maybe<Scalars['String']>;
  EAN?: Maybe<Scalars['String']>;
  ISBN?: Maybe<Scalars['String']>;
  UPC?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  material?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  isListed?: Maybe<Scalars['Boolean']>;
  notes?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Float']>;
  tags?: Maybe<ProductCreatetagsInput>;
  dimensions?: Maybe<DimensionCreateOneWithoutProductInput>;
  manufacturer?: Maybe<ManufacturerCreateOneWithoutProductsInput>;
  batches?: Maybe<BatchCreateManyWithoutProductInput>;
  images?: Maybe<FileCreateManyWithoutProductsInput>;
  interactions?: Maybe<InteractionCreateManyWithoutProductInput>;
  inventories?: Maybe<InventoryCreateManyWithoutProductInput>;
  movements?: Maybe<MovementCreateManyWithoutProductInput>;
  notifications?: Maybe<NotificationCreateManyWithoutProductInput>;
  units?: Maybe<UnitCreateManyWithoutProductInput>;
  variants?: Maybe<ProductCreateManyWithoutVariantProductInput>;
  variantProduct?: Maybe<ProductCreateManyWithoutVariantsInput>;
  categories?: Maybe<CategoryCreateManyWithoutProductsInput>;
  consumables?: Maybe<ConsumableCreateManyWithoutConsumerInput>;
  consumers?: Maybe<ConsumableCreateManyWithoutProductInput>;
};

export type PaymentCreateWithoutTaxRateInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
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
  tags?: Maybe<PaymentCreatetagsInput>;
  group?: Maybe<GroupCreateOneWithoutPaymentsInput>;
  movement?: Maybe<MovementCreateOneWithoutPaymentsInput>;
  transportAgency?: Maybe<TransportAgencyCreateOneWithoutPaymentsInput>;
  client?: Maybe<ClientCreateOneWithoutPaymentsInput>;
  supplier?: Maybe<SupplierCreateOneWithoutPaymentsInput>;
  documents?: Maybe<FileCreateManyWithoutPaymentsInput>;
  bankAccount?: Maybe<BankAccountCreateOneWithoutPaymentsInput>;
  Interaction?: Maybe<InteractionCreateManyWithoutPaymentInput>;
};

export type GroupUpdateWithoutTaxRateDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  code?: Maybe<NullableIntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  payments?: Maybe<PaymentUpdateManyWithoutGroupInput>;
};

export type GroupUpsertWithoutTaxRateInput = {
  update: GroupUpdateWithoutTaxRateDataInput;
  create: GroupCreateWithoutTaxRateInput;
};

export type ProductUpdateWithoutTaxRatesDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  productId?: Maybe<IntFieldUpdateOperationsInput>;
  ASIN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  EAN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  ISBN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  UPC?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  material?: Maybe<NullableStringFieldUpdateOperationsInput>;
  color?: Maybe<NullableStringFieldUpdateOperationsInput>;
  weight?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isListed?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  quantity?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  tags?: Maybe<ProductUpdatetagsInput>;
  dimensions?: Maybe<DimensionUpdateOneWithoutProductInput>;
  manufacturer?: Maybe<ManufacturerUpdateOneWithoutProductsInput>;
  batches?: Maybe<BatchUpdateManyWithoutProductInput>;
  images?: Maybe<FileUpdateManyWithoutProductsInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutProductInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutProductInput>;
  movements?: Maybe<MovementUpdateManyWithoutProductInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutProductInput>;
  units?: Maybe<UnitUpdateManyWithoutProductInput>;
  variants?: Maybe<ProductUpdateManyWithoutVariantProductInput>;
  variantProduct?: Maybe<ProductUpdateManyWithoutVariantsInput>;
  categories?: Maybe<CategoryUpdateManyWithoutProductsInput>;
  consumables?: Maybe<ConsumableUpdateManyWithoutConsumerInput>;
  consumers?: Maybe<ConsumableUpdateManyWithoutProductInput>;
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
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
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
  tags?: Maybe<PaymentCreatetagsInput>;
  taxRate?: Maybe<TaxRateCreateOneWithoutPaymentsInput>;
  movement?: Maybe<MovementCreateOneWithoutPaymentsInput>;
  transportAgency?: Maybe<TransportAgencyCreateOneWithoutPaymentsInput>;
  client?: Maybe<ClientCreateOneWithoutPaymentsInput>;
  supplier?: Maybe<SupplierCreateOneWithoutPaymentsInput>;
  documents?: Maybe<FileCreateManyWithoutPaymentsInput>;
  bankAccount?: Maybe<BankAccountCreateOneWithoutPaymentsInput>;
  Interaction?: Maybe<InteractionCreateManyWithoutPaymentInput>;
};

export type TaxRateCreateWithoutGroupInput = {
  tenantId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  amount: Scalars['Float'];
  isSameCountry: Scalars['Boolean'];
  isEU?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  tags?: Maybe<TaxRateCreatetagsInput>;
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
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  isSameCountry?: Maybe<BoolFieldUpdateOperationsInput>;
  isEU?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<TaxRateUpdatetagsInput>;
  product?: Maybe<ProductUpdateOneWithoutTaxRatesInput>;
  payments?: Maybe<PaymentUpdateManyWithoutTaxRateInput>;
};

export type TaxRateUpsertWithoutGroupInput = {
  update: TaxRateUpdateWithoutGroupDataInput;
  create: TaxRateCreateWithoutGroupInput;
};

export type UnitWhereInput = {
  AND?: Maybe<Array<UnitWhereInput>>;
  OR?: Maybe<Array<UnitWhereInput>>;
  NOT?: Maybe<Array<UnitWhereInput>>;
  tenantId?: Maybe<StringNullableFilter>;
  baseAmount?: Maybe<FloatFilter>;
  description?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  productId?: Maybe<StringNullableFilter>;
  product?: Maybe<ProductWhereInput>;
};

export type CategoryWhereInput = {
  AND?: Maybe<Array<CategoryWhereInput>>;
  OR?: Maybe<Array<CategoryWhereInput>>;
  NOT?: Maybe<Array<CategoryWhereInput>>;
  tenantId?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  description?: Maybe<StringNullableFilter>;
  image?: Maybe<FileWhereInput>;
  imageId?: Maybe<StringNullableFilter>;
  bannerImage?: Maybe<FileWhereInput>;
  bannerImageId?: Maybe<StringNullableFilter>;
  products?: Maybe<ProductListRelationFilter>;
  subCategories?: Maybe<CategoryListRelationFilter>;
  Category?: Maybe<CategoryWhereInput>;
  categoryId?: Maybe<StringNullableFilter>;
};

export type ProductCreateWithoutUnitsInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  productId: Scalars['Int'];
  ASIN?: Maybe<Scalars['String']>;
  EAN?: Maybe<Scalars['String']>;
  ISBN?: Maybe<Scalars['String']>;
  UPC?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  material?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  isListed?: Maybe<Scalars['Boolean']>;
  notes?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Float']>;
  tags?: Maybe<ProductCreatetagsInput>;
  dimensions?: Maybe<DimensionCreateOneWithoutProductInput>;
  manufacturer?: Maybe<ManufacturerCreateOneWithoutProductsInput>;
  batches?: Maybe<BatchCreateManyWithoutProductInput>;
  images?: Maybe<FileCreateManyWithoutProductsInput>;
  interactions?: Maybe<InteractionCreateManyWithoutProductInput>;
  inventories?: Maybe<InventoryCreateManyWithoutProductInput>;
  movements?: Maybe<MovementCreateManyWithoutProductInput>;
  notifications?: Maybe<NotificationCreateManyWithoutProductInput>;
  taxRates?: Maybe<TaxRateCreateManyWithoutProductInput>;
  variants?: Maybe<ProductCreateManyWithoutVariantProductInput>;
  variantProduct?: Maybe<ProductCreateManyWithoutVariantsInput>;
  categories?: Maybe<CategoryCreateManyWithoutProductsInput>;
  consumables?: Maybe<ConsumableCreateManyWithoutConsumerInput>;
  consumers?: Maybe<ConsumableCreateManyWithoutProductInput>;
};

export type DimensionCreateWithoutProductInput = {
  tenantId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  height: Scalars['Float'];
  width?: Maybe<Scalars['Float']>;
  depth?: Maybe<Scalars['Float']>;
};

export type DimensionWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type ManufacturerCreateWithoutProductsInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  website?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  tags?: Maybe<ManufacturerCreatetagsInput>;
  batches?: Maybe<BatchCreateManyWithoutManufacturerInput>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutManufacturerInput>;
  images?: Maybe<FileCreateManyWithoutManufacturersInput>;
  address?: Maybe<AddressCreateOneWithoutManufacturerInput>;
};

export type ManufacturerWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  name_tenantId?: Maybe<NameTenantIdCompoundUniqueInput>;
  email_tenantId?: Maybe<EmailTenantIdCompoundUniqueInput>;
};

export type BatchCreateWithoutProductInput = {
  tenantId?: Maybe<Scalars['String']>;
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

export type FileCreateWithoutProductsInput = {
  tenantId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  manufacturerId?: Maybe<Scalars['String']>;
  messageId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  supplierId?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['String']>;
  smallUrl?: Maybe<Scalars['String']>;
  transportAgencyId?: Maybe<Scalars['String']>;
  transporterId?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  movementId?: Maybe<Scalars['String']>;
  paymentId?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  tags?: Maybe<FileCreatetagsInput>;
  manufacturers?: Maybe<ManufacturerCreateManyWithoutImagesInput>;
  messages?: Maybe<MessageCreateManyWithoutImagesInput>;
  clients?: Maybe<ClientCreateManyWithoutImagesInput>;
  suppliers?: Maybe<SupplierCreateManyWithoutImagesInput>;
  transportAgencies?: Maybe<TransportAgencyCreateManyWithoutImagesInput>;
  transporters?: Maybe<TransporterCreateManyWithoutImagesInput>;
  settings?: Maybe<SettingCreateManyWithoutLogoInput>;
  Invoice?: Maybe<InvoiceCreateManyWithoutPdfInput>;
  imageCategory?: Maybe<CategoryCreateManyWithoutImageInput>;
  bannerCategory?: Maybe<CategoryCreateManyWithoutBannerImageInput>;
  movements?: Maybe<MovementCreateManyWithoutDocumentsInput>;
  payments?: Maybe<PaymentCreateManyWithoutDocumentsInput>;
};

export type InteractionCreateWithoutProductInput = {
  tenantId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  action: Scalars['String'];
  userId: Scalars['String'];
  data: Scalars['String'];
  client?: Maybe<ClientCreateOneWithoutInteractionsInput>;
  supplier?: Maybe<SupplierCreateOneWithoutInteractionsInput>;
  movement?: Maybe<MovementCreateOneWithoutInteractionsInput>;
  transportAgency?: Maybe<TransportAgencyCreateOneWithoutInteractionInput>;
  warehouse?: Maybe<WarehouseCreateOneWithoutInteractionInput>;
  payment?: Maybe<PaymentCreateOneWithoutInteractionInput>;
};

export type InventoryCreateWithoutProductInput = {
  tenantId?: Maybe<Scalars['String']>;
  amount: Scalars['Float'];
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
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  amount: Scalars['Float'];
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
  tags?: Maybe<MovementCreatetagsInput>;
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
  documents?: Maybe<FileCreateManyWithoutMovementsInput>;
  payments?: Maybe<PaymentCreateManyWithoutMovementInput>;
  consumablesMovements?: Maybe<MovementCreateManyWithoutConsumedFromInput>;
  consumedFrom?: Maybe<MovementCreateOneWithoutConsumablesMovementsInput>;
};

export type NotificationCreateWithoutProductInput = {
  tenantId?: Maybe<Scalars['String']>;
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  type: NotificationType;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: Scalars['String'];
  userLanguage?: Maybe<Language>;
  userEmail: Scalars['String'];
  warehouse?: Maybe<WarehouseCreateOneWithoutNotificationInput>;
};

export type UnitCreateWithoutProductInput = {
  tenantId?: Maybe<Scalars['String']>;
  baseAmount: Scalars['Float'];
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type TaxRateCreateWithoutProductInput = {
  tenantId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  amount: Scalars['Float'];
  isSameCountry: Scalars['Boolean'];
  isEU?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  tags?: Maybe<TaxRateCreatetagsInput>;
  group?: Maybe<GroupCreateOneWithoutTaxRateInput>;
  payments?: Maybe<PaymentCreateManyWithoutTaxRateInput>;
};

export type ProductCreateWithoutVariantProductInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  productId: Scalars['Int'];
  ASIN?: Maybe<Scalars['String']>;
  EAN?: Maybe<Scalars['String']>;
  ISBN?: Maybe<Scalars['String']>;
  UPC?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  material?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  isListed?: Maybe<Scalars['Boolean']>;
  notes?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Float']>;
  tags?: Maybe<ProductCreatetagsInput>;
  dimensions?: Maybe<DimensionCreateOneWithoutProductInput>;
  manufacturer?: Maybe<ManufacturerCreateOneWithoutProductsInput>;
  batches?: Maybe<BatchCreateManyWithoutProductInput>;
  images?: Maybe<FileCreateManyWithoutProductsInput>;
  interactions?: Maybe<InteractionCreateManyWithoutProductInput>;
  inventories?: Maybe<InventoryCreateManyWithoutProductInput>;
  movements?: Maybe<MovementCreateManyWithoutProductInput>;
  notifications?: Maybe<NotificationCreateManyWithoutProductInput>;
  units?: Maybe<UnitCreateManyWithoutProductInput>;
  taxRates?: Maybe<TaxRateCreateManyWithoutProductInput>;
  variants?: Maybe<ProductCreateManyWithoutVariantProductInput>;
  categories?: Maybe<CategoryCreateManyWithoutProductsInput>;
  consumables?: Maybe<ConsumableCreateManyWithoutConsumerInput>;
  consumers?: Maybe<ConsumableCreateManyWithoutProductInput>;
};

export type ProductCreateWithoutVariantsInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  productId: Scalars['Int'];
  ASIN?: Maybe<Scalars['String']>;
  EAN?: Maybe<Scalars['String']>;
  ISBN?: Maybe<Scalars['String']>;
  UPC?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  material?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  isListed?: Maybe<Scalars['Boolean']>;
  notes?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Float']>;
  tags?: Maybe<ProductCreatetagsInput>;
  dimensions?: Maybe<DimensionCreateOneWithoutProductInput>;
  manufacturer?: Maybe<ManufacturerCreateOneWithoutProductsInput>;
  batches?: Maybe<BatchCreateManyWithoutProductInput>;
  images?: Maybe<FileCreateManyWithoutProductsInput>;
  interactions?: Maybe<InteractionCreateManyWithoutProductInput>;
  inventories?: Maybe<InventoryCreateManyWithoutProductInput>;
  movements?: Maybe<MovementCreateManyWithoutProductInput>;
  notifications?: Maybe<NotificationCreateManyWithoutProductInput>;
  units?: Maybe<UnitCreateManyWithoutProductInput>;
  taxRates?: Maybe<TaxRateCreateManyWithoutProductInput>;
  variantProduct?: Maybe<ProductCreateManyWithoutVariantsInput>;
  categories?: Maybe<CategoryCreateManyWithoutProductsInput>;
  consumables?: Maybe<ConsumableCreateManyWithoutConsumerInput>;
  consumers?: Maybe<ConsumableCreateManyWithoutProductInput>;
};

export type CategoryCreateWithoutProductsInput = {
  tenantId?: Maybe<Scalars['String']>;
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

export type ConsumableCreateWithoutConsumerInput = {
  tenantId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  amount: Scalars['Float'];
  atIncoming: Scalars['Boolean'];
  product: ProductCreateOneWithoutConsumersInput;
};

export type ConsumableCreateWithoutProductInput = {
  tenantId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  amount: Scalars['Float'];
  atIncoming: Scalars['Boolean'];
  consumer: ProductCreateOneWithoutConsumablesInput;
};

export type DimensionUpdateWithoutProductDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  height?: Maybe<FloatFieldUpdateOperationsInput>;
  width?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  depth?: Maybe<NullableFloatFieldUpdateOperationsInput>;
};

export type DimensionUpsertWithoutProductInput = {
  update: DimensionUpdateWithoutProductDataInput;
  create: DimensionCreateWithoutProductInput;
};

export type ManufacturerUpdateWithoutProductsDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  fiscalNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<ManufacturerUpdatetagsInput>;
  batches?: Maybe<BatchUpdateManyWithoutManufacturerInput>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutManufacturerInput>;
  images?: Maybe<FileUpdateManyWithoutManufacturersInput>;
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
  AND?: Maybe<Array<BatchScalarWhereInput>>;
  OR?: Maybe<Array<BatchScalarWhereInput>>;
  NOT?: Maybe<Array<BatchScalarWhereInput>>;
  tenantId?: Maybe<StringNullableFilter>;
  batchNumber?: Maybe<StringNullableFilter>;
  bestBefore?: Maybe<DateTimeNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  date?: Maybe<DateTimeNullableFilter>;
  id?: Maybe<StringFilter>;
  manufacturerId?: Maybe<StringNullableFilter>;
  productId?: Maybe<StringFilter>;
  source?: Maybe<StringNullableFilter>;
};

export type BatchUpsertWithWhereUniqueWithoutProductInput = {
  where: BatchWhereUniqueInput;
  update: BatchUpdateWithoutProductDataInput;
  create: BatchCreateWithoutProductInput;
};

export type FileUpdateWithWhereUniqueWithoutProductsInput = {
  where: FileWhereUniqueInput;
  data: FileUpdateWithoutProductsDataInput;
};

export type FileUpsertWithWhereUniqueWithoutProductsInput = {
  where: FileWhereUniqueInput;
  update: FileUpdateWithoutProductsDataInput;
  create: FileCreateWithoutProductsInput;
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
  AND?: Maybe<Array<UnitScalarWhereInput>>;
  OR?: Maybe<Array<UnitScalarWhereInput>>;
  NOT?: Maybe<Array<UnitScalarWhereInput>>;
  tenantId?: Maybe<StringNullableFilter>;
  baseAmount?: Maybe<FloatFilter>;
  description?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  productId?: Maybe<StringNullableFilter>;
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
  AND?: Maybe<Array<TaxRateScalarWhereInput>>;
  OR?: Maybe<Array<TaxRateScalarWhereInput>>;
  NOT?: Maybe<Array<TaxRateScalarWhereInput>>;
  tenantId?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  amount?: Maybe<FloatFilter>;
  isSameCountry?: Maybe<BoolFilter>;
  isEU?: Maybe<BoolNullableFilter>;
  name?: Maybe<StringNullableFilter>;
  productId?: Maybe<StringNullableFilter>;
  notes?: Maybe<StringNullableFilter>;
  tags?: Maybe<StringNullableListFilter>;
};

export type TaxRateUpsertWithWhereUniqueWithoutProductInput = {
  where: TaxRateWhereUniqueInput;
  update: TaxRateUpdateWithoutProductDataInput;
  create: TaxRateCreateWithoutProductInput;
};

export type ProductUpdateWithWhereUniqueWithoutVariantProductInput = {
  where: ProductWhereUniqueInput;
  data: ProductUpdateWithoutVariantProductDataInput;
};

export type ProductUpdateManyWithWhereNestedInput = {
  where: ProductScalarWhereInput;
  data: ProductUpdateManyDataInput;
};

export type ProductScalarWhereInput = {
  AND?: Maybe<Array<ProductScalarWhereInput>>;
  OR?: Maybe<Array<ProductScalarWhereInput>>;
  NOT?: Maybe<Array<ProductScalarWhereInput>>;
  tenantId?: Maybe<StringNullableFilter>;
  deleted?: Maybe<BoolFilter>;
  id?: Maybe<StringFilter>;
  productId?: Maybe<IntFilter>;
  ASIN?: Maybe<StringNullableFilter>;
  EAN?: Maybe<StringNullableFilter>;
  ISBN?: Maybe<StringNullableFilter>;
  UPC?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  description?: Maybe<StringNullableFilter>;
  manufacturerId?: Maybe<StringNullableFilter>;
  name?: Maybe<StringFilter>;
  slug?: Maybe<StringFilter>;
  dimensionId?: Maybe<StringNullableFilter>;
  material?: Maybe<StringNullableFilter>;
  color?: Maybe<StringNullableFilter>;
  weight?: Maybe<FloatNullableFilter>;
  source?: Maybe<StringNullableFilter>;
  isListed?: Maybe<BoolNullableFilter>;
  notes?: Maybe<StringNullableFilter>;
  tags?: Maybe<StringNullableListFilter>;
  quantity?: Maybe<FloatNullableFilter>;
};

export type ProductUpsertWithWhereUniqueWithoutVariantProductInput = {
  where: ProductWhereUniqueInput;
  update: ProductUpdateWithoutVariantProductDataInput;
  create: ProductCreateWithoutVariantProductInput;
};

export type ProductUpdateWithWhereUniqueWithoutVariantsInput = {
  where: ProductWhereUniqueInput;
  data: ProductUpdateWithoutVariantsDataInput;
};

export type ProductUpsertWithWhereUniqueWithoutVariantsInput = {
  where: ProductWhereUniqueInput;
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
  AND?: Maybe<Array<CategoryScalarWhereInput>>;
  OR?: Maybe<Array<CategoryScalarWhereInput>>;
  NOT?: Maybe<Array<CategoryScalarWhereInput>>;
  tenantId?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  description?: Maybe<StringNullableFilter>;
  imageId?: Maybe<StringNullableFilter>;
  bannerImageId?: Maybe<StringNullableFilter>;
  categoryId?: Maybe<StringNullableFilter>;
};

export type CategoryUpsertWithWhereUniqueWithoutProductsInput = {
  where: CategoryWhereUniqueInput;
  update: CategoryUpdateWithoutProductsDataInput;
  create: CategoryCreateWithoutProductsInput;
};

export type ConsumableUpdateWithWhereUniqueWithoutConsumerInput = {
  where: ConsumableWhereUniqueInput;
  data: ConsumableUpdateWithoutConsumerDataInput;
};

export type ConsumableUpdateManyWithWhereNestedInput = {
  where: ConsumableScalarWhereInput;
  data: ConsumableUpdateManyDataInput;
};

export type ConsumableScalarWhereInput = {
  AND?: Maybe<Array<ConsumableScalarWhereInput>>;
  OR?: Maybe<Array<ConsumableScalarWhereInput>>;
  NOT?: Maybe<Array<ConsumableScalarWhereInput>>;
  tenantId?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  amount?: Maybe<FloatFilter>;
  atIncoming?: Maybe<BoolFilter>;
  productId?: Maybe<StringFilter>;
  consumerId?: Maybe<StringFilter>;
};

export type ConsumableUpsertWithWhereUniqueWithoutConsumerInput = {
  where: ConsumableWhereUniqueInput;
  update: ConsumableUpdateWithoutConsumerDataInput;
  create: ConsumableCreateWithoutConsumerInput;
};

export type ConsumableUpdateWithWhereUniqueWithoutProductInput = {
  where: ConsumableWhereUniqueInput;
  data: ConsumableUpdateWithoutProductDataInput;
};

export type ConsumableUpsertWithWhereUniqueWithoutProductInput = {
  where: ConsumableWhereUniqueInput;
  update: ConsumableUpdateWithoutProductDataInput;
  create: ConsumableCreateWithoutProductInput;
};

export type NestedEnumTableViewNullableFilter = {
  equals?: Maybe<TableView>;
  in?: Maybe<Array<TableView>>;
  notIn?: Maybe<Array<TableView>>;
  not?: Maybe<NestedEnumTableViewNullableFilter>;
};

export type NestedEnumEntityTypeFilter = {
  equals?: Maybe<EntityType>;
  in?: Maybe<Array<EntityType>>;
  notIn?: Maybe<Array<EntityType>>;
  not?: Maybe<NestedEnumEntityTypeFilter>;
};

export type EnumManufacturerFieldsNullableListFilter = {
  equals?: Maybe<Array<ManufacturerFields>>;
};

export type EnumMovementFieldsNullableListFilter = {
  equals?: Maybe<Array<MovementFields>>;
};

export type EnumSupplierFieldsNullableListFilter = {
  equals?: Maybe<Array<SupplierFields>>;
};

export type EnumClientFieldsNullableListFilter = {
  equals?: Maybe<Array<ClientFields>>;
};

export type EnumProductFieldsNullableListFilter = {
  equals?: Maybe<Array<ProductFields>>;
};

export type EnumTransportAgencyFieldsNullableListFilter = {
  equals?: Maybe<Array<TransportAgencyFields>>;
};

export type EnumTransportFieldsNullableListFilter = {
  equals?: Maybe<Array<TransportFields>>;
};

export type EnumTransporterFieldsNullableListFilter = {
  equals?: Maybe<Array<TransporterFields>>;
};

export type EnumPaymentFieldsNullableListFilter = {
  equals?: Maybe<Array<PaymentFields>>;
};

export type EnumWarehouseFieldsNullableListFilter = {
  equals?: Maybe<Array<WarehouseFields>>;
};

export type EnumAccountPlanNullableFilter = {
  equals?: Maybe<AccountPlan>;
  in?: Maybe<Array<AccountPlan>>;
  notIn?: Maybe<Array<AccountPlan>>;
  not?: Maybe<NestedEnumAccountPlanNullableFilter>;
};

export type PresetListRelationFilter = {
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
  plan?: Maybe<AccountPlan>;
  transports?: Maybe<Scalars['Boolean']>;
  warehouses?: Maybe<Scalars['Boolean']>;
  consumables?: Maybe<Scalars['Boolean']>;
  shop?: Maybe<Scalars['Boolean']>;
  accounting?: Maybe<Scalars['Boolean']>;
  invoicing?: Maybe<Scalars['Boolean']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  weightUnit?: Maybe<Scalars['String']>;
  lengthUnit?: Maybe<Scalars['String']>;
  shopPurchasedEmail?: Maybe<Scalars['String']>;
  invoiceText?: Maybe<Scalars['String']>;
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
  subDomain?: Maybe<StringFieldUpdateOperationsInput>;
  chat?: Maybe<BoolFieldUpdateOperationsInput>;
  currency?: Maybe<NullableStringFieldUpdateOperationsInput>;
  currencySymbol?: Maybe<NullableStringFieldUpdateOperationsInput>;
  defaultLanguage?: Maybe<NullableEnumLanguageFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  stripeCustomerId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  timezone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  plan?: Maybe<NullableEnumAccountPlanFieldUpdateOperationsInput>;
  transports?: Maybe<BoolFieldUpdateOperationsInput>;
  warehouses?: Maybe<BoolFieldUpdateOperationsInput>;
  consumables?: Maybe<BoolFieldUpdateOperationsInput>;
  shop?: Maybe<BoolFieldUpdateOperationsInput>;
  accounting?: Maybe<BoolFieldUpdateOperationsInput>;
  invoicing?: Maybe<BoolFieldUpdateOperationsInput>;
  fiscalNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  weightUnit?: Maybe<NullableStringFieldUpdateOperationsInput>;
  lengthUnit?: Maybe<NullableStringFieldUpdateOperationsInput>;
  shopPurchasedEmail?: Maybe<NullableStringFieldUpdateOperationsInput>;
  invoiceText?: Maybe<NullableStringFieldUpdateOperationsInput>;
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
  tenantId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  manufacturerId?: Maybe<Scalars['String']>;
  messageId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  supplierId?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['String']>;
  smallUrl?: Maybe<Scalars['String']>;
  transportAgencyId?: Maybe<Scalars['String']>;
  transporterId?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  movementId?: Maybe<Scalars['String']>;
  paymentId?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  tags?: Maybe<FileCreatetagsInput>;
  manufacturers?: Maybe<ManufacturerCreateManyWithoutImagesInput>;
  messages?: Maybe<MessageCreateManyWithoutImagesInput>;
  clients?: Maybe<ClientCreateManyWithoutImagesInput>;
  suppliers?: Maybe<SupplierCreateManyWithoutImagesInput>;
  products?: Maybe<ProductCreateManyWithoutImagesInput>;
  transportAgencies?: Maybe<TransportAgencyCreateManyWithoutImagesInput>;
  transporters?: Maybe<TransporterCreateManyWithoutImagesInput>;
  Invoice?: Maybe<InvoiceCreateManyWithoutPdfInput>;
  imageCategory?: Maybe<CategoryCreateManyWithoutImageInput>;
  bannerCategory?: Maybe<CategoryCreateManyWithoutBannerImageInput>;
  movements?: Maybe<MovementCreateManyWithoutDocumentsInput>;
  payments?: Maybe<PaymentCreateManyWithoutDocumentsInput>;
};

export type FileUpdateWithoutSettingsDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  manufacturerId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  messageId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  supplierId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  clientId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  smallUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  transportAgencyId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  transporterId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
  movementId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  paymentId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  order?: Maybe<NullableIntFieldUpdateOperationsInput>;
  tags?: Maybe<FileUpdatetagsInput>;
  manufacturers?: Maybe<ManufacturerUpdateManyWithoutImagesInput>;
  messages?: Maybe<MessageUpdateManyWithoutImagesInput>;
  clients?: Maybe<ClientUpdateManyWithoutImagesInput>;
  suppliers?: Maybe<SupplierUpdateManyWithoutImagesInput>;
  products?: Maybe<ProductUpdateManyWithoutImagesInput>;
  transportAgencies?: Maybe<TransportAgencyUpdateManyWithoutImagesInput>;
  transporters?: Maybe<TransporterUpdateManyWithoutImagesInput>;
  Invoice?: Maybe<InvoiceUpdateManyWithoutPdfInput>;
  imageCategory?: Maybe<CategoryUpdateManyWithoutImageInput>;
  bannerCategory?: Maybe<CategoryUpdateManyWithoutBannerImageInput>;
  movements?: Maybe<MovementUpdateManyWithoutDocumentsInput>;
  payments?: Maybe<PaymentUpdateManyWithoutDocumentsInput>;
};

export type FileUpsertWithoutSettingsInput = {
  update: FileUpdateWithoutSettingsDataInput;
  create: FileCreateWithoutSettingsInput;
};

export type PresetCreateWithoutSettingInput = {
  tenantId?: Maybe<Scalars['String']>;
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
  AND?: Maybe<Array<PresetScalarWhereInput>>;
  OR?: Maybe<Array<PresetScalarWhereInput>>;
  NOT?: Maybe<Array<PresetScalarWhereInput>>;
  tenantId?: Maybe<StringNullableFilter>;
  active?: Maybe<BoolFilter>;
  columnOrder?: Maybe<StringNullableListFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  currency?: Maybe<StringNullableFilter>;
  filter?: Maybe<StringNullableFilter>;
  hiddenColumns?: Maybe<StringNullableListFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  rowsPerPage?: Maybe<IntNullableFilter>;
  settingId?: Maybe<StringNullableFilter>;
  sort?: Maybe<StringNullableFilter>;
  tableView?: Maybe<EnumTableViewNullableFilter>;
  type?: Maybe<EnumEntityTypeFilter>;
  user?: Maybe<StringNullableFilter>;
};

export type PresetUpsertWithWhereUniqueWithoutSettingInput = {
  where: PresetWhereUniqueInput;
  update: PresetUpdateWithoutSettingDataInput;
  create: PresetCreateWithoutSettingInput;
};

export type AddressCreateWithoutAddressInput = {
  tenantId?: Maybe<Scalars['String']>;
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
  transportAgencyAddress?: Maybe<TransportAgencyCreateOneWithoutAddressInput>;
  transportAgencyBillingAddress?: Maybe<TransportAgencyCreateOneWithoutBillingAddressInput>;
  Manufacturer?: Maybe<ManufacturerCreateManyWithoutAddressInput>;
  Warehouse?: Maybe<WarehouseCreateManyWithoutAddressInput>;
  TransportAgency?: Maybe<TransportAgencyCreateManyWithoutAddressInput>;
};

export type AddressUpdateWithoutAddressDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  addressLine1?: Maybe<NullableStringFieldUpdateOperationsInput>;
  addressLine2?: Maybe<NullableStringFieldUpdateOperationsInput>;
  city?: Maybe<NullableStringFieldUpdateOperationsInput>;
  country?: Maybe<NullableStringFieldUpdateOperationsInput>;
  state?: Maybe<NullableStringFieldUpdateOperationsInput>;
  zip?: Maybe<NullableStringFieldUpdateOperationsInput>;
  supplierAddress?: Maybe<SupplierUpdateOneWithoutAddressInput>;
  supplierBillingAddress?: Maybe<SupplierUpdateOneWithoutBillingAddressInput>;
  clientAddress?: Maybe<ClientUpdateOneWithoutAddressInput>;
  clientBillingAddress?: Maybe<ClientUpdateOneWithoutBillingAddressInput>;
  billingAddress?: Maybe<SettingUpdateOneWithoutBillingAddressInput>;
  transportAgencyAddress?: Maybe<TransportAgencyUpdateOneWithoutAddressInput>;
  transportAgencyBillingAddress?: Maybe<TransportAgencyUpdateOneWithoutBillingAddressInput>;
  Manufacturer?: Maybe<ManufacturerUpdateManyWithoutAddressInput>;
  Warehouse?: Maybe<WarehouseUpdateManyWithoutAddressInput>;
  TransportAgency?: Maybe<TransportAgencyUpdateManyWithoutAddressInput>;
};

export type AddressUpsertWithoutAddressInput = {
  update: AddressUpdateWithoutAddressDataInput;
  create: AddressCreateWithoutAddressInput;
};

export type AddressCreateWithoutBillingAddressInput = {
  tenantId?: Maybe<Scalars['String']>;
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
  transportAgencyAddress?: Maybe<TransportAgencyCreateOneWithoutAddressInput>;
  transportAgencyBillingAddress?: Maybe<TransportAgencyCreateOneWithoutBillingAddressInput>;
  Manufacturer?: Maybe<ManufacturerCreateManyWithoutAddressInput>;
  Warehouse?: Maybe<WarehouseCreateManyWithoutAddressInput>;
  TransportAgency?: Maybe<TransportAgencyCreateManyWithoutAddressInput>;
};

export type AddressUpdateWithoutBillingAddressDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  addressLine1?: Maybe<NullableStringFieldUpdateOperationsInput>;
  addressLine2?: Maybe<NullableStringFieldUpdateOperationsInput>;
  city?: Maybe<NullableStringFieldUpdateOperationsInput>;
  country?: Maybe<NullableStringFieldUpdateOperationsInput>;
  state?: Maybe<NullableStringFieldUpdateOperationsInput>;
  zip?: Maybe<NullableStringFieldUpdateOperationsInput>;
  supplierAddress?: Maybe<SupplierUpdateOneWithoutAddressInput>;
  supplierBillingAddress?: Maybe<SupplierUpdateOneWithoutBillingAddressInput>;
  clientAddress?: Maybe<ClientUpdateOneWithoutAddressInput>;
  clientBillingAddress?: Maybe<ClientUpdateOneWithoutBillingAddressInput>;
  address?: Maybe<SettingUpdateOneWithoutAddressInput>;
  transportAgencyAddress?: Maybe<TransportAgencyUpdateOneWithoutAddressInput>;
  transportAgencyBillingAddress?: Maybe<TransportAgencyUpdateOneWithoutBillingAddressInput>;
  Manufacturer?: Maybe<ManufacturerUpdateManyWithoutAddressInput>;
  Warehouse?: Maybe<WarehouseUpdateManyWithoutAddressInput>;
  TransportAgency?: Maybe<TransportAgencyUpdateManyWithoutAddressInput>;
};

export type AddressUpsertWithoutBillingAddressInput = {
  update: AddressUpdateWithoutBillingAddressDataInput;
  create: AddressCreateWithoutBillingAddressInput;
};

export type AddressCreateWithoutSupplierAddressInput = {
  tenantId?: Maybe<Scalars['String']>;
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
  transportAgencyAddress?: Maybe<TransportAgencyCreateOneWithoutAddressInput>;
  transportAgencyBillingAddress?: Maybe<TransportAgencyCreateOneWithoutBillingAddressInput>;
  Manufacturer?: Maybe<ManufacturerCreateManyWithoutAddressInput>;
  Warehouse?: Maybe<WarehouseCreateManyWithoutAddressInput>;
  TransportAgency?: Maybe<TransportAgencyCreateManyWithoutAddressInput>;
};

export type AddressCreateWithoutSupplierBillingAddressInput = {
  tenantId?: Maybe<Scalars['String']>;
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
  transportAgencyAddress?: Maybe<TransportAgencyCreateOneWithoutAddressInput>;
  transportAgencyBillingAddress?: Maybe<TransportAgencyCreateOneWithoutBillingAddressInput>;
  Manufacturer?: Maybe<ManufacturerCreateManyWithoutAddressInput>;
  Warehouse?: Maybe<WarehouseCreateManyWithoutAddressInput>;
  TransportAgency?: Maybe<TransportAgencyCreateManyWithoutAddressInput>;
};

export type ContactPersonCreateWithoutSupplierInput = {
  tenantId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  scheduleEnd?: Maybe<Scalars['DateTime']>;
  scheduleStart?: Maybe<Scalars['DateTime']>;
  notes?: Maybe<Scalars['String']>;
  tags?: Maybe<ContactPersonCreatetagsInput>;
  manufacturer?: Maybe<ManufacturerCreateOneWithoutContactPersonsInput>;
  client?: Maybe<ClientCreateOneWithoutContactPersonsInput>;
  transportAgency?: Maybe<TransportAgencyCreateOneWithoutContactPersonsInput>;
  warehouse?: Maybe<WarehouseCreateOneWithoutContactPersonsInput>;
};

export type FileCreateWithoutSuppliersInput = {
  tenantId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  manufacturerId?: Maybe<Scalars['String']>;
  messageId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  supplierId?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['String']>;
  smallUrl?: Maybe<Scalars['String']>;
  transportAgencyId?: Maybe<Scalars['String']>;
  transporterId?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  movementId?: Maybe<Scalars['String']>;
  paymentId?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  tags?: Maybe<FileCreatetagsInput>;
  manufacturers?: Maybe<ManufacturerCreateManyWithoutImagesInput>;
  messages?: Maybe<MessageCreateManyWithoutImagesInput>;
  clients?: Maybe<ClientCreateManyWithoutImagesInput>;
  products?: Maybe<ProductCreateManyWithoutImagesInput>;
  transportAgencies?: Maybe<TransportAgencyCreateManyWithoutImagesInput>;
  transporters?: Maybe<TransporterCreateManyWithoutImagesInput>;
  settings?: Maybe<SettingCreateManyWithoutLogoInput>;
  Invoice?: Maybe<InvoiceCreateManyWithoutPdfInput>;
  imageCategory?: Maybe<CategoryCreateManyWithoutImageInput>;
  bannerCategory?: Maybe<CategoryCreateManyWithoutBannerImageInput>;
  movements?: Maybe<MovementCreateManyWithoutDocumentsInput>;
  payments?: Maybe<PaymentCreateManyWithoutDocumentsInput>;
};

export type InteractionCreateWithoutSupplierInput = {
  tenantId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  action: Scalars['String'];
  userId: Scalars['String'];
  data: Scalars['String'];
  client?: Maybe<ClientCreateOneWithoutInteractionsInput>;
  movement?: Maybe<MovementCreateOneWithoutInteractionsInput>;
  product?: Maybe<ProductCreateOneWithoutInteractionsInput>;
  transportAgency?: Maybe<TransportAgencyCreateOneWithoutInteractionInput>;
  warehouse?: Maybe<WarehouseCreateOneWithoutInteractionInput>;
  payment?: Maybe<PaymentCreateOneWithoutInteractionInput>;
};

export type InventoryCreateWithoutSupplierInput = {
  tenantId?: Maybe<Scalars['String']>;
  amount: Scalars['Float'];
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
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  amount: Scalars['Float'];
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
  tags?: Maybe<MovementCreatetagsInput>;
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
  documents?: Maybe<FileCreateManyWithoutMovementsInput>;
  payments?: Maybe<PaymentCreateManyWithoutMovementInput>;
  consumablesMovements?: Maybe<MovementCreateManyWithoutConsumedFromInput>;
  consumedFrom?: Maybe<MovementCreateOneWithoutConsumablesMovementsInput>;
};

export type PaymentCreateWithoutSupplierInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
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
  tags?: Maybe<PaymentCreatetagsInput>;
  group?: Maybe<GroupCreateOneWithoutPaymentsInput>;
  taxRate?: Maybe<TaxRateCreateOneWithoutPaymentsInput>;
  movement?: Maybe<MovementCreateOneWithoutPaymentsInput>;
  transportAgency?: Maybe<TransportAgencyCreateOneWithoutPaymentsInput>;
  client?: Maybe<ClientCreateOneWithoutPaymentsInput>;
  documents?: Maybe<FileCreateManyWithoutPaymentsInput>;
  bankAccount?: Maybe<BankAccountCreateOneWithoutPaymentsInput>;
  Interaction?: Maybe<InteractionCreateManyWithoutPaymentInput>;
};

export type AddressUpdateWithoutSupplierAddressDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  addressLine1?: Maybe<NullableStringFieldUpdateOperationsInput>;
  addressLine2?: Maybe<NullableStringFieldUpdateOperationsInput>;
  city?: Maybe<NullableStringFieldUpdateOperationsInput>;
  country?: Maybe<NullableStringFieldUpdateOperationsInput>;
  state?: Maybe<NullableStringFieldUpdateOperationsInput>;
  zip?: Maybe<NullableStringFieldUpdateOperationsInput>;
  supplierBillingAddress?: Maybe<SupplierUpdateOneWithoutBillingAddressInput>;
  clientAddress?: Maybe<ClientUpdateOneWithoutAddressInput>;
  clientBillingAddress?: Maybe<ClientUpdateOneWithoutBillingAddressInput>;
  address?: Maybe<SettingUpdateOneWithoutAddressInput>;
  billingAddress?: Maybe<SettingUpdateOneWithoutBillingAddressInput>;
  transportAgencyAddress?: Maybe<TransportAgencyUpdateOneWithoutAddressInput>;
  transportAgencyBillingAddress?: Maybe<TransportAgencyUpdateOneWithoutBillingAddressInput>;
  Manufacturer?: Maybe<ManufacturerUpdateManyWithoutAddressInput>;
  Warehouse?: Maybe<WarehouseUpdateManyWithoutAddressInput>;
  TransportAgency?: Maybe<TransportAgencyUpdateManyWithoutAddressInput>;
};

export type AddressUpsertWithoutSupplierAddressInput = {
  update: AddressUpdateWithoutSupplierAddressDataInput;
  create: AddressCreateWithoutSupplierAddressInput;
};

export type AddressUpdateWithoutSupplierBillingAddressDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  addressLine1?: Maybe<NullableStringFieldUpdateOperationsInput>;
  addressLine2?: Maybe<NullableStringFieldUpdateOperationsInput>;
  city?: Maybe<NullableStringFieldUpdateOperationsInput>;
  country?: Maybe<NullableStringFieldUpdateOperationsInput>;
  state?: Maybe<NullableStringFieldUpdateOperationsInput>;
  zip?: Maybe<NullableStringFieldUpdateOperationsInput>;
  supplierAddress?: Maybe<SupplierUpdateOneWithoutAddressInput>;
  clientAddress?: Maybe<ClientUpdateOneWithoutAddressInput>;
  clientBillingAddress?: Maybe<ClientUpdateOneWithoutBillingAddressInput>;
  address?: Maybe<SettingUpdateOneWithoutAddressInput>;
  billingAddress?: Maybe<SettingUpdateOneWithoutBillingAddressInput>;
  transportAgencyAddress?: Maybe<TransportAgencyUpdateOneWithoutAddressInput>;
  transportAgencyBillingAddress?: Maybe<TransportAgencyUpdateOneWithoutBillingAddressInput>;
  Manufacturer?: Maybe<ManufacturerUpdateManyWithoutAddressInput>;
  Warehouse?: Maybe<WarehouseUpdateManyWithoutAddressInput>;
  TransportAgency?: Maybe<TransportAgencyUpdateManyWithoutAddressInput>;
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

export type FileUpdateWithWhereUniqueWithoutSuppliersInput = {
  where: FileWhereUniqueInput;
  data: FileUpdateWithoutSuppliersDataInput;
};

export type FileUpsertWithWhereUniqueWithoutSuppliersInput = {
  where: FileWhereUniqueInput;
  update: FileUpdateWithoutSuppliersDataInput;
  create: FileCreateWithoutSuppliersInput;
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

export type ClientListRelationFilter = {
  every?: Maybe<ClientWhereInput>;
  some?: Maybe<ClientWhereInput>;
  none?: Maybe<ClientWhereInput>;
};

export type SupplierListRelationFilter = {
  every?: Maybe<SupplierWhereInput>;
  some?: Maybe<SupplierWhereInput>;
  none?: Maybe<SupplierWhereInput>;
};

export type SettingListRelationFilter = {
  every?: Maybe<SettingWhereInput>;
  some?: Maybe<SettingWhereInput>;
  none?: Maybe<SettingWhereInput>;
};

export type MovementCreatetagsInput = {
  set: Array<Scalars['String']>;
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

export type FileCreateManyWithoutMovementsInput = {
  create?: Maybe<Array<FileCreateWithoutMovementsInput>>;
  connect?: Maybe<Array<FileWhereUniqueInput>>;
};

export type PaymentCreateManyWithoutMovementInput = {
  create?: Maybe<Array<PaymentCreateWithoutMovementInput>>;
  connect?: Maybe<Array<PaymentWhereUniqueInput>>;
};

export type MovementCreateManyWithoutConsumedFromInput = {
  create?: Maybe<Array<MovementCreateWithoutConsumedFromInput>>;
  connect?: Maybe<Array<MovementWhereUniqueInput>>;
};

export type MovementCreateOneWithoutConsumablesMovementsInput = {
  create?: Maybe<MovementCreateWithoutConsumablesMovementsInput>;
  connect?: Maybe<MovementWhereUniqueInput>;
};

export type NullableEnumMovementStatusFieldUpdateOperationsInput = {
  set?: Maybe<MovementStatus>;
};

export type EnumMovementTypeFieldUpdateOperationsInput = {
  set?: Maybe<MovementType>;
};

export type MovementUpdatetagsInput = {
  set: Array<Scalars['String']>;
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

export type FileUpdateManyWithoutMovementsInput = {
  create?: Maybe<Array<FileCreateWithoutMovementsInput>>;
  connect?: Maybe<Array<FileWhereUniqueInput>>;
  set?: Maybe<Array<FileWhereUniqueInput>>;
  disconnect?: Maybe<Array<FileWhereUniqueInput>>;
  delete?: Maybe<Array<FileWhereUniqueInput>>;
  update?: Maybe<Array<FileUpdateWithWhereUniqueWithoutMovementsInput>>;
  updateMany?: Maybe<Array<FileUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<FileScalarWhereInput>>;
  upsert?: Maybe<Array<FileUpsertWithWhereUniqueWithoutMovementsInput>>;
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

export type MovementUpdateManyWithoutConsumedFromInput = {
  create?: Maybe<Array<MovementCreateWithoutConsumedFromInput>>;
  connect?: Maybe<Array<MovementWhereUniqueInput>>;
  set?: Maybe<Array<MovementWhereUniqueInput>>;
  disconnect?: Maybe<Array<MovementWhereUniqueInput>>;
  delete?: Maybe<Array<MovementWhereUniqueInput>>;
  update?: Maybe<Array<MovementUpdateWithWhereUniqueWithoutConsumedFromInput>>;
  updateMany?: Maybe<Array<MovementUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<MovementScalarWhereInput>>;
  upsert?: Maybe<Array<MovementUpsertWithWhereUniqueWithoutConsumedFromInput>>;
};

export type MovementUpdateOneWithoutConsumablesMovementsInput = {
  create?: Maybe<MovementCreateWithoutConsumablesMovementsInput>;
  connect?: Maybe<MovementWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<MovementUpdateWithoutConsumablesMovementsDataInput>;
  upsert?: Maybe<MovementUpsertWithoutConsumablesMovementsInput>;
};

export type FileCreatetagsInput = {
  set: Array<Scalars['String']>;
};

export type ManufacturerCreateManyWithoutImagesInput = {
  create?: Maybe<Array<ManufacturerCreateWithoutImagesInput>>;
  connect?: Maybe<Array<ManufacturerWhereUniqueInput>>;
};

export type ClientCreateManyWithoutImagesInput = {
  create?: Maybe<Array<ClientCreateWithoutImagesInput>>;
  connect?: Maybe<Array<ClientWhereUniqueInput>>;
};

export type SupplierCreateManyWithoutImagesInput = {
  create?: Maybe<Array<SupplierCreateWithoutImagesInput>>;
  connect?: Maybe<Array<SupplierWhereUniqueInput>>;
};

export type ProductCreateManyWithoutImagesInput = {
  create?: Maybe<Array<ProductCreateWithoutImagesInput>>;
  connect?: Maybe<Array<ProductWhereUniqueInput>>;
};

export type TransportAgencyCreateManyWithoutImagesInput = {
  create?: Maybe<Array<TransportAgencyCreateWithoutImagesInput>>;
  connect?: Maybe<Array<TransportAgencyWhereUniqueInput>>;
};

export type TransporterCreateManyWithoutImagesInput = {
  create?: Maybe<Array<TransporterCreateWithoutImagesInput>>;
  connect?: Maybe<Array<TransporterWhereUniqueInput>>;
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

export type MovementCreateManyWithoutDocumentsInput = {
  create?: Maybe<Array<MovementCreateWithoutDocumentsInput>>;
  connect?: Maybe<Array<MovementWhereUniqueInput>>;
};

export type PaymentCreateManyWithoutDocumentsInput = {
  create?: Maybe<Array<PaymentCreateWithoutDocumentsInput>>;
  connect?: Maybe<Array<PaymentWhereUniqueInput>>;
};

export type FileUpdateWithoutMessagesDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  manufacturerId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  messageId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  supplierId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  clientId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  smallUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  transportAgencyId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  transporterId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
  movementId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  paymentId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  order?: Maybe<NullableIntFieldUpdateOperationsInput>;
  tags?: Maybe<FileUpdatetagsInput>;
  manufacturers?: Maybe<ManufacturerUpdateManyWithoutImagesInput>;
  clients?: Maybe<ClientUpdateManyWithoutImagesInput>;
  suppliers?: Maybe<SupplierUpdateManyWithoutImagesInput>;
  products?: Maybe<ProductUpdateManyWithoutImagesInput>;
  transportAgencies?: Maybe<TransportAgencyUpdateManyWithoutImagesInput>;
  transporters?: Maybe<TransporterUpdateManyWithoutImagesInput>;
  settings?: Maybe<SettingUpdateManyWithoutLogoInput>;
  Invoice?: Maybe<InvoiceUpdateManyWithoutPdfInput>;
  imageCategory?: Maybe<CategoryUpdateManyWithoutImageInput>;
  bannerCategory?: Maybe<CategoryUpdateManyWithoutBannerImageInput>;
  movements?: Maybe<MovementUpdateManyWithoutDocumentsInput>;
  payments?: Maybe<PaymentUpdateManyWithoutDocumentsInput>;
};

export type FileUpdateManyDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  manufacturerId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  messageId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  supplierId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  clientId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  smallUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  transportAgencyId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  transporterId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
  movementId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  paymentId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  order?: Maybe<NullableIntFieldUpdateOperationsInput>;
  tags?: Maybe<FileUpdatetagsInput>;
};

export type MessageCreatementionsInput = {
  set: Array<Scalars['String']>;
};

export type MovementCreateOneWithoutCommentsInput = {
  create?: Maybe<MovementCreateWithoutCommentsInput>;
  connect?: Maybe<MovementWhereUniqueInput>;
};

export type FileCreateManyWithoutMessagesInput = {
  create?: Maybe<Array<FileCreateWithoutMessagesInput>>;
  connect?: Maybe<Array<FileWhereUniqueInput>>;
};

export type MessageUpdateWithoutChannelDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  recipient?: Maybe<NullableStringFieldUpdateOperationsInput>;
  sender?: Maybe<StringFieldUpdateOperationsInput>;
  text?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  mentions?: Maybe<MessageUpdatementionsInput>;
  movement?: Maybe<MovementUpdateOneWithoutCommentsInput>;
  images?: Maybe<FileUpdateManyWithoutMessagesInput>;
};

export type MessageUpdateManyDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  recipient?: Maybe<NullableStringFieldUpdateOperationsInput>;
  sender?: Maybe<StringFieldUpdateOperationsInput>;
  text?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  mentions?: Maybe<MessageUpdatementionsInput>;
};

export type ContactPersonCreatetagsInput = {
  set: Array<Scalars['String']>;
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

export type MessageCreateManyWithoutImagesInput = {
  create?: Maybe<Array<MessageCreateWithoutImagesInput>>;
  connect?: Maybe<Array<MessageWhereUniqueInput>>;
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

export type TransportAgencyCreateOneWithoutInteractionInput = {
  create?: Maybe<TransportAgencyCreateWithoutInteractionInput>;
  connect?: Maybe<TransportAgencyWhereUniqueInput>;
};

export type WarehouseCreateOneWithoutInteractionInput = {
  create?: Maybe<WarehouseCreateWithoutInteractionInput>;
  connect?: Maybe<WarehouseWhereUniqueInput>;
};

export type PaymentCreateOneWithoutInteractionInput = {
  create?: Maybe<PaymentCreateWithoutInteractionInput>;
  connect?: Maybe<PaymentWhereUniqueInput>;
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

export type TransportAgencyCreateOneWithoutAddressInput = {
  create?: Maybe<TransportAgencyCreateWithoutAddressInput>;
  connect?: Maybe<TransportAgencyWhereUniqueInput>;
};

export type TransportAgencyCreateOneWithoutBillingAddressInput = {
  create?: Maybe<TransportAgencyCreateWithoutBillingAddressInput>;
  connect?: Maybe<TransportAgencyWhereUniqueInput>;
};

export type ManufacturerCreateManyWithoutAddressInput = {
  create?: Maybe<Array<ManufacturerCreateWithoutAddressInput>>;
  connect?: Maybe<Array<ManufacturerWhereUniqueInput>>;
};

export type WarehouseCreateManyWithoutAddressInput = {
  create?: Maybe<Array<WarehouseCreateWithoutAddressInput>>;
  connect?: Maybe<Array<WarehouseWhereUniqueInput>>;
};

export type TransportAgencyCreateManyWithoutAddressInput = {
  create?: Maybe<Array<TransportAgencyCreateWithoutAddressInput>>;
  connect?: Maybe<Array<TransportAgencyWhereUniqueInput>>;
};

export type ClientCreateOneWithoutAddressInput = {
  create?: Maybe<ClientCreateWithoutAddressInput>;
  connect?: Maybe<ClientWhereUniqueInput>;
};

export type InvoiceCreatetagsInput = {
  set: Array<Scalars['String']>;
};

export type FileCreateOneWithoutInvoiceInput = {
  create?: Maybe<FileCreateWithoutInvoiceInput>;
  connect?: Maybe<FileWhereUniqueInput>;
};

export type MovementCreateManyWithoutInvoiceInput = {
  create?: Maybe<Array<MovementCreateWithoutInvoiceInput>>;
  connect?: Maybe<Array<MovementWhereUniqueInput>>;
};

export type PaymentCreatetagsInput = {
  set: Array<Scalars['String']>;
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

export type FileCreateManyWithoutPaymentsInput = {
  create?: Maybe<Array<FileCreateWithoutPaymentsInput>>;
  connect?: Maybe<Array<FileWhereUniqueInput>>;
};

export type BankAccountCreateOneWithoutPaymentsInput = {
  create?: Maybe<BankAccountCreateWithoutPaymentsInput>;
  connect?: Maybe<BankAccountWhereUniqueInput>;
};

export type InteractionCreateManyWithoutPaymentInput = {
  create?: Maybe<Array<InteractionCreateWithoutPaymentInput>>;
  connect?: Maybe<Array<InteractionWhereUniqueInput>>;
};

export type ContactPersonUpdateWithoutClientDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  firstName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  scheduleEnd?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  scheduleStart?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<ContactPersonUpdatetagsInput>;
  manufacturer?: Maybe<ManufacturerUpdateOneWithoutContactPersonsInput>;
  supplier?: Maybe<SupplierUpdateOneWithoutContactPersonsInput>;
  transportAgency?: Maybe<TransportAgencyUpdateOneWithoutContactPersonsInput>;
  warehouse?: Maybe<WarehouseUpdateOneWithoutContactPersonsInput>;
};

export type ContactPersonUpdateManyDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  firstName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  scheduleEnd?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  scheduleStart?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<ContactPersonUpdatetagsInput>;
};

export type FileUpdateWithoutClientsDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  manufacturerId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  messageId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  supplierId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  clientId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  smallUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  transportAgencyId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  transporterId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
  movementId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  paymentId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  order?: Maybe<NullableIntFieldUpdateOperationsInput>;
  tags?: Maybe<FileUpdatetagsInput>;
  manufacturers?: Maybe<ManufacturerUpdateManyWithoutImagesInput>;
  messages?: Maybe<MessageUpdateManyWithoutImagesInput>;
  suppliers?: Maybe<SupplierUpdateManyWithoutImagesInput>;
  products?: Maybe<ProductUpdateManyWithoutImagesInput>;
  transportAgencies?: Maybe<TransportAgencyUpdateManyWithoutImagesInput>;
  transporters?: Maybe<TransporterUpdateManyWithoutImagesInput>;
  settings?: Maybe<SettingUpdateManyWithoutLogoInput>;
  Invoice?: Maybe<InvoiceUpdateManyWithoutPdfInput>;
  imageCategory?: Maybe<CategoryUpdateManyWithoutImageInput>;
  bannerCategory?: Maybe<CategoryUpdateManyWithoutBannerImageInput>;
  movements?: Maybe<MovementUpdateManyWithoutDocumentsInput>;
  payments?: Maybe<PaymentUpdateManyWithoutDocumentsInput>;
};

export type InteractionUpdateWithoutClientDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<StringFieldUpdateOperationsInput>;
  action?: Maybe<StringFieldUpdateOperationsInput>;
  userId?: Maybe<StringFieldUpdateOperationsInput>;
  data?: Maybe<StringFieldUpdateOperationsInput>;
  supplier?: Maybe<SupplierUpdateOneWithoutInteractionsInput>;
  movement?: Maybe<MovementUpdateOneWithoutInteractionsInput>;
  product?: Maybe<ProductUpdateOneWithoutInteractionsInput>;
  transportAgency?: Maybe<TransportAgencyUpdateOneWithoutInteractionInput>;
  warehouse?: Maybe<WarehouseUpdateOneWithoutInteractionInput>;
  payment?: Maybe<PaymentUpdateOneWithoutInteractionInput>;
};

export type InteractionUpdateManyDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<StringFieldUpdateOperationsInput>;
  action?: Maybe<StringFieldUpdateOperationsInput>;
  userId?: Maybe<StringFieldUpdateOperationsInput>;
  data?: Maybe<StringFieldUpdateOperationsInput>;
};

export type InventoryUpdateWithoutClientDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  storageNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isListed?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  listPrice?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  supplier?: Maybe<SupplierUpdateOneWithoutInventoriesInput>;
  batch?: Maybe<BatchUpdateOneWithoutInventoriesInput>;
  product?: Maybe<ProductUpdateOneRequiredWithoutInventoriesInput>;
  warehouse?: Maybe<WarehouseUpdateOneWithoutInventoriesInput>;
  movements?: Maybe<MovementUpdateManyWithoutInventoryInput>;
  reservations?: Maybe<ReservationUpdateManyWithoutInventoryInput>;
};

export type InventoryUpdateManyDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  storageNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isListed?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  listPrice?: Maybe<NullableFloatFieldUpdateOperationsInput>;
};

export type MovementUpdateWithoutClientDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  date?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  status?: Maybe<NullableEnumMovementStatusFieldUpdateOperationsInput>;
  movementId?: Maybe<IntFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  sendMail?: Maybe<BoolFieldUpdateOperationsInput>;
  storageNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  type?: Maybe<EnumMovementTypeFieldUpdateOperationsInput>;
  unitPrice?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  invoiceId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<MovementUpdatetagsInput>;
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
  documents?: Maybe<FileUpdateManyWithoutMovementsInput>;
  payments?: Maybe<PaymentUpdateManyWithoutMovementInput>;
  consumablesMovements?: Maybe<MovementUpdateManyWithoutConsumedFromInput>;
  consumedFrom?: Maybe<MovementUpdateOneWithoutConsumablesMovementsInput>;
};

export type MovementUpdateManyDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  date?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  status?: Maybe<NullableEnumMovementStatusFieldUpdateOperationsInput>;
  movementId?: Maybe<IntFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  sendMail?: Maybe<BoolFieldUpdateOperationsInput>;
  storageNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  type?: Maybe<EnumMovementTypeFieldUpdateOperationsInput>;
  unitPrice?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  invoiceId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<MovementUpdatetagsInput>;
};

export type ReservationUpdateWithoutClientDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  inventory?: Maybe<InventoryUpdateOneWithoutReservationsInput>;
  movement?: Maybe<MovementUpdateOneRequiredWithoutReservationInput>;
};

export type ReservationUpdateManyDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
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

export type TransportAgencyUpdateOneWithoutAddressInput = {
  create?: Maybe<TransportAgencyCreateWithoutAddressInput>;
  connect?: Maybe<TransportAgencyWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<TransportAgencyUpdateWithoutAddressDataInput>;
  upsert?: Maybe<TransportAgencyUpsertWithoutAddressInput>;
};

export type TransportAgencyUpdateOneWithoutBillingAddressInput = {
  create?: Maybe<TransportAgencyCreateWithoutBillingAddressInput>;
  connect?: Maybe<TransportAgencyWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<TransportAgencyUpdateWithoutBillingAddressDataInput>;
  upsert?: Maybe<TransportAgencyUpsertWithoutBillingAddressInput>;
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

export type ClientUpdateOneWithoutAddressInput = {
  create?: Maybe<ClientCreateWithoutAddressInput>;
  connect?: Maybe<ClientWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ClientUpdateWithoutAddressDataInput>;
  upsert?: Maybe<ClientUpsertWithoutAddressInput>;
};

export type InvoiceUpdateWithoutClientDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  withTaxes?: Maybe<BoolFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<InvoiceUpdatetagsInput>;
  pdf?: Maybe<FileUpdateOneRequiredWithoutInvoiceInput>;
  movements?: Maybe<MovementUpdateManyWithoutInvoiceInput>;
};

export type InvoiceUpdateManyDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  withTaxes?: Maybe<BoolFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<InvoiceUpdatetagsInput>;
};

export type PaymentUpdateWithoutClientDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  paymentId?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  type?: Maybe<EnumPaymentTypeFieldUpdateOperationsInput>;
  status?: Maybe<EnumPaymentStatusFieldUpdateOperationsInput>;
  dueDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  date?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  concept?: Maybe<NullableStringFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  currency?: Maybe<StringFieldUpdateOperationsInput>;
  recipient?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  paymentMethod?: Maybe<NullableStringFieldUpdateOperationsInput>;
  stripePaymentIntentId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  stripeClientSecret?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<PaymentUpdatetagsInput>;
  group?: Maybe<GroupUpdateOneWithoutPaymentsInput>;
  taxRate?: Maybe<TaxRateUpdateOneWithoutPaymentsInput>;
  movement?: Maybe<MovementUpdateOneWithoutPaymentsInput>;
  transportAgency?: Maybe<TransportAgencyUpdateOneWithoutPaymentsInput>;
  supplier?: Maybe<SupplierUpdateOneWithoutPaymentsInput>;
  documents?: Maybe<FileUpdateManyWithoutPaymentsInput>;
  bankAccount?: Maybe<BankAccountUpdateOneWithoutPaymentsInput>;
  Interaction?: Maybe<InteractionUpdateManyWithoutPaymentInput>;
};

export type PaymentUpdateManyDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  paymentId?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  type?: Maybe<EnumPaymentTypeFieldUpdateOperationsInput>;
  status?: Maybe<EnumPaymentStatusFieldUpdateOperationsInput>;
  dueDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  date?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  concept?: Maybe<NullableStringFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  currency?: Maybe<StringFieldUpdateOperationsInput>;
  recipient?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  paymentMethod?: Maybe<NullableStringFieldUpdateOperationsInput>;
  stripePaymentIntentId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  stripeClientSecret?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<PaymentUpdatetagsInput>;
};

export type EnumNotificationTypeFilter = {
  equals?: Maybe<NotificationType>;
  in?: Maybe<Array<NotificationType>>;
  notIn?: Maybe<Array<NotificationType>>;
  not?: Maybe<NestedEnumNotificationTypeFilter>;
};

export type EnumTransportTypeFilter = {
  equals?: Maybe<TransportType>;
  in?: Maybe<Array<TransportType>>;
  notIn?: Maybe<Array<TransportType>>;
  not?: Maybe<NestedEnumTransportTypeFilter>;
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

export type TransporterCreatetagsInput = {
  set: Array<Scalars['String']>;
};

export type FileCreateManyWithoutTransportersInput = {
  create?: Maybe<Array<FileCreateWithoutTransportersInput>>;
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

export type ClientCreateOneWithoutInteractionsInput = {
  create?: Maybe<ClientCreateWithoutInteractionsInput>;
  connect?: Maybe<ClientWhereUniqueInput>;
};

export type ContactPersonUpdateWithoutTransportAgencyDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  firstName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  scheduleEnd?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  scheduleStart?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<ContactPersonUpdatetagsInput>;
  manufacturer?: Maybe<ManufacturerUpdateOneWithoutContactPersonsInput>;
  supplier?: Maybe<SupplierUpdateOneWithoutContactPersonsInput>;
  client?: Maybe<ClientUpdateOneWithoutContactPersonsInput>;
  warehouse?: Maybe<WarehouseUpdateOneWithoutContactPersonsInput>;
};

export type FileUpdateWithoutTransportAgenciesDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  manufacturerId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  messageId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  supplierId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  clientId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  smallUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  transportAgencyId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  transporterId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
  movementId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  paymentId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  order?: Maybe<NullableIntFieldUpdateOperationsInput>;
  tags?: Maybe<FileUpdatetagsInput>;
  manufacturers?: Maybe<ManufacturerUpdateManyWithoutImagesInput>;
  messages?: Maybe<MessageUpdateManyWithoutImagesInput>;
  clients?: Maybe<ClientUpdateManyWithoutImagesInput>;
  suppliers?: Maybe<SupplierUpdateManyWithoutImagesInput>;
  products?: Maybe<ProductUpdateManyWithoutImagesInput>;
  transporters?: Maybe<TransporterUpdateManyWithoutImagesInput>;
  settings?: Maybe<SettingUpdateManyWithoutLogoInput>;
  Invoice?: Maybe<InvoiceUpdateManyWithoutPdfInput>;
  imageCategory?: Maybe<CategoryUpdateManyWithoutImageInput>;
  bannerCategory?: Maybe<CategoryUpdateManyWithoutBannerImageInput>;
  movements?: Maybe<MovementUpdateManyWithoutDocumentsInput>;
  payments?: Maybe<PaymentUpdateManyWithoutDocumentsInput>;
};

export type TransportUpdateWithoutTransportAgencyDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  arrivalDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  arrivalPoint?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  price?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  movement?: Maybe<MovementUpdateOneWithoutTransportsInput>;
  transporter?: Maybe<TransporterUpdateOneWithoutTransportsInput>;
};

export type TransportUpdateManyDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  arrivalDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  arrivalPoint?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  price?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type TransporterUpdateWithoutTransportAgencyDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  type?: Maybe<EnumTransportTypeFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<TransporterUpdatetagsInput>;
  images?: Maybe<FileUpdateManyWithoutTransportersInput>;
  transports?: Maybe<TransportUpdateManyWithoutTransporterInput>;
};

export type TransporterUpdateManyDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  type?: Maybe<EnumTransportTypeFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<TransporterUpdatetagsInput>;
};

export type PaymentUpdateWithoutTransportAgencyDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  paymentId?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  type?: Maybe<EnumPaymentTypeFieldUpdateOperationsInput>;
  status?: Maybe<EnumPaymentStatusFieldUpdateOperationsInput>;
  dueDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  date?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  concept?: Maybe<NullableStringFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  currency?: Maybe<StringFieldUpdateOperationsInput>;
  recipient?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  paymentMethod?: Maybe<NullableStringFieldUpdateOperationsInput>;
  stripePaymentIntentId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  stripeClientSecret?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<PaymentUpdatetagsInput>;
  group?: Maybe<GroupUpdateOneWithoutPaymentsInput>;
  taxRate?: Maybe<TaxRateUpdateOneWithoutPaymentsInput>;
  movement?: Maybe<MovementUpdateOneWithoutPaymentsInput>;
  client?: Maybe<ClientUpdateOneWithoutPaymentsInput>;
  supplier?: Maybe<SupplierUpdateOneWithoutPaymentsInput>;
  documents?: Maybe<FileUpdateManyWithoutPaymentsInput>;
  bankAccount?: Maybe<BankAccountUpdateOneWithoutPaymentsInput>;
  Interaction?: Maybe<InteractionUpdateManyWithoutPaymentInput>;
};

export type InteractionUpdateWithoutTransportAgencyDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<StringFieldUpdateOperationsInput>;
  action?: Maybe<StringFieldUpdateOperationsInput>;
  userId?: Maybe<StringFieldUpdateOperationsInput>;
  data?: Maybe<StringFieldUpdateOperationsInput>;
  client?: Maybe<ClientUpdateOneWithoutInteractionsInput>;
  supplier?: Maybe<SupplierUpdateOneWithoutInteractionsInput>;
  movement?: Maybe<MovementUpdateOneWithoutInteractionsInput>;
  product?: Maybe<ProductUpdateOneWithoutInteractionsInput>;
  warehouse?: Maybe<WarehouseUpdateOneWithoutInteractionInput>;
  payment?: Maybe<PaymentUpdateOneWithoutInteractionInput>;
};

export type ClientCreateOneWithoutInventoriesInput = {
  create?: Maybe<ClientCreateWithoutInventoriesInput>;
  connect?: Maybe<ClientWhereUniqueInput>;
};

export type ContactPersonUpdateWithoutWarehouseDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  firstName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  scheduleEnd?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  scheduleStart?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<ContactPersonUpdatetagsInput>;
  manufacturer?: Maybe<ManufacturerUpdateOneWithoutContactPersonsInput>;
  supplier?: Maybe<SupplierUpdateOneWithoutContactPersonsInput>;
  client?: Maybe<ClientUpdateOneWithoutContactPersonsInput>;
  transportAgency?: Maybe<TransportAgencyUpdateOneWithoutContactPersonsInput>;
};

export type InventoryUpdateWithoutWarehouseDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  storageNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isListed?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  listPrice?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  supplier?: Maybe<SupplierUpdateOneWithoutInventoriesInput>;
  batch?: Maybe<BatchUpdateOneWithoutInventoriesInput>;
  product?: Maybe<ProductUpdateOneRequiredWithoutInventoriesInput>;
  movements?: Maybe<MovementUpdateManyWithoutInventoryInput>;
  reservations?: Maybe<ReservationUpdateManyWithoutInventoryInput>;
  client?: Maybe<ClientUpdateOneWithoutInventoriesInput>;
};

export type MovementUpdateWithoutWarehouseDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  date?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  status?: Maybe<NullableEnumMovementStatusFieldUpdateOperationsInput>;
  movementId?: Maybe<IntFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  sendMail?: Maybe<BoolFieldUpdateOperationsInput>;
  storageNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  type?: Maybe<EnumMovementTypeFieldUpdateOperationsInput>;
  unitPrice?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  invoiceId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<MovementUpdatetagsInput>;
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
  documents?: Maybe<FileUpdateManyWithoutMovementsInput>;
  payments?: Maybe<PaymentUpdateManyWithoutMovementInput>;
  consumablesMovements?: Maybe<MovementUpdateManyWithoutConsumedFromInput>;
  consumedFrom?: Maybe<MovementUpdateOneWithoutConsumablesMovementsInput>;
};

export type NotificationUpdateWithoutWarehouseDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  active?: Maybe<BoolFieldUpdateOperationsInput>;
  type?: Maybe<EnumNotificationTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<StringFieldUpdateOperationsInput>;
  userLanguage?: Maybe<NullableEnumLanguageFieldUpdateOperationsInput>;
  userEmail?: Maybe<StringFieldUpdateOperationsInput>;
  product?: Maybe<ProductUpdateOneRequiredWithoutNotificationsInput>;
};

export type NotificationUpdateManyDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  active?: Maybe<BoolFieldUpdateOperationsInput>;
  type?: Maybe<EnumNotificationTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<StringFieldUpdateOperationsInput>;
  userLanguage?: Maybe<NullableEnumLanguageFieldUpdateOperationsInput>;
  userEmail?: Maybe<StringFieldUpdateOperationsInput>;
};

export type InteractionUpdateWithoutWarehouseDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<StringFieldUpdateOperationsInput>;
  action?: Maybe<StringFieldUpdateOperationsInput>;
  userId?: Maybe<StringFieldUpdateOperationsInput>;
  data?: Maybe<StringFieldUpdateOperationsInput>;
  client?: Maybe<ClientUpdateOneWithoutInteractionsInput>;
  supplier?: Maybe<SupplierUpdateOneWithoutInteractionsInput>;
  movement?: Maybe<MovementUpdateOneWithoutInteractionsInput>;
  product?: Maybe<ProductUpdateOneWithoutInteractionsInput>;
  transportAgency?: Maybe<TransportAgencyUpdateOneWithoutInteractionInput>;
  payment?: Maybe<PaymentUpdateOneWithoutInteractionInput>;
};

export type PaymentUpdateWithoutTaxRateDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  paymentId?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  type?: Maybe<EnumPaymentTypeFieldUpdateOperationsInput>;
  status?: Maybe<EnumPaymentStatusFieldUpdateOperationsInput>;
  dueDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  date?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  concept?: Maybe<NullableStringFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  currency?: Maybe<StringFieldUpdateOperationsInput>;
  recipient?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  paymentMethod?: Maybe<NullableStringFieldUpdateOperationsInput>;
  stripePaymentIntentId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  stripeClientSecret?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<PaymentUpdatetagsInput>;
  group?: Maybe<GroupUpdateOneWithoutPaymentsInput>;
  movement?: Maybe<MovementUpdateOneWithoutPaymentsInput>;
  transportAgency?: Maybe<TransportAgencyUpdateOneWithoutPaymentsInput>;
  client?: Maybe<ClientUpdateOneWithoutPaymentsInput>;
  supplier?: Maybe<SupplierUpdateOneWithoutPaymentsInput>;
  documents?: Maybe<FileUpdateManyWithoutPaymentsInput>;
  bankAccount?: Maybe<BankAccountUpdateOneWithoutPaymentsInput>;
  Interaction?: Maybe<InteractionUpdateManyWithoutPaymentInput>;
};

export type PaymentUpdateWithoutGroupDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  paymentId?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  type?: Maybe<EnumPaymentTypeFieldUpdateOperationsInput>;
  status?: Maybe<EnumPaymentStatusFieldUpdateOperationsInput>;
  dueDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  date?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  concept?: Maybe<NullableStringFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  currency?: Maybe<StringFieldUpdateOperationsInput>;
  recipient?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  paymentMethod?: Maybe<NullableStringFieldUpdateOperationsInput>;
  stripePaymentIntentId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  stripeClientSecret?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<PaymentUpdatetagsInput>;
  taxRate?: Maybe<TaxRateUpdateOneWithoutPaymentsInput>;
  movement?: Maybe<MovementUpdateOneWithoutPaymentsInput>;
  transportAgency?: Maybe<TransportAgencyUpdateOneWithoutPaymentsInput>;
  client?: Maybe<ClientUpdateOneWithoutPaymentsInput>;
  supplier?: Maybe<SupplierUpdateOneWithoutPaymentsInput>;
  documents?: Maybe<FileUpdateManyWithoutPaymentsInput>;
  bankAccount?: Maybe<BankAccountUpdateOneWithoutPaymentsInput>;
  Interaction?: Maybe<InteractionUpdateManyWithoutPaymentInput>;
};

export type ManufacturerCreatetagsInput = {
  set: Array<Scalars['String']>;
};

export type BatchCreateManyWithoutManufacturerInput = {
  create?: Maybe<Array<BatchCreateWithoutManufacturerInput>>;
  connect?: Maybe<Array<BatchWhereUniqueInput>>;
};

export type ContactPersonCreateManyWithoutManufacturerInput = {
  create?: Maybe<Array<ContactPersonCreateWithoutManufacturerInput>>;
  connect?: Maybe<Array<ContactPersonWhereUniqueInput>>;
};

export type FileCreateManyWithoutManufacturersInput = {
  create?: Maybe<Array<FileCreateWithoutManufacturersInput>>;
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

export type ProductCreateOneWithoutConsumersInput = {
  create?: Maybe<ProductCreateWithoutConsumersInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
};

export type ProductCreateOneWithoutConsumablesInput = {
  create?: Maybe<ProductCreateWithoutConsumablesInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
};

export type ManufacturerUpdatetagsInput = {
  set: Array<Scalars['String']>;
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

export type FileUpdateManyWithoutManufacturersInput = {
  create?: Maybe<Array<FileCreateWithoutManufacturersInput>>;
  connect?: Maybe<Array<FileWhereUniqueInput>>;
  set?: Maybe<Array<FileWhereUniqueInput>>;
  disconnect?: Maybe<Array<FileWhereUniqueInput>>;
  delete?: Maybe<Array<FileWhereUniqueInput>>;
  update?: Maybe<Array<FileUpdateWithWhereUniqueWithoutManufacturersInput>>;
  updateMany?: Maybe<Array<FileUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<FileScalarWhereInput>>;
  upsert?: Maybe<Array<FileUpsertWithWhereUniqueWithoutManufacturersInput>>;
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
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  batchNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bestBefore?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  date?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  manufacturer?: Maybe<ManufacturerUpdateOneWithoutBatchesInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutBatchInput>;
  movements?: Maybe<MovementUpdateManyWithoutBatchInput>;
};

export type BatchUpdateManyDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  batchNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bestBefore?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  date?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type FileUpdateWithoutProductsDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  manufacturerId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  messageId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  supplierId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  clientId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  smallUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  transportAgencyId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  transporterId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
  movementId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  paymentId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  order?: Maybe<NullableIntFieldUpdateOperationsInput>;
  tags?: Maybe<FileUpdatetagsInput>;
  manufacturers?: Maybe<ManufacturerUpdateManyWithoutImagesInput>;
  messages?: Maybe<MessageUpdateManyWithoutImagesInput>;
  clients?: Maybe<ClientUpdateManyWithoutImagesInput>;
  suppliers?: Maybe<SupplierUpdateManyWithoutImagesInput>;
  transportAgencies?: Maybe<TransportAgencyUpdateManyWithoutImagesInput>;
  transporters?: Maybe<TransporterUpdateManyWithoutImagesInput>;
  settings?: Maybe<SettingUpdateManyWithoutLogoInput>;
  Invoice?: Maybe<InvoiceUpdateManyWithoutPdfInput>;
  imageCategory?: Maybe<CategoryUpdateManyWithoutImageInput>;
  bannerCategory?: Maybe<CategoryUpdateManyWithoutBannerImageInput>;
  movements?: Maybe<MovementUpdateManyWithoutDocumentsInput>;
  payments?: Maybe<PaymentUpdateManyWithoutDocumentsInput>;
};

export type InteractionUpdateWithoutProductDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<StringFieldUpdateOperationsInput>;
  action?: Maybe<StringFieldUpdateOperationsInput>;
  userId?: Maybe<StringFieldUpdateOperationsInput>;
  data?: Maybe<StringFieldUpdateOperationsInput>;
  client?: Maybe<ClientUpdateOneWithoutInteractionsInput>;
  supplier?: Maybe<SupplierUpdateOneWithoutInteractionsInput>;
  movement?: Maybe<MovementUpdateOneWithoutInteractionsInput>;
  transportAgency?: Maybe<TransportAgencyUpdateOneWithoutInteractionInput>;
  warehouse?: Maybe<WarehouseUpdateOneWithoutInteractionInput>;
  payment?: Maybe<PaymentUpdateOneWithoutInteractionInput>;
};

export type InventoryUpdateWithoutProductDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  storageNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isListed?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  listPrice?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  supplier?: Maybe<SupplierUpdateOneWithoutInventoriesInput>;
  batch?: Maybe<BatchUpdateOneWithoutInventoriesInput>;
  warehouse?: Maybe<WarehouseUpdateOneWithoutInventoriesInput>;
  movements?: Maybe<MovementUpdateManyWithoutInventoryInput>;
  reservations?: Maybe<ReservationUpdateManyWithoutInventoryInput>;
  client?: Maybe<ClientUpdateOneWithoutInventoriesInput>;
};

export type MovementUpdateWithoutProductDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  date?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  status?: Maybe<NullableEnumMovementStatusFieldUpdateOperationsInput>;
  movementId?: Maybe<IntFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  sendMail?: Maybe<BoolFieldUpdateOperationsInput>;
  storageNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  type?: Maybe<EnumMovementTypeFieldUpdateOperationsInput>;
  unitPrice?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  invoiceId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<MovementUpdatetagsInput>;
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
  documents?: Maybe<FileUpdateManyWithoutMovementsInput>;
  payments?: Maybe<PaymentUpdateManyWithoutMovementInput>;
  consumablesMovements?: Maybe<MovementUpdateManyWithoutConsumedFromInput>;
  consumedFrom?: Maybe<MovementUpdateOneWithoutConsumablesMovementsInput>;
};

export type NotificationUpdateWithoutProductDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  active?: Maybe<BoolFieldUpdateOperationsInput>;
  type?: Maybe<EnumNotificationTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<StringFieldUpdateOperationsInput>;
  userLanguage?: Maybe<NullableEnumLanguageFieldUpdateOperationsInput>;
  userEmail?: Maybe<StringFieldUpdateOperationsInput>;
  warehouse?: Maybe<WarehouseUpdateOneWithoutNotificationInput>;
};

export type UnitUpdateWithoutProductDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  baseAmount?: Maybe<FloatFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UnitUpdateManyDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  baseAmount?: Maybe<FloatFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type TaxRateUpdateWithoutProductDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  isSameCountry?: Maybe<BoolFieldUpdateOperationsInput>;
  isEU?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<TaxRateUpdatetagsInput>;
  group?: Maybe<GroupUpdateOneWithoutTaxRateInput>;
  payments?: Maybe<PaymentUpdateManyWithoutTaxRateInput>;
};

export type TaxRateUpdateManyDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  isSameCountry?: Maybe<BoolFieldUpdateOperationsInput>;
  isEU?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<TaxRateUpdatetagsInput>;
};

export type ProductUpdateWithoutVariantProductDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  productId?: Maybe<IntFieldUpdateOperationsInput>;
  ASIN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  EAN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  ISBN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  UPC?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  material?: Maybe<NullableStringFieldUpdateOperationsInput>;
  color?: Maybe<NullableStringFieldUpdateOperationsInput>;
  weight?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isListed?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  quantity?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  tags?: Maybe<ProductUpdatetagsInput>;
  dimensions?: Maybe<DimensionUpdateOneWithoutProductInput>;
  manufacturer?: Maybe<ManufacturerUpdateOneWithoutProductsInput>;
  batches?: Maybe<BatchUpdateManyWithoutProductInput>;
  images?: Maybe<FileUpdateManyWithoutProductsInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutProductInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutProductInput>;
  movements?: Maybe<MovementUpdateManyWithoutProductInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutProductInput>;
  units?: Maybe<UnitUpdateManyWithoutProductInput>;
  taxRates?: Maybe<TaxRateUpdateManyWithoutProductInput>;
  variants?: Maybe<ProductUpdateManyWithoutVariantProductInput>;
  categories?: Maybe<CategoryUpdateManyWithoutProductsInput>;
  consumables?: Maybe<ConsumableUpdateManyWithoutConsumerInput>;
  consumers?: Maybe<ConsumableUpdateManyWithoutProductInput>;
};

export type ProductUpdateManyDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  productId?: Maybe<IntFieldUpdateOperationsInput>;
  ASIN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  EAN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  ISBN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  UPC?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  material?: Maybe<NullableStringFieldUpdateOperationsInput>;
  color?: Maybe<NullableStringFieldUpdateOperationsInput>;
  weight?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isListed?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  quantity?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  tags?: Maybe<ProductUpdatetagsInput>;
};

export type ProductUpdateWithoutVariantsDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  productId?: Maybe<IntFieldUpdateOperationsInput>;
  ASIN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  EAN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  ISBN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  UPC?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  material?: Maybe<NullableStringFieldUpdateOperationsInput>;
  color?: Maybe<NullableStringFieldUpdateOperationsInput>;
  weight?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isListed?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  quantity?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  tags?: Maybe<ProductUpdatetagsInput>;
  dimensions?: Maybe<DimensionUpdateOneWithoutProductInput>;
  manufacturer?: Maybe<ManufacturerUpdateOneWithoutProductsInput>;
  batches?: Maybe<BatchUpdateManyWithoutProductInput>;
  images?: Maybe<FileUpdateManyWithoutProductsInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutProductInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutProductInput>;
  movements?: Maybe<MovementUpdateManyWithoutProductInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutProductInput>;
  units?: Maybe<UnitUpdateManyWithoutProductInput>;
  taxRates?: Maybe<TaxRateUpdateManyWithoutProductInput>;
  variantProduct?: Maybe<ProductUpdateManyWithoutVariantsInput>;
  categories?: Maybe<CategoryUpdateManyWithoutProductsInput>;
  consumables?: Maybe<ConsumableUpdateManyWithoutConsumerInput>;
  consumers?: Maybe<ConsumableUpdateManyWithoutProductInput>;
};

export type CategoryUpdateWithoutProductsDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  image?: Maybe<FileUpdateOneWithoutImageCategoryInput>;
  bannerImage?: Maybe<FileUpdateOneWithoutBannerCategoryInput>;
  subCategories?: Maybe<CategoryUpdateManyWithoutCategoryInput>;
  Category?: Maybe<CategoryUpdateOneWithoutSubCategoriesInput>;
};

export type CategoryUpdateManyDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type ConsumableUpdateWithoutConsumerDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  atIncoming?: Maybe<BoolFieldUpdateOperationsInput>;
  product?: Maybe<ProductUpdateOneRequiredWithoutConsumersInput>;
};

export type ConsumableUpdateManyDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  atIncoming?: Maybe<BoolFieldUpdateOperationsInput>;
};

export type ConsumableUpdateWithoutProductDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  atIncoming?: Maybe<BoolFieldUpdateOperationsInput>;
  consumer?: Maybe<ProductUpdateOneRequiredWithoutConsumablesInput>;
};

export type NestedEnumAccountPlanNullableFilter = {
  equals?: Maybe<AccountPlan>;
  in?: Maybe<Array<AccountPlan>>;
  notIn?: Maybe<Array<AccountPlan>>;
  not?: Maybe<NestedEnumAccountPlanNullableFilter>;
};

export type FileUpdatetagsInput = {
  set: Array<Scalars['String']>;
};

export type ManufacturerUpdateManyWithoutImagesInput = {
  create?: Maybe<Array<ManufacturerCreateWithoutImagesInput>>;
  connect?: Maybe<Array<ManufacturerWhereUniqueInput>>;
  set?: Maybe<Array<ManufacturerWhereUniqueInput>>;
  disconnect?: Maybe<Array<ManufacturerWhereUniqueInput>>;
  delete?: Maybe<Array<ManufacturerWhereUniqueInput>>;
  update?: Maybe<Array<ManufacturerUpdateWithWhereUniqueWithoutImagesInput>>;
  updateMany?: Maybe<Array<ManufacturerUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<ManufacturerScalarWhereInput>>;
  upsert?: Maybe<Array<ManufacturerUpsertWithWhereUniqueWithoutImagesInput>>;
};

export type MessageUpdateManyWithoutImagesInput = {
  create?: Maybe<Array<MessageCreateWithoutImagesInput>>;
  connect?: Maybe<Array<MessageWhereUniqueInput>>;
  set?: Maybe<Array<MessageWhereUniqueInput>>;
  disconnect?: Maybe<Array<MessageWhereUniqueInput>>;
  delete?: Maybe<Array<MessageWhereUniqueInput>>;
  update?: Maybe<Array<MessageUpdateWithWhereUniqueWithoutImagesInput>>;
  updateMany?: Maybe<Array<MessageUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<MessageScalarWhereInput>>;
  upsert?: Maybe<Array<MessageUpsertWithWhereUniqueWithoutImagesInput>>;
};

export type ClientUpdateManyWithoutImagesInput = {
  create?: Maybe<Array<ClientCreateWithoutImagesInput>>;
  connect?: Maybe<Array<ClientWhereUniqueInput>>;
  set?: Maybe<Array<ClientWhereUniqueInput>>;
  disconnect?: Maybe<Array<ClientWhereUniqueInput>>;
  delete?: Maybe<Array<ClientWhereUniqueInput>>;
  update?: Maybe<Array<ClientUpdateWithWhereUniqueWithoutImagesInput>>;
  updateMany?: Maybe<Array<ClientUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<ClientScalarWhereInput>>;
  upsert?: Maybe<Array<ClientUpsertWithWhereUniqueWithoutImagesInput>>;
};

export type SupplierUpdateManyWithoutImagesInput = {
  create?: Maybe<Array<SupplierCreateWithoutImagesInput>>;
  connect?: Maybe<Array<SupplierWhereUniqueInput>>;
  set?: Maybe<Array<SupplierWhereUniqueInput>>;
  disconnect?: Maybe<Array<SupplierWhereUniqueInput>>;
  delete?: Maybe<Array<SupplierWhereUniqueInput>>;
  update?: Maybe<Array<SupplierUpdateWithWhereUniqueWithoutImagesInput>>;
  updateMany?: Maybe<Array<SupplierUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<SupplierScalarWhereInput>>;
  upsert?: Maybe<Array<SupplierUpsertWithWhereUniqueWithoutImagesInput>>;
};

export type ProductUpdateManyWithoutImagesInput = {
  create?: Maybe<Array<ProductCreateWithoutImagesInput>>;
  connect?: Maybe<Array<ProductWhereUniqueInput>>;
  set?: Maybe<Array<ProductWhereUniqueInput>>;
  disconnect?: Maybe<Array<ProductWhereUniqueInput>>;
  delete?: Maybe<Array<ProductWhereUniqueInput>>;
  update?: Maybe<Array<ProductUpdateWithWhereUniqueWithoutImagesInput>>;
  updateMany?: Maybe<Array<ProductUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<ProductScalarWhereInput>>;
  upsert?: Maybe<Array<ProductUpsertWithWhereUniqueWithoutImagesInput>>;
};

export type TransportAgencyUpdateManyWithoutImagesInput = {
  create?: Maybe<Array<TransportAgencyCreateWithoutImagesInput>>;
  connect?: Maybe<Array<TransportAgencyWhereUniqueInput>>;
  set?: Maybe<Array<TransportAgencyWhereUniqueInput>>;
  disconnect?: Maybe<Array<TransportAgencyWhereUniqueInput>>;
  delete?: Maybe<Array<TransportAgencyWhereUniqueInput>>;
  update?: Maybe<Array<TransportAgencyUpdateWithWhereUniqueWithoutImagesInput>>;
  updateMany?: Maybe<Array<TransportAgencyUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<TransportAgencyScalarWhereInput>>;
  upsert?: Maybe<Array<TransportAgencyUpsertWithWhereUniqueWithoutImagesInput>>;
};

export type TransporterUpdateManyWithoutImagesInput = {
  create?: Maybe<Array<TransporterCreateWithoutImagesInput>>;
  connect?: Maybe<Array<TransporterWhereUniqueInput>>;
  set?: Maybe<Array<TransporterWhereUniqueInput>>;
  disconnect?: Maybe<Array<TransporterWhereUniqueInput>>;
  delete?: Maybe<Array<TransporterWhereUniqueInput>>;
  update?: Maybe<Array<TransporterUpdateWithWhereUniqueWithoutImagesInput>>;
  updateMany?: Maybe<Array<TransporterUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<TransporterScalarWhereInput>>;
  upsert?: Maybe<Array<TransporterUpsertWithWhereUniqueWithoutImagesInput>>;
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

export type MovementUpdateManyWithoutDocumentsInput = {
  create?: Maybe<Array<MovementCreateWithoutDocumentsInput>>;
  connect?: Maybe<Array<MovementWhereUniqueInput>>;
  set?: Maybe<Array<MovementWhereUniqueInput>>;
  disconnect?: Maybe<Array<MovementWhereUniqueInput>>;
  delete?: Maybe<Array<MovementWhereUniqueInput>>;
  update?: Maybe<Array<MovementUpdateWithWhereUniqueWithoutDocumentsInput>>;
  updateMany?: Maybe<Array<MovementUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<MovementScalarWhereInput>>;
  upsert?: Maybe<Array<MovementUpsertWithWhereUniqueWithoutDocumentsInput>>;
};

export type PaymentUpdateManyWithoutDocumentsInput = {
  create?: Maybe<Array<PaymentCreateWithoutDocumentsInput>>;
  connect?: Maybe<Array<PaymentWhereUniqueInput>>;
  set?: Maybe<Array<PaymentWhereUniqueInput>>;
  disconnect?: Maybe<Array<PaymentWhereUniqueInput>>;
  delete?: Maybe<Array<PaymentWhereUniqueInput>>;
  update?: Maybe<Array<PaymentUpdateWithWhereUniqueWithoutDocumentsInput>>;
  updateMany?: Maybe<Array<PaymentUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<PaymentScalarWhereInput>>;
  upsert?: Maybe<Array<PaymentUpsertWithWhereUniqueWithoutDocumentsInput>>;
};

export type PresetUpdateWithoutSettingDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  active?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  currency?: Maybe<NullableStringFieldUpdateOperationsInput>;
  filter?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  rowsPerPage?: Maybe<NullableIntFieldUpdateOperationsInput>;
  sort?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tableView?: Maybe<NullableEnumTableViewFieldUpdateOperationsInput>;
  type?: Maybe<EnumEntityTypeFieldUpdateOperationsInput>;
  user?: Maybe<NullableStringFieldUpdateOperationsInput>;
  columnOrder?: Maybe<PresetUpdatecolumnOrderInput>;
  hiddenColumns?: Maybe<PresetUpdatehiddenColumnsInput>;
};

export type PresetUpdateManyDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  active?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  currency?: Maybe<NullableStringFieldUpdateOperationsInput>;
  filter?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  rowsPerPage?: Maybe<NullableIntFieldUpdateOperationsInput>;
  sort?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tableView?: Maybe<NullableEnumTableViewFieldUpdateOperationsInput>;
  type?: Maybe<EnumEntityTypeFieldUpdateOperationsInput>;
  user?: Maybe<NullableStringFieldUpdateOperationsInput>;
  columnOrder?: Maybe<PresetUpdatecolumnOrderInput>;
  hiddenColumns?: Maybe<PresetUpdatehiddenColumnsInput>;
};

export type ContactPersonUpdateWithoutSupplierDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  firstName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  scheduleEnd?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  scheduleStart?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<ContactPersonUpdatetagsInput>;
  manufacturer?: Maybe<ManufacturerUpdateOneWithoutContactPersonsInput>;
  client?: Maybe<ClientUpdateOneWithoutContactPersonsInput>;
  transportAgency?: Maybe<TransportAgencyUpdateOneWithoutContactPersonsInput>;
  warehouse?: Maybe<WarehouseUpdateOneWithoutContactPersonsInput>;
};

export type FileUpdateWithoutSuppliersDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  manufacturerId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  messageId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  supplierId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  clientId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  smallUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  transportAgencyId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  transporterId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
  movementId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  paymentId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  order?: Maybe<NullableIntFieldUpdateOperationsInput>;
  tags?: Maybe<FileUpdatetagsInput>;
  manufacturers?: Maybe<ManufacturerUpdateManyWithoutImagesInput>;
  messages?: Maybe<MessageUpdateManyWithoutImagesInput>;
  clients?: Maybe<ClientUpdateManyWithoutImagesInput>;
  products?: Maybe<ProductUpdateManyWithoutImagesInput>;
  transportAgencies?: Maybe<TransportAgencyUpdateManyWithoutImagesInput>;
  transporters?: Maybe<TransporterUpdateManyWithoutImagesInput>;
  settings?: Maybe<SettingUpdateManyWithoutLogoInput>;
  Invoice?: Maybe<InvoiceUpdateManyWithoutPdfInput>;
  imageCategory?: Maybe<CategoryUpdateManyWithoutImageInput>;
  bannerCategory?: Maybe<CategoryUpdateManyWithoutBannerImageInput>;
  movements?: Maybe<MovementUpdateManyWithoutDocumentsInput>;
  payments?: Maybe<PaymentUpdateManyWithoutDocumentsInput>;
};

export type InteractionUpdateWithoutSupplierDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<StringFieldUpdateOperationsInput>;
  action?: Maybe<StringFieldUpdateOperationsInput>;
  userId?: Maybe<StringFieldUpdateOperationsInput>;
  data?: Maybe<StringFieldUpdateOperationsInput>;
  client?: Maybe<ClientUpdateOneWithoutInteractionsInput>;
  movement?: Maybe<MovementUpdateOneWithoutInteractionsInput>;
  product?: Maybe<ProductUpdateOneWithoutInteractionsInput>;
  transportAgency?: Maybe<TransportAgencyUpdateOneWithoutInteractionInput>;
  warehouse?: Maybe<WarehouseUpdateOneWithoutInteractionInput>;
  payment?: Maybe<PaymentUpdateOneWithoutInteractionInput>;
};

export type InventoryUpdateWithoutSupplierDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  storageNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isListed?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  listPrice?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  batch?: Maybe<BatchUpdateOneWithoutInventoriesInput>;
  product?: Maybe<ProductUpdateOneRequiredWithoutInventoriesInput>;
  warehouse?: Maybe<WarehouseUpdateOneWithoutInventoriesInput>;
  movements?: Maybe<MovementUpdateManyWithoutInventoryInput>;
  reservations?: Maybe<ReservationUpdateManyWithoutInventoryInput>;
  client?: Maybe<ClientUpdateOneWithoutInventoriesInput>;
};

export type MovementUpdateWithoutSupplierDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  date?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  status?: Maybe<NullableEnumMovementStatusFieldUpdateOperationsInput>;
  movementId?: Maybe<IntFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  sendMail?: Maybe<BoolFieldUpdateOperationsInput>;
  storageNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  type?: Maybe<EnumMovementTypeFieldUpdateOperationsInput>;
  unitPrice?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  invoiceId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<MovementUpdatetagsInput>;
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
  documents?: Maybe<FileUpdateManyWithoutMovementsInput>;
  payments?: Maybe<PaymentUpdateManyWithoutMovementInput>;
  consumablesMovements?: Maybe<MovementUpdateManyWithoutConsumedFromInput>;
  consumedFrom?: Maybe<MovementUpdateOneWithoutConsumablesMovementsInput>;
};

export type PaymentUpdateWithoutSupplierDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  paymentId?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  type?: Maybe<EnumPaymentTypeFieldUpdateOperationsInput>;
  status?: Maybe<EnumPaymentStatusFieldUpdateOperationsInput>;
  dueDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  date?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  concept?: Maybe<NullableStringFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  currency?: Maybe<StringFieldUpdateOperationsInput>;
  recipient?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  paymentMethod?: Maybe<NullableStringFieldUpdateOperationsInput>;
  stripePaymentIntentId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  stripeClientSecret?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<PaymentUpdatetagsInput>;
  group?: Maybe<GroupUpdateOneWithoutPaymentsInput>;
  taxRate?: Maybe<TaxRateUpdateOneWithoutPaymentsInput>;
  movement?: Maybe<MovementUpdateOneWithoutPaymentsInput>;
  transportAgency?: Maybe<TransportAgencyUpdateOneWithoutPaymentsInput>;
  client?: Maybe<ClientUpdateOneWithoutPaymentsInput>;
  documents?: Maybe<FileUpdateManyWithoutPaymentsInput>;
  bankAccount?: Maybe<BankAccountUpdateOneWithoutPaymentsInput>;
  Interaction?: Maybe<InteractionUpdateManyWithoutPaymentInput>;
};

export type ClientCreateWithoutMovementsInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  clientId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  tags?: Maybe<ClientCreatetagsInput>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutClientInput>;
  images?: Maybe<FileCreateManyWithoutClientsInput>;
  interactions?: Maybe<InteractionCreateManyWithoutClientInput>;
  inventories?: Maybe<InventoryCreateManyWithoutClientInput>;
  reservations?: Maybe<ReservationCreateManyWithoutClientInput>;
  address?: Maybe<AddressCreateOneWithoutClientAddressInput>;
  billingAddress?: Maybe<AddressCreateOneWithoutClientBillingAddressInput>;
  invoices?: Maybe<InvoiceCreateManyWithoutClientInput>;
  payments?: Maybe<PaymentCreateManyWithoutClientInput>;
};

export type SupplierCreateWithoutMovementsInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  supplierId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  tags?: Maybe<SupplierCreatetagsInput>;
  address?: Maybe<AddressCreateOneWithoutSupplierAddressInput>;
  billingAddress?: Maybe<AddressCreateOneWithoutSupplierBillingAddressInput>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutSupplierInput>;
  images?: Maybe<FileCreateManyWithoutSuppliersInput>;
  interactions?: Maybe<InteractionCreateManyWithoutSupplierInput>;
  inventories?: Maybe<InventoryCreateManyWithoutSupplierInput>;
  payments?: Maybe<PaymentCreateManyWithoutSupplierInput>;
};

export type BatchCreateWithoutMovementsInput = {
  tenantId?: Maybe<Scalars['String']>;
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
  tenantId?: Maybe<Scalars['String']>;
  amount: Scalars['Float'];
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
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  productId: Scalars['Int'];
  ASIN?: Maybe<Scalars['String']>;
  EAN?: Maybe<Scalars['String']>;
  ISBN?: Maybe<Scalars['String']>;
  UPC?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  material?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  isListed?: Maybe<Scalars['Boolean']>;
  notes?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Float']>;
  tags?: Maybe<ProductCreatetagsInput>;
  dimensions?: Maybe<DimensionCreateOneWithoutProductInput>;
  manufacturer?: Maybe<ManufacturerCreateOneWithoutProductsInput>;
  batches?: Maybe<BatchCreateManyWithoutProductInput>;
  images?: Maybe<FileCreateManyWithoutProductsInput>;
  interactions?: Maybe<InteractionCreateManyWithoutProductInput>;
  inventories?: Maybe<InventoryCreateManyWithoutProductInput>;
  notifications?: Maybe<NotificationCreateManyWithoutProductInput>;
  units?: Maybe<UnitCreateManyWithoutProductInput>;
  taxRates?: Maybe<TaxRateCreateManyWithoutProductInput>;
  variants?: Maybe<ProductCreateManyWithoutVariantProductInput>;
  variantProduct?: Maybe<ProductCreateManyWithoutVariantsInput>;
  categories?: Maybe<CategoryCreateManyWithoutProductsInput>;
  consumables?: Maybe<ConsumableCreateManyWithoutConsumerInput>;
  consumers?: Maybe<ConsumableCreateManyWithoutProductInput>;
};

export type WarehouseCreateWithoutMovementsInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  phoneNumberId?: Maybe<Scalars['String']>;
  tags?: Maybe<WarehouseCreatetagsInput>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutWarehouseInput>;
  inventories?: Maybe<InventoryCreateManyWithoutWarehouseInput>;
  address?: Maybe<AddressCreateOneWithoutWarehouseInput>;
  Notification?: Maybe<NotificationCreateManyWithoutWarehouseInput>;
  Interaction?: Maybe<InteractionCreateManyWithoutWarehouseInput>;
};

export type InteractionCreateWithoutMovementInput = {
  tenantId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  action: Scalars['String'];
  userId: Scalars['String'];
  data: Scalars['String'];
  client?: Maybe<ClientCreateOneWithoutInteractionsInput>;
  supplier?: Maybe<SupplierCreateOneWithoutInteractionsInput>;
  product?: Maybe<ProductCreateOneWithoutInteractionsInput>;
  transportAgency?: Maybe<TransportAgencyCreateOneWithoutInteractionInput>;
  warehouse?: Maybe<WarehouseCreateOneWithoutInteractionInput>;
  payment?: Maybe<PaymentCreateOneWithoutInteractionInput>;
};

export type ReservationCreateWithoutMovementInput = {
  tenantId?: Maybe<Scalars['String']>;
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  notes?: Maybe<Scalars['String']>;
  client: ClientCreateOneWithoutReservationsInput;
  inventory?: Maybe<InventoryCreateOneWithoutReservationsInput>;
};

export type TransportCreateWithoutMovementInput = {
  tenantId?: Maybe<Scalars['String']>;
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
  tenantId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  withTaxes: Scalars['Boolean'];
  notes?: Maybe<Scalars['String']>;
  tags?: Maybe<InvoiceCreatetagsInput>;
  pdf: FileCreateOneWithoutInvoiceInput;
  client: ClientCreateOneWithoutInvoicesInput;
};

export type FileCreateWithoutMovementsInput = {
  tenantId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  manufacturerId?: Maybe<Scalars['String']>;
  messageId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  supplierId?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['String']>;
  smallUrl?: Maybe<Scalars['String']>;
  transportAgencyId?: Maybe<Scalars['String']>;
  transporterId?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  movementId?: Maybe<Scalars['String']>;
  paymentId?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  tags?: Maybe<FileCreatetagsInput>;
  manufacturers?: Maybe<ManufacturerCreateManyWithoutImagesInput>;
  messages?: Maybe<MessageCreateManyWithoutImagesInput>;
  clients?: Maybe<ClientCreateManyWithoutImagesInput>;
  suppliers?: Maybe<SupplierCreateManyWithoutImagesInput>;
  products?: Maybe<ProductCreateManyWithoutImagesInput>;
  transportAgencies?: Maybe<TransportAgencyCreateManyWithoutImagesInput>;
  transporters?: Maybe<TransporterCreateManyWithoutImagesInput>;
  settings?: Maybe<SettingCreateManyWithoutLogoInput>;
  Invoice?: Maybe<InvoiceCreateManyWithoutPdfInput>;
  imageCategory?: Maybe<CategoryCreateManyWithoutImageInput>;
  bannerCategory?: Maybe<CategoryCreateManyWithoutBannerImageInput>;
  payments?: Maybe<PaymentCreateManyWithoutDocumentsInput>;
};

export type PaymentCreateWithoutMovementInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
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
  tags?: Maybe<PaymentCreatetagsInput>;
  group?: Maybe<GroupCreateOneWithoutPaymentsInput>;
  taxRate?: Maybe<TaxRateCreateOneWithoutPaymentsInput>;
  transportAgency?: Maybe<TransportAgencyCreateOneWithoutPaymentsInput>;
  client?: Maybe<ClientCreateOneWithoutPaymentsInput>;
  supplier?: Maybe<SupplierCreateOneWithoutPaymentsInput>;
  documents?: Maybe<FileCreateManyWithoutPaymentsInput>;
  bankAccount?: Maybe<BankAccountCreateOneWithoutPaymentsInput>;
  Interaction?: Maybe<InteractionCreateManyWithoutPaymentInput>;
};

export type MovementCreateWithoutConsumedFromInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  amount: Scalars['Float'];
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
  tags?: Maybe<MovementCreatetagsInput>;
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
  documents?: Maybe<FileCreateManyWithoutMovementsInput>;
  payments?: Maybe<PaymentCreateManyWithoutMovementInput>;
  consumablesMovements?: Maybe<MovementCreateManyWithoutConsumedFromInput>;
};

export type MovementCreateWithoutConsumablesMovementsInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  amount: Scalars['Float'];
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
  tags?: Maybe<MovementCreatetagsInput>;
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
  documents?: Maybe<FileCreateManyWithoutMovementsInput>;
  payments?: Maybe<PaymentCreateManyWithoutMovementInput>;
  consumedFrom?: Maybe<MovementCreateOneWithoutConsumablesMovementsInput>;
};

export type ClientUpdateWithoutMovementsDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  fiscalNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  language?: Maybe<NullableEnumLanguageFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  clientId?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  withAccount?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  stripeId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<ClientUpdatetagsInput>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutClientInput>;
  images?: Maybe<FileUpdateManyWithoutClientsInput>;
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
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  fiscalNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  language?: Maybe<NullableEnumLanguageFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  supplierId?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  withAccount?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<SupplierUpdatetagsInput>;
  address?: Maybe<AddressUpdateOneWithoutSupplierAddressInput>;
  billingAddress?: Maybe<AddressUpdateOneWithoutSupplierBillingAddressInput>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutSupplierInput>;
  images?: Maybe<FileUpdateManyWithoutSuppliersInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutSupplierInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutSupplierInput>;
  payments?: Maybe<PaymentUpdateManyWithoutSupplierInput>;
};

export type SupplierUpsertWithoutMovementsInput = {
  update: SupplierUpdateWithoutMovementsDataInput;
  create: SupplierCreateWithoutMovementsInput;
};

export type BatchUpdateWithoutMovementsDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  batchNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bestBefore?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  date?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  manufacturer?: Maybe<ManufacturerUpdateOneWithoutBatchesInput>;
  product?: Maybe<ProductUpdateOneRequiredWithoutBatchesInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutBatchInput>;
};

export type BatchUpsertWithoutMovementsInput = {
  update: BatchUpdateWithoutMovementsDataInput;
  create: BatchCreateWithoutMovementsInput;
};

export type InventoryUpdateWithoutMovementsDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  storageNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isListed?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  listPrice?: Maybe<NullableFloatFieldUpdateOperationsInput>;
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
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  productId?: Maybe<IntFieldUpdateOperationsInput>;
  ASIN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  EAN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  ISBN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  UPC?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  material?: Maybe<NullableStringFieldUpdateOperationsInput>;
  color?: Maybe<NullableStringFieldUpdateOperationsInput>;
  weight?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isListed?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  quantity?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  tags?: Maybe<ProductUpdatetagsInput>;
  dimensions?: Maybe<DimensionUpdateOneWithoutProductInput>;
  manufacturer?: Maybe<ManufacturerUpdateOneWithoutProductsInput>;
  batches?: Maybe<BatchUpdateManyWithoutProductInput>;
  images?: Maybe<FileUpdateManyWithoutProductsInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutProductInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutProductInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutProductInput>;
  units?: Maybe<UnitUpdateManyWithoutProductInput>;
  taxRates?: Maybe<TaxRateUpdateManyWithoutProductInput>;
  variants?: Maybe<ProductUpdateManyWithoutVariantProductInput>;
  variantProduct?: Maybe<ProductUpdateManyWithoutVariantsInput>;
  categories?: Maybe<CategoryUpdateManyWithoutProductsInput>;
  consumables?: Maybe<ConsumableUpdateManyWithoutConsumerInput>;
  consumers?: Maybe<ConsumableUpdateManyWithoutProductInput>;
};

export type ProductUpsertWithoutMovementsInput = {
  update: ProductUpdateWithoutMovementsDataInput;
  create: ProductCreateWithoutMovementsInput;
};

export type WarehouseUpdateWithoutMovementsDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phoneNumberId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<WarehouseUpdatetagsInput>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutWarehouseInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutWarehouseInput>;
  address?: Maybe<AddressUpdateOneWithoutWarehouseInput>;
  Notification?: Maybe<NotificationUpdateManyWithoutWarehouseInput>;
  Interaction?: Maybe<InteractionUpdateManyWithoutWarehouseInput>;
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
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
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
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  withTaxes?: Maybe<BoolFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<InvoiceUpdatetagsInput>;
  pdf?: Maybe<FileUpdateOneRequiredWithoutInvoiceInput>;
  client?: Maybe<ClientUpdateOneRequiredWithoutInvoicesInput>;
};

export type InvoiceUpsertWithoutMovementsInput = {
  update: InvoiceUpdateWithoutMovementsDataInput;
  create: InvoiceCreateWithoutMovementsInput;
};

export type FileUpdateWithWhereUniqueWithoutMovementsInput = {
  where: FileWhereUniqueInput;
  data: FileUpdateWithoutMovementsDataInput;
};

export type FileUpsertWithWhereUniqueWithoutMovementsInput = {
  where: FileWhereUniqueInput;
  update: FileUpdateWithoutMovementsDataInput;
  create: FileCreateWithoutMovementsInput;
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

export type MovementUpdateWithWhereUniqueWithoutConsumedFromInput = {
  where: MovementWhereUniqueInput;
  data: MovementUpdateWithoutConsumedFromDataInput;
};

export type MovementUpsertWithWhereUniqueWithoutConsumedFromInput = {
  where: MovementWhereUniqueInput;
  update: MovementUpdateWithoutConsumedFromDataInput;
  create: MovementCreateWithoutConsumedFromInput;
};

export type MovementUpdateWithoutConsumablesMovementsDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  date?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  status?: Maybe<NullableEnumMovementStatusFieldUpdateOperationsInput>;
  movementId?: Maybe<IntFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  sendMail?: Maybe<BoolFieldUpdateOperationsInput>;
  storageNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  type?: Maybe<EnumMovementTypeFieldUpdateOperationsInput>;
  unitPrice?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  invoiceId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<MovementUpdatetagsInput>;
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
  documents?: Maybe<FileUpdateManyWithoutMovementsInput>;
  payments?: Maybe<PaymentUpdateManyWithoutMovementInput>;
  consumedFrom?: Maybe<MovementUpdateOneWithoutConsumablesMovementsInput>;
};

export type MovementUpsertWithoutConsumablesMovementsInput = {
  update: MovementUpdateWithoutConsumablesMovementsDataInput;
  create: MovementCreateWithoutConsumablesMovementsInput;
};

export type ManufacturerCreateWithoutImagesInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  website?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  tags?: Maybe<ManufacturerCreatetagsInput>;
  batches?: Maybe<BatchCreateManyWithoutManufacturerInput>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutManufacturerInput>;
  products?: Maybe<ProductCreateManyWithoutManufacturerInput>;
  address?: Maybe<AddressCreateOneWithoutManufacturerInput>;
};

export type ClientCreateWithoutImagesInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  clientId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  tags?: Maybe<ClientCreatetagsInput>;
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
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  supplierId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  tags?: Maybe<SupplierCreatetagsInput>;
  address?: Maybe<AddressCreateOneWithoutSupplierAddressInput>;
  billingAddress?: Maybe<AddressCreateOneWithoutSupplierBillingAddressInput>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutSupplierInput>;
  interactions?: Maybe<InteractionCreateManyWithoutSupplierInput>;
  inventories?: Maybe<InventoryCreateManyWithoutSupplierInput>;
  movements?: Maybe<MovementCreateManyWithoutSupplierInput>;
  payments?: Maybe<PaymentCreateManyWithoutSupplierInput>;
};

export type ProductCreateWithoutImagesInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  productId: Scalars['Int'];
  ASIN?: Maybe<Scalars['String']>;
  EAN?: Maybe<Scalars['String']>;
  ISBN?: Maybe<Scalars['String']>;
  UPC?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  material?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  isListed?: Maybe<Scalars['Boolean']>;
  notes?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Float']>;
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
  variants?: Maybe<ProductCreateManyWithoutVariantProductInput>;
  variantProduct?: Maybe<ProductCreateManyWithoutVariantsInput>;
  categories?: Maybe<CategoryCreateManyWithoutProductsInput>;
  consumables?: Maybe<ConsumableCreateManyWithoutConsumerInput>;
  consumers?: Maybe<ConsumableCreateManyWithoutProductInput>;
};

export type TransportAgencyCreateWithoutImagesInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  website?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  tags?: Maybe<TransportAgencyCreatetagsInput>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutTransportAgencyInput>;
  transports?: Maybe<TransportCreateManyWithoutTransportAgencyInput>;
  transporters?: Maybe<TransporterCreateManyWithoutTransportAgencyInput>;
  address?: Maybe<AddressCreateOneWithoutTransportAgencyAddressInput>;
  billingAddress?: Maybe<AddressCreateOneWithoutTransportAgencyBillingAddressInput>;
  payments?: Maybe<PaymentCreateManyWithoutTransportAgencyInput>;
  Address?: Maybe<AddressCreateOneWithoutTransportAgencyInput>;
  Interaction?: Maybe<InteractionCreateManyWithoutTransportAgencyInput>;
};

export type TransporterCreateWithoutImagesInput = {
  tenantId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type: TransportType;
  notes?: Maybe<Scalars['String']>;
  tags?: Maybe<TransporterCreatetagsInput>;
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
  plan?: Maybe<AccountPlan>;
  transports?: Maybe<Scalars['Boolean']>;
  warehouses?: Maybe<Scalars['Boolean']>;
  consumables?: Maybe<Scalars['Boolean']>;
  shop?: Maybe<Scalars['Boolean']>;
  accounting?: Maybe<Scalars['Boolean']>;
  invoicing?: Maybe<Scalars['Boolean']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  weightUnit?: Maybe<Scalars['String']>;
  lengthUnit?: Maybe<Scalars['String']>;
  shopPurchasedEmail?: Maybe<Scalars['String']>;
  invoiceText?: Maybe<Scalars['String']>;
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
  tenantId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  withTaxes: Scalars['Boolean'];
  notes?: Maybe<Scalars['String']>;
  tags?: Maybe<InvoiceCreatetagsInput>;
  movements?: Maybe<MovementCreateManyWithoutInvoiceInput>;
  client: ClientCreateOneWithoutInvoicesInput;
};

export type CategoryCreateWithoutImageInput = {
  tenantId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  bannerImage?: Maybe<FileCreateOneWithoutBannerCategoryInput>;
  products?: Maybe<ProductCreateManyWithoutCategoriesInput>;
  subCategories?: Maybe<CategoryCreateManyWithoutCategoryInput>;
  Category?: Maybe<CategoryCreateOneWithoutSubCategoriesInput>;
};

export type CategoryCreateWithoutBannerImageInput = {
  tenantId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<FileCreateOneWithoutImageCategoryInput>;
  products?: Maybe<ProductCreateManyWithoutCategoriesInput>;
  subCategories?: Maybe<CategoryCreateManyWithoutCategoryInput>;
  Category?: Maybe<CategoryCreateOneWithoutSubCategoriesInput>;
};

export type MovementCreateWithoutDocumentsInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  amount: Scalars['Float'];
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
  tags?: Maybe<MovementCreatetagsInput>;
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
  consumablesMovements?: Maybe<MovementCreateManyWithoutConsumedFromInput>;
  consumedFrom?: Maybe<MovementCreateOneWithoutConsumablesMovementsInput>;
};

export type PaymentCreateWithoutDocumentsInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
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
  tags?: Maybe<PaymentCreatetagsInput>;
  group?: Maybe<GroupCreateOneWithoutPaymentsInput>;
  taxRate?: Maybe<TaxRateCreateOneWithoutPaymentsInput>;
  movement?: Maybe<MovementCreateOneWithoutPaymentsInput>;
  transportAgency?: Maybe<TransportAgencyCreateOneWithoutPaymentsInput>;
  client?: Maybe<ClientCreateOneWithoutPaymentsInput>;
  supplier?: Maybe<SupplierCreateOneWithoutPaymentsInput>;
  bankAccount?: Maybe<BankAccountCreateOneWithoutPaymentsInput>;
  Interaction?: Maybe<InteractionCreateManyWithoutPaymentInput>;
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
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  website?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  tags?: Maybe<ManufacturerCreatetagsInput>;
  batches?: Maybe<BatchCreateManyWithoutManufacturerInput>;
  images?: Maybe<FileCreateManyWithoutManufacturersInput>;
  products?: Maybe<ProductCreateManyWithoutManufacturerInput>;
  address?: Maybe<AddressCreateOneWithoutManufacturerInput>;
};

export type SupplierCreateWithoutContactPersonsInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  supplierId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  tags?: Maybe<SupplierCreatetagsInput>;
  address?: Maybe<AddressCreateOneWithoutSupplierAddressInput>;
  billingAddress?: Maybe<AddressCreateOneWithoutSupplierBillingAddressInput>;
  images?: Maybe<FileCreateManyWithoutSuppliersInput>;
  interactions?: Maybe<InteractionCreateManyWithoutSupplierInput>;
  inventories?: Maybe<InventoryCreateManyWithoutSupplierInput>;
  movements?: Maybe<MovementCreateManyWithoutSupplierInput>;
  payments?: Maybe<PaymentCreateManyWithoutSupplierInput>;
};

export type TransportAgencyCreateWithoutContactPersonsInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  website?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  tags?: Maybe<TransportAgencyCreatetagsInput>;
  images?: Maybe<FileCreateManyWithoutTransportAgenciesInput>;
  transports?: Maybe<TransportCreateManyWithoutTransportAgencyInput>;
  transporters?: Maybe<TransporterCreateManyWithoutTransportAgencyInput>;
  address?: Maybe<AddressCreateOneWithoutTransportAgencyAddressInput>;
  billingAddress?: Maybe<AddressCreateOneWithoutTransportAgencyBillingAddressInput>;
  payments?: Maybe<PaymentCreateManyWithoutTransportAgencyInput>;
  Address?: Maybe<AddressCreateOneWithoutTransportAgencyInput>;
  Interaction?: Maybe<InteractionCreateManyWithoutTransportAgencyInput>;
};

export type WarehouseCreateWithoutContactPersonsInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  phoneNumberId?: Maybe<Scalars['String']>;
  tags?: Maybe<WarehouseCreatetagsInput>;
  inventories?: Maybe<InventoryCreateManyWithoutWarehouseInput>;
  movements?: Maybe<MovementCreateManyWithoutWarehouseInput>;
  address?: Maybe<AddressCreateOneWithoutWarehouseInput>;
  Notification?: Maybe<NotificationCreateManyWithoutWarehouseInput>;
  Interaction?: Maybe<InteractionCreateManyWithoutWarehouseInput>;
};

export type MessageCreateWithoutImagesInput = {
  tenantId?: Maybe<Scalars['String']>;
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
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  supplierId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  tags?: Maybe<SupplierCreatetagsInput>;
  address?: Maybe<AddressCreateOneWithoutSupplierAddressInput>;
  billingAddress?: Maybe<AddressCreateOneWithoutSupplierBillingAddressInput>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutSupplierInput>;
  images?: Maybe<FileCreateManyWithoutSuppliersInput>;
  inventories?: Maybe<InventoryCreateManyWithoutSupplierInput>;
  movements?: Maybe<MovementCreateManyWithoutSupplierInput>;
  payments?: Maybe<PaymentCreateManyWithoutSupplierInput>;
};

export type MovementCreateWithoutInteractionsInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  amount: Scalars['Float'];
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
  tags?: Maybe<MovementCreatetagsInput>;
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
  documents?: Maybe<FileCreateManyWithoutMovementsInput>;
  payments?: Maybe<PaymentCreateManyWithoutMovementInput>;
  consumablesMovements?: Maybe<MovementCreateManyWithoutConsumedFromInput>;
  consumedFrom?: Maybe<MovementCreateOneWithoutConsumablesMovementsInput>;
};

export type ProductCreateWithoutInteractionsInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  productId: Scalars['Int'];
  ASIN?: Maybe<Scalars['String']>;
  EAN?: Maybe<Scalars['String']>;
  ISBN?: Maybe<Scalars['String']>;
  UPC?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  material?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  isListed?: Maybe<Scalars['Boolean']>;
  notes?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Float']>;
  tags?: Maybe<ProductCreatetagsInput>;
  dimensions?: Maybe<DimensionCreateOneWithoutProductInput>;
  manufacturer?: Maybe<ManufacturerCreateOneWithoutProductsInput>;
  batches?: Maybe<BatchCreateManyWithoutProductInput>;
  images?: Maybe<FileCreateManyWithoutProductsInput>;
  inventories?: Maybe<InventoryCreateManyWithoutProductInput>;
  movements?: Maybe<MovementCreateManyWithoutProductInput>;
  notifications?: Maybe<NotificationCreateManyWithoutProductInput>;
  units?: Maybe<UnitCreateManyWithoutProductInput>;
  taxRates?: Maybe<TaxRateCreateManyWithoutProductInput>;
  variants?: Maybe<ProductCreateManyWithoutVariantProductInput>;
  variantProduct?: Maybe<ProductCreateManyWithoutVariantsInput>;
  categories?: Maybe<CategoryCreateManyWithoutProductsInput>;
  consumables?: Maybe<ConsumableCreateManyWithoutConsumerInput>;
  consumers?: Maybe<ConsumableCreateManyWithoutProductInput>;
};

export type TransportAgencyCreateWithoutInteractionInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  website?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  tags?: Maybe<TransportAgencyCreatetagsInput>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutTransportAgencyInput>;
  images?: Maybe<FileCreateManyWithoutTransportAgenciesInput>;
  transports?: Maybe<TransportCreateManyWithoutTransportAgencyInput>;
  transporters?: Maybe<TransporterCreateManyWithoutTransportAgencyInput>;
  address?: Maybe<AddressCreateOneWithoutTransportAgencyAddressInput>;
  billingAddress?: Maybe<AddressCreateOneWithoutTransportAgencyBillingAddressInput>;
  payments?: Maybe<PaymentCreateManyWithoutTransportAgencyInput>;
  Address?: Maybe<AddressCreateOneWithoutTransportAgencyInput>;
};

export type WarehouseCreateWithoutInteractionInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  phoneNumberId?: Maybe<Scalars['String']>;
  tags?: Maybe<WarehouseCreatetagsInput>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutWarehouseInput>;
  inventories?: Maybe<InventoryCreateManyWithoutWarehouseInput>;
  movements?: Maybe<MovementCreateManyWithoutWarehouseInput>;
  address?: Maybe<AddressCreateOneWithoutWarehouseInput>;
  Notification?: Maybe<NotificationCreateManyWithoutWarehouseInput>;
};

export type PaymentCreateWithoutInteractionInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
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
  tags?: Maybe<PaymentCreatetagsInput>;
  group?: Maybe<GroupCreateOneWithoutPaymentsInput>;
  taxRate?: Maybe<TaxRateCreateOneWithoutPaymentsInput>;
  movement?: Maybe<MovementCreateOneWithoutPaymentsInput>;
  transportAgency?: Maybe<TransportAgencyCreateOneWithoutPaymentsInput>;
  client?: Maybe<ClientCreateOneWithoutPaymentsInput>;
  supplier?: Maybe<SupplierCreateOneWithoutPaymentsInput>;
  documents?: Maybe<FileCreateManyWithoutPaymentsInput>;
  bankAccount?: Maybe<BankAccountCreateOneWithoutPaymentsInput>;
};

export type SupplierCreateWithoutInventoriesInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  supplierId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  tags?: Maybe<SupplierCreatetagsInput>;
  address?: Maybe<AddressCreateOneWithoutSupplierAddressInput>;
  billingAddress?: Maybe<AddressCreateOneWithoutSupplierBillingAddressInput>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutSupplierInput>;
  images?: Maybe<FileCreateManyWithoutSuppliersInput>;
  interactions?: Maybe<InteractionCreateManyWithoutSupplierInput>;
  movements?: Maybe<MovementCreateManyWithoutSupplierInput>;
  payments?: Maybe<PaymentCreateManyWithoutSupplierInput>;
};

export type BatchCreateWithoutInventoriesInput = {
  tenantId?: Maybe<Scalars['String']>;
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
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  productId: Scalars['Int'];
  ASIN?: Maybe<Scalars['String']>;
  EAN?: Maybe<Scalars['String']>;
  ISBN?: Maybe<Scalars['String']>;
  UPC?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  material?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  isListed?: Maybe<Scalars['Boolean']>;
  notes?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Float']>;
  tags?: Maybe<ProductCreatetagsInput>;
  dimensions?: Maybe<DimensionCreateOneWithoutProductInput>;
  manufacturer?: Maybe<ManufacturerCreateOneWithoutProductsInput>;
  batches?: Maybe<BatchCreateManyWithoutProductInput>;
  images?: Maybe<FileCreateManyWithoutProductsInput>;
  interactions?: Maybe<InteractionCreateManyWithoutProductInput>;
  movements?: Maybe<MovementCreateManyWithoutProductInput>;
  notifications?: Maybe<NotificationCreateManyWithoutProductInput>;
  units?: Maybe<UnitCreateManyWithoutProductInput>;
  taxRates?: Maybe<TaxRateCreateManyWithoutProductInput>;
  variants?: Maybe<ProductCreateManyWithoutVariantProductInput>;
  variantProduct?: Maybe<ProductCreateManyWithoutVariantsInput>;
  categories?: Maybe<CategoryCreateManyWithoutProductsInput>;
  consumables?: Maybe<ConsumableCreateManyWithoutConsumerInput>;
  consumers?: Maybe<ConsumableCreateManyWithoutProductInput>;
};

export type WarehouseCreateWithoutInventoriesInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  phoneNumberId?: Maybe<Scalars['String']>;
  tags?: Maybe<WarehouseCreatetagsInput>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutWarehouseInput>;
  movements?: Maybe<MovementCreateManyWithoutWarehouseInput>;
  address?: Maybe<AddressCreateOneWithoutWarehouseInput>;
  Notification?: Maybe<NotificationCreateManyWithoutWarehouseInput>;
  Interaction?: Maybe<InteractionCreateManyWithoutWarehouseInput>;
};

export type MovementCreateWithoutInventoryInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  amount: Scalars['Float'];
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
  tags?: Maybe<MovementCreatetagsInput>;
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
  documents?: Maybe<FileCreateManyWithoutMovementsInput>;
  payments?: Maybe<PaymentCreateManyWithoutMovementInput>;
  consumablesMovements?: Maybe<MovementCreateManyWithoutConsumedFromInput>;
  consumedFrom?: Maybe<MovementCreateOneWithoutConsumablesMovementsInput>;
};

export type ReservationCreateWithoutInventoryInput = {
  tenantId?: Maybe<Scalars['String']>;
  amount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  notes?: Maybe<Scalars['String']>;
  client: ClientCreateOneWithoutReservationsInput;
  movement: MovementCreateOneWithoutReservationInput;
};

export type MessageCreateWithoutMovementInput = {
  tenantId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  recipient?: Maybe<Scalars['String']>;
  sender: Scalars['String'];
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  mentions?: Maybe<MessageCreatementionsInput>;
  channel?: Maybe<ChannelCreateOneWithoutMessagesInput>;
  images?: Maybe<FileCreateManyWithoutMessagesInput>;
};

export type InventoryCreateWithoutReservationsInput = {
  tenantId?: Maybe<Scalars['String']>;
  amount: Scalars['Float'];
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
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  amount: Scalars['Float'];
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
  tags?: Maybe<MovementCreatetagsInput>;
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
  documents?: Maybe<FileCreateManyWithoutMovementsInput>;
  payments?: Maybe<PaymentCreateManyWithoutMovementInput>;
  consumablesMovements?: Maybe<MovementCreateManyWithoutConsumedFromInput>;
  consumedFrom?: Maybe<MovementCreateOneWithoutConsumablesMovementsInput>;
};

export type SupplierCreateWithoutAddressInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  supplierId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  tags?: Maybe<SupplierCreatetagsInput>;
  billingAddress?: Maybe<AddressCreateOneWithoutSupplierBillingAddressInput>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutSupplierInput>;
  images?: Maybe<FileCreateManyWithoutSuppliersInput>;
  interactions?: Maybe<InteractionCreateManyWithoutSupplierInput>;
  inventories?: Maybe<InventoryCreateManyWithoutSupplierInput>;
  movements?: Maybe<MovementCreateManyWithoutSupplierInput>;
  payments?: Maybe<PaymentCreateManyWithoutSupplierInput>;
};

export type SupplierCreateWithoutBillingAddressInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  supplierId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  tags?: Maybe<SupplierCreatetagsInput>;
  address?: Maybe<AddressCreateOneWithoutSupplierAddressInput>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutSupplierInput>;
  images?: Maybe<FileCreateManyWithoutSuppliersInput>;
  interactions?: Maybe<InteractionCreateManyWithoutSupplierInput>;
  inventories?: Maybe<InventoryCreateManyWithoutSupplierInput>;
  movements?: Maybe<MovementCreateManyWithoutSupplierInput>;
  payments?: Maybe<PaymentCreateManyWithoutSupplierInput>;
};

export type ClientCreateWithoutBillingAddressInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  clientId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  tags?: Maybe<ClientCreatetagsInput>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutClientInput>;
  images?: Maybe<FileCreateManyWithoutClientsInput>;
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
  plan?: Maybe<AccountPlan>;
  transports?: Maybe<Scalars['Boolean']>;
  warehouses?: Maybe<Scalars['Boolean']>;
  consumables?: Maybe<Scalars['Boolean']>;
  shop?: Maybe<Scalars['Boolean']>;
  accounting?: Maybe<Scalars['Boolean']>;
  invoicing?: Maybe<Scalars['Boolean']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  weightUnit?: Maybe<Scalars['String']>;
  lengthUnit?: Maybe<Scalars['String']>;
  shopPurchasedEmail?: Maybe<Scalars['String']>;
  invoiceText?: Maybe<Scalars['String']>;
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
  plan?: Maybe<AccountPlan>;
  transports?: Maybe<Scalars['Boolean']>;
  warehouses?: Maybe<Scalars['Boolean']>;
  consumables?: Maybe<Scalars['Boolean']>;
  shop?: Maybe<Scalars['Boolean']>;
  accounting?: Maybe<Scalars['Boolean']>;
  invoicing?: Maybe<Scalars['Boolean']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  weightUnit?: Maybe<Scalars['String']>;
  lengthUnit?: Maybe<Scalars['String']>;
  shopPurchasedEmail?: Maybe<Scalars['String']>;
  invoiceText?: Maybe<Scalars['String']>;
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

export type TransportAgencyCreateWithoutAddressInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  website?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  tags?: Maybe<TransportAgencyCreatetagsInput>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutTransportAgencyInput>;
  images?: Maybe<FileCreateManyWithoutTransportAgenciesInput>;
  transports?: Maybe<TransportCreateManyWithoutTransportAgencyInput>;
  transporters?: Maybe<TransporterCreateManyWithoutTransportAgencyInput>;
  billingAddress?: Maybe<AddressCreateOneWithoutTransportAgencyBillingAddressInput>;
  payments?: Maybe<PaymentCreateManyWithoutTransportAgencyInput>;
  Address?: Maybe<AddressCreateOneWithoutTransportAgencyInput>;
  Interaction?: Maybe<InteractionCreateManyWithoutTransportAgencyInput>;
};

export type TransportAgencyCreateWithoutBillingAddressInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  website?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  tags?: Maybe<TransportAgencyCreatetagsInput>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutTransportAgencyInput>;
  images?: Maybe<FileCreateManyWithoutTransportAgenciesInput>;
  transports?: Maybe<TransportCreateManyWithoutTransportAgencyInput>;
  transporters?: Maybe<TransporterCreateManyWithoutTransportAgencyInput>;
  address?: Maybe<AddressCreateOneWithoutTransportAgencyAddressInput>;
  payments?: Maybe<PaymentCreateManyWithoutTransportAgencyInput>;
  Address?: Maybe<AddressCreateOneWithoutTransportAgencyInput>;
  Interaction?: Maybe<InteractionCreateManyWithoutTransportAgencyInput>;
};

export type ManufacturerCreateWithoutAddressInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  website?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  tags?: Maybe<ManufacturerCreatetagsInput>;
  batches?: Maybe<BatchCreateManyWithoutManufacturerInput>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutManufacturerInput>;
  images?: Maybe<FileCreateManyWithoutManufacturersInput>;
  products?: Maybe<ProductCreateManyWithoutManufacturerInput>;
};

export type WarehouseCreateWithoutAddressInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  phoneNumberId?: Maybe<Scalars['String']>;
  tags?: Maybe<WarehouseCreatetagsInput>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutWarehouseInput>;
  inventories?: Maybe<InventoryCreateManyWithoutWarehouseInput>;
  movements?: Maybe<MovementCreateManyWithoutWarehouseInput>;
  Notification?: Maybe<NotificationCreateManyWithoutWarehouseInput>;
  Interaction?: Maybe<InteractionCreateManyWithoutWarehouseInput>;
};

export type ClientCreateWithoutAddressInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  clientId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  tags?: Maybe<ClientCreatetagsInput>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutClientInput>;
  images?: Maybe<FileCreateManyWithoutClientsInput>;
  interactions?: Maybe<InteractionCreateManyWithoutClientInput>;
  inventories?: Maybe<InventoryCreateManyWithoutClientInput>;
  movements?: Maybe<MovementCreateManyWithoutClientInput>;
  reservations?: Maybe<ReservationCreateManyWithoutClientInput>;
  billingAddress?: Maybe<AddressCreateOneWithoutClientBillingAddressInput>;
  invoices?: Maybe<InvoiceCreateManyWithoutClientInput>;
  payments?: Maybe<PaymentCreateManyWithoutClientInput>;
};

export type FileCreateWithoutInvoiceInput = {
  tenantId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  manufacturerId?: Maybe<Scalars['String']>;
  messageId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  supplierId?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['String']>;
  smallUrl?: Maybe<Scalars['String']>;
  transportAgencyId?: Maybe<Scalars['String']>;
  transporterId?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  movementId?: Maybe<Scalars['String']>;
  paymentId?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  tags?: Maybe<FileCreatetagsInput>;
  manufacturers?: Maybe<ManufacturerCreateManyWithoutImagesInput>;
  messages?: Maybe<MessageCreateManyWithoutImagesInput>;
  clients?: Maybe<ClientCreateManyWithoutImagesInput>;
  suppliers?: Maybe<SupplierCreateManyWithoutImagesInput>;
  products?: Maybe<ProductCreateManyWithoutImagesInput>;
  transportAgencies?: Maybe<TransportAgencyCreateManyWithoutImagesInput>;
  transporters?: Maybe<TransporterCreateManyWithoutImagesInput>;
  settings?: Maybe<SettingCreateManyWithoutLogoInput>;
  imageCategory?: Maybe<CategoryCreateManyWithoutImageInput>;
  bannerCategory?: Maybe<CategoryCreateManyWithoutBannerImageInput>;
  movements?: Maybe<MovementCreateManyWithoutDocumentsInput>;
  payments?: Maybe<PaymentCreateManyWithoutDocumentsInput>;
};

export type MovementCreateWithoutInvoiceInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  amount: Scalars['Float'];
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
  tags?: Maybe<MovementCreatetagsInput>;
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
  documents?: Maybe<FileCreateManyWithoutMovementsInput>;
  payments?: Maybe<PaymentCreateManyWithoutMovementInput>;
  consumablesMovements?: Maybe<MovementCreateManyWithoutConsumedFromInput>;
  consumedFrom?: Maybe<MovementCreateOneWithoutConsumablesMovementsInput>;
};

export type GroupCreateWithoutPaymentsInput = {
  tenantId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  taxRate?: Maybe<TaxRateCreateOneWithoutGroupInput>;
};

export type TaxRateCreateWithoutPaymentsInput = {
  tenantId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  amount: Scalars['Float'];
  isSameCountry: Scalars['Boolean'];
  isEU?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  tags?: Maybe<TaxRateCreatetagsInput>;
  group?: Maybe<GroupCreateOneWithoutTaxRateInput>;
  product?: Maybe<ProductCreateOneWithoutTaxRatesInput>;
};

export type MovementCreateWithoutPaymentsInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  amount: Scalars['Float'];
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
  tags?: Maybe<MovementCreatetagsInput>;
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
  documents?: Maybe<FileCreateManyWithoutMovementsInput>;
  consumablesMovements?: Maybe<MovementCreateManyWithoutConsumedFromInput>;
  consumedFrom?: Maybe<MovementCreateOneWithoutConsumablesMovementsInput>;
};

export type TransportAgencyCreateWithoutPaymentsInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  website?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  tags?: Maybe<TransportAgencyCreatetagsInput>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutTransportAgencyInput>;
  images?: Maybe<FileCreateManyWithoutTransportAgenciesInput>;
  transports?: Maybe<TransportCreateManyWithoutTransportAgencyInput>;
  transporters?: Maybe<TransporterCreateManyWithoutTransportAgencyInput>;
  address?: Maybe<AddressCreateOneWithoutTransportAgencyAddressInput>;
  billingAddress?: Maybe<AddressCreateOneWithoutTransportAgencyBillingAddressInput>;
  Address?: Maybe<AddressCreateOneWithoutTransportAgencyInput>;
  Interaction?: Maybe<InteractionCreateManyWithoutTransportAgencyInput>;
};

export type SupplierCreateWithoutPaymentsInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  supplierId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  tags?: Maybe<SupplierCreatetagsInput>;
  address?: Maybe<AddressCreateOneWithoutSupplierAddressInput>;
  billingAddress?: Maybe<AddressCreateOneWithoutSupplierBillingAddressInput>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutSupplierInput>;
  images?: Maybe<FileCreateManyWithoutSuppliersInput>;
  interactions?: Maybe<InteractionCreateManyWithoutSupplierInput>;
  inventories?: Maybe<InventoryCreateManyWithoutSupplierInput>;
  movements?: Maybe<MovementCreateManyWithoutSupplierInput>;
};

export type FileCreateWithoutPaymentsInput = {
  tenantId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  manufacturerId?: Maybe<Scalars['String']>;
  messageId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  supplierId?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['String']>;
  smallUrl?: Maybe<Scalars['String']>;
  transportAgencyId?: Maybe<Scalars['String']>;
  transporterId?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  movementId?: Maybe<Scalars['String']>;
  paymentId?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  tags?: Maybe<FileCreatetagsInput>;
  manufacturers?: Maybe<ManufacturerCreateManyWithoutImagesInput>;
  messages?: Maybe<MessageCreateManyWithoutImagesInput>;
  clients?: Maybe<ClientCreateManyWithoutImagesInput>;
  suppliers?: Maybe<SupplierCreateManyWithoutImagesInput>;
  products?: Maybe<ProductCreateManyWithoutImagesInput>;
  transportAgencies?: Maybe<TransportAgencyCreateManyWithoutImagesInput>;
  transporters?: Maybe<TransporterCreateManyWithoutImagesInput>;
  settings?: Maybe<SettingCreateManyWithoutLogoInput>;
  Invoice?: Maybe<InvoiceCreateManyWithoutPdfInput>;
  imageCategory?: Maybe<CategoryCreateManyWithoutImageInput>;
  bannerCategory?: Maybe<CategoryCreateManyWithoutBannerImageInput>;
  movements?: Maybe<MovementCreateManyWithoutDocumentsInput>;
};

export type BankAccountCreateWithoutPaymentsInput = {
  tenantId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type InteractionCreateWithoutPaymentInput = {
  tenantId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  action: Scalars['String'];
  userId: Scalars['String'];
  data: Scalars['String'];
  client?: Maybe<ClientCreateOneWithoutInteractionsInput>;
  supplier?: Maybe<SupplierCreateOneWithoutInteractionsInput>;
  movement?: Maybe<MovementCreateOneWithoutInteractionsInput>;
  product?: Maybe<ProductCreateOneWithoutInteractionsInput>;
  transportAgency?: Maybe<TransportAgencyCreateOneWithoutInteractionInput>;
  warehouse?: Maybe<WarehouseCreateOneWithoutInteractionInput>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type ContactPersonUpdatetagsInput = {
  set: Array<Scalars['String']>;
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

export type TransportAgencyUpdateOneWithoutInteractionInput = {
  create?: Maybe<TransportAgencyCreateWithoutInteractionInput>;
  connect?: Maybe<TransportAgencyWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<TransportAgencyUpdateWithoutInteractionDataInput>;
  upsert?: Maybe<TransportAgencyUpsertWithoutInteractionInput>;
};

export type WarehouseUpdateOneWithoutInteractionInput = {
  create?: Maybe<WarehouseCreateWithoutInteractionInput>;
  connect?: Maybe<WarehouseWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<WarehouseUpdateWithoutInteractionDataInput>;
  upsert?: Maybe<WarehouseUpsertWithoutInteractionInput>;
};

export type PaymentUpdateOneWithoutInteractionInput = {
  create?: Maybe<PaymentCreateWithoutInteractionInput>;
  connect?: Maybe<PaymentWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<PaymentUpdateWithoutInteractionDataInput>;
  upsert?: Maybe<PaymentUpsertWithoutInteractionInput>;
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
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  fiscalNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  language?: Maybe<NullableEnumLanguageFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  supplierId?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  withAccount?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<SupplierUpdatetagsInput>;
  billingAddress?: Maybe<AddressUpdateOneWithoutSupplierBillingAddressInput>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutSupplierInput>;
  images?: Maybe<FileUpdateManyWithoutSuppliersInput>;
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
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  fiscalNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  language?: Maybe<NullableEnumLanguageFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  supplierId?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  withAccount?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<SupplierUpdatetagsInput>;
  address?: Maybe<AddressUpdateOneWithoutSupplierAddressInput>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutSupplierInput>;
  images?: Maybe<FileUpdateManyWithoutSuppliersInput>;
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
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  fiscalNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  language?: Maybe<NullableEnumLanguageFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  clientId?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  withAccount?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  stripeId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<ClientUpdatetagsInput>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutClientInput>;
  images?: Maybe<FileUpdateManyWithoutClientsInput>;
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
  subDomain?: Maybe<StringFieldUpdateOperationsInput>;
  chat?: Maybe<BoolFieldUpdateOperationsInput>;
  currency?: Maybe<NullableStringFieldUpdateOperationsInput>;
  currencySymbol?: Maybe<NullableStringFieldUpdateOperationsInput>;
  defaultLanguage?: Maybe<NullableEnumLanguageFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  stripeCustomerId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  timezone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  plan?: Maybe<NullableEnumAccountPlanFieldUpdateOperationsInput>;
  transports?: Maybe<BoolFieldUpdateOperationsInput>;
  warehouses?: Maybe<BoolFieldUpdateOperationsInput>;
  consumables?: Maybe<BoolFieldUpdateOperationsInput>;
  shop?: Maybe<BoolFieldUpdateOperationsInput>;
  accounting?: Maybe<BoolFieldUpdateOperationsInput>;
  invoicing?: Maybe<BoolFieldUpdateOperationsInput>;
  fiscalNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  weightUnit?: Maybe<NullableStringFieldUpdateOperationsInput>;
  lengthUnit?: Maybe<NullableStringFieldUpdateOperationsInput>;
  shopPurchasedEmail?: Maybe<NullableStringFieldUpdateOperationsInput>;
  invoiceText?: Maybe<NullableStringFieldUpdateOperationsInput>;
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
  subDomain?: Maybe<StringFieldUpdateOperationsInput>;
  chat?: Maybe<BoolFieldUpdateOperationsInput>;
  currency?: Maybe<NullableStringFieldUpdateOperationsInput>;
  currencySymbol?: Maybe<NullableStringFieldUpdateOperationsInput>;
  defaultLanguage?: Maybe<NullableEnumLanguageFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  stripeCustomerId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  timezone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  plan?: Maybe<NullableEnumAccountPlanFieldUpdateOperationsInput>;
  transports?: Maybe<BoolFieldUpdateOperationsInput>;
  warehouses?: Maybe<BoolFieldUpdateOperationsInput>;
  consumables?: Maybe<BoolFieldUpdateOperationsInput>;
  shop?: Maybe<BoolFieldUpdateOperationsInput>;
  accounting?: Maybe<BoolFieldUpdateOperationsInput>;
  invoicing?: Maybe<BoolFieldUpdateOperationsInput>;
  fiscalNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  weightUnit?: Maybe<NullableStringFieldUpdateOperationsInput>;
  lengthUnit?: Maybe<NullableStringFieldUpdateOperationsInput>;
  shopPurchasedEmail?: Maybe<NullableStringFieldUpdateOperationsInput>;
  invoiceText?: Maybe<NullableStringFieldUpdateOperationsInput>;
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

export type TransportAgencyUpdateWithoutAddressDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<TransportAgencyUpdatetagsInput>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutTransportAgencyInput>;
  images?: Maybe<FileUpdateManyWithoutTransportAgenciesInput>;
  transports?: Maybe<TransportUpdateManyWithoutTransportAgencyInput>;
  transporters?: Maybe<TransporterUpdateManyWithoutTransportAgencyInput>;
  billingAddress?: Maybe<AddressUpdateOneWithoutTransportAgencyBillingAddressInput>;
  payments?: Maybe<PaymentUpdateManyWithoutTransportAgencyInput>;
  Address?: Maybe<AddressUpdateOneWithoutTransportAgencyInput>;
  Interaction?: Maybe<InteractionUpdateManyWithoutTransportAgencyInput>;
};

export type TransportAgencyUpsertWithoutAddressInput = {
  update: TransportAgencyUpdateWithoutAddressDataInput;
  create: TransportAgencyCreateWithoutAddressInput;
};

export type TransportAgencyUpdateWithoutBillingAddressDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<TransportAgencyUpdatetagsInput>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutTransportAgencyInput>;
  images?: Maybe<FileUpdateManyWithoutTransportAgenciesInput>;
  transports?: Maybe<TransportUpdateManyWithoutTransportAgencyInput>;
  transporters?: Maybe<TransporterUpdateManyWithoutTransportAgencyInput>;
  address?: Maybe<AddressUpdateOneWithoutTransportAgencyAddressInput>;
  payments?: Maybe<PaymentUpdateManyWithoutTransportAgencyInput>;
  Address?: Maybe<AddressUpdateOneWithoutTransportAgencyInput>;
  Interaction?: Maybe<InteractionUpdateManyWithoutTransportAgencyInput>;
};

export type TransportAgencyUpsertWithoutBillingAddressInput = {
  update: TransportAgencyUpdateWithoutBillingAddressDataInput;
  create: TransportAgencyCreateWithoutBillingAddressInput;
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
  AND?: Maybe<Array<ManufacturerScalarWhereInput>>;
  OR?: Maybe<Array<ManufacturerScalarWhereInput>>;
  NOT?: Maybe<Array<ManufacturerScalarWhereInput>>;
  tenantId?: Maybe<StringNullableFilter>;
  deleted?: Maybe<BoolFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringNullableFilter>;
  fiscalNumber?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  mobilePrefix?: Maybe<IntNullableFilter>;
  mobile?: Maybe<StringNullableFilter>;
  phonePrefix?: Maybe<IntNullableFilter>;
  phone?: Maybe<StringNullableFilter>;
  name?: Maybe<StringFilter>;
  website?: Maybe<StringNullableFilter>;
  addressId?: Maybe<StringNullableFilter>;
  source?: Maybe<StringNullableFilter>;
  notes?: Maybe<StringNullableFilter>;
  tags?: Maybe<StringNullableListFilter>;
};

export type ManufacturerUpsertWithWhereUniqueWithoutAddressInput = {
  where: ManufacturerWhereUniqueInput;
  update: ManufacturerUpdateWithoutAddressDataInput;
  create: ManufacturerCreateWithoutAddressInput;
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
  AND?: Maybe<Array<WarehouseScalarWhereInput>>;
  OR?: Maybe<Array<WarehouseScalarWhereInput>>;
  NOT?: Maybe<Array<WarehouseScalarWhereInput>>;
  tenantId?: Maybe<StringNullableFilter>;
  deleted?: Maybe<BoolFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  mobilePrefix?: Maybe<IntNullableFilter>;
  mobile?: Maybe<StringNullableFilter>;
  phonePrefix?: Maybe<IntNullableFilter>;
  phone?: Maybe<StringNullableFilter>;
  name?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  website?: Maybe<StringNullableFilter>;
  addressId?: Maybe<StringNullableFilter>;
  notes?: Maybe<StringNullableFilter>;
  tags?: Maybe<StringNullableListFilter>;
  phoneNumberId?: Maybe<StringNullableFilter>;
};

export type WarehouseUpsertWithWhereUniqueWithoutAddressInput = {
  where: WarehouseWhereUniqueInput;
  update: WarehouseUpdateWithoutAddressDataInput;
  create: WarehouseCreateWithoutAddressInput;
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
  AND?: Maybe<Array<TransportAgencyScalarWhereInput>>;
  OR?: Maybe<Array<TransportAgencyScalarWhereInput>>;
  NOT?: Maybe<Array<TransportAgencyScalarWhereInput>>;
  tenantId?: Maybe<StringNullableFilter>;
  deleted?: Maybe<BoolFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  mobilePrefix?: Maybe<IntNullableFilter>;
  mobile?: Maybe<StringNullableFilter>;
  phonePrefix?: Maybe<IntNullableFilter>;
  phone?: Maybe<StringNullableFilter>;
  name?: Maybe<StringFilter>;
  website?: Maybe<StringNullableFilter>;
  addressId?: Maybe<StringNullableFilter>;
  billingAddressId?: Maybe<StringNullableFilter>;
  source?: Maybe<StringNullableFilter>;
  notes?: Maybe<StringNullableFilter>;
  tags?: Maybe<StringNullableListFilter>;
};

export type TransportAgencyUpsertWithWhereUniqueWithoutAddressInput = {
  where: TransportAgencyWhereUniqueInput;
  update: TransportAgencyUpdateWithoutAddressDataInput;
  create: TransportAgencyCreateWithoutAddressInput;
};

export type ClientUpdateWithoutAddressDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  fiscalNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  language?: Maybe<NullableEnumLanguageFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  clientId?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  withAccount?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  stripeId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<ClientUpdatetagsInput>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutClientInput>;
  images?: Maybe<FileUpdateManyWithoutClientsInput>;
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

export type InvoiceUpdatetagsInput = {
  set: Array<Scalars['String']>;
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

export type EnumPaymentTypeFieldUpdateOperationsInput = {
  set?: Maybe<PaymentType>;
};

export type EnumPaymentStatusFieldUpdateOperationsInput = {
  set?: Maybe<PaymentStatus>;
};

export type PaymentUpdatetagsInput = {
  set: Array<Scalars['String']>;
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

export type FileUpdateManyWithoutPaymentsInput = {
  create?: Maybe<Array<FileCreateWithoutPaymentsInput>>;
  connect?: Maybe<Array<FileWhereUniqueInput>>;
  set?: Maybe<Array<FileWhereUniqueInput>>;
  disconnect?: Maybe<Array<FileWhereUniqueInput>>;
  delete?: Maybe<Array<FileWhereUniqueInput>>;
  update?: Maybe<Array<FileUpdateWithWhereUniqueWithoutPaymentsInput>>;
  updateMany?: Maybe<Array<FileUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<FileScalarWhereInput>>;
  upsert?: Maybe<Array<FileUpsertWithWhereUniqueWithoutPaymentsInput>>;
};

export type BankAccountUpdateOneWithoutPaymentsInput = {
  create?: Maybe<BankAccountCreateWithoutPaymentsInput>;
  connect?: Maybe<BankAccountWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<BankAccountUpdateWithoutPaymentsDataInput>;
  upsert?: Maybe<BankAccountUpsertWithoutPaymentsInput>;
};

export type InteractionUpdateManyWithoutPaymentInput = {
  create?: Maybe<Array<InteractionCreateWithoutPaymentInput>>;
  connect?: Maybe<Array<InteractionWhereUniqueInput>>;
  set?: Maybe<Array<InteractionWhereUniqueInput>>;
  disconnect?: Maybe<Array<InteractionWhereUniqueInput>>;
  delete?: Maybe<Array<InteractionWhereUniqueInput>>;
  update?: Maybe<Array<InteractionUpdateWithWhereUniqueWithoutPaymentInput>>;
  updateMany?: Maybe<Array<InteractionUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<InteractionScalarWhereInput>>;
  upsert?: Maybe<Array<InteractionUpsertWithWhereUniqueWithoutPaymentInput>>;
};

export type NestedEnumNotificationTypeFilter = {
  equals?: Maybe<NotificationType>;
  in?: Maybe<Array<NotificationType>>;
  notIn?: Maybe<Array<NotificationType>>;
  not?: Maybe<NestedEnumNotificationTypeFilter>;
};

export type NestedEnumTransportTypeFilter = {
  equals?: Maybe<TransportType>;
  in?: Maybe<Array<TransportType>>;
  notIn?: Maybe<Array<TransportType>>;
  not?: Maybe<NestedEnumTransportTypeFilter>;
};

export type ClientCreateWithoutContactPersonsInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  clientId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  tags?: Maybe<ClientCreatetagsInput>;
  images?: Maybe<FileCreateManyWithoutClientsInput>;
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
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  amount: Scalars['Float'];
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
  tags?: Maybe<MovementCreatetagsInput>;
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
  documents?: Maybe<FileCreateManyWithoutMovementsInput>;
  payments?: Maybe<PaymentCreateManyWithoutMovementInput>;
  consumablesMovements?: Maybe<MovementCreateManyWithoutConsumedFromInput>;
  consumedFrom?: Maybe<MovementCreateOneWithoutConsumablesMovementsInput>;
};

export type TransporterCreateWithoutTransportsInput = {
  tenantId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type: TransportType;
  notes?: Maybe<Scalars['String']>;
  tags?: Maybe<TransporterCreatetagsInput>;
  transportAgency?: Maybe<TransportAgencyCreateOneWithoutTransportersInput>;
  images?: Maybe<FileCreateManyWithoutTransportersInput>;
};

export type FileCreateWithoutTransportersInput = {
  tenantId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  manufacturerId?: Maybe<Scalars['String']>;
  messageId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  supplierId?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['String']>;
  smallUrl?: Maybe<Scalars['String']>;
  transportAgencyId?: Maybe<Scalars['String']>;
  transporterId?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  movementId?: Maybe<Scalars['String']>;
  paymentId?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  tags?: Maybe<FileCreatetagsInput>;
  manufacturers?: Maybe<ManufacturerCreateManyWithoutImagesInput>;
  messages?: Maybe<MessageCreateManyWithoutImagesInput>;
  clients?: Maybe<ClientCreateManyWithoutImagesInput>;
  suppliers?: Maybe<SupplierCreateManyWithoutImagesInput>;
  products?: Maybe<ProductCreateManyWithoutImagesInput>;
  transportAgencies?: Maybe<TransportAgencyCreateManyWithoutImagesInput>;
  settings?: Maybe<SettingCreateManyWithoutLogoInput>;
  Invoice?: Maybe<InvoiceCreateManyWithoutPdfInput>;
  imageCategory?: Maybe<CategoryCreateManyWithoutImageInput>;
  bannerCategory?: Maybe<CategoryCreateManyWithoutBannerImageInput>;
  movements?: Maybe<MovementCreateManyWithoutDocumentsInput>;
  payments?: Maybe<PaymentCreateManyWithoutDocumentsInput>;
};

export type TransportCreateWithoutTransporterInput = {
  tenantId?: Maybe<Scalars['String']>;
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
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  clientId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  tags?: Maybe<ClientCreatetagsInput>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutClientInput>;
  images?: Maybe<FileCreateManyWithoutClientsInput>;
  interactions?: Maybe<InteractionCreateManyWithoutClientInput>;
  inventories?: Maybe<InventoryCreateManyWithoutClientInput>;
  movements?: Maybe<MovementCreateManyWithoutClientInput>;
  reservations?: Maybe<ReservationCreateManyWithoutClientInput>;
  address?: Maybe<AddressCreateOneWithoutClientAddressInput>;
  billingAddress?: Maybe<AddressCreateOneWithoutClientBillingAddressInput>;
  invoices?: Maybe<InvoiceCreateManyWithoutClientInput>;
};

export type ClientCreateWithoutInteractionsInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  clientId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  tags?: Maybe<ClientCreatetagsInput>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutClientInput>;
  images?: Maybe<FileCreateManyWithoutClientsInput>;
  inventories?: Maybe<InventoryCreateManyWithoutClientInput>;
  movements?: Maybe<MovementCreateManyWithoutClientInput>;
  reservations?: Maybe<ReservationCreateManyWithoutClientInput>;
  address?: Maybe<AddressCreateOneWithoutClientAddressInput>;
  billingAddress?: Maybe<AddressCreateOneWithoutClientBillingAddressInput>;
  invoices?: Maybe<InvoiceCreateManyWithoutClientInput>;
  payments?: Maybe<PaymentCreateManyWithoutClientInput>;
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

export type EnumTransportTypeFieldUpdateOperationsInput = {
  set?: Maybe<TransportType>;
};

export type TransporterUpdatetagsInput = {
  set: Array<Scalars['String']>;
};

export type FileUpdateManyWithoutTransportersInput = {
  create?: Maybe<Array<FileCreateWithoutTransportersInput>>;
  connect?: Maybe<Array<FileWhereUniqueInput>>;
  set?: Maybe<Array<FileWhereUniqueInput>>;
  disconnect?: Maybe<Array<FileWhereUniqueInput>>;
  delete?: Maybe<Array<FileWhereUniqueInput>>;
  update?: Maybe<Array<FileUpdateWithWhereUniqueWithoutTransportersInput>>;
  updateMany?: Maybe<Array<FileUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<FileScalarWhereInput>>;
  upsert?: Maybe<Array<FileUpsertWithWhereUniqueWithoutTransportersInput>>;
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

export type ClientUpdateOneWithoutInteractionsInput = {
  create?: Maybe<ClientCreateWithoutInteractionsInput>;
  connect?: Maybe<ClientWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ClientUpdateWithoutInteractionsDataInput>;
  upsert?: Maybe<ClientUpsertWithoutInteractionsInput>;
};

export type ClientCreateWithoutInventoriesInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  clientId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  tags?: Maybe<ClientCreatetagsInput>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutClientInput>;
  images?: Maybe<FileCreateManyWithoutClientsInput>;
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
  tenantId?: Maybe<Scalars['String']>;
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
  tenantId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  scheduleEnd?: Maybe<Scalars['DateTime']>;
  scheduleStart?: Maybe<Scalars['DateTime']>;
  notes?: Maybe<Scalars['String']>;
  tags?: Maybe<ContactPersonCreatetagsInput>;
  supplier?: Maybe<SupplierCreateOneWithoutContactPersonsInput>;
  client?: Maybe<ClientCreateOneWithoutContactPersonsInput>;
  transportAgency?: Maybe<TransportAgencyCreateOneWithoutContactPersonsInput>;
  warehouse?: Maybe<WarehouseCreateOneWithoutContactPersonsInput>;
};

export type FileCreateWithoutManufacturersInput = {
  tenantId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  manufacturerId?: Maybe<Scalars['String']>;
  messageId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  supplierId?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['String']>;
  smallUrl?: Maybe<Scalars['String']>;
  transportAgencyId?: Maybe<Scalars['String']>;
  transporterId?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  movementId?: Maybe<Scalars['String']>;
  paymentId?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  tags?: Maybe<FileCreatetagsInput>;
  messages?: Maybe<MessageCreateManyWithoutImagesInput>;
  clients?: Maybe<ClientCreateManyWithoutImagesInput>;
  suppliers?: Maybe<SupplierCreateManyWithoutImagesInput>;
  products?: Maybe<ProductCreateManyWithoutImagesInput>;
  transportAgencies?: Maybe<TransportAgencyCreateManyWithoutImagesInput>;
  transporters?: Maybe<TransporterCreateManyWithoutImagesInput>;
  settings?: Maybe<SettingCreateManyWithoutLogoInput>;
  Invoice?: Maybe<InvoiceCreateManyWithoutPdfInput>;
  imageCategory?: Maybe<CategoryCreateManyWithoutImageInput>;
  bannerCategory?: Maybe<CategoryCreateManyWithoutBannerImageInput>;
  movements?: Maybe<MovementCreateManyWithoutDocumentsInput>;
  payments?: Maybe<PaymentCreateManyWithoutDocumentsInput>;
};

export type AddressCreateWithoutManufacturerInput = {
  tenantId?: Maybe<Scalars['String']>;
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
  transportAgencyAddress?: Maybe<TransportAgencyCreateOneWithoutAddressInput>;
  transportAgencyBillingAddress?: Maybe<TransportAgencyCreateOneWithoutBillingAddressInput>;
  Warehouse?: Maybe<WarehouseCreateManyWithoutAddressInput>;
  TransportAgency?: Maybe<TransportAgencyCreateManyWithoutAddressInput>;
};

export type ManufacturerCreateWithoutBatchesInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  website?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  tags?: Maybe<ManufacturerCreatetagsInput>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutManufacturerInput>;
  images?: Maybe<FileCreateManyWithoutManufacturersInput>;
  products?: Maybe<ProductCreateManyWithoutManufacturerInput>;
  address?: Maybe<AddressCreateOneWithoutManufacturerInput>;
};

export type InventoryCreateWithoutBatchInput = {
  tenantId?: Maybe<Scalars['String']>;
  amount: Scalars['Float'];
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
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  amount: Scalars['Float'];
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
  tags?: Maybe<MovementCreatetagsInput>;
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
  documents?: Maybe<FileCreateManyWithoutMovementsInput>;
  payments?: Maybe<PaymentCreateManyWithoutMovementInput>;
  consumablesMovements?: Maybe<MovementCreateManyWithoutConsumedFromInput>;
  consumedFrom?: Maybe<MovementCreateOneWithoutConsumablesMovementsInput>;
};

export type FileCreateWithoutImageCategoryInput = {
  tenantId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  manufacturerId?: Maybe<Scalars['String']>;
  messageId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  supplierId?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['String']>;
  smallUrl?: Maybe<Scalars['String']>;
  transportAgencyId?: Maybe<Scalars['String']>;
  transporterId?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  movementId?: Maybe<Scalars['String']>;
  paymentId?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  tags?: Maybe<FileCreatetagsInput>;
  manufacturers?: Maybe<ManufacturerCreateManyWithoutImagesInput>;
  messages?: Maybe<MessageCreateManyWithoutImagesInput>;
  clients?: Maybe<ClientCreateManyWithoutImagesInput>;
  suppliers?: Maybe<SupplierCreateManyWithoutImagesInput>;
  products?: Maybe<ProductCreateManyWithoutImagesInput>;
  transportAgencies?: Maybe<TransportAgencyCreateManyWithoutImagesInput>;
  transporters?: Maybe<TransporterCreateManyWithoutImagesInput>;
  settings?: Maybe<SettingCreateManyWithoutLogoInput>;
  Invoice?: Maybe<InvoiceCreateManyWithoutPdfInput>;
  bannerCategory?: Maybe<CategoryCreateManyWithoutBannerImageInput>;
  movements?: Maybe<MovementCreateManyWithoutDocumentsInput>;
  payments?: Maybe<PaymentCreateManyWithoutDocumentsInput>;
};

export type FileCreateWithoutBannerCategoryInput = {
  tenantId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  manufacturerId?: Maybe<Scalars['String']>;
  messageId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  supplierId?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['String']>;
  smallUrl?: Maybe<Scalars['String']>;
  transportAgencyId?: Maybe<Scalars['String']>;
  transporterId?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  movementId?: Maybe<Scalars['String']>;
  paymentId?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  tags?: Maybe<FileCreatetagsInput>;
  manufacturers?: Maybe<ManufacturerCreateManyWithoutImagesInput>;
  messages?: Maybe<MessageCreateManyWithoutImagesInput>;
  clients?: Maybe<ClientCreateManyWithoutImagesInput>;
  suppliers?: Maybe<SupplierCreateManyWithoutImagesInput>;
  products?: Maybe<ProductCreateManyWithoutImagesInput>;
  transportAgencies?: Maybe<TransportAgencyCreateManyWithoutImagesInput>;
  transporters?: Maybe<TransporterCreateManyWithoutImagesInput>;
  settings?: Maybe<SettingCreateManyWithoutLogoInput>;
  Invoice?: Maybe<InvoiceCreateManyWithoutPdfInput>;
  imageCategory?: Maybe<CategoryCreateManyWithoutImageInput>;
  movements?: Maybe<MovementCreateManyWithoutDocumentsInput>;
  payments?: Maybe<PaymentCreateManyWithoutDocumentsInput>;
};

export type CategoryCreateWithoutCategoryInput = {
  tenantId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<FileCreateOneWithoutImageCategoryInput>;
  bannerImage?: Maybe<FileCreateOneWithoutBannerCategoryInput>;
  products?: Maybe<ProductCreateManyWithoutCategoriesInput>;
  subCategories?: Maybe<CategoryCreateManyWithoutCategoryInput>;
};

export type CategoryCreateWithoutSubCategoriesInput = {
  tenantId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<FileCreateOneWithoutImageCategoryInput>;
  bannerImage?: Maybe<FileCreateOneWithoutBannerCategoryInput>;
  products?: Maybe<ProductCreateManyWithoutCategoriesInput>;
  Category?: Maybe<CategoryCreateOneWithoutSubCategoriesInput>;
};

export type ProductCreateWithoutConsumersInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  productId: Scalars['Int'];
  ASIN?: Maybe<Scalars['String']>;
  EAN?: Maybe<Scalars['String']>;
  ISBN?: Maybe<Scalars['String']>;
  UPC?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  material?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  isListed?: Maybe<Scalars['Boolean']>;
  notes?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Float']>;
  tags?: Maybe<ProductCreatetagsInput>;
  dimensions?: Maybe<DimensionCreateOneWithoutProductInput>;
  manufacturer?: Maybe<ManufacturerCreateOneWithoutProductsInput>;
  batches?: Maybe<BatchCreateManyWithoutProductInput>;
  images?: Maybe<FileCreateManyWithoutProductsInput>;
  interactions?: Maybe<InteractionCreateManyWithoutProductInput>;
  inventories?: Maybe<InventoryCreateManyWithoutProductInput>;
  movements?: Maybe<MovementCreateManyWithoutProductInput>;
  notifications?: Maybe<NotificationCreateManyWithoutProductInput>;
  units?: Maybe<UnitCreateManyWithoutProductInput>;
  taxRates?: Maybe<TaxRateCreateManyWithoutProductInput>;
  variants?: Maybe<ProductCreateManyWithoutVariantProductInput>;
  variantProduct?: Maybe<ProductCreateManyWithoutVariantsInput>;
  categories?: Maybe<CategoryCreateManyWithoutProductsInput>;
  consumables?: Maybe<ConsumableCreateManyWithoutConsumerInput>;
};

export type ProductCreateWithoutConsumablesInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  productId: Scalars['Int'];
  ASIN?: Maybe<Scalars['String']>;
  EAN?: Maybe<Scalars['String']>;
  ISBN?: Maybe<Scalars['String']>;
  UPC?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  material?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  isListed?: Maybe<Scalars['Boolean']>;
  notes?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Float']>;
  tags?: Maybe<ProductCreatetagsInput>;
  dimensions?: Maybe<DimensionCreateOneWithoutProductInput>;
  manufacturer?: Maybe<ManufacturerCreateOneWithoutProductsInput>;
  batches?: Maybe<BatchCreateManyWithoutProductInput>;
  images?: Maybe<FileCreateManyWithoutProductsInput>;
  interactions?: Maybe<InteractionCreateManyWithoutProductInput>;
  inventories?: Maybe<InventoryCreateManyWithoutProductInput>;
  movements?: Maybe<MovementCreateManyWithoutProductInput>;
  notifications?: Maybe<NotificationCreateManyWithoutProductInput>;
  units?: Maybe<UnitCreateManyWithoutProductInput>;
  taxRates?: Maybe<TaxRateCreateManyWithoutProductInput>;
  variants?: Maybe<ProductCreateManyWithoutVariantProductInput>;
  variantProduct?: Maybe<ProductCreateManyWithoutVariantsInput>;
  categories?: Maybe<CategoryCreateManyWithoutProductsInput>;
  consumers?: Maybe<ConsumableCreateManyWithoutProductInput>;
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

export type FileUpdateWithWhereUniqueWithoutManufacturersInput = {
  where: FileWhereUniqueInput;
  data: FileUpdateWithoutManufacturersDataInput;
};

export type FileUpsertWithWhereUniqueWithoutManufacturersInput = {
  where: FileWhereUniqueInput;
  update: FileUpdateWithoutManufacturersDataInput;
  create: FileCreateWithoutManufacturersInput;
};

export type AddressUpdateWithoutManufacturerDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  addressLine1?: Maybe<NullableStringFieldUpdateOperationsInput>;
  addressLine2?: Maybe<NullableStringFieldUpdateOperationsInput>;
  city?: Maybe<NullableStringFieldUpdateOperationsInput>;
  country?: Maybe<NullableStringFieldUpdateOperationsInput>;
  state?: Maybe<NullableStringFieldUpdateOperationsInput>;
  zip?: Maybe<NullableStringFieldUpdateOperationsInput>;
  supplierAddress?: Maybe<SupplierUpdateOneWithoutAddressInput>;
  supplierBillingAddress?: Maybe<SupplierUpdateOneWithoutBillingAddressInput>;
  clientAddress?: Maybe<ClientUpdateOneWithoutAddressInput>;
  clientBillingAddress?: Maybe<ClientUpdateOneWithoutBillingAddressInput>;
  address?: Maybe<SettingUpdateOneWithoutAddressInput>;
  billingAddress?: Maybe<SettingUpdateOneWithoutBillingAddressInput>;
  transportAgencyAddress?: Maybe<TransportAgencyUpdateOneWithoutAddressInput>;
  transportAgencyBillingAddress?: Maybe<TransportAgencyUpdateOneWithoutBillingAddressInput>;
  Warehouse?: Maybe<WarehouseUpdateManyWithoutAddressInput>;
  TransportAgency?: Maybe<TransportAgencyUpdateManyWithoutAddressInput>;
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

export type ProductUpdateOneRequiredWithoutConsumersInput = {
  create?: Maybe<ProductCreateWithoutConsumersInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
  update?: Maybe<ProductUpdateWithoutConsumersDataInput>;
  upsert?: Maybe<ProductUpsertWithoutConsumersInput>;
};

export type ProductUpdateOneRequiredWithoutConsumablesInput = {
  create?: Maybe<ProductCreateWithoutConsumablesInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
  update?: Maybe<ProductUpdateWithoutConsumablesDataInput>;
  upsert?: Maybe<ProductUpsertWithoutConsumablesInput>;
};

export type ManufacturerUpdateWithWhereUniqueWithoutImagesInput = {
  where: ManufacturerWhereUniqueInput;
  data: ManufacturerUpdateWithoutImagesDataInput;
};

export type ManufacturerUpsertWithWhereUniqueWithoutImagesInput = {
  where: ManufacturerWhereUniqueInput;
  update: ManufacturerUpdateWithoutImagesDataInput;
  create: ManufacturerCreateWithoutImagesInput;
};

export type MessageUpdateWithWhereUniqueWithoutImagesInput = {
  where: MessageWhereUniqueInput;
  data: MessageUpdateWithoutImagesDataInput;
};

export type MessageUpsertWithWhereUniqueWithoutImagesInput = {
  where: MessageWhereUniqueInput;
  update: MessageUpdateWithoutImagesDataInput;
  create: MessageCreateWithoutImagesInput;
};

export type ClientUpdateWithWhereUniqueWithoutImagesInput = {
  where: ClientWhereUniqueInput;
  data: ClientUpdateWithoutImagesDataInput;
};

export type ClientUpdateManyWithWhereNestedInput = {
  where: ClientScalarWhereInput;
  data: ClientUpdateManyDataInput;
};

export type ClientScalarWhereInput = {
  AND?: Maybe<Array<ClientScalarWhereInput>>;
  OR?: Maybe<Array<ClientScalarWhereInput>>;
  NOT?: Maybe<Array<ClientScalarWhereInput>>;
  tenantId?: Maybe<StringNullableFilter>;
  deleted?: Maybe<BoolFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringNullableFilter>;
  fiscalNumber?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  language?: Maybe<EnumLanguageNullableFilter>;
  mobilePrefix?: Maybe<IntNullableFilter>;
  mobile?: Maybe<StringNullableFilter>;
  phonePrefix?: Maybe<IntNullableFilter>;
  phone?: Maybe<StringNullableFilter>;
  name?: Maybe<StringFilter>;
  clientId?: Maybe<IntFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  website?: Maybe<StringNullableFilter>;
  withAccount?: Maybe<BoolNullableFilter>;
  addressId?: Maybe<StringNullableFilter>;
  billingAddressId?: Maybe<StringNullableFilter>;
  source?: Maybe<StringNullableFilter>;
  notes?: Maybe<StringNullableFilter>;
  tags?: Maybe<StringNullableListFilter>;
  stripeId?: Maybe<StringNullableFilter>;
};

export type ClientUpsertWithWhereUniqueWithoutImagesInput = {
  where: ClientWhereUniqueInput;
  update: ClientUpdateWithoutImagesDataInput;
  create: ClientCreateWithoutImagesInput;
};

export type SupplierUpdateWithWhereUniqueWithoutImagesInput = {
  where: SupplierWhereUniqueInput;
  data: SupplierUpdateWithoutImagesDataInput;
};

export type SupplierUpdateManyWithWhereNestedInput = {
  where: SupplierScalarWhereInput;
  data: SupplierUpdateManyDataInput;
};

export type SupplierScalarWhereInput = {
  AND?: Maybe<Array<SupplierScalarWhereInput>>;
  OR?: Maybe<Array<SupplierScalarWhereInput>>;
  NOT?: Maybe<Array<SupplierScalarWhereInput>>;
  tenantId?: Maybe<StringNullableFilter>;
  deleted?: Maybe<BoolFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringNullableFilter>;
  fiscalNumber?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  language?: Maybe<EnumLanguageNullableFilter>;
  mobilePrefix?: Maybe<IntNullableFilter>;
  mobile?: Maybe<StringNullableFilter>;
  phonePrefix?: Maybe<IntNullableFilter>;
  phone?: Maybe<StringNullableFilter>;
  name?: Maybe<StringFilter>;
  supplierId?: Maybe<IntFilter>;
  addressId?: Maybe<StringNullableFilter>;
  billingAddressId?: Maybe<StringNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  website?: Maybe<StringNullableFilter>;
  withAccount?: Maybe<BoolNullableFilter>;
  source?: Maybe<StringNullableFilter>;
  notes?: Maybe<StringNullableFilter>;
  tags?: Maybe<StringNullableListFilter>;
};

export type SupplierUpsertWithWhereUniqueWithoutImagesInput = {
  where: SupplierWhereUniqueInput;
  update: SupplierUpdateWithoutImagesDataInput;
  create: SupplierCreateWithoutImagesInput;
};

export type ProductUpdateWithWhereUniqueWithoutImagesInput = {
  where: ProductWhereUniqueInput;
  data: ProductUpdateWithoutImagesDataInput;
};

export type ProductUpsertWithWhereUniqueWithoutImagesInput = {
  where: ProductWhereUniqueInput;
  update: ProductUpdateWithoutImagesDataInput;
  create: ProductCreateWithoutImagesInput;
};

export type TransportAgencyUpdateWithWhereUniqueWithoutImagesInput = {
  where: TransportAgencyWhereUniqueInput;
  data: TransportAgencyUpdateWithoutImagesDataInput;
};

export type TransportAgencyUpsertWithWhereUniqueWithoutImagesInput = {
  where: TransportAgencyWhereUniqueInput;
  update: TransportAgencyUpdateWithoutImagesDataInput;
  create: TransportAgencyCreateWithoutImagesInput;
};

export type TransporterUpdateWithWhereUniqueWithoutImagesInput = {
  where: TransporterWhereUniqueInput;
  data: TransporterUpdateWithoutImagesDataInput;
};

export type TransporterUpsertWithWhereUniqueWithoutImagesInput = {
  where: TransporterWhereUniqueInput;
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

export type MovementUpdateWithWhereUniqueWithoutDocumentsInput = {
  where: MovementWhereUniqueInput;
  data: MovementUpdateWithoutDocumentsDataInput;
};

export type MovementUpsertWithWhereUniqueWithoutDocumentsInput = {
  where: MovementWhereUniqueInput;
  update: MovementUpdateWithoutDocumentsDataInput;
  create: MovementCreateWithoutDocumentsInput;
};

export type PaymentUpdateWithWhereUniqueWithoutDocumentsInput = {
  where: PaymentWhereUniqueInput;
  data: PaymentUpdateWithoutDocumentsDataInput;
};

export type PaymentUpsertWithWhereUniqueWithoutDocumentsInput = {
  where: PaymentWhereUniqueInput;
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
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<StringFieldUpdateOperationsInput>;
  action?: Maybe<StringFieldUpdateOperationsInput>;
  userId?: Maybe<StringFieldUpdateOperationsInput>;
  data?: Maybe<StringFieldUpdateOperationsInput>;
  client?: Maybe<ClientUpdateOneWithoutInteractionsInput>;
  supplier?: Maybe<SupplierUpdateOneWithoutInteractionsInput>;
  product?: Maybe<ProductUpdateOneWithoutInteractionsInput>;
  transportAgency?: Maybe<TransportAgencyUpdateOneWithoutInteractionInput>;
  warehouse?: Maybe<WarehouseUpdateOneWithoutInteractionInput>;
  payment?: Maybe<PaymentUpdateOneWithoutInteractionInput>;
};

export type ClientUpdateOneRequiredWithoutReservationsInput = {
  create?: Maybe<ClientCreateWithoutReservationsInput>;
  connect?: Maybe<ClientWhereUniqueInput>;
  update?: Maybe<ClientUpdateWithoutReservationsDataInput>;
  upsert?: Maybe<ClientUpsertWithoutReservationsInput>;
};

export type TransportUpdateWithoutMovementDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  arrivalDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  arrivalPoint?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  price?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  transportAgency?: Maybe<TransportAgencyUpdateOneWithoutTransportsInput>;
  transporter?: Maybe<TransporterUpdateOneWithoutTransportsInput>;
};

export type ClientUpdateOneRequiredWithoutInvoicesInput = {
  create?: Maybe<ClientCreateWithoutInvoicesInput>;
  connect?: Maybe<ClientWhereUniqueInput>;
  update?: Maybe<ClientUpdateWithoutInvoicesDataInput>;
  upsert?: Maybe<ClientUpsertWithoutInvoicesInput>;
};

export type FileUpdateWithoutMovementsDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  manufacturerId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  messageId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  supplierId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  clientId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  smallUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  transportAgencyId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  transporterId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
  movementId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  paymentId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  order?: Maybe<NullableIntFieldUpdateOperationsInput>;
  tags?: Maybe<FileUpdatetagsInput>;
  manufacturers?: Maybe<ManufacturerUpdateManyWithoutImagesInput>;
  messages?: Maybe<MessageUpdateManyWithoutImagesInput>;
  clients?: Maybe<ClientUpdateManyWithoutImagesInput>;
  suppliers?: Maybe<SupplierUpdateManyWithoutImagesInput>;
  products?: Maybe<ProductUpdateManyWithoutImagesInput>;
  transportAgencies?: Maybe<TransportAgencyUpdateManyWithoutImagesInput>;
  transporters?: Maybe<TransporterUpdateManyWithoutImagesInput>;
  settings?: Maybe<SettingUpdateManyWithoutLogoInput>;
  Invoice?: Maybe<InvoiceUpdateManyWithoutPdfInput>;
  imageCategory?: Maybe<CategoryUpdateManyWithoutImageInput>;
  bannerCategory?: Maybe<CategoryUpdateManyWithoutBannerImageInput>;
  payments?: Maybe<PaymentUpdateManyWithoutDocumentsInput>;
};

export type PaymentUpdateWithoutMovementDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  paymentId?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  type?: Maybe<EnumPaymentTypeFieldUpdateOperationsInput>;
  status?: Maybe<EnumPaymentStatusFieldUpdateOperationsInput>;
  dueDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  date?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  concept?: Maybe<NullableStringFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  currency?: Maybe<StringFieldUpdateOperationsInput>;
  recipient?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  paymentMethod?: Maybe<NullableStringFieldUpdateOperationsInput>;
  stripePaymentIntentId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  stripeClientSecret?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<PaymentUpdatetagsInput>;
  group?: Maybe<GroupUpdateOneWithoutPaymentsInput>;
  taxRate?: Maybe<TaxRateUpdateOneWithoutPaymentsInput>;
  transportAgency?: Maybe<TransportAgencyUpdateOneWithoutPaymentsInput>;
  client?: Maybe<ClientUpdateOneWithoutPaymentsInput>;
  supplier?: Maybe<SupplierUpdateOneWithoutPaymentsInput>;
  documents?: Maybe<FileUpdateManyWithoutPaymentsInput>;
  bankAccount?: Maybe<BankAccountUpdateOneWithoutPaymentsInput>;
  Interaction?: Maybe<InteractionUpdateManyWithoutPaymentInput>;
};

export type MovementUpdateWithoutConsumedFromDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  date?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  status?: Maybe<NullableEnumMovementStatusFieldUpdateOperationsInput>;
  movementId?: Maybe<IntFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  sendMail?: Maybe<BoolFieldUpdateOperationsInput>;
  storageNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  type?: Maybe<EnumMovementTypeFieldUpdateOperationsInput>;
  unitPrice?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  invoiceId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<MovementUpdatetagsInput>;
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
  documents?: Maybe<FileUpdateManyWithoutMovementsInput>;
  payments?: Maybe<PaymentUpdateManyWithoutMovementInput>;
  consumablesMovements?: Maybe<MovementUpdateManyWithoutConsumedFromInput>;
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
  AND?: Maybe<Array<SettingScalarWhereInput>>;
  OR?: Maybe<Array<SettingScalarWhereInput>>;
  NOT?: Maybe<Array<SettingScalarWhereInput>>;
  subDomain?: Maybe<StringFilter>;
  chat?: Maybe<BoolFilter>;
  currency?: Maybe<StringNullableFilter>;
  currencySymbol?: Maybe<StringNullableFilter>;
  defaultLanguage?: Maybe<EnumLanguageNullableFilter>;
  id?: Maybe<StringFilter>;
  stripeCustomerId?: Maybe<StringNullableFilter>;
  logoId?: Maybe<StringNullableFilter>;
  manufacturerFields?: Maybe<EnumManufacturerFieldsNullableListFilter>;
  movementFields?: Maybe<EnumMovementFieldsNullableListFilter>;
  name?: Maybe<StringFilter>;
  supplierFields?: Maybe<EnumSupplierFieldsNullableListFilter>;
  clientFields?: Maybe<EnumClientFieldsNullableListFilter>;
  productFields?: Maybe<EnumProductFieldsNullableListFilter>;
  timezone?: Maybe<StringNullableFilter>;
  transportAgencyFields?: Maybe<EnumTransportAgencyFieldsNullableListFilter>;
  transportFields?: Maybe<EnumTransportFieldsNullableListFilter>;
  transporterFields?: Maybe<EnumTransporterFieldsNullableListFilter>;
  paymentFields?: Maybe<EnumPaymentFieldsNullableListFilter>;
  warehouseFields?: Maybe<EnumWarehouseFieldsNullableListFilter>;
  plan?: Maybe<EnumAccountPlanNullableFilter>;
  transports?: Maybe<BoolFilter>;
  warehouses?: Maybe<BoolFilter>;
  consumables?: Maybe<BoolFilter>;
  shop?: Maybe<BoolFilter>;
  accounting?: Maybe<BoolFilter>;
  invoicing?: Maybe<BoolFilter>;
  addressId?: Maybe<StringNullableFilter>;
  billingAddressId?: Maybe<StringNullableFilter>;
  fiscalNumber?: Maybe<StringNullableFilter>;
  email?: Maybe<StringNullableFilter>;
  mobilePrefix?: Maybe<IntNullableFilter>;
  mobile?: Maybe<StringNullableFilter>;
  phonePrefix?: Maybe<IntNullableFilter>;
  phone?: Maybe<StringNullableFilter>;
  website?: Maybe<StringNullableFilter>;
  weightUnit?: Maybe<StringNullableFilter>;
  lengthUnit?: Maybe<StringNullableFilter>;
  shopPurchasedEmail?: Maybe<StringNullableFilter>;
  invoiceText?: Maybe<StringNullableFilter>;
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
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  fiscalNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<ManufacturerUpdatetagsInput>;
  batches?: Maybe<BatchUpdateManyWithoutManufacturerInput>;
  images?: Maybe<FileUpdateManyWithoutManufacturersInput>;
  products?: Maybe<ProductUpdateManyWithoutManufacturerInput>;
  address?: Maybe<AddressUpdateOneWithoutManufacturerInput>;
};

export type ManufacturerUpsertWithoutContactPersonsInput = {
  update: ManufacturerUpdateWithoutContactPersonsDataInput;
  create: ManufacturerCreateWithoutContactPersonsInput;
};

export type SupplierUpdateWithoutContactPersonsDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  fiscalNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  language?: Maybe<NullableEnumLanguageFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  supplierId?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  withAccount?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<SupplierUpdatetagsInput>;
  address?: Maybe<AddressUpdateOneWithoutSupplierAddressInput>;
  billingAddress?: Maybe<AddressUpdateOneWithoutSupplierBillingAddressInput>;
  images?: Maybe<FileUpdateManyWithoutSuppliersInput>;
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
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<TransportAgencyUpdatetagsInput>;
  images?: Maybe<FileUpdateManyWithoutTransportAgenciesInput>;
  transports?: Maybe<TransportUpdateManyWithoutTransportAgencyInput>;
  transporters?: Maybe<TransporterUpdateManyWithoutTransportAgencyInput>;
  address?: Maybe<AddressUpdateOneWithoutTransportAgencyAddressInput>;
  billingAddress?: Maybe<AddressUpdateOneWithoutTransportAgencyBillingAddressInput>;
  payments?: Maybe<PaymentUpdateManyWithoutTransportAgencyInput>;
  Address?: Maybe<AddressUpdateOneWithoutTransportAgencyInput>;
  Interaction?: Maybe<InteractionUpdateManyWithoutTransportAgencyInput>;
};

export type TransportAgencyUpsertWithoutContactPersonsInput = {
  update: TransportAgencyUpdateWithoutContactPersonsDataInput;
  create: TransportAgencyCreateWithoutContactPersonsInput;
};

export type WarehouseUpdateWithoutContactPersonsDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phoneNumberId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<WarehouseUpdatetagsInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutWarehouseInput>;
  movements?: Maybe<MovementUpdateManyWithoutWarehouseInput>;
  address?: Maybe<AddressUpdateOneWithoutWarehouseInput>;
  Notification?: Maybe<NotificationUpdateManyWithoutWarehouseInput>;
  Interaction?: Maybe<InteractionUpdateManyWithoutWarehouseInput>;
};

export type WarehouseUpsertWithoutContactPersonsInput = {
  update: WarehouseUpdateWithoutContactPersonsDataInput;
  create: WarehouseCreateWithoutContactPersonsInput;
};

export type SupplierUpdateWithoutInteractionsDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  fiscalNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  language?: Maybe<NullableEnumLanguageFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  supplierId?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  withAccount?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<SupplierUpdatetagsInput>;
  address?: Maybe<AddressUpdateOneWithoutSupplierAddressInput>;
  billingAddress?: Maybe<AddressUpdateOneWithoutSupplierBillingAddressInput>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutSupplierInput>;
  images?: Maybe<FileUpdateManyWithoutSuppliersInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutSupplierInput>;
  movements?: Maybe<MovementUpdateManyWithoutSupplierInput>;
  payments?: Maybe<PaymentUpdateManyWithoutSupplierInput>;
};

export type SupplierUpsertWithoutInteractionsInput = {
  update: SupplierUpdateWithoutInteractionsDataInput;
  create: SupplierCreateWithoutInteractionsInput;
};

export type MovementUpdateWithoutInteractionsDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  date?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  status?: Maybe<NullableEnumMovementStatusFieldUpdateOperationsInput>;
  movementId?: Maybe<IntFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  sendMail?: Maybe<BoolFieldUpdateOperationsInput>;
  storageNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  type?: Maybe<EnumMovementTypeFieldUpdateOperationsInput>;
  unitPrice?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  invoiceId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<MovementUpdatetagsInput>;
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
  documents?: Maybe<FileUpdateManyWithoutMovementsInput>;
  payments?: Maybe<PaymentUpdateManyWithoutMovementInput>;
  consumablesMovements?: Maybe<MovementUpdateManyWithoutConsumedFromInput>;
  consumedFrom?: Maybe<MovementUpdateOneWithoutConsumablesMovementsInput>;
};

export type MovementUpsertWithoutInteractionsInput = {
  update: MovementUpdateWithoutInteractionsDataInput;
  create: MovementCreateWithoutInteractionsInput;
};

export type ProductUpdateWithoutInteractionsDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  productId?: Maybe<IntFieldUpdateOperationsInput>;
  ASIN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  EAN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  ISBN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  UPC?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  material?: Maybe<NullableStringFieldUpdateOperationsInput>;
  color?: Maybe<NullableStringFieldUpdateOperationsInput>;
  weight?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isListed?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  quantity?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  tags?: Maybe<ProductUpdatetagsInput>;
  dimensions?: Maybe<DimensionUpdateOneWithoutProductInput>;
  manufacturer?: Maybe<ManufacturerUpdateOneWithoutProductsInput>;
  batches?: Maybe<BatchUpdateManyWithoutProductInput>;
  images?: Maybe<FileUpdateManyWithoutProductsInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutProductInput>;
  movements?: Maybe<MovementUpdateManyWithoutProductInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutProductInput>;
  units?: Maybe<UnitUpdateManyWithoutProductInput>;
  taxRates?: Maybe<TaxRateUpdateManyWithoutProductInput>;
  variants?: Maybe<ProductUpdateManyWithoutVariantProductInput>;
  variantProduct?: Maybe<ProductUpdateManyWithoutVariantsInput>;
  categories?: Maybe<CategoryUpdateManyWithoutProductsInput>;
  consumables?: Maybe<ConsumableUpdateManyWithoutConsumerInput>;
  consumers?: Maybe<ConsumableUpdateManyWithoutProductInput>;
};

export type ProductUpsertWithoutInteractionsInput = {
  update: ProductUpdateWithoutInteractionsDataInput;
  create: ProductCreateWithoutInteractionsInput;
};

export type TransportAgencyUpdateWithoutInteractionDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<TransportAgencyUpdatetagsInput>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutTransportAgencyInput>;
  images?: Maybe<FileUpdateManyWithoutTransportAgenciesInput>;
  transports?: Maybe<TransportUpdateManyWithoutTransportAgencyInput>;
  transporters?: Maybe<TransporterUpdateManyWithoutTransportAgencyInput>;
  address?: Maybe<AddressUpdateOneWithoutTransportAgencyAddressInput>;
  billingAddress?: Maybe<AddressUpdateOneWithoutTransportAgencyBillingAddressInput>;
  payments?: Maybe<PaymentUpdateManyWithoutTransportAgencyInput>;
  Address?: Maybe<AddressUpdateOneWithoutTransportAgencyInput>;
};

export type TransportAgencyUpsertWithoutInteractionInput = {
  update: TransportAgencyUpdateWithoutInteractionDataInput;
  create: TransportAgencyCreateWithoutInteractionInput;
};

export type WarehouseUpdateWithoutInteractionDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phoneNumberId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<WarehouseUpdatetagsInput>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutWarehouseInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutWarehouseInput>;
  movements?: Maybe<MovementUpdateManyWithoutWarehouseInput>;
  address?: Maybe<AddressUpdateOneWithoutWarehouseInput>;
  Notification?: Maybe<NotificationUpdateManyWithoutWarehouseInput>;
};

export type WarehouseUpsertWithoutInteractionInput = {
  update: WarehouseUpdateWithoutInteractionDataInput;
  create: WarehouseCreateWithoutInteractionInput;
};

export type PaymentUpdateWithoutInteractionDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  paymentId?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  type?: Maybe<EnumPaymentTypeFieldUpdateOperationsInput>;
  status?: Maybe<EnumPaymentStatusFieldUpdateOperationsInput>;
  dueDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  date?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  concept?: Maybe<NullableStringFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  currency?: Maybe<StringFieldUpdateOperationsInput>;
  recipient?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  paymentMethod?: Maybe<NullableStringFieldUpdateOperationsInput>;
  stripePaymentIntentId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  stripeClientSecret?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<PaymentUpdatetagsInput>;
  group?: Maybe<GroupUpdateOneWithoutPaymentsInput>;
  taxRate?: Maybe<TaxRateUpdateOneWithoutPaymentsInput>;
  movement?: Maybe<MovementUpdateOneWithoutPaymentsInput>;
  transportAgency?: Maybe<TransportAgencyUpdateOneWithoutPaymentsInput>;
  client?: Maybe<ClientUpdateOneWithoutPaymentsInput>;
  supplier?: Maybe<SupplierUpdateOneWithoutPaymentsInput>;
  documents?: Maybe<FileUpdateManyWithoutPaymentsInput>;
  bankAccount?: Maybe<BankAccountUpdateOneWithoutPaymentsInput>;
};

export type PaymentUpsertWithoutInteractionInput = {
  update: PaymentUpdateWithoutInteractionDataInput;
  create: PaymentCreateWithoutInteractionInput;
};

export type SupplierUpdateWithoutInventoriesDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  fiscalNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  language?: Maybe<NullableEnumLanguageFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  supplierId?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  withAccount?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<SupplierUpdatetagsInput>;
  address?: Maybe<AddressUpdateOneWithoutSupplierAddressInput>;
  billingAddress?: Maybe<AddressUpdateOneWithoutSupplierBillingAddressInput>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutSupplierInput>;
  images?: Maybe<FileUpdateManyWithoutSuppliersInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutSupplierInput>;
  movements?: Maybe<MovementUpdateManyWithoutSupplierInput>;
  payments?: Maybe<PaymentUpdateManyWithoutSupplierInput>;
};

export type SupplierUpsertWithoutInventoriesInput = {
  update: SupplierUpdateWithoutInventoriesDataInput;
  create: SupplierCreateWithoutInventoriesInput;
};

export type BatchUpdateWithoutInventoriesDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  batchNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bestBefore?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  date?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  manufacturer?: Maybe<ManufacturerUpdateOneWithoutBatchesInput>;
  product?: Maybe<ProductUpdateOneRequiredWithoutBatchesInput>;
  movements?: Maybe<MovementUpdateManyWithoutBatchInput>;
};

export type BatchUpsertWithoutInventoriesInput = {
  update: BatchUpdateWithoutInventoriesDataInput;
  create: BatchCreateWithoutInventoriesInput;
};

export type ProductUpdateWithoutInventoriesDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  productId?: Maybe<IntFieldUpdateOperationsInput>;
  ASIN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  EAN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  ISBN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  UPC?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  material?: Maybe<NullableStringFieldUpdateOperationsInput>;
  color?: Maybe<NullableStringFieldUpdateOperationsInput>;
  weight?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isListed?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  quantity?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  tags?: Maybe<ProductUpdatetagsInput>;
  dimensions?: Maybe<DimensionUpdateOneWithoutProductInput>;
  manufacturer?: Maybe<ManufacturerUpdateOneWithoutProductsInput>;
  batches?: Maybe<BatchUpdateManyWithoutProductInput>;
  images?: Maybe<FileUpdateManyWithoutProductsInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutProductInput>;
  movements?: Maybe<MovementUpdateManyWithoutProductInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutProductInput>;
  units?: Maybe<UnitUpdateManyWithoutProductInput>;
  taxRates?: Maybe<TaxRateUpdateManyWithoutProductInput>;
  variants?: Maybe<ProductUpdateManyWithoutVariantProductInput>;
  variantProduct?: Maybe<ProductUpdateManyWithoutVariantsInput>;
  categories?: Maybe<CategoryUpdateManyWithoutProductsInput>;
  consumables?: Maybe<ConsumableUpdateManyWithoutConsumerInput>;
  consumers?: Maybe<ConsumableUpdateManyWithoutProductInput>;
};

export type ProductUpsertWithoutInventoriesInput = {
  update: ProductUpdateWithoutInventoriesDataInput;
  create: ProductCreateWithoutInventoriesInput;
};

export type WarehouseUpdateWithoutInventoriesDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phoneNumberId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<WarehouseUpdatetagsInput>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutWarehouseInput>;
  movements?: Maybe<MovementUpdateManyWithoutWarehouseInput>;
  address?: Maybe<AddressUpdateOneWithoutWarehouseInput>;
  Notification?: Maybe<NotificationUpdateManyWithoutWarehouseInput>;
  Interaction?: Maybe<InteractionUpdateManyWithoutWarehouseInput>;
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
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  storageNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isListed?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  listPrice?: Maybe<NullableFloatFieldUpdateOperationsInput>;
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
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  date?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  status?: Maybe<NullableEnumMovementStatusFieldUpdateOperationsInput>;
  movementId?: Maybe<IntFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  sendMail?: Maybe<BoolFieldUpdateOperationsInput>;
  storageNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  type?: Maybe<EnumMovementTypeFieldUpdateOperationsInput>;
  unitPrice?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  invoiceId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<MovementUpdatetagsInput>;
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
  documents?: Maybe<FileUpdateManyWithoutMovementsInput>;
  payments?: Maybe<PaymentUpdateManyWithoutMovementInput>;
  consumablesMovements?: Maybe<MovementUpdateManyWithoutConsumedFromInput>;
  consumedFrom?: Maybe<MovementUpdateOneWithoutConsumablesMovementsInput>;
};

export type MovementUpsertWithoutReservationInput = {
  update: MovementUpdateWithoutReservationDataInput;
  create: MovementCreateWithoutReservationInput;
};

export type ManufacturerUpdateWithoutAddressDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  fiscalNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<ManufacturerUpdatetagsInput>;
  batches?: Maybe<BatchUpdateManyWithoutManufacturerInput>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutManufacturerInput>;
  images?: Maybe<FileUpdateManyWithoutManufacturersInput>;
  products?: Maybe<ProductUpdateManyWithoutManufacturerInput>;
};

export type ManufacturerUpdateManyDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  fiscalNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<ManufacturerUpdatetagsInput>;
};

export type WarehouseUpdateWithoutAddressDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phoneNumberId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<WarehouseUpdatetagsInput>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutWarehouseInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutWarehouseInput>;
  movements?: Maybe<MovementUpdateManyWithoutWarehouseInput>;
  Notification?: Maybe<NotificationUpdateManyWithoutWarehouseInput>;
  Interaction?: Maybe<InteractionUpdateManyWithoutWarehouseInput>;
};

export type WarehouseUpdateManyDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phoneNumberId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<WarehouseUpdatetagsInput>;
};

export type TransportAgencyUpdateManyDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<TransportAgencyUpdatetagsInput>;
};

export type FileUpdateWithoutInvoiceDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  manufacturerId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  messageId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  supplierId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  clientId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  smallUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  transportAgencyId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  transporterId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
  movementId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  paymentId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  order?: Maybe<NullableIntFieldUpdateOperationsInput>;
  tags?: Maybe<FileUpdatetagsInput>;
  manufacturers?: Maybe<ManufacturerUpdateManyWithoutImagesInput>;
  messages?: Maybe<MessageUpdateManyWithoutImagesInput>;
  clients?: Maybe<ClientUpdateManyWithoutImagesInput>;
  suppliers?: Maybe<SupplierUpdateManyWithoutImagesInput>;
  products?: Maybe<ProductUpdateManyWithoutImagesInput>;
  transportAgencies?: Maybe<TransportAgencyUpdateManyWithoutImagesInput>;
  transporters?: Maybe<TransporterUpdateManyWithoutImagesInput>;
  settings?: Maybe<SettingUpdateManyWithoutLogoInput>;
  imageCategory?: Maybe<CategoryUpdateManyWithoutImageInput>;
  bannerCategory?: Maybe<CategoryUpdateManyWithoutBannerImageInput>;
  movements?: Maybe<MovementUpdateManyWithoutDocumentsInput>;
  payments?: Maybe<PaymentUpdateManyWithoutDocumentsInput>;
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
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  code?: Maybe<NullableIntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  taxRate?: Maybe<TaxRateUpdateOneWithoutGroupInput>;
};

export type GroupUpsertWithoutPaymentsInput = {
  update: GroupUpdateWithoutPaymentsDataInput;
  create: GroupCreateWithoutPaymentsInput;
};

export type TaxRateUpdateWithoutPaymentsDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  isSameCountry?: Maybe<BoolFieldUpdateOperationsInput>;
  isEU?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<TaxRateUpdatetagsInput>;
  group?: Maybe<GroupUpdateOneWithoutTaxRateInput>;
  product?: Maybe<ProductUpdateOneWithoutTaxRatesInput>;
};

export type TaxRateUpsertWithoutPaymentsInput = {
  update: TaxRateUpdateWithoutPaymentsDataInput;
  create: TaxRateCreateWithoutPaymentsInput;
};

export type MovementUpdateWithoutPaymentsDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  date?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  status?: Maybe<NullableEnumMovementStatusFieldUpdateOperationsInput>;
  movementId?: Maybe<IntFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  sendMail?: Maybe<BoolFieldUpdateOperationsInput>;
  storageNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  type?: Maybe<EnumMovementTypeFieldUpdateOperationsInput>;
  unitPrice?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  invoiceId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<MovementUpdatetagsInput>;
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
  documents?: Maybe<FileUpdateManyWithoutMovementsInput>;
  consumablesMovements?: Maybe<MovementUpdateManyWithoutConsumedFromInput>;
  consumedFrom?: Maybe<MovementUpdateOneWithoutConsumablesMovementsInput>;
};

export type MovementUpsertWithoutPaymentsInput = {
  update: MovementUpdateWithoutPaymentsDataInput;
  create: MovementCreateWithoutPaymentsInput;
};

export type TransportAgencyUpdateWithoutPaymentsDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<TransportAgencyUpdatetagsInput>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutTransportAgencyInput>;
  images?: Maybe<FileUpdateManyWithoutTransportAgenciesInput>;
  transports?: Maybe<TransportUpdateManyWithoutTransportAgencyInput>;
  transporters?: Maybe<TransporterUpdateManyWithoutTransportAgencyInput>;
  address?: Maybe<AddressUpdateOneWithoutTransportAgencyAddressInput>;
  billingAddress?: Maybe<AddressUpdateOneWithoutTransportAgencyBillingAddressInput>;
  Address?: Maybe<AddressUpdateOneWithoutTransportAgencyInput>;
  Interaction?: Maybe<InteractionUpdateManyWithoutTransportAgencyInput>;
};

export type TransportAgencyUpsertWithoutPaymentsInput = {
  update: TransportAgencyUpdateWithoutPaymentsDataInput;
  create: TransportAgencyCreateWithoutPaymentsInput;
};

export type SupplierUpdateWithoutPaymentsDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  fiscalNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  language?: Maybe<NullableEnumLanguageFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  supplierId?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  withAccount?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<SupplierUpdatetagsInput>;
  address?: Maybe<AddressUpdateOneWithoutSupplierAddressInput>;
  billingAddress?: Maybe<AddressUpdateOneWithoutSupplierBillingAddressInput>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutSupplierInput>;
  images?: Maybe<FileUpdateManyWithoutSuppliersInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutSupplierInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutSupplierInput>;
  movements?: Maybe<MovementUpdateManyWithoutSupplierInput>;
};

export type SupplierUpsertWithoutPaymentsInput = {
  update: SupplierUpdateWithoutPaymentsDataInput;
  create: SupplierCreateWithoutPaymentsInput;
};

export type FileUpdateWithWhereUniqueWithoutPaymentsInput = {
  where: FileWhereUniqueInput;
  data: FileUpdateWithoutPaymentsDataInput;
};

export type FileUpsertWithWhereUniqueWithoutPaymentsInput = {
  where: FileWhereUniqueInput;
  update: FileUpdateWithoutPaymentsDataInput;
  create: FileCreateWithoutPaymentsInput;
};

export type BankAccountUpdateWithoutPaymentsDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type BankAccountUpsertWithoutPaymentsInput = {
  update: BankAccountUpdateWithoutPaymentsDataInput;
  create: BankAccountCreateWithoutPaymentsInput;
};

export type InteractionUpdateWithWhereUniqueWithoutPaymentInput = {
  where: InteractionWhereUniqueInput;
  data: InteractionUpdateWithoutPaymentDataInput;
};

export type InteractionUpsertWithWhereUniqueWithoutPaymentInput = {
  where: InteractionWhereUniqueInput;
  update: InteractionUpdateWithoutPaymentDataInput;
  create: InteractionCreateWithoutPaymentInput;
};

export type ClientUpdateWithoutContactPersonsDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  fiscalNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  language?: Maybe<NullableEnumLanguageFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  clientId?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  withAccount?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  stripeId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<ClientUpdatetagsInput>;
  images?: Maybe<FileUpdateManyWithoutClientsInput>;
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
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  date?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  status?: Maybe<NullableEnumMovementStatusFieldUpdateOperationsInput>;
  movementId?: Maybe<IntFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  sendMail?: Maybe<BoolFieldUpdateOperationsInput>;
  storageNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  type?: Maybe<EnumMovementTypeFieldUpdateOperationsInput>;
  unitPrice?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  invoiceId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<MovementUpdatetagsInput>;
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
  documents?: Maybe<FileUpdateManyWithoutMovementsInput>;
  payments?: Maybe<PaymentUpdateManyWithoutMovementInput>;
  consumablesMovements?: Maybe<MovementUpdateManyWithoutConsumedFromInput>;
  consumedFrom?: Maybe<MovementUpdateOneWithoutConsumablesMovementsInput>;
};

export type MovementUpsertWithoutTransportsInput = {
  update: MovementUpdateWithoutTransportsDataInput;
  create: MovementCreateWithoutTransportsInput;
};

export type TransporterUpdateWithoutTransportsDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  type?: Maybe<EnumTransportTypeFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<TransporterUpdatetagsInput>;
  transportAgency?: Maybe<TransportAgencyUpdateOneWithoutTransportersInput>;
  images?: Maybe<FileUpdateManyWithoutTransportersInput>;
};

export type TransporterUpsertWithoutTransportsInput = {
  update: TransporterUpdateWithoutTransportsDataInput;
  create: TransporterCreateWithoutTransportsInput;
};

export type FileUpdateWithWhereUniqueWithoutTransportersInput = {
  where: FileWhereUniqueInput;
  data: FileUpdateWithoutTransportersDataInput;
};

export type FileUpsertWithWhereUniqueWithoutTransportersInput = {
  where: FileWhereUniqueInput;
  update: FileUpdateWithoutTransportersDataInput;
  create: FileCreateWithoutTransportersInput;
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
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  fiscalNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  language?: Maybe<NullableEnumLanguageFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  clientId?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  withAccount?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  stripeId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<ClientUpdatetagsInput>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutClientInput>;
  images?: Maybe<FileUpdateManyWithoutClientsInput>;
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

export type ClientUpdateWithoutInteractionsDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  fiscalNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  language?: Maybe<NullableEnumLanguageFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  clientId?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  withAccount?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  stripeId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<ClientUpdatetagsInput>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutClientInput>;
  images?: Maybe<FileUpdateManyWithoutClientsInput>;
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

export type ClientUpdateWithoutInventoriesDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  fiscalNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  language?: Maybe<NullableEnumLanguageFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  clientId?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  withAccount?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  stripeId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<ClientUpdatetagsInput>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutClientInput>;
  images?: Maybe<FileUpdateManyWithoutClientsInput>;
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
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  batchNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bestBefore?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  date?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  product?: Maybe<ProductUpdateOneRequiredWithoutBatchesInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutBatchInput>;
  movements?: Maybe<MovementUpdateManyWithoutBatchInput>;
};

export type ContactPersonUpdateWithoutManufacturerDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  firstName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  scheduleEnd?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  scheduleStart?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<ContactPersonUpdatetagsInput>;
  supplier?: Maybe<SupplierUpdateOneWithoutContactPersonsInput>;
  client?: Maybe<ClientUpdateOneWithoutContactPersonsInput>;
  transportAgency?: Maybe<TransportAgencyUpdateOneWithoutContactPersonsInput>;
  warehouse?: Maybe<WarehouseUpdateOneWithoutContactPersonsInput>;
};

export type FileUpdateWithoutManufacturersDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  manufacturerId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  messageId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  supplierId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  clientId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  smallUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  transportAgencyId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  transporterId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
  movementId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  paymentId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  order?: Maybe<NullableIntFieldUpdateOperationsInput>;
  tags?: Maybe<FileUpdatetagsInput>;
  messages?: Maybe<MessageUpdateManyWithoutImagesInput>;
  clients?: Maybe<ClientUpdateManyWithoutImagesInput>;
  suppliers?: Maybe<SupplierUpdateManyWithoutImagesInput>;
  products?: Maybe<ProductUpdateManyWithoutImagesInput>;
  transportAgencies?: Maybe<TransportAgencyUpdateManyWithoutImagesInput>;
  transporters?: Maybe<TransporterUpdateManyWithoutImagesInput>;
  settings?: Maybe<SettingUpdateManyWithoutLogoInput>;
  Invoice?: Maybe<InvoiceUpdateManyWithoutPdfInput>;
  imageCategory?: Maybe<CategoryUpdateManyWithoutImageInput>;
  bannerCategory?: Maybe<CategoryUpdateManyWithoutBannerImageInput>;
  movements?: Maybe<MovementUpdateManyWithoutDocumentsInput>;
  payments?: Maybe<PaymentUpdateManyWithoutDocumentsInput>;
};

export type ManufacturerUpdateWithoutBatchesDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  fiscalNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<ManufacturerUpdatetagsInput>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutManufacturerInput>;
  images?: Maybe<FileUpdateManyWithoutManufacturersInput>;
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

export type FileUpdateWithoutImageCategoryDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  manufacturerId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  messageId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  supplierId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  clientId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  smallUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  transportAgencyId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  transporterId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
  movementId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  paymentId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  order?: Maybe<NullableIntFieldUpdateOperationsInput>;
  tags?: Maybe<FileUpdatetagsInput>;
  manufacturers?: Maybe<ManufacturerUpdateManyWithoutImagesInput>;
  messages?: Maybe<MessageUpdateManyWithoutImagesInput>;
  clients?: Maybe<ClientUpdateManyWithoutImagesInput>;
  suppliers?: Maybe<SupplierUpdateManyWithoutImagesInput>;
  products?: Maybe<ProductUpdateManyWithoutImagesInput>;
  transportAgencies?: Maybe<TransportAgencyUpdateManyWithoutImagesInput>;
  transporters?: Maybe<TransporterUpdateManyWithoutImagesInput>;
  settings?: Maybe<SettingUpdateManyWithoutLogoInput>;
  Invoice?: Maybe<InvoiceUpdateManyWithoutPdfInput>;
  bannerCategory?: Maybe<CategoryUpdateManyWithoutBannerImageInput>;
  movements?: Maybe<MovementUpdateManyWithoutDocumentsInput>;
  payments?: Maybe<PaymentUpdateManyWithoutDocumentsInput>;
};

export type FileUpsertWithoutImageCategoryInput = {
  update: FileUpdateWithoutImageCategoryDataInput;
  create: FileCreateWithoutImageCategoryInput;
};

export type FileUpdateWithoutBannerCategoryDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  manufacturerId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  messageId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  supplierId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  clientId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  smallUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  transportAgencyId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  transporterId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
  movementId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  paymentId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  order?: Maybe<NullableIntFieldUpdateOperationsInput>;
  tags?: Maybe<FileUpdatetagsInput>;
  manufacturers?: Maybe<ManufacturerUpdateManyWithoutImagesInput>;
  messages?: Maybe<MessageUpdateManyWithoutImagesInput>;
  clients?: Maybe<ClientUpdateManyWithoutImagesInput>;
  suppliers?: Maybe<SupplierUpdateManyWithoutImagesInput>;
  products?: Maybe<ProductUpdateManyWithoutImagesInput>;
  transportAgencies?: Maybe<TransportAgencyUpdateManyWithoutImagesInput>;
  transporters?: Maybe<TransporterUpdateManyWithoutImagesInput>;
  settings?: Maybe<SettingUpdateManyWithoutLogoInput>;
  Invoice?: Maybe<InvoiceUpdateManyWithoutPdfInput>;
  imageCategory?: Maybe<CategoryUpdateManyWithoutImageInput>;
  movements?: Maybe<MovementUpdateManyWithoutDocumentsInput>;
  payments?: Maybe<PaymentUpdateManyWithoutDocumentsInput>;
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
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  image?: Maybe<FileUpdateOneWithoutImageCategoryInput>;
  bannerImage?: Maybe<FileUpdateOneWithoutBannerCategoryInput>;
  products?: Maybe<ProductUpdateManyWithoutCategoriesInput>;
  Category?: Maybe<CategoryUpdateOneWithoutSubCategoriesInput>;
};

export type CategoryUpsertWithoutSubCategoriesInput = {
  update: CategoryUpdateWithoutSubCategoriesDataInput;
  create: CategoryCreateWithoutSubCategoriesInput;
};

export type ProductUpdateWithoutConsumersDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  productId?: Maybe<IntFieldUpdateOperationsInput>;
  ASIN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  EAN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  ISBN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  UPC?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  material?: Maybe<NullableStringFieldUpdateOperationsInput>;
  color?: Maybe<NullableStringFieldUpdateOperationsInput>;
  weight?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isListed?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  quantity?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  tags?: Maybe<ProductUpdatetagsInput>;
  dimensions?: Maybe<DimensionUpdateOneWithoutProductInput>;
  manufacturer?: Maybe<ManufacturerUpdateOneWithoutProductsInput>;
  batches?: Maybe<BatchUpdateManyWithoutProductInput>;
  images?: Maybe<FileUpdateManyWithoutProductsInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutProductInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutProductInput>;
  movements?: Maybe<MovementUpdateManyWithoutProductInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutProductInput>;
  units?: Maybe<UnitUpdateManyWithoutProductInput>;
  taxRates?: Maybe<TaxRateUpdateManyWithoutProductInput>;
  variants?: Maybe<ProductUpdateManyWithoutVariantProductInput>;
  variantProduct?: Maybe<ProductUpdateManyWithoutVariantsInput>;
  categories?: Maybe<CategoryUpdateManyWithoutProductsInput>;
  consumables?: Maybe<ConsumableUpdateManyWithoutConsumerInput>;
};

export type ProductUpsertWithoutConsumersInput = {
  update: ProductUpdateWithoutConsumersDataInput;
  create: ProductCreateWithoutConsumersInput;
};

export type ProductUpdateWithoutConsumablesDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  productId?: Maybe<IntFieldUpdateOperationsInput>;
  ASIN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  EAN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  ISBN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  UPC?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  material?: Maybe<NullableStringFieldUpdateOperationsInput>;
  color?: Maybe<NullableStringFieldUpdateOperationsInput>;
  weight?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isListed?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  quantity?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  tags?: Maybe<ProductUpdatetagsInput>;
  dimensions?: Maybe<DimensionUpdateOneWithoutProductInput>;
  manufacturer?: Maybe<ManufacturerUpdateOneWithoutProductsInput>;
  batches?: Maybe<BatchUpdateManyWithoutProductInput>;
  images?: Maybe<FileUpdateManyWithoutProductsInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutProductInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutProductInput>;
  movements?: Maybe<MovementUpdateManyWithoutProductInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutProductInput>;
  units?: Maybe<UnitUpdateManyWithoutProductInput>;
  taxRates?: Maybe<TaxRateUpdateManyWithoutProductInput>;
  variants?: Maybe<ProductUpdateManyWithoutVariantProductInput>;
  variantProduct?: Maybe<ProductUpdateManyWithoutVariantsInput>;
  categories?: Maybe<CategoryUpdateManyWithoutProductsInput>;
  consumers?: Maybe<ConsumableUpdateManyWithoutProductInput>;
};

export type ProductUpsertWithoutConsumablesInput = {
  update: ProductUpdateWithoutConsumablesDataInput;
  create: ProductCreateWithoutConsumablesInput;
};

export type ManufacturerUpdateWithoutImagesDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  fiscalNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<ManufacturerUpdatetagsInput>;
  batches?: Maybe<BatchUpdateManyWithoutManufacturerInput>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutManufacturerInput>;
  products?: Maybe<ProductUpdateManyWithoutManufacturerInput>;
  address?: Maybe<AddressUpdateOneWithoutManufacturerInput>;
};

export type MessageUpdateWithoutImagesDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  recipient?: Maybe<NullableStringFieldUpdateOperationsInput>;
  sender?: Maybe<StringFieldUpdateOperationsInput>;
  text?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  mentions?: Maybe<MessageUpdatementionsInput>;
  channel?: Maybe<ChannelUpdateOneWithoutMessagesInput>;
  movement?: Maybe<MovementUpdateOneWithoutCommentsInput>;
};

export type ClientUpdateWithoutImagesDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  fiscalNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  language?: Maybe<NullableEnumLanguageFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  clientId?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  withAccount?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  stripeId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<ClientUpdatetagsInput>;
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

export type ClientUpdateManyDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  fiscalNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  language?: Maybe<NullableEnumLanguageFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  clientId?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  withAccount?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  stripeId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<ClientUpdatetagsInput>;
};

export type SupplierUpdateWithoutImagesDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  fiscalNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  language?: Maybe<NullableEnumLanguageFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  supplierId?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  withAccount?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<SupplierUpdatetagsInput>;
  address?: Maybe<AddressUpdateOneWithoutSupplierAddressInput>;
  billingAddress?: Maybe<AddressUpdateOneWithoutSupplierBillingAddressInput>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutSupplierInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutSupplierInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutSupplierInput>;
  movements?: Maybe<MovementUpdateManyWithoutSupplierInput>;
  payments?: Maybe<PaymentUpdateManyWithoutSupplierInput>;
};

export type SupplierUpdateManyDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  fiscalNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  language?: Maybe<NullableEnumLanguageFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  supplierId?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  withAccount?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<SupplierUpdatetagsInput>;
};

export type ProductUpdateWithoutImagesDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  productId?: Maybe<IntFieldUpdateOperationsInput>;
  ASIN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  EAN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  ISBN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  UPC?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  material?: Maybe<NullableStringFieldUpdateOperationsInput>;
  color?: Maybe<NullableStringFieldUpdateOperationsInput>;
  weight?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isListed?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  quantity?: Maybe<NullableFloatFieldUpdateOperationsInput>;
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
  variants?: Maybe<ProductUpdateManyWithoutVariantProductInput>;
  variantProduct?: Maybe<ProductUpdateManyWithoutVariantsInput>;
  categories?: Maybe<CategoryUpdateManyWithoutProductsInput>;
  consumables?: Maybe<ConsumableUpdateManyWithoutConsumerInput>;
  consumers?: Maybe<ConsumableUpdateManyWithoutProductInput>;
};

export type TransportAgencyUpdateWithoutImagesDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<TransportAgencyUpdatetagsInput>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutTransportAgencyInput>;
  transports?: Maybe<TransportUpdateManyWithoutTransportAgencyInput>;
  transporters?: Maybe<TransporterUpdateManyWithoutTransportAgencyInput>;
  address?: Maybe<AddressUpdateOneWithoutTransportAgencyAddressInput>;
  billingAddress?: Maybe<AddressUpdateOneWithoutTransportAgencyBillingAddressInput>;
  payments?: Maybe<PaymentUpdateManyWithoutTransportAgencyInput>;
  Address?: Maybe<AddressUpdateOneWithoutTransportAgencyInput>;
  Interaction?: Maybe<InteractionUpdateManyWithoutTransportAgencyInput>;
};

export type TransporterUpdateWithoutImagesDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  type?: Maybe<EnumTransportTypeFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<TransporterUpdatetagsInput>;
  transportAgency?: Maybe<TransportAgencyUpdateOneWithoutTransportersInput>;
  transports?: Maybe<TransportUpdateManyWithoutTransporterInput>;
};

export type InvoiceUpdateWithoutPdfDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  withTaxes?: Maybe<BoolFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<InvoiceUpdatetagsInput>;
  movements?: Maybe<MovementUpdateManyWithoutInvoiceInput>;
  client?: Maybe<ClientUpdateOneRequiredWithoutInvoicesInput>;
};

export type CategoryUpdateWithoutImageDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bannerImage?: Maybe<FileUpdateOneWithoutBannerCategoryInput>;
  products?: Maybe<ProductUpdateManyWithoutCategoriesInput>;
  subCategories?: Maybe<CategoryUpdateManyWithoutCategoryInput>;
  Category?: Maybe<CategoryUpdateOneWithoutSubCategoriesInput>;
};

export type CategoryUpdateWithoutBannerImageDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  image?: Maybe<FileUpdateOneWithoutImageCategoryInput>;
  products?: Maybe<ProductUpdateManyWithoutCategoriesInput>;
  subCategories?: Maybe<CategoryUpdateManyWithoutCategoryInput>;
  Category?: Maybe<CategoryUpdateOneWithoutSubCategoriesInput>;
};

export type MovementUpdateWithoutDocumentsDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  date?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  status?: Maybe<NullableEnumMovementStatusFieldUpdateOperationsInput>;
  movementId?: Maybe<IntFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  sendMail?: Maybe<BoolFieldUpdateOperationsInput>;
  storageNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  type?: Maybe<EnumMovementTypeFieldUpdateOperationsInput>;
  unitPrice?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  invoiceId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<MovementUpdatetagsInput>;
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
  consumablesMovements?: Maybe<MovementUpdateManyWithoutConsumedFromInput>;
  consumedFrom?: Maybe<MovementUpdateOneWithoutConsumablesMovementsInput>;
};

export type PaymentUpdateWithoutDocumentsDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  paymentId?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  type?: Maybe<EnumPaymentTypeFieldUpdateOperationsInput>;
  status?: Maybe<EnumPaymentStatusFieldUpdateOperationsInput>;
  dueDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  date?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  concept?: Maybe<NullableStringFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  currency?: Maybe<StringFieldUpdateOperationsInput>;
  recipient?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  paymentMethod?: Maybe<NullableStringFieldUpdateOperationsInput>;
  stripePaymentIntentId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  stripeClientSecret?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<PaymentUpdatetagsInput>;
  group?: Maybe<GroupUpdateOneWithoutPaymentsInput>;
  taxRate?: Maybe<TaxRateUpdateOneWithoutPaymentsInput>;
  movement?: Maybe<MovementUpdateOneWithoutPaymentsInput>;
  transportAgency?: Maybe<TransportAgencyUpdateOneWithoutPaymentsInput>;
  client?: Maybe<ClientUpdateOneWithoutPaymentsInput>;
  supplier?: Maybe<SupplierUpdateOneWithoutPaymentsInput>;
  bankAccount?: Maybe<BankAccountUpdateOneWithoutPaymentsInput>;
  Interaction?: Maybe<InteractionUpdateManyWithoutPaymentInput>;
};

export type ProductCreateWithoutBatchesInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  productId: Scalars['Int'];
  ASIN?: Maybe<Scalars['String']>;
  EAN?: Maybe<Scalars['String']>;
  ISBN?: Maybe<Scalars['String']>;
  UPC?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  material?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  isListed?: Maybe<Scalars['Boolean']>;
  notes?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Float']>;
  tags?: Maybe<ProductCreatetagsInput>;
  dimensions?: Maybe<DimensionCreateOneWithoutProductInput>;
  manufacturer?: Maybe<ManufacturerCreateOneWithoutProductsInput>;
  images?: Maybe<FileCreateManyWithoutProductsInput>;
  interactions?: Maybe<InteractionCreateManyWithoutProductInput>;
  inventories?: Maybe<InventoryCreateManyWithoutProductInput>;
  movements?: Maybe<MovementCreateManyWithoutProductInput>;
  notifications?: Maybe<NotificationCreateManyWithoutProductInput>;
  units?: Maybe<UnitCreateManyWithoutProductInput>;
  taxRates?: Maybe<TaxRateCreateManyWithoutProductInput>;
  variants?: Maybe<ProductCreateManyWithoutVariantProductInput>;
  variantProduct?: Maybe<ProductCreateManyWithoutVariantsInput>;
  categories?: Maybe<CategoryCreateManyWithoutProductsInput>;
  consumables?: Maybe<ConsumableCreateManyWithoutConsumerInput>;
  consumers?: Maybe<ConsumableCreateManyWithoutProductInput>;
};

export type ClientCreateWithoutReservationsInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  clientId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  tags?: Maybe<ClientCreatetagsInput>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutClientInput>;
  images?: Maybe<FileCreateManyWithoutClientsInput>;
  interactions?: Maybe<InteractionCreateManyWithoutClientInput>;
  inventories?: Maybe<InventoryCreateManyWithoutClientInput>;
  movements?: Maybe<MovementCreateManyWithoutClientInput>;
  address?: Maybe<AddressCreateOneWithoutClientAddressInput>;
  billingAddress?: Maybe<AddressCreateOneWithoutClientBillingAddressInput>;
  invoices?: Maybe<InvoiceCreateManyWithoutClientInput>;
  payments?: Maybe<PaymentCreateManyWithoutClientInput>;
};

export type TransportAgencyCreateWithoutTransportsInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  website?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  tags?: Maybe<TransportAgencyCreatetagsInput>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutTransportAgencyInput>;
  images?: Maybe<FileCreateManyWithoutTransportAgenciesInput>;
  transporters?: Maybe<TransporterCreateManyWithoutTransportAgencyInput>;
  address?: Maybe<AddressCreateOneWithoutTransportAgencyAddressInput>;
  billingAddress?: Maybe<AddressCreateOneWithoutTransportAgencyBillingAddressInput>;
  payments?: Maybe<PaymentCreateManyWithoutTransportAgencyInput>;
  Address?: Maybe<AddressCreateOneWithoutTransportAgencyInput>;
  Interaction?: Maybe<InteractionCreateManyWithoutTransportAgencyInput>;
};

export type ClientCreateWithoutInvoicesInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  clientId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
  withAccount?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  tags?: Maybe<ClientCreatetagsInput>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutClientInput>;
  images?: Maybe<FileCreateManyWithoutClientsInput>;
  interactions?: Maybe<InteractionCreateManyWithoutClientInput>;
  inventories?: Maybe<InventoryCreateManyWithoutClientInput>;
  movements?: Maybe<MovementCreateManyWithoutClientInput>;
  reservations?: Maybe<ReservationCreateManyWithoutClientInput>;
  address?: Maybe<AddressCreateOneWithoutClientAddressInput>;
  billingAddress?: Maybe<AddressCreateOneWithoutClientBillingAddressInput>;
  payments?: Maybe<PaymentCreateManyWithoutClientInput>;
};

export type ProductUpdateWithoutBatchesDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  productId?: Maybe<IntFieldUpdateOperationsInput>;
  ASIN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  EAN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  ISBN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  UPC?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  material?: Maybe<NullableStringFieldUpdateOperationsInput>;
  color?: Maybe<NullableStringFieldUpdateOperationsInput>;
  weight?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isListed?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  quantity?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  tags?: Maybe<ProductUpdatetagsInput>;
  dimensions?: Maybe<DimensionUpdateOneWithoutProductInput>;
  manufacturer?: Maybe<ManufacturerUpdateOneWithoutProductsInput>;
  images?: Maybe<FileUpdateManyWithoutProductsInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutProductInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutProductInput>;
  movements?: Maybe<MovementUpdateManyWithoutProductInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutProductInput>;
  units?: Maybe<UnitUpdateManyWithoutProductInput>;
  taxRates?: Maybe<TaxRateUpdateManyWithoutProductInput>;
  variants?: Maybe<ProductUpdateManyWithoutVariantProductInput>;
  variantProduct?: Maybe<ProductUpdateManyWithoutVariantsInput>;
  categories?: Maybe<CategoryUpdateManyWithoutProductsInput>;
  consumables?: Maybe<ConsumableUpdateManyWithoutConsumerInput>;
  consumers?: Maybe<ConsumableUpdateManyWithoutProductInput>;
};

export type ProductUpsertWithoutBatchesInput = {
  update: ProductUpdateWithoutBatchesDataInput;
  create: ProductCreateWithoutBatchesInput;
};

export type ClientUpdateWithoutReservationsDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  fiscalNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  language?: Maybe<NullableEnumLanguageFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  clientId?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  withAccount?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  stripeId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<ClientUpdatetagsInput>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutClientInput>;
  images?: Maybe<FileUpdateManyWithoutClientsInput>;
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
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  fiscalNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  language?: Maybe<NullableEnumLanguageFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  clientId?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  withAccount?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  stripeId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<ClientUpdatetagsInput>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutClientInput>;
  images?: Maybe<FileUpdateManyWithoutClientsInput>;
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
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  productId: Scalars['Int'];
  ASIN?: Maybe<Scalars['String']>;
  EAN?: Maybe<Scalars['String']>;
  ISBN?: Maybe<Scalars['String']>;
  UPC?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  material?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  isListed?: Maybe<Scalars['Boolean']>;
  notes?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Float']>;
  tags?: Maybe<ProductCreatetagsInput>;
  dimensions?: Maybe<DimensionCreateOneWithoutProductInput>;
  batches?: Maybe<BatchCreateManyWithoutProductInput>;
  images?: Maybe<FileCreateManyWithoutProductsInput>;
  interactions?: Maybe<InteractionCreateManyWithoutProductInput>;
  inventories?: Maybe<InventoryCreateManyWithoutProductInput>;
  movements?: Maybe<MovementCreateManyWithoutProductInput>;
  notifications?: Maybe<NotificationCreateManyWithoutProductInput>;
  units?: Maybe<UnitCreateManyWithoutProductInput>;
  taxRates?: Maybe<TaxRateCreateManyWithoutProductInput>;
  variants?: Maybe<ProductCreateManyWithoutVariantProductInput>;
  variantProduct?: Maybe<ProductCreateManyWithoutVariantsInput>;
  categories?: Maybe<CategoryCreateManyWithoutProductsInput>;
  consumables?: Maybe<ConsumableCreateManyWithoutConsumerInput>;
  consumers?: Maybe<ConsumableCreateManyWithoutProductInput>;
};

export type TransportAgencyCreateWithoutTransportersInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  website?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  tags?: Maybe<TransportAgencyCreatetagsInput>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutTransportAgencyInput>;
  images?: Maybe<FileCreateManyWithoutTransportAgenciesInput>;
  transports?: Maybe<TransportCreateManyWithoutTransportAgencyInput>;
  address?: Maybe<AddressCreateOneWithoutTransportAgencyAddressInput>;
  billingAddress?: Maybe<AddressCreateOneWithoutTransportAgencyBillingAddressInput>;
  payments?: Maybe<PaymentCreateManyWithoutTransportAgencyInput>;
  Address?: Maybe<AddressCreateOneWithoutTransportAgencyInput>;
  Interaction?: Maybe<InteractionCreateManyWithoutTransportAgencyInput>;
};

export type ProductCreateWithoutCategoriesInput = {
  tenantId?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  productId: Scalars['Int'];
  ASIN?: Maybe<Scalars['String']>;
  EAN?: Maybe<Scalars['String']>;
  ISBN?: Maybe<Scalars['String']>;
  UPC?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  material?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['String']>;
  isListed?: Maybe<Scalars['Boolean']>;
  notes?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Float']>;
  tags?: Maybe<ProductCreatetagsInput>;
  dimensions?: Maybe<DimensionCreateOneWithoutProductInput>;
  manufacturer?: Maybe<ManufacturerCreateOneWithoutProductsInput>;
  batches?: Maybe<BatchCreateManyWithoutProductInput>;
  images?: Maybe<FileCreateManyWithoutProductsInput>;
  interactions?: Maybe<InteractionCreateManyWithoutProductInput>;
  inventories?: Maybe<InventoryCreateManyWithoutProductInput>;
  movements?: Maybe<MovementCreateManyWithoutProductInput>;
  notifications?: Maybe<NotificationCreateManyWithoutProductInput>;
  units?: Maybe<UnitCreateManyWithoutProductInput>;
  taxRates?: Maybe<TaxRateCreateManyWithoutProductInput>;
  variants?: Maybe<ProductCreateManyWithoutVariantProductInput>;
  variantProduct?: Maybe<ProductCreateManyWithoutVariantsInput>;
  consumables?: Maybe<ConsumableCreateManyWithoutConsumerInput>;
  consumers?: Maybe<ConsumableCreateManyWithoutProductInput>;
};

export type SettingUpdateWithoutLogoDataInput = {
  subDomain?: Maybe<StringFieldUpdateOperationsInput>;
  chat?: Maybe<BoolFieldUpdateOperationsInput>;
  currency?: Maybe<NullableStringFieldUpdateOperationsInput>;
  currencySymbol?: Maybe<NullableStringFieldUpdateOperationsInput>;
  defaultLanguage?: Maybe<NullableEnumLanguageFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  stripeCustomerId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  timezone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  plan?: Maybe<NullableEnumAccountPlanFieldUpdateOperationsInput>;
  transports?: Maybe<BoolFieldUpdateOperationsInput>;
  warehouses?: Maybe<BoolFieldUpdateOperationsInput>;
  consumables?: Maybe<BoolFieldUpdateOperationsInput>;
  shop?: Maybe<BoolFieldUpdateOperationsInput>;
  accounting?: Maybe<BoolFieldUpdateOperationsInput>;
  invoicing?: Maybe<BoolFieldUpdateOperationsInput>;
  fiscalNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  weightUnit?: Maybe<NullableStringFieldUpdateOperationsInput>;
  lengthUnit?: Maybe<NullableStringFieldUpdateOperationsInput>;
  shopPurchasedEmail?: Maybe<NullableStringFieldUpdateOperationsInput>;
  invoiceText?: Maybe<NullableStringFieldUpdateOperationsInput>;
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
  subDomain?: Maybe<StringFieldUpdateOperationsInput>;
  chat?: Maybe<BoolFieldUpdateOperationsInput>;
  currency?: Maybe<NullableStringFieldUpdateOperationsInput>;
  currencySymbol?: Maybe<NullableStringFieldUpdateOperationsInput>;
  defaultLanguage?: Maybe<NullableEnumLanguageFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  stripeCustomerId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  timezone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  plan?: Maybe<NullableEnumAccountPlanFieldUpdateOperationsInput>;
  transports?: Maybe<BoolFieldUpdateOperationsInput>;
  warehouses?: Maybe<BoolFieldUpdateOperationsInput>;
  consumables?: Maybe<BoolFieldUpdateOperationsInput>;
  shop?: Maybe<BoolFieldUpdateOperationsInput>;
  accounting?: Maybe<BoolFieldUpdateOperationsInput>;
  invoicing?: Maybe<BoolFieldUpdateOperationsInput>;
  fiscalNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  weightUnit?: Maybe<NullableStringFieldUpdateOperationsInput>;
  lengthUnit?: Maybe<NullableStringFieldUpdateOperationsInput>;
  shopPurchasedEmail?: Maybe<NullableStringFieldUpdateOperationsInput>;
  invoiceText?: Maybe<NullableStringFieldUpdateOperationsInput>;
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

export type MovementUpdateWithoutInventoryDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  date?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  status?: Maybe<NullableEnumMovementStatusFieldUpdateOperationsInput>;
  movementId?: Maybe<IntFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  sendMail?: Maybe<BoolFieldUpdateOperationsInput>;
  storageNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  type?: Maybe<EnumMovementTypeFieldUpdateOperationsInput>;
  unitPrice?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  invoiceId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<MovementUpdatetagsInput>;
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
  documents?: Maybe<FileUpdateManyWithoutMovementsInput>;
  payments?: Maybe<PaymentUpdateManyWithoutMovementInput>;
  consumablesMovements?: Maybe<MovementUpdateManyWithoutConsumedFromInput>;
  consumedFrom?: Maybe<MovementUpdateOneWithoutConsumablesMovementsInput>;
};

export type ReservationUpdateWithoutInventoryDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  client?: Maybe<ClientUpdateOneRequiredWithoutReservationsInput>;
  movement?: Maybe<MovementUpdateOneRequiredWithoutReservationInput>;
};

export type MessageUpdateWithoutMovementDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  recipient?: Maybe<NullableStringFieldUpdateOperationsInput>;
  sender?: Maybe<StringFieldUpdateOperationsInput>;
  text?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  mentions?: Maybe<MessageUpdatementionsInput>;
  channel?: Maybe<ChannelUpdateOneWithoutMessagesInput>;
  images?: Maybe<FileUpdateManyWithoutMessagesInput>;
};

export type MovementUpdateWithoutInvoiceDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  date?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  status?: Maybe<NullableEnumMovementStatusFieldUpdateOperationsInput>;
  movementId?: Maybe<IntFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  sendMail?: Maybe<BoolFieldUpdateOperationsInput>;
  storageNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  type?: Maybe<EnumMovementTypeFieldUpdateOperationsInput>;
  unitPrice?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  invoiceId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<MovementUpdatetagsInput>;
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
  documents?: Maybe<FileUpdateManyWithoutMovementsInput>;
  payments?: Maybe<PaymentUpdateManyWithoutMovementInput>;
  consumablesMovements?: Maybe<MovementUpdateManyWithoutConsumedFromInput>;
  consumedFrom?: Maybe<MovementUpdateOneWithoutConsumablesMovementsInput>;
};

export type FileUpdateWithoutPaymentsDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  manufacturerId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  messageId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  supplierId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  clientId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  smallUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  transportAgencyId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  transporterId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
  movementId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  paymentId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  order?: Maybe<NullableIntFieldUpdateOperationsInput>;
  tags?: Maybe<FileUpdatetagsInput>;
  manufacturers?: Maybe<ManufacturerUpdateManyWithoutImagesInput>;
  messages?: Maybe<MessageUpdateManyWithoutImagesInput>;
  clients?: Maybe<ClientUpdateManyWithoutImagesInput>;
  suppliers?: Maybe<SupplierUpdateManyWithoutImagesInput>;
  products?: Maybe<ProductUpdateManyWithoutImagesInput>;
  transportAgencies?: Maybe<TransportAgencyUpdateManyWithoutImagesInput>;
  transporters?: Maybe<TransporterUpdateManyWithoutImagesInput>;
  settings?: Maybe<SettingUpdateManyWithoutLogoInput>;
  Invoice?: Maybe<InvoiceUpdateManyWithoutPdfInput>;
  imageCategory?: Maybe<CategoryUpdateManyWithoutImageInput>;
  bannerCategory?: Maybe<CategoryUpdateManyWithoutBannerImageInput>;
  movements?: Maybe<MovementUpdateManyWithoutDocumentsInput>;
};

export type InteractionUpdateWithoutPaymentDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<StringFieldUpdateOperationsInput>;
  action?: Maybe<StringFieldUpdateOperationsInput>;
  userId?: Maybe<StringFieldUpdateOperationsInput>;
  data?: Maybe<StringFieldUpdateOperationsInput>;
  client?: Maybe<ClientUpdateOneWithoutInteractionsInput>;
  supplier?: Maybe<SupplierUpdateOneWithoutInteractionsInput>;
  movement?: Maybe<MovementUpdateOneWithoutInteractionsInput>;
  product?: Maybe<ProductUpdateOneWithoutInteractionsInput>;
  transportAgency?: Maybe<TransportAgencyUpdateOneWithoutInteractionInput>;
  warehouse?: Maybe<WarehouseUpdateOneWithoutInteractionInput>;
};

export type TransportAgencyUpdateOneWithoutTransportersInput = {
  create?: Maybe<TransportAgencyCreateWithoutTransportersInput>;
  connect?: Maybe<TransportAgencyWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<TransportAgencyUpdateWithoutTransportersDataInput>;
  upsert?: Maybe<TransportAgencyUpsertWithoutTransportersInput>;
};

export type FileUpdateWithoutTransportersDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  manufacturerId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  messageId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  supplierId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  clientId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  smallUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  transportAgencyId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  transporterId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
  movementId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  paymentId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  order?: Maybe<NullableIntFieldUpdateOperationsInput>;
  tags?: Maybe<FileUpdatetagsInput>;
  manufacturers?: Maybe<ManufacturerUpdateManyWithoutImagesInput>;
  messages?: Maybe<MessageUpdateManyWithoutImagesInput>;
  clients?: Maybe<ClientUpdateManyWithoutImagesInput>;
  suppliers?: Maybe<SupplierUpdateManyWithoutImagesInput>;
  products?: Maybe<ProductUpdateManyWithoutImagesInput>;
  transportAgencies?: Maybe<TransportAgencyUpdateManyWithoutImagesInput>;
  settings?: Maybe<SettingUpdateManyWithoutLogoInput>;
  Invoice?: Maybe<InvoiceUpdateManyWithoutPdfInput>;
  imageCategory?: Maybe<CategoryUpdateManyWithoutImageInput>;
  bannerCategory?: Maybe<CategoryUpdateManyWithoutBannerImageInput>;
  movements?: Maybe<MovementUpdateManyWithoutDocumentsInput>;
  payments?: Maybe<PaymentUpdateManyWithoutDocumentsInput>;
};

export type TransportUpdateWithoutTransporterDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  arrivalDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  arrivalPoint?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  price?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  movement?: Maybe<MovementUpdateOneWithoutTransportsInput>;
  transportAgency?: Maybe<TransportAgencyUpdateOneWithoutTransportsInput>;
};

export type InventoryUpdateWithoutBatchDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  storageNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isListed?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  listPrice?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  supplier?: Maybe<SupplierUpdateOneWithoutInventoriesInput>;
  product?: Maybe<ProductUpdateOneRequiredWithoutInventoriesInput>;
  warehouse?: Maybe<WarehouseUpdateOneWithoutInventoriesInput>;
  movements?: Maybe<MovementUpdateManyWithoutInventoryInput>;
  reservations?: Maybe<ReservationUpdateManyWithoutInventoryInput>;
  client?: Maybe<ClientUpdateOneWithoutInventoriesInput>;
};

export type MovementUpdateWithoutBatchDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  date?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  status?: Maybe<NullableEnumMovementStatusFieldUpdateOperationsInput>;
  movementId?: Maybe<IntFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  sendMail?: Maybe<BoolFieldUpdateOperationsInput>;
  storageNumber?: Maybe<NullableStringFieldUpdateOperationsInput>;
  type?: Maybe<EnumMovementTypeFieldUpdateOperationsInput>;
  unitPrice?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  invoiceId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<MovementUpdatetagsInput>;
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
  documents?: Maybe<FileUpdateManyWithoutMovementsInput>;
  payments?: Maybe<PaymentUpdateManyWithoutMovementInput>;
  consumablesMovements?: Maybe<MovementUpdateManyWithoutConsumedFromInput>;
  consumedFrom?: Maybe<MovementUpdateOneWithoutConsumablesMovementsInput>;
};

export type CategoryUpdateWithoutCategoryDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
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

export type TransportAgencyUpdateWithoutTransportsDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<TransportAgencyUpdatetagsInput>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutTransportAgencyInput>;
  images?: Maybe<FileUpdateManyWithoutTransportAgenciesInput>;
  transporters?: Maybe<TransporterUpdateManyWithoutTransportAgencyInput>;
  address?: Maybe<AddressUpdateOneWithoutTransportAgencyAddressInput>;
  billingAddress?: Maybe<AddressUpdateOneWithoutTransportAgencyBillingAddressInput>;
  payments?: Maybe<PaymentUpdateManyWithoutTransportAgencyInput>;
  Address?: Maybe<AddressUpdateOneWithoutTransportAgencyInput>;
  Interaction?: Maybe<InteractionUpdateManyWithoutTransportAgencyInput>;
};

export type TransportAgencyUpsertWithoutTransportsInput = {
  update: TransportAgencyUpdateWithoutTransportsDataInput;
  create: TransportAgencyCreateWithoutTransportsInput;
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
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  mobilePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mobile?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phonePrefix?: Maybe<NullableIntFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  tags?: Maybe<TransportAgencyUpdatetagsInput>;
  contactPersons?: Maybe<ContactPersonUpdateManyWithoutTransportAgencyInput>;
  images?: Maybe<FileUpdateManyWithoutTransportAgenciesInput>;
  transports?: Maybe<TransportUpdateManyWithoutTransportAgencyInput>;
  address?: Maybe<AddressUpdateOneWithoutTransportAgencyAddressInput>;
  billingAddress?: Maybe<AddressUpdateOneWithoutTransportAgencyBillingAddressInput>;
  payments?: Maybe<PaymentUpdateManyWithoutTransportAgencyInput>;
  Address?: Maybe<AddressUpdateOneWithoutTransportAgencyInput>;
  Interaction?: Maybe<InteractionUpdateManyWithoutTransportAgencyInput>;
};

export type TransportAgencyUpsertWithoutTransportersInput = {
  update: TransportAgencyUpdateWithoutTransportersDataInput;
  create: TransportAgencyCreateWithoutTransportersInput;
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
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  productId?: Maybe<IntFieldUpdateOperationsInput>;
  ASIN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  EAN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  ISBN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  UPC?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  material?: Maybe<NullableStringFieldUpdateOperationsInput>;
  color?: Maybe<NullableStringFieldUpdateOperationsInput>;
  weight?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isListed?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  quantity?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  tags?: Maybe<ProductUpdatetagsInput>;
  dimensions?: Maybe<DimensionUpdateOneWithoutProductInput>;
  batches?: Maybe<BatchUpdateManyWithoutProductInput>;
  images?: Maybe<FileUpdateManyWithoutProductsInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutProductInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutProductInput>;
  movements?: Maybe<MovementUpdateManyWithoutProductInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutProductInput>;
  units?: Maybe<UnitUpdateManyWithoutProductInput>;
  taxRates?: Maybe<TaxRateUpdateManyWithoutProductInput>;
  variants?: Maybe<ProductUpdateManyWithoutVariantProductInput>;
  variantProduct?: Maybe<ProductUpdateManyWithoutVariantsInput>;
  categories?: Maybe<CategoryUpdateManyWithoutProductsInput>;
  consumables?: Maybe<ConsumableUpdateManyWithoutConsumerInput>;
  consumers?: Maybe<ConsumableUpdateManyWithoutProductInput>;
};

export type ProductUpdateWithoutCategoriesDataInput = {
  tenantId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  deleted?: Maybe<BoolFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  productId?: Maybe<IntFieldUpdateOperationsInput>;
  ASIN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  EAN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  ISBN?: Maybe<NullableStringFieldUpdateOperationsInput>;
  UPC?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  material?: Maybe<NullableStringFieldUpdateOperationsInput>;
  color?: Maybe<NullableStringFieldUpdateOperationsInput>;
  weight?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  source?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isListed?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  notes?: Maybe<NullableStringFieldUpdateOperationsInput>;
  quantity?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  tags?: Maybe<ProductUpdatetagsInput>;
  dimensions?: Maybe<DimensionUpdateOneWithoutProductInput>;
  manufacturer?: Maybe<ManufacturerUpdateOneWithoutProductsInput>;
  batches?: Maybe<BatchUpdateManyWithoutProductInput>;
  images?: Maybe<FileUpdateManyWithoutProductsInput>;
  interactions?: Maybe<InteractionUpdateManyWithoutProductInput>;
  inventories?: Maybe<InventoryUpdateManyWithoutProductInput>;
  movements?: Maybe<MovementUpdateManyWithoutProductInput>;
  notifications?: Maybe<NotificationUpdateManyWithoutProductInput>;
  units?: Maybe<UnitUpdateManyWithoutProductInput>;
  taxRates?: Maybe<TaxRateUpdateManyWithoutProductInput>;
  variants?: Maybe<ProductUpdateManyWithoutVariantProductInput>;
  variantProduct?: Maybe<ProductUpdateManyWithoutVariantsInput>;
  consumables?: Maybe<ConsumableUpdateManyWithoutConsumerInput>;
  consumers?: Maybe<ConsumableUpdateManyWithoutProductInput>;
};

export type Query = {
  me?: Maybe<User>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
  userCount?: Maybe<Scalars['Int']>;
  permissions?: Maybe<Array<Maybe<Permission>>>;
  channels: Array<Channel>;
  messages: Array<Message>;
  client?: Maybe<Client>;
  clients: Array<Client>;
  clientCount?: Maybe<Scalars['Int']>;
  batches: Array<Batch>;
  inventory?: Maybe<Inventory>;
  inventories: Array<Inventory>;
  inventoryCount?: Maybe<Scalars['Int']>;
  supplierInventories?: Maybe<Array<Maybe<Inventory>>>;
  supplierInventoryCount?: Maybe<Scalars['Int']>;
  invoices: Array<Invoice>;
  transporters: Array<Transporter>;
  warehouse?: Maybe<Warehouse>;
  warehouses: Array<Warehouse>;
  transportAgencies: Array<TransportAgency>;
  transportAgency?: Maybe<TransportAgency>;
  transportAgencyCount?: Maybe<Scalars['Int']>;
  warehouseCount?: Maybe<Scalars['Int']>;
  movement?: Maybe<Movement>;
  movements: Array<Movement>;
  movementCount?: Maybe<Scalars['Int']>;
  clientMovements?: Maybe<Array<Maybe<Movement>>>;
  clientMovementCount?: Maybe<Scalars['Int']>;
  supplierMovements?: Maybe<Array<Maybe<Movement>>>;
  supplierMovementCount?: Maybe<Scalars['Int']>;
  notifications?: Maybe<Array<Maybe<Notification>>>;
  taxRate?: Maybe<TaxRate>;
  taxRates: Array<TaxRate>;
  group?: Maybe<Group>;
  groups: Array<Group>;
  bankAccounts: Array<BankAccount>;
  payment?: Maybe<Payment>;
  payments: Array<Payment>;
  paymentCount?: Maybe<Scalars['Int']>;
  publicPayment?: Maybe<PublicPayment>;
  product?: Maybe<Product>;
  products: Array<Product>;
  unit?: Maybe<Unit>;
  units: Array<Unit>;
  productCount?: Maybe<Scalars['Int']>;
  listedProduct?: Maybe<ListedProduct>;
  listedProducts?: Maybe<Array<Maybe<ListedProduct>>>;
  role?: Maybe<Role>;
  roles?: Maybe<Array<Maybe<Role>>>;
  roleCount?: Maybe<Scalars['Int']>;
  presets: Array<Preset>;
  setting?: Maybe<Setting>;
  integrations: Array<Integration>;
  interactions?: Maybe<Array<Maybe<Interaction>>>;
  supplier?: Maybe<Supplier>;
  suppliers: Array<Supplier>;
  supplierCount?: Maybe<Scalars['Int']>;
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
  orderBy?: Maybe<Array<ClientOrderByInput>>;
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


export type QueryInventoriesArgs = {
  where?: Maybe<InventoryWhereInput>;
  orderBy?: Maybe<Array<InventoryOrderByInput>>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<InventoryWhereUniqueInput>;
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
  orderBy?: Maybe<Array<WarehouseOrderByInput>>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<WarehouseWhereUniqueInput>;
};


export type QueryTransportAgenciesArgs = {
  where?: Maybe<TransportAgencyWhereInput>;
  orderBy?: Maybe<Array<TransportAgencyOrderByInput>>;
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
  orderBy?: Maybe<Array<MovementOrderByInput>>;
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
  orderBy?: Maybe<Array<PaymentOrderByInput>>;
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
  orderBy?: Maybe<Array<ProductOrderByInput>>;
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
  where?: Maybe<ProductWhereInput>;
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


export type QueryIntegrationsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<IntegrationWhereUniqueInput>;
};


export type QueryInteractionsArgs = {
  where?: Maybe<InteractionWhereInput>;
};


export type QuerySupplierArgs = {
  where: SupplierWhereUniqueInput;
};


export type QuerySuppliersArgs = {
  where?: Maybe<SupplierWhereInput>;
  orderBy?: Maybe<Array<SupplierOrderByInput>>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<SupplierWhereUniqueInput>;
};


export type QuerySupplierCountArgs = {
  where?: Maybe<SupplierWhereInput>;
};

export type Mutation = {
  createOneIntegrationRequest: IntegrationRequest;
  sendSupportMessage?: Maybe<ValidationPayload>;
  createOneUser?: Maybe<ValidationPayload>;
  setPassword?: Maybe<ValidationPayload>;
  updateOneUser?: Maybe<ValidationPayload>;
  deleteOneUser?: Maybe<ValidationPayload>;
  changePassword?: Maybe<ResetPasswordPayload>;
  createOneSubscription?: Maybe<SubscriptionPayload>;
  authenticateShopifyIntegration?: Maybe<ValidationPayload>;
  createOneMessage?: Maybe<Message>;
  updateOneMessage?: Maybe<Message>;
  deleteOneMessage?: Maybe<Message>;
  createOneChannel: Channel;
  updateOneChannel?: Maybe<Channel>;
  deleteOneChannel?: Maybe<Channel>;
  _createOneClient: Client;
  updateOneClient?: Maybe<Client>;
  deleteOneClient?: Maybe<Client>;
  deleteOneContactPerson?: Maybe<ContactPerson>;
  createOneClient?: Maybe<Client>;
  importClients?: Maybe<ValidationPayload>;
  updateOneInventory?: Maybe<Inventory>;
  deleteOneInvoice?: Maybe<Invoice>;
  createOneInvoice?: Maybe<Invoice>;
  createOneTransportAgency: TransportAgency;
  updateOneTransportAgency?: Maybe<TransportAgency>;
  deleteOneTransportAgency?: Maybe<TransportAgency>;
  createOneWarehouse: Warehouse;
  updateOneWarehouse?: Maybe<Warehouse>;
  deleteOneWarehouse?: Maybe<Warehouse>;
  deleteOneTransport?: Maybe<Transport>;
  deleteOneTransporter?: Maybe<Transporter>;
  createOneOutgoingMovement?: Maybe<Movement>;
  createOneIncomingMovement?: Maybe<Movement>;
  updateOneMovement?: Maybe<Movement>;
  deleteOneMovement?: Maybe<Movement>;
  importMovements?: Maybe<ValidationPayload>;
  _createOneNotification: Notification;
  createOneNotification?: Maybe<Notification>;
  updateOneNotification?: Maybe<Notification>;
  deleteOneNotification?: Maybe<Notification>;
  createOnePayment?: Maybe<Payment>;
  updateOnePayment?: Maybe<Payment>;
  createOneCheckout?: Maybe<StripeCheckout>;
  deleteOnePayment?: Maybe<Payment>;
  createOneTaxRate: TaxRate;
  updateOneTaxRate?: Maybe<TaxRate>;
  deleteOneTaxRate?: Maybe<TaxRate>;
  createOneGroup: Group;
  updateOneGroup?: Maybe<Group>;
  deleteOneGroup?: Maybe<Group>;
  createOneUnit: Unit;
  createOneProduct?: Maybe<Product>;
  updateOneProduct?: Maybe<Product>;
  deleteOneProduct?: Maybe<Product>;
  deleteOneUnit?: Maybe<Unit>;
  deleteOneFile?: Maybe<File>;
  deleteOneConsumable?: Maybe<Consumable>;
  updateProductImages?: Maybe<Array<Maybe<File>>>;
  assignRole?: Maybe<ValidationPayload>;
  createOneRole?: Maybe<Role>;
  updateOneRole?: Maybe<ValidationPayload>;
  deleteOneRole?: Maybe<ValidationPayload>;
  createOnePreset: Preset;
  updateOnePreset?: Maybe<Preset>;
  deleteOnePreset?: Maybe<Preset>;
  _updateOneSetting?: Maybe<Setting>;
  createOneSetting: Setting;
  updateOneSetting?: Maybe<Setting>;
  activatePreset?: Maybe<ValidationPayload>;
  registerAccount?: Maybe<RegistrationPayload>;
  _createOneSupplier: Supplier;
  updateOneSupplier?: Maybe<Supplier>;
  deleteOneSupplier?: Maybe<Supplier>;
  createOneSupplier?: Maybe<Supplier>;
  importSuppliers?: Maybe<ValidationPayload>;
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
  images?: Maybe<Array<Maybe<Scalars['Upload']>>>;
  mentions?: Maybe<Array<Maybe<Scalars['String']>>>;
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
  mobilePrefix?: Maybe<Scalars['Int']>;
  website?: Maybe<Scalars['String']>;
  address?: Maybe<AddressCreateOneWithoutClientAddressInput>;
  billingAddress?: Maybe<AddressCreateOneWithoutClientBillingAddressInput>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutClientInput>;
  phone?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['String']>;
  importId?: Maybe<Scalars['ID']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  tags?: Maybe<ClientCreatetagsInput>;
};


export type MutationImportClientsArgs = {
  importClients: Array<Maybe<ClientImport>>;
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
  movementIds: Array<Maybe<Scalars['String']>>;
  notes?: Maybe<Scalars['String']>;
  tags?: Maybe<InvoiceCreatetagsInput>;
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
  amount: Scalars['Float'];
  notes?: Maybe<Scalars['String']>;
  tags?: Maybe<MovementCreatetagsInput>;
  sendMail: Scalars['Boolean'];
  clientId: Scalars['String'];
  date: Scalars['DateTime'];
  unitPrice?: Maybe<Scalars['Float']>;
  status?: Maybe<MovementStatus>;
  transports?: Maybe<TransportCreateManyWithoutMovementInput>;
  documents?: Maybe<Array<Maybe<Scalars['Upload']>>>;
  consumedFrom?: Maybe<Array<Maybe<ConsumableInput>>>;
};


export type MutationCreateOneIncomingMovementArgs = {
  amount: Scalars['Float'];
  notes?: Maybe<Scalars['String']>;
  tags?: Maybe<MovementCreatetagsInput>;
  sendMail: Scalars['Boolean'];
  supplierId: Scalars['ID'];
  date: Scalars['DateTime'];
  productId: Scalars['ID'];
  batchNumber?: Maybe<Scalars['String']>;
  unitPrice?: Maybe<Scalars['Float']>;
  bestBefore?: Maybe<Scalars['DateTime']>;
  status?: Maybe<MovementStatus>;
  transports?: Maybe<TransportCreateManyWithoutMovementInput>;
  documents?: Maybe<Array<Maybe<Scalars['Upload']>>>;
  warehouseId?: Maybe<Scalars['ID']>;
  consumedFrom?: Maybe<Array<Maybe<ConsumableInput>>>;
};


export type MutationUpdateOneMovementArgs = {
  id: Scalars['ID'];
  amount?: Maybe<Scalars['Float']>;
  notes?: Maybe<Scalars['String']>;
  tags?: Maybe<MovementUpdatetagsInput>;
  sendMail?: Maybe<Scalars['Boolean']>;
  date?: Maybe<Scalars['DateTime']>;
  unitPrice?: Maybe<Scalars['Float']>;
  transports?: Maybe<TransportUpdateManyWithoutMovementInput>;
  documents?: Maybe<Array<Maybe<Scalars['Upload']>>>;
  status?: Maybe<MovementStatus>;
};


export type MutationDeleteOneMovementArgs = {
  id: Scalars['ID'];
};


export type MutationImportMovementsArgs = {
  importMovements: Array<Maybe<MovementImport>>;
};


export type Mutation_CreateOneNotificationArgs = {
  data: NotificationCreateInput;
};


export type MutationCreateOneNotificationArgs = {
  amount: Scalars['Float'];
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
  tags?: Maybe<PaymentCreatetagsInput>;
  recipient?: Maybe<Scalars['String']>;
  supplierId?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['String']>;
  transportAgencyId?: Maybe<Scalars['String']>;
  group?: Maybe<GroupCreateOneWithoutPaymentsInput>;
  taxRate?: Maybe<TaxRateCreateOneWithoutPaymentsInput>;
  status: PaymentStatus;
  documents?: Maybe<Array<Maybe<Scalars['Upload']>>>;
  date?: Maybe<Scalars['DateTime']>;
  dueDate?: Maybe<Scalars['DateTime']>;
  withStripe: Scalars['Boolean'];
};


export type MutationUpdateOnePaymentArgs = {
  id: Scalars['String'];
  concept?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  notes?: Maybe<Scalars['String']>;
  tags?: Maybe<PaymentUpdatetagsInput>;
  group?: Maybe<GroupUpdateOneWithoutPaymentsInput>;
  taxRate?: Maybe<TaxRateUpdateOneWithoutPaymentsInput>;
  status?: Maybe<PaymentStatus>;
  documents?: Maybe<Array<Maybe<Scalars['Upload']>>>;
  date?: Maybe<Scalars['DateTime']>;
  dueDate?: Maybe<Scalars['DateTime']>;
};


export type MutationCreateOneCheckoutArgs = {
  successUrl: Scalars['String'];
  cancelUrl: Scalars['String'];
  inventories: Array<Maybe<StripeCheckoutInventory>>;
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
  quantity?: Maybe<Scalars['Float']>;
  images?: Maybe<Array<Maybe<Scalars['Upload']>>>;
  taxRates?: Maybe<TaxRateCreateManyWithoutProductInput>;
  variants?: Maybe<Array<Maybe<VariantProductInput>>>;
  isListed?: Maybe<Scalars['Boolean']>;
  consumables?: Maybe<ConsumableCreateManyWithoutConsumerInput>;
  tags?: Maybe<ProductCreatetagsInput>;
  notes?: Maybe<Scalars['String']>;
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
  quantity?: Maybe<Scalars['Float']>;
  images?: Maybe<Array<Maybe<Scalars['Upload']>>>;
  taxRates?: Maybe<TaxRateUpdateManyWithoutProductInput>;
  variants?: Maybe<Array<Maybe<VariantProductInput>>>;
  isListed?: Maybe<Scalars['Boolean']>;
  consumables?: Maybe<ConsumableUpdateManyWithoutConsumerInput>;
  tags?: Maybe<ProductUpdatetagsInput>;
  notes?: Maybe<Scalars['String']>;
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


export type MutationDeleteOneConsumableArgs = {
  where: ConsumableWhereUniqueInput;
};


export type MutationUpdateProductImagesArgs = {
  orders?: Maybe<Array<Maybe<ImageOrderInput>>>;
};


export type MutationAssignRoleArgs = {
  email: Scalars['String'];
  role: Scalars['String'];
};


export type MutationCreateOneRoleArgs = {
  name: Scalars['String'];
  description: Scalars['String'];
  permissions: Array<Maybe<Scalars['String']>>;
};


export type MutationUpdateOneRoleArgs = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['String']>>>;
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
  invoicing?: Maybe<Scalars['Boolean']>;
  defaultLanguage?: Maybe<Language>;
  name?: Maybe<Scalars['String']>;
  address?: Maybe<AddressUpdateOneWithoutAddressInput>;
  billingAddress?: Maybe<AddressUpdateOneWithoutBillingAddressInput>;
  fiscalNumber?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['Upload']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  mobilePrefix?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  packaging?: Maybe<Scalars['Boolean']>;
  lengthUnit?: Maybe<Scalars['String']>;
  weightUnit?: Maybe<Scalars['String']>;
  shopPurchasedEmail?: Maybe<Scalars['String']>;
  invoiceText?: Maybe<Scalars['String']>;
};


export type MutationActivatePresetArgs = {
  id?: Maybe<Scalars['ID']>;
  type?: Maybe<EntityType>;
};


export type MutationRegisterAccountArgs = {
  plan: AccountPlan;
  companyName: Scalars['String'];
  subDomain: Scalars['String'];
  userName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
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
  mobilePrefix?: Maybe<Scalars['Int']>;
  website?: Maybe<Scalars['String']>;
  address?: Maybe<AddressCreateOneWithoutSupplierAddressInput>;
  billingAddress?: Maybe<AddressCreateOneWithoutSupplierBillingAddressInput>;
  contactPersons?: Maybe<ContactPersonCreateManyWithoutSupplierInput>;
  phone?: Maybe<Scalars['String']>;
  phonePrefix?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['String']>;
  fiscalNumber?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  tags?: Maybe<SupplierCreatetagsInput>;
};


export type MutationImportSuppliersArgs = {
  importSuppliers: Array<Maybe<SupplierImport>>;
};

export type Create_CheckoutMutationVariables = Exact<{
  successUrl: Scalars['String'];
  cancelUrl: Scalars['String'];
  inventories: Array<StripeCheckoutInventory>;
}>;


export type Create_CheckoutMutation = { createOneCheckout?: Maybe<Pick<StripeCheckout, 'checkoutId' | 'stripeAccountId'>> };

export type Get_ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type Get_ProductsQuery = { listedProducts?: Maybe<Array<Maybe<(
    Pick<ListedProduct, 'id' | 'name' | 'slug' | 'material' | 'color' | 'weight' | 'quantity'>
    & { dimensions?: Maybe<Pick<Dimension, 'id' | 'height' | 'width' | 'depth'>>, images?: Maybe<Array<Maybe<Pick<File, 'id' | 'url'>>>> }
  )>>> };

export type Get_ProductQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type Get_ProductQuery = { listedProduct?: Maybe<(
    Pick<ListedProduct, 'id' | 'name' | 'slug' | 'weightUnit' | 'material' | 'color' | 'weight' | 'lengthUnit' | 'currencySymbol' | 'description'>
    & { dimensions?: Maybe<Pick<Dimension, 'id' | 'height' | 'width' | 'depth'>>, listedInventories?: Maybe<Array<Maybe<Pick<ListedInventory, 'id' | 'amount' | 'listPrice'>>>>, variants?: Maybe<Array<Maybe<(
      Pick<ListedProduct, 'id' | 'slug' | 'description' | 'material' | 'color' | 'weight' | 'currencySymbol'>
      & { dimensions?: Maybe<Pick<Dimension, 'id' | 'height' | 'width' | 'depth'>>, listedInventories?: Maybe<Array<Maybe<Pick<ListedInventory, 'id' | 'amount' | 'listPrice'>>>> }
    )>>>, images?: Maybe<Array<Maybe<Pick<File, 'id' | 'url'>>>> }
  )> };


export const Create_CheckoutDocument = gql`
    mutation CREATE_CHECKOUT($successUrl: String!, $cancelUrl: String!, $inventories: [StripeCheckoutInventory!]!) {
  createOneCheckout(
    successUrl: $successUrl
    cancelUrl: $cancelUrl
    inventories: $inventories
  ) {
    checkoutId
    stripeAccountId
  }
}
    `;

export function useCreate_CheckoutMutation() {
  return Urql.useMutation<Create_CheckoutMutation, Create_CheckoutMutationVariables>(Create_CheckoutDocument);
};
export const Get_ProductsDocument = gql`
    query GET_PRODUCTS {
  listedProducts {
    id
    name
    slug
    dimensions {
      id
      height
      width
      depth
    }
    material
    color
    weight
    quantity
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
export const Get_ProductDocument = gql`
    query GET_PRODUCT($slug: String!) {
  listedProduct(where: {slug: {equals: $slug}}) {
    id
    name
    slug
    weightUnit
    dimensions {
      id
      height
      width
      depth
    }
    material
    color
    weight
    listedInventories {
      id
      amount
      listPrice
    }
    variants {
      id
      slug
      description
      dimensions {
        id
        height
        width
        depth
      }
      material
      color
      weight
      currencySymbol
      listedInventories {
        id
        amount
        listPrice
      }
    }
    lengthUnit
    images {
      id
      url
    }
    currencySymbol
    description
  }
}
    `;

export function useGet_ProductQuery(options: Omit<Urql.UseQueryArgs<Get_ProductQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<Get_ProductQuery>({ query: Get_ProductDocument, ...options });
};