namespace WEBAPI_With_LTIDB.Models
{
    public class Product
    {
       
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public decimal Price { get; set; }
        public int CatId { get; set; }
    }
}
