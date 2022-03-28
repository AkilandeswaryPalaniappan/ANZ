USE [InstitutionalPricing]
GO

/****** Object:  Table [dbo].[Proposals]    Script Date: 27/03/2022 6:44:01 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Proposals](
	[proposalName] [nvarchar](200) NOT NULL,
	[customerGrpName] [nvarchar](200) NULL,
	[date] [date] NULL,
	[description] [nvarchar](200) NULL,
	[status] [nvarchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[proposalName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO



USE [InstitutionalPricing]
GO

/****** Object:  Table [dbo].[Facilities]    Script Date: 27/03/2022 6:44:25 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Facilities](
	[proposalName] [nvarchar](200) NOT NULL,
	[facilityName] [nvarchar](200) NULL,
	[bookingCountry] [nvarchar](50) NULL,
	[currency] [nvarchar](50) NULL,
	[startDate] [date] NULL,
	[maturityDate] [date] NULL,
	[limit] [int] NULL
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Facilities]  WITH CHECK ADD FOREIGN KEY([proposalName])
REFERENCES [dbo].[Proposals] ([proposalName])
GO


