using System.Linq;
using System.Runtime.InteropServices.WindowsRuntime;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WEBAPI_With_LTIDB.Models;

namespace WEBAPI_With_LTIDB.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ProductController(AppDbContext context)
        {
            _context = context;
        }


        public ActionResult Get()
        {
            var data = _context.Products.ToList();
            return Ok(data);
        }
        [HttpGet("{id}")]
        public ActionResult get(int id)
        {
            var data = _context.Products.FirstOrDefault(p => p.ProductId == id);
            return Ok(data);
        }

        [HttpPost]
        public ActionResult post(Product newproduct)
        {
            if (ModelState.IsValid)
            {
                _context.Products.Add(newproduct);
                _context.SaveChanges();
                return Ok();
            }
            else
                return BadRequest();
        }

        [HttpPut("{id}")]
        public ActionResult put(int? id, Product modifiedproduct)
        {
            if (id == null)
                return NotFound();
            else
            {// select productId,productname,price  from products where productid=id
                var data = _context.Products.FirstOrDefault(p => p.ProductId == id);



                data.ProductName = modifiedproduct.ProductName;
                data.Price = modifiedproduct.Price;

                _context.SaveChanges();



                return Ok();




            }
        }

            [HttpDelete("{id}")]
        public ActionResult delete(int? id)
        {
            var data = _context.Products.FirstOrDefault(p => p.ProductId == id);

            if (data==null)
            {
                return NotFound();
            }
            else
            {
              
                _context.Products.Remove(data);
                _context.SaveChanges();
                return Ok();
            }

        }
    }
}
