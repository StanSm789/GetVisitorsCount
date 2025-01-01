const { app } = require('@azure/functions');
const { updateAndReturnNewVisitorCount } = require("../util/util");

async function GetVisitorsCount() {
    try {
        const newCount = await updateAndReturnNewVisitorCount();

        return { 
            body: newCount 
        };
    } catch (error) {
        return {
            status: 500,
            body: "An error occurred while processing the request."
        };
    }
};

app.http('GetVisitorsCount', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: GetVisitorsCount
});

module.exports = GetVisitorsCount;