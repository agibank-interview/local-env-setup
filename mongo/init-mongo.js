db = db.getSiblingDB(process.env.INSURANCE_DB_NAME);

db.createUser({
  user: process.env.INSURANCE_DB_USER,
  pwd: process.env.INSURANCE_DB_PASS,
  roles: [{ role: "readWrite", db: process.env.INSURANCE_DB_NAME }]
});

db.insuranceOffer.drop();
db.createCollection('insuranceOffer');

const now = new Date();
const expiration = new Date(now);

expiration.setMonth(expiration.getMonth() + 3);
expiration.setHours(23, 59, 59, 999);

db.insuranceOffer.createIndex({
  "insuranceCode": 1,
  "eligibleStates": 1
});

db.insuranceOffer.insertMany([
  // --- GRUPO 1: AGI_LIFE ---
  {
    "_id": "550e8400-e29b-41d4-a716-446655440001",
    "insuranceCode": "AGI_LIFE_BRONZE_12M_50_60",
    "description": "Oferta Especial Vida Bronze",
    "offerPrice": 34.00,
    "discountPercentage": 15.0,
    "eligibleStates": ["SP", "RJ", "MG"],
    "expiresAt": expiration,
    "createdAt": now,
    "updatedAt": now
  },
  {
    "_id": "550e8400-e29b-41d4-a716-446655440002",
    "insuranceCode": "AGI_LIFE_SILVER_12M_60_70",
    "description": "Oferta Especial Vida Prata",
    "offerPrice": 59.50,
    "discountPercentage": 15.0,
    "eligibleStates": ["RS", "SC", "PR"],
    "expiresAt": expiration,
    "createdAt": now,
    "updatedAt": now
  },
  {
    "_id": "550e8400-e29b-41d4-a716-446655440003",
    "insuranceCode": "AGI_LIFE_GOLD_12M_70_100",
    "description": "Oferta Especial Vida Ouro",
    "offerPrice": 106.25,
    "discountPercentage": 15.0,
    "eligibleStates": ["DF", "GO", "MS"],
    "expiresAt": expiration,
    "createdAt": now,
    "updatedAt": now
  },

  // --- GRUPO 2: LOAN_PROTECTION ---
  {
    "_id": "b7d15a5a-8b9a-4e2a-9f5e-1f5e1f5e1f51",
    "insuranceCode": "LOAN_PROTECTION_BRONZE_12M_50_60",
    "description": "Oferta Especial Prestamista Bronze",
    "offerPrice": 25.50,
    "discountPercentage": 15.0,
    "eligibleStates": ["BA", "PE", "CE"],
    "expiresAt": expiration,
    "createdAt": now,
    "updatedAt": now
  },
  {
    "_id": "b7d15a5a-8b9a-4e2a-9f5e-1f5e1f5e1f52",
    "insuranceCode": "LOAN_PROTECTION_SILVER_12M_60_70",
    "description": "Oferta Especial Prestamista Prata",
    "offerPrice": 51.00,
    "discountPercentage": 15.0,
    "eligibleStates": ["RN", "PB", "AL"],
    "expiresAt": expiration,
    "createdAt": now,
    "updatedAt": now
  },
  {
    "_id": "b7d15a5a-8b9a-4e2a-9f5e-1f5e1f5e1f53",
    "insuranceCode": "LOAN_PROTECTION_GOLD_12M_70_100",
    "description": "Oferta Especial Prestamista Ouro",
    "offerPrice": 102.00,
    "discountPercentage": 15.0,
    "eligibleStates": ["SE", "MA", "PI"],
    "expiresAt": expiration,
    "createdAt": now,
    "updatedAt": now
  },

  // --- GRUPO 3: MONTHLY_LIFE ---
  {
    "_id": "c9e26b6b-9c0b-5f3b-0e6e-2e6e2e6e2e61",
    "insuranceCode": "MONTHLY_LIFE_BRONZE_1M_50_60",
    "description": "Oferta Especial Vida Mensal Bronze",
    "offerPrice": 42.50,
    "discountPercentage": 15.0,
    "eligibleStates": ["AM", "PA", "MT"],
    "expiresAt": expiration,
    "createdAt": now,
    "updatedAt": now
  },
  {
    "_id": "c9e26b6b-9c0b-5f3b-0e6e-2e6e2e6e2e62",
    "insuranceCode": "MONTHLY_LIFE_SILVER_1M_60_70",
    "description": "Oferta Especial Vida Mensal Prata",
    "offerPrice": 85.00,
    "discountPercentage": 15.0,
    "eligibleStates": ["RO", "RR", "AC"],
    "expiresAt": expiration,
    "createdAt": now,
    "updatedAt": now
  },
  {
    "_id": "c9e26b6b-9c0b-5f3b-0e6e-2e6e2e6e2e63",
    "insuranceCode": "MONTHLY_LIFE_GOLD_1M_70_100",
    "description": "Oferta Especial Vida Mensal Ouro",
    "offerPrice": 148.75,
    "discountPercentage": 15.0,
    "eligibleStates": ["AP", "TO", "ES"],
    "expiresAt": expiration,
    "createdAt": now,
    "updatedAt": now
  }
]);