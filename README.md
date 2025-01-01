# GetVisitorsCount

This Node.js application is a serverless HTTP trigger within Azure Functions, designed to read and update the visitor count for a website. It incorporates the Jest framework for test-driven development (TDD).

## Setup Instructions

### 1. Clone the Project
Clone the repository by running the following command:
```
git clone https://github.com/StanSm789/GetVisitorsCount.git
```

### 2. Configure Local Settings
Create a `local.settings.json` file in the root directory. This file should contain the variables required to establish a connection with Cosmos DB. Below is an example of the local.settings.json content:
```
{
    "IsEncrypted": false,
    "Values": {
      "AzureWebJobsStorage": "",
      "FUNCTIONS_WORKER_RUNTIME": "node",
      "ACCOUNT": "",
      "ACCOUNT_KEY": "",
      "TABLE_NAME": "",
      "PARTITION_KEY": "",
      "ROW_KEY": ""
    },
    "Host": {
      "LocalHttpPort": 7071,
      "CORS": "*"
    }
  }
```

### 3. Install Dependencies
Restore the Node.js modules by running the following command in the root directory:
```
npm install
```

### 4. Start the Application
Start the application by running the following command in the root directory:
```
func start
```

### 5. Run Tests
Execute the Jest tests using the following command:
```
npm test
```
