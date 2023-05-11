import { v4 as uuidv4 } from "uuid";
import {
  ServiceWithID,
  sample_data as sd,
  SubProject,
} from "./sample_data/sample_services";

const getServices = (): ServiceWithID[] => {
  return Object.keys(sd).map((serviceID) => ({
    id: serviceID,
    preview: sd[serviceID].preview,
    more_details: sd[serviceID].more_details,
    sub_projects: sd[serviceID].sub_projects,
  }));
};

const getServiceByID = (id: string): ServiceWithID | undefined => {
  if (sd[id]) {
    return {
      id,
      preview: sd[id].preview,
      more_details: sd[id].more_details,
      sub_projects: sd[id].sub_projects,
    };
  }
  return undefined;
};

export const servicesWithId = Object.entries(sd).map(([key, value]) => {
  const id = uuidv4();
  return [id, { ...value, id: value.preview.id ? value.preview.id : id }];
});

export const servicesWithIdObj = Object.fromEntries(servicesWithId);

function getObjectById(id: string) {
  return servicesWithIdObj[id];
}

export function getSubServiceById(
  serviceId: string,
  subServiceId: number,
): SubProject | undefined {
  const service = servicesWithIdObj[serviceId];
  console.log("service", service);
  if (service) {
    const subService = service.sub_projects.find(
      (s: SubProject) => s.id === subServiceId,
    );
    return subService;
  }
}

//Console Log Tests
console.log("servicesWithIdObj", servicesWithIdObj);
console.log("servicesWithId", servicesWithId);
const servicesKeys = [] as string[];

for (let key of Object.keys(servicesWithIdObj)) {
  servicesKeys.push(key);
}
let firstKey = Object.keys(servicesWithIdObj)[0];
let firstSubKey;
let test_found_object: any;

// Test Getting Services
try {
  test_found_object = getObjectById(firstKey);
  console.log("Test_Passed: found_first_object", test_found_object);
  firstSubKey = test_found_object.sub_projects[0].id;
  console.log("firstSubKey", firstSubKey);
} catch (error) {
  const err = error as Error;
  console.log(`Error: ${err.message}`);
}

// Export test_found_object variable
export { test_found_object };

try {
  let sub_service = getSubServiceById(firstKey, firstSubKey);
  console.log("Test Passed: First sub_service_found", sub_service);
} catch (error) {
  const err = error as Error;
  console.log(`Error: ${err.message}`);
}

export { getServices, getObjectById, getServiceByID, servicesKeys };
