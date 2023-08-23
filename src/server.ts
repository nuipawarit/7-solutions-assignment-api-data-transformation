import { Server, ServerCredentials } from "@grpc/grpc-js";

import {
  employeeServiceDefinition,
  IEmployeeService,
} from "./protos/api.grpc-server";
import { getEmployee } from "./services/employee";

const PORT = 5000;

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
