create database Home_Loan;

use  Home_Loan;



create table CustomerDetails
(
[CustomerId] Int Identity(100001,1) primary key,
[FirstName] varchar(20),
[MiddleName] varchar(20) null,
[LastName] varchar(20),
[Email] varchar(50),
[Passoword] varchar(20),
[PhoneNumber] varchar(30),
[DOB] datetime,
[Gender] varchar(10),
[Nationality] varchar(20),
[AadharNo] varchar(15) UNIQUE,
[PanNo] varchar(15) UNIQUE
);

create table PropertyDetails
(
[PropertyId] int primary key,
[CustomerId] int ,
[PropertyLocation] varchar(5),
[PropertyName] varchar(50),
[EstimatedAmount] decimal
);


create table IncomeDetails	
(
[IncomeId] int primary key,
[CustomerId] int ,
[MonthlyIncome] decimal,
[TypeofEmployment] varchar(20),
[RetirementAge] int,
[OrganizationType] varchar(50),
[EmployerName] varchar(50)
);



create table LoanDetails
(
[ApplicationId] int primary key,
[CustomerId] int,
[PropertyId] int,
[IncomeId] int,
[DocumentId] int,
[Tenure] int,
[LoanAmount] decimal,
[LoanStatus] varchar(50) default('Sent for verification')
);

create table Documents
(
[DocumentId] int primary key,
[CustomerId] int ,
[PanCard] varchar(50),
[VoterId] varchar(50),
[SalarySlip] varchar(50),
[LOA] varchar(50),
[NOCFromBuilder] varchar(50),
[AgreementToSale] varchar(50)
);

create table AdminDetails
(
[AdminId] int primary key,
[Name] varchar(50),
[Email] varchar(50) unique,
[Password] varchar(20)
);


create table AccountDetails
(
[AccountNumber]	bigint identity(1000000001,1) primary key,
[Balance] decimal(14,2),
[CustomerId] int
);