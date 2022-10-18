create database Home_Loan;

use  Home_Loan;

create table CustomerDetails
(
[customerId] Int Identity(100001,1) primary key,
[firstName] varchar(30),
[middleName] varchar(30) null,
[lastName] varchar(30),
[email] varchar(50),
[password] varchar(20),
[phoneNumber] varchar(30),
[dob] datetime,
[gender] varchar(10),
[nationality] varchar(20),
[aadharNo] varchar(15) UNIQUE,
[panNo] varchar(15) UNIQUE
);

create table PropertyDetails
(
[propertyId] int Identity(100001,1) primary key,
[customerId] int ,
[propertyLocation] varchar(50),
[estimatedAmount] decimal(12,2),
[propertyName] varchar(50)

);


create table IncomeDetails	
(
[incomeId] int Identity(100001,1) primary key,
[customerId] int ,
[monthlyIncome] decimal,
[typeofEmployment] varchar(20),
[retirementAge] int,
[organizationType] varchar(50),
[employerName] varchar(50)
);


create table LoanDetails
(
[applicationId] int Identity(100001,1) primary key,
[customerId] int,
[propertyId] int,
[incomeId] int,
[documentId] int,
[tenure] int,
[loanAmount] decimal,
[loanStatus] varchar(50) default('Sent for verification')
);

create table Documents
(
[documentId] int Identity(100001,1) primary key,
[customerId] int ,
[panCard] varchar(50),
[voterId] varchar(50),
[salarySlip] varchar(50),
[lOA] varchar(100),
[nOCFromBuilder] varchar(50),
[agreementToSale] varchar(50)
);

create table AdminDetails
(
[adminId] int primary key,
[name] varchar(50),
[email] varchar(50) unique,
[password] varchar(20)
);


create table AccountDetails
(
[accountNumber]	bigint identity(1000000001,1) primary key,
[balance] decimal(14,2),
[customerId] int
);




CREATE PROCEDURE [dbo].[Accounts]
	
AS
BEGIN
SELECT dbo.CustomerDetails.firstName, dbo.CustomerDetails.lastName, dbo.CustomerDetails.phoneNumber, dbo.AccountDetails.accountNumber, dbo.AccountDetails.balance, dbo.AccountDetails.customerId
FROM     dbo.AccountDetails INNER JOIN
                  dbo.CustomerDetails ON dbo.AccountDetails.customerId = dbo.CustomerDetails.customerId
END
GO






CREATE PROCEDURE [dbo].[Applications] 
	
AS
BEGIN
SELECT dbo.CustomerDetails.firstName, dbo.CustomerDetails.customerId, dbo.LoanDetails.applicationId, dbo.LoanDetails.propertyId, dbo.LoanDetails.incomeId, dbo.LoanDetails.documentId, dbo.LoanDetails.tenure, dbo.LoanDetails.loanAmount, 
                  dbo.CustomerDetails.lastName, dbo.LoanDetails.loanStatus
FROM     dbo.CustomerDetails INNER JOIN
                  dbo.LoanDetails ON dbo.CustomerDetails.customerId = dbo.LoanDetails.customerId
END
GO