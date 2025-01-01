const { TableClient, AzureNamedKeyCredential } = require("@azure/data-tables");

const updateAndReturnNewVisitorCount = async () => {
    const account = process.env["ACCOUNT"];
    const accountKey = process.env["ACCOUNT_KEY"];
    const tableName = process.env["TABLE_NAME"];
    const partitionKey = process.env["PARTITION_KEY"];
    const rowKey = process.env["ROW_KEY"];

    const credential = new AzureNamedKeyCredential(account, accountKey);
        const client = new TableClient(`https://${account}.table.cosmos.azure.com:443`, tableName, credential);

        const entity = await client.getEntity(partitionKey, rowKey);
        const newCount = entity.count + 1;

        await client.updateEntity({
            partitionKey: entity.partitionKey,
            rowKey: entity.rowKey,
            count: newCount
        });

    return newCount;
  };

  exports.updateAndReturnNewVisitorCount = updateAndReturnNewVisitorCount;