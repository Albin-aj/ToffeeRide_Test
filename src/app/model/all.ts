interface RootObject {
  swagger: string;
  info: Info;
  host: string;
  basePath: string;
  tags: Tag[];
  paths: Paths;
  definitions: Definitions;
}

interface Definitions {
  Employee: Employee;
  EmployeeDTO: Employee;
}

interface Employee {
  type: string;
  properties: Properties;
  title: string;
}

interface Properties {
  empDateOfBirth: EmpDateOfBirth;
  empDateOfJoining: EmpDateOfBirth;
  empEmailId: EmpEmailId;
  empFirstName: EmpEmailId;
  empGender: EmpGender;
  empHomeAddrCountry: EmpEmailId;
  empHomeAddrDistrict: EmpEmailId;
  empHomeAddrLine1: EmpEmailId;
  empHomeAddrLine2: EmpEmailId;
  empHomeAddrPinCode: EmpEmailId;
  empHomeAddrState: EmpEmailId;
  empHomeAddrStreet: EmpEmailId;
  empLastName: EmpEmailId;
  empPhoneNumber: EmpEmailId;
  id: EmpDateOfBirth;
}

interface EmpGender {
  type: string;
  enum: string[];
}

interface EmpEmailId {
  type: string;
}

interface EmpDateOfBirth {
  type: string;
  format: string;
}

interface Paths {
  '/api/employees': Apiemployees;
  '/api/employees/{id}': Apiemployeesid;
}

interface Apiemployeesid {
  get: Get2;
  put: Put;
  delete: Delete;
}

interface Delete {
  tags: string[];
  summary: string;
  operationId: string;
  produces: string[];
  parameters: Parameter2[];
  responses: Responses4;
  deprecated: boolean;
}

interface Responses4 {
  '200': _401;
  '204': _401;
  '401': _401;
  '403': _401;
}

interface Put {
  tags: string[];
  summary: string;
  operationId: string;
  consumes: string[];
  produces: string[];
  parameters: Parameter3[];
  responses: Responses2;
  deprecated: boolean;
}

interface Parameter3 {
  in: string;
  name: string;
  description: string;
  required: boolean;
  schema?: Items;
  type?: string;
  format?: string;
}

interface Get2 {
  tags: string[];
  summary: string;
  operationId: string;
  produces: string[];
  parameters: Parameter2[];
  responses: Responses3;
  deprecated: boolean;
}

interface Responses3 {
  '200': _2002;
  '401': _401;
  '403': _401;
  '404': _401;
}

interface Parameter2 {
  name: string;
  in: string;
  description: string;
  required: boolean;
  type: string;
  format: string;
}

interface Apiemployees {
  get: Get;
  post: Post;
}

interface Post {
  tags: string[];
  summary: string;
  operationId: string;
  consumes: string[];
  produces: string[];
  parameters: Parameter[];
  responses: Responses2;
  deprecated: boolean;
}

interface Responses2 {
  '200': _2002;
  '201': _401;
  '401': _401;
  '403': _401;
  '404': _401;
}

interface _2002 {
  description: string;
  schema: Items;
}

interface Parameter {
  in: string;
  name: string;
  description: string;
  required: boolean;
  schema: Items;
}

interface Get {
  tags: string[];
  summary: string;
  operationId: string;
  produces: string[];
  responses: Responses;
  deprecated: boolean;
}

interface Responses {
  '200': _200;
  '401': _401;
  '403': _401;
  '404': _401;
}

interface _401 {
  description: string;
}

interface _200 {
  description: string;
  schema: Schema;
}

interface Schema {
  type: string;
  items: Items;
}

interface Items {
  '$ref': string;
}

interface Tag {
  name: string;
  description: string;
}

interface Info {
  description: string;
  version: string;
  title: string;
  termsOfService: string;
  contact: Contact;
  license: License;
}

interface License {
  name: string;
  url: string;
}

interface Contact {
}
