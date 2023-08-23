import {
  sendUnaryData,
  Server,
  ServerCredentials,
  ServerUnaryCall,
} from "@grpc/grpc-js";

import { Employee } from "./protos/api";
import {
  IEmployeeService,
  employeeServiceDefinition,
} from "./protos/api.grpc-server";
import { Empty } from "./protos/google/protobuf/empty";

const PORT = 5000;

const employee: Employee = {
  department: {
    Marketing: {
      male: 1, // ---> Male Summary
      female: 1, // ---> Femlae Summary
      ageRange: "XX-XX", // ---> Range
      ageMode: 1, // ---> Mode ฐานนิยม
      hair: {
        // ---> "Color": Color Summary
        Black: 1,
        Blond: 1,
        Chestnut: 1,
        Brown: 1,
      },
      addressUser: {
        // ---> "firstNamelastName": postalCode (address)
        TerryMedhurst: "XXXXX",
      },
    },
  },
};

function getEmployee(
  call: ServerUnaryCall<Empty, Employee>,
  callback: sendUnaryData<Employee>,
) {
  callback(null, employee);
}

const server = new Server();

server.addService(employeeServiceDefinition, {
  getEmployee,
} as IEmployeeService);
server.bindAsync(
  `0.0.0.0:${PORT}`,
  ServerCredentials.createInsecure(),
  (err: Error | null, port: number) => {
    if (err) {
      console.error(`Server error: ${err.message}`);
    } else {
      console.log(`Server bound on port: ${port}`);
      server.start();
    }
  },
);
