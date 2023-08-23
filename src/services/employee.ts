import { sendUnaryData, ServerUnaryCall } from "@grpc/grpc-js";
import cloneDeep from "lodash.clonedeep";

import { User } from "../@types";
import { getUsers } from "../api/user";
import { findMode } from "../helpers/math";
import { Employee, Employee_Department } from "../protos/api";
import { Empty } from "../protos/google/protobuf/empty";

const DEPT_DEFAULT_VALUE = {
  male: 0,
  female: 0,
  ageRange: "",
  ageMode: 0,
  hair: {},
  addressUser: {},
};

export const transformData = (users: User[]): Employee => {
  const summary: Record<string, Employee_Department> = {};
  const deptAgeList: Record<string, number[]> = {};

  users.forEach((user) => {
    const department = user.company.department;
    const gender = user.gender as "male" | "female";
    const age = user.age;
    const hairColor = user.hair.color;
    const addressKey = `${user.firstName}${user.lastName}`;
    const postalCode = user.address.postalCode;

    let current_dept = cloneDeep(summary[department] ?? DEPT_DEFAULT_VALUE);

    current_dept[gender] += 1;
    current_dept.hair[hairColor] = (current_dept.hair[hairColor] || 0) + 1;
    current_dept.addressUser[addressKey] = postalCode;

    if (!current_dept.ageRange) {
      current_dept.ageRange = `${age}-${age}`;
    } else {
      const [minAge, maxAge] = current_dept.ageRange.split("-");
      if (age < parseInt(minAge)) {
        current_dept.ageRange = `${age}-${maxAge}`;
      } else if (age > parseInt(maxAge)) {
        current_dept.ageRange = `${minAge}-${age}`;
      }
    }

    summary[department] = current_dept;

    deptAgeList[department] = [...(deptAgeList[department] ?? []), age];
  });

  Object.entries(deptAgeList).forEach(([department, list]) => {
    summary[department].ageMode = findMode(list);
  });

  return { department: summary };
};

export async function getEmployee(
  call: ServerUnaryCall<Empty, Employee>,
  callback: sendUnaryData<Employee>,
) {
  const { users } = await getUsers();

  callback(null, transformData(users));
}
