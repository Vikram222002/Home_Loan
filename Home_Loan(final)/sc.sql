USE [master]
GO
/****** Object:  Database [Home_Loan]    Script Date: 12-10-2022 01:05:37 ******/
CREATE DATABASE [Home_Loan]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Home_Loan', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\Home_Loan.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Home_Loan_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\Home_Loan_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [Home_Loan] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Home_Loan].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Home_Loan] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Home_Loan] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Home_Loan] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Home_Loan] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Home_Loan] SET ARITHABORT OFF 
GO
ALTER DATABASE [Home_Loan] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Home_Loan] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Home_Loan] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Home_Loan] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Home_Loan] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Home_Loan] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Home_Loan] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Home_Loan] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Home_Loan] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Home_Loan] SET  ENABLE_BROKER 
GO
ALTER DATABASE [Home_Loan] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Home_Loan] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Home_Loan] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Home_Loan] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Home_Loan] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Home_Loan] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Home_Loan] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Home_Loan] SET RECOVERY FULL 
GO
ALTER DATABASE [Home_Loan] SET  MULTI_USER 
GO
ALTER DATABASE [Home_Loan] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Home_Loan] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Home_Loan] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Home_Loan] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Home_Loan] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [Home_Loan] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'Home_Loan', N'ON'
GO
ALTER DATABASE [Home_Loan] SET QUERY_STORE = OFF
GO
USE [Home_Loan]
GO
/****** Object:  Table [dbo].[AccountDetails]    Script Date: 12-10-2022 01:05:37 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AccountDetails](
	[accountNumber] [bigint] IDENTITY(1000000001,1) NOT NULL,
	[balance] [decimal](14, 2) NULL,
	[customerId] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[accountNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AdminDetails]    Script Date: 12-10-2022 01:05:37 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AdminDetails](
	[adminId] [int] NOT NULL,
	[name] [varchar](50) NULL,
	[email] [varchar](50) NULL,
	[password] [varchar](20) NULL,
PRIMARY KEY CLUSTERED 
(
	[adminId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
UNIQUE NONCLUSTERED 
(
	[email] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CustomerDetails]    Script Date: 12-10-2022 01:05:37 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CustomerDetails](
	[customerId] [int] IDENTITY(100001,1) NOT NULL,
	[firstName] [varchar](30) NULL,
	[middleName] [varchar](30) NULL,
	[lastName] [varchar](30) NULL,
	[email] [varchar](50) NULL,
	[password] [varchar](20) NULL,
	[phoneNumber] [varchar](30) NULL,
	[dob] [datetime] NULL,
	[gender] [varchar](10) NULL,
	[nationality] [varchar](20) NULL,
	[aadharNo] [varchar](15) NULL,
	[panNo] [varchar](15) NULL,
PRIMARY KEY CLUSTERED 
(
	[customerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
UNIQUE NONCLUSTERED 
(
	[panNo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
UNIQUE NONCLUSTERED 
(
	[aadharNo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Documents]    Script Date: 12-10-2022 01:05:37 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Documents](
	[documentId] [int] IDENTITY(100001,1) NOT NULL,
	[customerId] [int] NULL,
	[panCard] [varchar](50) NULL,
	[voterId] [varchar](50) NULL,
	[salarySlip] [varchar](50) NULL,
	[lOA] [varchar](100) NULL,
	[nOCFromBuilder] [varchar](50) NULL,
	[agreementToSale] [varchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[documentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[IncomeDetails]    Script Date: 12-10-2022 01:05:37 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[IncomeDetails](
	[incomeId] [int] IDENTITY(100001,1) NOT NULL,
	[customerId] [int] NULL,
	[monthlyIncome] [decimal](18, 0) NULL,
	[typeofEmployment] [varchar](20) NULL,
	[retirementAge] [int] NULL,
	[organizationType] [varchar](50) NULL,
	[employerName] [varchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[incomeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LoanDetails]    Script Date: 12-10-2022 01:05:37 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LoanDetails](
	[applicationId] [int] IDENTITY(100001,1) NOT NULL,
	[customerId] [int] NULL,
	[propertyId] [int] NULL,
	[incomeId] [int] NULL,
	[documentId] [int] NULL,
	[tenure] [int] NULL,
	[loanAmount] [decimal](18, 0) NULL,
	[loanStatus] [varchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[applicationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PropertyDetails]    Script Date: 12-10-2022 01:05:37 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PropertyDetails](
	[propertyId] [int] IDENTITY(100001,1) NOT NULL,
	[customerId] [int] NULL,
	[propertyLocation] [varchar](50) NULL,
	[estimatedAmount] [decimal](12, 2) NULL,
	[propertyName] [varchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[propertyId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[LoanDetails] ADD  DEFAULT ('Sent for verification') FOR [loanStatus]
GO
/****** Object:  StoredProcedure [dbo].[Accounts]    Script Date: 12-10-2022 01:05:37 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Accounts]
	
AS
BEGIN
SELECT dbo.CustomerDetails.firstName, dbo.CustomerDetails.lastName, dbo.CustomerDetails.phoneNumber, dbo.AccountDetails.accountNumber, dbo.AccountDetails.balance, dbo.AccountDetails.customerId
FROM     dbo.AccountDetails INNER JOIN
                  dbo.CustomerDetails ON dbo.AccountDetails.customerId = dbo.CustomerDetails.customerId
END
GO
/****** Object:  StoredProcedure [dbo].[Applications]    Script Date: 12-10-2022 01:05:37 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
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
USE [master]
GO
ALTER DATABASE [Home_Loan] SET  READ_WRITE 
GO
