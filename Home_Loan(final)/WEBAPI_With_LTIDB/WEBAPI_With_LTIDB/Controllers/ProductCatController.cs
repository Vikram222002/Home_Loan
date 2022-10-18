using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WEBAPI_With_LTIDB.Models;

namespace WEBAPI_With_LTIDB.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class ProductCatController : ControllerBase
  {
    private readonly AppDbContext _context;

    public ProductCatController(AppDbContext context)
    {
      _context = context;

    }
    [HttpGet]
    public ActionResult get()
    {
      var data = _context.CatWiseProducts.FromSqlInterpolated($"dbo.SP_ProductsByCat");
      return Ok(data);
    }
    [HttpGet]
    [Route("GetProductByCatId/{id:int}")]
    public ActionResult GetProductByCatId(int id)
    {
      var data = _context.ProductsById.FromSqlInterpolated($"dbo.WHERE_SP_ProductsByCat {id}");
      return Ok(data);
    }
  }
}
