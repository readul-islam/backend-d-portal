const express = require('express');
const { createTestReport,  getTestReportByDoctorId, dropTestReports, getTestReport } = require('../controller/testReport.controller');

const testReportsRoute = express.Router();

testReportsRoute.post('/add-testReports', createTestReport)
testReportsRoute.get('/get-testReports', getTestReport)
testReportsRoute.get('/get-testReportsByDoctorId', getTestReportByDoctorId)
testReportsRoute.delete('/delete-report',  dropTestReports)






module.exports = testReportsRoute;