using Microsoft.EntityFrameworkCore;

namespace WEBAPI_With_LTIDB.Models
{
    public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext>options):base(options)
        {

        }
        public DbSet<Product>Products { get; set; }
        public DbSet<Category>Categories { get; set; }

    //this is an imaginary table which is not available in data base
    // it will catch the data coming from stored procedure
        public DbSet<ProductCatViewModel> CatWiseProducts { get; set; }
        public DbSet<Where> ProductsById { get; set; }

  }
}
