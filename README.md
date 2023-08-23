# 7 Solution Assignment Test - 2
The repository is for application purposes only. It is not related to any actual implementation.

## Installation

**1.** Install package dependencies:

```sh
npm install
```


## Starting the application

**1.** Run the server by running the following command:

```sh
npm start
```

**2.** Connect gRPC Client to [localhost:5000](localhost:5000) to use the API.

> Tip: press `control + c` to stop the gRPC server.

> Can use Postman to connect to the gRPC server. (You can see the steps in the next section).


## Connect to gRPC server with Postman

**1.** In Postman, select **New > gRPC** to open a request in a new tab

![image](https://github.com/nuipawarit/7-solutions-assignment-api-data-transformation/assets/13058281/163af5e7-43f5-4cf7-94c9-7cd36dc393d9)

**2.** Select **Enter Server** URL and enter `localhost:5000`

**3.** Select **Server Definition**. Under **Import a .proto file** section, select proto file (`api.proto`) from project root directory.

![image](https://github.com/nuipawarit/7-solutions-assignment-api-data-transformation/assets/13058281/b0abfb1b-b3d2-4cfd-98ab-4038e9b7c629)

**4.** Press the **Next** button and then press the **Import as API** button to finish importing the Server Definition.

![image](https://github.com/nuipawarit/7-solutions-assignment-api-data-transformation/assets/13058281/30a61a90-4a32-4ab5-8960-af875c7d01a4)

**5.** Invoke `EmployeeService / GetEmployee` to view the Response.

![image](https://github.com/nuipawarit/7-solutions-assignment-api-data-transformation/assets/13058281/44297524-3042-4f66-9764-b91e7fc21957)


## Testing

**1.** Run the test by running the following command:

```sh
npm run test
```


## Technology Stack
* **Node.js 16.20.0** as JavaScript runtime environment
* **TypeScript** as main programming language.
* **grpc-js** as RPC framework
* **axios** as HTTP Client
