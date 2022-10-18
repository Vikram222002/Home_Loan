using System.Linq;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WEBAPI_With_LTIDB.Models;

namespace WEBAPI_With_LTIDB.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly AppDbContext _context;

        public CategoryController(AppDbContext context)
        {
            _context = context;
        }

        public ActionResult Get()
        {
            var data = _context.Categories.ToList();
            return Ok(data);
        }
        [HttpGet("{id}")]
        public ActionResult get(int id)
        {
            var data = _context.Categories.FirstOrDefault(p => p.CatId == id);
            return Ok(data);
        }

        [HttpPost]
        public ActionResult post(Category newproduct)
        {
            if (ModelState.IsValid)
            {
                _context.Categories.Add(newproduct);
                _context.SaveChanges();
                return Ok();
            }
            else
                return BadRequest();
        }

        [HttpPut("{id}")]
        public ActionResult put(int? id, Category modifiedcat)
        {
            if (id == null)
                return NotFound();
            else
            {// select productId,productname,price  from products where productid=id
                var data = _context.Categories.FirstOrDefault(p => p.CatId == id);



                data.CatId = modifiedcat.CatId;
                data.CatName = modifiedcat.CatName;

                _context.SaveChanges();



                return Ok();




            }
        }

        [HttpDelete("{id}")]
        public ActionResult delete(int? id)
        {
            var data = _context.Categories.FirstOrDefault(p => p.CatId == id);

            if (data == null)
            {
                return NotFound();
            }
            else
            {

                _context.Categories.Remove(data);
                _context.SaveChanges();
                return Ok();
            }

        }
    }
}
