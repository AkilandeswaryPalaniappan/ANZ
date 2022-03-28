USE [InstitutionalPricing]
GO

/****** Object:  StoredProcedure [dbo].[GetFacilityData]    Script Date: 27/03/2022 7:12:46 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[GetFacilityData]  @proposalName nvarchar(100)
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	SELECT * from Facilities WHERE proposalName = @proposalName  
END
GO


