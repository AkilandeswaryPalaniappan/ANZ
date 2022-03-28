using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using System;

namespace InstitutionalPricing.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PricingController : ControllerBase
    {
        private readonly IConfiguration configuration;

        public PricingController(IConfiguration configuration)
        {
            this.configuration = configuration;
        }

        
        //Get the proposal details from db
        [HttpGet]
        public JsonResult GetData()
        {
            try
            {
                var sqlDataSource = configuration.GetConnectionString("PricingDataSource");
                DataTable table = new DataTable();

                using (SqlConnection conn = new SqlConnection(sqlDataSource))
                {

                    conn.Open();

                    //Execute stored procedure and retrieve the results
                    string spName = @"dbo.[GetProposalData]";
                    SqlCommand cmd = new SqlCommand(spName, conn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    SqlDataReader rdr = cmd.ExecuteReader();

                    //Load results to a table
                    table.Load(rdr);
                    rdr.Close();

                    conn.Close();
                }
                return new JsonResult(table);
            }
            catch (Exception e)
            {
                throw new Exception($"Error while retrieving proposals data:{e.Message}");
            }
        }


        //Get the facility details for a proposal from db
        [HttpGet]
        [Route("getFacilityData/{proposalName}")]
        public JsonResult GetFacilityData(string proposalName)
        {
            try
            {
                var sqlDataSource = configuration.GetConnectionString("PricingDataSource");
                DataTable table = new DataTable();

                using (SqlConnection conn = new SqlConnection(sqlDataSource))
                {

                    conn.Open();

                    //Execute stored procedure and retrieve the results
                    string spName = @"dbo.[GetFacilityData]";
                    SqlCommand cmd = new SqlCommand(spName, conn);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add(new SqlParameter("@proposalName", proposalName));
                    SqlDataReader rdr = cmd.ExecuteReader();

                    //Load results to a table
                    table.Load(rdr);
                    rdr.Close();

                    conn.Close();
                }
                return new JsonResult(table);
            }
            catch (Exception e)
            {
                throw new Exception($"Error while retrieving facilities data:{e.Message}");
            }
        }
    }
}